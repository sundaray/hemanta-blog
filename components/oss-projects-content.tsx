"use client";

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import type { SelectOssProject } from "@/db/schema";
import { OssProjectsSidebar } from "@/components/oss-projects-sidebar";
import { OssProjectCard } from "@/components/oss-project-card";
import { OssProjectsSearchResultsHeader } from "@/components/oss-projects-search-results-header";
import { Icons } from "@/components/icons";

type OssContentProps = {
  projects: SelectOssProject[];
  uniqueTopics: string[];
  uniqueLanguages: string[];
};

export function OssProjectsContent({
  projects,
  uniqueTopics,
  uniqueLanguages,
}: OssContentProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [isTopicsToggleLoading, startTopicsToggleTransition] = useTransition();
  const [isLanguagesToggleLoading, startLanguagesToggleTransition] =
    useTransition();

  const isAnyToggleLoading = Boolean(
    isTopicsToggleLoading || isLanguagesToggleLoading,
  );

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div
      className="group lg:grid lg:grid-cols-4 lg:gap-8"
      data-toggle-loading={isAnyToggleLoading ? "true" : undefined}
    >
      {isSidebarVisible && (
        <OssProjectsSidebar
          uniqueTopics={uniqueTopics}
          uniqueLanguages={uniqueLanguages}
          className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
          startTopicsToggleTransition={startTopicsToggleTransition}
          startLanguagesToggleTransition={startLanguagesToggleTransition}
        />
      )}

      <div className={cn(isSidebarVisible ? "lg:col-span-3" : "lg:col-span-4")}>
        <OssProjectsSearchResultsHeader
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={toggleSidebar}
        />

        <div className="relative mt-8">
          {isAnyToggleLoading && (
            <div
              className="absolute top-[20px] left-1/2 z-30 -translate-x-1/2"
              aria-hidden="true"
            >
              <Icons.spinner className="size-8 animate-spin text-sky-700" />
            </div>
          )}

          <div
            className={cn(
              "mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2",
              isSidebarVisible ? "lg:grid-cols-3" : "lg:grid-cols-4",
              isAnyToggleLoading
                ? "pointer-events-none opacity-30"
                : "opacity-100",
              "transition-opacity",
            )}
          >
            {projects.map((project) => (
              <OssProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
