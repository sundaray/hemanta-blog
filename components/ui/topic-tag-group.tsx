"use client";

import { Tag, TagGroup, TagList } from "@/components/tag-group";

type TopicTagGroupProps = {
  topics: string[];
};

export function TopicTagGroup({ topics }: TopicTagGroupProps) {
  if (!topics || topics.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Project Topics">
      <TagList className="flex flex-wrap gap-3">
        {topics.map((topic) => (
          <Tag key={topic} href={`/oss?topic=${encodeURIComponent(topic)}`}>
            {topic}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
