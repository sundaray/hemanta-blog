import { playgroundItems } from "@/data/kodekloud";

import { Icons } from "@/components/icons";

export function PlaygroundsSection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl">Playground Write-ups</h2>
        <p className="mt-4 text-pretty text-lg text-neutral-700">
          In addition to the articles above, I created write-ups for the
          following KodeKloud playgrounds: interactive sandboxes to experiment
          with various cloud and DevOps technologies.
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3 md:text-base">
        {playgroundItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-neutral-700 transition-colors hover:text-sky-700"
            >
              <Icons.arrowUpRight className="size-3.5 shrink-0 text-sky-700" />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
