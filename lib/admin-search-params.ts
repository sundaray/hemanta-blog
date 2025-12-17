import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const adminSearchParams = {
  query: parseAsString.withDefault(""),
  tab: parseAsString.withDefault("add-oss"),
  page: parseAsInteger.withDefault(1),
};

export const adminSearchParamsCache =
  createSearchParamsCache(adminSearchParams);
