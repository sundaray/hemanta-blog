import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { AdminSidebar } from "@/components/admin-sidebar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration panel for managing the website.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <>
      <header>
        <MainNavWrapper>
          <MainNav links={navbarLinks.main} />
        </MainNavWrapper>
      </header>
      <div className="py-(--main-content-padding) container mx-auto max-w-6xl px-4">
        <SidebarProvider>
          <aside className="top-(--main-nav-height) sticky self-start">
            <AdminSidebar />
          </aside>
          <main className="relative flex-1">
            <SidebarTrigger className="absolute left-2 top-2" />
            <div className="mx-auto w-full max-w-xl">{props.children}</div>
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}
