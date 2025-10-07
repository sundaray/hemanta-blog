"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type TagScrollerProps = {
  children: ReactNode;
  className?: string;
};

export function TagScroller({ children, className }: TagScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const hasOverflow = scroller.scrollWidth > scroller.clientWidth;
      setCanScrollLeft(scroller.scrollLeft > 0);
      setCanScrollRight(
        hasOverflow &&
          scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 1,
      );
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      checkScrollability();
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(scroller);
      scroller.addEventListener("scroll", checkScrollability);

      return () => {
        if (scroller) {
          resizeObserver.unobserve(scroller);
          scroller.removeEventListener("scroll", checkScrollability);
        }
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollAmount =
        scroller.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
      scroller.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => scroll("left")}
            aria-label="Scroll tags left"
            className="bg-background hover:bg-accent focus-ring absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronLeft className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative w-full overflow-hidden",
          // Before pseudo-element for left fade
          "before:from-background before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[1] before:w-16 before:bg-gradient-to-r before:to-transparent before:transition-opacity before:content-['']",
          // After pseudo-element for right fade
          "after:from-background after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-[1] after:w-16 after:bg-gradient-to-l after:to-transparent after:transition-opacity after:content-['']",
          // Conditional opacity based on state
          canScrollLeft ? "before:opacity-100" : "before:opacity-0",
          canScrollRight ? "after:opacity-100" : "after:opacity-0",
        )}
      >
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => scroll("right")}
            aria-label="Scroll tags right"
            className="bg-background hover:bg-accent focus-ring absolute right-0 top-1/2 z-10 flex size-10 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronRight className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
