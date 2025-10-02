import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const blogSearchParams = {
  query: parseAsString.withDefault(""),
  tag: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const blogSearchParamsCache = createSearchParamsCache(blogSearchParams);

export type BlogSearchParams = Awaited<
  ReturnType<typeof blogSearchParamsCache.parse>
>;
