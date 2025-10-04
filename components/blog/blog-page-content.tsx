"use client";

import type { BlogPost } from "@/types";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPostsPagination } from "@/components/blog/blog-posts-pagination";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { Icons } from "@/components/icons";

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
            <motion.div
              key="posts-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="mt-12 space-y-6"
            >
              {paginatedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-posts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Icons.search className="text-muted-foreground size-10" />
              <h2 className="mt-4">No Posts Found</h2>
              <p className="mt-2 text-neutral-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <BlogPostsPagination totalPages={totalPages} />
    </>
  );
}
