"use client";

import type { BlogPost } from "@/types";
import { AnimatePresence, motion } from "motion/react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPostsPagination } from "@/components/blog/blog-posts-pagination";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { Icons } from "@/components/icons";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type BlogPageContentProps = {
  paginatedPosts: BlogPost[];
  uniqueTags: string[];
  totalPages: number;
};

export function BlogPageContent({
  paginatedPosts,
  uniqueTags,
  totalPages,
}: BlogPageContentProps) {
  return (
    <>
      <BlogPostsTags tags={uniqueTags} />
      <section>
        <AnimatePresence mode="wait" initial={false}>
          {paginatedPosts.length > 0 ? (
            <motion.ul
              key="posts-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="mt-12 list-none space-y-6"
            >
              {paginatedPosts.map((post) => (
                <li key={post.slug}>
                  <BlogPostCard key={post.slug} post={post} />
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
                  No Posts Found
                </EmptyTitle>
                <EmptyDescription className="text-pretty text-base text-neutral-600">
                  Try adjusting your search or filter criteria.
                </EmptyDescription>
              </Empty>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <BlogPostsPagination totalPages={totalPages} />
    </>
  );
}
