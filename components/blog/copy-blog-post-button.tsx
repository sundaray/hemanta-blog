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
        "bg-taupe-100 text-taupe-700 border-taupe-200 hover:bg-taupe-100 gap-2 text-sm font-medium transition-all",
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
          <span>Copy page as markdown</span>
        </>
      )}
    </Button>
  );
}
