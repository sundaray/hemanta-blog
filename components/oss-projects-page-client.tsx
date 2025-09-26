"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { useQueryStates } from "nuqs";
import { searchParams } from "@/lib/search-params";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useDeferredValue } from "react";
import { SelectOssProject } from "@/db/schema";

// A simple skeleton loader for the initial loading state.
// This is shown via the <Suspense> boundary below.
function ProjectsSkeleton() {
  return (
    <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="h-48 w-full" />
      ))}
    </div>
  );
}

function ProjectsInner() {
  // 🔗 This hook reads the filters from the URL.
  const [filters] = useQueryStates(searchParams);
  // ✨ useDeferredValue is a React hook that makes the UI more responsive
  // by deferring updates during rapid changes (like typing in a search box).
  const deferredFilters = useDeferredValue(filters);

  const filterOptionsKey = {
    topicQuery: deferredFilters["topic-query"],
    languageQuery: deferredFilters["language-query"],
  };

  // 🚀 This single hook fetches all our data in parallel.
  // It hydrates the initial data from the server and handles client-side
  // fetching for all subsequent updates.

  // ✨ We now get the isFetching status to pass down for our fine-grained spinners.
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
    // ⏳ Suspense handles the initial loading state, showing the skeleton
    // while data is streamed from the server.
    <Suspense fallback={<ProjectsSkeleton />}>
      <ProjectsInner />
    </Suspense>
  );
}
