"use client";

import { IoMdCloseCircle } from "react-icons/io";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type OssProjectsSearchResultsHeaderProps = {
  isSidebarVisible: boolean;
  onToggleSidebar: () => void;
  className?: string;
  currentCount: number;
  totalCount: number;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
};

export function OssProjectsSearchResultsHeader({
  isSidebarVisible,
  onToggleSidebar,
  className,
  currentCount,
  totalCount,
  hasActiveFilters,
  onResetFilters,
}: OssProjectsSearchResultsHeaderProps) {
  return (
    <div className={cn("flex h-10 items-center justify-between", className)}>
      <div className="flex items-center gap-x-4">
        <div className="flex items-baseline gap-x-2">
          <h4>OSS Projects</h4>
          <span className="text-muted-foreground text-base font-medium tabular-nums">
            ({currentCount} of {totalCount})
          </span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="text-sm font-semibold text-sky-700 hover:bg-sky-100/50 hover:text-sky-700"
          >
            <IoMdCloseCircle className="size-4" />
            Reset
          </Button>
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleSidebar}
        className="text-muted-foreground text-sm"
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
