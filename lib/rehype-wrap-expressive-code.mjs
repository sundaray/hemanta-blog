import { visit } from "unist-util-visit";

export function pluginWrapExpressiveCode() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      // We look for the div created by expressive-code
      if (
        node.tagName === "div" &&
        node.properties.className &&
        Array.isArray(node.properties.className) &&
        node.properties.className.includes("expressive-code")
      ) {
        // Create a new node that represents our React Component
        const wrapperNode = {
          type: "element",
          tagName: "CollapsibleCode",
          properties: {},
          children: [node],
        };

        // Replace the original code block with our wrapper
        parent.children[index] = wrapperNode;
      }
    });
  };
}
