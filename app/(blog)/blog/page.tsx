import Link from "next/link";
import { getBlogPosts } from "@/lib/get-blog-posts";
import { getBlogPostsTags } from "@/lib/get-blog-posts-tags";
import { BlogPostsSearch } from "@/components/blog/blog-posts-search";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { ArrowLink } from "@/components/ui/arrow-link";
import type { SearchParams } from "nuqs/server";
import { blogSearchParamsCache } from "@/lib/blog-search-params";
import { BlogPostsPagination } from "@/components/blog/blog-posts-pagination";
import { Icons } from "@/components/icons";
import { BlogPageContent } from "@/components/blog/blog-page-content";

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allPosts = getBlogPosts();
  const allTagsWithCounts = getBlogPostsTags();
  const uniqueTags = allTagsWithCounts.map((tag) => tag.name); // 🔹 1. Parse 'tag' from the search params

  const {
    query,
    page,
    tag: selectedTags,
  } = await blogSearchParamsCache.parse(searchParams);

  const filteredPosts = allPosts.filter((post) => {
    // Match search query if it exists
    const queryMatch =
      !query ||
      `${post.title.toLowerCase()} ${post.description.toLowerCase()}`.includes(
        query.toLowerCase(),
      ); // Match tags if any are selected

    const tagMatch =
      selectedTags.length === 0 ||
      post.tags?.some((postTag) => selectedTags.includes(postTag));

    return queryMatch && tagMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <h1>Blog</h1>
      <p className="mt-4 text-lg">Posts on full-stack web development.</p>
      <BlogPostsSearch className="mt-12 mb-8" />
      <BlogPageContent
        paginatedPosts={paginatedPosts}
        uniqueTags={uniqueTags}
        totalPages={totalPages}
      />
    </div>
  );
}
