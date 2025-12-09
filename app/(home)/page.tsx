import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 sm:px-6">
      <div className="flex flex-col gap-8">
        {/* 🔹 1. Image Section */}
        <div className="relative size-32 overflow-hidden">
          <Image
            src="/hemanta-portait.jpg"
            alt="Hemanta Sundaray Portait"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🔹 2. Intro Section */}
        <div className="space-y-4">
          <h1 className="text-4xl">
            Hello world! <span className="animate-wave inline-block">👋</span>
          </h1>
          <p className="text-lg leading-relaxed text-neutral-700">
            Welcome to my humble abode on the internet. I&apos;m Hemanta
            Sundaray, a self-taught full-stack developer from India.
          </p>
        </div>

        {/* 🔹 3. "My Story" Section */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            My Story
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            I worked in the fashion industry for 13 years before pivoting in
            2022 to pursue software engineering full-time. Since then, I have
            been learning and building projects to improve my skill set.
          </p>
        </section>

        {/* 🔹 4. "Now" Section */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            Now
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            I am currently preparing for interviews and actively seeking a
            full-stack developer role.
          </p>
        </section>
      </div>
    </div>
  );
}
