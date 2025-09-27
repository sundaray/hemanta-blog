"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Button,
  TagGroup,
  TagList,
  Tag,
  type Selection as AriaSelection,
} from "react-aria-components";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useQueryStates } from "nuqs";
import { blogSearchParams } from "@/lib/blog-search-params";

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
    <div className="space-y-4">
      {/* Tag Scroller UI */}
      <div className="relative flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll tags left"
          className={cn(
            "z-10 flex size-9 items-center justify-center rounded-full border shadow-sm transition-opacity",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          <Icons.chevronLeft className="size-6 text-muted-foreground" />
        </button>
        <div
          className={cn(
            "relative flex-1 overflow-hidden",
            "[mask-image:linear-gradient(to_right,transparent,black_1rem,black_calc(100%-1rem),rgba(0,0,0,0.5))]",
          )}
        >
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto scroll-smooth py-2 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TagGroup
              aria-label="Blog post tags"
              className="w-full"
              selectionMode="multiple"
              selectedKeys={selectedTags}
              onSelectionChange={handleSelectionChange}
            >
              <TagList className="flex items-center gap-3">
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    id={tag}
                    className={cn(
                      "cursor-pointer rounded-md border border-sky-200 bg-sky-100 px-3 py-1.5 text-sm font-semibold text-sky-700 transition-colors outline-none",
                      "hover:border-sky-700 hover:bg-sky-700 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2", // This logic still works perfectly!
                      selectedTags.includes(tag)
                        ? "border-sky-700 bg-sky-700 text-white"
                        : "border-sky-200",
                    )}
                  >
                    {tag}
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll tags right"
          className={cn(
            "z-10 flex size-9 shrink-0 items-center justify-center rounded-full border shadow-sm transition-opacity",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          <Icons.chevronRight className="size-6 text-muted-foreground" />
        </button>
      </div>
      {/* Display Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium">Filtered by:</span>
          <TagGroup
            aria-label="Selected tags"
            onRemove={(keys) => {
              const tagsToRemove = Array.from(keys) as string[];
              handleSelectionChange(
                new Set(selectedTags.filter((t) => !tagsToRemove.includes(t))),
              );
            }}
          >
            <TagList className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <Tag
                  key={tag}
                  id={tag}
                  className="flex items-center gap-1.5 rounded-md border border-sky-700 bg-sky-700 px-3 py-1.5 text-sm font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  {tag}
                  <Button
                    slot="remove"
                    aria-label={`Remove ${tag} filter`}
                    className="-mr-1 rounded-full p-0.5 transition-colors hover:bg-sky-900/50"
                  >
                    <Icons.x className="size-4" />
                  </Button>
                </Tag>
              ))}
            </TagList>
          </TagGroup>
        </div>
      )}
    </div>
  );
}
