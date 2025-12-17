import { adminSearchParamsCache } from "@/lib/admin-search-params";
import { getAdminPosts } from "@/lib/get-admin-posts";
import { getAdminPostsTags } from "@/lib/get-admin-posts-tags";

import { AdminPostsContent } from "@/components/admin/admin-posts-content";
import { AdminPostsSearch } from "@/components/admin/admin-posts-search";

export default async function AdminPostsPage(props: PageProps<"/admin/posts">) {
  // 1. Fetch Data
  const allPosts = getAdminPosts();
  const allTagsWithCounts = getAdminPostsTags();
  const uniqueTags = allTagsWithCounts.map((tag) => tag.name);

  // 2. Parse Search Params
  const resolvedSearchParams = await props.searchParams;
  const { query, tag: selectedTags } =
    await adminSearchParamsCache.parse(resolvedSearchParams);

  // 3. Filter Posts
  const filteredPosts = allPosts.filter((post) => {
    const queryMatch =
      !query ||
      `${post.title.toLowerCase()} ${post.description.toLowerCase()}`.includes(
        query.toLowerCase(),
      );

    const tagMatch =
      selectedTags.length === 0 ||
      post.tags?.some((postTag) => selectedTags.includes(postTag));

    return queryMatch && tagMatch;
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <div className="text-center">
        <h1>Admin Posts</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Manage your admin posts.
        </p>
      </div>
      <AdminPostsSearch className="mb-8 mt-12" />
      <AdminPostsContent posts={filteredPosts} uniqueTags={uniqueTags} />
    </div>
  );
}
