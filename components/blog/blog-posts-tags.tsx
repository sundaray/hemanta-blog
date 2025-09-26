"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { TagGroup, TagList, Tag } from "react-aria-components";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

type BlogTagsProps = {
  tags: string[];
};

export function BlogPostsTags({ tags }: BlogTagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // 🔹 State to manage chevron visibility based on scroll position
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleTagSelection = (tag: string) => {
    // 📝 This is where you'll later add logic to filter posts
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // 🔹 Check if the container can be scrolled
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

  // 🔹 Effect to add event listeners and check scrollability on mount/update
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      checkScrollability(); // Initial check
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(scroller);
      scroller.addEventListener("scroll", checkScrollability);

      return () => {
        resizeObserver.unobserve(scroller);
        scroller.removeEventListener("scroll", checkScrollability);
      };
    }
  }, [checkScrollability, tags]);

  // 🔹 Function to scroll the tag list horizontally
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
      {/* 🔹 Tag Scroller UI */}
      <div className="relative flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll tags left"
          className={cn(
            "z-10 flex size-8 items-center justify-center rounded-full border bg-input shadow-sm transition-opacity",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          <Icons.chevronLeft className="size-6" />
        </button>

        {/* 🔹 Container with faded edges */}
        <div className="relative flex-1 overflow-hidden">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8"
            aria-hidden="true"
          />
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto scroll-smooth py-2 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TagGroup aria-label="Blog post tags" className="w-full">
              <TagList className="flex items-center gap-3">
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    onPress={() => handleTagSelection(tag)}
                    className={cn(
                      "cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition-colors outline-none",
                      "hover:border-sky-700 hover:bg-foreground hover:text-white focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                      selectedTags.includes(tag)
                        ? "border-sky-700 bg-sky-700 text-white"
                        : "border-border",
                    )}
                  >
                    {tag}
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
          </div>
          {/* Right fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8"
            aria-hidden="true"
          />
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll tags right"
          className={cn(
            "z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-input shadow-sm transition-opacity",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          <Icons.chevronRight className="size-6" />
        </button>
      </div>

      {/* 🔹 Display Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Filtered by:</span>
          <TagGroup aria-label="Selected tags">
            <TagList className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <Tag
                  key={tag}
                  onRemove={() => handleTagSelection(tag)}
                  className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-sm text-sky-800 outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  {tag}
                  <button
                    aria-label={`Remove ${tag} filter`}
                    className="-mr-1 rounded-full p-0.5 transition-colors hover:bg-sky-200"
                  >
                    <Icons.x className="size-3.5" />
                  </button>
                </Tag>
              ))}
            </TagList>
          </TagGroup>
        </div>
      )}
    </div>
  );
}
