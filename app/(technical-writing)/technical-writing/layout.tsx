import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { BreadcrumbBar } from "@/components/breadcrumb-bar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Technical Writing",
  description:
    "Technical articles written for KodeKloud covering DevOps and Cloud Native technologies.",
  openGraph: {
    title: "Technical Writing | Hemanta Sundaray",
    description:
      "Technical articles covering DevOps and Cloud Native technologies.",
  },
};
export default function OssPageLayout(
  props: LayoutProps<"/technical-writing">,
) {
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
