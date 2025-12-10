import { Suspense } from "react";
import Link from "next/link";

import type { NavItem as NavItemType } from "@/types";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import { UserAuthStatus } from "@/components/navigation/user-auth-status";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="flex h-full items-center gap-8">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="focus-ring flex items-center text-lg font-bold tracking-tight"
        >
          Hemanta Sundaray
        </Link>

        <div className="hidden h-full md:flex">
          <NavLinks links={links} className="h-full" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Suspense fallback={<HireMeButton />}>
            <UserAuthStatus />
          </Suspense>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
