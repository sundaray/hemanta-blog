import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects";
import { Icons } from "@/components/icons";
import { searchParamsCache } from "@/lib/search-params";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import type { SearchParams } from "nuqs/server";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
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
