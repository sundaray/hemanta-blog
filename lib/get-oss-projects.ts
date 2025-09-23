import { ResultAsync } from "neverthrow";
import { db } from "@/db";
import { ossProjects, type SelectOssProject } from "@/db/schema";
import { DatabaseError } from "./errors";
import { and, ilike, arrayOverlaps, SQL, desc, inArray } from "drizzle-orm";
import type { OssProjectsFilters } from "@/lib//oss-projects-search-params";

export function getOssProjects(
  filters: OssProjectsFilters,
): ResultAsync<SelectOssProject[], DatabaseError> {
  const conditions: (SQL | undefined)[] = [];

  // 🔹 Filter by search query
  if (filters.query) {
    conditions.push(ilike(ossProjects.name, `%${filters.query}%`));
  }

  // 🔹 Filter by topics
  if (filters.topic.length > 0) {
    conditions.push(arrayOverlaps(ossProjects.topics, filters.topic));
  }

  // 🔹 Filter by languages
  if (filters.language.length > 0) {
    conditions.push(inArray(ossProjects.language, filters.language));
  }

  return ResultAsync.fromPromise(
    db
      .select()
      .from(ossProjects)
      .where(and(...conditions.filter((c): c is SQL => c !== undefined)))
      .orderBy(desc(ossProjects.createdAt)),
    (error) =>
      new DatabaseError({
        operation: "getOssProjects",
        message: "Failed to fetch OSS projects.",
        cause: error,
      }),
  );
}
