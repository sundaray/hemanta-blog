import Link from "next/link";

import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type Project = {
  title: string;
  description: string;
  href: string;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg p-6 transition-all",
        "bg-linear-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,-4px_4px_10px_rgb(0_0_0/0.1)]",
        "hover:scale-[1.02]",
        "has-[a:focus-visible]:-translate-y-1",
        "has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:[&_a:focus-visible]:outline-none",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h2>{project.title}</h2>

        <p className="text-pretty text-neutral-700">{project.description}</p>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 font-medium text-neutral-700 transition-colors hover:text-sky-700",
            "before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']",
          )}
        >
          <FaGithub className="size-4" />
          GitHub
          <Icons.arrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
