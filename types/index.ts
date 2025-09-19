import type { Route } from "next";
import type { LucideIcon } from "lucide-react";

export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  author: string;
  isPublished: boolean;
}

export type NavItem = {
  title: string;
  href: Route;
};

export type AdminNavItem = NavItem & {
  icon: LucideIcon;
};
