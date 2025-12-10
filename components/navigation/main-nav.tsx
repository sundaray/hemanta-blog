import Link from "next/link";

import type { NavItem as NavItemType } from "@/types";

import { getSession } from "@/lib/auth/session";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import { UserAccountNavClient } from "@/components/navigation/user-account-nav-client";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  const { user } = await getSession();

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
          {user?.email ? (
            <UserAccountNavClient email={user.email} />
          ) : (
            <HireMeButton />
          )}
        </div>
        <div className="md:hidden">
          <MobileNav user={user} />
        </div>
      </div>
    </div>
  );
}
