"use server";

import { z } from "zod";
import { AddOssProjectFormSchema } from "@/lib/schema";
import type { AddOssProjectState } from "@/types";
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

  const path = new URL(validatedFormData.data.url).pathname.split("/");
  const owner = path[1];
  const repo = path[2];

  // Fetch repo details and save repo details
  const result = await fetchRepoDetails(owner, repo).andThen(saveRepoDetails);

  return result.match(
    (data) => {
      console.log("addOssProject() success: ", data);
      return {
        ok: true,
        formSuccess: `Successfully added the repository: ${repo}`,
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
