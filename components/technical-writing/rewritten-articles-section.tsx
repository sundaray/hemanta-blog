import { revisedBlogItems } from "@/data/kodekloud";

import { Icons } from "@/components/icons";

export function RewrittenArticlesSection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl">Rewritten Articles</h2>
        <p className="mt-4 text-pretty text-lg text-neutral-700">
          I also rewrote the following articles to improve their clarity,
          readability, and technical accuracy. Please note that these are
          credited under the original author's name to acknowledge his initial
          contribution.
        </p>
      </div>

      <ul className="mx-auto mt-12 max-w-2xl space-y-4">
        {revisedBlogItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-neutral-700 transition-colors hover:text-sky-700"
            >
              <Icons.arrowUpRight className="size-3.5 shrink-0 text-sky-700" />
              <span className="text-left">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
