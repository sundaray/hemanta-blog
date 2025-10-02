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
    // 🔄️ Updates all relevant sidebar filters in one atomic call.
    setFilters({
      topic: null,
      language: null,
      "topic-query": "",
      "language-query": "",
      page: null,
    });
  }, [setFilters]);

  const handleResetAll = useCallback(() => {
    // 🔄️ Resets everything in a single call to prevent flickering.
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
    // 🔄️ Uses the unified setter, but overrides the transition to only show the sidebar spinner.
    setFilters(
      { "topic-query": value },
      {
        startTransition: startSidebarQueryingTransition,
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

  const handleLanguageQueryChange = (value: string) => {
    // 🔄️ Same as above, overriding the transition for a better UX.
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
            className="hidden w-64 lg:sticky lg:top-24 lg:block lg:self-start"
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
                  <Icons.search className="text-muted-foreground size-10" />
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
