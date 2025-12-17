import type { Metadata } from "next";

import { getAdminPostBySlug } from "@/lib/get-admin-post-by-slug";
import { getAdminPostsSlugs } from "@/lib/get-admin-posts-slugs";

import { AdminPostLayout } from "@/components/admin/admin-post-layout";

export async function generateMetadata(
  props: PageProps<"/admin/posts/[slug]">,
): Promise<Metadata> {
  try {
    const { slug } = await props.params;
    const { frontmatter } = await getAdminPostBySlug(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: frontmatter.author }],
      keywords: frontmatter.tags,
      // 🔒 Security: Ensure admin posts are never indexed
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.publishedAt,
        modifiedTime: frontmatter.updatedAt,
        authors: [frontmatter.author],
        tags: frontmatter.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata for admin post:", error);
    return {
      title: "Post Not Found",
      description: "The requested admin post could not be found.",
    };
  }
}

export async function generateStaticParams() {
  return getAdminPostsSlugs();
}

export default async function AdminPostPage(
  props: PageProps<"/admin/posts/[slug]">,
) {
  const { slug } = await props.params;
  const { frontmatter, toc, ContentComponent, rawContent } =
    await getAdminPostBySlug(slug);

  return (
    <AdminPostLayout
      frontmatter={frontmatter}
      toc={toc}
      rawContent={rawContent}
    >
      <ContentComponent />
    </AdminPostLayout>
  );
}
