"use client";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useOssProjectsFilter } from "@/hooks/use-oss-projects-filter";

export function OssProjectSearch({ className }: { className?: string }) {
  const { isPending, filters, setFilters } = useOssProjectsFilter();

  const handleSearch = useDebouncedCallback((term: string) => {
    setFilters({ query: term });
  }, 300);

  return (
    <search className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          defaultValue={filters.query}
          placeholder="Search oss projects by name…"
          className="col-start-1 row-start-1 h-12 rounded-full bg-background pl-10"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          {isPending ? (
            <Icons.spinner className="size-5 animate-spin text-muted-foreground" />
          ) : (
            <Icons.search className="size-5 text-muted-foreground" />
          )}
        </div>
      </div>
    </search>
  );
}
