"use client";

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import type { SelectOssProject } from "@/db/schema";
import { OssProjectsSidebar } from "@/components/oss-projects-sidebar";
import { OssProjectCard } from "@/components/oss-project-card";
import { OssProjectsSearchResultsHeader } from "@/components/oss-projects-search-results-header";
import { Icons } from "@/components/icons";
import { OssProjectSearch } from "@/components/oss-project-search";
import { OssProjectsPagination } from "@/components/oss-projects-pagination";

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

  const [isSearchLoading, startSearchTransition] = useTransition();
  const [isTopicsToggleLoading, startTopicsToggleTransition] = useTransition();
  const [isLanguagesToggleLoading, startLanguagesToggleTransition] =
    useTransition();
  const [isPaginating, startPaginationTransition] = useTransition();

  const isAnyToggleLoading = Boolean(
    isTopicsToggleLoading || isLanguagesToggleLoading,
  );

  const isGridLoading = isSearchLoading || isAnyToggleLoading || isPaginating;

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <OssProjectSearch
        className="my-16"
        startTransition={startSearchTransition}
      />

      <OssProjectsSearchResultsHeader
        isSidebarVisible={isSidebarVisible}
        onToggleSidebar={toggleSidebar}
        className="mb-8"
        currentCount={projects.length}
        totalCount={totalProjects}
      />

      <div
        className="group lg:flex lg:gap-8"
        data-toggle-loading={isAnyToggleLoading ? "true" : undefined}
      >
        {isSidebarVisible && (
          <OssProjectsSidebar
            uniqueTopics={uniqueTopics}
            uniqueLanguages={uniqueLanguages}
            className="hidden w-64 lg:sticky lg:top-24 lg:block lg:self-start"
            startTopicsToggleTransition={startTopicsToggleTransition}
            startLanguagesToggleTransition={startLanguagesToggleTransition}
            isClearing={isAnyToggleLoading}
          />
        )}

        <div className="flex-1">
          <div className="relative">
            {isGridLoading && (
              <div
                className="absolute top-[20px] left-1/2 z-30 -translate-x-1/2"
                aria-hidden="true"
              >
                <Icons.spinner className="size-8 animate-spin text-sky-700" />
              </div>
            )}

            <div
              className={cn(
                "grid grid-cols-1 gap-8 sm:grid-cols-2",
                isSidebarVisible ? "lg:grid-cols-3" : "lg:grid-cols-4",
                isGridLoading
                  ? "pointer-events-none opacity-30"
                  : "opacity-100",
                "transition-opacity",
              )}
            >
              {projects.length > 0 ? (
                projects.map((project) => (
                  <OssProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full mx-auto flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center">
                  <Icons.search className="size-10 text-muted-foreground" />
                  <h2 className="mt-4">No Projects Found</h2>
                  <p className="mt-2 text-neutral-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>

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
