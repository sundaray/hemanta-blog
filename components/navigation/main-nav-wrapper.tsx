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
        "fixed inset-x-0 top-0 z-10 mx-auto max-w-7xl bg-background px-4 transition-all",
        {
          "border-b": scrolled,
        },
      )}
    >
      {children}
    </div>
  );
}
