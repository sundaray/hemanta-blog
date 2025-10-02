import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const ossProjects = pgTable("oss_projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  url: text("url").notNull().unique(),
  description: text("description"),
  stars: integer("stargazers_count").notNull(),
  forks: integer("forks_count").notNull(),
  openIssues: integer("open_issues_count").notNull(),
  subscribers: integer("subscribers_count").notNull(),
  language: text("language"),
  topics: text("topics").array(),
  homepage: text("homepage"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type InsertOssProject = typeof ossProjects.$inferInsert;
export type SelectOssProject = typeof ossProjects.$inferSelect;
