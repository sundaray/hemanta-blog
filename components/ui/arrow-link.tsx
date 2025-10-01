"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

type ArrowLinkProps = {
  href: Route;
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
};

export function ArrowLink({
  children,
  className,
  href,
  direction = "right",
  ...props
}: ArrowLinkProps) {
  const classes = cn(
    "group relative inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-sky-700 dark:text-sky-400",
    "outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
    className,
  );

  const Arrow = () => {
    const Icon = direction === "left" ? BiSolidLeftArrow : BiSolidRightArrow;
    return (
      <div className="relative grid size-2.5">
        <Icon
          className={cn(
            "duration-400 absolute left-0 top-0 size-2.5 scale-100 transition-all ease-out",
            "text-sky-700/50 dark:text-sky-400",
            direction === "right"
              ? "group-hover:translate-x-2 group-hover:scale-95 group-hover:opacity-0"
              : "group-hover:-translate-x-2 group-hover:scale-95 group-hover:opacity-0",
          )}
        />
        <Icon
          className={cn(
            "duration-400 absolute left-0 top-0 size-2.5 scale-95 opacity-0 transition-all ease-out",
            "text-sky-700 dark:text-sky-400",
            direction === "right"
              ? "-translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              : "translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
          )}
        />
      </div>
    );
  };

  return (
    <Link className={classes} {...props} href={href}>
      {/* 🔹 Conditionally render the arrow before the text */}
      {direction === "left" && <Arrow />}
      <span>{children}</span>
      {/* 🔹 Or after the text (default) */}
      {direction === "right" && <Arrow />}
    </Link>
  );
}
