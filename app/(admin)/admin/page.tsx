import { AdminTabs } from "@/app/(admin)/admin/admin-tabs";

import { adminSearchParamsCache } from "@/lib/admin-search-params";
import { getAdminPosts } from "@/lib/get-admin-posts";

import { AdminPostsContent } from "@/components/admin/admin-posts-content";
import { AdminPostsSearch } from "@/components/admin/admin-posts-search";
import { AddOssProjectForm } from "@/components/forms/add-oss-project-form";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@/components/ui/tabs";

export default async function AdminPage(props: PageProps<"/admin">) {
  // 1. Fetch Data
  const allPosts = getAdminPosts();

  // 2. Parse Search Params
  const resolvedSearchParams = await props.searchParams;
  const { query, tab } =
    await adminSearchParamsCache.parse(resolvedSearchParams);

  // 3. Filter Posts
  const filteredPosts = allPosts.filter((post) => {
    if (!query) return true;
    const searchContent = `${post.title} ${post.description}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  return (
    <div className="space-y-12">
      <h1 className="text-center">Admin</h1>
      <AdminTabs selectedTab={tab}>
        <TabList aria-label="Admin Sections">
          <Tab id="add-oss">Add OSS Project</Tab>
          <Tab id="posts">Posts</Tab>
        </TabList>

        <TabPanels>
          <TabPanel id="add-oss">
            <div className="mt-8 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Add New Project
              </h2>
              <p className="mb-8 mt-2 text-neutral-600">
                Enter a GitHub repository URL to add it to your list.
              </p>
              <AddOssProjectForm />
            </div>
          </TabPanel>

          <TabPanel id="posts">
            <div className="mt-8">
              <AdminPostsSearch className="mb-8" />
              <AdminPostsContent posts={filteredPosts} />
            </div>
          </TabPanel>
        </TabPanels>
      </AdminTabs>
    </div>
  );
}
