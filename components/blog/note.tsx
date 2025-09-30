import { IoInformationCircle } from "react-icons/io5";
import React from "react";

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative my-6 rounded-lg border border-input p-4">
      <div className="absolute top-4 bottom-4 left-2 w-0.5 rounded-full bg-sky-700" />

      <div className="mb-4 flex items-center gap-x-2 pl-4">
        <IoInformationCircle className="size-5 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">Note</span>
      </div>

      <div className="pl-4 text-neutral-700 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
