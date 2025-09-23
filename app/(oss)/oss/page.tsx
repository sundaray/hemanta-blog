import { getOssProjects } from "@/lib/get-oss-projects";
import { OssProjectSearch } from "@/components/oss-project-search";
import { Icons } from "@/components/icons";
import { ossProjectsSearchParamsCache } from "@/lib/oss-projects-search-params";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import type { SearchParams } from "nuqs/server";

export default async function OssPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // 🔹 Parse filters from URL search params
  const filters = await ossProjectsSearchParamsCache.parse(searchParams);

  // 🔹 Fetch filter options and filtered projects in parallel
  const [filterOptions, projectsResult] = await Promise.all([
    getOssProjectFilterOptions({
      topicQuery: filters["topic-query"],
      languageQuery: filters["language-query"],
    }),
    getOssProjects(filters),
  ]);

  if (projectsResult.isErr()) {
    return (
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-x-2">
          <Icons.alertTriangle className="size-5 shrink-0" />
          <h2 className="text-2xl font-semibold tracking-tight text-red-600">
            Error Fetching Projects
          </h2>
        </div>
      </div>
    );
  }

  const projects = projectsResult.value;
  const { uniqueTopics, uniqueLanguages } = filterOptions;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1>Open Source Software</h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-pretty text-neutral-600">
          A collection of open-source projects I use or find interesting. Most
          are related to full-stack web development, with a focus on my current
          tech stack: TypeScript, React, and PostgreSQL.
        </p>
      </div>

      <OssProjectSearch className="my-16" />

      <OssProjectsContent
        projects={projects}
        uniqueTopics={uniqueTopics}
        uniqueLanguages={uniqueLanguages}
      />
    </div>
  );
}
