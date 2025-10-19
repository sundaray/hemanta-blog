import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from "rehype-expressive-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  themes: ["github-dark", "github-light"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
  },
});

export default withMDX(nextConfig);
