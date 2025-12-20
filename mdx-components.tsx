import React from "react";
import Link, { LinkProps } from "next/link";

import type { MDXComponents } from "mdx/types";
import type { Route } from "next";

import { slugify } from "@/lib/utils";

import { CollapsibleCode } from "@/components/blog/collapsible-code";
import { Icons } from "@/components/icons";

type CustomLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  Partial<LinkProps<Route>>;

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...rest } = props;

  if (typeof href === "string") {
    if (href.startsWith("/")) {
      return (
        <Link href={href as Route} {...rest}>
          {props.children}
        </Link>
      );
    }

    if (href.startsWith("#")) {
      return <a href={href} {...rest} />;
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1"
        {...rest}
      >
        <span>{children}</span>
        <Icons.arrowUpRight className="text-muted-foreground size-3" />
      </a>
    );
  }

  return null;
}

function getTextFromChildren(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") {
        return child;
      }
      if (typeof child === "number") {
        return child.toString();
      }
      if (React.isValidElement(child)) {
        // Recursively dig into the children of the React Element (e.g. the <code> tag)
        return getTextFromChildren(
          (child.props as { children?: React.ReactNode }).children,
        );
      }
      return "";
    })
    .join("");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    // const contentString = React.Children.toArray(children)
    //   .map((child) => {
    //     if (typeof child === "string") {
    //       return child;
    //     }
    //     return "";
    //   })
    //   .join("");

    const contentString = getTextFromChildren(children);

    const slug = slugify(contentString);

    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
          "aria-label": `Link to section: ${contentString}`,
        },
        React.createElement(Icons.link, {
          className: "size-4",
        }),
      ),
      children,
    ]);
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const headingComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...headingComponents,
    a: CustomLink,
    CollapsibleCode: CollapsibleCode,
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="border-b" {...props}>
        {children}
      </thead>
    ),
    tbody: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="divide-y" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="hover:bg-muted/50 border-b transition-colors" {...props}>
        {children}
      </tr>
    ),
    th: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="text-foreground px-4 py-3 text-left font-semibold"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-3 text-neutral-700" {...props}>
        {children}
      </td>
    ),
  };
}
