import type { Metadata } from "next";
import { MainNav } from "@/components/navigation/main-nav";
import { AdminSidebar } from "@/components/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { navbarLinks } from "@/config/navbar";

export const metadata: Metadata = {
  title: "Admin",
  description: "",
};

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <SidebarProvider>
      <header>
        <MainNav links={navbarLinks.main} />
      </header>
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="sticky top-24 flex gap-2 self-start">
          <AdminSidebar />
          <SidebarTrigger />
        </aside>
        <main className="relative flex-1 py-32">
          <div className="mx-auto w-full max-w-2xl px-4">{props.children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
