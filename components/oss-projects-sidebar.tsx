"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useDebouncedCallback } from "use-debounce";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useOssProjectsSidebarFilter } from "@/hooks/use-oss-projects-sidebar-filter";

type OssProjectsSidebarProps = {
  uniqueTopics: string[];
  uniqueLanguages: string[];
  className?: string;
};

export function OssProjectsSidebar({
  uniqueTopics,
  uniqueLanguages,
  className,
}: OssProjectsSidebarProps) {
  return (
    <search>
      <aside className={cn(className, "divide-y-1 divide-solid divide-input")}>
        <h3 className="pb-4">Filter OSS Projects</h3>
        <FilterSection title="Topics" items={uniqueTopics} filterKey="topic" />
        <FilterSection
          title="Languages"
          items={uniqueLanguages}
          filterKey="language"
        />
      </aside>
    </search>
  );
}

function FilterSection({
  title,
  items,
  filterKey,
}: {
  title: string;
  items: string[];
  filterKey: "topic" | "language";
}) {
  const { sidebarFilters, setSidebarFilters, isSidebarPending } =
    useOssProjectsSidebarFilter();
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Define the query key for this section's search input
  const queryKey = `query-${filterKey}` as "query-topic" | "query-language";

  // 🔹 Get the current search term directly from the URL state
  const searchTerm = sidebarFilters[queryKey];

  // 🔹 Debounced function to update the URL search param
  const handleSearch = useDebouncedCallback((term: string) => {
    setSidebarFilters({ [queryKey]: term });
  }, 250);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      handleSearch("");
    }
  };

  const onCheckedChange = (isChecked: boolean, item: string) => {
    const selectedItems = sidebarFilters[filterKey];
    const newSelection = isChecked
      ? [...selectedItems, item]
      : selectedItems.filter((i) => i !== item);
    setSidebarFilters({
      [filterKey]: newSelection.length > 0 ? newSelection : null,
    });
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
          <div className="space-y-2 py-4">
            <div className="grid grid-cols-1 items-center">
              <div className="pointer-events-none col-start-1 row-start-1 w-fit pl-3">
                {isSidebarPending ? (
                  <Icons.spinner className="size-4 animate-spin text-muted-foreground" />
                ) : (
                  <Icons.search className="size-4 text-muted-foreground" />
                )}
              </div>
              <Input
                type="search"
                placeholder={`Search ${title.toLowerCase()}…`}
                defaultValue={sidebarFilters[queryKey]}
                className={cn("col-start-1 row-start-1 pl-9")}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {searchTerm && (
                <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
                  <button
                    onClick={() => handleSearch("")}
                    className="pointer-events-auto cursor-pointer rounded border bg-background px-1.5 py-0.5 text-xs text-muted-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    esc
                  </button>
                </div>
              )}
            </div>
            <ScrollArea className="h-60">
              <div className="flex flex-col">
                {items.length > 0 ? (
                  items.map((item) => (
                    <FilterItem
                      key={item}
                      label={item}
                      isChecked={sidebarFilters[filterKey].includes(item)}
                      onCheckedChange={(isChecked: boolean) =>
                        onCheckedChange(isChecked, item)
                      }
                    />
                  ))
                ) : (
                  <p className="p-4 text-center text-sm text-muted-foreground">
                    No {title.toLowerCase()} found.
                  </p>
                )}
              </div>
            </ScrollArea>
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
