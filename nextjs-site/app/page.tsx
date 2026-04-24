import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Products from "./components/Products";
import Hembesok from "./components/Hembesok";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Bellevue Solskydd",
      "url": "https://bellevuesolskydd.se",
      "logo": "https://bellevuesolskydd.se/images/brand/bellevue-solskydd-logo.webp",
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
    {
      "@type": "WebSite",
      "url": "https://bellevuesolskydd.se",
      "name": "Bellevue Solskydd",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bellevuesolskydd.se/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
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
        <Hero />
        <TrustBar />
        <Products />
        <Hembesok />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
