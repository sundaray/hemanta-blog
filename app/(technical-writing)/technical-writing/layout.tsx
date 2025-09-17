import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "Technical Writing",
  description: "",
};

export default function TechnicalWritingLayout(
  props: LayoutProps<"/technical-writing">,
) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <main className="flex-1 py-36">{props.children}</main>
    </>
  );
}
