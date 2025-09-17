"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { NavItem as NavItemType } from "@/types";
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

  const container = useRef(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timelineRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe((index: number) => {
    const targetLi = linkRefs.current[index];
    if (!targetLi) return;

    if (timelineRefs.current[index]) {
      timelineRefs.current[index]?.play();
      return;
    }

    const slider = targetLi.querySelector(".text-slider");
    const cloneText = targetLi.querySelector(".text-clone");

    // ✨ 1. Add back the `mask: "chars"` property for the clean reveal
    const split = new SplitText(cloneText, {
      type: "words, chars",
      mask: "chars",
    });

    const tl = gsap.timeline({
      onReverseComplete: () => {
        split.revert();
        timelineRefs.current[index] = null;
      },
    });

    tl.to(slider, {
      yPercent: -50,
      duration: 0.3,
      ease: "power2.inOut",
    }).from(
      split.chars,
      {
        yPercent: 100,
        autoAlpha: 0,
        stagger: { amount: 0.1 },
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.3",
    );

    timelineRefs.current[index] = tl;
  });

  const handleMouseLeave = contextSafe((index: number) => {
    const tl = timelineRefs.current[index];
    if (tl) {
      tl.reverse();
    }
  });

  return (
    <motion.ul
      ref={container}
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
            <Link
              className={cn(
                "relative block h-6 overflow-hidden transition-colors",
                isActive && "text-foreground",
              )}
              href={link.href}
            >
              <div className="text-slider">
                <span className="text-original grid h-full place-items-center [font-kerning:none]">
                  {link.title}
                </span>
                <span className="text-clone h-full [font-kerning:none]">
                  {link.title}
                </span>
              </div>
            </Link>

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
