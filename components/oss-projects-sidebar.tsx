"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { SelectOssProject } from "@/db/schema";

type OssProjectsSidebarProps = {
  projects: SelectOssProject[];
  className?: string;
};

// 🔹 Main sidebar component
export function OssProjectsSidebar({
  projects,
  className,
}: OssProjectsSidebarProps) {
  // 🔹 useMemo ensures we only compute these lists once
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
    <aside className={cn("divide-y divide-input", className)}>
      <h3 className="pb-4">Filter OSS Projects</h3>
      <FilterSection title="Topics" items={uniqueTopics} />
      <FilterSection title="Languages" items={uniqueLanguages} />
    </aside>
  );
}

function FilterSection({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

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
          <ScrollArea className="h-60">
            <div className="flex flex-col">
              {items.map((item) => (
                <FilterItem key={item} label={item} />
              ))}
            </div>
          </ScrollArea>
        )}
      </>
    </div>
  );
}

// 🔹 A single filter item with a checkbox
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
