import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLinks } from "@/components/navigation/nav-links";
import type { NavItem as NavItemType } from "@/types";
import Link from "next/link";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="flex h-16 w-full items-center border-b px-4">
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

      <nav className="hidden h-full md:ml-6 md:flex">
        <NavLinks links={links} />
      </nav>
    </div>
  );
}
