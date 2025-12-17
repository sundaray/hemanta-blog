"use client";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type CopyPostButtonProps = {
  content: string; // This is the raw markdown content
  className?: string;
};

export function CopyBlogPostButton({
  content,
  className,
}: CopyPostButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(content)}
      className={cn(
        "gap-2 bg-white text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50",
        className,
      )}
    >
      {isCopied ? (
        <>
          <Icons.check className="size-4 text-emerald-600" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Icons.copy className="size-3.5" />
          <span>Copy Page</span>
        </>
      )}
    </Button>
  );
}
