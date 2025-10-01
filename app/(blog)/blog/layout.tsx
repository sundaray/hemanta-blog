import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { navbarLinks } from "@/config/navbar";
import "@/app/styles/blog-post.css";

export const metadata: Metadata = {
  title: "Blog | hemantasundaray.com",
  description: "",
};

export default function BlogPageLayout(props: LayoutProps<"/blog">) {
  return (
    <>
      <header>
        <MainNav links={navbarLinks.main} />
      </header>
      <main className="flex-1 py-40">{props.children}</main>
    </>
  );
}
