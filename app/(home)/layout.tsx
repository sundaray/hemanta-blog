import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Hemanta Sundaray's portfolio. Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  openGraph: {
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Welcome to Hemanta Sundaray's portfolio. Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
};

export default function HomeLayout(props: LayoutProps<"/">) {
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
