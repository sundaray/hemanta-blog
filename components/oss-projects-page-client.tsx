"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { useQueryStates } from "nuqs";
import { searchParams } from "@/lib/search-params";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { Suspense, useDeferredValue } from "react";
import type { SelectOssProject } from "@/db/schema";
import {
  getOssProjectsAction,
  getOssProjectsCountAction,
  getOssProjectFilterOptionsAction,
} from "@/lib/actions";

// A simple skeleton loader for the initial loading state.
// This is shown via the <Suspense> boundary below.
function ProjectsSkeleton() {
  return <p>Fecthing...</p>;
}

function ProjectsInner() {
  // 🔗 This hook reads the filters from the URL.
  const [filters] = useQueryStates(searchParams);

  // const deferredFilters = useDeferredValue(filters);

  const projectsQueryKey = ["oss-projects", filters];
  const totalProjectsQueryKey = ["oss-projects-count", filters];
  const filterOptionsQueryKey = [
    "oss-filter-options",
    {
      topicQuery: filters["topic-query"],
      languageQuery: filters["language-query"],
    },
  ];

  // 🚀 This single hook fetches all our data in parallel.
  // On initial load, it uses the hydrated data from the server.
  // On subsequent filter changes, it fetches new data on the client.
  const [projectsResult, totalProjectsResult, filterOptionsResult] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: projectsQueryKey,
          // 🔧 FIX: Call the Server Action instead
          queryFn: () => getOssProjectsAction(filters),
        },
        {
          queryKey: totalProjectsQueryKey,
          // 🔧 FIX: Call the Server Action instead
          queryFn: () => getOssProjectsCountAction(filters),
        },
        {
          queryKey: filterOptionsQueryKey,
          // 🔧 FIX: Call the Server Action instead
          queryFn: () =>
            getOssProjectFilterOptionsAction({
              topicQuery: filters["topic-query"],
              languageQuery: filters["language-query"],
            }),
        },
      ],
    });
  // ✨ We get the isFetching status to pass down for our fine-grained spinners.

  // const isStale = JSON.stringify(filters) !== JSON.stringify(filters);
  // const isFilterOptionsFetching = filterOptionsResult.isFetching;

  const isProjectsFetching =
    projectsResult.isFetching || totalProjectsResult.isFetching;
  const isFilterOptionsFetching = filterOptionsResult.isFetching;

  // By using useSuspenseQueries, data is guaranteed to be available here.
  const projects = projectsResult.data as SelectOssProject[];
  const totalProjects = totalProjectsResult.data as number;
  const filterOptions = filterOptionsResult.data as {
    uniqueTopics: string[];
    uniqueLanguages: string[];
  };

  const PROJECTS_PER_PAGE = 36;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

  return (
    <OssProjectsContent
      projects={projects}
      uniqueTopics={filterOptions.uniqueTopics}
      uniqueLanguages={filterOptions.uniqueLanguages}
      totalPages={totalPages}
      totalProjects={totalProjects}
      isProjectsFetching={isProjectsFetching}
      isFilterOptionsFetching={isFilterOptionsFetching}
    />
  );
}

export function OssProjectsPageClient() {
  return (
    // ⏳ Suspense handles client-side loading states (e.g., when filters change).
    // The initial load will be instant because the data is already hydrated.
    <Suspense>
      <ProjectsInner />
    </Suspense>
  );
}
