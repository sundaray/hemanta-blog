import { ok, ResultAsync } from "neverthrow";
import { db } from "@/db";
import { ossProjects } from "@/db/schema";
import { DatabaseError } from "./errors";
import type { GitHubRepoData } from "@/types";

export function saveRepoDetails(
  repoData: GitHubRepoData,
  repoName: string,
): ResultAsync<GitHubRepoData, DatabaseError> {
  // Map the API data keys to database column names
  const valuesToInsert = {
    name: repoName,
    url: repoData.html_url,
    description: repoData.description,
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    watchers: repoData.watchers_count,
    openIssues: repoData.open_issues_count,
    language: repoData.language,
    topics: repoData.topics,
    homepage: repoData.homepage,
  };

  return ResultAsync.fromPromise(
    db
      .insert(ossProjects)
      .values(valuesToInsert)
      .onConflictDoUpdate({ target: ossProjects.url, set: valuesToInsert }),
    (error) =>
      new DatabaseError({
        operation: "saveRepoDetails",
        message:
          "Failed to save repository details to the database. Please try again.",
        cause: error,
      }),
    // We return the original repoData on success
  ).andThen(() => ok(repoData));
}
