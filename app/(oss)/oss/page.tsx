import { getOssProjects } from "@/lib/get-oss-projects";
import { OssProjectCard } from "@/components/oss-project-card";
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
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Open Source Software
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-neutral-600">
          A collection of open-source projects I find interesting or have
          contributed to.
        </p>
      </div>

      <div
        className={cn(
          "my-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {projects.map((project) => (
          <OssProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
