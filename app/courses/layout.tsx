import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Courses | hemantasundaray.com",
  description: "Courses by Hemanta Sundaray.",
};

export default function CoursesPageLayout(props: LayoutProps<"/courses">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
        <BreadcrumbBar />
      </header>
      <main className="flex-1 py-40">{props.children}</main>
    </>
  );
}
