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
        "bg-taupe-100 text-taupe-700 hover:bg-taupe-200 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold transition-colors",
        "data-selected:bg-taupe-700 data-selected:text-white",
        "data-selected:hover:bg-taupe-700",
        "transition-transform",
        "data-pressed:bg-taupe-700",
        className,
      )}
      {...props}
    />
  );
}

export { TagGroup, TagList, Tag };
