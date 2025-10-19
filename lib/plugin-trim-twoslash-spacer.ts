import type { ExpressiveCodePlugin } from "@expressive-code/core";
import type { Element, Text } from "hast";

function isEl(n: any, tag?: string): n is Element {
  return !!n && n.type === "element" && (!tag || n.tagName === tag);
}
function hasClass(el: Element, name: string): boolean {
  const cls = el.properties?.className ?? el.properties?.class ?? [];
  const list = Array.isArray(cls) ? cls : String(cls).trim().split(/\s+/);
  return list.includes(name);
}
function findFirst(
  root: Element,
  pred: (e: Element) => boolean,
): Element | undefined {
  const stack: Element[] = [root];
  while (stack.length) {
    const cur = stack.shift()!;
    if (pred(cur)) return cur;
    for (const c of cur.children) if (isEl(c)) stack.push(c);
  }
  return undefined;
}
function anyDescendant(root: Element, pred: (e: Element) => boolean): boolean {
  const stack: Element[] = [root];
  while (stack.length) {
    const cur = stack.pop()!;
    if (pred(cur)) return true;
    for (const c of cur.children) if (isEl(c)) stack.push(c);
  }
  return false;
}
function whitespaceOnly(el: Element): boolean {
  return (
    el.children.length === 0 ||
    el.children.every((c) => c.type === "text" && !(c as Text).value.trim())
  );
}

export function pluginTrimTrailingTwoslashSpacer(): ExpressiveCodePlugin {
  return {
    name: "Trim trailing Twoslash spacer",
    hooks: {
      postprocessRenderedBlock: ({ renderData }) => {
        const root = renderData.blockAst;

        // Find <pre><code> inside the rendered figure
        const pre = findFirst(root, (e) => isEl(e, "pre"));
        if (!pre) return;
        const code = pre.children.find((c) => isEl(c, "code")) as
          | Element
          | undefined;
        if (!code) return;

        const lines = code.children.filter(
          (c): c is Element => isEl(c) && hasClass(c, "ec-line"),
        );
        if (lines.length < 2) return;

        // Remove one or more trailing whitespace-only lines,
        // but only as long as the previous line contains a twoslash static box.
        while (lines.length >= 2) {
          const last = lines[lines.length - 1];
          const prev = lines[lines.length - 2];

          const lastCode = last.children.find(
            (c): c is Element => isEl(c) && hasClass(c, "code"),
          );
          if (!lastCode || !whitespaceOnly(lastCode)) break;

          const prevHasStatic = anyDescendant(
            prev,
            (e) =>
              hasClass(e, "twoslash-static") ||
              hasClass(e, "twoslash-static-container"),
          );
          if (!prevHasStatic) break;

          // Remove trailing spacer ec-line from <code> children
          const idx = code.children.indexOf(last);
          if (idx !== -1) code.children.splice(idx, 1);
          lines.pop();
        }
      },
    },
  };
}
