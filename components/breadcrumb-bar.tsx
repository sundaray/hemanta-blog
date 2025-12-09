"use client";

import { useState } from "react";

import { useMotionValueEvent, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export function BreadcrumbBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  return (
    <div
      className={cn(
        "fixed top-[var(--main-nav-height)] z-50 flex h-10 w-full items-center bg-neutral-100 transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
        <DynamicBreadcrumb />
      </div>
    </div>
  );
}
