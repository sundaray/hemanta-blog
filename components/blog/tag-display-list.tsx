"use client";

import { cn } from "@/lib/utils";

import { Tag, TagGroup, TagList } from "@/components/tag-group";

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
          <Tag key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
            {tag}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
