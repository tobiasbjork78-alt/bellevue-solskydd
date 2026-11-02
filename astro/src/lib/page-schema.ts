// Builds JSON-LD nodes (except BreadcrumbList, which BaseLayout adds once)
// from the `schema` descriptors in page frontmatter. Mirrors nextjs-v3/lib/schema.ts usage.
import {
  abs,
  SITE_URL,
  BUSINESS_ID,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  servicePageSchema,
  localCityServiceSchema,
  faqSchema,
  articleSchema,
  contactPageSchema,
} from "./schema";
import type { SchemaDescriptor } from "../content/schemas/base";

type Ctx = {
  path: string;
  title: string;
  description: string;
  faqs?: Array<{ question: string; answer: string }>;
};

export function buildSchema(descriptors: SchemaDescriptor[] | undefined, ctx: Ctx): Record<string, unknown>[] {
  const url = abs(ctx.path);
  const nodes: Record<string, unknown>[] = [];
  for (const d of descriptors ?? []) {
    switch (d.type) {
      case "site":
        nodes.push(organizationSchema(), localBusinessSchema(), websiteSchema());
        break;
      case "service": {
        const description = d.description ?? ctx.description;
        let node: Record<string, unknown>;
        if (d.cities) node = localCityServiceSchema(d.name, url, description, d.cities);
        else if (d.city) node = localCityServiceSchema(d.name, url, description, d.city);
        else node = servicePageSchema(d.name, url, description);
        if (d.dateModified) node = { ...node, dateModified: d.dateModified };
        nodes.push(node);
        break;
      }
      case "faq":
        nodes.push(faqSchema(d.items ?? ctx.faqs ?? []));
        break;
      case "article":
        nodes.push(
          articleSchema({
            url,
            headline: d.headline,
            description: d.description ?? ctx.description,
            datePublished: d.datePublished,
            dateModified: d.dateModified,
          })
        );
        break;
      case "contactPage":
        nodes.push(contactPageSchema(url));
        break;
      case "webPage":
        nodes.push({
          "@type": "WebPage",
          "@id": url,
          url,
          name: d.name ?? ctx.title,
          description: d.description ?? ctx.description,
          inLanguage: "sv-SE",
          ...(d.dateModified ? { dateModified: d.dateModified } : {}),
          ...(d.speakable
            ? { speakable: { "@type": "SpeakableSpecification", cssSelector: d.speakable } }
            : {}),
        });
        break;
      case "collectionPage":
        nodes.push({
          "@type": "CollectionPage",
          url,
          name: d.name,
          inLanguage: "sv-SE",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": BUSINESS_ID },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: d.items.map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name,
            })),
          },
        });
        break;
    }
  }
  return nodes;
}
