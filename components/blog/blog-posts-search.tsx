"use client";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";

export function BlogSearch({ className }: { className?: string }) {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          placeholder="Search postsby name or description…"
          className="col-start-1 row-start-1 h-10 rounded-full bg-background pl-10"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-3">
          <Icons.search className="size-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
