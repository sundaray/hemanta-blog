"use server";

import { errAsync, ResultAsync } from "neverthrow";
import { z } from "zod";
import { AddOssProjectFormSchema } from "@/lib/schema";
import type { AddOssProjectState } from "@/types";
import type { GitHubRepoData } from "@/types";

class AppError extends Error {
  constructor(
    public readonly operation: string,
    message: string,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

class NetworkError extends AppError {}
class GithubApiError extends AppError {}
class ParsingError extends AppError {}

function fetchRepoDetails(
  owner: string,
  repo: string,
): ResultAsync<GitHubRepoData, AppError> {
  const GITHUB_API_URL = `https://api.github.com/repos/${owner}/${repo}`;

  return ResultAsync.fromPromise(
    fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }),
    (error) =>
      new NetworkError("fetchRepoDetails", "The network request failed."),
  ).andThen((res) => {
    if (!res.ok) {
      return errAsync(
        new GithubApiError(
          "fetchRepoDetails",
          `API responded with status ${res.status} and status text ${res.statusText}`,
        ),
      );
    }
    return ResultAsync.fromPromise(
      res.json(),
      (error) =>
        new ParsingError("fetchRepoDetails", "Failed to parse JSON response."),
    );
  });
}

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
      formError: undefined,
      errors: z.flattenError(validatedFormData.error).fieldErrors,
    };
  }

  const path = new URL(validatedFormData.data.url).pathname.split("/");
  const owner = path[1];
  const repo = path[2];

  const result = await fetchRepoDetails(owner, repo);

  return result.match(
    (data) => {
      return {
        ok: true,
        errors: {},
        formError: undefined,
      };
    },
    (error) => {
      console.log("AddOssproject error: ", error.message);
      return {
        ok: false,
        formError: error.message,
        errors: {},
      };
    },
  );
}
