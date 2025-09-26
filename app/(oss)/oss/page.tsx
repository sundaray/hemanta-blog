import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import type { SearchParams } from "nuqs/server";
import { searchParamsCache } from "@/lib/search-params";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { OssProjectsPageClient } from "@/components/oss-projects-page-client";

export default async function OssPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryClient = new QueryClient();
  const filters = await searchParamsCache.parse(searchParams);

  // 🚀 3. Kick off the queries on the server for prefetching.
  // We do not `await` these. This allows the page to start streaming to the
  // client while the data is being fetched in the background.
  queryClient.prefetchQuery();
  queryClient.prefetchQuery();
  queryClient.prefetchQuery();

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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OssProjectsPageClient />
      </HydrationBoundary>
    </div>
  );
}
