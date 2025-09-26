import { Result, ResultAsync } from "neverthrow";
import { db } from "@/db";
import { ossProjects, type SelectOssProject } from "@/db/schema";
import { DatabaseError } from "./errors";
import {
  and,
  ilike,
  arrayOverlaps,
  SQL,
  desc,
  inArray,
  count,
  or,
} from "drizzle-orm";
import type { OssProjectsSearchParams } from "@/lib/search-params";

// 🔹 Build the query conditions
function buildConditions(
  filters: Omit<OssProjectsSearchParams, "page">,
): (SQL | undefined)[] {
  const conditions: (SQL | undefined)[] = [];

  if (filters.query) {
    conditions.push(
      or(
        ilike(ossProjects.name, `%${filters.query}%`),
        ilike(ossProjects.description, `%${filters.query}%`),
      ),
    );
  }

  if (filters.topic.length > 0) {
    conditions.push(arrayOverlaps(ossProjects.topics, filters.topic));
  }
  if (filters.language.length > 0) {
    conditions.push(inArray(ossProjects.language, filters.language));
  }

  return conditions;
}

// 🔹 Get the total count of filtered projects
export async function getOssProjectsCount(
  filters: Omit<OssProjectsSearchParams, "page">,
): Promise<Result<number, DatabaseError>> {
  const conditions = buildConditions(filters);
  const whereClause = and(
    ...conditions.filter((c): c is SQL => c !== undefined),
  );

  return ResultAsync.fromPromise(
    db
      .select({ value: count() })
      .from(ossProjects)
      .where(whereClause)
      .then((res) => res[0].value),
    (error) =>
      new DatabaseError({
        operation: "getOssProjectsCount",
        message: "Failed to count OSS projects.",
        cause: error,
      }),
  );
}

export async function getOssProjects(
  filters: OssProjectsSearchParams,
): Promise<Result<SelectOssProject[], DatabaseError>> {
  const pageSize = 36;
  const conditions = buildConditions(filters);
  const whereClause = and(
    ...conditions.filter((c): c is SQL => c !== undefined),
  );
  const offset = (filters.page - 1) * pageSize;

  return ResultAsync.fromPromise(
    db
      .select()
      .from(ossProjects)
      .where(whereClause)
      .orderBy(desc(ossProjects.createdAt))
      .limit(pageSize)
      .offset(offset),
    (error) =>
      new DatabaseError({
        operation: "getOssProjects",
        message: "Failed to fetch OSS projects.",
        cause: error,
      }),
  );
}
