"use client";

import { GrPowerReset } from "react-icons/gr";
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
            className="cursor-pointer rounded-full text-sm font-semibold text-sky-700 hover:bg-sky-100/50 hover:text-sky-700"
          >
            <GrPowerReset className="size-4" />
            Reset all
          </Button>
        )}
      </div>
      <Button
        size="sm"
        onClick={onToggleSidebar}
        className="cursor-pointer rounded-full bg-neutral-200 text-sm text-neutral-700 hover:bg-neutral-200"
      >
        {isSidebarVisible ? (
          <>
            <Icons.filterX className="size-4" />
            Hide filters
          </>
        ) : (
          <>
            <Icons.filter className="size-4" />
            Show filters
          </>
        )}
      </Button>
    </div>
  );
}
