"use server";

import { z } from "zod";
import { AddOssProjectFormSchema } from "@/lib/schema";
import type { AddOssProjectState } from "@/types";
import { parseGitHubUrl } from "@/lib/parse-github-url";
import { fetchRepoDetails } from "@/lib/fetch-repo-details";
import { saveRepoDetails } from "@/lib/save-repo-details";

export async function addOssProject(
  prevState: any,
  formData: FormData,
): Promise<AddOssProjectState> {
  const data = {
    url: formData.get("url"),
  };

  // Validate form data
  const validatedFormData = AddOssProjectFormSchema.safeParse(data);

  // If form validation is unsuccessful, send back the errors object.
  if (!validatedFormData.success) {
    return {
      ok: false,
      errors: z.flattenError(validatedFormData.error).fieldErrors,
    };
  }

  const parsedUrlResult = parseGitHubUrl(validatedFormData.data.url);

  if (parsedUrlResult.isErr()) {
    return {
      ok: false,
      formError: parsedUrlResult.error.message,
    };
  }

  const { repoOwner, repoName } = parsedUrlResult.value;

  // Fetch repo details and save repo details
  const result = await fetchRepoDetails(repoOwner, repoName).andThen(
    (repoData) => saveRepoDetails(repoData, repoName),
  );

  return result.match(
    (data) => {
      console.log("addOssProject() success: ", data);
      return {
        ok: true,
        formSuccess: `Successfully added the repository: ${repoName}`,
      };
    },
    (error) => {
      console.log("addOssProject() error: ", error);
      return {
        ok: false,
        formError: error.message,
      };
    },
  );
}
