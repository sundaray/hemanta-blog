import { ProjectCard } from "@/components/project-card";
import { ArrowLink } from "@/components/ui/arrow-link";

const projects = [
  {
    title: "LucidAuth",
    description: "A TypeScript-first, server-side authentication library.",
    href: "https://github.com/sundaray/LucidAuth",
    techStack: ["TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <div className="text-center">
        {/* <ArrowLink
          href="/"
          className="mb-4 text-center font-mono font-semibold text-sky-700"
          direction="left"
        >
          Back to home
        </ArrowLink> */}

        <h1>Projects</h1>
        <p className="mx-auto mt-4 text-lg text-neutral-700">
          A showcase of my personal projects.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
