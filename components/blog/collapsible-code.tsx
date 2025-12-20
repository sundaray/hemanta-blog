"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

export function CollapsibleCode({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCollapsible, setIsCollapsible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const lineCount =
        containerRef.current.querySelectorAll(".ec-line").length;
      if (lineCount > 20) {
        setIsCollapsible(true);
      }
    }
  }, []);

  return (
    <div className={cn("group my-6", "[&_.expressive-code]:my-0")}>
      {isCollapsible && (
        <div className="mb-2 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors",
              "bg-white text-neutral-700 hover:bg-neutral-100",
              "border border-neutral-200",
            )}
            aria-label={isOpen ? "Hide code" : "Show code"}
          >
            {isOpen ? (
              <>
                <Icons.eyeOff className="size-3.5" />
                <span className="hidden sm:inline">Hide code</span>
              </>
            ) : (
              <>
                <Icons.eye className="size-3.5" />
                <span className="hidden sm:inline">Show code</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* The Code Content */}
      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isCollapsible && !isOpen
            ? "max-h-32 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]"
            : "max-h-full opacity-100",
        )}
      >
        {children}
      </div>
    </div>
  );
}
