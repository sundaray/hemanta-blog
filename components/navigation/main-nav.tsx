import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import type { NavItem as NavItemType } from "@/types";
import Link from "next/link";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto flex h-[var(--main-nav-height)] w-full max-w-7xl items-center border-b bg-background px-4">
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
