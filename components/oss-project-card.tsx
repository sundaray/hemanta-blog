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

// const iconVariants = {
//   rest: {
//     rotate: 0,
//     transition: { duration: 0.2, ease: "easeOut" },
//   },
//   hover: {
//     rotate: 180,
//     transition: { duration: 0.2, ease: "easeOut" },
//   },
// } as const;

export function OssProjectCard({ project, className }: OssProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-accent group relative flex flex-col rounded-sm border border-neutral-200 p-4 transition-all hover:scale-[1.02]",
        // "bg-linear-to-bl from-neutral-100 to-neutral-50",
        // "shadow-[inset_-2px_2px_#fff,-4px_4px_10px_rgb(0_0_0/0.1)]",
        // "hover:scale-[1.02]",
        // "has-[.main-link:focus-visible]:-translate-y-1",
        // "has-[.main-link:focus-visible]:ring-ring has-[.main-link:focus-visible]:ring-2",
        // "has-[.main-link:focus-visible]:[&_.main-link:focus-visible]:outline-none",
        className,
      )}
    >
      {/* <div className="flex items-start justify-between gap-2"> */}
      <h3
        className={cn(
          "text-pretty",
          "transition-colors group-hover:text-sky-700",
        )}
      >
        <Link
          href={`/oss/${project.name}`}
          className={cn(
            "main-link",
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          {project.name}
        </Link>
      </h3>
      {/* {project.homepage && (
          <motion.a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-foreground relative z-20",
              "-m-2 p-2",
              "rounded-full",
              "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2",
            )}
            aria-label="Visit project website"
            onClick={(e) => e.stopPropagation()}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={iconVariants}>
              <Icons.globe className="size-4 shrink-0" />
            </motion.div>
          </motion.a>
        )} */}
      {/* </div> */}

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
