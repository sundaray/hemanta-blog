"use client";

import Link from "next/link";

import type { SelectOssProject } from "@/db/schema";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

type OssProjectCardProps = {
  project: SelectOssProject;
  className?: string;
};

export function OssProjectCard({ project, className }: OssProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg p-4 transition-all",
        "bg-gradient-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,_-4px_4px_10px_rgb(0_0_0_/_0.1)]",
        "hover:-translate-y-1",
        className,
      )}
    >
      <Link
        href={`/oss/${project.name}`}
        className="focus-ring absolute inset-0 z-10 rounded-lg"
        aria-label={`View details for ${project.name}`}
      />

      <div className="flex items-start justify-between gap-2">
        <h3
          className={cn(
            "text-pretty",
            "transition-colors group-hover:text-sky-700",
          )}
        >
          {project.name}
        </h3>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            tabIndex={-1}
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-foreground focus-ring relative z-20",
              "-m-2 p-2",
              "hover:bg-accent rounded-full transition-colors",
            )}
            aria-label="Visit project website"
            onClick={(e) => e.stopPropagation()}
          >
            <Icons.globe className="size-4 shrink-0" />
          </a>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
        <StatItem icon={Icons.star} label="Stars" value={project.stars} />
        <StatItem icon={Icons.gitFork} label="Forks" value={project.forks} />
        <StatItem
          icon={Icons.eye}
          label="Watching"
          value={project.subscribers}
        />
      </div>

      <Separator className="bg-input my-4" />

      <div className="mt-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {project.language && (
            <>
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
              <span className="text-foreground font-medium">
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
      <span className="text-foreground font-mono">
        {value.toLocaleString()}
      </span>
    </div>
  );
}
