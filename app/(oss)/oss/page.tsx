import { getOssProjects } from "@/lib/get-oss-projects";
import { OssProjectCard } from "@/components/oss-project-card";
import { OssProjectSearch } from "@/components/oss-project-search";
import { OssProjectsSidebar } from "@/components/oss-projects-sidebar";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default async function OssPage() {
  const result = await getOssProjects();

  if (result.isErr()) {
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

  const projects = result.value;

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

      <div className="mt-24 lg:grid lg:grid-cols-4 lg:gap-8">
        <OssProjectsSidebar
          projects={projects}
          className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3",
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
