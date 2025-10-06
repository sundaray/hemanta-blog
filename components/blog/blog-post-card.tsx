import Link from "next/link";

import type { BlogPost } from "@/types";

import { cn } from "@/lib/utils";

import { ArrowLink } from "@/components/ui/arrow-link";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article
      className={cn("relative cursor-pointer p-4 hover:bg-neutral-200/40")}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10 rounded-lg"
        aria-label={`Read more about ${post.title}`}
      />
      <p className="text-muted-foreground font-mono text-sm">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="mt-2 transition-colors group-hover:text-sky-700">
        {post.title}
      </h2>
      {post.description && (
        <p className="mt-3 line-clamp-2 text-neutral-600">{post.description}</p>
      )}
      <ArrowLink
        tabIndex={-1}
        href={`/blog/${post.slug}`}
        className="mt-4 px-0 py-0 text-sm font-semibold text-sky-700"
        aria-hidden="true"
      >
        Read More
      </ArrowLink>
    </article>
  );
}
