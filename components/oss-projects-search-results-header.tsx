import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type OssProjectsSearchResultsHeaderProps = {
  isSidebarVisible: boolean;
  onToggleSidebar: () => void;
  className?: string;
  currentCount: number;
  totalCount: number;
};

export function OssProjectsSearchResultsHeader({
  isSidebarVisible,
  onToggleSidebar,
  className,
  currentCount,
  totalCount,
}: OssProjectsSearchResultsHeaderProps) {
  return (
    <div className={cn("flex h-10 items-center justify-between", className)}>
      <div className="flex items-baseline gap-x-2">
        <h4>OSS Projects</h4>
        <span className="text-base font-medium text-muted-foreground tabular-nums">
          ({currentCount} of {totalCount})
        </span>
      </div>{" "}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleSidebar}
        className="text-sm text-muted-foreground"
      >
        {isSidebarVisible ? (
          <>
            <Icons.filterX className="size-4" />
            Hide Filters
          </>
        ) : (
          <>
            <Icons.filter className="size-4" />
            Show Filters
          </>
        )}
      </Button>
    </div>
  );
}
