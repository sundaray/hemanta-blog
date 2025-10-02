import type { LucideIcon } from "lucide-react";
import type { Route } from "next";
import { z } from "zod";

import { AddOssProjectFormSchema } from "@/lib/schema";

export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  author: string;
  isPublished: boolean;
}

export type BlogPost = Frontmatter & {
  slug: string;
};

export type NavItem = {
  title: string;
  href: Route;
};

export type AdminNavItem = NavItem & {
  icon: LucideIcon;
};

export type GitHubRepoData = {
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  subscribers_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  homepage: string | null;
};

type FormErrors<T extends z.ZodTypeAny> = Partial<
  Record<keyof z.infer<T>, string[]>
>;

export type AddOssProjectState = {
  ok: boolean;
  errors?: FormErrors<typeof AddOssProjectFormSchema>;
  formError?: string;
  formSuccess?: string;
};
