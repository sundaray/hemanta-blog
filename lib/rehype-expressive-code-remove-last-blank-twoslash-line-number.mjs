import { select } from "hast-util-select";

function hasClass(node, className) {
  return (
    node &&
    node.type === "element" &&
    node.properties &&
    Array.isArray(node.properties.className) &&
    node.properties.className.includes(className)
  );
}

function isWhitespaceOnlyTextNode(node) {
  return node && node.type === "text" && node.value.trim() === "";
}

export function pluginRemoveLastBlankLine() {
  return {
    name: "Remove Last Blank Line",
    hooks: {
      postprocessRenderedBlock: ({ renderData }) => {
        const blockAst = renderData.blockAst;

        const codeElement = select("pre > code", blockAst);
        if (
          !codeElement ||
          !codeElement.children ||
          codeElement.children.length === 0
        ) {
          return;
        }

        const lineElements = codeElement.children.filter(
          (node) => node.type === "element" && hasClass(node, "ec-line"),
        );

        if (lineElements.length === 0) {
          return;
        }

        // Get the last line element
        const lastLine = lineElements[lineElements.length - 1];

        // 1. Check if the last line is blank
        const lastLineCode = select(".code", lastLine);
        const isLastLineBlank =
          lastLineCode &&
          lastLineCode.children &&
          // Check if it's empty OR contains only a whitespace node
          (lastLineCode.children.length === 0 ||
            (lastLineCode.children.length === 1 &&
              isWhitespaceOnlyTextNode(lastLineCode.children[0])));

        // 2. If the last line is blank, remove it
        if (isLastLineBlank) {
          // Find the index of the last line in the *original* children array
          const originalLastLineIndex = codeElement.children.findIndex(
            (child) => child === lastLine,
          );
          if (originalLastLineIndex > -1) {
            codeElement.children.splice(originalLastLineIndex, 1);
          }
        }
      },
    },
  };
}

export default pluginRemoveLastBlankLine;
