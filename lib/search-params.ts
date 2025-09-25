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

export type FilterSectionState = Pick<OssProjectsSearchParams, "page"> &
  Partial<Pick<OssProjectsSearchParams, "topic" | "language">>;

export type FilterUpdatePayload = Partial<
  Pick<OssProjectsSearchParams, "page" | "topic" | "language">
>;

export type WithNullableFields<T> = { [K in keyof T]: T[K] | null };

export type NullableFilterUpdatePayload =
  WithNullableFields<FilterUpdatePayload>;
