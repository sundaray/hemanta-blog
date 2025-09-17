import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavItem } from "@/components/navigation/nav-item";
import type { NavItem as NavItemType } from "@/types";
import Link from "next/link";

type MainNavProps = {
  links: NavItemType[];
};

export async function MainNav({ links }: MainNavProps) {
  return (
    <div className="flex h-20 w-full items-center">
      <div className="flex items-center space-x-3">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="hidden items-center text-lg font-bold tracking-tight md:flex"
        >
          Hemanta Sundaray
        </Link>

        <Link
          href="/"
          aria-label="Go to homepage"
          className="link-focus inline-flex items-center font-bold tracking-tight md:hidden"
        >
          TP
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>

      <nav className="hidden md:ml-6 md:flex">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.title}>
              <NavItem title={link.title} href={link.href} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
