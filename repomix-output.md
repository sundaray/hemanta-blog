This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: app/\(posts\)/**, lambda/dist/**, public/**, **/*.svg
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
app/
  (admin)/
    access-denied/
      layout.tsx
      page.tsx
    admin/
      add-oss-project/
        page.tsx
      manage-users/
        page.tsx
      posts/
        [slug]/
          page.tsx
        function-side-effects/
          content.mdx
      admin-tabs.tsx
      layout.tsx
      page.tsx
  (auth)/
    signin/
      error/
        page.tsx
      layout.tsx
      page.tsx
  (blog)/
    blog/
      [slug]/
        page.tsx
      layout.tsx
      page.tsx
  (hire-me)/
    hire-me/
      layout.tsx
      page.tsx
  (home)/
    layout.tsx
    page.tsx
  (oss)/
    oss/
      [repo]/
        not-found.tsx
        page.tsx
      layout.tsx
      page.tsx
  (technical-writing)/
    technical-writing/
      layout.tsx
      page.tsx
  api/
    auth/
      [...lucidauth]/
        route.ts
  courses/
    layout.tsx
    page.tsx
  projects/
    layout.tsx
    page.tsx
  styles/
    blog-post.css
    globals.css
  actions.ts
  favicon.ico
  global-not-found.tsx
  layout.tsx
components/
  admin/
    admin-post-card.tsx
    admin-posts-content.tsx
    admin-posts-search.tsx
  blog/
    blog-page-content.tsx
    blog-post-card.tsx
    blog-post-layout.tsx
    blog-posts-pagination.tsx
    blog-posts-search.tsx
    blog-posts-tags.tsx
    copy-blog-post-button.tsx
    note.tsx
    tag-display-list.tsx
    toc.tsx
  forms/
    add-oss-project-form.tsx
    form-error.tsx
    form-success.tsx
  navigation/
    hire-me-button.tsx
    main-nav-wrapper.tsx
    main-nav.tsx
    mobile-nav.tsx
    nav-links.tsx
    user-account-nav-client.tsx
    user-auth-status.tsx
  technical-writing/
    kodekloud-testimonial.tsx
    playgrounds-section.tsx
    rewritten-articles-section.tsx
    technical-writing-card.tsx
    technical-writing-content.tsx
    technical-writing-pagination.tsx
    technical-writing-search.tsx
    technical-writing-tags.tsx
  ui/
    arrow-link.tsx
    badge.tsx
    breadcrumb.tsx
    button.tsx
    checkbox.tsx
    dropdown-menu.tsx
    empty.tsx
    form.tsx
    input.tsx
    label.tsx
    pagination.tsx
    scroll-area.tsx
    separator.tsx
    sheet.tsx
    sidebar.tsx
    skeleton.tsx
    tabs.tsx
    tooltip.tsx
    topic-tag-group.tsx
  admin-sidebar.tsx
  animated-arrow-icon.tsx
  breadcrumb-bar.tsx
  dynamic-breadcrumb.tsx
  footer.tsx
  icons.tsx
  oss-project-card.tsx
  oss-projects-content.tsx
  oss-projects-pagination.tsx
  oss-projects-search-results-header.tsx
  oss-projects-search.tsx
  oss-projects-sidebar.tsx
  project-card.tsx
  router-provider.tsx
  signin-with-google-form.tsx
  tag-group.tsx
  tag-scroller.tsx
config/
  navbar.ts
data/
  kodekloud.ts
db/
  index.ts
  schema.ts
drizzle/
  migrations/
    meta/
      _journal.json
      0000_snapshot.json
      0001_snapshot.json
      0002_snapshot.json
      0003_snapshot.json
      0004_snapshot.json
    0000_melodic_franklin_richards.sql
    0001_cloudy_fabian_cortez.sql
    0002_supreme_ben_parker.sql
    0003_pink_white_tiger.sql
    0004_last_doctor_spectrum.sql
hooks/
  use-copy-to-clipboard.ts
  use-mobile.ts
  use-mounted.ts
lambda/
  src/
    index.ts
  build.sh
  function.zip
  package.json
  tsconfig.json
lib/
  auth/
    callbacks.ts
    next-redirect.ts
    session.ts
  actions.ts
  admin-search-params.ts
  blog-search-params.ts
  errors.ts
  fetch-repo-details.ts
  get-admin-post-by-slug.ts
  get-admin-posts-slugs.ts
  get-admin-posts.ts
  get-blog-post-by-slug.ts
  get-blog-posts-slugs.ts
  get-blog-posts-tags.ts
  get-blog-posts.ts
  get-oss-project-by-name.ts
  get-oss-project-filters-options.ts
  get-oss-projects.ts
  icon-map.ts
  pagination.ts
  parse-github-url.ts
  rehype-expressive-code-remove-last-blank-twoslash-line-number.mjs
  save-repo-details.ts
  schema.ts
  search-params.ts
  technical-writing-search-params.ts
  toc.ts
  utils.ts
terraform/
  .terraform.lock.hcl
  main.tf
  outputs.tf
  providers.tf
  response.json
  terraform.tf
  variables.tf
types/
  index.ts
.gitignore
.prettierrc
auth.ts
components.json
drizzle.config.ts
eslint.config.mjs
mdx-components.tsx
next.config.ts
package.json
postcss.config.mjs
proxy.ts
README.md
repomix.config.json
tsconfig.json
```

# Files

## File: app/(admin)/admin/add-oss-project/page.tsx
````typescript
import { AddOssProjectForm } from "@/components/forms/add-oss-project-form";

export default function AddOssProjectPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">
        Add New OSS Project
      </h1>
      <p className="mt-4 text-pretty text-neutral-600">
        Enter a GitHub repository URL to add it to your list.
      </p>
      <AddOssProjectForm className="mt-12" />
    </div>
  );
}
````

## File: app/(admin)/admin/manage-users/page.tsx
````typescript
export default function Users() {
  return <h1 className="text-4xl font-semibold tracking-tight">Users</h1>;
}
````

## File: app/(admin)/admin/posts/[slug]/page.tsx
````typescript
import type { Metadata } from "next";

import { getAdminPostBySlug } from "@/lib/get-admin-post-by-slug";
import { getAdminPostsSlugs } from "@/lib/get-admin-posts-slugs";

import { BlogPostLayout } from "@/components/blog/blog-post-layout";

export async function generateMetadata(
  props: PageProps<"/admin/posts/[slug]">,
): Promise<Metadata> {
  try {
    const { slug } = await props.params;
    const { frontmatter } = await getAdminPostBySlug(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: frontmatter.author }],
      keywords: frontmatter.tags,
      // 🔒 Security: Ensure admin posts are never indexed
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.publishedAt,
        modifiedTime: frontmatter.updatedAt,
        authors: [frontmatter.author],
        tags: frontmatter.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata for admin post:", error);
    return {
      title: "Post Not Found",
      description: "The requested admin post could not be found.",
    };
  }
}

export async function generateStaticParams() {
  return getAdminPostsSlugs();
}

export default async function AdminPostPage(
  props: PageProps<"/admin/posts/[slug]">,
) {
  const { slug } = await props.params;
  const { frontmatter, toc, ContentComponent, rawContent } =
    await getAdminPostBySlug(slug);

  return (
    <BlogPostLayout frontmatter={frontmatter} toc={toc} rawContent={rawContent}>
      <ContentComponent />
    </BlogPostLayout>
  );
}
````

## File: app/(admin)/admin/posts/function-side-effects/content.mdx
````markdown
---
title: "What are side effects?"
description: "Learn what side effects are in functions."
author: "Hemanta Sundaray"
publishedAt: "2025-12-17"
tags: ["Programming"]
isPublished: true
---

A function has a side effect if it does something other than simply return a result. This includes, for example, the following cases:

- Modifying a variable

- Modifying a data structure in place

- Setting a field on an object

- Throwing an exception or halting with an error

- Printing to the console or reading user input

- Reading from or writing to a file

- Drawing on the screen
````

## File: app/(admin)/admin/admin-tabs.tsx
````typescript
"use client";

import { useQueryState } from "nuqs";

import { adminSearchParams } from "@/lib/admin-search-params";

import { Tabs } from "@/components/ui/tabs";

export function AdminTabs({
  children,
  // We can treat this as an initial value if needed,
  // but nuqs will hydrate from URL automatically.
  selectedTab: _initialTab,
}: {
  children: React.ReactNode;
  selectedTab: string;
}) {
  // 1. Get the current tab value directly from the URL
  const [tab, setTab] = useQueryState("tab", adminSearchParams.tab);

  return (
    <Tabs
      // 2. Use the hook's value ('tab') instead of the prop
      // If 'tab' is null (first load), fallback to 'add-oss' (defined in your search params config)
      selectedKey={tab || "add-oss"}
      onSelectionChange={(key) => setTab(key as string)}
    >
      {children}
    </Tabs>
  );
}
````

## File: app/(admin)/admin/page.tsx
````typescript
import { AdminTabs } from "@/app/(admin)/admin/admin-tabs";

import { adminSearchParamsCache } from "@/lib/admin-search-params";
import { getAdminPosts } from "@/lib/get-admin-posts";

import { AdminPostsContent } from "@/components/admin/admin-posts-content";
import { AdminPostsSearch } from "@/components/admin/admin-posts-search";
import { AddOssProjectForm } from "@/components/forms/add-oss-project-form";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@/components/ui/tabs";

export default async function AdminPage(props: PageProps<"/admin">) {
  // 1. Fetch Data
  const allPosts = getAdminPosts();

  // 2. Parse Search Params
  const resolvedSearchParams = await props.searchParams;
  const { query, tab } =
    await adminSearchParamsCache.parse(resolvedSearchParams);

  // 3. Filter Posts
  const filteredPosts = allPosts.filter((post) => {
    if (!query) return true;
    const searchContent = `${post.title} ${post.description}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  return (
    <div className="space-y-12">
      <h1 className="text-center">Admin</h1>
      <AdminTabs selectedTab={tab}>
        <TabList aria-label="Admin Sections">
          <Tab id="add-oss">Add OSS Project</Tab>
          <Tab id="posts">Posts</Tab>
        </TabList>

        <TabPanels>
          <TabPanel id="add-oss">
            <div className="mt-8 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Add New Project
              </h2>
              <p className="mb-8 mt-2 text-neutral-600">
                Enter a GitHub repository URL to add it to your list.
              </p>
              <AddOssProjectForm />
            </div>
          </TabPanel>

          <TabPanel id="posts">
            <div className="mt-8">
              <AdminPostsSearch className="mb-8" />
              <AdminPostsContent posts={filteredPosts} />
            </div>
          </TabPanel>
        </TabPanels>
      </AdminTabs>
    </div>
  );
}
````

## File: components/admin/admin-post-card.tsx
````typescript
"use client";

import Link from "next/link";

import type { BlogPost } from "@/types";

import { cn } from "@/lib/utils";

import { AnimatedArrowIcon } from "@/components/animated-arrow-icon";

export function AdminPostCard({ post }: { post: BlogPost }) {
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
      <h2 className="mt-2 group-hover:text-sky-700">
        <Link
          href={`/admin/posts/${post.slug}`}
          className={cn(
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          {post.title}
        </Link>
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
````

## File: components/admin/admin-posts-content.tsx
````typescript
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
````

## File: components/admin/admin-posts-search.tsx
````typescript
"use client";

import { KeyboardEvent, useCallback } from "react";

import { debounce, useQueryStates } from "nuqs";

import { adminSearchParams } from "@/lib/admin-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

export function AdminPostsSearch({ className }: { className?: string }) {
  const [values, setValues] = useQueryStates(
    {
      query: adminSearchParams.query,
      page: adminSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );

  const clearSearch = useCallback(() => {
    setValues({ query: null, page: null });
  }, [setValues]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <div className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          placeholder="Search admin posts…"
          className="col-start-1 row-start-1 h-12 rounded-full pl-10"
          value={values.query}
          onChange={(e) =>
            setValues(
              { query: e.target.value, page: null },
              {
                limitUrlUpdates:
                  e.target.value === "" ? undefined : debounce(300),
              },
            )
          }
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {values.query && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="bg-background text-muted-foreground hover:bg-accent focus-ring pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-sm transition-colors"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
````

## File: components/blog/blog-posts-pagination.tsx
````typescript
"use client";

import { useMemo } from "react";

import { useQueryStates } from "nuqs";

import { blogSearchParams } from "@/lib/blog-search-params";
import { calculatePaginationRange } from "@/lib/pagination";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SIBLING_COUNT = 2;

type BlogPostsPaginationProps = {
  totalPages: number;
  className?: string;
};

export function BlogPostsPagination({
  totalPages,
  className,
}: BlogPostsPaginationProps) {
  const [filters, setFilters] = useQueryStates(
    {
      page: blogSearchParams.page,
    },
    {
      shallow: false,
      scroll: true,
    },
  );
  const currentPage = filters.page;

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages, SIBLING_COUNT),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setFilters({ page });
    }
  };

  return (
    <Pagination className={cn("mt-16", className)}>
      <PaginationContent className="w-full">
        <PaginationItem className="mr-auto">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            className={cn(
              "select-none",
              isFirstPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {paginationRange.map((pageNumberOrEllipsis, index) => {
          if (typeof pageNumberOrEllipsis === "string") {
            return (
              <PaginationItem key={`${pageNumberOrEllipsis}-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          const pageNumber = pageNumberOrEllipsis;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="select-none"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem className="ml-auto">
          <PaginationNext
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            className={cn(
              "select-none",
              isLastPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
````

## File: components/blog/copy-blog-post-button.tsx
````typescript
"use client";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type CopyPostButtonProps = {
  content: string; // This is the raw markdown content
  className?: string;
};

export function CopyBlogPostButton({
  content,
  className,
}: CopyPostButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(content)}
      className={cn(
        "gap-2 bg-white text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50",
        className,
      )}
    >
      {isCopied ? (
        <>
          <Icons.check className="size-4 text-emerald-600" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Icons.copy className="size-3.5" />
          <span>Copy Page</span>
        </>
      )}
    </Button>
  );
}
````

## File: components/blog/note.tsx
````typescript
import React from "react";

import { IoInformationCircle } from "react-icons/io5";

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-input relative my-6 rounded-lg border p-4">
      <div className="absolute bottom-4 left-2 top-4 w-0.5 rounded-full bg-sky-700" />

      <div className="mb-4 flex items-center gap-x-2 pl-4">
        <IoInformationCircle className="text-muted-foreground size-5" />
        <span className="text-foreground text-sm font-semibold">Note</span>
      </div>

      <div className="pl-4 text-neutral-700 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
````

## File: components/forms/form-error.tsx
````typescript
import { Icons } from "@/components/icons";

type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className="flex items-center gap-x-2 rounded-md bg-red-100 p-3 text-sm text-red-800"
    >
      <Icons.alertTriangle className="size-4 shrink-0 text-red-800" />
      <p>{message}</p>
    </div>
  );
}
````

## File: components/forms/form-success.tsx
````typescript
import { Icons } from "@/components/icons";

type FormSuccessProps = {
  message?: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="status"
      className="flex items-center gap-x-2 rounded-md bg-emerald-100 p-3 text-sm text-emerald-800"
    >
      <Icons.checkCircle className="size-4 shrink-0 text-emerald-800" />
      <p>{message}</p>
    </div>
  );
}
````

## File: components/technical-writing/technical-writing-pagination.tsx
````typescript
"use client";

import { useMemo } from "react";

import { useQueryStates } from "nuqs";

import { calculatePaginationRange } from "@/lib/pagination";
import { technicalWritingSearchParams } from "@/lib/technical-writing-search-params";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SIBLING_COUNT = 2;

type TechnicalWritingPaginationProps = {
  totalPages: number;
  className?: string;
};

export function TechnicalWritingPagination({
  totalPages,
  className,
}: TechnicalWritingPaginationProps) {
  const [filters, setFilters] = useQueryStates(
    {
      page: technicalWritingSearchParams.page,
    },
    {
      shallow: false,
      scroll: true,
    },
  );
  const currentPage = filters.page;

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages, SIBLING_COUNT),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setFilters({ page });
    }
  };

  return (
    <Pagination className={cn("mt-16", className)}>
      <PaginationContent className="w-full">
        <PaginationItem className="mr-auto">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            className={cn(
              "select-none",
              isFirstPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {paginationRange.map((pageNumberOrEllipsis, index) => {
          if (typeof pageNumberOrEllipsis === "string") {
            return (
              <PaginationItem key={`${pageNumberOrEllipsis}-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          const pageNumber = pageNumberOrEllipsis;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="select-none"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem className="ml-auto">
          <PaginationNext
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            className={cn(
              "select-none",
              isLastPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
````

## File: components/ui/badge.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
````

## File: components/ui/breadcrumb.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
````

## File: components/ui/form.tsx
````typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
````

## File: components/ui/label.tsx
````typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
````

## File: components/ui/scroll-area.tsx
````typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
````

## File: components/ui/separator.tsx
````typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
````

## File: components/ui/sheet.tsx
````typescript
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
````

## File: components/ui/tabs.tsx
````typescript
"use client";

import * as React from "react";

import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const Tabs = RACTabs;

const TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <RACTabList
      {...props}
      className={cn("group flex w-full border-b border-neutral-200", className)}
    />
  );
};

const Tab = ({ className, children, ...props }: TabProps) => {
  return (
    <RACTab
      {...props}
      className={({ isSelected, isFocusVisible }) =>
        cn(
          "relative cursor-pointer px-4 py-3 text-sm font-medium text-neutral-500 outline-none transition-colors hover:text-neutral-700",
          isSelected && "text-sky-700",
          isFocusVisible && "ring-2 ring-sky-700 ring-offset-2",
          className,
        )
      }
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && (
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-sky-700" />
          )}
        </>
      )}
    </RACTab>
  );
};

const TabPanels = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("mt-6", className)} />;
};

const TabPanel = ({ className, ...props }: TabPanelProps) => {
  return (
    <RACTabPanel
      {...props}
      className={cn(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
    />
  );
};

export { Tabs, TabList, Tab, TabPanels, TabPanel };
````

## File: components/ui/tooltip.tsx
````typescript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: components/admin-sidebar.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarLinks } from "@/config/navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function AdminSidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const menuItems = navbarLinks.adminSidebar;

  return (
    <Sidebar collapsible="icon" desktopFixed={false} className={cn(className)}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <item.icon className="size-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
````

## File: components/router-provider.tsx
````typescript
"use client";

import { useRouter } from "nextjs-toploader/app";
import { RouterProvider as ReactAriaRouterProvider } from "react-aria-components";

type ClientProvidersProps = {
  children: React.ReactNode;
};

export function RouterProvider({ children }: ClientProvidersProps) {
  const router = useRouter();

  return (
    <ReactAriaRouterProvider navigate={router.push}>
      {children}
    </ReactAriaRouterProvider>
  );
}
````

## File: data/kodekloud.ts
````typescript
export const playgroundItems = [
  { href: "https://kodekloud.com/playgrounds/playground-chef", title: "Chef" },
  {
    href: "https://kodekloud.com/playgrounds/playground-saltstack",
    title: "SaltStack",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-arch-linux",
    title: "Arch Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-alpine-linux",
    title: "Alpine Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-rocky-linux",
    title: "Rocky Linux",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-centos-stream-8",
    title: "Centos Stream 8",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ubuntu-18-04",
    title: "Linux Ubuntu 18.04",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ubuntu-22-04",
    title: "Linux Ubuntu 22.04",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-consul-datacenter-3-node",
    title: "Consul datacenter 3-node",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-jsonnet-tanka",
    title: "Jsonnet Tanka",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-gvisor",
    title: "Kubernetes with gVisor",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-kubernetes-with-calic",
    title: "Kubernetes with Calico",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-kubernetes-with-kata-containers",
    title: "Kubernetes with Kata containers",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-mongodb",
    title: "MongoDB",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-redis",
    title: "Redis",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-nodejs",
    title: "Node.js",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-postgresql",
    title: "PostgreSQL",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-jupyter",
    title: "JupyterLab",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terraform",
    title: "Terraform",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terragrunt",
    title: "Terragrunt",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-terraform-aws",
    title: "Terraform + AWS",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-nagios",
    title: "Nagios",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-istio",
    title: "Istio",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-linkerd",
    title: "Linkerd",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-containerd",
    title: "Containerd",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-buildpacks-io",
    title: "Buildpacks",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-ci-cd",
    title: "CI CD playground",
  },
  {
    href: "https://kodekloud.com/playgrounds/playground-prometheus-with-helm",
    title: "Prometheus with Helm",
  },
];

export const revisedBlogItems = [
  {
    href: "https://kodekloud.com/blog/containerization/",
    title: "What Is Containerization?",
  },
  {
    href: "https://kodekloud.com/blog/top-developer-tools/",
    title: "Top 10 Developer Tools",
  },
  {
    href: "https://kodekloud.com/blog/devops-cloud-coding/",
    title: "Does DevOps or Cloud Engineer Need Coding?",
  },
  {
    href: "https://kodekloud.com/blog/how-to-become-a-devops-engineer/",
    title: "How to Become a DevOps Engineer: Your 6-Step Guide",
  },
  {
    href: "https://kodekloud.com/blog/gitops-deployment-advantages/",
    title: "What Is GitOps? Deployment Strategies and Advantages Explained",
  },
  {
    href: "https://kodekloud.com/blog/cloud-computing/",
    title: "What Is Cloud Computing?",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Eof Bash: What Is It and How Does It Work?",
    image: "eof-bash-what-is-it-and-how-does-it-work.webp",
    href: "https://kodekloud.com/blog/eof-bash/",
    category: ["Bash Scripting"],
    publishedAt: "2023-08-04",
  },
  {
    id: 2,
    title: "How to Convert Bash String to Lowercase",
    image: "how-to-convert-bash-string-to-lowercase.webp",
    href: "https://kodekloud.com/blog/convert-bash-string-to-lowercase/",
    category: ["Bash Scripting"],
    publishedAt: "2023-08-04",
  },
  {
    id: 3,
    title: "Bash Compare Strings: How to Check if Two Strings Are Equal",
    image: "bash-compare-strings-how-to-check-if-two-strings-are-equal.webp",
    href: "https://kodekloud.com/blog/bash-compare-strings/",
    category: ["Bash Scripting"],
    publishedAt: "2023-08-03",
  },
  {
    id: 4,
    title: "How to Search Packages With Apt Search Command",
    image: "how-to-search-packages-with-apt-search-command.webp",
    category: ["Linux"],
    href: "https://kodekloud.com/blog/apt-search-command/",
    publishedAt: "2023-08-02",
  },
  {
    id: 5,
    title: "How to Count the Number of Files in a Directory in Linux",
    image: "how-to-count-the-number-of-files-in-a-directory-in-linux.webp",
    category: ["Linux"],
    href: "https://kodekloud.com/blog/file-count-in-directory-linux/",
    publishedAt: "2023-07-25",
  },
  {
    id: 6,
    title: "How to Check if a File Exists in Bash",
    image: "how-to-check-if-a-file-exists-in-bash.webp",
    href: "https://kodekloud.com/blog/check-file-in-bash/",
    category: ["Bash Scripting"],
    publishedAt: "2023-07-19",
  },
  {
    id: 7,
    title: "How to Read a File Line by Line in Bash",
    image: "how-to-read-a-file-line-by-line-in-bash.webp",
    href: "https://kodekloud.com/blog/read-file-in-bash/",
    category: ["Bash Scripting"],
    publishedAt: "2023-07-17",
  },
  {
    id: 8,
    title: "How to Write Bash Scripts to Loop Through Array Values",
    image: "how-to-write-bash-scripts-to-loop-through-array-values.webp",
    href: "https://kodekloud.com/blog/bash-scripts-loop-through-array-values/",
    category: ["Bash Scripting"],
    publishedAt: "2023-07-12",
  },
  {
    id: 9,
    title: "How to Run Shell Script (.sh) Files in Linux",
    image: "how-to-run-shell-script-files-in-linux.webp",
    href: "https://kodekloud.com/blog/linux-run-sh-script/",
    category: ["Linux"],
    publishedAt: "2023-07-14",
  },
  {
    id: 10,
    title: "How to Build a Docker Image With Dockerfile From Scratch",
    image: "how-to-build-a-docker-image-with-dockerfile-from-scratch.webp",
    href: "https://kodekloud.com/blog/how-to-build-a-docker-image/",
    category: ["Docker"],
    publishedAt: "2023-07-05",
  },
  {
    id: 11,
    title: "How to Pass Environment Variables to Docker Containers",
    image: "how-to-pass-environment-variables-to-docker-containers.webp",
    href: "https://kodekloud.com/blog/docker-pass-environment-variables/",
    category: ["Docker"],
    publishedAt: "2023-06-26",
  },
  {
    id: 12,
    title: "How to Restart a Pod in Kubernetes",
    image: "how-to-restart-a-pod-in-kubernetes.webp",
    href: "https://kodekloud.com/blog/kubernetes-pod-restart/",
    category: ["Kubernetes"],
    publishedAt: "2023-06-16",
  },
  {
    id: 13,
    title: "Docker-Compose Logs: How to View Log Output",
    image: "docker-compose-logs-how-to-view-log-output.webp",
    href: "https://kodekloud.com/blog/docker-compose-logs/",
    category: ["Docker"],
    publishedAt: "2023-06-12",
  },
  {
    id: 14,
    title: "Kubectl Rollout Restart: What Is It and How to Use It",
    image: "kubectl-rollout-restart-what-is-it-and-how-to-use-it.webp",
    href: "https://kodekloud.com/blog/kubectl-rollout-restart/",
    category: ["Kubernetes"],
    publishedAt: "2023-06-09",
  },
  {
    id: 15,
    title: "How to Debug CrashLoopBackOff in a Container or Pod",
    image: "how-to-debug-crashLoopBackOff-in-a-container-or-pod.webp",
    href: "https://kodekloud.com/blog/debug-crashloopbackoff/",
    category: ["Kubernetes"],
    publishedAt: "2023-06-07",
  },
  {
    id: 16,
    title: "How to Use Docker CP Command With Examples",
    image: "how-to-use-docker-cp-command-with-examples.webp",
    href: "https://kodekloud.com/blog/docker-cp/",
    category: ["Docker"],
    publishedAt: "2023-05-19",
  },
  {
    id: 17,
    title: "Why and How to Tag a Docker Image?",
    image: "why-and-how-to-tag-a-docker-image.webp",
    href: "https://kodekloud.com/blog/docker-image-tag/",
    category: ["Docker"],
    publishedAt: "2023-05-17",
  },
  {
    id: 18,
    title: "What Are Docker Image Layers and How Do They Work?",
    image: "what-are-docker-image-layers-and-how-do-they-work.webp",
    href: "https://kodekloud.com/blog/docker-image-layers/",
    category: ["Docker"],
    publishedAt: "2023-05-16",
  },
  {
    id: 19,
    title:
      "Docker Entrypoint vs. CMD: What Is the Difference and How to Choose?",
    image:
      "docker-entrypoint-vs-cmd-What-is-the-difference-and-how-to-choose.webp",
    href: "https://kodekloud.com/blog/docker-entrypoint-cmd/",
    category: ["Docker"],
    publishedAt: "2023-05-15",
  },
  {
    id: 20,
    title: "How to Remove Unused and Dangling Docker Images",
    image: "how-to-remove-unused-and-dangling-docker-images.webp",
    href: "https://kodekloud.com/blog/docker-remove-unused-images/",
    category: ["Docker"],
    publishedAt: "2023-05-03",
  },
  {
    id: 21,
    title: "kubectl cp: How to Copy File From Pod to Local (With Examples)",
    image: "kubectl-cp-how-to-copy-file-from-pod-to-local-with-examples.webp",
    href: "https://kodekloud.com/blog/kubectl-cp/",
    category: ["Kubernetes"],
    publishedAt: "2023-05-11",
  },
  {
    id: 22,
    title: "How to Create Docker Image From a Container",
    image: "how-to-create-docker-image-from-a-container.webp",
    href: "https://kodekloud.com/blog/docker-create-image-from-container/",
    category: ["Docker"],
    publishedAt: "2023-04-28",
  },
  {
    id: 23,
    title: "Differences Between Put and Patch in Rest API & When to Use Them",
    image:
      "differences-between-put-and-patch-in-rest-api-and-when-to-use-them.webp",
    href: "https://kodekloud.com/blog/put-and-patch-in-rest-api/",
    category: ["REST API"],
    publishedAt: "2023-04-26",
  },
  {
    id: 24,
    title: "How to Get Docker Container IP Address From the Host",
    image: "how-to-get-docker-container-ip-address-from-the-host.webp",
    href: "https://kodekloud.com/blog/get-docker-container-ip/",
    category: ["Docker"],
    publishedAt: "2023-04-21",
  },
  {
    id: 25,
    title: "How to Use Kubectl Delete Deployment (With Examples)",
    image: "how-to-use-kubectl-delete-deployment-with-examples.webp",
    href: "https://kodekloud.com/blog/kubectl-delete-deployment/",
    category: ["Kubernetes"],
    publishedAt: "2023-04-18",
  },
  {
    id: 26,
    title: "Kubectl Create Namespace: How to Create a Custom Namespace?",
    image: "kubectl-create-namespace-how-to-create-a-custom-namespace.webp",
    href: "https://kodekloud.com/blog/kubectl-create-namespace/",
    category: ["Kubernetes"],
    publishedAt: "2023-04-10",
  },
  {
    id: 27,
    title:
      "Kubectl Exec: How to Execute Shell Commands Into a Container (With Examples)?",
    image:
      "kubectl-exec-how-to-execute-shell-commands-into-a-container-with-examples.webp",
    href: "https://kodekloud.com/blog/kubectl-exec/",
    category: ["Kubernetes"],
    publishedAt: "2023-04-04",
  },
  {
    id: 28,
    title: "What Is Kubectl Port-Forward and How Does It Work?",
    image: "what-is-kubectl-port-forward-and-how-does-it-work.webp",
    href: "https://kodekloud.com/blog/port-forwarding-kubernetes/",
    category: ["Kubernetes"],
    publishedAt: "2023-04-03",
  },
  {
    id: 29,
    title: "What Is Kubernetes DaemonSet and How to Use It?",
    image: "what-is-kubernetes-daemonSet-and-how-to-use-it.webp",
    href: "https://kodekloud.com/blog/kubernetes-daemonset/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-30",
  },
  {
    id: 30,
    title: "How to Run a Docker Image as a Container",
    image: "how-to-run-a-docker-image-as-a-container.webp",
    href: "https://kodekloud.com/blog/run-docker-image/",
    category: ["Docker"],
    publishedAt: "2023-03-28",
  },
  {
    id: 31,
    title:
      "ClusterIP vs. NodePort vs. LoadBalancer: Key Differences and When to Use Them",
    image:
      "clusterip-vs-nodeport-vs-loadbalancer-key-differences-and-when-to-use-them.webp",
    href: "https://kodekloud.com/blog/clusterip-nodeport-loadbalancer/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-23",
  },
  {
    id: 32,
    title: "Docker Exec: How to Enter Into a Docker Container's Shell?",
    image: "docker-exec-how-to-enter-into-a-docker-containers-shell.webp",
    href: "https://kodekloud.com/blog/docker-exec/",
    category: ["Docker"],
    publishedAt: "2023-03-21",
  },
  {
    id: 33,
    title:
      "What Are Objects Used for in Kubernetes? 11 Types of Objects Explained",
    image:
      "what-are-objects-used-for-in-kubernetes-11-types-of-objects-explained.webp",
    href: "https://kodekloud.com/blog/kubernetes-objects/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-20",
  },
  {
    id: 34,
    title: "What Is Kubernetes Headless Service (With Examples)?",
    image: "what-is-kubernetes-headless-service-with-examples.webp",
    href: "https://kodekloud.com/blog/kubernetes-headless-service/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-14",
  },
  {
    id: 35,
    title: "Kubernetes Services: Definitions & Examples (2023)",
    image: "kubernetes-services-definitions-and-examples-2023.webp",
    href: "https://kodekloud.com/blog/kubernetes-services/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-03",
  },
  {
    id: 36,
    title: "What Are Kubernetes KEPs?",
    image: "what-are-kubernetes-keps.webp",
    href: "https://kodekloud.com/blog/kubernetes-keps/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-02",
  },
  {
    id: 37,
    title: "Kubernetes Networking: Fundamental Concepts Explained (2023)",
    image: "kubernetes-networking-fundamental-concepts-explained-2023.webp",
    href: "https://kodekloud.com/blog/kubernetes-networking-explained/",
    category: ["Kubernetes"],
    publishedAt: "2023-03-01",
  },
  {
    id: 38,
    title: "DevOps vs. Agile - What’s the Difference?",
    image: "devops-vs-agile-whats-the-difference.webp",
    href: "https://kodekloud.com/blog/devops-vs-agile/",
    category: ["DevOps", "Agile"],
    publishedAt: "2023-02-28",
  },
  {
    id: 39,
    title: "Docker Containerization: Key Benefits and Use Cases",
    image: "docker-containerization-key-benefits-and-use-cases.webp",
    href: "https://kodekloud.com/blog/docker-containerization/",
    category: ["Docker"],
    publishedAt: "2023-02-21",
  },
  {
    id: 40,
    title:
      "Docker Architecture Explained: Docker Client, Docker Daemon & Docker Registry",
    image:
      "docker-architecture-explained-docker-client-docker-daemon-and-docker-registry.webp",
    href: "https://kodekloud.com/blog/docker-architecture/",
    category: ["Docker"],
    publishedAt: "2023-02-13",
  },
  {
    id: 41,
    title: "Why Should You Learn HashiCorp Terraform?",
    image: "why-should-you-learn-hash icorp-terraform.webp",
    href: "https://kodekloud.com/blog/learn-hashicorp-terraform/",
    category: ["Terraform"],
    publishedAt: "2023-01-04",
  },
  {
    id: 42,
    title: "Kubernetes Terminology: Pods, Containers, Nodes & Clusters",
    image: "kubernetes-terminology-pods-containers-nodes-and-clusters.webp",
    href: "https://kodekloud.com/blog/kubernetes-terms/",
    category: ["Kubernetes"],
    publishedAt: "2022-12-14",
  },
  {
    id: 43,
    title: "What is Puppet in DevOps?",
    image: "what-is-puppet-in-devops.webp",
    href: "https://kodekloud.com/blog/puppet-in-devops/",
    category: ["Puppet"],
    publishedAt: "2022-12-06",
  },
  {
    id: 44,
    title: "How to Extract Bash Substring",
    image: "how-to-extract-bash-substring.webp",
    href: "https://kodekloud.com/blog/bash-substring/",
    category: ["Bash Scripting"],
    publishedAt: "2023-09-13",
  },
  {
    id: 45,
    title: "How to Return Value From a Bash Function",
    image: "how-to-return-value-from-a-bash-function.webp",
    category: ["Bash Scripting"],
    href: "https://kodekloud.com/blog/return-value-from-bash-function/",
    publishedAt: "2023-09-14",
  },
  {
    id: 46,
    title: "How to Use Bash Getopts With Examples",
    image: "how-to-use-bash-getopts-with-examples.webp",
    href: "https://kodekloud.com/blog/bash-getopts/",
    category: ["Bash Scripting"],
    publishedAt: "2023-09-20",
  },
  {
    id: 47,
    title: "Bash Regex: How to Use Regex in a Shell Script",
    image: "bash-regex-how-to-use-regex-in-a-shell-script.webp",
    href: "https://kodekloud.com/blog/regex-shell-script/",
    category: ["Bash Scripting"],
    publishedAt: "2023-10-24",
  },
  {
    id: 48,
    title: "How to Manage Your K8s with K9s Kubernetes CLI",
    image: "how-to-manage-your-k8s-with-k9s-kubernetes-cli.webp",
    href: "https://kodekloud.com/blog/manage-k8s-with-k9s-kubernetes-cli/",
    category: ["Kubernetes"],
    publishedAt: "2023-12-13",
  },
  {
    id: 49,
    title: "How to Clear Docker Logs for a Container",
    image: "how-to-clear-docker-logs-for-a-container.webp",
    href: "https://kodekloud.com/blog/clear-docker-container-logs/",
    category: ["Docker"],
    publishedAt: "2024-01-03",
  },
  {
    id: 50,
    title: "Docker Build Args: What Are They and How to Use Them",
    image: "docker-build-args-what-are-they-and-how-to-use-them.webp",
    category: ["Docker"],
    href: "https://kodekloud.com/blog/docker-build-args/",
    publishedAt: "2024-01-16",
  },
  {
    id: 51,
    title: "How to Fix Docker Build Requires Exactly 1 Argument",
    image: "how-to-fix-docker-build-requires-exactly-1-argument.webp",
    category: ["Docker"],
    href: "https://kodekloud.com/blog/fix-docker-build-one-argument-error/",
    publishedAt: "2024-01-24",
  },
  {
    id: 52,
    title: "How CI/CD Pipeline Works",
    image: "how-ci-cd-pipeline-works.webp",
    category: ["CI/CD"],
    href: "https://kodekloud.com/blog/how-ci-cd-pipeline-works/",
    publishedAt: "2024-01-25",
  },
  {
    id: 53,
    title: "How to Collect Kubernetes Events and Extract Values",
    image: "how-to-collect-kubernetes-events-and-extract-values.webp",
    category: ["Kubernetes"],
    href: "https://kodekloud.com/blog/collect-kubernetes-events/",
    publishedAt: "2024-03-15",
  },
  {
    id: 54,
    title: "Docker Compose Command Not Found: 3 Possible Causes & Fixes",
    image: "docker-compose-command-not-found-3-possible-causes-and-fixes.webp",
    category: ["Docker"],
    href: "https://kodekloud.com/blog/docker-compose-command-not-found/",
    publishedAt: "2024-03-25",
  },
  {
    id: 55,
    title: "Where Docker Images are Stored",
    image: "where-docker-images-are-stored.webp",
    category: ["Docker"],
    href: "https://kodekloud.com/blog/where-docker-images-are-stored/",
    publishedAt: "2024-03-27",
  },
  {
    id: 56,
    title: "How Dockerfile Works",
    image: "how-dockerfile-works.webp",
    category: ["Docker"],
    href: "https://kodekloud.com/blog/how-dockerfile-works/",
    publishedAt: "2024-03-27",
  },
  {
    id: 57,
    title: "How Grafana Works",
    image: "how-grafana-works.webp",
    category: ["Grafana"],
    href: "https://kodekloud.com/blog/how-grafana-works/",
    publishedAt: "2024-04-23",
  },
  {
    id: 58,
    title: "Golang vs. Rust",
    image: "golang-vs-rust.webp",
    category: ["Golang", "Rust"],
    href: "https://kodekloud.com/blog/golang-vs-rust/",
    publishedAt: "2024-04-29",
  },
  {
    id: 59,
    title: "10 Essential DevOps Tools You Should Learn in 2024",
    image: "10-essential-devops-tools-you-should-learn-in-2024.webp",
    category: ["DevOps"],
    href: "https://kodekloud.com/blog/10-essential-devops-tools-you-should-learn-in-2024/",
    publishedAt: "2024-05-29",
  },
  {
    id: 60,
    title: "Learning Python for Beginners",
    image: "learning-python-for-beginners.webp",
    category: ["Python"],
    href: "https://kodekloud.com/blog/learning-python-for-beginners/",
    publishedAt: "2024-09-20",
  },
  {
    id: 61,
    title: "What is Cloud Data Security? Risks and Best Practices",
    image: "what-is-cloud-data-security-risks-and-best-practices.webp",
    category: ["Cloud Security"],
    href: "https://kodekloud.com/blog/what-is-cloud-data-security-risks-and-best-practices/",
    publishedAt: "2024-09-21",
  },
];
````

## File: db/index.ts
````typescript
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/db/schema";

config({ path: ".env.local" });
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });
````

## File: drizzle/migrations/meta/0000_snapshot.json
````json
{
  "id": "7163c13e-b70f-4b83-8b42-06822f61d76a",
  "prevId": "00000000-0000-0000-0000-000000000000",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.oss_projects": {
      "name": "oss_projects",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "url": {
          "name": "url",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "description": {
          "name": "description",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "stargazers_count": {
          "name": "stargazers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "forks_count": {
          "name": "forks_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "watchers_count": {
          "name": "watchers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "open_issues_count": {
          "name": "open_issues_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "language": {
          "name": "language",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "topics": {
          "name": "topics",
          "type": "text[]",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "oss_projects_url_unique": {
          "name": "oss_projects_url_unique",
          "nullsNotDistinct": false,
          "columns": [
            "url"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
````

## File: drizzle/migrations/meta/0001_snapshot.json
````json
{
  "id": "c70de4ca-6ad3-4ff9-b485-c85b89c50de9",
  "prevId": "7163c13e-b70f-4b83-8b42-06822f61d76a",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.oss_projects": {
      "name": "oss_projects",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "url": {
          "name": "url",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "description": {
          "name": "description",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "stargazers_count": {
          "name": "stargazers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "forks_count": {
          "name": "forks_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "watchers_count": {
          "name": "watchers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "open_issues_count": {
          "name": "open_issues_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "language": {
          "name": "language",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "topics": {
          "name": "topics",
          "type": "text[]",
          "primaryKey": false,
          "notNull": false
        },
        "homepage": {
          "name": "homepage",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "oss_projects_url_unique": {
          "name": "oss_projects_url_unique",
          "nullsNotDistinct": false,
          "columns": [
            "url"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
````

## File: drizzle/migrations/meta/0002_snapshot.json
````json
{
  "id": "20d74f8a-43eb-49c8-9e96-3235481609b9",
  "prevId": "c70de4ca-6ad3-4ff9-b485-c85b89c50de9",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.oss_projects": {
      "name": "oss_projects",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "url": {
          "name": "url",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "description": {
          "name": "description",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "stargazers_count": {
          "name": "stargazers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "forks_count": {
          "name": "forks_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "open_issues_count": {
          "name": "open_issues_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "language": {
          "name": "language",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "topics": {
          "name": "topics",
          "type": "text[]",
          "primaryKey": false,
          "notNull": false
        },
        "homepage": {
          "name": "homepage",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "oss_projects_url_unique": {
          "name": "oss_projects_url_unique",
          "nullsNotDistinct": false,
          "columns": [
            "url"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
````

## File: drizzle/migrations/meta/0003_snapshot.json
````json
{
  "id": "d4615476-f890-4cd1-a205-54dc37015282",
  "prevId": "20d74f8a-43eb-49c8-9e96-3235481609b9",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.oss_projects": {
      "name": "oss_projects",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "url": {
          "name": "url",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "description": {
          "name": "description",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "stargazers_count": {
          "name": "stargazers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "forks_count": {
          "name": "forks_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "open_issues_count": {
          "name": "open_issues_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "subscribers_count": {
          "name": "subscribers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "language": {
          "name": "language",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "topics": {
          "name": "topics",
          "type": "text[]",
          "primaryKey": false,
          "notNull": false
        },
        "homepage": {
          "name": "homepage",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "oss_projects_url_unique": {
          "name": "oss_projects_url_unique",
          "nullsNotDistinct": false,
          "columns": [
            "url"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
````

## File: drizzle/migrations/0000_melodic_franklin_richards.sql
````sql
CREATE TABLE "oss_projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"description" text,
	"stargazers_count" integer NOT NULL,
	"forks_count" integer NOT NULL,
	"watchers_count" integer NOT NULL,
	"open_issues_count" integer NOT NULL,
	"language" text,
	"topics" text[],
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "oss_projects_url_unique" UNIQUE("url")
);
````

## File: drizzle/migrations/0001_cloudy_fabian_cortez.sql
````sql
ALTER TABLE "oss_projects" ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "oss_projects" ADD COLUMN "homepage" text;
````

## File: drizzle/migrations/0002_supreme_ben_parker.sql
````sql
ALTER TABLE "oss_projects" DROP COLUMN "watchers_count";
````

## File: drizzle/migrations/0003_pink_white_tiger.sql
````sql
ALTER TABLE "oss_projects" ADD COLUMN "subscribers_count" integer;
````

## File: hooks/use-copy-to-clipboard.ts
````typescript
"use client";

import * as React from "react";

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      if (onCopy) {
        onCopy();
      }

      if (timeout !== 0) {
        setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      }
    }, console.error);
  };

  return { isCopied, copyToClipboard };
}
````

## File: hooks/use-mobile.ts
````typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
````

## File: hooks/use-mounted.ts
````typescript
import * as React from "react";

export function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
````

## File: lib/admin-search-params.ts
````typescript
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const adminSearchParams = {
  query: parseAsString.withDefault(""),
  tab: parseAsString.withDefault("add-oss"),
  page: parseAsInteger.withDefault(1),
};

export const adminSearchParamsCache =
  createSearchParamsCache(adminSearchParams);
````

## File: lib/blog-search-params.ts
````typescript
import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const blogSearchParams = {
  query: parseAsString.withDefault(""),
  tag: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const blogSearchParamsCache = createSearchParamsCache(blogSearchParams);

export type BlogSearchParams = Awaited<
  ReturnType<typeof blogSearchParamsCache.parse>
>;
````

## File: lib/errors.ts
````typescript
type AppErrorOptions = {
  operation: string;
  message: string;
  cause?: unknown;
};

export class AppError extends Error {
  public readonly operation: string;
  public readonly cause?: unknown;

  constructor({ operation, message, cause }: AppErrorOptions) {
    super(message, { cause });
    this.cause = cause;
    this.operation = operation;
    this.name = new.target.name;
  }
}

export class NetworkError extends AppError {}
export class GithubApiError extends AppError {}
export class ParsingError extends AppError {}
export class DatabaseError extends AppError {}
export class GitHubUrlParsingError extends AppError {}
````

## File: lib/fetch-repo-details.ts
````typescript
import type { GitHubRepoData } from "@/types";
import { errAsync, ResultAsync } from "neverthrow";

import {
  AppError,
  GithubApiError,
  NetworkError,
  ParsingError,
} from "@/lib/errors";

export function fetchRepoDetails(
  owner: string,
  repo: string,
): ResultAsync<GitHubRepoData, AppError> {
  const GITHUB_API_URL = `https://api.github.com/repos/${owner}/${repo}`;

  return ResultAsync.fromPromise(
    fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }),
    (error) =>
      new NetworkError({
        operation: "fetchRepoDetails",
        message:
          "The network request failed. Please check your internet connection.",
        cause: error,
      }),
  ).andThen((res) => {
    if (!res.ok) {
      return errAsync(
        new GithubApiError({
          operation: "fetchRepoDetails",
          message: `Failed to fetch GitHub repo details. Please try again.`,
          cause: res,
        }),
      );
    }
    return ResultAsync.fromPromise(
      res.json(),
      (error) =>
        new ParsingError({
          operation: "fetchRepoDetails",
          message: "Failed to parse JSON response. Please try again.",
          cause: error,
        }),
    );
  });
}
````

## File: lib/get-admin-post-by-slug.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

import { getTableOfContents } from "@/lib/toc";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export async function getAdminPostBySlug(slug: string) {
  const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const toc = await getTableOfContents(content);

  const { default: ContentComponent } = await import(
    `@/app/(admin)/admin/posts/${slug}/content.mdx`
  );

  return {
    frontmatter: data as Frontmatter,
    toc,
    ContentComponent,
    rawContent: fileContents,
  };
}
````

## File: lib/get-admin-posts-slugs.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

// 🔹 Pointing to the admin posts directory
const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export function getAdminPostsSlugs() {
  // Safety check: Return empty if directory doesn't exist yet
  if (!fs.existsSync(adminPostsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(adminPostsDirectory);
  const publishedSlugs = slugs
    .map((slug) => {
      const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

      // 🎯 THE FIX: Skip folders that don't have a content.mdx file (like "[slug]")
      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        isPublished: (data as Frontmatter).isPublished,
      };
    })
    // Filter out nulls and ensure isPublished is true
    .filter(
      (post): post is { slug: string; isPublished: boolean } =>
        post !== null && post.isPublished,
    )
    .map((post) => ({ slug: post.slug }));

  return publishedSlugs;
}
````

## File: lib/get-admin-posts.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export function getAdminPosts() {
  const slugs = fs.readdirSync(adminPostsDirectory);

  const allPosts = slugs.map((slug) => {
    const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

    // Strictly check if content.mdx exists.
    // If it doesn't (like in the case of the '[slug]' folder), we return null immediately.
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Frontmatter),
    };
  });

  // Filter out the folders that didn't have content.mdx
  return allPosts
    .filter((post): post is { slug: string } & Frontmatter => post !== null)
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    );
}
````

## File: lib/get-blog-post-by-slug.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

import { getTableOfContents } from "@/lib/toc";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug, "content.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const toc = await getTableOfContents(content);

  const { default: ContentComponent } = await import(
    `@/app/(posts)/${slug}/content.mdx`
  );

  return {
    frontmatter: data as Frontmatter,
    toc,
    ContentComponent,
    rawContent: fileContents,
  };
}
````

## File: lib/get-blog-posts-slugs.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export function getBlogPostsSlugs() {
  const slugs = fs.readdirSync(postsDirectory);
  const publishedSlugs = slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, slug, "content.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        isPublished: (data as Frontmatter).isPublished,
      };
    })
    .filter((post) => post.isPublished)
    .map((post) => ({ slug: post.slug }));

  return publishedSlugs;
}
````

## File: lib/get-blog-posts-tags.ts
````typescript
import { getBlogPosts } from "@/lib/get-blog-posts";

export function getBlogPostsTags() {
  const blogPosts = getBlogPosts();

  const tagCounts: Record<string, number> = {};

  blogPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const blogPostTags = Object.keys(tagCounts)
    .map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return blogPostTags;
}
````

## File: lib/get-blog-posts.ts
````typescript
import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export function getBlogPosts() {
  const slugs = fs.readdirSync(postsDirectory);

  const allPosts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, slug, "content.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      ...(data as Frontmatter),
    };
  });

  return allPosts
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    )
    .filter((post) => post.isPublished);
}
````

## File: lib/get-oss-project-filters-options.ts
````typescript
import "server-only";

import { db } from "@/db";
import { ResultAsync } from "neverthrow";

import { ossProjects } from "@/db/schema";

import { DatabaseError } from "./errors";

export function getOssProjectFilterOptions(filters: {
  topicQuery: string;
  languageQuery: string;
}): ResultAsync<
  { uniqueTopics: string[]; uniqueLanguages: string[] },
  DatabaseError
> {
  return ResultAsync.fromPromise(
    db
      .select({
        topics: ossProjects.topics,
        language: ossProjects.language,
      })
      .from(ossProjects),
    (error) =>
      new DatabaseError({
        operation: "getOssProjectFilterOptions",
        message: "Failed to fetch projects from the database.",
        cause: error,
      }),
  ).map((allProjects) => {
    const allTopics = allProjects.flatMap((p) => p.topics ?? []);
    let uniqueTopics = Array.from(new Set(allTopics)).sort();

    const allLanguages = allProjects
      .map((p) => p.language)
      .filter((l): l is string => l != null && l !== "");
    let uniqueLanguages = Array.from(new Set(allLanguages)).sort();

    if (filters.topicQuery) {
      uniqueTopics = uniqueTopics.filter((topic) =>
        topic.toLowerCase().includes(filters.topicQuery.toLowerCase()),
      );
    }

    if (filters.languageQuery) {
      uniqueLanguages = uniqueLanguages.filter((lang) =>
        lang.toLowerCase().includes(filters.languageQuery.toLowerCase()),
      );
    }

    return { uniqueTopics, uniqueLanguages };
  });
}
````

## File: lib/icon-map.ts
````typescript
import type { IconType } from "react-icons";
import { FaTerminal } from "react-icons/fa";
import {
  SiAstro,
  SiBiome,
  SiBower,
  SiBun,
  SiC,
  SiCircleci,
  SiCoffeescript,
  SiCplusplus,
  SiCss3,
  SiCssmodules,
  SiDart,
  SiDocker,
  SiDocusaurus,
  SiDotenv,
  SiEditorconfig,
  SiEslint,
  SiGatsby,
  SiGitignoredotio,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiGrunt,
  SiGulp,
  SiHandlebarsdotjs,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiLess,
  SiMarkdown,
  SiMdx,
  SiMintlify,
  SiMocha,
  SiMysql,
  SiNextdotjs,
  SiPerl,
  SiPhp,
  SiPostcss,
  SiPrettier,
  SiPrisma,
  SiPug,
  SiPython,
  SiR,
  SiReact,
  SiReadme,
  SiRedis,
  SiRemix,
  SiRive,
  SiRollupdotjs,
  SiRuby,
  SiSanity,
  SiSass,
  SiScala,
  SiSentry,
  SiShadcnui,
  SiStorybook,
  SiStylelint,
  SiSublimetext,
  SiSvelte,
  SiSvg,
  SiSwift,
  SiTailwindcss,
  SiToml,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiWebassembly,
} from "react-icons/si";

export const filenameIconMap: Record<string, IconType> = {
  Terminal: FaTerminal,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  TSX: SiReact,
  JS: SiJavascript,
  ".env": SiDotenv,
  "*.astro": SiAstro,
  "biome.json": SiBiome,
  ".bowerrc": SiBower,
  "bun.lockb": SiBun,
  "*.c": SiC,
  "*.cpp": SiCplusplus,
  ".circleci/config.yml": SiCircleci,
  "*.coffee": SiCoffeescript,
  "*.module.css": SiCssmodules,
  "*.css": SiCss3,
  "*.dart": SiDart,
  Dockerfile: SiDocker,
  "docusaurus.config.js": SiDocusaurus,
  ".editorconfig": SiEditorconfig,
  ".eslintrc": SiEslint,
  "eslint.config.*": SiEslint,
  "gatsby-config.*": SiGatsby,
  ".gitignore": SiGitignoredotio,
  "*.go": SiGo,
  "*.graphql": SiGraphql,
  "*.sh": SiGnubash,
  "Gruntfile.*": SiGrunt,
  "gulpfile.*": SiGulp,
  "*.hbs": SiHandlebarsdotjs,
  "*.html": SiHtml5,
  "*.js": SiJavascript,
  "*.json": SiJson,
  "*.test.js": SiJest,
  "*.less": SiLess,
  "*.md": SiMarkdown,
  "*.mdx": SiMdx,
  "mint.json": SiMintlify,
  "mocha.opts": SiMocha,
  "*.mustache": SiHandlebarsdotjs,
  "*.sql": SiMysql,
  "next.config.*": SiNextdotjs,
  "*.pl": SiPerl,
  "*.php": SiPhp,
  "postcss.config.*": SiPostcss,
  "prettier.config.*": SiPrettier,
  "*.prisma": SiPrisma,
  "*.pug": SiPug,
  "*.py": SiPython,
  "*.r": SiR,
  "*.rb": SiRuby,
  "*.jsx": SiReact,
  "*.tsx": SiReact,
  "readme.md": SiReadme,
  "*.rdb": SiRedis,
  "remix.config.*": SiRemix,
  "*.riv": SiRive,
  "rollup.config.*": SiRollupdotjs,
  "sanity.config.*": SiSanity,
  "*.sass": SiSass,
  "*.scss": SiSass,
  "*.sc": SiScala,
  "*.scala": SiScala,
  "sentry.client.config.*": SiSentry,
  "components.json": SiShadcnui,
  "storybook.config.*": SiStorybook,
  "stylelint.config.*": SiStylelint,
  ".sublime-settings": SiSublimetext,
  "*.svelte": SiSvelte,
  "*.svg": SiSvg,
  "*.swift": SiSwift,
  "tailwind.config.*": SiTailwindcss,
  "*.toml": SiToml,
  "*.ts": SiTypescript,
  "vercel.json": SiVercel,
  "vite.config.*": SiVite,
  "*.vue": SiVuedotjs,
  "*.wasm": SiWebassembly,
};
````

## File: lib/parse-github-url.ts
````typescript
import { err, ok, Result } from "neverthrow";

import { GitHubUrlParsingError } from "@/lib/errors";

export function parseGitHubUrl(
  url: string,
): Result<{ repoOwner: string; repoName: string }, GitHubUrlParsingError> {
  return Result.fromThrowable(
    () => new URL(url),
    (error) =>
      new GitHubUrlParsingError({
        operation: "parseGitHubUrl",
        message: "Invalid URL format.",
        cause: error,
      }),
  )().andThen((parsedUrl: URL) => {
    const path = parsedUrl.pathname.split("/");

    if (path[1] && path[2]) {
      const repoOwner = path[1];
      const repoName = path[2];
      return ok({ repoOwner, repoName });
    }

    return err(
      new GitHubUrlParsingError({
        operation: "parseGitHubUrl",
        message: "Invalid GitHub URL. Must include an owner and repository.",
      }),
    );
  });
}
````

## File: lib/save-repo-details.ts
````typescript
import { db } from "@/db";
import type { GitHubRepoData } from "@/types";
import { ok, ResultAsync } from "neverthrow";

import { ossProjects } from "@/db/schema";

import { DatabaseError } from "./errors";

export function saveRepoDetails(
  repoData: GitHubRepoData,
  repoName: string,
): ResultAsync<GitHubRepoData, DatabaseError> {
  // Map the API data keys to database column names
  const valuesToInsert = {
    name: repoName,
    url: repoData.html_url,
    description: repoData.description,
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    openIssues: repoData.open_issues_count,
    subscribers: repoData.subscribers_count,
    language: repoData.language,
    topics: repoData.topics,
    homepage: repoData.homepage,
  };

  return ResultAsync.fromPromise(
    db
      .insert(ossProjects)
      .values(valuesToInsert)
      .onConflictDoUpdate({ target: ossProjects.url, set: valuesToInsert }),
    (error) =>
      new DatabaseError({
        operation: "saveRepoDetails",
        message:
          "Failed to save repository details to the database. Please try again.",
        cause: error,
      }),
    // We return the original repoData on success
  ).andThen(() => ok(repoData));
}
````

## File: lib/schema.ts
````typescript
import { z } from "zod";

export const AddOssProjectFormSchema = z.object({
  url: z
    .string()
    .min(1, { error: "GitHub Repository URL is required." })
    .pipe(
      z.string().refine(
        (value) => {
          try {
            const url = new URL(value);
            return url.protocol === "https:" && url.hostname === "github.com";
          } catch {
            return false;
          }
        },
        { error: "Please enter a valid GitHub repository URL." },
      ),
    ),
});
````

## File: lib/search-params.ts
````typescript
import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const searchParams = {
  query: parseAsString.withDefault(""),
  "topic-query": parseAsString.withDefault(""),
  "language-query": parseAsString.withDefault(""),
  topic: parseAsArrayOf(parseAsString).withDefault([]),
  language: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const searchParamsCache = createSearchParamsCache(searchParams);

export type OssProjectsSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;

export type FilterSectionState = Pick<OssProjectsSearchParams, "page"> &
  Partial<Pick<OssProjectsSearchParams, "topic" | "language">>;

export type FilterUpdatePayload = Partial<
  Pick<OssProjectsSearchParams, "page" | "topic" | "language">
>;

export type WithNullableFields<T> = { [K in keyof T]: T[K] | null };

export type NullableFilterUpdatePayload =
  WithNullableFields<FilterUpdatePayload>;
````

## File: lib/technical-writing-search-params.ts
````typescript
import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const technicalWritingSearchParams = {
  query: parseAsString.withDefault(""),
  tag: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
};

export const technicalWritingSearchParamsCache = createSearchParamsCache(
  technicalWritingSearchParams,
);

export type TechnicalWritingSearchParams = Awaited<
  ReturnType<typeof technicalWritingSearchParamsCache.parse>
>;
````

## File: lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
````

## File: .prettierrc
````
{
  "plugins": [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "tailwindFunctions": ["cn"],
  "tailwindStylesheet": "./app/globals.css",
  "importOrder": [
    "^react$",
    "^next/(.*)$",
    "",

    "<THIRD_PARTY_MODULES>",
    "",

    "^@/config/(.*)$",
    "^@/db/(.*)$",
    "^@/types/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "",

    "^@/components/(.*)$",
    "",

    "^[./]"
  ],
  "importOrderTypeScriptVersion": "5.0.0",
  "overrides": [{ "files": "*.mdx", "options": { "importOrder": [] } }]
}
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
````

## File: drizzle.config.ts
````typescript
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
````

## File: eslint.config.mjs
````javascript
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: repomix.config.json
````json
{
  "output": {
    "style": "markdown"
  },
  "ignore": {
    "customPatterns": [
      "app/\\(posts\\)/**",
      "lambda/dist/**",
      "public/**",
      "**/*.svg"
    ]
  }
}
````

## File: app/(admin)/access-denied/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Access Denied",
  description: "You do not have permission to access this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccessDeniedPageLayout(
  props: LayoutProps<"/access-denied">,
) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(auth)/signin/error/page.tsx
````typescript
import { Icons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const metadata = {
  title: "Authentication Error",
  description: "An error occurred during sign in",
};

export default function AuthErrorPage() {
  return (
    <Empty className="mx-auto max-w-2xl">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="text-red-600">
          <Icons.alertTriangle className="size-6" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle className="text-2xl font-semibold text-red-900">
        Authentication Error
      </EmptyTitle>
      <EmptyDescription className="text-balance text-base text-neutral-600">
        Failed to complete sign in. Please try again.
      </EmptyDescription>
      <EmptyContent>
        <ArrowLink href="/signin" className="font-semibold" direction="left">
          Back to Sign In
        </ArrowLink>
      </EmptyContent>
    </Empty>
  );
}
````

## File: app/(auth)/signin/page.tsx
````typescript
import { SignInWithGoogleForm } from "@/components/signin-with-google-form";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="mx-auto max-w-[400px] space-y-6 px-4">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Welcome Back
        </h1>
      </div>

      <SignInWithGoogleForm next={next} />
    </div>
  );
}
````

## File: app/(blog)/blog/[slug]/page.tsx
````typescript
import type { Metadata } from "next";

import { getBlogPostBySlug } from "@/lib/get-blog-post-by-slug";
import { getBlogPostsSlugs } from "@/lib/get-blog-posts-slugs";

import { BlogPostLayout } from "@/components/blog/blog-post-layout";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  try {
    const { slug } = await props.params;
    const { frontmatter } = await getBlogPostBySlug(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: frontmatter.author }],
      keywords: frontmatter.tags,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.publishedAt,
        modifiedTime: frontmatter.updatedAt,
        authors: [frontmatter.author],
        tags: frontmatter.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata for blog post:", error);
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

export async function generateStaticParams() {
  return getBlogPostsSlugs();
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const { frontmatter, toc, ContentComponent, rawContent } =
    await getBlogPostBySlug(slug);

  return (
    <BlogPostLayout frontmatter={frontmatter} toc={toc} rawContent={rawContent}>
      <ContentComponent />
    </BlogPostLayout>
  );
}
````

## File: app/api/auth/[...lucidauth]/route.ts
````typescript
import { handler } from "@/auth";

export { handler as GET, handler as POST };
````

## File: app/courses/page.tsx
````typescript
import { ArrowLink } from "@/components/ui/arrow-link";

export default function CoursesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center">
        <ArrowLink
          href="/"
          className="mb-4 text-center font-mono font-semibold text-sky-700"
          direction="left"
        >
          Back to home
        </ArrowLink>
        <h1>Courses</h1>
        <p className="mt-4 text-lg text-neutral-700">Coming soon…</p>
      </div>
    </div>
  );
}
````

## File: app/actions.ts
````typescript
"use server";

import { signIn, signOut } from "@/auth";
import { LucidAuthError } from "lucidauth/core/errors";

import { rethrowIfRedirect } from "@/lib/auth/next-redirect";

export async function signInWithGoogle(redirectTo: string = "/admin") {
  try {
    await signIn("google", { redirectTo: redirectTo as `/${string}` });
  } catch (error) {
    rethrowIfRedirect(error);

    console.log("signInWithGoogle error: ", error);

    if (error instanceof LucidAuthError) {
      return { error: "Google sign-in failed. Please try again." };
    }
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function signOutAction() {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    rethrowIfRedirect(error);
    return { error: "Something went wrong during sign out." };
  }
}
````

## File: components/forms/add-oss-project-form.tsx
````typescript
"use client";

import { useActionState, useEffect } from "react";

import { AddOssProjectState } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSpinDelay } from "spin-delay";
import { z } from "zod";

import { addOssProject } from "@/lib/actions";
import { AddOssProjectFormSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type OssProjectFormValues = z.infer<typeof AddOssProjectFormSchema>;

export function AddOssProjectForm({ className }: { className?: string }) {
  const initialState: AddOssProjectState = {
    ok: false,
    formError: undefined,
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    addOssProject,
    initialState,
  );

  const form = useForm<OssProjectFormValues>({
    resolver: zodResolver(AddOssProjectFormSchema),
    defaultValues: {
      url: "",
    },
  });

  useEffect(() => {
    // Handle server-side field errors
    if (state?.errors?.url?.length) {
      form.setError("url", {
        type: "server",
        message: state.errors.url[0],
      });
    }
    // On success, reset the form
    if (state.ok) {
      form.reset();
    }
  }, [state, form]);

  const showSpinner = useSpinDelay(isPending, {
    delay: 200, // wait 200ms before showing spinner
    minDuration: 400, // once shown, keep spinner visible at least 400ms
  });

  return (
    <Form {...form}>
      <form action={formAction} className={cn("space-y-8", className)}>
        <FormSuccess message={!isPending ? state.formSuccess : undefined} />
        <FormError message={!isPending ? state.formError : undefined} />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Repository URL</FormLabel>
              <FormControl>
                <Input
                  className="h-10"
                  placeholder="https://github.com/yamadashy/repomix"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {showSpinner ? (
            <>
              <Icons.spinner className="size-4 animate-spin" />
              Add Project
            </>
          ) : (
            "Add Project"
          )}
        </Button>
      </form>
    </Form>
  );
}
````

## File: components/navigation/hire-me-button.tsx
````typescript
"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export function HireMeButton() {
  return (
    <Link
      href="/hire-me"
      className={cn(
        buttonVariants({ variant: "default", size: "sm" }),
        "rounded-full px-6 font-bold",
      )}
    >
      Hire Me
    </Link>
  );
}
````

## File: components/navigation/user-auth-status.tsx
````typescript
import { getSession } from "@/lib/auth/session";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { UserAccountNavClient } from "@/components/navigation/user-account-nav-client";

export async function UserAuthStatus() {
  const { user } = await getSession();

  if (user?.email) {
    return <UserAccountNavClient email={user.email} />;
  }

  return <HireMeButton />;
}
````

## File: components/ui/checkbox.tsx
````typescript
"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-border shadow-xs focus-ring aria-invalid:border-destructive aria-invalid:ring-destructive data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary peer size-4 shrink-0 rounded-[4px] border transition-shadow disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
````

## File: components/ui/dropdown-menu.tsx
````typescript
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
````

## File: components/ui/empty.tsx
````typescript
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
````

## File: components/ui/pagination.tsx
````typescript
import * as React from "react";

import { MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { AnimatedArrowIcon } from "@/components/animated-arrow-icon";
import { Button, buttonVariants } from "@/components/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("group gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <AnimatedArrowIcon direction="left" />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("group gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <AnimatedArrowIcon direction="right" />{" "}
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
````

## File: components/ui/sidebar.tsx
````typescript
"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  desktopFixed = true,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  desktopFixed?: boolean;
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "w-(--sidebar-width) bg-sidebar text-sidebar-foreground flex h-full flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar text-sidebar-foreground p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="text-sidebar-foreground group peer hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "w-(--sidebar-width) relative bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          desktopFixed
            ? "w-(--sidebar-width) fixed inset-y-0 z-10 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex"
            : "w-(--sidebar-width) relative z-10 hidden h-full transition-[width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-slot="sidebar-rail"
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring outline-hidden flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring outline-hidden peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="max-w-(--skeleton-width) h-4 flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
````

## File: components/ui/topic-tag-group.tsx
````typescript
"use client";

import { Tag, TagGroup, TagList } from "@/components/tag-group";

type TopicTagGroupProps = {
  topics: string[];
};

export function TopicTagGroup({ topics }: TopicTagGroupProps) {
  if (!topics || topics.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Project Topics">
      <TagList className="flex flex-wrap gap-3">
        {topics.map((topic) => (
          <Tag key={topic} href={`/oss?topic=${encodeURIComponent(topic)}`}>
            {topic}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
````

## File: components/animated-arrow-icon.tsx
````typescript
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { cn } from "@/lib/utils";

type AnimatedArrowIconProps = {
  direction: "left" | "right";
  restingColor?: string;
  hoverColor?: string;
};

export function AnimatedArrowIcon({
  direction,
  restingColor = "text-foreground/50",
  hoverColor = "text-foreground",
}: AnimatedArrowIconProps) {
  const Icon = direction === "left" ? BiSolidLeftArrow : BiSolidRightArrow;

  return (
    <div className="relative size-2.5 shrink-0 overflow-hidden">
      <Icon
        className={cn(
          "duration-400 absolute left-0 top-0 size-2.5 scale-100 transition-all ease-out",
          restingColor,
          direction === "right"
            ? "group-hover:translate-x-2 group-hover:scale-95 group-hover:opacity-0"
            : "group-hover:-translate-x-2 group-hover:scale-95 group-hover:opacity-0",
        )}
        aria-hidden="true"
      />
      <Icon
        className={cn(
          "duration-400 absolute left-0 top-0 size-2.5 scale-95 opacity-0 transition-all ease-out",
          hoverColor,
          direction === "right"
            ? "-translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            : "translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
````

## File: components/dynamic-breadcrumb.tsx
````typescript
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type DynamicBreadcrumbProps = {
  className?: string;
};

export function DynamicBreadcrumb({ className }: DynamicBreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="font-mono font-medium text-neutral-500 hover:text-sky-700"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-mono font-medium text-neutral-500">
                    {segment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="font-mono font-medium text-neutral-500 hover:text-sky-700"
                    >
                      {segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
````

## File: components/icons.tsx
````typescript
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleX,
  Copy,
  Eye,
  EyeOff,
  Filter,
  FilterX,
  GitFork,
  Globe,
  LayoutDashboard,
  Link as LinkIcon,
  ListFilter,
  Loader,
  LoaderCircle,
  Lock,
  LogOut,
  LucideProps,
  Plus,
  Search,
  Slash,
  Sparkle,
  Star,
  TableOfContents,
  Tags,
  User,
  Users,
  UserStar,
  X,
} from "lucide-react";

export const Icons = {
  admin: UserStar,
  slash: Slash,
  circleX: CircleX,
  filter: Filter,
  filterX: FilterX,
  checkCircle: CheckCircle,
  alertTriangle: AlertTriangle,
  plus: Plus,
  users: Users,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  copy: Copy,
  dashboard: LayoutDashboard,
  eye: Eye,
  eyeOff: EyeOff,
  link: LinkIcon,
  listFilter: ListFilter,
  logOut: LogOut,
  loader: Loader,
  lock: Lock,
  search: Search,
  sparkle: Sparkle,
  spinner: LoaderCircle,
  star: Star,
  tags: Tags,
  toc: TableOfContents,
  user: User,
  x: X,
  gitFork: GitFork,
  globe: Globe,
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      {/* SVG paths for Google logo */}
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  ),
};
````

## File: components/oss-projects-pagination.tsx
````typescript
"use client";

import { useMemo, type TransitionStartFunction } from "react";

import { useQueryStates } from "nuqs";

import { calculatePaginationRange } from "@/lib/pagination";
import { searchParams } from "@/lib/search-params";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type OssProjectsPaginationProps = {
  totalPages: number;
  className?: string;
  startTransition: TransitionStartFunction;
};

export function OssProjectsPagination({
  totalPages,
  className,
  startTransition,
}: OssProjectsPaginationProps) {
  const isMobile = useIsMobile();

  const [filters, setFilters] = useQueryStates(searchParams, {
    startTransition,
    shallow: false,
    scroll: true,
  });
  const currentPage = filters.page;

  const siblingCount = isMobile ? 1 : 1;

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setFilters({ page });
    }
  };

  return (
    <Pagination className={cn("mt-16", className)}>
      <PaginationContent className="w-full">
        <PaginationItem className="mr-auto">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            className={cn(
              "select-none",
              isFirstPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {paginationRange.map((pageNumberOrEllipsis, index) => {
          if (typeof pageNumberOrEllipsis === "string") {
            return (
              <PaginationItem key={`${pageNumberOrEllipsis}-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          const pageNumber = pageNumberOrEllipsis;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="select-none"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem className="ml-auto">
          <PaginationNext
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            className={cn(
              "select-none",
              isLastPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
````

## File: components/signin-with-google-form.tsx
````typescript
"use client";

import { useState } from "react";

import { signInWithGoogle } from "@/app/actions";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function SignInWithGoogleForm({ next }: { next?: string }) {
  const [isPending, setIsPending] = useState(false);

  async function handleSignInWithGoogle() {
    try {
      setIsPending(true);
      await signInWithGoogle(next);
    } catch (error) {
      console.error("Sign in error:", error);
      setIsPending(false);
    }
  }

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={handleSignInWithGoogle}
      disabled={isPending}
      className="focus-ring hover:bg-accent h-12 w-full border text-neutral-700 hover:text-neutral-900"
    >
      {isPending ? (
        <Icons.spinner className="mr-2 size-6 animate-spin" />
      ) : (
        <Icons.google className="mr-2 size-6" />
      )}
      Sign in with Google
    </Button>
  );
}
````

## File: config/navbar.ts
````typescript
import type { AdminNavItem, NavItem } from "@/types";

import { Icons } from "@/components/icons";

type NavbarConfig = {
  main: NavItem[];
  adminSidebar: AdminNavItem[];
};

export const navbarLinks: NavbarConfig = {
  main: [
    { title: "Blog", href: "/blog" },
    { title: "OSS", href: "/oss" },
    { title: "Projects", href: "/projects" },
    { title: "Technical Writing", href: "/technical-writing" },
  ],
  adminSidebar: [
    {
      title: "Add OSS Project",
      href: "/admin/add-oss-project",
      icon: Icons.plus,
    },
    {
      title: "Users",
      href: "/admin/manage-users",
      icon: Icons.users,
    },
  ],
};
````

## File: db/schema.ts
````typescript
import { integer, pgTable, pgEnum, text, timestamp, uuid, boolean, unique } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";


// --------------------------------------------
// OSS Projects Table
// --------------------------------------------

export const ossProjects = pgTable("oss_projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  url: text("url").notNull().unique(),
  description: text("description"),
  stars: integer("stargazers_count").notNull(),
  forks: integer("forks_count").notNull(),
  openIssues: integer("open_issues_count").notNull(),
  subscribers: integer("subscribers_count").notNull(),
  language: text("language"),
  topics: text("topics").array(),
  homepage: text("homepage"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const providerEnum = pgEnum("provider", ["google", "credential"]);

// --------------------------------------------
// Users Table
// --------------------------------------------

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  name: text("name"),
  picture: text("picture"),
  createdAt: timestamp("created_at", { mode: "date", withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { mode: "date", withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

// --------------------------------------------
// Accounts Table
// --------------------------------------------
export const accounts = pgTable(
  "accounts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    provider: providerEnum("provider").notNull(),
    providerAccountId: text("provider_account_id"),
    passwordHash: text("password_hash"),
    createdAt: timestamp("created_at", { mode: "date", withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [unique().on(table.userId, table.provider)]
);

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

// --------------------------------------------
// Types
// --------------------------------------------
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;
export type InsertOssProject = typeof ossProjects.$inferInsert;
export type SelectOssProject = typeof ossProjects.$inferSelect;
````

## File: drizzle/migrations/meta/_journal.json
````json
{
  "version": "7",
  "dialect": "postgresql",
  "entries": [
    {
      "idx": 0,
      "version": "7",
      "when": 1758300122272,
      "tag": "0000_melodic_franklin_richards",
      "breakpoints": true
    },
    {
      "idx": 1,
      "version": "7",
      "when": 1758383894965,
      "tag": "0001_cloudy_fabian_cortez",
      "breakpoints": true
    },
    {
      "idx": 2,
      "version": "7",
      "when": 1758388862839,
      "tag": "0002_supreme_ben_parker",
      "breakpoints": true
    },
    {
      "idx": 3,
      "version": "7",
      "when": 1758389440196,
      "tag": "0003_pink_white_tiger",
      "breakpoints": true
    },
    {
      "idx": 4,
      "version": "7",
      "when": 1765360298365,
      "tag": "0004_last_doctor_spectrum",
      "breakpoints": true
    }
  ]
}
````

## File: drizzle/migrations/meta/0004_snapshot.json
````json
{
  "id": "ea8a5995-653b-4c0a-9ac4-5abf3d3e7dd7",
  "prevId": "d4615476-f890-4cd1-a205-54dc37015282",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.accounts": {
      "name": "accounts",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "user_id": {
          "name": "user_id",
          "type": "uuid",
          "primaryKey": false,
          "notNull": true
        },
        "provider": {
          "name": "provider",
          "type": "provider",
          "typeSchema": "public",
          "primaryKey": false,
          "notNull": true
        },
        "provider_account_id": {
          "name": "provider_account_id",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "password_hash": {
          "name": "password_hash",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {
        "accounts_user_id_users_id_fk": {
          "name": "accounts_user_id_users_id_fk",
          "tableFrom": "accounts",
          "tableTo": "users",
          "columnsFrom": [
            "user_id"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "accounts_user_id_provider_unique": {
          "name": "accounts_user_id_provider_unique",
          "nullsNotDistinct": false,
          "columns": [
            "user_id",
            "provider"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    },
    "public.oss_projects": {
      "name": "oss_projects",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "url": {
          "name": "url",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "description": {
          "name": "description",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "stargazers_count": {
          "name": "stargazers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "forks_count": {
          "name": "forks_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "open_issues_count": {
          "name": "open_issues_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "subscribers_count": {
          "name": "subscribers_count",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "language": {
          "name": "language",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "topics": {
          "name": "topics",
          "type": "text[]",
          "primaryKey": false,
          "notNull": false
        },
        "homepage": {
          "name": "homepage",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "oss_projects_url_unique": {
          "name": "oss_projects_url_unique",
          "nullsNotDistinct": false,
          "columns": [
            "url"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    },
    "public.users": {
      "name": "users",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "uuid",
          "primaryKey": true,
          "notNull": true,
          "default": "gen_random_uuid()"
        },
        "email": {
          "name": "email",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "email_verified": {
          "name": "email_verified",
          "type": "boolean",
          "primaryKey": false,
          "notNull": true,
          "default": false
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "picture": {
          "name": "picture",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        },
        "updated_at": {
          "name": "updated_at",
          "type": "timestamp with time zone",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {
        "users_email_unique": {
          "name": "users_email_unique",
          "nullsNotDistinct": false,
          "columns": [
            "email"
          ]
        }
      },
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {
    "public.provider": {
      "name": "provider",
      "schema": "public",
      "values": [
        "google",
        "credential"
      ]
    }
  },
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}
````

## File: drizzle/migrations/0004_last_doctor_spectrum.sql
````sql
CREATE TYPE "public"."provider" AS ENUM('google', 'credential');--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"provider" "provider" NOT NULL,
	"provider_account_id" text,
	"password_hash" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "accounts_user_id_provider_unique" UNIQUE("user_id","provider")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"name" text,
	"picture" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
````

## File: lambda/build.sh
````bash
#!/bin/bash
set -e

# 1. Install dependencies
echo "Installing dependencies..."
npm install

# 2. Build the TS code
echo "Building Lambda function..."
npm run build

# 3. Create the ZIP file
echo "Creating deployment package..."
cd dist
zip -r ../function.zip index.js

echo "✅ Done! Deployment package created at: lambda/function.zip"
````

## File: lambda/package.json
````json
{
  "name": "update-oss-stats",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "esbuild src/index.ts --bundle --platform=node --target=node20 --outfile=dist/index.js"
  },
  "dependencies": {
    "postgres": "^3.4.7"
  },
  "devDependencies": {
    "@types/aws-lambda": "^8.10.145",
    "@types/node": "^20",
    "esbuild": "^0.24.0",
    "typescript": "^5"
  }
}
````

## File: lib/auth/callbacks.ts
````typescript
import type {
  CreateGoogleUserParams,
  CreateGoogleUserReturn,
} from "lucidauth/core/types";
import { db } from "@/db";
import { users, accounts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createGoogleUser(
  userClaims: CreateGoogleUserParams,
): Promise<CreateGoogleUserReturn> {
  const { email, name, picture, sub } = userClaims;

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
    with: {
      accounts: {
        where: eq(accounts.provider, "google"),
      },
    },
  });

  // User exists with a Google account - return email
  if (existingUser && existingUser.accounts.length > 0) {
    return { email };
  }

  // User with Google account does not exist - create user and Google account
  await db.transaction(async (tx) => {
    const [newUser] = await tx
      .insert(users)
      .values({
        email,
        emailVerified: true,
        name,
        picture,
      })
      .returning();

    await tx.insert(accounts).values({
      userId: newUser.id,
      provider: "google",
      providerAccountId: sub,
    });
  });

  return { email };
}
````

## File: lib/auth/next-redirect.ts
````typescript
function isRedirectError(error: unknown): error is Error & { digest: string } {
  return (
    error instanceof Error &&
    "digest" in error &&
    typeof error.digest === "string" &&
    error.digest.startsWith("NEXT_REDIRECT")
  );
}

export function rethrowIfRedirect(error: unknown): void {
  if (isRedirectError(error)) {
    throw error;
  }
}
````

## File: lib/auth/session.ts
````typescript
import { cache } from "react";

import { getUserSession } from "@/auth";

async function getUser() {
  const session = await getUserSession();
  const user = session ? session.user : null;
  return { user };
}

export const getSession = cache(getUser);
````

## File: lib/actions.ts
````typescript
"use server";

import type { AddOssProjectState } from "@/types";
import { z } from "zod";

import { fetchRepoDetails } from "@/lib/fetch-repo-details";
import { parseGitHubUrl } from "@/lib/parse-github-url";
import { saveRepoDetails } from "@/lib/save-repo-details";
import { AddOssProjectFormSchema } from "@/lib/schema";

export async function addOssProject(
  prevState: AddOssProjectState,
  formData: FormData,
): Promise<AddOssProjectState> {
  const data = {
    url: formData.get("url"),
  };

  // Validate form data
  const validatedFormData = AddOssProjectFormSchema.safeParse(data);

  // If form validation is unsuccessful, send back the errors object.
  if (!validatedFormData.success) {
    return {
      ok: false,
      errors: z.flattenError(validatedFormData.error).fieldErrors,
    };
  }

  const parsedUrlResult = parseGitHubUrl(validatedFormData.data.url);

  if (parsedUrlResult.isErr()) {
    return {
      ok: false,
      formError: parsedUrlResult.error.message,
    };
  }

  const { repoOwner, repoName } = parsedUrlResult.value;

  // Fetch repo details and save repo details
  const result = await fetchRepoDetails(repoOwner, repoName).andThen(
    (repoData) => saveRepoDetails(repoData, repoName),
  );

  return result.match(
    (data) => {
      console.log("addOssProject() success: ", data);
      return {
        ok: true,
        formSuccess: `Successfully added the repository: ${repoName}`,
      };
    },
    (error) => {
      console.log("addOssProject() error: ", error);
      return {
        ok: false,
        formError: error.message,
      };
    },
  );
}
````

## File: lib/get-oss-project-by-name.ts
````typescript
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { ResultAsync } from "neverthrow";

import { ossProjects, type SelectOssProject } from "@/db/schema";
import { DatabaseError } from "@/lib/errors";

export function getOssProjectByName(
  name: string,
): ResultAsync<SelectOssProject | undefined, DatabaseError> {
  return ResultAsync.fromPromise(
    db.query.ossProjects.findFirst({
      where: eq(ossProjects.name, name),
    }),
    (error) =>
      new DatabaseError({
        operation: "getOssProjectByName",
        message: "Failed to fetch project from the database.",
        cause: error,
      }),
  );
}
````

## File: lib/pagination.ts
````typescript
export function calculatePaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
): (number | string)[] {
  const totalPageNumbers = siblingCount * 2 + 5; // first + last + current + siblings*2 + dots*2

  // Case 1: Total pages is less than the numbers we want to show -> show all
  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Calculate left and right sibling indices, ensuring they are within bounds
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  // Calculate if dots should be shown
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  // Case 2: No left dots, but right dots needed
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "ellipsis-right", lastPageIndex];
  }

  // Case 3: Left dots needed, but no right dots
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + 1 + i,
    );
    return [firstPageIndex, "ellipsis-left", ...rightRange];
  }

  // Case 4: Both left and right dots needed
  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i,
    );
    return [
      firstPageIndex,
      "ellipsis-left",
      ...middleRange,
      "ellipsis-right",
      lastPageIndex,
    ];
  }

  // Fallback (shouldn't be reached with the logic above)
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
````

## File: lib/rehype-expressive-code-remove-last-blank-twoslash-line-number.mjs
````javascript
import { select } from "hast-util-select";

function hasClass(node, className) {
  return (
    node &&
    node.type === "element" &&
    node.properties &&
    Array.isArray(node.properties.className) &&
    node.properties.className.includes(className)
  );
}

function isWhitespaceOnlyTextNode(node) {
  return node && node.type === "text" && node.value.trim() === "";
}

export function pluginRemoveLastBlankLine() {
  return {
    name: "Remove Last Blank Line",
    hooks: {
      postprocessRenderedBlock: ({ renderData }) => {
        const blockAst = renderData.blockAst;

        const codeElement = select("pre > code", blockAst);
        if (
          !codeElement ||
          !codeElement.children ||
          codeElement.children.length === 0
        ) {
          return;
        }

        const lineElements = codeElement.children.filter(
          (node) => node.type === "element" && hasClass(node, "ec-line"),
        );

        if (lineElements.length === 0) {
          return;
        }

        // Get the last line element
        const lastLine = lineElements[lineElements.length - 1];

        // 1. Check if the last line is blank
        const lastLineCode = select(".code", lastLine);
        const isLastLineBlank =
          lastLineCode &&
          lastLineCode.children &&
          // Check if it's empty OR contains only a whitespace node
          (lastLineCode.children.length === 0 ||
            (lastLineCode.children.length === 1 &&
              isWhitespaceOnlyTextNode(lastLineCode.children[0])));

        // 2. If the last line is blank, remove it
        if (isLastLineBlank) {
          // Find the index of the last line in the *original* children array
          const originalLastLineIndex = codeElement.children.findIndex(
            (child) => child === lastLine,
          );
          if (originalLastLineIndex > -1) {
            codeElement.children.splice(originalLastLineIndex, 1);
          }
        }
      },
    },
  };
}

export default pluginRemoveLastBlankLine;
````

## File: lib/toc.ts
````typescript
import { Item, Items } from "@/types";
import type {
  Link,
  List,
  ListItem,
  Literal,
  Node,
  Paragraph,
  Parent,
  Root,
} from "mdast";
import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: Parent): string {
  const p: string[] = [];
  visit(node, (visitedNode: Node) => {
    if (textTypes.includes(visitedNode.type) && "value" in visitedNode) {
      p.push(String((visitedNode as Literal).value));
    }
  });
  return p.join("");
}

function getItems(
  node: Node | null | undefined,
  current: Partial<Item>,
): Partial<Item> {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node as Paragraph, (itemNode: Node) => {
      if (itemNode.type === "link") {
        current.url = (itemNode as Link).url;
        current.title = flattenNode(node as Paragraph);
      }
      if (itemNode.type === "text" && !current.url) {
        current.title = flattenNode(node as Paragraph);
      }
    });
    return current;
  }

  if (node.type === "list") {
    current.items = (node as List).children
      .map((listItem: ListItem) => getItems(listItem, {}))
      .filter(
        (item): item is Item =>
          item.title !== undefined && item.url !== undefined,
      );
    return current;
  } else if (node.type === "listItem") {
    const listItemChildren = (node as ListItem).children;
    const heading = getItems(listItemChildren[0], {});
    if (listItemChildren.length > 1) {
      getItems(listItemChildren[1], heading);
    }
    return heading;
  }

  return {};
}

const getToc = () => (node: Root, file: VFile) => {
  const table = toc(node, { maxDepth: 3, tight: true });
  file.data.toc = table.map ? getItems(table.map, {}) : {};
};

export type TableOfContents = Items;

export async function getTableOfContents(
  content: string,
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);
  return (result.data.toc || {}) as TableOfContents;
}
````

## File: terraform/.terraform.lock.hcl
````hcl
# This file is maintained automatically by "terraform init".
# Manual edits may be lost in future updates.

provider "registry.terraform.io/hashicorp/aws" {
  version     = "5.65.0"
  constraints = "~> 5.65.0"
  hashes = [
    "h1:OG8xMZjGZL/OtEV9OwX0CTPcUzvSfcfiB0X9lcs2joY=",
    "zh:036f8557c8c9b58656e1ec08ed5702e44bd338fda17dc4b2add40b234102e29a",
    "zh:0ba0708ece98735540070899a916b7a90c5c887be31ffd693ee1359e40245978",
    "zh:12d82a82ae0e3bc580f2be961078e89d129e12df7dd82a6ec610a2b945bba1a4",
    "zh:1ed0ee17df8807aef64976e2a4276d2a3e1d54efeae2a86f596d12eccb94dc83",
    "zh:36b7c61a83d24f612156b4648027ba8bd5727f0ed57183cbad0e6c93b7503aa2",
    "zh:496d06a089b1bc8d60995e8dddfe1d87c605a208f377a60b17987e89381dafda",
    "zh:4e9aba435994589befe4279927c71a461a52e6cd96b8f0437295c18c50f6baff",
    "zh:71134031288a312db1804d4798b10f106a843c36aafd7b8fe8f4859156d7df93",
    "zh:748d0dbdfbe8df4b516a09b23b3981c19cef9a255c1ca0187e84ab424e6bd845",
    "zh:783541ff77f4e7c74c817e0e2989ebdb45dd6e2c9853a8cccbcf5f1976736a76",
    "zh:9b12af85486a96aedd8d7984b0ff811a4b42e3d88dad1a3fb4c0b580d04fa425",
    "zh:af3f080975d5ed79917b8238cc0ae3150da688bc89e12dcc3ee85134b29857d0",
    "zh:ec542372c3ffbfc3df6966f77357f8af7319d4bd956ff8e9fde0bbd124352e34",
    "zh:f3dc7b2b5b55173207c2fd35ed6bb8cc66b06af777e221060ca2f0c0afdecbb5",
    "zh:f9631ecc21d6e5cf82ef6ef8d14c39e1dfb2a52cc8f0abb684311885ffdb79a1",
  ]
}
````

## File: terraform/outputs.tf
````hcl
output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.oss_updater.function_name
}

output "lambda_function_arn" {
  description = "ARN of the Lambda function"
  value       = aws_lambda_function.oss_updater.arn
}

output "cloudwatch_log_group" {
  description = "CloudWatch Log Group for Lambda logs"
  value       = aws_cloudwatch_log_group.lambda_logs.name
}

output "schedule_arn" {
  description = "ARN of the EventBridge schedule"
  value       = aws_scheduler_schedule.weekly_oss_update.arn
}
````

## File: terraform/providers.tf
````hcl
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}
````

## File: terraform/response.json
````json
{"statusCode":200,"body":"{\"message\":\"Update complete\",\"success\":297,\"failed\":0}"}
````

## File: terraform/terraform.tf
````hcl
terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.65.0"
    }
  }
}
````

## File: terraform/variables.tf
````hcl
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "hemanta-blog"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "database_url" {
  description = "PostgreSQL connection string"
  type        = string
  sensitive   = true
}

variable "github_token" {
  description = "GitHub personal access token for API requests"
  type        = string
  sensitive   = true
}

variable "schedule_expression" {
  description = "Cron expression for the scheduler (EventBridge format)"
  type        = string
  default     = "cron(0 0 ? * SUN *)"
}
````

## File: types/index.ts
````typescript
import type { LucideIcon } from "lucide-react";
import type { Route } from "next";
import { z } from "zod";

import { AddOssProjectFormSchema } from "@/lib/schema";

export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  author: string;
  isPublished: boolean;
}

export type BlogPost = Frontmatter & {
  slug: string;
};

export type Item = {
  title: string;
  url: string;
  items?: Item[];
};

export type Items = {
  items?: Item[];
};

export type KodeKloudPost = {
  id: number;
  title: string;
  image: string;
  href: string;
  category: string[];
  publishedAt: string;
};

export type NavItem = {
  title: string;
  href: Route;
};

export type AdminNavItem = NavItem & {
  icon: LucideIcon;
};

export type GitHubRepoData = {
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  subscribers_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  homepage: string | null;
};

type FormErrors<T extends z.ZodTypeAny> = Partial<
  Record<keyof z.infer<T>, string[]>
>;

export type AddOssProjectState = {
  ok: boolean;
  errors?: FormErrors<typeof AddOssProjectFormSchema>;
  formError?: string;
  formSuccess?: string;
};
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# Terraform
.terraform/
*.tfstate
*.tfstate.*
crash.log
crash.*.log
*.tfvars
*.tfvars.json
override.tf
override.tf.json
*_override.tf
*_override.tf.json
.terraformrc
terraform.rc
````

## File: auth.ts
````typescript
import { lucidAuth } from "lucidauth/next-js";
import { Google } from "lucidauth/providers/google";

import { createGoogleUser } from "@/lib/auth/callbacks";

export const {
  signIn,
  signOut,
  getUserSession,
  extendUserSessionMiddleware,
  handler,
} = lucidAuth({
  baseUrl: process.env.BASE_URL!,
  session: {
    secret: process.env.SESSION_SECRET!,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account",
      onAuthentication: {
        createGoogleUser,
        redirects: {
          error: "/signin/error",
        },
      },
    }),
  ],
});
````

## File: app/(admin)/access-denied/page.tsx
````typescript
import { Icons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function AccessDeniedPage() {
  return (
    <Empty className="px-4">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Icons.lock className="text-muted-foreground size-8" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle className="text-2xl font-semibold">Access Denied</EmptyTitle>
      <EmptyDescription className="max-w-md text-balance text-base text-neutral-600">
        This page is restricted to administrators only. You do not have
        permission to view this content.
      </EmptyDescription>
      <EmptyContent>
        <ArrowLink href="/" className="font-semibold" direction="left">
          Back to Home
        </ArrowLink>
      </EmptyContent>
    </Empty>
  );
}
````

## File: app/(hire-me)/hire-me/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Hire Me | Hemanta Sundaray",
  description: "Hire Hemanta Sundaray - Full Stack Web Developer",
};

export default function HireMeLayout(props: LayoutProps<"/hire-me">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(hire-me)/hire-me/page.tsx
````typescript
export default function HireMePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 xl:px-0">
      <div>
        <h1 className="text-center">Hire Me</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
          <p>
            I am looking for my first professional role in the software
            engineering industry. Specifically, I am seeking a full-stack web
            developer position with a backend focus.
          </p>
          <p>
            I work with <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Node.js</strong>, and <strong>PostgreSQL</strong>.
          </p>
          <p>
            If you have a suitable opportunity for me, please reach out at{" "}
            <a
              href="mailto:rawgrittt@gmail.com"
              className="font-medium text-sky-700 hover:underline"
            >
              rawgrittt@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
````

## File: app/(oss)/oss/[repo]/not-found.tsx
````typescript
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <Empty>
      <EmptyTitle className="text-2xl font-semibold">
        Project Not Found
      </EmptyTitle>
      <EmptyDescription className="max-w-2xl text-balance text-base text-neutral-600">
        Oops! We couldn&apos;t find the project you were looking for. It might
        have been moved, or the URL may be incorrect.
      </EmptyDescription>
      <EmptyContent>
        <ArrowLink href="/oss" className="font-semibold" direction="left">
          Back to OSS
        </ArrowLink>
      </EmptyContent>
    </Empty>
  );
}
````

## File: app/global-not-found.tsx
````typescript
import "@/app/styles/globals.css";

import { Geist } from "next/font/google";

import type { Metadata } from "next";

import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-4">
        <div className="container flex max-w-7xl flex-col items-center text-center">
          <Empty>
            <EmptyTitle className="text-2xl font-semibold">
              404 - Page Not Found
            </EmptyTitle>
            <EmptyDescription className="text-base text-neutral-600">
              Oops! The page you&apos;re looking for seems to have gone on a
              little adventure.
            </EmptyDescription>
            <EmptyContent>
              <ArrowLink href="/">Return to home</ArrowLink>
            </EmptyContent>
          </Empty>
        </div>
      </body>
    </html>
  );
}
````

## File: components/blog/blog-posts-search.tsx
````typescript
"use client";

import * as React from "react";
import { useCallback } from "react";

import { debounce, useQueryStates } from "nuqs";

import { blogSearchParams } from "@/lib/blog-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

export function BlogPostsSearch({ className }: { className?: string }) {
  const [values, setValues] = useQueryStates(
    {
      query: blogSearchParams.query,
      page: blogSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );

  const clearSearch = useCallback(() => {
    setValues({ query: null, page: null });
  }, [setValues]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <div className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          placeholder="Search posts by name or description…"
          className="col-start-1 row-start-1 h-12 rounded-full pl-10"
          value={values.query}
          onChange={(e) =>
            setValues(
              { query: e.target.value, page: null },
              {
                limitUrlUpdates:
                  e.target.value === "" ? undefined : debounce(300),
              },
            )
          }
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {values.query && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="bg-background text-muted-foreground hover:bg-accent focus-ring pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-sm transition-colors"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
````

## File: components/blog/tag-display-list.tsx
````typescript
"use client";

import { cn } from "@/lib/utils";

import { Tag, TagGroup, TagList } from "@/components/tag-group";

type TagDisplayListProps = {
  tags: string[];
  className?: string;
};

export function TagDisplayList({ tags, className }: TagDisplayListProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <TagGroup aria-label="Blog post tags" className={cn(className)}>
      <TagList className="flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
          <Tag key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
            {tag}
          </Tag>
        ))}
      </TagList>
    </TagGroup>
  );
}
````

## File: components/navigation/user-account-nav-client.tsx
````typescript
"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { signOutAction } from "@/app/actions";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserAccountNavClientProps = {
  email: string;
};

// You can also import this from a shared config file if you prefer
const ADMIN_EMAIL = "rawgrittt@gmail.com";

export function UserAccountNavClient({ email }: UserAccountNavClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isAdmin = email === ADMIN_EMAIL;

  function handleOpenChange(open: boolean) {
    if (isPending) return;
    setIsOpen(open);
  }

  function handleSignOut() {
    startTransition(async () => {
      try {
        await signOutAction();
      } catch (error) {
        console.error("Sign out failed: ", error);
      }
    });
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger className="focus-ring flex items-center space-x-1 rounded-full px-4 py-2 outline-none hover:bg-neutral-100">
        <span className="text-sm font-medium text-neutral-900">My Account</span>
        <Icons.chevronDown className="inline-block size-4 text-neutral-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="z-200 w-60">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-neutral-500">Signed in as</p>
            <p className="truncate text-sm font-medium text-neutral-600">
              {email}
            </p>
          </div>
        </div>

        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/admin"
                className="flex cursor-pointer items-center gap-2 text-neutral-700 focus:bg-neutral-100 focus:text-neutral-900"
              >
                <Icons.admin className="size-4" />
                <span className="font-medium">Admin</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}

        {!isAdmin && <DropdownMenuSeparator />}

        <div className="p-2">
          <Button
            onClick={handleSignOut}
            disabled={isPending}
            className="w-full"
            variant="default"
          >
            {isPending ? (
              <>
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                <span className="text-sm">Sign out</span>
              </>
            ) : (
              <>
                <Icons.logOut className="mr-2 size-4" />
                <span className="text-sm">Sign out</span>
              </>
            )}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
````

## File: components/technical-writing/kodekloud-testimonial.tsx
````typescript
import { cn } from "@/lib/utils";

export function KodeKloudTestimonial() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <h2 className="mb-8 text-4xl">Testimonial</h2>
      <figure className="text-left">
        <blockquote>
          <svg
            className="mb-4 size-8 text-neutral-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <div
            className={cn(
              "font-merriweather space-y-6 text-base text-neutral-700",
            )}
          >
            <p>
              &quot;In the last 6 months, I have had the pleasure of editing
              many articles created by Hemanta, and I can confidently say that
              he is one of the most dedicated and hardworking writers I have
              ever had the pleasure of working with.
            </p>
            <p>
              He is very gifted at creating engaging articles that are logically
              organized, accurate, and capturing the main point. One of his most
              outstanding qualities is the ability to create perfect examples to
              explain DevOps concepts or implementations.
            </p>
            <p>
              His attention to detail and commitment to excellence is truly
              inspiring. I&apos;m always looking forward to reading his
              articles.&quot;
            </p>
          </div>
        </blockquote>
        <figcaption className="mt-6 flex flex-col pt-4 text-sm text-neutral-600">
          <span className="font-semibold text-neutral-700">
            Benson Kuria Macharia
          </span>
          <span>Editor @ KodeKloud</span>
        </figcaption>
      </figure>
    </section>
  );
}
````

## File: components/technical-writing/playgrounds-section.tsx
````typescript
import { playgroundItems } from "@/data/kodekloud";

import { Icons } from "@/components/icons";

export function PlaygroundsSection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl">Playground Write-ups</h2>
        <p className="mt-4 text-pretty text-lg text-neutral-700">
          In addition to the articles above, I created write-ups for the
          following KodeKloud playgrounds: interactive sandboxes to experiment
          with various cloud and DevOps technologies.
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3 md:text-base">
        {playgroundItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-neutral-700 transition-colors hover:text-sky-700"
            >
              <Icons.arrowUpRight className="size-3.5 shrink-0 text-sky-700" />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
````

## File: components/technical-writing/rewritten-articles-section.tsx
````typescript
import { revisedBlogItems } from "@/data/kodekloud";

import { Icons } from "@/components/icons";

export function RewrittenArticlesSection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl">Rewritten Articles</h2>
        <p className="mt-4 text-pretty text-lg text-neutral-700">
          I also rewrote the following articles to improve their clarity,
          readability, and technical accuracy. Please note that these are
          credited under the original author&apos;s name to acknowledge his
          initial contribution.
        </p>
      </div>

      <ul className="mx-auto mt-12 max-w-2xl space-y-4">
        {revisedBlogItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-neutral-700 transition-colors hover:text-sky-700"
            >
              <Icons.arrowUpRight className="size-3.5 shrink-0 text-sky-700" />
              <span className="text-left">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
````

## File: components/technical-writing/technical-writing-search.tsx
````typescript
"use client";

import { useCallback, type ChangeEvent, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

type TechnicalWritingSearchProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
};

export function TechnicalWritingSearch({
  className,
  value,
  onChange,
}: TechnicalWritingSearchProps) {
  const clearSearch = useCallback(() => {
    onChange("");
  }, [onChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <search className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          value={value}
          placeholder="Search articles by title…"
          className="col-start-1 row-start-1 h-12 rounded-full pl-10"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {value && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="focus-ring bg-background text-muted-foreground hover:bg-accent pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-sm transition-colors"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </search>
  );
}
````

## File: components/technical-writing/technical-writing-tags.tsx
````typescript
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";
import { Button, type Selection as AriaSelection } from "react-aria-components";

import { technicalWritingSearchParams } from "@/lib/technical-writing-search-params";

import { Icons } from "@/components/icons";
import { Tag, TagGroup, TagList } from "@/components/tag-group";
import { TagScroller } from "@/components/tag-scroller";

type TechnicalWritingTagsProps = {
  tags: string[];
};

export function TechnicalWritingTags({ tags }: TechnicalWritingTagsProps) {
  const [urlState, setUrlState] = useQueryStates(
    {
      tag: technicalWritingSearchParams.tag,
      page: technicalWritingSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );
  const selectedTags = urlState.tag;

  const handleSelectionChange = (keys: AriaSelection) => {
    let newTags: string[];
    if (keys === "all") {
      newTags = tags;
    } else {
      newTags = Array.from(keys) as string[];
    }

    setUrlState({
      tag: newTags.length > 0 ? newTags : null,
      page: null,
    });
  };

  return (
    <div className="space-y-4">
      <TagScroller>
        <TagGroup
          aria-label="Technical writing categories"
          className="w-full"
          selectionMode="multiple"
          selectedKeys={selectedTags}
          onSelectionChange={handleSelectionChange}
        >
          <TagList className="flex flex-nowrap items-center gap-3">
            {tags.map((tag) => (
              <Tag key={tag} id={tag}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </TagGroup>
      </TagScroller>
      <AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <TagGroup
              aria-label="Selected tags"
              onRemove={(keys) => {
                const tagsToRemove = Array.from(keys) as string[];
                handleSelectionChange(
                  new Set(
                    selectedTags.filter((t) => !tagsToRemove.includes(t)),
                  ),
                );
              }}
            >
              <TagList className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <Tag
                    key={tag}
                    id={tag}
                    className="flex items-center justify-between gap-1 bg-sky-200/40 text-neutral-700 hover:bg-sky-200 hover:text-neutral-700"
                  >
                    {tag}
                    <Button
                      slot="remove"
                      aria-label={`Remove ${tag} filter`}
                      className="-mr-1 size-6 rounded-full transition-colors hover:bg-sky-300/40"
                    >
                      <Icons.x className="inline-block size-5" />
                    </Button>
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
````

## File: components/ui/arrow-link.tsx
````typescript
"use client";

import React from "react";
import Link from "next/link";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { cn } from "@/lib/utils";

type ArrowLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
};

export function ArrowLink({
  children,
  className,
  href,
  direction = "right",
  ...props
}: ArrowLinkProps) {
  const classes = cn(
    "bg-background focus-ring group relative inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-sky-700 dark:text-sky-400",
    className,
  );

  const Arrow = () => {
    const Icon = direction === "left" ? BiSolidLeftArrow : BiSolidRightArrow;
    return (
      <div className="relative grid size-2.5">
        <Icon
          className={cn(
            "duration-400 absolute left-0 top-0 size-2.5 scale-100 transition-all ease-out",
            "text-sky-700/50 dark:text-sky-400",
            direction === "right"
              ? "group-hover:translate-x-2 group-hover:scale-95 group-hover:opacity-0"
              : "group-hover:-translate-x-2 group-hover:scale-95 group-hover:opacity-0",
          )}
        />
        <Icon
          className={cn(
            "duration-400 absolute left-0 top-0 size-2.5 scale-95 opacity-0 transition-all ease-out",
            "text-sky-700 dark:text-sky-400",
            direction === "right"
              ? "-translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              : "translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
          )}
        />
      </div>
    );
  };

  return (
    <Link className={classes} {...props} href={href}>
      {direction === "left" && <Arrow />}
      <span>{children}</span>
      {direction === "right" && <Arrow />}
    </Link>
  );
}
````

## File: components/ui/button.tsx
````typescript
"use client";

import * as React from "react";
import { useState } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

type Ripple = {
  key: number;
  x: number;
  y: number;
  size: number;
};

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 dark:bg-destructive/60 focus-visible:ring-destructive",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "bg-background hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);

    const button = e.currentTarget;
    const { width, height, left, top } = button.getBoundingClientRect();
    const clickX = e.clientX - left;
    const clickY = e.clientY - top;

    const furthestX = clickX > width / 2 ? 0 : width;
    const furthestY = clickY > height / 2 ? 0 : height;
    const radius = Math.sqrt(
      (furthestX - clickX) ** 2 + (furthestY - clickY) ** 2,
    );
    const diameter = radius * 2;

    const newRipple = {
      key: Date.now(),
      x: clickX,
      y: clickY,
      size: diameter,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const handleAnimationComplete = (key: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.key !== key));
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
      onClick={handleClick}
    >
      <AnimatePresence>
        {ripples.map(({ key, x, y, size }) => (
          <motion.div
            key={key}
            className="bg-current/20 absolute rounded-full"
            style={{ left: x, top: y, x: "-50%", y: "-50%" }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: size, height: size, opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onAnimationComplete={() => handleAnimationComplete(key)}
          />
        ))}
      </AnimatePresence>
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
````

## File: components/footer.tsx
````typescript
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 xl:px-0">
        <p className="text-sm text-neutral-600">Built by Hemanta Sundaray</p>
        <a
          href="https://github.com/sundaray/hemanta-blog"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="text-muted-foreground focus-ring hover:text-foreground -mr-2 rounded-md p-2 transition-colors"
        >
          <FaGithub className="size-5" />
        </a>
      </div>
    </footer>
  );
}
````

## File: components/oss-projects-search.tsx
````typescript
"use client";

import { useCallback, type ChangeEvent, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";

// 🔹 MODIFIED: The props have changed completely.
type OssProjectsSearchProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
};

export function OssProjectsSearch({
  className,
  value,
  onChange,
}: OssProjectsSearchProps) {
  // 🔹 REMOVED: The `useQueryStates` hook is gone. This component no longer manages state.

  const clearSearch = useCallback(() => {
    onChange("");
  }, [onChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <search className={cn("relative", className)}>
      <div className="grid w-full grid-cols-1 items-center">
        <Input
          type="search"
          value={value}
          placeholder="Search projects by name or description…"
          className="col-start-1 row-start-1 h-12 rounded-full pl-10"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="pointer-events-none col-start-1 row-start-1 pl-4">
          <Icons.search className="text-muted-foreground size-5" />
        </div>
        {value && (
          <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-4">
            <button
              onClick={clearSearch}
              className="focus-ring bg-background text-muted-foreground hover:bg-accent pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-sm transition-colors"
              aria-label="Clear search"
            >
              esc
            </button>
          </div>
        )}
      </div>
    </search>
  );
}
````

## File: components/project-card.tsx
````typescript
import Link from "next/link";

import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type Project = {
  title: string;
  description: string;
  href: string;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg p-6 transition-all",
        "bg-linear-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,-4px_4px_10px_rgb(0_0_0/0.1)]",
        "hover:scale-[1.02]",
        "has-[a:focus-visible]:-translate-y-1",
        "has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:[&_a:focus-visible]:outline-none",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h2>{project.title}</h2>

        <p className="text-pretty text-neutral-700">{project.description}</p>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 font-medium text-neutral-700 transition-colors hover:text-sky-700",
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          <FaGithub className="size-4" />
          GitHub
          <Icons.arrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
````

## File: lambda/tsconfig.json
````json
{
    "compilerOptions": {
      "target": "ES2022",
      "module": "commonjs",
      "lib": ["ES2022"],
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
  }
````

## File: lib/get-oss-projects.ts
````typescript
import { db } from "@/db";
import {
  and,
  arrayOverlaps,
  count,
  desc,
  ilike,
  inArray,
  or,
  SQL,
} from "drizzle-orm";
import { ResultAsync } from "neverthrow";

import { ossProjects, type SelectOssProject } from "@/db/schema";
import type { OssProjectsSearchParams } from "@/lib/search-params";

import { DatabaseError } from "./errors";

// 🔹 Build the query conditions
function buildConditions(
  filters: Omit<OssProjectsSearchParams, "page">,
): (SQL | undefined)[] {
  const conditions: (SQL | undefined)[] = [];

  if (filters.query) {
    conditions.push(
      or(
        ilike(ossProjects.name, `%${filters.query}%`),
        ilike(ossProjects.description, `%${filters.query}%`),
      ),
    );
  }

  if (filters.topic.length > 0) {
    conditions.push(arrayOverlaps(ossProjects.topics, filters.topic));
  }
  if (filters.language.length > 0) {
    conditions.push(inArray(ossProjects.language, filters.language));
  }

  return conditions;
}

// 🔹 Get the total count of filtered projects
export function getOssProjectsCount(
  filters: Omit<OssProjectsSearchParams, "page">,
): ResultAsync<number, DatabaseError> {
  const conditions = buildConditions(filters);
  const whereClause = and(
    ...conditions.filter((c): c is SQL => c !== undefined),
  );

  return ResultAsync.fromPromise(
    db
      .select({ value: count() })
      .from(ossProjects)
      .where(whereClause)
      .then((res) => res[0].value),
    (error) =>
      new DatabaseError({
        operation: "getOssProjectsCount",
        message: "Failed to count OSS projects.",
        cause: error,
      }),
  );
}

export function getOssProjects(
  filters: OssProjectsSearchParams,
): ResultAsync<SelectOssProject[], DatabaseError> {
  const pageSize = 36;
  const conditions = buildConditions(filters);
  const whereClause = and(
    ...conditions.filter((c): c is SQL => c !== undefined),
  );
  const offset = (filters.page - 1) * pageSize;

  return ResultAsync.fromPromise(
    db
      .select()
      .from(ossProjects)
      .where(whereClause)
      .orderBy(desc(ossProjects.createdAt))
      .limit(pageSize)
      .offset(offset),
    (error) =>
      new DatabaseError({
        operation: "getOssProjects",
        message: "Failed to fetch OSS projects.",
        cause: error,
      }),
  );
}
````

## File: terraform/main.tf
````hcl
# ============================================================================
# IAM Role for Lambda
# ============================================================================

data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "lambda_role" {
  name               = "${var.project_name}-oss-updater-role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

# Policy for CloudWatch Logs
data "aws_iam_policy_document" "lambda_logging" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_policy" "lambda_logging" {
  name        = "${var.project_name}-oss-updater-logging"
  description = "IAM policy for logging from Lambda"
  policy      = data.aws_iam_policy_document.lambda_logging.json
}

resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_logging.arn
}

# ============================================================================
# CloudWatch Log Group
# ============================================================================

resource "aws_cloudwatch_log_group" "lambda_logs" {
  name              = "/aws/lambda/${var.project_name}-oss-updater"
  retention_in_days = 14
}

# ============================================================================
# Lambda Function
# ============================================================================

resource "aws_lambda_function" "oss_updater" {
  filename      = "${path.module}/../lambda/function.zip"
  function_name = "${var.project_name}-oss-updater"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  timeout       = 900
  memory_size   = 256

  source_code_hash = filebase64sha256("${path.module}/../lambda/function.zip")

  environment {
    variables = {
      DATABASE_URL = var.database_url
      GITHUB_TOKEN = var.github_token
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda_logging,
    aws_cloudwatch_log_group.lambda_logs,
  ]
}

# ============================================================================
# EventBridge Scheduler
# ============================================================================

resource "aws_scheduler_schedule_group" "oss_updater" {
  name = "${var.project_name}-oss-updater"
}

data "aws_iam_policy_document" "scheduler_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["scheduler.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "scheduler_role" {
  name               = "${var.project_name}-oss-updater-scheduler-role"
  assume_role_policy = data.aws_iam_policy_document.scheduler_assume_role.json
}

data "aws_iam_policy_document" "scheduler_lambda_invoke" {
  statement {
    effect    = "Allow"
    actions   = ["lambda:InvokeFunction"]
    resources = [aws_lambda_function.oss_updater.arn]
  }
}

resource "aws_iam_role_policy" "scheduler_lambda_invoke" {
  name   = "${var.project_name}-scheduler-lambda-invoke"
  role   = aws_iam_role.scheduler_role.id
  policy = data.aws_iam_policy_document.scheduler_lambda_invoke.json
}

resource "aws_scheduler_schedule" "weekly_oss_update" {
  name        = "${var.project_name}-weekly-oss-update"
  group_name  = aws_scheduler_schedule_group.oss_updater.name
  description = "Triggers OSS stats update every Sunday at midnight UTC"

  flexible_time_window {
    mode = "OFF"
  }

  schedule_expression          = var.schedule_expression
  schedule_expression_timezone = "UTC"

  target {
    arn      = aws_lambda_function.oss_updater.arn
    role_arn = aws_iam_role.scheduler_role.arn

    retry_policy {
      maximum_event_age_in_seconds = 3600
      maximum_retry_attempts       = 3
    }
  }
}
````

## File: mdx-components.tsx
````typescript
import React from "react";
import Link, { LinkProps } from "next/link";

import type { MDXComponents } from "mdx/types";
import type { Route } from "next";

import { slugify } from "@/lib/utils";

import { Icons } from "@/components/icons";

type CustomLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  Partial<LinkProps<Route>>;

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...rest } = props;

  if (typeof href === "string") {
    if (href.startsWith("/")) {
      return (
        <Link href={href as Route} {...rest}>
          {props.children}
        </Link>
      );
    }

    if (href.startsWith("#")) {
      return <a href={href} {...rest} />;
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1"
        {...rest}
      >
        <span>{children}</span>
        <Icons.arrowUpRight className="text-muted-foreground size-3" />
      </a>
    );
  }

  return null;
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const contentString = React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string") {
          return child;
        }
        return "";
      })
      .join("");

    const slug = slugify(contentString);

    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
          "aria-label": `Link to section: ${contentString}`,
        },
        React.createElement(Icons.link, {
          className: "size-4",
        }),
      ),
      children,
    ]);
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const headingComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...headingComponents,
    a: CustomLink,
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="border-b" {...props}>
        {children}
      </thead>
    ),
    tbody: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="divide-y" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="hover:bg-muted/50 border-b transition-colors" {...props}>
        {children}
      </tr>
    ),
    th: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="text-foreground px-4 py-3 text-left font-semibold"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-3 text-neutral-700" {...props}>
        {children}
      </td>
    ),
  };
}
````

## File: proxy.ts
````typescript
import { NextResponse, type NextRequest } from "next/server";

import { extendUserSessionMiddleware, getUserSession } from "@/auth";

const ADMIN_EMAIL = "rawgrittt@gmail.com";
const protectedRoutes = ["/admin"];
const authRoutes = ["/signin"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getUserSession();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isAccessDeniedPage = pathname === "/access-denied";

  // 1. Redirect Authorized Admin AWAY from Access Denied page
  if (isAccessDeniedPage && session?.user?.email === ADMIN_EMAIL) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // 1. Unauthenticated users trying to access protected routes
  if (isProtectedRoute) {
    if (!session) {
      // Redirect to signin, adding the current path as 'next' param
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(signInUrl);
    }

    // 2. Authenticated but UNAUTHORIZED users (Wrong Email)
    if (session.user.email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }
  }

  // 3. Redirect authenticated users away from auth pages
  if (session && isAuthRoute) {
    // If they are the admin, send to admin, otherwise home
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 4. Extend session for active users
  return extendUserSessionMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "lambda",
    "terraform"
  ]
}
````

## File: app/(auth)/signin/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";


export const metadata: Metadata = {
  title: "Sign-in",
};

export default function SignInPageLayout(props: LayoutProps<"/signin">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(home)/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Hemanta Sundaray's portfolio. Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  openGraph: {
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Welcome to Hemanta Sundaray's portfolio. Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
};

export default function HomeLayout(props: LayoutProps<"/">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: components/blog/toc.tsx
````typescript
"use client";

import * as React from "react";

import { Item } from "@/types";
import { motion } from "motion/react";

import { type TableOfContents as TOCType } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

import { Icons } from "@/components/icons";

interface TocProps {
  toc: TOCType;
}

export function TableOfContents({ toc }: TocProps) {
  const { itemIds, parentMap, topLevel } = React.useMemo(() => {
    const ids: string[] = [];
    const map: Record<string, string> = {};
    const top: Item[] = [];

    if (!toc?.items) return { itemIds: ids, parentMap: map, topLevel: top };

    toc.items.forEach((h2) => {
      top.push(h2);
      const h2Id = h2.url?.split("#")[1];
      if (h2Id) ids.push(h2Id);

      if (h2.items && Array.isArray(h2.items)) {
        h2.items.forEach((h3) => {
          const h3Id = h3.url?.split("#")[1];
          if (h3Id) {
            ids.push(h3Id);
            if (h2Id) map[h3Id] = h2Id;
          }
        });
      }
    });

    return { itemIds: ids, parentMap: map, topLevel: top };
  }, [toc]);

  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = React.useState({
    top: 0,
    height: 0,
    borderWidth: 1,
    visible: false,
  });

  React.useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const borderWidth = parseFloat(
      getComputedStyle(containerElement).borderLeftWidth || "1",
    );
    setIndicator((prev) => ({
      ...prev,
      borderWidth: isNaN(borderWidth) ? 1 : borderWidth,
    }));
  }, []);

  React.useLayoutEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement || !activeHeading) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }

    const escapeCssSelector = (str: string): string => {
      if (
        typeof window !== "undefined" &&
        window.CSS &&
        typeof window.CSS.escape === "function"
      ) {
        return window.CSS.escape(str);
      }
      return str.replace(/[^a-zA-Z0-9_-]/g, (match) => `\\${match}`);
    };

    const selector = `a[href="#${escapeCssSelector(activeHeading)}"]`;

    const linkElement =
      containerElement.querySelector<HTMLAnchorElement>(selector);

    if (!linkElement) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }

    let animationFrameId: number | null = null;

    const scheduleUpdate = () => {
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        updatePosition();
      });
    };
    const updatePosition = () => {
      if (!containerElement || !linkElement) return;
      const containerRect = containerElement.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();
      const top = linkRect.top - containerRect.top;
      const height = linkRect.height;
      setIndicator((prev) => ({ ...prev, top, height, visible: height > 0 }));
    };
    updatePosition();
    const linkResizeObserver = new ResizeObserver(scheduleUpdate);
    linkResizeObserver.observe(linkElement);
    const containerResizeObserver = new ResizeObserver(scheduleUpdate);
    containerResizeObserver.observe(containerElement);
    const mutationObserver = new MutationObserver(scheduleUpdate);
    mutationObserver.observe(containerElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
      containerResizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [activeHeading, toc]);

  const activeParent = React.useMemo(() => {
    if (!activeHeading) return null;
    if (topLevel.find((t) => t.url?.split("#")[1] === activeHeading)) {
      return activeHeading;
    }
    return parentMap[activeHeading] ?? null;
  }, [activeHeading, parentMap, topLevel]);

  if (!mounted || !toc?.items) return null;

  return (
    <div className="space-y-4">
      <p className="flex items-center gap-2">
        <Icons.toc className="text-muted-foreground size-4" />
        <span className="text-foreground">ON THIS PAGE</span>
      </p>

      <div ref={containerRef} className="border-input relative border-l pl-4">
        {indicator.visible && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bg-sky-700 transition-all duration-200"
            style={{
              left: `-${indicator.borderWidth}px`,
              top: `${indicator.top}px`,
              width: `${indicator.borderWidth}px`,
              height: `${indicator.height}px`,
            }}
          />
        )}

        <ul className="list-none space-y-2">
          {topLevel.map((h2) => {
            const h2Id = h2.url?.split("#")[1];
            const isActiveGroup = Boolean(h2Id && activeParent === h2Id);

            return (
              <li key={h2Id} className="group">
                <div className="flex items-center justify-between">
                  <a
                    href={h2.url}
                    className={cn(
                      "focus-ring inline-block text-sm transition-colors",
                      isActiveGroup
                        ? "font-semibold text-sky-700"
                        : "text-neutral-600",
                    )}
                  >
                    {h2.title}
                  </a>
                </div>

                {h2.items && h2.items.length > 0 && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {h2.items.map((h3, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={h3.url}
                            className={cn(
                              "focus-ring inline-block text-sm transition-colors",
                              activeHeading === h3.url?.split("#")[1]
                                ? "text-sky-700"
                                : "text-neutral-600",
                            )}
                          >
                            {h3.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );
    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);
  return activeId;
}
````

## File: components/navigation/main-nav-wrapper.tsx
````typescript
"use client";

import { cn } from "@/lib/utils";

export function MainNavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "bg-background z-100 fixed inset-x-0 top-0 h-[var(--main-nav-height)] w-full",
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4 xl:px-0">{children}</div>
    </div>
  );
}
````

## File: components/technical-writing/technical-writing-content.tsx
````typescript
"use client";

import type { KodeKloudPost } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";

import { technicalWritingSearchParams } from "@/lib/technical-writing-search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { TechnicalWritingCard } from "@/components/technical-writing/technical-writing-card";
import { TechnicalWritingPagination } from "@/components/technical-writing/technical-writing-pagination";
import { TechnicalWritingSearch } from "@/components/technical-writing/technical-writing-search";
import { TechnicalWritingTags } from "@/components/technical-writing/technical-writing-tags";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type TechnicalWritingContentProps = {
  paginatedPosts: KodeKloudPost[];
  uniqueTags: string[];
  totalPages: number;
};

export function TechnicalWritingContent({
  paginatedPosts,
  uniqueTags,
  totalPages,
}: TechnicalWritingContentProps) {
  const [filters, setFilters] = useQueryStates(
    {
      query: technicalWritingSearchParams.query,
      page: technicalWritingSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );

  const handleQueryChange = (value: string) => {
    setFilters({ query: value, page: null });
  };

  return (
    <>
      <TechnicalWritingSearch
        className="mb-8 mt-12"
        value={filters.query}
        onChange={handleQueryChange}
      />
      <TechnicalWritingTags tags={uniqueTags} />
      <section>
        <AnimatePresence mode="wait" initial={false}>
          {paginatedPosts.length > 0 ? (
            <motion.ul
              key="posts-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "mt-12 grid list-none grid-cols-1 gap-8",
                "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {paginatedPosts.map((post) => (
                <li key={post.id}>
                  <TechnicalWritingCard key={post.id} post={post} />
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
                  No Articles Found
                </EmptyTitle>
                <EmptyDescription className="text-pretty text-base text-neutral-600">
                  Try adjusting your search or filter criteria.
                </EmptyDescription>
              </Empty>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <TechnicalWritingPagination totalPages={totalPages} />
    </>
  );
}
````

## File: components/tag-group.tsx
````typescript
"use client";

import * as React from "react";

import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList as AriaTagList,
  type TagGroupProps as AriaTagGroupProps,
  type TagListProps as AriaTagListProps,
  type TagProps as AriaTagProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

type CustomTagGroupProps = React.HTMLAttributes<HTMLDivElement> &
  AriaTagGroupProps & {
    ref?: React.Ref<HTMLDivElement>;
  };

function TagGroup({ className, ref, ...props }: CustomTagGroupProps) {
  return <AriaTagGroup ref={ref} className={cn(className)} {...props} />;
}

type CustomTagListProps = React.HTMLAttributes<HTMLDivElement> &
  AriaTagListProps<object> & {
    ref?: React.Ref<HTMLDivElement>;
  };

function TagList({ className, ref, ...props }: CustomTagListProps) {
  return (
    <AriaTagList
      ref={ref}
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

type CustomTagProps = AriaTagProps & {
  ref?: React.Ref<HTMLAnchorElement | HTMLDivElement>;
};

function Tag({ className, ref, ...props }: CustomTagProps) {
  return (
    <AriaTag
      ref={ref}
      className={cn(
        "focus-ring",
        "cursor-pointer rounded-full bg-neutral-200/40 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-200",
        "data-[selected]:bg-sky-200/40 data-[selected]:text-neutral-700",
        "data-[selected]:hover:bg-sky-200",
        "transition-transform",
        "data-[pressed]:scale-95",
        className,
      )}
      {...props}
    />
  );
}

export { TagGroup, TagList, Tag };
````

## File: lambda/src/index.ts
````typescript
import type { Handler } from "aws-lambda";
import postgres from "postgres";

type OssProject = {
  id: string;
  name: string;
  url: string;
};

type GitHubRepoResponse = {
  stargazers_count: number;
  forks_count: number;
  subscribers_count: number;
  open_issues_count: number;
};

function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchGitHubStats(
  owner: string,
  repo: string,
): Promise<GitHubRepoResponse | null> {
  try {
    // 🔹 Add an abort controller to force a 5-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "oss-stats-updater",
        },
        signal: controller.signal, // Connect the signal
      },
    );

    clearTimeout(timeoutId); // Clear timeout if successful

    if (!response.ok) {
      console.error(
        `GitHub API Error ${owner}/${repo}: ${response.statusText}`,
      );
      return null;
    }

    return (await response.json()) as GitHubRepoResponse;
  } catch (error) {
    console.error(`Network error fetching ${owner}/${repo}`, error);
    return null;
  }
}

export const handler: Handler = async () => {
  // 🔹 1. Connect to Supabase
  const sql = postgres(process.env.DATABASE_URL!, {
    ssl: "require",
    max: 5,
    prepare: false,
  });

  try {
    // 🔹 2. Fetch Projects
    const projects = await sql<OssProject[]>`
      SELECT id, name, url FROM oss_projects
    `;
    console.log(`🚀 Found ${projects.length} projects to update.`);

    // 🔹 3. Process in Batches (Concurrency Control)
    // Processing 5 at a time prevents overwhelming GitHub or the DB
    const BATCH_SIZE = 20;
    const results = { success: 0, failed: 0 };

    for (let i = 0; i < projects.length; i += BATCH_SIZE) {
      const batch = projects.slice(i, i + BATCH_SIZE);

      // Promise.allSettled ensures one failure doesn't stop the batch
      const batchResults = await Promise.allSettled(
        batch.map(async (project) => {
          // A. Parse URL
          const parsed = parseGitHubUrl(project.url);
          if (!parsed) throw new Error(`Invalid URL: ${project.url}`);

          // B. Fetch Stats
          const stats = await fetchGitHubStats(parsed.owner, parsed.repo);
          if (!stats)
            throw new Error(`Failed to fetch stats for ${project.name}`);

          // C. Update DB
          await sql`
            UPDATE oss_projects
            SET 
              stargazers_count = ${stats.stargazers_count},
              forks_count = ${stats.forks_count},
              subscribers_count = ${stats.subscribers_count},
              open_issues_count = ${stats.open_issues_count}
            WHERE id = ${project.id}
          `;

          return project.name;
        }),
      );

      // D. Tally Results for this batch
      batchResults.forEach((result) => {
        if (result.status === "fulfilled") {
          console.log(`✅ Updated: ${result.value}`);
          results.success++;
        } else {
          console.error(`❌ Failed: ${result.reason}`);
          results.failed++;
        }
      });

      // Small cooldown between batches
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log(
      `🏁 Summary: ${results.success} updated, ${results.failed} failed.`,
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Update complete", ...results }),
    };
  } catch (error) {
    console.error("🔥 Fatal Error:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  } finally {
    // 🔹 4. Always close the connection
    await sql.end();
  }
};
````

## File: app/(blog)/blog/page.tsx
````typescript
import { blogSearchParamsCache } from "@/lib/blog-search-params";
import { getBlogPosts } from "@/lib/get-blog-posts";
import { getBlogPostsTags } from "@/lib/get-blog-posts-tags";

import { BlogPageContent } from "@/components/blog/blog-page-content";
import { BlogPostsSearch } from "@/components/blog/blog-posts-search";

const POSTS_PER_PAGE = 5;

export default async function BlogPage(props: PageProps<"/blog">) {
  const allPosts = getBlogPosts();
  const allTagsWithCounts = getBlogPostsTags();
  const uniqueTags = allTagsWithCounts.map((tag) => tag.name);

  const resolvedSearchParams = await props.searchParams;

  const {
    query,
    page,
    tag: selectedTags,
  } = await blogSearchParamsCache.parse(resolvedSearchParams);

  const filteredPosts = allPosts.filter((post) => {
    const queryMatch =
      !query ||
      `${post.title.toLowerCase()} ${post.description.toLowerCase()}`.includes(
        query.toLowerCase(),
      );

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
      <div className="text-center">
        <h1 className="text-center">Blog</h1>
        <p className="mt-4 text-center text-lg text-neutral-700">
          Posts on full-stack web development.
        </p>
      </div>
      <BlogPostsSearch className="mb-8 mt-12" />
      <BlogPageContent
        paginatedPosts={paginatedPosts}
        uniqueTags={uniqueTags}
        totalPages={totalPages}
      />
    </div>
  );
}
````

## File: app/(home)/page.tsx
````typescript
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 sm:px-6">
      <div className="flex flex-col gap-8">
        {/* 🔹 1. Image Section */}
        <div className="relative size-32 overflow-hidden">
          <Image
            src="/hemanta-portait.jpg"
            alt="Hemanta Sundaray Portait"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🔹 2. Intro Section */}
        <div className="space-y-4">
          <h1 className="text-4xl">
            Hello! <span className="animate-wave inline-block">👋</span>
          </h1>
          <p className="text-lg leading-relaxed text-neutral-700">
            Welcome to my humble abode on the internet. I&apos;m Hemanta
            Sundaray, a self-taught full-stack developer from India.
          </p>
        </div>

        {/* 🔹 3. "My Story" Section */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            My Story
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            I worked in the fashion industry for 13 years before pivoting in
            2022 to pursue software engineering full-time. Since then, I have
            been learning and building projects to improve my skill set.
          </p>
        </section>

        {/* 🔹 4. "Now" Section */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            Now
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            I am currently preparing for interviews and actively seeking a
            full-stack developer role.
          </p>
        </section>
      </div>
    </div>
  );
}
````

## File: app/projects/page.tsx
````typescript
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "LucidAuth",
    description: "A TypeScript-first, server-side authentication library.",
    href: "https://github.com/sundaray/LucidAuth",
    techStack: ["TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <div className="text-center">
        <h1>Projects</h1>
        <p className="mx-auto mt-4 text-lg text-neutral-700">
          A showcase of my personal projects.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
````

## File: components/blog/blog-page-content.tsx
````typescript
"use client";

import type { BlogPost } from "@/types";
import { AnimatePresence, motion } from "motion/react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPostsPagination } from "@/components/blog/blog-posts-pagination";
import { BlogPostsTags } from "@/components/blog/blog-posts-tags";
import { Icons } from "@/components/icons";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type BlogPageContentProps = {
  paginatedPosts: BlogPost[];
  uniqueTags: string[];
  totalPages: number;
};

export function BlogPageContent({
  paginatedPosts,
  uniqueTags,
  totalPages,
}: BlogPageContentProps) {
  return (
    <>
      <BlogPostsTags tags={uniqueTags} />
      <section>
        <AnimatePresence mode="wait" initial={false}>
          {paginatedPosts.length > 0 ? (
            <motion.ul
              key="posts-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="mt-12 list-none space-y-6"
            >
              {paginatedPosts.map((post) => (
                <li key={post.slug}>
                  <BlogPostCard key={post.slug} post={post} />
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
                  Try adjusting your search or filter criteria.
                </EmptyDescription>
              </Empty>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <BlogPostsPagination totalPages={totalPages} />
    </>
  );
}
````

## File: components/navigation/mobile-nav.tsx
````typescript
"use client";

import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { signOutAction } from "@/app/actions";
import type { User } from "lucidauth/core/types";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import type { Route } from "next";

import { navbarLinks } from "@/config/navbar";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

// ============================================================================
// MobileNav
// ============================================================================
export function MobileNav({ user }: { user: User | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <MenuIcon isOpen={isOpen} onToggle={toggleMenu} />
      <AnimatePresence>
        {isOpen && (
          <MenuDrawer onLinkClick={() => setIsOpen(false)} user={user} />
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MenuIcon
// ============================================================================
function MenuIcon({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <MotionConfig transition={{ duration: 0.15, ease: "easeOut" }}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onToggle}
        className="hover:bg-accent relative z-50 flex size-8 items-center justify-center rounded-full transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="size-4.5 relative flex items-center justify-center rounded-full">
          <span className="absolute -inset-2 [@media(pointer:fine)]:hidden" />

          <div className="relative size-full">
            <motion.div
              variants={{
                closed: { y: "-50%", top: "25%", rotate: 0 },
                open: { y: "-50%", top: "50%", rotate: 45 },
              }}
              className="bg-foreground absolute h-[1.5px] w-full rounded-full"
            />
            <motion.div
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="bg-foreground absolute top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full"
            />
            <motion.div
              variants={{
                closed: { y: "50%", bottom: "25%", rotate: 0 },
                open: { y: "50%", bottom: "50%", rotate: -45 },
              }}
              className="bg-foreground absolute h-[1.5px] w-full rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </MotionConfig>
  );
}

// ============================================================================
// MenuDrawer
// ============================================================================
function MenuDrawer({
  onLinkClick,
  user,
}: {
  onLinkClick: () => void;
  user: User | null;
}) {
  const items = navbarLinks.main;
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction();
      onLinkClick();
    });
  };

  const drawerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
  } as const;

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={drawerVariants}
      className="bg-background fixed left-0 right-0 top-[var(--main-nav-height)] z-50 h-[calc(100vh-var(--main-nav-height))] w-full border-t p-6"
      role="dialog"
      aria-modal="true"
    >
      <nav className="h-full">
        <motion.ul className="divide-y-1 divide-border flex h-full flex-col items-center divide-dashed">
          {items.map((item) => (
            <motion.li
              key={item.href}
              variants={itemVariants}
              className="w-full"
            >
              <MobileNavLink href={item.href} onClick={onLinkClick}>
                {item.title}
              </MobileNavLink>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} className="w-full">
            {user?.email ? (
              <div className="flex w-full flex-col items-center gap-4 py-4">
                <Button
                  onClick={handleSignOut}
                  disabled={isPending}
                  className="w-full"
                  variant="default"
                >
                  {isPending ? (
                    <>
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      <span className="text-sm">Sign out</span>
                    </>
                  ) : (
                    <>
                      <Icons.logOut className="mr-2 size-4" />
                      <span className="text-sm">Sign out</span>
                    </>
                  )}
                </Button>{" "}
              </div>
            ) : (
              <MobileNavLink href="/hire-me" onClick={onLinkClick}>
                Hire Me
              </MobileNavLink>
            )}
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
}

// ============================================================================
// MobileNavLink
// ============================================================================
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: Route;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "focus-ring block w-full rounded-md py-4 text-center text-lg transition-colors",
        isActive
          ? "text-foreground font-semibold"
          : "text-foreground hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
````

## File: components/ui/input.tsx
````typescript
import React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "shadow-xs selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base caret-sky-700 outline-none transition-all file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        "ring-border ring-1 ring-inset",

        "focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-sky-600",

        "aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
````

## File: components/breadcrumb-bar.tsx
````typescript
"use client";

import { useState } from "react";

import { useMotionValueEvent, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export function BreadcrumbBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  return (
    <div
      className={cn(
        "top-(--main-nav-height) fixed z-50 flex h-12 w-full items-center bg-neutral-100 transition-shadow sm:h-8",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
        <DynamicBreadcrumb />
      </div>
    </div>
  );
}
````

## File: components/oss-projects-content.tsx
````typescript
"use client";

import { useCallback, useState, useTransition } from "react";

import { debounce, useQueryStates } from "nuqs";

import type { SelectOssProject } from "@/db/schema";
import { searchParams } from "@/lib/search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { OssProjectCard } from "@/components/oss-project-card";
import { OssProjectsPagination } from "@/components/oss-projects-pagination";
import { OssProjectsSearch } from "@/components/oss-projects-search";
import { OssProjectsSearchResultsHeader } from "@/components/oss-projects-search-results-header";
import { OssProjectsSidebar } from "@/components/oss-projects-sidebar";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type OssContentProps = {
  projects: SelectOssProject[];
  uniqueTopics: string[];
  uniqueLanguages: string[];
  totalPages: number;
  totalProjects: number;
};

export function OssProjectsContent({
  projects,
  uniqueTopics,
  uniqueLanguages,
  totalPages,
  totalProjects,
}: OssContentProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [isFiltering, startFilteringTransition] = useTransition();
  const [isPaginating, startPaginationTransition] = useTransition();
  const [isSidebarQuerying, startSidebarQueryingTransition] = useTransition();

  // 🔄️ All URL state is now managed by a single, unified hook.
  const [filters, setFilters] = useQueryStates(searchParams, {
    startTransition: startFilteringTransition, // Default transition for most filter changes
    shallow: false,
    history: "push",
  });

  const isGridLoading = isFiltering || isPaginating;
  const isSidebarLoading = isSidebarQuerying;

  const hasActiveSidebarFilters =
    filters.topic.length > 0 ||
    filters.language.length > 0 ||
    filters["topic-query"] !== "" ||
    filters["language-query"] !== "";

  const hasActiveFilters = hasActiveSidebarFilters || filters.query !== "";

  const handleClearSidebarFilters = useCallback(() => {
    setFilters({
      topic: null,
      language: null,
      "topic-query": "",
      "language-query": "",
      page: null,
    });
  }, [setFilters]);

  const handleResetAll = useCallback(() => {
    setFilters({
      query: "",
      topic: null,
      language: null,
      page: null,
      "topic-query": "",
      "language-query": "",
    });
  }, [setFilters]);

  const handleQueryChange = (value: string) => {
    setFilters(
      { query: value, page: null },
      { limitUrlUpdates: value === "" ? undefined : debounce(300) },
    );
  };

  const handleTopicQueryChange = (value: string) => {
    setFilters(
      { "topic-query": value },
      {
        startTransition: startSidebarQueryingTransition,
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

  const handleLanguageQueryChange = (value: string) => {
    setFilters(
      { "language-query": value },
      {
        startTransition: startSidebarQueryingTransition,
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

  const handleSelectionChange = (
    key: "topic" | "language",
    item: string,
    isChecked: boolean,
  ) => {
    const currentValues = filters[key];
    const newValues = isChecked
      ? [...currentValues, item]
      : currentValues.filter((filter) => filter !== item);

    setFilters({
      [key]: newValues.length > 0 ? newValues : null,
      page: null,
    });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <OssProjectsSearch
        className="mb-8 mt-24"
        value={filters.query}
        onChange={handleQueryChange}
      />
      <OssProjectsSearchResultsHeader
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={toggleSidebar}
        className="mb-8"
        currentCount={projects.length}
        totalCount={totalProjects}
        hasActiveFilters={hasActiveFilters}
        onResetFilters={handleResetAll}
      />
      <div className="lg:flex lg:gap-8">
        {isSidebarVisible && (
          <OssProjectsSidebar
            uniqueTopics={uniqueTopics}
            uniqueLanguages={uniqueLanguages}
            className="hidden w-64 lg:sticky lg:top-32 lg:block lg:self-start"
            hasActiveSidebarFilters={hasActiveSidebarFilters}
            onClearAllFilters={handleClearSidebarFilters}
            selectedTopics={filters.topic}
            selectedLanguages={filters.language}
            onTopicSelect={(item, isChecked) =>
              handleSelectionChange("topic", item, isChecked)
            }
            onLanguageSelect={(item, isChecked) =>
              handleSelectionChange("language", item, isChecked)
            }
            topicQuery={filters["topic-query"]}
            onTopicQueryChange={handleTopicQueryChange}
            languageQuery={filters["language-query"]}
            onLanguageQueryChange={handleLanguageQueryChange}
            isLoading={isSidebarLoading}
          />
        )}
        <div className="flex-1">
          <div className="relative">
            {isGridLoading && (
              <div
                className="absolute left-1/2 top-[20px] z-30 -translate-x-1/2"
                aria-hidden="true"
              >
                <Icons.spinner className="size-8 animate-spin text-sky-700" />
              </div>
            )}
            <ul
              className={cn(
                "grid list-none grid-cols-1 gap-8 sm:grid-cols-2",
                isSidebarVisible ? "lg:grid-cols-3" : "lg:grid-cols-4",
                isGridLoading
                  ? "pointer-events-none opacity-30"
                  : "opacity-100",
                "transition-opacity",
              )}
            >
              {projects.length > 0 ? (
                projects.map((project) => (
                  <li key={project.id}>
                    <OssProjectCard key={project.id} project={project} />
                  </li>
                ))
              ) : (
                <li className="col-span-full">
                  <Empty className="w-full border border-dashed">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <Icons.search className="text-muted-foreground size-8" />
                      </EmptyMedia>
                    </EmptyHeader>
                    <EmptyTitle className="text-2xl font-semibold">
                      No Projects Found
                    </EmptyTitle>
                    <EmptyDescription className="text-pretty text-base text-neutral-600">
                      Try adjusting your search or filter criteria.
                    </EmptyDescription>
                  </Empty>
                </li>
              )}
            </ul>
            <OssProjectsPagination
              totalPages={totalPages}
              startTransition={startPaginationTransition}
            />
          </div>
        </div>
      </div>
    </>
  );
}
````

## File: components/oss-projects-sidebar.tsx
````typescript
"use client";

import { useCallback, useState, type KeyboardEvent } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
  hasActiveSidebarFilters: boolean;
  onClearAllFilters: () => void;
  onTopicSelect: (item: string, isChecked: boolean) => void;
  onLanguageSelect: (item: string, isChecked: boolean) => void;
  selectedTopics: string[];
  selectedLanguages: string[];
  topicQuery: string;
  onTopicQueryChange: (value: string) => void;
  languageQuery: string;
  onLanguageQueryChange: (value: string) => void;
  isLoading: boolean;
};

export function OssProjectsSidebar({
  uniqueTopics,
  uniqueLanguages,
  className,
  onTopicSelect,
  onLanguageSelect,
  selectedTopics,
  selectedLanguages,
  topicQuery,
  onTopicQueryChange,
  languageQuery,
  onLanguageQueryChange,
  isLoading,
}: OssProjectsSidebarProps) {
  return (
    <search className={cn(className)}>
      <aside className="w-60 space-y-2">
        <h4>Filter OSS Projects</h4>
        <FilterSection
          title="Topics"
          items={uniqueTopics}
          searchTerm={topicQuery}
          onSearchChange={onTopicQueryChange}
          selectedItems={selectedTopics}
          onItemSelectChange={onTopicSelect}
          isLoading={isLoading}
          defaultOpen={true}
        />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          searchTerm={languageQuery}
          onSearchChange={onLanguageQueryChange}
          selectedItems={selectedLanguages}
          onItemSelectChange={onLanguageSelect}
          isLoading={isLoading}
        />
      </aside>
    </search>
  );
}

// ======================================================================
// FilterSection Component
// ======================================================================
type FilterSectionProps = {
  title: string;
  items: string[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedItems: string[];
  onItemSelectChange: (item: string, isChecked: boolean) => void;
  isLoading: boolean;
  defaultOpen?: boolean;
};

function FilterSection({
  title,
  items,
  searchTerm,
  onSearchChange,
  selectedItems,
  onItemSelectChange,
  isLoading,
  defaultOpen,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const clearSearch = useCallback(() => {
    onSearchChange("");
  }, [onSearchChange]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

  return (
    <div className="space-y-2">
      <button
        className="hover:bg-accent focus-ring flex h-12 w-full items-center gap-x-2 rounded-md px-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icons.chevronRight className="size-5" />
        </motion.div>
        <span className="text-sm font-medium">{title}</span>
        {selectedItems.length > 0 && (
          <Badge variant="outline" className="ml-auto tabular-nums">
            {selectedItems.length}
          </Badge>
        )}
      </button>
      {isOpen && (
        <div className="space-y-2">
          <div className="grid grid-cols-1 items-center">
            <Input
              type="search"
              placeholder={`Search ${title.toLowerCase()}…`}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="col-start-1 row-start-1 pl-9"
            />
            <div className="pointer-events-none col-start-1 row-start-1 w-fit pl-3">
              <Icons.search className="text-muted-foreground size-4" />
            </div>
            {searchTerm && (
              <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
                <button
                  onClick={clearSearch}
                  className="bg-background text-muted-foreground pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-xs transition-colors"
                  aria-label="Clear search"
                >
                  esc
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            {isLoading && (
              <div
                className="absolute left-1/2 top-[10px] z-10 -translate-x-1/2"
                aria-hidden="true"
              >
                <Icons.spinner className="size-6 animate-spin text-sky-700" />
              </div>
            )}
            <ScrollArea
              className={cn(
                "h-60",
                "[&_[data-slot=scroll-area-viewport]]:[mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]",
                isLoading ? "pointer-events-none opacity-50" : "opacity-100",
              )}
            >
              <div className="flex flex-col pr-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <FilterItem
                      key={item}
                      label={item}
                      isChecked={selectedItems.includes(item)}
                      onCheckedChange={(isChecked) =>
                        onItemSelectChange(item, isChecked)
                      }
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground mt-[10px] text-center text-sm">
                    No {title.toLowerCase()} found.
                  </p>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}

// ======================================================================
// FilterItem Component
// ======================================================================
function FilterItem({
  label,
  isChecked,
  onCheckedChange,
}: {
  label: string;
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
}) {
  return (
    <label className="hover:bg-accent flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5 transition-colors">
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="data-[state=checked]:border-sky-700 data-[state=checked]:bg-sky-700 data-[state=checked]:text-white"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
````

## File: app/(admin)/admin/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration panel for managing the website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) container mx-auto max-w-4xl flex-1 px-4">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(blog)/blog/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack web development covering TypeScript, React, Node.js, PostgreSQL, and modern web technologies.",
  openGraph: {
    title: "Blog | Hemanta Sundaray",
    description:
      "Articles on full-stack web development covering TypeScript, React, Node.js, PostgreSQL, and modern web technologies.",
  },
};

export default function BlogPageLayout(props: LayoutProps<"/blog">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(oss)/oss/[repo]/page.tsx
````typescript
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

import { getOssProjectByName } from "@/lib/get-oss-project-by-name";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { TopicTagGroup } from "@/components/ui/topic-tag-group";

export async function generateMetadata(
  props: PageProps<"/oss/[repo]">,
): Promise<Metadata> {
  const { repo } = await props.params;
  const decodedRepoName = decodeURIComponent(repo);

  const result = await getOssProjectByName(decodedRepoName);

  if (result.isErr() || !result.value) {
    return {
      title: "Project Not Found",
      description: "The requested open-source project could not be found.",
    };
  }

  const project = result.value;

  return {
    title: project.name,
    description:
      project.description ||
      `Explore ${project.name} – an open-source project featured in Hemanta Sundaray's OSS collection.`,
    openGraph: {
      title: `${project.name} | Open Source Software`,
      description:
        project.description ||
        `Explore ${project.name} – an open-source project.`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: project.name,
      description: project.description || `Explore ${project.name}`,
    },
  };
}

export default async function OssProjectDetailsPage(
  props: PageProps<"/oss/[repo]">,
) {
  const { repo } = await props.params;
  const decodedRepoName = decodeURIComponent(repo);

  const result = await getOssProjectByName(decodedRepoName);

  if (result.isErr()) {
    return (
      <Empty className="mx-auto max-w-3xl rounded-lg border border-dashed p-8">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icons.alertTriangle className="size-8 text-red-600" />
          </EmptyMedia>
        </EmptyHeader>
        <EmptyTitle className="text-2xl font-semibold">
          Error Fetching Project Details
        </EmptyTitle>
        <EmptyDescription className="text-balance text-base text-neutral-600">
          {result.error.message}
        </EmptyDescription>
        <EmptyContent>
          <ArrowLink href="/oss" className="font-semibold" direction="left">
            Back to OSS
          </ArrowLink>
        </EmptyContent>
      </Empty>
    );
  }

  const project = result.value;

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      {/* <ArrowLink
        href="/oss"
        className="mb-4 px-0 font-semibold text-sky-700"
        direction="left"
      >
        Back to OSS
      </ArrowLink> */}
      <article className="flex flex-col">
        <div className="flex flex-col">
          <h1>{project.name}</h1>
          {project.description && (
            <p className="mt-4 text-lg text-neutral-700">
              {project.description}
            </p>
          )}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
              "bg-primary text-primary-foreground hover:bg-primary/90 focus-ring h-9 px-4 py-2 transition-colors",
            )}
          >
            <FaGithub className="size-4" />
            View on GitHub
          </a>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
                "text-secondary-foreground h-9 px-4 py-2",
              )}
            >
              <Icons.globe className="size-4" />
              Visit Homepage
            </a>
          )}
        </div>
        {/* Topics Section */}
        {project.topics && project.topics.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4">Topics</h2>
            <TopicTagGroup topics={project.topics} />
          </div>
        )}
      </article>
    </div>
  );
}
````

## File: app/(oss)/oss/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Open Source Software",
  description:
    "A personal collection of interesting or potentially useful open-source projects.",
  openGraph: {
    title: "Open Source Software | Hemanta Sundaray",
    description:
      "A personal collection of interesting or potentially useful open-source projects.",
  },
};

export default function OssPageLayout(props: LayoutProps<"/oss">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/(technical-writing)/technical-writing/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Technical Writing",
  description:
    "Technical articles written for KodeKloud covering DevOps and Cloud Native technologies.",
  openGraph: {
    title: "Technical Writing | Hemanta Sundaray",
    description:
      "Technical articles covering DevOps and Cloud Native technologies.",
  },
};
export default function OssPageLayout(
  props: LayoutProps<"/technical-writing">,
) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/courses/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Upcoming courses on full-stack web development by Hemanta Sundaray. ",
  openGraph: {
    title: "Courses | Hemanta Sundaray",
    description: "Upcoming courses on full-stack web development.",
  },
};

export default function CoursesPageLayout(props: LayoutProps<"/courses">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: components/blog/blog-post-layout.tsx
````typescript
import React from "react";
import Image from "next/image";

import { Frontmatter } from "@/types";
import { format } from "date-fns";

import { type TableOfContents as TOCType } from "@/lib/toc";

import { CopyBlogPostButton } from "@/components/blog/copy-blog-post-button";
import { TagDisplayList } from "@/components/blog/tag-display-list";
import { TableOfContents } from "@/components/blog/toc";

type BlogPostLayoutProps = {
  frontmatter: Frontmatter;
  children: React.ReactNode;
  toc: TOCType;
  rawContent: string;
};

export function BlogPostLayout({
  children,
  frontmatter,
  toc,
  rawContent,
}: BlogPostLayoutProps) {
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
              <TagDisplayList tags={tags} />
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
````

## File: components/technical-writing/technical-writing-card.tsx
````typescript
"use client";

import Image from "next/image";

import type { KodeKloudPost } from "@/types";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type TechnicalWritingCardProps = {
  post: KodeKloudPost;
  className?: string;
};

export function TechnicalWritingCard({
  post,
  className,
}: TechnicalWritingCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg transition-all",
        "bg-linear-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,-4px_4px_10px_rgb(0_0_0/0.1)]",
        "has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:[&_a]:outline-none",
        "has-[a:focus-visible]:-translate-y-1",
        "hover:scale-[1.02]",
        className,
      )}
    >
      <div className="relative aspect-[1.91/1] w-full">
        <Image
          src={`/images/kodekloud/${post.image}`}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn("object-cover")}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-pretty font-semibold transition-colors group-hover:text-sky-700">
          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']"
          >
            {post.title}
          </a>
        </h3>

        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-muted-foreground text-sm">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div
            aria-hidden="true"
            className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors group-hover:text-sky-700"
          >
            Read More
            <Icons.arrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: components/oss-projects-search-results-header.tsx
````typescript
"use client";

import { GrPowerReset } from "react-icons/gr";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type OssProjectsSearchResultsHeaderProps = {
  isSidebarVisible: boolean;
  onToggleSidebar: () => void;
  className?: string;
  currentCount: number;
  totalCount: number;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
};

export function OssProjectsSearchResultsHeader({
  isSidebarVisible,
  onToggleSidebar,
  className,
  currentCount,
  totalCount,
  hasActiveFilters,
  onResetFilters,
}: OssProjectsSearchResultsHeaderProps) {
  return (
    <div className={cn("flex h-10 items-center justify-between", className)}>
      <div className="flex items-center gap-x-4">
        <div className="flex items-baseline gap-x-2">
          <h4>OSS Projects</h4>
          <span className="text-muted-foreground text-base font-medium tabular-nums">
            ({currentCount} of {totalCount})
          </span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="cursor-pointer rounded-full text-sm font-semibold text-sky-700 hover:bg-sky-100/40 hover:text-sky-700"
          >
            <GrPowerReset className="size-4" />
            Reset all
          </Button>
        )}
      </div>
      <Button
        size="sm"
        onClick={onToggleSidebar}
        className="hidden cursor-pointer rounded-full bg-neutral-200/40 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 lg:inline-flex"
      >
        {isSidebarVisible ? (
          <>
            <Icons.filterX className="size-4" />
            Hide filters
          </>
        ) : (
          <>
            <Icons.filter className="size-4" />
            Show filters
          </>
        )}
      </Button>
    </div>
  );
}
````

## File: components/tag-scroller.tsx
````typescript
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type TagScrollerProps = {
  children: ReactNode;
  className?: string;
};

export function TagScroller({ children, className }: TagScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const hasOverflow = scroller.scrollWidth > scroller.clientWidth;
      setCanScrollLeft(scroller.scrollLeft > 0);
      setCanScrollRight(
        hasOverflow &&
          scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 1,
      );
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      checkScrollability();
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(scroller);
      scroller.addEventListener("scroll", checkScrollability);

      return () => {
        if (scroller) {
          resizeObserver.unobserve(scroller);
          scroller.removeEventListener("scroll", checkScrollability);
        }
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollAmount =
        scroller.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
      scroller.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => scroll("left")}
            aria-label="Scroll tags left"
            className="bg-background hover:bg-accent focus-ring absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronLeft className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative w-full overflow-hidden",
          // Before pseudo-element for left fade
          "before:from-background before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[1] before:w-16 before:bg-gradient-to-r before:to-transparent before:transition-opacity before:content-['']",
          // After pseudo-element for right fade
          "after:from-background after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-[1] after:w-16 after:bg-gradient-to-l after:to-transparent after:transition-opacity after:content-['']",
          // Conditional opacity based on state
          canScrollLeft ? "before:opacity-100" : "before:opacity-0",
          canScrollRight ? "after:opacity-100" : "after:opacity-0",
        )}
      > 
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => scroll("right")}
            aria-label="Scroll tags right"
            className="bg-background hover:bg-accent focus-ring absolute right-0 top-1/2 z-10 flex size-10 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl"
          >
            <Icons.chevronRight className="text-muted-foreground size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
````

## File: app/(technical-writing)/technical-writing/page.tsx
````typescript
import { blogPosts } from "@/data/kodekloud";

import { technicalWritingSearchParamsCache } from "@/lib/technical-writing-search-params";

import { Icons } from "@/components/icons";
import { KodeKloudTestimonial } from "@/components/technical-writing/kodekloud-testimonial";
import { PlaygroundsSection } from "@/components/technical-writing/playgrounds-section";
import { RewrittenArticlesSection } from "@/components/technical-writing/rewritten-articles-section";
import { TechnicalWritingContent } from "@/components/technical-writing/technical-writing-content";

const POSTS_PER_PAGE = 12;

export default async function TechnicalWritingPage(
  props: PageProps<"/technical-writing">,
) {
  const allCategories = blogPosts.flatMap((post) => post.category);
  const uniqueTags = [...new Set(allCategories)].sort();
  const blogPostCount = blogPosts.length;
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const resolvedSearchParams = await props.searchParams;

  const {
    query,
    page,
    tag: selectedTags,
  } = await technicalWritingSearchParamsCache.parse(resolvedSearchParams);

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
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center">
        <h1>Technical Writing</h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-lg text-neutral-700">
          From November 2022 to September 2024, I worked as a Freelance
          Technical Writer for{" "}
          <a
            href="https://kodekloud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1 text-sky-700 hover:underline hover:underline-offset-4"
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
````

## File: app/projects/layout.tsx
````typescript
import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Projects",
  description: "Side projects by Hemanta Sundaray.",
  openGraph: {
    title: "Projects | Hemanta Sundaray",
    description: "Side projects by Hemanta Sundaray.",
  },
};
export default function ProjectsPageLayout(props: LayoutProps<"/projects">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
````

## File: app/layout.tsx
````typescript
import { Geist, Geist_Mono, Merriweather } from "next/font/google";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { Footer } from "@/components/footer";
import { RouterProvider } from "@/components/router-provider";

import "@/app/styles/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hemanta Sundaray | Full-Stack Developer",
    template: "%s | Hemanta Sundaray",
  },
  description:
    "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL. Explore my blog and personal projects.",
  keywords: [
    "Hemanta Sundaray",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Web Development",
  ],
  authors: [{ name: "Hemanta Sundaray" }],
  creator: "Hemanta Sundaray",
  metadataBase: new URL("https://hemantasundaray.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemantasundaray.com",
    siteName: "Hemanta Sundaray",
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} flex min-h-screen flex-col antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#0284c7" shadow={false} />
        <RouterProvider>
          <NuqsAdapter>{props.children}</NuqsAdapter>
        </RouterProvider>
        <Footer />
      </body>
    </html>
  );
}
````

## File: components/blog/blog-post-card.tsx
````typescript
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
      <h2 className="mt-2 group-hover:text-sky-700">
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
````

## File: components/blog/blog-posts-tags.tsx
````typescript
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useQueryStates } from "nuqs";
import { Button, type Selection as AriaSelection } from "react-aria-components";

import { blogSearchParams } from "@/lib/blog-search-params";

import { Icons } from "@/components/icons";
import { Tag, TagGroup, TagList } from "@/components/tag-group";
import { TagScroller } from "@/components/tag-scroller";

type BlogTagsProps = {
  tags: string[];
};

export function BlogPostsTags({ tags }: BlogTagsProps) {
  const [urlState, setUrlState] = useQueryStates(
    {
      tag: blogSearchParams.tag,
      page: blogSearchParams.page,
    },
    {
      shallow: false,
      history: "push",
    },
  );
  const selectedTags = urlState.tag;

  const handleSelectionChange = (keys: AriaSelection) => {
    let newTags: string[];
    if (keys === "all") {
      newTags = tags;
    } else {
      newTags = Array.from(keys) as string[];
    }

    setUrlState({
      tag: newTags.length > 0 ? newTags : null,
      page: null,
    });
  };

  return (
    <div className="space-y-4">
      <TagScroller>
        <TagGroup
          aria-label="Blog post tags"
          className="w-full"
          selectionMode="multiple"
          selectedKeys={selectedTags}
          onSelectionChange={handleSelectionChange}
        >
          <TagList className="flex flex-nowrap items-center gap-3">
            {tags.map((tag) => (
              <Tag key={tag} id={tag}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </TagGroup>
      </TagScroller>
      {/* Display Selected Tags */}
      <AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <TagGroup
              aria-label="Selected tags"
              onRemove={(keys) => {
                const tagsToRemove = Array.from(keys) as string[];
                handleSelectionChange(
                  new Set(
                    selectedTags.filter((t) => !tagsToRemove.includes(t)),
                  ),
                );
              }}
            >
              <TagList className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <Tag
                    key={tag}
                    id={tag}
                    className="flex items-center justify-between gap-1 bg-sky-200/40 text-neutral-700 hover:bg-sky-200 hover:text-neutral-700"
                  >
                    {tag}
                    <Button
                      slot="remove"
                      aria-label={`Remove ${tag} filter`}
                      className="-mr-1 size-6 rounded-full transition-colors hover:bg-sky-300/40"
                    >
                      <Icons.x className="inline-block size-5" />
                    </Button>
                  </Tag>
                ))}
              </TagList>
            </TagGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
````

## File: components/navigation/nav-links.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem as NavItemType } from "@/types";

import { cn } from "@/lib/utils";

export function NavLinks({
  links,
  className,
}: {
  links: NavItemType[];
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={cn(className)}>
      <ul className="relative flex h-full items-center justify-between space-x-6 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.title}
              className="group relative flex h-full items-center"
            >
              <Link
                className={cn(
                  "focus-ring flex h-full items-center transition-colors",
                  isActive ? "font-semibold text-sky-700" : "text-neutral-600",
                )}
                href={link.href}
              >
                <span className="tracking-tight">{link.title}</span>
              </Link>
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-center transition-transform ease-out",
                  isActive
                    ? "scale-x-100 bg-sky-700"
                    : "scale-x-0 bg-neutral-600 group-hover:scale-x-100",
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
````

## File: components/oss-project-card.tsx
````typescript
"use client";

import Link from "next/link";

import type { SelectOssProject } from "@/db/schema";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

type OssProjectCardProps = {
  project: SelectOssProject;
  className?: string;
};

// const iconVariants = {
//   rest: {
//     rotate: 0,
//     transition: { duration: 0.2, ease: "easeOut" },
//   },
//   hover: {
//     rotate: 180,
//     transition: { duration: 0.2, ease: "easeOut" },
//   },
// } as const;

export function OssProjectCard({ project, className }: OssProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg p-4 transition-all",
        "bg-linear-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,-4px_4px_10px_rgb(0_0_0/0.1)]",
        "hover:scale-[1.02]",
        "has-[.main-link:focus-visible]:-translate-y-1",
        "has-[.main-link:focus-visible]:ring-ring has-[.main-link:focus-visible]:ring-2",
        "has-[.main-link:focus-visible]:[&_.main-link:focus-visible]:outline-none",
        className,
      )}
    >
      {/* <div className="flex items-start justify-between gap-2"> */}
      <h3
        className={cn(
          "text-pretty",
          "transition-colors group-hover:text-sky-700",
        )}
      >
        <Link
          href={`/oss/${project.name}`}
          className={cn(
            "main-link",
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          {project.name}
        </Link>
      </h3>
      {/* {project.homepage && (
          <motion.a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-foreground relative z-20",
              "-m-2 p-2",
              "rounded-full",
              "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2",
            )}
            aria-label="Visit project website"
            onClick={(e) => e.stopPropagation()}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={iconVariants}>
              <Icons.globe className="size-4 shrink-0" />
            </motion.div>
          </motion.a>
        )} */}
      {/* </div> */}

      <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
        <StatItem icon={Icons.star} label="Stars" value={project.stars} />
        <StatItem icon={Icons.gitFork} label="Forks" value={project.forks} />
        <StatItem
          icon={Icons.eye}
          label="Watching"
          value={project.subscribers}
        />
      </div>

      <Separator className="bg-input my-4" />

      <div className="mt-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {project.language && (
            <>
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
              <span className="text-foreground font-medium">
                {project.language}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="size-4 shrink-0" />
        <span>{label}</span>
      </div>
      <span className="text-foreground font-mono">
        {value.toLocaleString()}
      </span>
    </div>
  );
}
````

## File: app/(oss)/oss/page.tsx
````typescript
import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects";
import { searchParamsCache } from "@/lib/search-params";

import { Icons } from "@/components/icons";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const PROJECTS_PER_PAGE = 36;

export default async function OssPage(props: PageProps<"/oss">) {
  const resolvedSearchParams = await props.searchParams;

  const filters = await searchParamsCache.parse(resolvedSearchParams);

  // 🔹 Fetch filter options and filtered projects in parallel
  const [filterOptionsResult, projectsResult, totalProjectsResult] =
    await Promise.all([
      getOssProjectFilterOptions({
        topicQuery: filters["topic-query"],
        languageQuery: filters["language-query"],
      }),
      getOssProjects(filters),
      getOssProjectsCount(filters),
    ]);

  if (
    filterOptionsResult.isErr() ||
    projectsResult.isErr() ||
    totalProjectsResult.isErr()
  ) {
    return (
      <div className="container mx-auto max-w-3xl px-4">
        <Empty className="rounded-lg border p-8">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icons.alertTriangle className="size-8 text-red-500" />
            </EmptyMedia>
          </EmptyHeader>
          <EmptyTitle className="text-2xl font-semibold">
            Error Fetching Projects
          </EmptyTitle>
          <EmptyDescription className="text-balance text-base text-neutral-600">
            An unexpected error occurred while trying to load the projects.
            Please try refreshing the page, or check back again later.
          </EmptyDescription>
          <EmptyContent>
            <ArrowLink href="/" className="font-semibold" direction="left">
              Back to home
            </ArrowLink>
          </EmptyContent>
        </Empty>
      </div>
    );
  }

  const projects = projectsResult.value;
  const totalProjects = totalProjectsResult.value;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
  const { uniqueTopics, uniqueLanguages } = filterOptionsResult.value;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <h1>Open Source Software</h1>
        <p className="mx-auto mt-8 max-w-3xl text-balance text-lg text-neutral-600">
          Every time I come across interesting open-source projects, I add them
          here. Search around; you might find something useful.
        </p>
      </div>
      <OssProjectsContent
        projects={projects}
        uniqueTopics={uniqueTopics}
        uniqueLanguages={uniqueLanguages}
        totalPages={totalPages}
        totalProjects={totalProjects}
      />
    </div>
  );
}
````

## File: package.json
````json
{
  "name": "hemanta-blog",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@expressive-code/plugin-line-numbers": "^0.41.3",
    "@gsap/react": "^2.1.2",
    "@hookform/resolvers": "^5.2.2",
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/mdx": "^3.1.1",
    "@next/mdx": "^15.5.7",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@shikijs/twoslash": "^3.13.0",
    "@types/mdx": "^2.0.13",
    "add": "^2.0.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "dotenv": "^17.2.2",
    "drizzle-orm": "^0.44.5",
    "expressive-code-twoslash": "^0.5.3",
    "gray-matter": "^4.0.3",
    "lucidauth": "1.0.0-beta.4",
    "lucide-react": "^0.544.0",
    "mdast-util-toc": "^7.1.0",
    "motion": "^12.23.12",
    "neverthrow": "^8.2.0",
    "next": "16.0.8",
    "nextjs-toploader": "^3.9.17",
    "nuqs": "^2.6.0",
    "pnpm": "^10.26.0",
    "postgres": "^3.4.7",
    "react": "19.1.0",
    "react-aria-components": "^1.14.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "react-icons": "^5.5.0",
    "rehype-expressive-code": "^0.41.3",
    "rehype-pretty-code": "^0.14.1",
    "remark": "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    "remark-mdx-frontmatter": "^5.2.0",
    "spin-delay": "^2.0.1",
    "tailwind-merge": "^3.3.1",
    "unist-util-visit": "^5.0.0",
    "use-debounce": "^10.0.6",
    "vfile": "^6.0.3",
    "zod": "^4.1.9"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@ianvs/prettier-plugin-sort-imports": "^4.7.0",
    "@tailwindcss/postcss": "^4",
    "@types/mdast": "^4.0.4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/unist": "^3.0.3",
    "drizzle-kit": "^0.31.4",
    "eslint": "^9",
    "eslint-config-next": "15.5.3",
    "prettier": "^3.6.2",
    "prettier-plugin-tailwindcss": "^0.6.14",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.8",
    "typescript": "^5"
  }
}
````

## File: components/navigation/main-nav.tsx
````typescript
import Link from "next/link";

import type { NavItem as NavItemType } from "@/types";

import { getSession } from "@/lib/auth/session";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import { UserAccountNavClient } from "@/components/navigation/user-account-nav-client";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  const { user } = await getSession();

  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="flex h-full items-center gap-8">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="focus-ring flex items-center text-lg font-bold tracking-tight"
        >
          Hemanta Sundaray
        </Link>

        <div className="hidden h-full md:flex">
          <NavLinks links={links} className="h-full" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          {user?.email ? (
            <UserAccountNavClient email={user.email} />
          ) : (
            <HireMeButton />
          )}
        </div>
        <div className="md:hidden">
          <MobileNav user={user} />
        </div>
      </div>
    </div>
  );
}
````

## File: app/styles/globals.css
````css
@import "tailwindcss";
@import "tw-animate-css";
@import "./blog-post.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --main-nav-height: 4rem;
  --main-content-padding: 12rem;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-merriweather: var(--font-merriweather), serif;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --animate-wave: wave 2.5s infinite;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}

:root {
  --radius: 0.625rem;
  --background: oklch(0.99 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.87 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.59 0.14 242);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }

  h1 {
    @apply text-foreground text-6xl font-semibold tracking-tight;
  }

  h2 {
    @apply text-foreground text-2xl font-semibold tracking-tight;
  }

  h3 {
    @apply text-foreground text-xl font-semibold tracking-tight;
  }
  h4 {
    @apply text-foreground text-lg font-semibold tracking-tight;
  }
}

@layer components {
  .focus-ring {
    @apply focus-visible:ring-offset-background focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
  }
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}
````

## File: next.config.ts
````typescript
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import createMDX from "@next/mdx";
import ecTwoSlash from "expressive-code-twoslash";
import type { NextConfig } from "next";
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from "rehype-expressive-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import { pluginRemoveLastBlankLine } from "@/lib/rehype-expressive-code-remove-last-blank-twoslash-line-number.mjs";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  themes: ["github-light"],
  plugins: [ecTwoSlash(), pluginLineNumbers(), pluginRemoveLastBlankLine()],
  styleOverrides: {
    borderColor: "var(--input)",
    borderRadius: "8px",
    borderWidth: "1px",
    uiPaddingBlock: "0.75rem",
    uiFontFamily: "var(--font-mono)",
    gutterBorderColor: "var(--input)",
    gutterBorderWidth: "1px",

    textMarkers: {
      markBackground: "rgb(186 230 253 / 40%)",
      markBorderColor: "rgb(2 132 199)",
    },

    frames: {
      frameBoxShadowCssValue: "none",
      editorTabBarBorderBottomColor: "var(--input)",
      editorActiveTabIndicatorTopColor: "transparent",
      editorActiveTabIndicatorBottomColor: "var(--input)",
      editorActiveTabBackground: "transparent",
      editorTabBarBackground: "transparent",
      inlineButtonBorder: "transparent",
      inlineButtonBackground: "var(--input)",
      inlineButtonForeground: "#404040",
      inlineButtonBackgroundHoverOrFocusOpacity: "0.4",
    },
    lineNumbers: {
      foreground: "#737373",
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
  },
});

export default withMDX(nextConfig);
````

## File: app/styles/blog-post.css
````css
@layer components {
  .blog-post h1 {
    @apply text-6xl;
  }

  .blog-post h2 {
    @apply mb-4 mt-12 text-2xl;
  }

  .blog-post h3 {
    @apply mb-4 mt-12 text-xl;
  }

  .blog-post h4 {
    @apply mb-4 mt-12 text-lg;
  }

  .blog-post p {
    @apply mb-6 leading-7 text-neutral-700 last:mb-0;
  }

  .blog-post blockquote {
    @apply font-merriweather my-6 px-6 leading-7 text-neutral-700;
  }

  .blog-post li:has(> ul) > p {
    @apply mb-3;
  }

  .blog-post p a {
    @apply focus-visible:ring-ring text-sky-700 outline-none hover:underline hover:underline-offset-4 focus-visible:ring-2 focus-visible:ring-offset-2;
  }

  .blog-post ul,
  .blog-post ol {
    @apply marker:text-muted-foreground mb-6 space-y-3 pl-8 text-neutral-700 last:mb-0;
  }

  .blog-post ol ul,
  .blog-post ul ul {
    @apply pl-4 text-neutral-700;
  }

  .blog-post ul {
    @apply list-disc;
  }
  .blog-post ol {
    @apply list-decimal;
  }

  .blog-post :not(pre) > code {
    @apply border-input text-foreground rounded-sm border bg-neutral-200/40 px-1 py-0.5 font-mono text-sm dark:bg-neutral-800;
  }

  .blog-post strong {
    @apply font-semibold;
  }

  .blog-post .expressive-code {
    @apply my-6;
  }

  .blog-post :where(h1, h2, h3, h4, h5, h6) {
    @apply relative scroll-mt-24;
  }

  .blog-post .anchor {
    @apply text-muted-foreground hover:text-foreground absolute -left-8 top-1/2 -translate-y-1/2 translate-x-2 cursor-pointer rounded-md p-1 opacity-0 transition-all duration-200;
  }

  .blog-post :where(h1, h2, h3, h4, h5, h6):hover .anchor {
    @apply translate-x-0 opacity-100;
  }

  .blog-post .expressive-code .twoslash-highlighted > span {
    @apply rounded-none border-0 border-b-[1.5px] border-sky-700 bg-transparent py-1;
  }
}

.blog-post :where(h1, h2, h3, h4, h5, h6) > code {
  font-size: 0.875em;
}

.blog-post .expressive-code .twoslash-highlighted {
  background-color: transparent;
  border: none;
  padding-bottom: 2px;
  border-bottom: 1px solid #0284c7;
  border-radius: 0px;
}

.blog-post .expressive-code .twoslash-static-container {
  background-color: #fafafa;
  border-color: #e5e5e5;
}

.blog-post .expressive-code .twoslash-cursor {
  background-color: #737373;
}

.blog-post .expressive-code .twoslash-completion-container {
  border-color: #e5e5e5;
}

.blog-post .expressive-code .twoslash-completion-item-separator {
  border-color: #e5e5e5;
}

.blog-post .expressive-code .twoslash-static-container::before {
  background-color: #fafafa;
  border-top-color: #e5e5e5;
  border-right-color: #e5e5e5;
}

.blog-post .expressive-code [id^="twoslash_popup_"] {
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-color: #e5e5e5;
}

.blog-post .expressive-code [id^="twoslash_popup_"]::before {
  border-top-color: #e5e5e5;
  border-right-color: #e5e5e5;
}
````
