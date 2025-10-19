import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import createMDX from "@next/mdx";
import ecTwoSlash from "expressive-code-twoslash";
import type { NextConfig } from "next";
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from "rehype-expressive-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import { pluginRemoveLastBlankLine } from "@/lib/rehype-expressive-code-remove-last-blank-twoslash-line-number.mjs";

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
    borderColor: "var(--input)",
    borderRadius: "8px",
    uiPaddingBlock: "0.5rem",
    uiFontFamily: "var(--font-mono)",
    gutterBorderColor: "var(--input)",

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
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
  },
});

export default withMDX(nextConfig);
