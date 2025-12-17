import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration panel for managing the website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout(props: LayoutProps<"/admin">) {
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
