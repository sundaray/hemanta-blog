import { cn } from "@/lib/utils";

export function KodeKloudTestimonial() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <h2 className="mb-8 text-4xl">Testimonial</h2>
      <figure className="text-left">
        <blockquote>
          <svg
            className="mb-4 size-8 text-neutral-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <div
            className={cn(
              "font-merriweather space-y-6 text-base text-neutral-700",
            )}
          >
            <p>
              &quot;In the last 6 months, I have had the pleasure of editing
              many articles created by Hemanta, and I can confidently say that
              he is one of the most dedicated and hardworking writers I have
              ever had the pleasure of working with.
            </p>
            <p>
              He is very gifted at creating engaging articles that are logically
              organized, accurate, and capturing the main point. One of his most
              outstanding qualities is the ability to create perfect examples to
              explain DevOps concepts or implementations.
            </p>
            <p>
              His attention to detail and commitment to excellence is truly
              inspiring. I&apos;m always looking forward to reading his
              articles.&quot;
            </p>
          </div>
        </blockquote>
        <figcaption className="mt-6 flex flex-col pt-4 text-sm text-neutral-600">
          <span className="font-semibold text-neutral-700">
            Benson Kuria Macharia
          </span>
          <span>Editor @ KodeKloud</span>
        </figcaption>
      </figure>
    </section>
  );
}
