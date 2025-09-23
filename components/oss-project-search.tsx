"use client";

import { useTransition } from "react";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useQueryState, parseAsString, debounce } from "nuqs";

export function OssProjectSearch({ className }: { className?: string }) {
  const [isLoading, startTransition] = useTransition();
  const [query, setQuery] = useQueryState(
    "query",
    parseAsString
      .withDefault("")
      .withOptions({ startTransition, shallow: false }),
  );

  return (
    <search className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          defaultValue={query}
          placeholder="Search oss projects by name…"
          className="col-start-1 row-start-1 h-12 rounded-full bg-background pl-10"
          onChange={(e) =>
            setQuery(e.target.value, {
              limitUrlUpdates:
                e.target.value === "" ? undefined : debounce(300),
            })
          }
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="size-5 text-muted-foreground" />
        </div>
      </div>
    </search>
  );
}
