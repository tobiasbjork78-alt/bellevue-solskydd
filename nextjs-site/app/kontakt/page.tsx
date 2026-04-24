import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Kontakta oss | Bellevue Solskydd",
  description:
    "Kontakta Bellevue Solskydd för kostnadsfritt hembesök, offert eller rådgivning. Ring 040-18 11 00 eller fyll i formuläret.",
  alternates: { canonical: "https://bellevuesolskydd.se/kontakt" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Kontakta Bellevue Solskydd",
      "url": "https://bellevuesolskydd.se/kontakt",
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bellevue Solskydd",
      "image": "https://bellevuesolskydd.se/images/brand/bellevue-solskydd-logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Satellitvägen 16",
        "postalCode": "245 34",
        "addressLocality": "Staffanstorp",
        "addressCountry": "SE",
      },
      "telephone": "+46401811100",
      "email": "info@bellevuesolskydd.se",
      "url": "https://bellevuesolskydd.se",
      "areaServed": ["Malmö", "Limhamn", "Staffanstorp", "Lund", "Lomma", "Löddeköpinge", "Vellinge", "Höllviken", "Ljunghusen", "Falsterbo", "Skanör", "Trelleborg"],
    },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
