"use client";

// import { useState } from "react";

// import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export function MainNavWrapper({ children }: { children: React.ReactNode }) {
  // const [scrolled, setScrolled] = useState(false);
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setScrolled(latest > 60);
  // });

  return (
    <div
      className={cn(
        "bg-background fixed inset-x-0 top-0 z-50 h-[var(--main-nav-height)] w-full",
        // {
        //   "bg-background/90 border-b backdrop-blur-sm": scrolled,
        //   "bg-background": !scrolled,
        // },
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4 xl:px-0">{children}</div>
    </div>
  );
}
