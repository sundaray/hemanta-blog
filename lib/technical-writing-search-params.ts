import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const technicalWritingSearchParams = {
  query: parseAsString.withDefault(""),
  tag: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const technicalWritingSearchParamsCache = createSearchParamsCache(
  technicalWritingSearchParams,
);

export type TechnicalWritingSearchParams = Awaited<
  ReturnType<typeof technicalWritingSearchParamsCache.parse>
>;
