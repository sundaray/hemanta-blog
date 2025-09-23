"use client";

import {
  ossProjectsSearchParams,
  type OssProjectsFilters,
} from "@/lib/oss-projects-search-params";
import { usePathname, useRouter } from "next/navigation";
import { useQueryStates } from "nuqs";
import { useTransition } from "react";

export function useOssProjectsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [filters, setFiltersOriginal] = useQueryStates(
    ossProjectsSearchParams,
    {
      // Using shallow: true updates the URL without a full page reload.
      // We then manually trigger a server refetch with router.push().
      // This provides an instant UI update for a better user experience.
      shallow: true,
      history: "push",
    },
  );

  const setFilters = (newFilters: Partial<OssProjectsFilters> | null) => {
    const updateAndRefresh = async () => {
      const newSearchParams = await setFiltersOriginal(newFilters);
      startTransition(() => {
        router.push(`${pathname}?${newSearchParams.toString()}`);
      });
    };

    updateAndRefresh();
  };

  return { isPending, filters, setFilters } as const;
}
