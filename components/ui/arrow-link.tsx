"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import type { Route } from "next";

type ArrowLinkProps = {
  href: Route;
  children: React.ReactNode;
  className?: string;
};

export function ArrowLink({
  children,
  className,
  href,
  ...props
}: ArrowLinkProps) {
  const classes = cn(
    "group relative inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-sky-700 dark:text-sky-400",
    "outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
    className,
  );

  return (
    <Link className={classes} {...props} href={href}>
      <span>{children}</span>

      <div className="relative size-5">
        <Icons.chevronRight
          className={cn(
            "absolute top-0 left-0 size-5 scale-100 transition-all duration-400 ease-out group-hover:translate-x-2 group-hover:scale-95 group-hover:opacity-0",
            "text-sky-700 dark:text-sky-400",
          )}
        />
        <Icons.chevronRight
          className={cn(
            "absolute top-0 left-0 size-5 -translate-x-2 scale-95 opacity-0 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
            "text-sky-700 dark:text-sky-400",
          )}
        />
      </div>
    </Link>
  );
}
