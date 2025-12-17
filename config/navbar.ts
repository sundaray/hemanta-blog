import type { NavItem } from "@/types";

import { Icons } from "@/components/icons";

type NavbarConfig = {
  main: NavItem[];
  admin: NavItem[];
};

export const navbarLinks: NavbarConfig = {
  main: [
    { title: "Blog", href: "/blog" },
    { title: "OSS", href: "/oss" },
    { title: "Projects", href: "/projects" },
    { title: "Technical Writing", href: "/technical-writing" },
  ],
  admin: [
    { title: "Posts", href: "/admin/posts" },
    { title: "Add OSS Project", href: "/admin/add-oss-project" },
  ],
};
