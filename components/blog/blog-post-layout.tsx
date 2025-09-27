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
    <div className="mx-auto max-w-6xl px-4 py-36 lg:grid lg:grid-cols-16">
      <article className="col-start-1 col-end-17 lg:col-start-1 lg:col-end-13">
        <header>
          <DynamicBreadcrumb />
          <h1 className="mt-6 text-4xl font-bold text-balance">{title}</h1>
          <div className="mt-12 flex items-center space-x-4">
            <Image
              src="/images/blog/tusar.jpeg"
              alt={`Avatar of ${author}`}
              width={48}
              height={48}
              className="size-10 rounded-full object-cover"
            />
            <div>
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
        <hr className="mt-12" />
        <div className="blog-post mt-12">{children}</div>
        {tags && tags.length > 0 && (
          <footer className="mt-12 border-t pt-6">
            <BlogPostsTags tags={tags} />
          </footer>
        )}
      </article>

      <aside className="hidden lg:col-start-14 lg:col-end-17 lg:block">
        <div className="sticky top-24">
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </div>
  );
}
