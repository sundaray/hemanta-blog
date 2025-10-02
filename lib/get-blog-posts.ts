import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export function getBlogPosts() {
  const slugs = fs.readdirSync(postsDirectory);

  const allPosts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, slug, "content.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      ...(data as Frontmatter),
    };
  });

  return allPosts
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
    )
    .filter((post) => post.isPublished);
}
