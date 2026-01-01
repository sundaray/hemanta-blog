export default function HireMePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 xl:px-0">
      <div>
        <h1 className="font-heading text-center">Hire Me</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
          <p>
            I am looking for my first professional role in the software
            engineering industry. Specifically, I am seeking a full-stack web
            developer position with a backend focus.
          </p>
          <p>
            I work with <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Node.js</strong>, and <strong>PostgreSQL</strong>.
          </p>
          <p>
            If you have a suitable opportunity for me, please reach out at{" "}
            <a
              href="mailto:rawgrittt@gmail.com"
              className="font-medium text-sky-700 hover:underline"
            >
              rawgrittt@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
