"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";

export function useOssProjectsSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useQueryState(
    "query",
    parseAsString.withDefault("").withOptions({
      // 🔹 1. Update the URL on the client without a page reload.
      shallow: true,
      history: "push",
    }),
  );

  const updateQuery = (term: string | null) => {
    // 🔹 2. Manually trigger the server refetch inside a transition.
    const updateAndRefresh = async () => {
      const newSearchParams = await setQuery(term);
      startTransition(() => {
        router.push(`${pathname}?${newSearchParams.toString()}`);
      });
    };
    updateAndRefresh();
  };

  return { query, updateQuery, isPending };
}
