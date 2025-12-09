import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Upcoming courses on full-stack web development by Hemanta Sundaray. ",
  openGraph: {
    title: "Courses | Hemanta Sundaray",
    description: "Upcoming courses on full-stack web development.",
  },
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
      <main className="flex-1 py-[var(--main-content-padding)]">
        {props.children}
      </main>
    </>
  );
}
