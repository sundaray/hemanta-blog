import { getBlogPosts } from "@/lib/get-blog-posts";

export function getBlogPostsTags() {
  const blogPosts = getBlogPosts();

  const tagCounts: Record<string, number> = {};

  blogPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const blogPostTags = Object.keys(tagCounts)
    .map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return blogPostTags;
}
