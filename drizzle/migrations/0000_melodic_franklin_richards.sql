CREATE TABLE "oss_projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"description" text,
	"stargazers_count" integer NOT NULL,
	"forks_count" integer NOT NULL,
	"watchers_count" integer NOT NULL,
	"open_issues_count" integer NOT NULL,
	"language" text,
	"topics" text[],
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "oss_projects_url_unique" UNIQUE("url")
);
