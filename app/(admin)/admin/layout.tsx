import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "Admin",
  description: "",
};

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <main className="mx-auto max-w-7xl flex-1 px-4 py-32">
        {props.children}
      </main>
    </>
  );
}
