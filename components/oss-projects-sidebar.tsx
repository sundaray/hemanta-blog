"use client";

import {
  useState,
  useTransition,
  useCallback,
  type TransitionStartFunction,
} from "react";
import { motion } from "motion/react";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useQueryState, parseAsArrayOf, parseAsString, debounce } from "nuqs";

type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
  startTopicsToggleTransition: TransitionStartFunction;
  startLanguagesToggleTransition: TransitionStartFunction;
};

export function OssProjectsSidebar({
  uniqueTopics,
  uniqueLanguages,
  className,
  startTopicsToggleTransition,
  startLanguagesToggleTransition,
}: OssProjectsSidebarProps) {
  const [isTopicsSearchLoading, startTopicsSearchTransition] = useTransition();
  const [isLanguagesSearchLoading, startLanguagesSearchTransition] =
    useTransition();

  return (
    <search>
      <aside className={cn(className, "divide-y-1 divide-solid divide-input")}>
        <h3 className="pb-4">Filter OSS Projects</h3>
        <FilterSection
          title="Topics"
          items={uniqueTopics}
          filterKey="topic"
          startSearchTransition={startTopicsSearchTransition}
          isSearchLoading={isTopicsSearchLoading}
          startToggleTransition={startTopicsToggleTransition}
        />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          filterKey="language"
          startSearchTransition={startLanguagesSearchTransition}
          isSearchLoading={isLanguagesSearchLoading}
          startToggleTransition={startLanguagesToggleTransition}
        />
      </aside>
    </search>
  );
}

function FilterSection({
  title,
  items,
  filterKey,
  startSearchTransition,
  isSearchLoading,
  startToggleTransition,
}: {
  title: string;
  items: string[];
  filterKey: "topic" | "language";
  startSearchTransition: (callback: () => void) => void;
  isSearchLoading: boolean;
  startToggleTransition: (callback: () => void) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const searchQueryKey =
    filterKey === "topic" ? "topic-query" : "language-query";

  const [searchTerm, setSearchTerm] = useQueryState(
    searchQueryKey,
    parseAsString
      .withDefault("")
      .withOptions({ startTransition: startSearchTransition, shallow: false }),
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value, {
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      });
    },
    [setSearchTerm],
  );

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (e.key === "Enter") {
        setSearchTerm(target.value);
      } else if (e.key === "Escape") {
        setSearchTerm(null);
      }
    },
    [setSearchTerm],
  );

  const clearSearch = useCallback(() => {
    setSearchTerm(null);
  }, [setSearchTerm]);

  const [filterValues, setFilterValues] =
    filterKey === "topic"
      ? useQueryState(
          "topic",
          parseAsArrayOf(parseAsString).withDefault([]).withOptions({
            startTransition: startToggleTransition,
            shallow: false,
          }),
        )
      : useQueryState(
          "language",
          parseAsArrayOf(parseAsString).withDefault([]).withOptions({
            startTransition: startToggleTransition,
            shallow: false,
          }),
        );

  const onCheckedChange = (isChecked: boolean, item: string) => {
    if (isChecked) {
      setFilterValues((currentFilters) =>
        currentFilters.includes(item)
          ? currentFilters
          : [...currentFilters, item],
      );
    } else {
      setFilterValues((currentFilters) =>
        currentFilters.filter((filter) => filter !== item),
      );
    }
  };

  return (
    <div>
      <button
        className="flex w-full items-center gap-x-2 py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icons.chevronRight className="size-5" />
        </motion.div>
        <span className="text-sm font-medium">{title}</span>
      </button>
      <>
        {isOpen && (
          <div className="space-y-2">
            <div className="grid grid-cols-1 items-center">
              <div className="pointer-events-none col-start-1 row-start-1 w-fit pl-3">
                <Icons.search className="size-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder={`Search ${title.toLowerCase()}…`}
                value={searchTerm}
                className={cn("col-start-1 row-start-1 pl-9")}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
              />
              {searchTerm && (
                <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
                  <button
                    onClick={clearSearch}
                    className="pointer-events-auto cursor-pointer rounded border bg-background px-1.5 py-0.5 text-xs text-muted-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    esc
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              {isSearchLoading && (
                <div
                  className="absolute top-[10px] left-1/2 z-10 -translate-x-1/2"
                  aria-hidden="true"
                >
                  <Icons.spinner className="size-6 animate-spin text-sky-700" />
                </div>
              )}
              <ScrollArea
                className={cn(
                  "h-60",
                  isSearchLoading ? "opacity-50" : "opacity-100",
                )}
              >
                <div className="flex flex-col">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <FilterItem
                        key={item}
                        label={item}
                        isChecked={filterValues.includes(item)}
                        onCheckedChange={(isChecked: boolean) =>
                          onCheckedChange(isChecked, item)
                        }
                      />
                    ))
                  ) : (
                    <p className="mt-[10px] text-center text-sm text-muted-foreground">
                      No {title.toLowerCase()} found.
                    </p>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

function FilterItem({
  label,
  isChecked,
  onCheckedChange,
}: {
  label: string;
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5",
        "transition-colors hover:bg-accent",
      )}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className={cn(
          "data-[state=checked]:border-sky-700 data-[state=checked]:bg-sky-700 data-[state=checked]:text-white",
        )}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
