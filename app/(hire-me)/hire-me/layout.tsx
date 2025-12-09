import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Hire Me | Hemanta Sundaray",
  description: "Hire Hemanta Sundaray - Full Stack Web Developer",
};

export default function HireMeLayout(props: LayoutProps<"/hire-me">) {
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
