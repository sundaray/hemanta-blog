import type { NavItem } from "@/types";

type NavbarConfig = {
  home: NavItem[];
};

export const navbarLinks: NavbarConfig = {
  home: [
    { title: "Blog", href: "/blog" },
    { title: "Tags", href: "/tags" },
    { title: "Courses", href: "/courses" },
    { title: "OSS", href: "/oss" },
    { title: "Projects", href: "/projects" },
    { title: "Technical Writing", href: "/technical-writing" },
  ],
};
