import Link from "next/link";

import type { BlogPost } from "@/types";

import { cn } from "@/lib/utils";

import { AnimatedArrowIcon } from "@/components/animated-arrow-icon";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article
      className={cn(
        "group relative rounded-lg hover:bg-neutral-200/40",
        "-mx-4 px-4 py-4 sm:-mx-6 sm:px-6",
        "has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:[&_a:focus-visible]:outline-none",
      )}
    >
      <p className="text-muted-foreground font-mono text-sm">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="mt-2 font-serif group-hover:text-sky-700">
        <a
          href={`/blog/${post.slug}`}
          className={cn(
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          {post.title}
        </a>
      </h2>
      {post.description && (
        <p className="mt-4 line-clamp-2 text-neutral-600">{post.description}</p>
      )}
      <div
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
        aria-hidden="true"
      >
        Read More
        <AnimatedArrowIcon
          direction="right"
          restingColor="text-sky-700/50"
          hoverColor="text-sky-700"
        />
      </div>
    </article>
  );
}
