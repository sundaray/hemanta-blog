import Link from "next/link";

import type { NavItem as NavItemType } from "@/types";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="flex h-full w-full items-center justify-between">
      {/* 🔹 LEFT GROUP: Logo + Navigation Links */}
      <div className="flex h-full items-center gap-8">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="focus-ring flex items-center text-lg font-bold tracking-tight"
        >
          Hemanta Sundaray
        </Link>

        {/* Links: Hidden on mobile, visible on desktop */}
        <div className="hidden h-full md:flex">
          <NavLinks links={links} className="h-full" />
        </div>
      </div>

      {/* 🔹 RIGHT GROUP: Hire Me Button + Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Hire Me: Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <HireMeButton />
        </div>

        {/* Mobile Menu: Visible only on mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
