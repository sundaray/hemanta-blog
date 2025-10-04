"use client";

import * as React from "react";
import { useCallback } from "react";

import { debounce, useQueryStates } from "nuqs";

import { blogSearchParams } from "@/lib/blog-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

export function BlogPostsSearch({ className }: { className?: string }) {
  const [values, setValues] = useQueryStates(
    {
      query: blogSearchParams.query,
      page: blogSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );

  const clearSearch = useCallback(() => {
    setValues({ query: null, page: null });
  }, [setValues]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <div className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          placeholder="Search posts by name or description…"
          className="col-start-1 row-start-1 h-12 rounded-full bg-neutral-200/40 pl-10"
          value={values.query}
          onChange={(e) =>
            setValues(
              { query: e.target.value, page: null }, // Reset to page 1 on new search
              {
                // 📝 Debounce the URL update by 300ms to avoid excessive updates while typing
                limitUrlUpdates:
                  e.target.value === "" ? undefined : debounce(300),
              },
            )
          }
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {values.query && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="bg-background text-muted-foreground hover:bg-accent pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-sm transition-colors"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
