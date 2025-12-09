import { notFound } from "next/navigation";

import { FaGithub } from "react-icons/fa";

import { getOssProjectByName } from "@/lib/get-oss-project-by-name";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { TopicTagGroup } from "@/components/ui/topic-tag-group";

export default async function OssProjectDetailsPage(
  props: PageProps<"/oss/[repo]">,
) {
  const { repo } = await props.params;
  const decodedRepoName = decodeURIComponent(repo);

  const result = await getOssProjectByName(decodedRepoName);

  if (result.isErr()) {
    return (
      <Empty className="mx-auto max-w-3xl rounded-lg border border-dashed p-8">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icons.alertTriangle className="size-8 text-red-600" />
          </EmptyMedia>
        </EmptyHeader>
        <EmptyTitle className="text-2xl font-semibold">
          Error Fetching Project Details
        </EmptyTitle>
        <EmptyDescription className="text-balance text-base text-neutral-600">
          {result.error.message}
        </EmptyDescription>
        <EmptyContent>
          <ArrowLink href="/oss" className="font-semibold" direction="left">
            Back to OSS
          </ArrowLink>
        </EmptyContent>
      </Empty>
    );
  }

  const project = result.value;

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      {/* <ArrowLink
        href="/oss"
        className="mb-4 px-0 font-semibold text-sky-700"
        direction="left"
      >
        Back to OSS
      </ArrowLink> */}
      <article className="flex flex-col">
        <div className="flex flex-col">
          <h1>{project.name}</h1>
          {project.description && (
            <p className="mt-4 text-lg text-neutral-700">
              {project.description}
            </p>
          )}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
              "bg-primary text-primary-foreground hover:bg-primary/90 focus-ring h-9 px-4 py-2 transition-colors",
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
                "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
                "text-secondary-foreground h-9 px-4 py-2",
              )}
            >
              <Icons.globe className="size-4" />
              Visit Homepage
            </a>
          )}
        </div>
        {/* Topics Section */}
        {project.topics && project.topics.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4">Topics</h2>
            <TopicTagGroup topics={project.topics} />
          </div>
        )}
      </article>
    </div>
  );
}
