import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/panelgardiner";

export const metadata: Metadata = {
  title: "Panelgardiner i Malmö — för stora fönsterpartier | Bellevue Solskydd",
  description:
    "Måttanpassade panelgardiner i Malmö. Stora fönsterpartier och nyproduktion. Två till fem spår, enfärgat eller mönster, från skira tyger till mörkläggande.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade panelgardiner?",
    a: "Ja, alla panelgardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Passar panelgardiner för stora fönsterpartier?",
    a: "Ja. Panelgardinen är särskilt bra för stora fönsterpartier och skjutdörrar — vanligt i nyproducerade villor och lägenheter i Malmö. Panelerna skjuts åt sidan som tygdörrar.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. En solskyddsexpert ger tips och råd kring panelgardiner och hur de passar ditt hem. Erbjudandet gäller när vi är med från måttagning till montering.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda panelgardinerna efter dina önskemål.",
  },
  {
    q: "Vad kostar panelgardiner?",
    a: "Priset styrs av material, storlek på gardinerna och om du vill ha motordrift eller manuell hantering. Kontakta oss för en offert.",
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

export default function PanelgardinerPage() {
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
          title="Panelgardiner i Malmö — för stora fönsterpartier"
          intro="För stora fönsterpartier och nyproduktion i Malmö. Panelgardinen fungerar som tygdörr, rumsavdelare eller solskydd för fönster — skjut panelerna åt sidan för att kontrollera ljuset."
          faq={faq}
          images={[
            { src: "/images/Graa-panelgardiner-1.jpg", alt: "Grå panelgardiner" },
            { src: "/images/Ljusa-panelgardiner-1.jpg", alt: "Ljusa panelgardiner i modernt rum" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Ett mångsidigt solskydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Panelgardinen är mångsidig — användbar som tygdörr, rumsavdelare
                och solskydd för fönster. Våra skenor, från två till fem spår,
                kan kombineras för att passa dina behov. Panelerna är enkla att
                ta av för rengöring eller byte.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Modernt och flexibelt val
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Panellängderna skapar en harmonisk atmosfär med stilren design.
                Panelgardinen är en utmärkt lösning för att balansera ljus och
                privatliv i hemmet — särskilt där fönsterpartierna är stora och
                vanliga gardiner blir otympliga.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Styrning och material
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj mellan olika styrningsalternativ, inklusive motordrift. Tyger
                finns från skira ljusfilter till mörkläggande — i enfärgat eller
                olika mönster. Vi guidar dig till ett val som matchar rummets
                övriga inredning.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Kombinera mångsidighet och stil
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Panelgardinens design tillåter många valmöjligheter — material,
                färg och mönster. Genom att enkelt skjuta panelerna åt sidan
                kontrollerar du ljusinsläppet och skapar rätt atmosfär för
                tillfället.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsydd för ditt hem
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Panelgardinerna anpassas i bredd och längd efter dina fönster.
                Vi monterar hos dig i Skåne så att panelerna sitter som de ska —
                från villan med stora fönsterpartier till lägenheten med
                glasdörrar mot balkongen.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
