import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import type { BlogPost } from "@/types";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="py-12">
      <p className="font-mono text-sm text-muted-foreground">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="mt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-sky-700"
        >
          {post.title}
        </Link>
      </h2>
      {post.description && (
        <p className="mt-3 text-neutral-600">{post.description}</p>
      )}
      <ArrowLink
        href={`/blog/${post.slug}`}
        className="mt-4 px-0 py-0 text-sm font-semibold text-sky-700"
      >
        Read More
      </ArrowLink>
    </article>
  );
}
