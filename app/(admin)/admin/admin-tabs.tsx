"use client";

import { useQueryState } from "nuqs";

import { adminSearchParams } from "@/lib/admin-search-params";

import { Tabs } from "@/components/ui/tabs";

export function AdminTabs({
  children,
  // We can treat this as an initial value if needed,
  // but nuqs will hydrate from URL automatically.
  selectedTab: _initialTab,
}: {
  children: React.ReactNode;
  selectedTab: string;
}) {
  // 1. Get the current tab value directly from the URL
  const [tab, setTab] = useQueryState("tab", adminSearchParams.tab);

  return (
    <Tabs
      // 2. Use the hook's value ('tab') instead of the prop
      // If 'tab' is null (first load), fallback to 'add-oss' (defined in your search params config)
      selectedKey={tab || "add-oss"}
      onSelectionChange={(key) => setTab(key as string)}
    >
      {children}
    </Tabs>
  );
}
