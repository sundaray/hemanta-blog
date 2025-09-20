import { Result, ok, err } from "neverthrow";
import { GitHubUrlParsingError } from "@/lib/errors";

export function parseGitHubUrl(
  url: string,
): Result<{ repoOwner: string; repoName: string }, GitHubUrlParsingError> {
  return Result.fromThrowable(
    () => new URL(url),
    (error) =>
      new GitHubUrlParsingError({
        operation: "parseGitHubUrl",
        message: "Invalid URL format.",
        cause: error,
      }),
  )().andThen((parsedUrl: URL) => {
    const path = parsedUrl.pathname.split("/");

    if (path[1] && path[2]) {
      const repoOwner = path[1];
      const repoName = path[2];
      return ok({ repoOwner, repoName });
    }

    return err(
      new GitHubUrlParsingError({
        operation: "parseGitHubUrl",
        message: "Invalid GitHub URL. Must include an owner and repository.",
      }),
    );
  });
}
