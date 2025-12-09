"use client";

import { cn } from "@/lib/utils";

export function MainNavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "bg-background z-100 fixed inset-x-0 top-0 h-[var(--main-nav-height)] w-full",
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4 xl:px-0">{children}</div>
    </div>
  );
}
