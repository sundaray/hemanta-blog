import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { TableOfContents } from "@/components/blog/toc";
import { type TableOfContents as TOCType } from "@/lib/toc";
import { Frontmatter } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type BlogPostLayoutProps = {
  frontmatter: Frontmatter;
  children: React.ReactNode;
  toc: TOCType;
};

export function BlogPostLayout({
  children,
  frontmatter,
  toc,
}: BlogPostLayoutProps) {
  const { title, publishedAt, author, tags } = frontmatter;

  return (
    <div className="mx-auto max-w-6xl px-4 lg:grid lg:grid-cols-16 lg:gap-x-8">
      <article className="lg:contents">
        <header className="mx-auto border-b pb-12 text-center lg:col-span-16">
          <DynamicBreadcrumb className="mx-auto flex justify-center" />
          <h1 className="mt-6 text-balance">{title}</h1>
          <div className="mt-12 flex w-full items-center justify-center space-x-4">
            <Image
              src="/images/blog/hemanta.jpg"
              alt={`Avatar of ${author}`}
              width={48}
              height={48}
              className="size-10 rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">
                Published{" "}
                <time dateTime={publishedAt}>
                  {format(new Date(publishedAt), "LLL d, yyyy")}
                </time>
              </p>
            </div>
          </div>
        </header>

        <div className="mt-12 lg:col-start-1 lg:col-end-13">
          <div className="blog-post">{children}</div>
          {tags && tags.length > 0 && (
            <footer className="mt-12 border-t pt-6">
              <BlogPostsTags tags={tags} />
            </footer>
          )}
        </div>
      </article>

      <aside className="mt-12 hidden lg:col-start-14 lg:col-end-17 lg:block">
        <div className="sticky top-24">
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </div>
  );
}
