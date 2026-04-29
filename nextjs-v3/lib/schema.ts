export const SITE_URL = "https://www.bellevuesolskydd.se";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const SITE_ID = `${SITE_URL}/#website`;

const phone = "+46401811100";
const email = "info@bellevuesolskydd.se";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Satellitvägen 16",
  postalCode: "245 34",
  addressLocality: "Staffanstorp",
  addressRegion: "Skåne län",
  addressCountry: "SE",
};

const areasServed = [
  "Malmö",
  "Burlöv",
  "Lomma",
  "Staffanstorp",
  "Vellinge",
  "Svedala",
  "Kävlinge",
  "Trelleborg",
  "Skurup",
  "Eslöv",
  "Lund",
];

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Bellevue Solskydd",
    url: SITE_URL,
    telephone: phone,
    email,
    address,
  };
}

export function localBusinessSchema() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: "Bellevue Solskydd",
    url: SITE_URL,
    telephone: phone,
    email,
    address,
    areaServed: areasServed.map((name) => ({ "@type": "City", name })),
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "Bellevue Solskydd",
    inLanguage: "sv-SE",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function servicePageSchema(
  name: string,
  url: string,
  description: string
) {
  return {
    "@type": "Service",
    name,
    url,
    description,
    provider: { "@id": BUSINESS_ID },
    areaServed: areasServed.map((city) => ({ "@type": "City", name: city })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "sv-SE",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function contactPageSchema(url: string) {
  return {
    "@type": "ContactPage",
    url,
    name: "Kontakt — Bellevue Solskydd",
    about: { "@id": BUSINESS_ID },
  };
}

export function siteGraph(extra: Record<string, unknown>[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      localBusinessSchema(),
      websiteSchema(),
      ...extra,
    ],
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
