"use client";

import { useState } from "react";

import { useMotionValueEvent, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

export function MainNavWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  return (
    <div
      className={cn(
        "bg-taupe-50 z-100 h-(--main-nav-height) fixed inset-x-0 top-0 w-full transition-colors duration-200",
        scrolled ? "border-taupe-200 border-b" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4 xl:px-0">{children}</div>
    </div>
  );
}
