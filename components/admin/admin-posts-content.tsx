"use client";

import type { BlogPost } from "@/types";
import { AnimatePresence, motion } from "motion/react";

import { AdminPostCard } from "@/components/admin/admin-post-card";
import { Icons } from "@/components/icons";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type AdminPostsContentProps = {
  posts: BlogPost[];
};

export function AdminPostsContent({ posts }: AdminPostsContentProps) {
  return (
    <section>
      <AnimatePresence mode="wait" initial={false}>
        {posts.length > 0 ? (
          <motion.ul
            key="admin-posts-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="list-none space-y-4"
          >
            {posts.map((post) => (
              <li key={post.slug}>
                <AdminPostCard post={post} />
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
                You haven&apos;t written any admin posts yet.
              </EmptyDescription>
            </Empty>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
