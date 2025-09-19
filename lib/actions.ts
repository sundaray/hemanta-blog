"use server";

import { errAsync, ResultAsync } from "neverthrow";
import { z } from "zod";
import { AddOssProjectFormSchema } from "@/lib/schema";
import type { GitHubRepoData } from "@/types";

function fetchRepoDetails(
  owner: string,
  repo: string,
): ResultAsync<GitHubRepoData, Error> {
  const GITHUB_API_URL = `https://api.github.com/repos/${owner}/${repo}`;

  return ResultAsync.fromPromise(
    fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }),
    (error) => new Error(`Network request failed: ${error}`),
  ).andThen((res) => {
    if (!res.ok) {
      return errAsync(
        new Error(`GitHub API Error: ${res.status} ${res.statusText}`),
      );
    }
    return ResultAsync.fromPromise(
      res.json(),
      (error) => new Error(`Failed to parse JSON: ${error}`),
    );
  });
}

export async function addOssProject(prevState: any, formData: FormData) {
  const data = {
    url: formData.get("url"),
  };

  // Validate form data
  const validatedFormData = AddOssProjectFormSchema.safeParse(data);

  // If form validation is unsuccessful, send back the errors object.
  if (!validatedFormData.success) {
    return {
      errors: z.flattenError(validatedFormData.error).fieldErrors,
    };
  }

  const path = new URL(validatedFormData.data.url).pathname.split("/");
  const owner = path[1];
  const repo = path[2];

  if (!owner || !repo) {
    console.error("Could not parse owner and repo from URL");
    return;
  }

  const result = await fetchRepoDetails(owner, repo);

  result.match(
    (data) => {
      console.log("✅ Full GitHub API Data Received:", data);
    },
    (error) => {
      console.error("❌ An error occurred:", error.message);
    },
  );
}
