import { notFound } from "next/navigation";
import { getOssProjectByName } from "@/lib/get-oss-project-by-name";
import { TopicTagGroup } from "@/components/ui/topic-tag-group";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { FaGithub } from "react-icons/fa";

export default async function OssProjectDetailsPage(
  props: PageProps<"/oss/[repo]">,
) {
  const { repo } = await props.params;
  const decodedRepoName = decodeURIComponent(repo);

  const result = await getOssProjectByName(decodedRepoName);

  // 🔹 1. Handle database connection errors with a custom UI
  if (result.isErr()) {
    return (
      <div className="container mx-auto flex h-[60vh] items-center justify-center">
        <div
          role="alert"
          className="flex flex-col items-center gap-y-4 rounded-lg border bg-card p-8 text-card-foreground shadow-sm"
        >
          <Icons.alertTriangle className="size-8 text-red-500" />
          <div className="text-center">
            <h1 className="text-2xl text-red-500">
              Error Fetching Project Details
            </h1>
            <p className="mt-2 text-muted-foreground">{result.error.message}</p>
          </div>
          <ArrowLink href="/oss" className="mt-4">
            Back to all projects
          </ArrowLink>
        </div>
      </div>
    );
  }

  const project = result.value;

  // 🔹 2. Handle the case where the project is not found in the database
  // This check is still necessary to distinguish a DB error from a valid "not found" state.
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6">
      {/* Breadcrumbs */}
      <DynamicBreadcrumb className="mb-4" />
      <article className="flex flex-col gap-y-8">
        {/* Header */}
        <div className="flex flex-col gap-y-8">
          <h1>{project.name}</h1>
          {project.description && (
            <p className="text-lg text-neutral-600">{project.description}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap",
              "h-9 bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90",
            )}
          >
            <FaGithub className="size-4" />
            View on GitHub
          </a>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
                "h-9 px-4 py-2 text-secondary-foreground",
              )}
            >
              <Icons.globe className="size-4" />
              Visit Homepage
            </a>
          )}
        </div>
        {/* Topics Section */}
        {project.topics && project.topics.length > 0 && (
          <div>
            <h2 className="mb-4">Topics</h2>
            <TopicTagGroup topics={project.topics} />
          </div>
        )}
      </article>
    </div>
  );
}
