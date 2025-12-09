import { getOssProjectFilterOptions } from "@/lib/get-oss-project-filters-options";
import { getOssProjects, getOssProjectsCount } from "@/lib/get-oss-projects";
import { searchParamsCache } from "@/lib/search-params";

import { Icons } from "@/components/icons";
import { OssProjectsContent } from "@/components/oss-projects-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const PROJECTS_PER_PAGE = 36;

export default async function OssPage(props: PageProps<"/oss">) {
  const resolvedSearchParams = await props.searchParams;

  const filters = await searchParamsCache.parse(resolvedSearchParams);

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
      <div className="container mx-auto max-w-3xl">
        <Empty className="rounded-lg border p-8">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icons.alertTriangle className="size-8 text-red-500" />
            </EmptyMedia>
          </EmptyHeader>
          <EmptyTitle className="text-2xl font-semibold">
            Error Fetching Projects
          </EmptyTitle>
          <EmptyDescription className="text-balance text-base text-neutral-600">
            An unexpected error occurred while trying to load the projects.
            Please try refreshing the page, or check back again later.
          </EmptyDescription>
          <EmptyContent>
            <ArrowLink href="/" className="font-semibold" direction="left">
              Back to home
            </ArrowLink>
          </EmptyContent>
        </Empty>
      </div>
    );
  }

  const projects = projectsResult.value;
  const totalProjects = totalProjectsResult.value;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
  const { uniqueTopics, uniqueLanguages } = filterOptionsResult.value;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        {/* <ArrowLink
          href="/"
          className="mb-4 font-semibold text-sky-700"
          direction="left"
        >
          Back to home
        </ArrowLink> */}
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
