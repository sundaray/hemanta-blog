import type { AdminNavItem, NavItem } from "@/types";

import { Icons } from "@/components/icons";

type NavbarConfig = {
  main: NavItem[];
  adminSidebar: AdminNavItem[];
};

export const navbarLinks: NavbarConfig = {
  main: [
    { title: "Blog", href: "/blog" },
    { title: "Courses", href: "/courses" },
    { title: "OSS", href: "/oss" },
    { title: "Projects", href: "/projects" },
    { title: "Technical Writing", href: "/technical-writing" },
  ],
  adminSidebar: [
    {
      title: "Add OSS Project",
      href: "/admin/add-oss-project",
      icon: Icons.plus,
    },
    {
      title: "Users",
      href: "/admin/manage-users",
      icon: Icons.users,
    },
  ],
};
