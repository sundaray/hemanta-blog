import { blogPosts } from "@/data/kodekloud";
import type { SearchParams } from "nuqs/server";

import { technicalWritingSearchParamsCache } from "@/lib/technical-writing-search-params";

import { Icons } from "@/components/icons";
import { KodeKloudTestimonial } from "@/components/technical-writing/kodekloud-testimonial";
import { PlaygroundsSection } from "@/components/technical-writing/playgrounds-section";
import { RewrittenArticlesSection } from "@/components/technical-writing/rewritten-articles-section";
import { TechnicalWritingContent } from "@/components/technical-writing/technical-writing-content";

const POSTS_PER_PAGE = 12;

export default async function TechnicalWritingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allCategories = blogPosts.flatMap((post) => post.category);
  const uniqueTags = [...new Set(allCategories)].sort();
  const blogPostCount = blogPosts.length;
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const {
    query,
    page,
    tag: selectedTags,
  } = await technicalWritingSearchParamsCache.parse(searchParams);
  const filteredPosts = sortedPosts.filter((post) => {
    const queryMatch =
      !query || post.title.toLowerCase().includes(query.toLowerCase());
    const tagMatch =
      selectedTags.length === 0 ||
      post.category?.some((postTag) => selectedTags.includes(postTag));
    return queryMatch && tagMatch;
  });
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <h1>Technical Writing</h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-lg text-neutral-700">
          From November 2022 to September 2024, I worked as a Freelance
          Technical Writer for{" "}
          <a
            href="https://kodekloud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-700 hover:underline hover:underline-offset-4"
          >
            KodeKloud
            <Icons.arrowUpRight className="size-3.5" />
          </a>
          , where I wrote {blogPostCount} articles covering various DevOps and
          Cloud Native technologies.
        </p>
      </div>

      <TechnicalWritingContent
        paginatedPosts={paginatedPosts}
        uniqueTags={uniqueTags}
        totalPages={totalPages}
      />

      <div className="my-24 space-y-16">
        <PlaygroundsSection />
        <RewrittenArticlesSection />
        <KodeKloudTestimonial />
      </div>
    </div>
  );
}
