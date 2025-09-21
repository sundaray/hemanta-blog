"use client";

import { TagGroup, TagList, Tag } from "react-aria-components";
import { cn } from "@/lib/utils";

type TopicTagGroupProps = {
  topics: string[];
};

export function TopicTagGroup({ topics }: TopicTagGroupProps) {
  if (!topics || topics.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Project Topics">
      <TagList className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Tag
            key={topic}
            href={`/topics/${topic}`}
            className={cn(
              "cursor-pointer rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-sm font-medium text-sky-700 transition-colors outline-none",
              "hover:border-sky-700 hover:bg-sky-700 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
            )}
          >
            {topic}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
