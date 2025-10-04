"use client";

import { Tag, TagGroup, TagList } from "react-aria-components";

import { cn } from "@/lib/utils";

type TagDisplayListProps = {
  tags: string[];
  className?: string;
};

export function TagDisplayList({ tags, className }: TagDisplayListProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Blog post tags" className={cn(className)}>
      <TagList className="flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
          <Tag
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className={cn(
              "cursor-pointer rounded-md bg-neutral-200 px-2 py-1 text-sm font-semibold tracking-tight text-neutral-700 outline-none transition-colors",
              "focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
            )}
          >
            {tag}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
