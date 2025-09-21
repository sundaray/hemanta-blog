import { ResultAsync } from "neverthrow";
import { db } from "@/db";
import { ossProjects, type SelectOssProject } from "@/db/schema";
import { DatabaseError } from "./errors";
import { eq } from "drizzle-orm";

export function getOssProjectByName(
  name: string,
): ResultAsync<SelectOssProject | undefined, DatabaseError> {
  return ResultAsync.fromPromise(
    db.query.ossProjects.findFirst({
      where: eq(ossProjects.name, name),
    }),
    (error) =>
      new DatabaseError({
        operation: "getOssProjectByName",
        message: "Failed to fetch project from the database.",
        cause: error,
      }),
  );
}
