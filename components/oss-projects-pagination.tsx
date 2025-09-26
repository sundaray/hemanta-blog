"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { searchParams } from "@/lib/search-params";
import { calculatePaginationRange } from "@/lib/pagination";
import { cn } from "@/lib/utils";
import { useQueryStates } from "nuqs";
import { useMemo, type TransitionStartFunction } from "react";

const SIBLING_COUNT = 2;

type OssProjectsPaginationProps = {
  totalPages: number;
  className?: string;
};

export function OssProjectsPagination({
  totalPages,
  className,
}: OssProjectsPaginationProps) {
  const [filters, setFilters] = useQueryStates(searchParams, {
    shallow: false,
    scroll: true,
  });
  const currentPage = filters.page;

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages, SIBLING_COUNT),
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
