import { Frontmatter } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export function getBlogPostsSlugs() {
  const slugs = fs.readdirSync(postsDirectory);
  const publishedSlugs = slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, slug, "content.mdx");
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
