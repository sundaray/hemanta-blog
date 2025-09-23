"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { parseAsString, parseAsArrayOf, useQueryStates } from "nuqs";

const sidebarSearchParams = {
  "query-topic": parseAsString.withDefault(""),
  "query-language": parseAsString.withDefault(""),
  topic: parseAsArrayOf(parseAsString).withDefault([]),
  language: parseAsArrayOf(parseAsString).withDefault([]),
};

export function useOssProjectsSidebarFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [filters, setFiltersOriginal] = useQueryStates(sidebarSearchParams, {
    // 🔹 1. Update the URL on the client without a page reload.
    shallow: true,
    history: "push",
  });

  const setSidebarFilters = (newFilters: Partial<typeof filters> | null) => {
    // 🔹 2. Manually trigger the server refetch inside a transition.
    const updateAndRefresh = async () => {
      const newSearchParams = await setFiltersOriginal(newFilters);
      startTransition(() => {
        router.push(`${pathname}?${newSearchParams.toString()}`);
      });
    };
    updateAndRefresh();
  };

  return {
    sidebarFilters: filters,
    setSidebarFilters,
    isSidebarPending: isPending,
  };
}
