import {
  createSearchParamsCache,
  parseAsString,
  parseAsArrayOf,
} from "nuqs/server";

export const ossProjectsSearchParams = {
  query: parseAsString.withDefault(""),
  "topic-query": parseAsString.withDefault(""),
  "language-query": parseAsString.withDefault(""),
  topic: parseAsArrayOf(parseAsString).withDefault([]),
  language: parseAsArrayOf(parseAsString).withDefault([]),
};

export const ossProjectsSearchParamsCache = createSearchParamsCache(
  ossProjectsSearchParams,
);

export type OssProjectsFilters = Awaited<
  ReturnType<typeof ossProjectsSearchParamsCache.parse>
>;
