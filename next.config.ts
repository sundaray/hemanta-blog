import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import createMDX from "@next/mdx";
import ecTwoSlash from "expressive-code-twoslash";
import type { NextConfig } from "next";
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from "rehype-expressive-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import { pluginRemoveLastBlankLine } from "@/lib/rehype-expressive-code-remove-last-blank-twoslash-line-number.mjs";
import { pluginWrapExpressiveCode } from "@/lib/rehype-wrap-expressive-code.mjs";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  themes: ["github-light"],
  plugins: [ecTwoSlash(), pluginLineNumbers(), pluginRemoveLastBlankLine()],
  styleOverrides: {
    codeBackground: "var(--color-taupe-100)",
    borderColor: "var(--color-taupe-200)",
    borderRadius: "8px",
    borderWidth: "1px",
    uiPaddingBlock: "0.75rem",
    uiFontFamily: "var(--font-mono)",
    gutterBorderColor: "var(--input)",
    gutterBorderWidth: "1px",

    textMarkers: {
      markBackground: "rgb(186 230 253 / 40%)",
      markBorderColor: "rgb(2 132 199)",
    },

    frames: {
      frameBoxShadowCssValue: "none",
      editorTabBarBorderBottomColor: "var(--input)",
      editorActiveTabIndicatorTopColor: "transparent",
      editorActiveTabIndicatorBottomColor: "var(--input)",
      editorActiveTabBackground: "transparent",
      editorTabBarBackground: "transparent",
      inlineButtonBorder: "transparent",
      inlineButtonBackground: "var(--input)",
      inlineButtonForeground: "#404040",
      inlineButtonBackgroundHoverOrFocusOpacity: "0.4",
    },
    lineNumbers: {
      foreground: "#737373",
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [
      [rehypeExpressiveCode, rehypeExpressiveCodeOptions],
      pluginWrapExpressiveCode,
    ],
  },
});

export default withMDX(nextConfig);
