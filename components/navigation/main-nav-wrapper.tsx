"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export function MainNavWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto h-[var(--main-nav-height)] max-w-7xl px-4 transition-all xl:px-0",
        {
          "bg-background/90 border-b backdrop-blur-sm": scrolled,
          "bg-background": !scrolled,
        },
      )}
    >
      {children}
    </div>
  );
}
