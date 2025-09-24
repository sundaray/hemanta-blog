"use client";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useQueryStates, parseAsString, parseAsInteger, debounce } from "nuqs";
import { useCallback } from "react";

export function OssProjectSearch({
  className,
  startTransition,
}: {
  className?: string;
  startTransition: React.TransitionStartFunction;
}) {
  const [values, setValues] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    { startTransition, shallow: false },
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
    <search className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          value={values.query}
          placeholder="Search oss projects by name…"
          className="col-start-1 row-start-1 h-12 rounded-full bg-background pl-10"
          onChange={(e) =>
            setValues(
              { query: e.target.value, page: null },
              {
                limitUrlUpdates:
                  e.target.value === "" ? undefined : debounce(300),
              },
            )
          }
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="size-5 text-muted-foreground" />
        </div>
        {values.query && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="pointer-events-auto cursor-pointer rounded border bg-background px-1.5 py-0.5 text-sm text-muted-foreground transition-colors hover:bg-accent"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </search>
  );
}
