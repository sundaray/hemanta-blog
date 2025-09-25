"use client";

import {
  useState,
  useTransition,
  useCallback,
  type TransitionStartFunction,
  useEffect,
  KeyboardEvent,
} from "react";
import { motion } from "motion/react";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useQueryStates, debounce } from "nuqs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchParams } from "@/lib/search-params";

type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
  startTopicsToggleTransition: TransitionStartFunction;
  startLanguagesToggleTransition: TransitionStartFunction;
};

// ======================================================================
// Parent Sidebar Component
// ======================================================================
export function OssProjectsSidebar({
  uniqueTopics,
  uniqueLanguages,
  className,
  startTopicsToggleTransition,
  startLanguagesToggleTransition,
}: OssProjectsSidebarProps) {
  // 🔹 Transitions for the spinners inside each filter section's search
  const [isTopicQueryLoading, startTopicQueryTransition] = useTransition();
  const [isLanguageQueryLoading, startLanguageQueryTransition] =
    useTransition();

  // 🔹 The "source of truth" state that is synced with the URL
  const [filters, setFilters] = useQueryStates(searchParams, {
    shallow: false,
    history: "push",
  });

  // ✍️ Local "UI state" for checkboxes to provide INSTANT visual feedback.
  const [uiSelectedTopics, setUiSelectedTopics] = useState(filters.topic);
  const [uiSelectedLangs, setUiSelectedLangs] = useState(filters.language);

  // ✍️ Effects to keep the instant UI state in sync with the URL state (e.g., for back/forward navigation).
  useEffect(() => {
    setUiSelectedTopics(filters.topic);
  }, [filters.topic]);

  useEffect(() => {
    setUiSelectedLangs(filters.language);
  }, [filters.language]);

  // ✍️ The "Clear" button's visibility is now based on the instant UI state.
  const hasActiveFilters =
    uiSelectedTopics.length > 0 ||
    uiSelectedLangs.length > 0 ||
    filters["topic-query"] !== "" ||
    filters["language-query"] !== "";

  const handleClearAllFilters = useCallback(() => {
    // ✍️ Instantly clear the UI...
    setUiSelectedTopics([]);
    setUiSelectedLangs([]);

    // ✍️ ...then start a transition to update the URL and refetch data in the background.
    startTopicsToggleTransition(() => {
      setFilters({
        topic: null,
        language: null,
        "topic-query": null,
        "language-query": null,
        page: null,
      });
    });
  }, [setFilters, startTopicsToggleTransition]);

  const handleSelectionChange = (
    key: "topic" | "language",
    item: string,
    isChecked: boolean,
  ) => {
    const currentUiValues =
      key === "topic" ? uiSelectedTopics : uiSelectedLangs;
    const newUiValues = isChecked
      ? [...currentUiValues, item]
      : currentUiValues.filter((filter) => filter !== item);

    // ✍️ FIRST, update the local UI state for an instant visual change (checking the box).
    if (key === "topic") {
      setUiSelectedTopics(newUiValues);
    } else {
      setUiSelectedLangs(newUiValues);
    }

    // ✍️ SECOND, start a transition to update the "real" filters and fetch the main grid data.
    const transition =
      key === "topic"
        ? startTopicsToggleTransition
        : startLanguagesToggleTransition;
    transition(() => {
      setFilters({ [key]: newUiValues, page: null });
    });
  };

  // ✍️ This handler uses `nuqs`'s built-in debouncing for an instant typing experience.
  const handleSearchChange = (
    key: "topic-query" | "language-query",
    value: string,
  ) => {
    const transition =
      key === "topic-query"
        ? startTopicQueryTransition
        : startLanguageQueryTransition;

    // ✍️ `nuqs` updates its returned state instantly, but debounces the URL update.
    setFilters(
      { [key]: value, page: null },
      {
        startTransition: transition,
        limitUrlUpdates: value === "" ? undefined : debounce(300),
      },
    );
  };

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
          searchTerm={filters["topic-query"]}
          onSearchChange={(value) => handleSearchChange("topic-query", value)}
          selectedItems={uiSelectedTopics}
          onItemSelectChange={(item, isChecked) =>
            handleSelectionChange("topic", item, isChecked)
          }
          isLoading={isTopicQueryLoading}
          defaultOpen={true}
        />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          searchTerm={filters["language-query"]}
          onSearchChange={(value) =>
            handleSearchChange("language-query", value)
          }
          selectedItems={uiSelectedLangs}
          onItemSelectChange={(item, isChecked) =>
            handleSelectionChange("language", item, isChecked)
          }
          isLoading={isLanguageQueryLoading}
        />
      </aside>
    </search>
  );
}

// ======================================================================
// FilterSection Component
// ======================================================================
type FilterSectionProps = {
  title: string;
  items: string[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedItems: string[];
  onItemSelectChange: (item: string, isChecked: boolean) => void;
  isLoading: boolean;
  defaultOpen?: boolean;
};

function FilterSection({
  title,
  items,
  searchTerm,
  onSearchChange,
  selectedItems,
  onItemSelectChange,
  isLoading,
  defaultOpen,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // ✍️ Handlers to clear the search input via button click or Escape key.
  const clearSearch = useCallback(() => {
    onSearchChange("");
  }, [onSearchChange]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch],
  );

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
        {selectedItems.length > 0 && (
          <Badge variant="outline" className="ml-auto tabular-nums">
            {selectedItems.length}
          </Badge>
        )}
      </button>
      {isOpen && (
        <div className="space-y-2">
          <div className="grid grid-cols-1 items-center">
            <Input
              type="search"
              placeholder={`Search ${title.toLowerCase()}…`}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="col-start-1 row-start-1 pl-9"
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
            {isLoading && (
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
                isLoading ? "pointer-events-none opacity-50" : "opacity-100",
              )}
            >
              <div className="flex flex-col pr-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <FilterItem
                      key={item}
                      label={item}
                      isChecked={selectedItems.includes(item)}
                      onCheckedChange={(isChecked) =>
                        onItemSelectChange(item, isChecked)
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
    </div>
  );
}

// ======================================================================
// FilterItem Component
// ======================================================================
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
    <label className="flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5 transition-colors hover:bg-accent">
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="data-[state=checked]:border-sky-700 data-[state=checked]:bg-sky-700 data-[state=checked]:text-white"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
