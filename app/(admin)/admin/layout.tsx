import type { Metadata } from "next";

import { navbarLinks } from "@/config/navbar";

import { AdminSidebar } from "@/components/admin-sidebar";
import { MainNav } from "@/components/navigation/main-nav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Admin",
  description: "",
};

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <>
      <header>
        <MainNav links={navbarLinks.main} />
      </header>
      <div>
        <SidebarProvider>
          <aside className="sticky top-[var(--main-nav-height)] self-start">
            <AdminSidebar />
          </aside>
          <main className="relative flex-1 px-4 py-32 md:px-8">
            <SidebarTrigger className="top-18 absolute left-2" />
            <div className="mx-auto w-full max-w-xl">{props.children}</div>
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}
