import { ResultAsync } from "neverthrow";
import { db } from "@/db";
import { ossProjects, type SelectOssProject } from "@/db/schema";
import { DatabaseError } from "./errors";

export function getOssProjects(): ResultAsync<
  SelectOssProject[],
  DatabaseError
> {
  return ResultAsync.fromPromise(
    db.select().from(ossProjects),
    (error) =>
      new DatabaseError({
        operation: "getOssProjects",
        message: "Failed to fetch OSS projects.",
        cause: error,
      }),
  );
}
