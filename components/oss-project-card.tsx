"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { SelectOssProject } from "@/db/schema";

type OssProjectCardProps = {
  project: SelectOssProject;
  className?: string;
};

export function OssProjectCard({ project, className }: OssProjectCardProps) {
  return (
    // 🔹 The card is now a relative container for the overlay link
    <div
      className={cn(
        "group relative flex flex-col rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:scale-102 hover:shadow-lg",
        className,
      )}
    >
      {/* 🔹 This invisible link makes the entire card clickable */}
      <Link
        href={`/oss/${project.name}`} // Placeholder for future details page
        className="absolute inset-0 z-10"
        aria-label={`View details for ${project.name}`}
      />

      {/* The visible content starts here */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-pretty group-hover:underline">
          {project.name}
        </h3>
        {project.homepage && (
          // 🔹 This link needs a higher z-index to be clickable over the main link
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative z-20 text-muted-foreground hover:text-foreground",
              "-m-2 p-2",
              "rounded-full transition-colors hover:bg-accent",
            )}
            aria-label="Visit project website"
            onClick={(e) => e.stopPropagation()}
          >
            <Icons.globe className="size-4 shrink-0" />
          </a>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
        <StatItem icon={Icons.star} label="Stars" value={project.stars} />
        <StatItem icon={Icons.gitFork} label="Forks" value={project.forks} />
        <StatItem
          icon={Icons.eye}
          label="Watching"
          value={project.subscribers}
        />
        {/* <StatItem
          icon={Icons.alertTriangle}
          label="Open Issues"
          value={project.openIssues}
        /> */}
      </div>

      <Separator className="my-4" />

      <div className="mt-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {project.language && (
            <>
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
              <span className="font-medium text-foreground">
                {project.language}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="size-4 shrink-0" />
        <span>{label}</span>
      </div>
      <span className="font-mono text-foreground">
        {value.toLocaleString()}
      </span>
    </div>
  );
}
