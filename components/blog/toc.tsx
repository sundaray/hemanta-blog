"use client";

import * as React from "react";

import { Item } from "@/types";
import { motion } from "motion/react";

import { type TableOfContents as TOCType } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

import { Icons } from "@/components/icons";

interface TocProps {
  toc: TOCType;
}

export function TableOfContents({ toc }: TocProps) {
  const { itemIds, parentMap, topLevel } = React.useMemo(() => {
    const ids: string[] = [];
    const map: Record<string, string> = {};
    const top: Item[] = [];

    if (!toc?.items) return { itemIds: ids, parentMap: map, topLevel: top };

    toc.items.forEach((h2) => {
      top.push(h2);
      const h2Id = h2.url?.split("#")[1];
      if (h2Id) ids.push(h2Id);

      if (h2.items && Array.isArray(h2.items)) {
        h2.items.forEach((h3) => {
          const h3Id = h3.url?.split("#")[1];
          if (h3Id) {
            ids.push(h3Id);
            if (h2Id) map[h3Id] = h2Id;
          }
        });
      }
    });

    return { itemIds: ids, parentMap: map, topLevel: top };
  }, [toc]);

  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = React.useState({
    top: 0,
    height: 0,
    borderWidth: 1,
    visible: false,
  });

  React.useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const borderWidth = parseFloat(
      getComputedStyle(containerElement).borderLeftWidth || "1",
    );
    setIndicator((prev) => ({
      ...prev,
      borderWidth: isNaN(borderWidth) ? 1 : borderWidth,
    }));
  }, []);

  React.useLayoutEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement || !activeHeading) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }

    const escapeCssSelector = (str: string): string => {
      if (
        typeof window !== "undefined" &&
        window.CSS &&
        typeof window.CSS.escape === "function"
      ) {
        return window.CSS.escape(str);
      }
      return str.replace(/[^a-zA-Z0-9_-]/g, (match) => `\\${match}`);
    };

    const selector = `a[href="#${escapeCssSelector(activeHeading)}"]`;

    const linkElement =
      containerElement.querySelector<HTMLAnchorElement>(selector);

    if (!linkElement) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }

    let animationFrameId: number | null = null;

    const scheduleUpdate = () => {
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        updatePosition();
      });
    };
    const updatePosition = () => {
      if (!containerElement || !linkElement) return;
      const containerRect = containerElement.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();
      const top = linkRect.top - containerRect.top;
      const height = linkRect.height;
      setIndicator((prev) => ({ ...prev, top, height, visible: height > 0 }));
    };
    updatePosition();
    const linkResizeObserver = new ResizeObserver(scheduleUpdate);
    linkResizeObserver.observe(linkElement);
    const containerResizeObserver = new ResizeObserver(scheduleUpdate);
    containerResizeObserver.observe(containerElement);
    const mutationObserver = new MutationObserver(scheduleUpdate);
    mutationObserver.observe(containerElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
      containerResizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [activeHeading, toc]);

  const activeParent = React.useMemo(() => {
    if (!activeHeading) return null;
    if (topLevel.find((t) => t.url?.split("#")[1] === activeHeading)) {
      return activeHeading;
    }
    return parentMap[activeHeading] ?? null;
  }, [activeHeading, parentMap, topLevel]);

  if (!mounted || !toc?.items) return null;

  return (
    <div className="space-y-4">
      <p className="flex items-center gap-2">
        <Icons.toc className="text-muted-foreground size-4" />
        <span className="text-foreground">ON THIS PAGE</span>
      </p>

      <div ref={containerRef} className="border-input relative border-l pl-4">
        {indicator.visible && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bg-sky-700 transition-all duration-200"
            style={{
              left: `-${indicator.borderWidth}px`,
              top: `${indicator.top}px`,
              width: `${indicator.borderWidth}px`,
              height: `${indicator.height}px`,
            }}
          />
        )}

        <ul className="list-none space-y-2">
          {topLevel.map((h2) => {
            const h2Id = h2.url?.split("#")[1];
            const isActiveGroup = Boolean(h2Id && activeParent === h2Id);

            return (
              <li key={h2Id} className="group">
                <div className="flex items-center justify-between">
                  <a
                    href={h2.url}
                    className={cn(
                      "focus-ring inline-block text-sm transition-colors",
                      isActiveGroup
                        ? "font-semibold text-sky-700"
                        : "text-neutral-600",
                    )}
                  >
                    {h2.title}
                  </a>
                </div>

                {h2.items && h2.items.length > 0 && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {h2.items.map((h3, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={h3.url}
                            className={cn(
                              "focus-ring inline-block text-sm transition-colors",
                              activeHeading === h3.url?.split("#")[1]
                                ? "text-sky-700"
                                : "text-neutral-600",
                            )}
                          >
                            {h3.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );
    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);
  return activeId;
}
