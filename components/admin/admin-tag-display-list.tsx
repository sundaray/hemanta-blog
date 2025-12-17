"use client";

import { cn } from "@/lib/utils";

import { Tag, TagGroup, TagList } from "@/components/tag-group";

type AdminTagDisplayListProps = {
  tags: string[];
  className?: string;
};

export function AdminTagDisplayList({
  tags,
  className,
}: AdminTagDisplayListProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Admin post tags" className={cn(className)}>
      <TagList className="flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
          <Tag
            key={tag}
            href={`/admin?tab=posts&tag=${encodeURIComponent(tag)}`}
          >
            {tag}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
