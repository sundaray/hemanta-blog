import React from "react";

import { IoInformationCircle } from "react-icons/io5";

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-input relative my-6 rounded-lg border p-4">
      <div className="absolute bottom-4 left-2 top-4 w-0.5 rounded-full bg-sky-700" />

      <div className="mb-4 flex items-center gap-x-2 pl-4">
        <IoInformationCircle className="text-muted-foreground size-5" />
        <span className="text-foreground text-sm font-semibold">Note</span>
      </div>

      <div className="pl-4 text-neutral-700 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
