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
  const pathname = usePathname();

  const ulContainer = useRef(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timelineRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  /**
   * Syncs the underline state with the current route.
   * Whenever `pathname` changes, this block sets the underline of the active link
   * to fully visible (scaleX: 1) and collapses all others (scaleX: 0).
   *
   * Using `useGSAP` instead of `useEffect` ensures the updates are tied to
   * the GSAP context for this component, so styles are reverted automatically
   * if the component unmounts. The `scope` limits the effect to elements
   * inside `ulContainer`.
   */
  useGSAP(
    () => {
      linkRefs.current.forEach((li) => {
        const gsapUnderline = li?.querySelector(".gsap-underline");
        if (gsapUnderline) {
          if (li?.dataset.active === "true") {
            gsap.set(gsapUnderline, { scaleX: 1 });
          } else {
            gsap.set(gsapUnderline, { scaleX: 0 });
          }
        }
      });
    },
    { scope: ulContainer, dependencies: [pathname] },
  );

  const { contextSafe } = useGSAP({ scope: ulContainer });

  /**
   * This hover animation is triggered after mount (on user interaction),
   * not during the initial render. Wrapping it in `contextSafe` ensures
   * the GSAP context from `useGSAP` tracks it as part of this component.
   * That way, if the component unmounts while the animation is active,
   * GSAP will automatically clean it up, preventing memory leaks or visual glitches.
   */
  const handleMouseEnter = contextSafe((index: number) => {
    const targetLi = linkRefs.current[index];
    if (!targetLi) return;

    if (timelineRefs.current[index]) {
      timelineRefs.current[index]?.play();
      return;
    }

    const slider = targetLi.querySelector(".gsap-text-slider");
    const cloneText = targetLi.querySelector(".gsap-text-clone");
    const underline = targetLi.querySelector(".gsap-underline");

    const split = new SplitText(cloneText, {
      type: "chars",
      mask: "chars",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.4 },
      onReverseComplete: () => {
        split.revert();
        timelineRefs.current[index] = null;
      },
    });

    tl.to(slider, {
      yPercent: -50,
    })
      .from(
        split.chars,
        {
          yPercent: 100,
          autoAlpha: 0,
          stagger: { amount: 0.05 },
        },
        "-=0.4",
      )
      .to(
        underline,
        {
          scaleX: 1,
        },
        "<",
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
    <motion.ul ref={ulContainer} className="flex items-center space-x-4">
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <motion.li
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
            key={link.title}
            className="relative"
            data-active={isActive}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Link
              className={cn(
                "relative block h-6 overflow-hidden transition-colors",
                isActive ? "text-foreground" : "text-neutral-600",
              )}
              href={link.href}
            >
              <div className="gsap-text-slider">
                <span className="gsap-text-original grid h-full place-items-center [font-kerning:none]">
                  {link.title}
                </span>
                <span className="gsap-text-clone h-full [font-kerning:none]">
                  {link.title}
                </span>
              </div>
            </Link>
            <div
              className={cn(
                "gsap-underline absolute bottom-0 left-0 h-[1.25px] w-full origin-left scale-x-0",
                isActive ? "bg-foreground" : "bg-muted-foreground",
              )}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
