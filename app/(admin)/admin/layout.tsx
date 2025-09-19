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
    <>
      <header>
        <MainNav links={navbarLinks.main} />
      </header>
      <div className="mx-auto flex w-full max-w-7xl px-4 md:px-8">
        <SidebarProvider>
          <aside className="sticky top-[var(--main-nav-height)] self-start">
            <AdminSidebar />
          </aside>
          <main className="relative flex-1 px-4 py-32 md:px-8">
            <SidebarTrigger className="absolute top-18 left-2" />
            <div className="mx-auto w-full max-w-xl">{props.children}</div>
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}
