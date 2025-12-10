"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem as NavItemType } from "@/types";

import { cn } from "@/lib/utils";

export function NavLinks({
  links,
  className,
}: {
  links: NavItemType[];
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={cn(className)}>
      <ul className="relative flex h-full items-center justify-between space-x-6 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.title}
              className="group relative flex h-full items-center"
            >
              <Link
                className={cn(
                  "focus-ring flex h-full items-center transition-colors",
                  isActive ? "font-semibold text-sky-700" : "text-neutral-600",
                )}
                href={link.href}
              >
                <span className="tracking-tight">{link.title}</span>
              </Link>
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-center transition-transform ease-out",
                  isActive
                    ? "scale-x-100 bg-sky-700"
                    : "scale-x-0 bg-neutral-600 group-hover:scale-x-100",
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
