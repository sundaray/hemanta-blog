"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { SelectOssProject } from "@/db/schema";

type OssProjectsSidebarProps = {
  projects: SelectOssProject[];
  className?: string;
};

export function OssProjectsSidebar({
  projects,
  className,
}: OssProjectsSidebarProps) {
  const uniqueTopics = useMemo(() => {
    const allTopics = projects.flatMap((p) => p.topics ?? []);
    return Array.from(new Set(allTopics)).sort();
  }, [projects]);

  const uniqueLanguages = useMemo(() => {
    const allLanguages = projects
      .map((p) => p.language)
      .filter((l): l is string => l != null && l !== "");

    return Array.from(new Set(allLanguages)).sort();
  }, [projects]);

  return (
    <search>
      <aside className={cn("divide-y divide-input", className)}>
        <h3 className="pb-4">Filter OSS Projects</h3>
        <FilterSection title="Topics" items={uniqueTopics} />
        <FilterSection title="Languages" items={uniqueLanguages} />
      </aside>
    </search>
  );
}

function FilterSection({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [items, searchTerm]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSearchTerm("");
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
                className={cn("col-start-1 row-start-1 pl-9")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {searchTerm && (
                <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
                  <button
                    onClick={() => setSearchTerm("")}
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
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <FilterItem key={item} label={item} />
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

function FilterItem({ label }: { label: string }) {
  const onCheckedChange = (isChecked: boolean) => {
    console.log(`Filter changed: ${label}, isChecked: ${isChecked}`);
  };

  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5",
        "transition-colors hover:bg-accent",
      )}
    >
      <Checkbox
        onCheckedChange={onCheckedChange}
        className={cn(
          "data-[state=checked]:border-sky-700 data-[state=checked]:bg-sky-700 data-[state=checked]:text-white",
        )}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
