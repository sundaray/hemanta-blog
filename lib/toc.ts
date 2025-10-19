import { Item, Items } from "@/types";
import type {
  Link,
  List,
  ListItem,
  Literal,
  Node,
  Paragraph,
  Parent,
  Root,
} from "mdast";
import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: Parent): string {
  const p: string[] = [];
  visit(node, (visitedNode: Node) => {
    if (textTypes.includes(visitedNode.type) && "value" in visitedNode) {
      p.push(String((visitedNode as Literal).value));
    }
  });
  return p.join("");
}

function getItems(
  node: Node | null | undefined,
  current: Partial<Item>,
): Partial<Item> {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node as Paragraph, (itemNode: Node) => {
      if (itemNode.type === "link") {
        current.url = (itemNode as Link).url;
        current.title = flattenNode(node as Paragraph);
      }
      if (itemNode.type === "text" && !current.url) {
        current.title = flattenNode(node as Paragraph);
      }
    });
    return current;
  }

  if (node.type === "list") {
    current.items = (node as List).children
      .map((listItem: ListItem) => getItems(listItem, {}))
      .filter(
        (item): item is Item =>
          item.title !== undefined && item.url !== undefined,
      );
    return current;
  } else if (node.type === "listItem") {
    const listItemChildren = (node as ListItem).children;
    const heading = getItems(listItemChildren[0], {});
    if (listItemChildren.length > 1) {
      getItems(listItemChildren[1], heading);
    }
    return heading;
  }

  return {};
}

const getToc = () => (node: Root, file: VFile) => {
  const table = toc(node, { maxDepth: 3, tight: true });
  file.data.toc = table.map ? getItems(table.map, {}) : {};
};

export type TableOfContents = Items;

export async function getTableOfContents(
  content: string,
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);
  return (result.data.toc || {}) as TableOfContents;
}
