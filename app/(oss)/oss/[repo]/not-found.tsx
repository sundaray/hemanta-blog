import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <Empty>
      <EmptyTitle className="text-2xl font-semibold">
        Project Not Found
      </EmptyTitle>
      <EmptyDescription className="max-w-2xl text-balance text-base text-neutral-600">
        Oops! We couldn't find the project you were looking for. It might have
        been moved, or the URL may be incorrect.
      </EmptyDescription>
      <EmptyContent>
        <ArrowLink href="/oss" className="font-semibold" direction="left">
          Back to OSS
        </ArrowLink>
      </EmptyContent>
    </Empty>
  );
}
