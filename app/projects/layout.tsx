import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Projects",
  description: "Side projects by Hemanta Sundaray.",
  openGraph: {
    title: "Projects | Hemanta Sundaray",
    description: "Side projects by Hemanta Sundaray.",
  },
};
export default function ProjectsPageLayout(props: LayoutProps<"/projects">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <main className="py-(--main-content-padding) flex-1">
        {props.children}
      </main>
    </>
  );
}
