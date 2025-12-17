import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const adminSearchParams = {
  query: parseAsString.withDefault(""),
  tag: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const adminSearchParamsCache =
  createSearchParamsCache(adminSearchParams);

export type AdminSearchParams = Awaited<
  ReturnType<typeof adminSearchParamsCache.parse>
>;
