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

export const metadata = {
  title: "Authentication Error",
  description: "An error occurred during sign in",
};

export default function AuthErrorPage() {
  return (
    <Empty className="mx-auto max-w-2xl">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="text-red-600">
          <Icons.alertTriangle className="size-6" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle className="text-2xl font-semibold text-red-900">
        Authentication Error
      </EmptyTitle>
      <EmptyDescription className="text-balance text-base text-neutral-600">
        Failed to complete sign in. Please try again.
      </EmptyDescription>
      <EmptyContent>
        <ArrowLink href="/signin" className="font-semibold" direction="left">
          Back to Sign In
        </ArrowLink>
      </EmptyContent>
    </Empty>
  );
}
