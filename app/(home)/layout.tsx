import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "Hemanta Sundaray",
  description: "",
};

export default function HomeLayout(props: LayoutProps<"/">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <main className="flex-1 py-32">{props.children}</main>
    </>
  );
}
