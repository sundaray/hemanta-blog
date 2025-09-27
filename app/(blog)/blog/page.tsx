import Link from "next/link";
import { getBlogPosts } from "@/lib/get-blog-posts";
import { getBlogPostsTags } from "@/lib/get-blog-posts-tags";
import { BlogPostsSearch } from "@/components/blog/blog-posts-search";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { ArrowLink } from "@/components/ui/arrow-link";

export default function BlogPage() {
  const allPosts = getBlogPosts();
  const allTagsWithCounts = getBlogPostsTags();
  const uniqueTags = allTagsWithCounts.map((tag) => tag.name);

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <h1>Blog</h1>
      <p className="mt-4 text-lg font-semibold text-neutral-600">
        Posts on full-stack web development.
      </p>

      <BlogPostsSearch className="mt-12 mb-8" />

      <BlogPostsTags tags={uniqueTags} />

      <section className="divide-border-dashed mt-12 divide-y divide-border">
        {allPosts.map((post) => (
          <article key={post.slug} className="py-12">
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
            <p className="mt-3 text-neutral-600">{post.description}</p>
            <ArrowLink
              href={`/blog/${post.slug}`}
              className="mt-4 px-0 py-0 text-sm font-semibold text-sky-700"
            >
              Read More
            </ArrowLink>
          </article>
        ))}
      </section>
    </div>
  );
}
