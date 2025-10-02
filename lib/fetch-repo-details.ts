import type { GitHubRepoData } from "@/types";
import { errAsync, ResultAsync } from "neverthrow";

import {
  AppError,
  GithubApiError,
  NetworkError,
  ParsingError,
} from "@/lib/errors";

export function fetchRepoDetails(
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
      new NetworkError({
        operation: "fetchRepoDetails",
        message:
          "The network request failed. Please check your internet connection.",
        cause: error,
      }),
  ).andThen((res) => {
    if (!res.ok) {
      return errAsync(
        new GithubApiError({
          operation: "fetchRepoDetails",
          message: `Failed to fetch GitHub repo details. Please try again.`,
          cause: res,
        }),
      );
    }
    return ResultAsync.fromPromise(
      res.json(),
      (error) =>
        new ParsingError({
          operation: "fetchRepoDetails",
          message: "Failed to parse JSON response. Please try again.",
          cause: error,
        }),
    );
  });
}
