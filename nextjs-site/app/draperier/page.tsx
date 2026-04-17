import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/draperier";

export const metadata: Metadata = {
  title: "Draperier i Malmö — wavegardiner för sekelskifte | Bellevue Solskydd",
  description:
    "Måttanpassade draperier och wavegardiner i Malmö. Passar sekelskifteslägenheter och äldre fastigheter med hög takhöjd. Mjuk vågeffekt, manuellt eller motorstyrt.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Vad är skillnaden mellan draperier och wavegardiner?",
    a: "De är två namn för samma lösning. Tekniken innebär att textilen arrangeras i jämna vågor under gardinskenan, med lämplig textil behåller vågrörelsen genom hela gardinens längd.",
  },
  {
    q: "Passar draperier i sekelskifteslägenheter?",
    a: "Ja. Draperier kommer till sin rätt i äldre fastigheter med hög takhöjd — vanligt i Malmös sekelskifteslägenheter kring Rådhuset, Möllan och Västra Hamnen.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, går igenom tak- och fönsterförhållanden och mäter på plats så att draperierna hänger som de ska.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda draperierna efter dina önskemål.",
  },
  {
    q: "Kan draperier motorstyras?",
    a: "Ja, systemet manövreras med handdrag, lindrag eller motor. Motorstyrning kan integreras med smart hem-system.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bellevue Solskydd",
      "telephone": "+46401811100",
      "email": "info@bellevuesolskydd.se",
      "url": pageUrl,
      "areaServed": ["Malmö", "Staffanstorp", "Vellinge", "Trelleborg", "Svedala"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  ],
};

export default function DraperierPage() {
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
        <ProductPageLayout
          title="Draperier i Malmö — wavegardiner för äldre fastigheter"
          intro="I sekelskifteslägenheten på Möllan eller den takhöga vardagsrumsväggen i innerstans bostadsrätter gör draperier hela skillnaden. Mjuk vågeffekt, textil rumslighet — manuell, lindrag eller motorstyrd."
          faq={faq}
          images={[
            { src: "/images/Draperier-img.webp", alt: "Draperier med vågeffekt" },
            { src: "/images/blue-silk-drapery-and-upholstery-fabric-from-the-c-2023-05-03-23-51-16-utc-1.jpg", alt: "Sidenliknande draperityg" },
            { src: "/images/curtain-draperies-at-window-close-up-2023-10-10-15-44-51-utc-1.jpg", alt: "Draperier vid fönster — närbild" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Exklusiva gardiner för ditt hem
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Draperier — även kallade wavegardiner — är en modern sömnadsteknik
                som skapar en lugn och skön atmosfär i rummet. Gardiner med en
                lösning som ger en mjuk och elegant vågeffekt.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Wave-tekniken
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Wave-tekniken innebär att textilen arrangeras i jämna vågor under
                gardinskenan. Vågorna kan anpassas så att de blir mindre eller
                större, och med lämplig textil får vågrörelsen att bibehållas
                genom draperiets fulla längd — även i den takhöga
                sekelskifteslägenheten.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Funktionalitet och anpassningsbarhet
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Wavegardinen är inte bara en estetisk höjdpunkt, utan också en
                funktionell lösning. Den erbjuder balans mellan ljus och
                privatliv, vilket gör den idealisk för de flesta invändiga miljöer —
                från hem till kontor. Med olika tyger och färger kan gardinen
                fungera som ljusfilter eller rumsavdelare.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Modern styrning
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Systemet manövreras med handdrag, lindrag eller motor. Motorstyrda
                wavegardiner kan integreras med smart hem-system och styras
                enkelt via app eller röstkommando.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Passform för innerstadens hem
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Draperier kräver ofta noggrann måttagning — särskilt i äldre
                fastigheter där fönsterhöjder och tak inte är helt rätvinkliga.
                Vi mäter på plats i ditt hem i Malmö och tar fram en lösning som
                hänger rent.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
