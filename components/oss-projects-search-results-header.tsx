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
    <div
      className={cn(
        "flex items-center justify-between border-b border-input pb-3",
        className,
      )}
    >
      <h3>Search Results</h3>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleSidebar}
        className="cursor-pointer text-sm"
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
