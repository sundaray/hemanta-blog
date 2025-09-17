"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import type { NavItem as NavItemType } from "@/types";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText);

export function NavLinks({ links }: { links: NavItemType[] }) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const activeLinkHref = links.find((link) => link.href === pathname)?.href;
  const underlineTarget = hoveredLink ?? activeLinkHref;

  // ✨ 3. Create refs to target elements for animation
  const container = useRef(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const splitRefs = useRef<(SplitText | null)[]>([]);

  // ✨ 4. Set up the useGSAP hook for cleanup and context
  const { contextSafe } = useGSAP({ scope: container });

  // ✨ 5. Create the hover-in function
  const handleMouseEnter = contextSafe((index: number) => {
    const targetLi = linkRefs.current[index];
    // Add a guard to prevent re-animating
    if (!targetLi || splitRefs.current[index]) return;

    const originalText = targetLi.querySelector(".text-original");
    const cloneText = targetLi.querySelector(".text-clone");

    // Create the SplitText instance for the reveal
    const split = new SplitText(cloneText, { type: "chars", mask: "chars" });
    splitRefs.current[index] = split; // Store the instance

    // Use a timeline for sequencing
    gsap
      .timeline()

      .to(originalText, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .from(
        split.chars,
        {
          yPercent: 100,
          autoAlpha: 0,
          stagger: { amount: 0.1 },
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.25",
      );
  });

  const handleMouseLeave = contextSafe((index: number) => {
    const split = splitRefs.current[index];
    if (split) {
      // Instantly revert the text and clear the ref
      split.revert();
      splitRefs.current[index] = null;
    }
  });

  return (
    <motion.ul
      className="flex space-x-4"
      onMouseLeave={() => setHoveredLink(null)}
    >
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <motion.li
            ref={(el) => (linkRefs.current[index] = el)}
            key={link.title}
            className="relative"
            onMouseEnter={() => {
              setHoveredLink(link.href);
              handleMouseEnter(index);
            }}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="relative h-6 overflow-hidden">
              <Link
                className={cn(
                  "relative block h-full transition-colors",
                  isActive && "text-foreground",
                )}
                href={link.href}
              >
                <span className="text-original flex items-center justify-center">
                  {link.title}
                </span>
                <span className="text-clone absolute inset-0 flex items-center justify-center">
                  {link.title}
                </span>
              </Link>
            </div>
            {link.href === underlineTarget && (
              <motion.div
                layoutId="underline"
                className={cn(
                  "absolute bottom-0 left-0 h-[1.3px] w-full",
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
