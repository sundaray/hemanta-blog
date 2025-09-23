import "server-only";
import { db } from "@/db";
import { ossProjects } from "@/db/schema";

export async function getOssProjectFilterOptions(filters: {
  topicQuery: string;
  languageQuery: string;
}) {
  const allProjects = await db
    .select({
      topics: ossProjects.topics,
      language: ossProjects.language,
    })
    .from(ossProjects);

  const allTopics = allProjects.flatMap((p) => p.topics ?? []);
  let uniqueTopics = Array.from(new Set(allTopics)).sort();

  const allLanguages = allProjects
    .map((p) => p.language)
    .filter((l): l is string => l != null && l !== "");
  let uniqueLanguages = Array.from(new Set(allLanguages)).sort();

  if (filters.topicQuery) {
    uniqueTopics = uniqueTopics.filter((topic) =>
      topic.toLowerCase().includes(filters.topicQuery.toLowerCase()),
    );
  }

  if (filters.languageQuery) {
    uniqueLanguages = uniqueLanguages.filter((lang) =>
      lang.toLowerCase().includes(filters.languageQuery.toLowerCase()),
    );
  }

  return { uniqueTopics, uniqueLanguages };
}
