import {
  createSearchParamsCache,
  parseAsString,
  parseAsArrayOf,
  parseAsInteger,
} from "nuqs/server";

export const searchParams = {
  query: parseAsString.withDefault(""),
  "topic-query": parseAsString.withDefault(""),
  "language-query": parseAsString.withDefault(""),
  topic: parseAsArrayOf(parseAsString).withDefault([]),
  language: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const searchParamsCache = createSearchParamsCache(searchParams);

export type OssProjectsSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;

export type option4 = Pick<OssProjectsSearchParams, "page"> &
  Partial<Pick<OssProjectsSearchParams, "topic" | "language">>;

export type option = Partial<
  Pick<OssProjectsSearchParams, "page" | "topic" | "language">
>;

export type option2<T> = { [K in keyof T]: T[K] | null };

export type option3 = option2<option>;
