"use client";

import type { KodeKloudPost } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";

import { technicalWritingSearchParams } from "@/lib/technical-writing-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { TechnicalWritingCard } from "@/components/technical-writing/technical-writing-card";
import { TechnicalWritingPagination } from "@/components/technical-writing/technical-writing-pagination";
import { TechnicalWritingSearch } from "@/components/technical-writing/technical-writing-search";
import { TechnicalWritingTags } from "@/components/technical-writing/technical-writing-tags";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type TechnicalWritingContentProps = {
  paginatedPosts: KodeKloudPost[];
  uniqueTags: string[];
  totalPages: number;
};

export function TechnicalWritingContent({
  paginatedPosts,
  uniqueTags,
  totalPages,
}: TechnicalWritingContentProps) {
  const [filters, setFilters] = useQueryStates(
    {
      query: technicalWritingSearchParams.query,
      page: technicalWritingSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );

  const handleQueryChange = (value: string) => {
    setFilters({ query: value, page: null });
  };

  return (
    <>
      <TechnicalWritingSearch
        className="mb-8 mt-12"
        value={filters.query}
        onChange={handleQueryChange}
      />
      <TechnicalWritingTags tags={uniqueTags} />
      <section>
        <AnimatePresence mode="wait" initial={false}>
          {paginatedPosts.length > 0 ? (
            <motion.ul
              key="posts-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "mt-12 grid list-none grid-cols-1 gap-8",
                "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {paginatedPosts.map((post) => (
                <li key={post.id}>
                  <TechnicalWritingCard key={post.id} post={post} />
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              key="no-posts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-12 flex flex-col items-center justify-center text-center"
            >
              <Empty className="w-full border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Icons.search className="text-muted-foreground size-8" />
                  </EmptyMedia>
                </EmptyHeader>
                <EmptyTitle className="text-2xl font-semibold">
                  No Articles Found
                </EmptyTitle>
                <EmptyDescription className="text-pretty text-base text-neutral-600">
                  Try adjusting your search or filter criteria.
                </EmptyDescription>
              </Empty>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <TechnicalWritingPagination totalPages={totalPages} />
    </>
  );
}
