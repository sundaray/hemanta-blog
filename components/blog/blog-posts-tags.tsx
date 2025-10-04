"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";
import { Button, type Selection as AriaSelection } from "react-aria-components";

import { blogSearchParams } from "@/lib/blog-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Tag, TagGroup, TagList } from "@/components/tag-group";

type BlogTagsProps = {
  tags: string[];
};

export function BlogPostsTags({ tags }: BlogTagsProps) {
  const [urlState, setUrlState] = useQueryStates(
    {
      tag: blogSearchParams.tag,
      page: blogSearchParams.page,
    },
    {
      shallow: false, // Refetch server component on change
      history: "push",
    },
  );
  const selectedTags = urlState.tag;
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleSelectionChange = (keys: AriaSelection) => {
    let newTags: string[];
    if (keys === "all") {
      newTags = tags;
    } else {
      newTags = Array.from(keys) as string[];
    }

    setUrlState({
      tag: newTags.length > 0 ? newTags : null,
      page: null,
    });
  };

  const checkScrollability = useCallback(() => {
    const el = scrollerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(
        hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
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
        resizeObserver.unobserve(scroller);
        scroller.removeEventListener("scroll", checkScrollability);
      };
    }
  }, [checkScrollability, tags]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (el) {
      const scrollAmount =
        el.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4 px-5">
      {/* Tag Scroller UI */}
      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => scroll("left")}
              aria-label="Scroll tags left"
              className="bg-background hover:bg-accent absolute left-0 top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl backdrop-blur-sm"
            >
              <Icons.chevronLeft className="text-muted-foreground size-6" />
            </motion.button>
          )}
        </AnimatePresence>
        <div className={cn("relative flex-1 overflow-hidden")}>
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto scroll-smooth whitespace-nowrap py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TagGroup
              aria-label="Blog post tags"
              className="w-full"
              selectionMode="multiple"
              selectedKeys={selectedTags}
              onSelectionChange={handleSelectionChange}
            >
              <TagList className="flex flex-nowrap items-center gap-3">
                {tags.map((tag) => (
                  <Tag key={tag} id={tag}>
                    {tag}
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
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
              className="bg-background hover:bg-accent absolute right-0 top-1/2 z-10 flex size-10 shrink-0 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border shadow-xl backdrop-blur-sm"
            >
              <Icons.chevronRight className="text-muted-foreground size-6" />
            </motion.button>
          )}
        </AnimatePresence>{" "}
      </div>
      {/* Display Selected Tags */}
      <AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <TagGroup
              aria-label="Selected tags"
              onRemove={(keys) => {
                const tagsToRemove = Array.from(keys) as string[];
                handleSelectionChange(
                  new Set(
                    selectedTags.filter((t) => !tagsToRemove.includes(t)),
                  ),
                );
              }}
            >
              <TagList className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <Tag
                    key={tag}
                    id={tag}
                    className="flex items-center justify-between gap-1 bg-sky-200 text-neutral-700 hover:bg-sky-200 hover:text-neutral-700"
                  >
                    {tag}
                    <Button
                      slot="remove"
                      aria-label={`Remove ${tag} filter`}
                      className="-mr-1 size-6 rounded-full transition-colors hover:bg-sky-300/40"
                    >
                      <Icons.x className="inline-block size-5" />
                    </Button>
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
