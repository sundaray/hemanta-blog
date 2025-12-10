import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack web development covering TypeScript, React, Node.js, PostgreSQL, and modern web technologies.",
  openGraph: {
    title: "Blog | Hemanta Sundaray",
    description:
      "Articles on full-stack web development covering TypeScript, React, Node.js, PostgreSQL, and modern web technologies.",
  },
};

export default function BlogPageLayout(props: LayoutProps<"/blog">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
