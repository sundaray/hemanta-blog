import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "Hemanta Sundaray",
  description: "",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.home} />
        </MainNavWrapper>
      </header>
      <main className="flex-1 py-36">{props.children}</main>
    </>
  );
}
