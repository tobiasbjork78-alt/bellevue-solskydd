import { Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import TrustBar from "./TrustBar";

interface FAQItem {
  q: string;
  a: string;
}

interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProductPageLayoutProps {
  title: string;
  intro: string;
  children: ReactNode;
  faq?: FAQItem[];
  images?: ProductImage[];
  category?: "invandigt" | "utvandigt";
  guaranteeYears?: 10 | 3;
}

export function InlineProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-10 sm:my-14">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-light-bg border border-border">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 56rem"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function ProductPageLayout({
  title,
  intro,
  children,
  faq,
  images,
  category,
  guaranteeYears = 3,
}: ProductPageLayoutProps) {
  const shortTitle = title.split("—")[0].trim();
  const categoryLabel = category === "invandigt" ? "Invändigt solskydd" : category === "utvandigt" ? "Utvändigt solskydd" : undefined;
  const categoryAnchor = category === "invandigt" ? "/#invandigt" : category === "utvandigt" ? "/#utvandigt" : undefined;

  const breadcrumbLd = category ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://bellevuesolskydd.se" },
      { "@type": "ListItem", "position": 2, "name": categoryLabel, "item": `https://bellevuesolskydd.se${categoryAnchor}` },
      { "@type": "ListItem", "position": 3, "name": shortTitle },
    ],
  } : undefined;

  return (
    <div className="bg-white">
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      {/* Header with breadcrumb */}
      <div className="bg-light-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <nav className="flex items-center gap-1 text-sm text-mid-gray mb-4">
            <Link href="/" className="hover:text-teal transition-colors">Hem</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            {categoryLabel && categoryAnchor && (
              <>
                <Link href={categoryAnchor} className="hover:text-teal transition-colors">{categoryLabel}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
            <span className="text-charcoal font-medium">{shortTitle}</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-charcoal">
            {title}
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <p className="text-lg text-mid-gray leading-relaxed max-w-3xl">
          {intro}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {children}
      </div>

      {/* Gallery — stackad enkel-kolumn, samma bredd och aspect som inline-bilden */}
      {images && images.length > 0 && (
        <div className="bg-light-bg border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 sm:space-y-14">
            {images.map((img) => (
              <figure key={img.src} className="flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-light-bg border border-border">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56rem"
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-2 text-sm text-mid-gray">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <div className="bg-light-bg border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-8">
              Vanliga frågor
            </h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-charcoal mb-1.5">
                    {item.q}
                  </h3>
                  <p className="text-mid-gray leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <TrustBar variant="product" guaranteeYears={guaranteeYears} />

      {/* CTA */}
      <div className="bg-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-4">
            Kostnadsfritt hembesök — utan köptvång
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Vi kommer hem till dig i Malmö, Limhamn, Staffanstorp, Lund,
            Lomma, Löddeköpinge, Vellinge, Höllviken, Ljunghusen,
            Falsterbo, Skanör och Trelleborg.
            Mäter, rådger och presenterar rätt alternativ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:040181100"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark hover:bg-light-bg px-8 py-3.5 rounded-md font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ring 040-18 11 00
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:bg-white/10 text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
            >
              Skicka förfrågan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
