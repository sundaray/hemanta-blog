"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SelectOssProject } from "@/db/schema";
import { OssProjectsSidebar } from "@/components/oss-projects-sidebar";
import { OssProjectCard } from "@/components/oss-project-card";
import { OssProjectsSearchResultsHeader } from "@/components/oss-projects-search-results-header";

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

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="group lg:grid lg:grid-cols-4 lg:gap-8">
      {isSidebarVisible && (
        <OssProjectsSidebar
          uniqueTopics={uniqueTopics}
          uniqueLanguages={uniqueLanguages}
          className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
        />
      )}
      <div className={cn(isSidebarVisible ? "lg:col-span-3" : "lg:col-span-4")}>
        <OssProjectsSearchResultsHeader
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={toggleSidebar}
        />
        <div
          className={cn(
            "relative mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2",
            isSidebarVisible ? "lg:grid-cols-3" : "lg:grid-cols-4",
          )}
        >
          {projects.map((project) => (
            <OssProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
