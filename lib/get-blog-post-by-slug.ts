import { Frontmatter } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getTableOfContents } from "@/lib/toc";

const postsDirectory = path.join(process.cwd(), "app/(posts)");

export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug, "content.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const toc = await getTableOfContents(content);

  const { default: ContentComponent } = await import(
    `@/app/(posts)/${slug}/content.mdx`
  );

  return {
    frontmatter: data as Frontmatter,
    toc,
    ContentComponent,
  };
}
