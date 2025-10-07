import { ArrowLink } from "@/components/ui/arrow-link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center">
        <ArrowLink
          href="/"
          className="mb-4 text-center font-mono font-semibold text-sky-700"
          direction="left"
        >
          Back to home
        </ArrowLink>

        <h1>Projects</h1>
        <p className="mt-4 text-lg text-neutral-700">Coming soon…</p>
      </div>
    </div>
  );
}
