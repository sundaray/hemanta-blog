import createMDX from "@next/mdx";
import { transformerTwoslash } from "@shikijs/twoslash";
import type { NextConfig } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  // typedRoutes: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
  transformers: [
    transformerTwoslash({
      explicitTrigger: true,
    }),
  ],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
