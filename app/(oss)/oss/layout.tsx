import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "OSS",
  description: "",
};

export default function OssLayout(props: LayoutProps<"/oss">) {
  return (
    <>
      <header>
        <MainNav links={navbarLinks.main} />
      </header>
      <main className="flex-1 py-40">{props.children}</main>
    </>
  );
}
