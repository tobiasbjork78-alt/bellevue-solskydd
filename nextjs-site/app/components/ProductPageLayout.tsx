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
    <div className="my-12 sm:my-16">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-light-gray" style={{ borderRadius: "20px" }}>
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

      <div className="bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-1 text-warm-gray mb-5" style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.13px" }}>
            <Link href="/" className="hover:text-black transition-colors">Hem</Link>
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            {categoryLabel && categoryAnchor && (
              <>
                <Link href={categoryAnchor} className="hover:text-black transition-colors">{categoryLabel}</Link>
                <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </>
            )}
            <span className="text-black">{shortTitle}</span>
          </nav>
          <h1 className="text-black text-4xl sm:text-5xl" style={{ fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <p className="text-dark-gray max-w-3xl" style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.18px", lineHeight: 1.5 }}>
          {intro}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {children}
      </div>

      {images && images.length > 0 && (
        <div className="bg-light-gray" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 sm:space-y-16">
            {images.map((img) => (
              <figure key={img.src} className="flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-light-gray" style={{ borderRadius: "20px" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56rem"
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 text-warm-gray" style={{ fontSize: "13px", letterSpacing: "0.13px" }}>
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {faq && faq.length > 0 && (
        <div className="bg-white" style={{ borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-black mb-10" style={{ fontSize: "32px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.13 }}>
              Vanliga frågor
            </h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-black mb-2" style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "0.16px" }}>
                    {item.q}
                  </h3>
                  <p className="text-dark-gray" style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.16px", lineHeight: 1.6 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <TrustBar variant="product" guaranteeYears={guaranteeYears} />

      <div className="bg-warm-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-black mb-6" style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.17 }}>
            Kostnadsfritt hembesök — utan köptvång
          </h2>
          <p
            className="text-dark-gray mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "18px", fontWeight: 400, letterSpacing: "0.18px", lineHeight: 1.6 }}
          >
            Vi kommer hem till dig i Malmö, Limhamn, Staffanstorp, Lund,
            Lomma, Löddeköpinge, Vellinge, Höllviken, Ljunghusen,
            Falsterbo, Skanör och Trelleborg.
            Mäter, rådger och presenterar rätt alternativ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:040181100" className="btn-black-pill" style={{ padding: "12px 22px", fontSize: "16px" }}>
              <Phone className="w-4 h-4" />
              Ring 040-18 11 00
            </a>
            <Link href="/kontakt" className="btn-white-pill" style={{ padding: "12px 22px", fontSize: "16px" }}>
              Skicka förfrågan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
