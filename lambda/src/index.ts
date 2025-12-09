import type { Handler } from "aws-lambda";
import postgres from "postgres";

type OssProject = {
  id: string;
  name: string;
  url: string;
};

type GitHubRepoResponse = {
  stargazers_count: number;
  forks_count: number;
  subscribers_count: number;
  open_issues_count: number;
};

function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchGitHubStats(
  owner: string,
  repo: string,
): Promise<GitHubRepoResponse | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "oss-stats-updater",
        },
      },
    );

    if (!response.ok) {
      console.error(
        `GitHub API Error ${owner}/${repo}: ${response.statusText}`,
      );
      return null;
    }

    return (await response.json()) as GitHubRepoResponse;
  } catch (error) {
    console.error(`Network error fetching ${owner}/${repo}`, error);
    return null;
  }
}

export const handler: Handler = async () => {
  // 🔹 1. Connect to Supabase
  const sql = postgres(process.env.DATABASE_URL!, {
    ssl: "require",
    max: 1, // Limit connections since Lambda scales horizontally
  });

  try {
    // 🔹 2. Fetch Projects
    const projects = await sql<OssProject[]>`
      SELECT id, name, url FROM oss_projects
    `;
    console.log(`🚀 Found ${projects.length} projects to update.`);

    // 🔹 3. Process in Batches (Concurrency Control)
    // Processing 5 at a time prevents overwhelming GitHub or the DB
    const BATCH_SIZE = 5;
    const results = { success: 0, failed: 0 };

    for (let i = 0; i < projects.length; i += BATCH_SIZE) {
      const batch = projects.slice(i, i + BATCH_SIZE);

      // Promise.allSettled ensures one failure doesn't stop the batch
      const batchResults = await Promise.allSettled(
        batch.map(async (project) => {
          // A. Parse URL
          const parsed = parseGitHubUrl(project.url);
          if (!parsed) throw new Error(`Invalid URL: ${project.url}`);

          // B. Fetch Stats
          const stats = await fetchGitHubStats(parsed.owner, parsed.repo);
          if (!stats)
            throw new Error(`Failed to fetch stats for ${project.name}`);

          // C. Update DB
          await sql`
            UPDATE oss_projects
            SET 
              stargazers_count = ${stats.stargazers_count},
              forks_count = ${stats.forks_count},
              subscribers_count = ${stats.subscribers_count},
              open_issues_count = ${stats.open_issues_count}
            WHERE id = ${project.id}
          `;

          return project.name;
        }),
      );

      // D. Tally Results for this batch
      batchResults.forEach((result) => {
        if (result.status === "fulfilled") {
          console.log(`✅ Updated: ${result.value}`);
          results.success++;
        } else {
          console.error(`❌ Failed: ${result.reason}`);
          results.failed++;
        }
      });

      // Small cooldown between batches
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log(
      `🏁 Summary: ${results.success} updated, ${results.failed} failed.`,
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Update complete", ...results }),
    };
  } catch (error) {
    console.error("🔥 Fatal Error:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  } finally {
    // 🔹 4. Always close the connection
    await sql.end();
  }
};
