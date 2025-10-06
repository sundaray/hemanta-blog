import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { AdminSidebar } from "@/components/admin-sidebar";
import { MainNav } from "@/components/navigation/main-nav";
import { MainNavWrapper } from "@/components/navigation/main-nav-wrapper";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
      <div className="container mx-auto max-w-6xl px-4 py-32 sm:px-6">
        <SidebarProvider>
          <aside className="sticky top-[var(--main-nav-height)] self-start">
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
