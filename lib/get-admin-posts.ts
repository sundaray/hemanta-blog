import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export function getAdminPosts() {
  const slugs = fs.readdirSync(adminPostsDirectory);

  const allPosts = slugs.map((slug) => {
    const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");

    // Strictly check if content.mdx exists.
    // If it doesn't (like in the case of the '[slug]' folder), we return null immediately.
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Frontmatter),
    };
  });

  // Filter out the folders that didn't have content.mdx
  return allPosts
    .filter((post): post is { slug: string } & Frontmatter => post !== null)
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    );
}
