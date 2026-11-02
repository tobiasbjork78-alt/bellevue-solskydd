// Rehype plugin: turns plain Markdown output into the same DOM/classes the
// nextjs-v3 pages used for their prose sections.
//
// - Each `## heading` plus following nodes (until the next h2) becomes
//   <section class="mt-16"><h2 class=...>…</h2><div class="body-copy …">…</div></section>
// - h3, ul, ol, strong and a get the classes used in nextjs-v3.
// - Elements that already have a class (inline HTML in Markdown) are left as-is.
// - Content before the first h2 is left untouched.
// - A file can opt out of sectionizing with frontmatter `prose: false`.

const SECTION_CLASS = ["mt-16"];
const H2_CLASS = ["heading-section", "text-3xl", "md:text-4xl", "text-ink", "mb-6"];
const BODY_CLASS = ["body-copy", "text-ink-soft", "space-y-5", "max-w-3xl"];
const H3_CLASS = ["heading-section", "text-xl", "md:text-2xl", "text-ink", "mt-8", "mb-3"];
const UL_CLASS = ["list-disc", "pl-6", "space-y-2"];
const OL_CLASS = ["list-decimal", "pl-6", "space-y-2"];
const STRONG_CLASS = ["font-medium", "text-ink"];
const LINK_CLASS = ["text-ink", "underline", "decoration-ink/30", "hover:decoration-ink"];
const LINK_IN_STRONG_CLASS = ["underline", "decoration-ink/30", "hover:decoration-ink"];

function hasClass(node) {
  const c = node.properties && node.properties.className;
  return Array.isArray(c) ? c.length > 0 : Boolean(c);
}

function decorate(node, parent) {
  if (node.type === "element" && !hasClass(node)) {
    const t = node.tagName;
    if (t === "h3") node.properties.className = [...H3_CLASS];
    else if (t === "ul") node.properties.className = [...UL_CLASS];
    else if (t === "ol") node.properties.className = [...OL_CLASS];
    else if (t === "strong") node.properties.className = [...STRONG_CLASS];
    else if (t === "a") {
      node.properties.className =
        parent && parent.type === "element" && parent.tagName === "strong"
          ? [...LINK_IN_STRONG_CLASS]
          : [...LINK_CLASS];
    }
  }
  if (node.children) node.children.forEach((child) => decorate(child, node));
}

function isH2(node) {
  return node.type === "element" && node.tagName === "h2";
}

export function rehypeProse() {
  return (tree, file) => {
    const fm = file && file.data && file.data.astro && file.data.astro.frontmatter;
    decorate(tree, null);
    if (fm && fm.prose === false) return;

    const out = [];
    let current = null;
    for (const node of tree.children) {
      if (isH2(node)) {
        if (!hasClass(node)) node.properties.className = [...H2_CLASS];
        const body = {
          type: "element",
          tagName: "div",
          properties: { className: [...BODY_CLASS] },
          children: [],
        };
        current = {
          type: "element",
          tagName: "section",
          properties: { className: [...SECTION_CLASS] },
          children: [node, body],
        };
        out.push(current);
      } else if (current) {
        // Skip whitespace-only text between blocks
        if (node.type === "text" && !node.value.trim()) continue;
        current.children[1].children.push(node);
      } else {
        out.push(node);
      }
    }
    tree.children = out;
  };
}
