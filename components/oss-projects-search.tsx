"use client";

import { useCallback, type ChangeEvent, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

// 🔹 MODIFIED: The props have changed completely.
type OssProjectsSearchProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
};

export function OssProjectsSearch({
  className,
  value,
  onChange,
}: OssProjectsSearchProps) {
  // 🔹 REMOVED: The `useQueryStates` hook is gone. This component no longer manages state.

  const clearSearch = useCallback(() => {
    onChange("");
  }, [onChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
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
          value={value}
          placeholder="Search projects by name or description…"
          className="col-start-1 row-start-1 h-12 rounded-full bg-neutral-200/40 pl-10"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {value && (
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
    </search>
  );
}
