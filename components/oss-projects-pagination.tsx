"use client";

import { useMemo, type TransitionStartFunction } from "react";

import { useQueryStates } from "nuqs";

import { calculatePaginationRange } from "@/lib/pagination";
import { searchParams } from "@/lib/search-params";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type OssProjectsPaginationProps = {
  totalPages: number;
  className?: string;
  startTransition: TransitionStartFunction;
};

export function OssProjectsPagination({
  totalPages,
  className,
  startTransition,
}: OssProjectsPaginationProps) {
  const isMobile = useIsMobile();

  const [filters, setFilters] = useQueryStates(searchParams, {
    startTransition,
    shallow: false,
    scroll: true,
  });
  const currentPage = filters.page;

  const siblingCount = isMobile ? 1 : 1;

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setFilters({ page });
    }
  };

  return (
    <Pagination className={cn("mt-16", className)}>
      <PaginationContent className="w-full">
        <PaginationItem className="mr-auto">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            className={cn(
              "select-none",
              isFirstPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {paginationRange.map((pageNumberOrEllipsis, index) => {
          if (typeof pageNumberOrEllipsis === "string") {
            return (
              <PaginationItem key={`${pageNumberOrEllipsis}-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          const pageNumber = pageNumberOrEllipsis;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="select-none"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem className="ml-auto">
          <PaginationNext
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            className={cn(
              "select-none",
              isLastPage && "pointer-events-none opacity-50",
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
