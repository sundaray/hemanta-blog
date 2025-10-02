import type { SearchParams } from "nuqs/server";

import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects";
import { searchParamsCache } from "@/lib/search-params";

import { Icons } from "@/components/icons";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { ArrowLink } from "@/components/ui/arrow-link";

const PROJECTS_PER_PAGE = 36;

export default async function OssPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // 🔹 Parse filters from URL search params
  const filters = await searchParamsCache.parse(searchParams);

  // 🔹 Fetch filter options and filtered projects in parallel
  const [filterOptionsResult, projectsResult, totalProjectsResult] =
    await Promise.all([
      getOssProjectFilterOptions({
        topicQuery: filters["topic-query"],
        languageQuery: filters["language-query"],
      }),
      getOssProjects(filters),
      getOssProjectsCount(filters),
    ]);

  if (
    filterOptionsResult.isErr() ||
    projectsResult.isErr() ||
    totalProjectsResult.isErr()
  ) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center">
        <div
          role="alert"
          className="bg-card flex flex-col items-center gap-y-4 rounded-lg border p-8 text-center shadow-sm"
        >
          <Icons.alertTriangle className="size-8 text-red-500" />
          <h2 className="text-red-600">Error Fetching Projects</h2>
          <p className="max-w-md text-pretty text-neutral-600">
            An unexpected error occurred while trying to load the projects.
            Please try refreshing the page, or check back again later.
          </p>
          <ArrowLink href="/" className="mt-4 font-semibold" direction="left">
            Back to home
          </ArrowLink>
        </div>
      </div>
    );
  }

  const projects = projectsResult.value;
  const totalProjects = totalProjectsResult.value;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
  const { uniqueTopics, uniqueLanguages } = filterOptionsResult.value;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <ArrowLink
          href="/"
          className="mb-4 font-semibold text-sky-700"
          direction="left"
        >
          Back to home
        </ArrowLink>
        <h1>Open Source Software</h1>
        <p className="mx-auto mt-8 max-w-3xl text-balance text-lg text-neutral-600">
          A collection of open-source projects I use or find interesting. Most
          are related to full-stack web development, with a focus on my current
          tech stack: TypeScript, React, and PostgreSQL.
        </p>
      </div>
      <OssProjectsContent
        projects={projects}
        uniqueTopics={uniqueTopics}
        uniqueLanguages={uniqueLanguages}
        totalPages={totalPages}
        totalProjects={totalProjects}
      />
    </div>
  );
}
