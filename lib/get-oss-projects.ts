import { db } from "@/db";
import {
  and,
  arrayOverlaps,
  count,
  desc,
  ilike,
  inArray,
  or,
  SQL,
} from "drizzle-orm";
import { ResultAsync } from "neverthrow";

import { ossProjects, type SelectOssProject } from "@/db/schema";
import type { OssProjectsSearchParams } from "@/lib/search-params";

import { DatabaseError } from "./errors";

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
export function getOssProjectsCount(
  filters: Omit<OssProjectsSearchParams, "page">,
): ResultAsync<number, DatabaseError> {
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

export function getOssProjects(
  filters: OssProjectsSearchParams,
): ResultAsync<SelectOssProject[], DatabaseError> {
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
