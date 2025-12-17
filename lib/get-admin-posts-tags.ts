import { getAdminPosts } from "@/lib/get-admin-posts";

export function getAdminPostsTags() {
  const adminPosts = getAdminPosts();

  const tagCounts: Record<string, number> = {};

  adminPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const adminPostTags = Object.keys(tagCounts)
    .map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return adminPostTags;
}
