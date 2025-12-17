"use client";

import * as React from "react";

import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const Tabs = RACTabs;

const TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <RACTabList
      {...props}
      className={cn("group flex w-full border-b border-neutral-200", className)}
    />
  );
};

const Tab = ({ className, children, ...props }: TabProps) => {
  return (
    <RACTab
      {...props}
      className={({ isSelected, isFocusVisible }) =>
        cn(
          "relative cursor-pointer px-4 py-3 text-sm font-medium text-neutral-500 outline-none transition-colors hover:text-neutral-700",
          isSelected && "text-sky-700",
          isFocusVisible && "ring-2 ring-sky-700 ring-offset-2",
          className,
        )
      }
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && (
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-sky-700" />
          )}
        </>
      )}
    </RACTab>
  );
};

const TabPanels = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("mt-6", className)} />;
};

const TabPanel = ({ className, ...props }: TabPanelProps) => {
  return (
    <RACTabPanel
      {...props}
      className={cn(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
    />
  );
};

export { Tabs, TabList, Tab, TabPanels, TabPanel };
