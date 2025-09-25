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
import {
  useQueryStates,
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
  debounce,
} from "nuqs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  type OssProjectsSearchParams,
  type FilterSectionState,
  type NullableFilterUpdatePayload,
} from "@/lib/search-params";

type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
  startTopicsToggleTransition: TransitionStartFunction;
  startLanguagesToggleTransition: TransitionStartFunction;
  isClearing?: boolean;
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

  // 🔹 State for topic filters
  const [topicState, setTopicState] = useQueryStates(
    {
      topic: parseAsArrayOf(parseAsString).withDefault([]),
      page: parseAsInteger.withDefault(1),
    },
    {
      startTransition: startTopicsToggleTransition,
      shallow: false,
      history: "push",
    },
  );

  // 🔹 State for language filters
  const [languageState, setLanguageState] = useQueryStates(
    {
      language: parseAsArrayOf(parseAsString).withDefault([]),
      page: parseAsInteger.withDefault(1),
    },
    {
      startTransition: startLanguagesToggleTransition,
      shallow: false,
      history: "push",
    },
  );

  // 🔹 Determine if any filters are active to conditionally show the Clear button
  const hasActiveFilters =
    topicState.topic.length > 0 || languageState.language.length > 0;

  // 🔹 Clear all active filters
  const handleClearAllFilters = useCallback(() => {
    setTopicState({ topic: null, page: null });
    setLanguageState({ language: null, page: null });
  }, [setTopicState, setLanguageState]);

  return (
    <search>
      <aside className={cn(className, "divide-y-1 divide-solid divide-input")}>
        <div className="flex h-10 items-start justify-between">
          <h4>Filter OSS Projects</h4>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAllFilters}
              className="text-sm text-muted-foreground"
            >
              <Icons.circleX className="size-4" />
              Clear
            </Button>
          )}
        </div>
        <FilterSection
          title="Topics"
          items={uniqueTopics}
          filterKey="topic"
          startSearchTransition={startTopicsSearchTransition}
          isSearchLoading={isTopicsSearchLoading}
          values={topicState}
          setValues={setTopicState}
          defaultOpen={true}
        />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          filterKey="language"
          startSearchTransition={startLanguagesSearchTransition}
          isSearchLoading={isLanguagesSearchLoading}
          values={languageState}
          setValues={setLanguageState}
        />
      </aside>
    </search>
  );
}

type FilterSectionProps = {
  title: string;
  items: string[];
  filterKey: "topic" | "language";
  startSearchTransition: TransitionStartFunction;
  isSearchLoading: boolean;
  values: FilterSectionState;
  setValues: (values: NullableFilterUpdatePayload) => Promise<URLSearchParams>;
  defaultOpen?: boolean;
};

// -----------------------------------------------
//
//
//
//
//  FilterSection
//
//
//
//
// -----------------------------------------------

function FilterSection({
  title,
  items,
  filterKey,
  startSearchTransition,
  isSearchLoading,
  values,
  setValues,
  defaultOpen,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const filterValues = values[filterKey] ?? [];
  const selectedFiltersCount = filterValues.length;

  const searchQueryKey =
    filterKey === "topic" ? "topic-query" : "language-query";

  const [search, setSearch] = useQueryStates(
    {
      [searchQueryKey]: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    { startTransition: startSearchTransition, shallow: false, history: "push" },
  );
  const searchTerm = search[searchQueryKey] ?? "";

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(
        { [searchQueryKey]: value, page: null },
        { limitUrlUpdates: value === "" ? undefined : debounce(300) },
      );
    },
    [setSearch, searchQueryKey],
  );

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (e.key === "Enter") {
        setSearch({ [searchQueryKey]: target.value, page: null });
      } else if (e.key === "Escape") {
        setSearch({ [searchQueryKey]: null, page: null });
      }
    },
    [setSearch, searchQueryKey],
  );

  const clearSearch = useCallback(() => {
    setSearch({ [searchQueryKey]: null, page: null });
  }, [setSearch, searchQueryKey]);

  const onCheckedChange = (isChecked: boolean, item: string) => {
    const newValues = isChecked
      ? [...filterValues, item]
      : filterValues.filter((filter) => filter !== item);

    setValues({ [filterKey]: newValues, page: null });
  };

  return (
    <div>
      <button
        className="flex h-12 w-full items-center gap-x-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icons.chevronRight className="size-5" />
        </motion.div>
        <span className="text-sm font-medium">{title}</span>
        {selectedFiltersCount > 0 && (
          <Badge variant="outline" className="ml-auto tabular-nums">
            {selectedFiltersCount}
          </Badge>
        )}
      </button>
      <>
        {isOpen && (
          <div className="space-y-2">
            <div className="grid grid-cols-1 items-center">
              <Input
                type="search"
                placeholder={`Search ${title.toLowerCase()}…`}
                value={searchTerm}
                className={cn("col-start-1 row-start-1 pl-8")}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
              />
              <div className="pointer-events-none col-start-1 row-start-1 w-fit pl-3">
                <Icons.search className="size-4 text-muted-foreground" />
              </div>
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
                  "[&_[data-slot=scroll-area-viewport]]:[mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]",
                  isSearchLoading
                    ? "pointer-events-none opacity-50"
                    : "opacity-100",
                )}
              >
                <div className={"flex flex-col pr-4"}>
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

// -----------------------------------------------
//
//
//
//
//  FilterItem
//
//
//
//
// -----------------------------------------------

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
