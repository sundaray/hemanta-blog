import Link from "next/link";

import type { NavItem as NavItemType } from "@/types";

import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="flex items-center space-x-3">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="hidden h-full items-center text-lg font-bold tracking-tight md:flex"
        >
          Hemanta Sundaray
        </Link>

        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center font-bold tracking-tight md:hidden"
        >
          TP
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>

      <NavLinks links={links} className="hidden h-full md:ml-6 md:flex" />
    </div>
  );
}
