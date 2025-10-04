"use client";

import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";
import { Button, type Selection as AriaSelection } from "react-aria-components";

import { blogSearchParams } from "@/lib/blog-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Tag, TagGroup, TagList } from "@/components/tag-group";
import { TagScroller } from "@/components/tag-scroller";

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
      shallow: false,
      history: "push",
    },
  );
  const selectedTags = urlState.tag;

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

  return (
    <div className="space-y-4">
      <TagScroller>
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
      </TagScroller>
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
