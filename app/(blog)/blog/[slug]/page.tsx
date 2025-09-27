import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { getBlogPostBySlug } from "@/lib/get-blog-post-by-slug";
import { getBlogPostsSlugs } from "@/lib/get-blog-posts-slugs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  try {
    const { slug } = await props.params;
    const { frontmatter } = await getBlogPostBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch (error) {
    console.error("Failed to render blog post:", error);
    return {
      title: "Post Not Found",
    };
  }
}

export async function generateStaticParams() {
  return getBlogPostsSlugs();
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const { frontmatter, toc, ContentComponent } = await getBlogPostBySlug(slug);

  return (
    <BlogPostLayout frontmatter={frontmatter} toc={toc}>
      <ContentComponent />
    </BlogPostLayout>
  );
}
