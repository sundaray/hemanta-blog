"use client";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
// import { blogSearchParams } from "@/lib/blog-search-params";
import { cn } from "@/lib/utils";
// import { useQueryState } from "nuqs";
import * as React from "react";
import { useDebouncedCallback } from "use-debounce";

export function OssProjectSearch({ className }: { className?: string }) {
  //   const [search, setSearch] = useQueryState("search", blogSearchParams.search);
  //   const startTransition = React.useTransition()[1];

  const handleSearch = useDebouncedCallback((term: string) => {
    // startTransition(() => {
    //   setSearch(term);
    // });
  }, 300);

  return (
    <div className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          placeholder="Search oss projects by name..."
          className="col-start-1 row-start-1 h-12 rounded-full bg-background pl-10"
          //   defaultValue={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="size-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
