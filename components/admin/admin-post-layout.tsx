import React from "react";
import Image from "next/image";

import { Frontmatter } from "@/types";
import { format } from "date-fns";

import { type TableOfContents as TOCType } from "@/lib/toc";

import { AdminTagDisplayList } from "@/components/admin/admin-tag-display-list";
import { CopyBlogPostButton } from "@/components/blog/copy-blog-post-button";
import { TableOfContents } from "@/components/blog/toc";

type AdminPostLayoutProps = {
  frontmatter: Frontmatter;
  children: React.ReactNode;
  toc: TOCType;
  rawContent: string;
};

export function AdminPostLayout({
  children,
  frontmatter,
  toc,
  rawContent,
}: AdminPostLayoutProps) {
  const { title, publishedAt, updatedAt, author, tags } = frontmatter;

  return (
    <div className="lg:grid-cols-16 mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:gap-x-8">
      <article className="lg:contents">
        <header className="border-input lg:col-span-16 w-full border-b pb-12 text-center">
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
              <p className="text-sm text-neutral-600">
                Published{" "}
                <time dateTime={publishedAt}>
                  {format(new Date(publishedAt), "LLL d, yyyy")}
                </time>
              </p>
              {updatedAt && (
                <p className="text-sm text-neutral-600">
                  Updated{" "}
                  <time dateTime={updatedAt}>
                    {format(new Date(updatedAt), "LLL d, yyyy")}
                  </time>
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="mt-12 lg:col-start-1 lg:col-end-13">
          <div className="blog-post">{children}</div>
          {tags && tags.length > 0 && (
            <footer className="border-input mt-12 flex items-center gap-x-3 border-t py-6">
              <p className="text-foreground">TAGS:</p>
              <AdminTagDisplayList tags={tags} />
            </footer>
          )}
        </div>
      </article>

      <aside className="lg:col-start-14 lg:col-end-17 mt-12 hidden lg:block">
        <div className="sticky top-32 space-y-6">
          <CopyBlogPostButton content={rawContent} />
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </div>
  );
}
