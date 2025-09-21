import { ArrowLink } from "@/components/ui/arrow-link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center text-center">
      <h1>Project Not Found</h1>
      <p className="mt-4 max-w-md text-pretty text-neutral-700">
        Oops! We couldn't find the project you were looking for. It might have
        been moved, or the URL may be incorrect.
      </p>
      <ArrowLink href="/oss" className="mt-8">
        Back to All Projects
      </ArrowLink>
    </div>
  );
}
