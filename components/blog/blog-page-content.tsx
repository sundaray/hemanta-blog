"use client";

import { LayoutGroup, motion, AnimatePresence } from "motion/react";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { BlogPostsPagination } from "@/components/blog/blog-posts-pagination";
import { Icons } from "@/components/icons";
import type { BlogPost } from "@/types";
import { BlogPostCard } from "@/components/blog/blog-post-card";

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
    <LayoutGroup>
      <BlogPostsTags tags={uniqueTags} />
      <section>
        <AnimatePresence mode="wait" initial={false}>
          {paginatedPosts.length > 0 ? (
            <motion.div
              layout
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
              layout
              key="no-posts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Icons.search className="size-10 text-muted-foreground" />
              <h2 className="mt-4">No Posts Found</h2>
              <p className="mt-2 text-neutral-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <BlogPostsPagination totalPages={totalPages} />
    </LayoutGroup>
  );
}
