import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
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
        <MainNav links={navbarLinks.main} />
      </header>
      <main className="flex-1 py-32">{props.children}</main>
    </>
  );
}
