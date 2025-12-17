import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

// 🔹 Pointing to the admin posts directory
const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export function getAdminPostsSlugs() {
  // Safety check: Return empty if directory doesn't exist yet
  if (!fs.existsSync(adminPostsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(adminPostsDirectory);
  const publishedSlugs = slugs
    .map((slug) => {
      const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

      // 🎯 THE FIX: Skip folders that don't have a content.mdx file (like "[slug]")
      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        isPublished: (data as Frontmatter).isPublished,
      };
    })
    // Filter out nulls and ensure isPublished is true
    .filter(
      (post): post is { slug: string; isPublished: boolean } =>
        post !== null && post.isPublished,
    )
    .map((post) => ({ slug: post.slug }));

  return publishedSlugs;
}
