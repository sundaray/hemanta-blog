"use client";

import {
  useCallback,
  useState,
  useTransition,
  type KeyboardEvent,
} from "react";

import { motion } from "motion/react";
import { debounce, useQueryState } from "nuqs";

import { searchParams } from "@/lib/search-params";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

// 🔹 MODIFIED: The props are much simpler now, focused on receiving data and functions.
type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
  hasActiveSidebarFilters: boolean;
  onClearAllFilters: () => void;
  onTopicSelect: (item: string, isChecked: boolean) => void;
  onLanguageSelect: (item: string, isChecked: boolean) => void;
  selectedTopics: string[];
  selectedLanguages: string[];
};

export function OssProjectsSidebar({
  uniqueTopics,
  uniqueLanguages,
  className,
  hasActiveSidebarFilters,
  onClearAllFilters,
  onTopicSelect,
  onLanguageSelect,
  selectedTopics,
  selectedLanguages,
}: OssProjectsSidebarProps) {
  // 🔹 REMOVED: All the complex state and effect hooks.

  // 🔹 KEPT & SIMPLIFIED: Only the local state for the filter search inputs remains.
  const [isTopicQueryLoading, startTopicQueryTransition] = useTransition();
  const [isLanguageQueryLoading, startLanguageQueryTransition] =
    useTransition();

  // This hook now uses `nuqs`'s `useQueryState` for individual control,
  // which is simpler than managing the whole object.
  const [topicQuery, setTopicQuery] = useQueryState("topic-query", {
    ...searchParams["topic-query"],
    startTransition: startTopicQueryTransition,
    shallow: false,
    history: "push",
    limitUrlUpdates: debounce(300),
  });

  const [languageQuery, setLanguageQuery] = useQueryState("language-query", {
    ...searchParams["language-query"],
    startTransition: startLanguageQueryTransition,
    shallow: false,
    history: "push",
    limitUrlUpdates: debounce(300),
  });

  return (
    <search>
      <aside className={cn(className, "divide-y-1 divide-input divide-solid")}>
        <div className="flex h-10 items-start justify-between">
          <h4>Filter OSS Projects</h4>
          {/* 🔹 This button now uses the props passed down from the parent */}
          {hasActiveSidebarFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAllFilters}
              className="text-muted-foreground text-sm"
            >
              <Icons.circleX className="size-4" />
              Clear
            </Button>
          )}
        </div>

        <FilterSection
          title="Topics"
          items={uniqueTopics}
          searchTerm={topicQuery}
          onSearchChange={(value) => setTopicQuery(value || null)}
          selectedItems={selectedTopics}
          onItemSelectChange={onTopicSelect}
          isLoading={isTopicQueryLoading}
          defaultOpen={true}
        />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          searchTerm={languageQuery}
          onSearchChange={(value) => setLanguageQuery(value || null)}
          selectedItems={selectedLanguages}
          onItemSelectChange={onLanguageSelect}
          isLoading={isLanguageQueryLoading}
        />
      </aside>
    </search>
  );
}

// ... The FilterSection and FilterItem components below need no changes.
// I am including them here so you can replace the whole file.

// ======================================================================
// FilterSection Component (No changes needed)
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
              <Icons.search className="text-muted-foreground size-4" />
            </div>
            {searchTerm && (
              <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
                <button
                  onClick={clearSearch}
                  className="bg-background text-muted-foreground pointer-events-auto cursor-pointer rounded border px-1.5 py-0.5 text-xs transition-colors"
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
                className="absolute left-1/2 top-[10px] z-10 -translate-x-1/2"
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
                  <p className="text-muted-foreground mt-[10px] text-center text-sm">
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
// FilterItem Component (No changes needed)
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
    <label className="hover:bg-accent flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5 transition-colors">
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="data-[state=checked]:border-sky-700 data-[state=checked]:bg-sky-700 data-[state=checked]:text-white"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
