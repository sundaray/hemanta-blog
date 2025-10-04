"use client";

import * as React from "react";

import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList as AriaTagList,
  type TagGroupProps as AriaTagGroupProps,
  type TagListProps as AriaTagListProps,
  type TagProps as AriaTagProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

type CustomTagGroupProps = React.HTMLAttributes<HTMLDivElement> &
  AriaTagGroupProps & {
    ref?: React.Ref<HTMLDivElement>;
  };

function TagGroup({ className, ref, ...props }: CustomTagGroupProps) {
  return <AriaTagGroup ref={ref} className={cn(className)} {...props} />;
}

type CustomTagListProps = React.HTMLAttributes<HTMLDivElement> &
  AriaTagListProps<object> & {
    ref?: React.Ref<HTMLDivElement>;
  };

function TagList({ className, ref, ...props }: CustomTagListProps) {
  return (
    <AriaTagList
      ref={ref}
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

type CustomTagProps = AriaTagProps & {
  ref?: React.Ref<HTMLAnchorElement | HTMLDivElement>;
};

function Tag({ className, ref, ...props }: CustomTagProps) {
  return (
    <AriaTag
      ref={ref}
      className={cn(
        "focus-ring",
        "cursor-pointer rounded-md bg-neutral-200 px-2 py-1 text-sm font-semibold text-neutral-700 transition-colors",
        "data-[selected]:bg-sky-200 data-[selected]:text-neutral-700",
        "transition-transform",
        "data-[pressed]:scale-95",
        className,
      )}
      {...props}
    />
  );
}

export { TagGroup, TagList, Tag };
