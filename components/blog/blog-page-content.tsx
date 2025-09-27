"use client";

import { LayoutGroup } from "motion/react";
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
    <>
      <BlogPostsTags tags={uniqueTags} />
      <section className="divide-y divide-dashed divide-border">
        {paginatedPosts.length > 0 ? (
          <div>
            {paginatedPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Icons.search className="size-10 text-muted-foreground" />
            <h2 className="mt-4">No Posts Found</h2>
            <p className="mt-2 text-neutral-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </section>
      <BlogPostsPagination totalPages={totalPages} />
    </>
  );
}
