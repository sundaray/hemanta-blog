import { Icons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function AccessDeniedPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icons.lock className="text-muted-foreground size-8" />
          </EmptyMedia>
        </EmptyHeader>
        <EmptyTitle className="text-2xl font-semibold">
          Access Denied
        </EmptyTitle>
        <EmptyDescription className="max-w-md text-balance text-base text-neutral-600">
          This page is restricted to administrators only. You do not have
          permission to view this content.
        </EmptyDescription>
        <EmptyContent>
          <ArrowLink href="/" className="font-semibold" direction="left">
            Back to Home
          </ArrowLink>
        </EmptyContent>
      </Empty>
    </div>
  );
}
