import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/insektsskydd";

export const metadata: Metadata = {
  title: "Insektsskydd i Malmö & Staffanstorp — fönster & dörrar | Bellevue Solskydd",
  description:
    "Måttanpassade insektsskydd i Malmö och Staffanstorp. Villor med trädgård nära grönområden. Transparent glasfiberväv med sidoskenor som håller.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade insektsskydd?",
    a: "Ja, insektsskydden måttanpassas efter dina fönster och dörrar.",
  },
  {
    q: "Är det värt insektsskydd i Malmö och Staffanstorp?",
    a: "I villor med trädgård eller i områden nära grönytor — Pildammsparken, Bulltofta, skogspartierna runt Staffanstorp — gör insektsskyddet stor skillnad. Det låter sommarens dofter komma in medan myggor, flugor och andra kryp stannar ute.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, går igenom fönster- och dörrförhållanden och ger råd om bästa lösning.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda insektsskydden efter dina önskemål.",
  },
  {
    q: "Vilken typ av väv används?",
    a: "Vi arbetar med tålig men transparent glasfiberväv med sidoskenor som håller skyddet på plats. Finns även andra lösningar om du har specifika krav.",
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
      "areaServed": ["Malmö", "Limhamn", "Staffanstorp", "Lund", "Lomma", "Löddeköpinge", "Vellinge", "Höllviken", "Ljunghusen", "Falsterbo", "Skanör", "Trelleborg"],
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

export default function InsektsskyddPage() {
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
          title="Insektsskydd i Malmö och Staffanstorp — fönster och dörrar"
          intro="I villan med trädgård, nära Pildammsparken eller vid skogskanten i Staffanstorp, är insektsskyddet det som gör att du kan ha fönstret öppet hela sommaren. Måttanpassat i transparent glasfiberväv med sidoskenor som håller."
          category="utvandigt"
          faq={faq}
          images={[
            { src: "/images/back-yard-in-a-cozy-house-2022-03-02-19-15-34-utc-1.png", alt: "Villa med trädgård — där insektsskydd gör skillnad" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För fönster och dörrar
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Flugor och andra insekter kan vara ett gissel under vår, sommar
                och höst. De irriterar både människor och djur och smutsar ner
                möbler, golv och fönster. Med måttanpassat insektsskydd slipper
                du båda delarna.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Effektivt och estetiskt
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi erbjuder många typer av insektsskydd — våra experter ger råd
                om vilket som passar dina fönster och dörrar. Skyddet
                måttanpassas så att det blir effektivt samtidigt som det är
                estetiskt tilltalande.
              </p>
            </div>

            <InlineProductImage
              src="/images/open-door-leading-to-the-courtyard-of-the-house-2021-12-09-14-13-34-utc-1.png"
              alt="Öppna dörrar mot trädgård — där insektsskyddet kommer till sin rätt"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Anpassat efter dina behov
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vill du ha ett insektsskydd som tillåter att du har fönstret
                öppet utan besvär med mygg och andra insekter? Vi monterar
                insektsskyddet så att sommarens dofter och ljumma bris får
                tillträde medan insekter och ovälkomna kryp stoppas.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Transparent glasfiberväv
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi arbetar med tålig men transparent glasfiberväv med sidoskenor
                som håller skyddet säkert på plats. Väven är knappt synlig från
                insidan — sikten ut mot trädgården störs inte. Har du andra
                specifika behov hittar vi en lösning som fungerar.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsytt skydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Varje hem är unikt. Vare sig det gäller färg, storlek eller
                design ser vi till att insektsskyddet kompletterar ditt hems
                estetik — villan i Bulltofta, radhuset i Staffanstorp eller
                lägenheten med stor altan.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
