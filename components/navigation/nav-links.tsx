"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/types";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLinks({ links }: { links: NavItemType[] }) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const activeLinkHref = links.find((link) => link.href === pathname)?.href;

  const underlineTarget = hoveredLink ?? activeLinkHref;

  return (
    <motion.ul
      className="flex space-x-4"
      onMouseLeave={() => setHoveredLink(null)}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <motion.li
            key={link.title}
            className="relative"
            onMouseEnter={() => setHoveredLink(link.href)}
          >
            <Link
              className={cn(
                "relative py-2 transition-colors",
                isActive && "text-foreground",
              )}
              href={link.href}
            >
              {link.title}
            </Link>

            {link.href === underlineTarget && (
              <motion.div
                layoutId="underline"
                className={cn(
                  "absolute -bottom-1 left-0 h-[1.3px] w-full",
                  underlineTarget === activeLinkHref
                    ? "bg-foreground"
                    : "bg-muted-foreground",
                )}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
