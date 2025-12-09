"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export function HireMeButton() {
  return (
    <Link
      href="/hire-me"
      className={cn(
        buttonVariants({ variant: "default", size: "sm" }),
        "rounded-full px-6 font-bold",
      )}
    >
      Hire Me
    </Link>
  );
}
