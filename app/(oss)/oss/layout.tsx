import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Open Source Software",
  description:
    "A personal collection of interesting or potentially useful open-source projects.",
  openGraph: {
    title: "Open Source Software | Hemanta Sundaray",
    description:
      "A personal collection of interesting or potentially useful open-source projects.",
  },
};

export default function OssPageLayout(props: LayoutProps<"/oss">) {
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
