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
  const [isPaginating, startPaginationTransition] = useTransition(); // 🔹 ADDED: New transition specifically for sidebar option searches
  const [isSidebarQuerying, startSidebarQueryingTransition] = useTransition(); // 🔹 SPLIT: State management is now split to use different transitions

  const [mainFilters, setMainFilters] = useQueryStates(
    {
      query: searchParams.query,
      topic: searchParams.topic,
      language: searchParams.language,
      page: searchParams.page,
    },
    {
      startTransition: startFilteringTransition,
      shallow: false,
      history: "push",
    },
  );

  const [sidebarQueries, setSidebarQueries] = useQueryStates(
    {
      "topic-query": searchParams["topic-query"],
      "language-query": searchParams["language-query"],
    },
    {
      startTransition: startSidebarQueryingTransition,
      shallow: false,
      history: "push",
    },
  );

  const filters = { ...mainFilters, ...sidebarQueries };

  const isGridLoading = isFiltering || isPaginating;
  const isSidebarLoading = isSidebarQuerying;

  const hasActiveSidebarFilters =
    filters.topic.length > 0 ||
    filters.language.length > 0 ||
    filters["topic-query"] !== "" ||
    filters["language-query"] !== "";

  const hasActiveFilters = hasActiveSidebarFilters || filters.query !== "";

  const handleClearSidebarFilters = useCallback(() => {
    setMainFilters({
      topic: null,
      language: null,
      page: null,
    });
    setSidebarQueries({
      "topic-query": "",
      "language-query": "",
    });
  }, [setMainFilters, setSidebarQueries]);

  const handleResetAll = useCallback(() => {
    const areMainFiltersActive =
      filters.query !== "" ||
      filters.topic.length > 0 ||
      filters.language.length > 0;

    if (areMainFiltersActive) {
      setMainFilters({
        query: "",
        topic: null,
        language: null,
        page: null,
      });
    }

    const areSidebarQueriesActive =
      filters["topic-query"] !== "" || filters["language-query"] !== "";

    if (areSidebarQueriesActive) {
      setSidebarQueries({
        "topic-query": "",
        "language-query": "",
      });
    }
  }, [setMainFilters, setSidebarQueries, filters]);

  const handleQueryChange = (value: string) => {
    setMainFilters(
      { query: value, page: null },
      { limitUrlUpdates: value === "" ? undefined : debounce(300) },
    );
  };

  const handleTopicQueryChange = (value: string) => {
    // 🔹 UPDATED: Use the sidebar query setter
    setSidebarQueries(
      { "topic-query": value },
      {
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

  const handleLanguageQueryChange = (value: string) => {
    setSidebarQueries(
      { "language-query": value },
      {
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

  const handleSelectionChange = (
    key: "topic" | "language",
    item: string,
    isChecked: boolean,
  ) => {
    const currentValues = mainFilters[key];
    const newValues = isChecked
      ? [...currentValues, item]
      : currentValues.filter((filter) => filter !== item);

    setMainFilters({
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
