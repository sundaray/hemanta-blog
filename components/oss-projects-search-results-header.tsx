import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type OssProjectsSearchResultsHeaderProps = {
  isSidebarVisible: boolean;
  onToggleSidebar: () => void;
  className?: string;
};

export function OssProjectsSearchResultsHeader({
  isSidebarVisible,
  onToggleSidebar,
  className,
}: OssProjectsSearchResultsHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between pb-3", className)}>
      <h3>OSS Projects</h3>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleSidebar}
        className="cursor-pointer text-sm"
      >
        {isSidebarVisible ? (
          <>
            <Icons.filterX className="size-4 text-muted-foreground" />
            Hide Filters
          </>
        ) : (
          <>
            <Icons.filter className="size-4 text-muted-foreground" />
            Show Filters
          </>
        )}
      </Button>
    </div>
  );
}
