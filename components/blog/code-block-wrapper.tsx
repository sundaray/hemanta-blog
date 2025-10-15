"use client";

import React, { useRef, type ReactNode } from "react";

import { filenameIconMap } from "@/lib/icon-map";

import { CopyButton } from "@/components/blog/copy-button";

const ICON_ONLY_TITLES = ["Terminal", "Shell", "Bash"];

export function CodeBlockWrapper({ children }: { children: React.ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null);
  const childrenArray = React.Children.toArray(children);
  type ElementWithChildren = React.ReactElement<{ children: ReactNode }>;

  const hasTitle = childrenArray.length > 1;
  const titleElement = hasTitle
    ? (childrenArray[0] as ElementWithChildren)
    : null;

  const preElement = (
    hasTitle ? childrenArray[1] : childrenArray[0]
  ) as ElementWithChildren;

  if (!preElement) {
    return null;
  }

  const filename =
    titleElement?.props.children &&
    typeof titleElement.props.children === "string"
      ? titleElement.props.children
      : null;

  const IconComponent =
    filename &&
    Object.entries(filenameIconMap).find(([pattern]) =>
      new RegExp(
        `^${pattern.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`,
      ).test(filename),
    )?.[1];

  return (
    <figure data-rehype-pretty-code-figure="">
      <div className="border-input flex items-center justify-between rounded-t-lg border-b bg-transparent py-2 text-sm">
        <span className="flex flex-1 items-center gap-2 pl-5 text-neutral-700">
          {IconComponent && <IconComponent className="size-4 shrink-0" />}
          {!ICON_ONLY_TITLES.includes(filename ?? "") && filename}
        </span>

        <div className="px-2">
          <CopyButton preRef={preRef} />
        </div>
      </div>
      <pre {...preElement.props} ref={preRef} />
    </figure>
  );
}
