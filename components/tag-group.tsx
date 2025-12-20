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
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(
        "focus-ring",
        "cursor-pointer rounded-full bg-neutral-200/40 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-200",
        "data-selected:bg-neutral-200 data-selected:text-neutral-700",
        "data-selected:hover:bg-neutral-200",
        "transition-transform",
        "data-pressed:scale-95",
        className,
      )}
      {...props}
    />
  );
}

export { TagGroup, TagList, Tag };
