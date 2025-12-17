import fs from "fs";
import path from "path";

import { Frontmatter } from "@/types";
import matter from "gray-matter";

import { getTableOfContents } from "@/lib/toc";

const adminPostsDirectory = path.join(process.cwd(), "app/(admin)/admin/posts");

export async function getAdminPostBySlug(slug: string) {
  const fullPath = path.join(adminPostsDirectory, slug, "content.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const toc = await getTableOfContents(content);

  const { default: ContentComponent } = await import(
    `@/app/(admin)/admin/posts/${slug}/content.mdx`
  );

  return {
    frontmatter: data as Frontmatter,
    toc,
    ContentComponent,
    rawContent: fileContents,
  };
}
