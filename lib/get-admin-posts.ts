import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin-posts)");

export function getAdminPosts() {
  const slugs = fs.readdirSync(adminPostsDirectory);

  const allPosts = slugs.map((slug) => {
    const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Frontmatter),
    };
  });

  // Filter out the folders that didn't have content.mdx
  return allPosts
    .filter((post) => post.isPublished)
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    );
}
