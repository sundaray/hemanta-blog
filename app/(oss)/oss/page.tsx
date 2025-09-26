// 🔄 app/(oss)/oss/page.tsx (Updated)
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import type { SearchParams } from "nuqs/server";
import { searchParamsCache } from "@/lib/search-params";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { OssProjectsPageClient } from "@/components/oss-projects-page-client";
import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects"; // 🔹 Import data fetching functions
import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options"; // 🔹 Import data fetching functions
import { unwrapResult } from "@/lib/utils"; // 🔹 Import a helper to unwrap the result

export default async function OssPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // 🔹 Per the docs, create a new QueryClient for each server render
  const queryClient = new QueryClient();
  const filters = await searchParamsCache.parse(searchParams);

  // 🔹 Define query keys. These must be identical on the client.
  const projectsQueryKey = ["oss-projects", filters];
  const totalProjectsQueryKey = ["oss-projects-count", filters];
  const filterOptionsQueryKey = [
    "oss-filter-options",
    {
      topicQuery: filters["topic-query"],
      languageQuery: filters["language-query"],
    },
  ];

  // 🚀 Await all prefetches in parallel to ensure data is ready before rendering.
  // This fulfills your requirement for a spinner-free initial load.
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: projectsQueryKey,
      queryFn: () => unwrapResult(getOssProjects(filters)),
    }),
    queryClient.prefetchQuery({
      queryKey: totalProjectsQueryKey,
      queryFn: () => unwrapResult(getOssProjectsCount(filters)),
    }),
    queryClient.prefetchQuery({
      queryKey: filterOptionsQueryKey,
      queryFn: () =>
        unwrapResult(
          getOssProjectFilterOptions({
            topicQuery: filters["topic-query"],
            languageQuery: filters["language-query"],
          }),
        ),
    }),
  ]);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <DynamicBreadcrumb className="mb-4 flex justify-center" />
        <h1>Open Source Software</h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-pretty text-neutral-600">
          An ever-growing collection of open-source projects I use or find
          interesting. Most are related to full-stack web development, with a
          focus on my current tech stack: TypeScript, React, and PostgreSQL.
        </p>
      </div>
      {/* 💧 Pass the dehydrated state to the client */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OssProjectsPageClient />
      </HydrationBoundary>
    </div>
  );
}
