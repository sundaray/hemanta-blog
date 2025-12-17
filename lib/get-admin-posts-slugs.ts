import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin-posts)");

export function getAdminPostsSlugs() {
  const slugs = fs.readdirSync(adminPostsDirectory);
  const publishedSlugs = slugs
    .map((slug) => {
      const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        isPublished: (data as Frontmatter).isPublished,
      };
    })
    .filter((post) => post.isPublished)
    .map((post) => ({ slug: post.slug }));

  return publishedSlugs;
}
