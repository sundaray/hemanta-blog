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
            className="bg-background hover:bg-accent focus-ring absolute left-0 top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronLeft className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className={cn("relative w-full overflow-hidden")}>
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
            className="bg-background hover:bg-accent focus-ring absolute right-0 top-1/2 z-10 flex size-10 shrink-0 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronRight className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
