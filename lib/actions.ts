"use server";

import { z } from "zod";
import { AddOssProjectFormSchema } from "@/lib/schema";
import type { AddOssProjectState } from "@/types";
import { parseGitHubUrl } from "@/lib/parse-github-url";
import { fetchRepoDetails } from "@/lib/fetch-repo-details";
import { saveRepoDetails } from "@/lib/save-repo-details";
import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects";
import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import { unwrapResult } from "@/lib/utils";
import type { OssProjectsSearchParams } from "@/lib/search-params";

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

export async function getOssProjectsAction(filters: OssProjectsSearchParams) {
  "use server";
  return unwrapResult(getOssProjects(filters));
}

// 🚀 ADDITION: Server Action for getting the total count of OSS projects
export async function getOssProjectsCountAction(
  filters: Omit<OssProjectsSearchParams, "page">,
) {
  "use server";
  return unwrapResult(getOssProjectsCount(filters));
}

// 🚀 ADDITION: Server Action for getting filter options
export async function getOssProjectFilterOptionsAction(filters: {
  topicQuery: string;
  languageQuery: string;
}) {
  "use server";
  return unwrapResult(getOssProjectFilterOptions(filters));
}
