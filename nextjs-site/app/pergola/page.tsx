import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/pergola";

export const metadata: Metadata = {
  title: "Pergola i Malmö & Svedala — uterum för trädgården | Bellevue Solskydd",
  description:
    "Måttanpassad pergola för villaträdgårdar i Malmö och Svedala. Regn- och solskydd i ett. Tak, sidoväggar, fristående eller väggmonterad. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan pergolan måttanpassas?",
    a: "Ja, pergolan måttanpassas efter dina önskemål. Vi anpassar storlek, tak- och väggutförande efter trädgården och husets arkitektur.",
  },
  {
    q: "Kan en pergola vara fristående?",
    a: "Ja, vi erbjuder både fristående och väggmonterade pergolor. Vanligt att man placerar en fristående mitt i trädgården i villaområdena i Svedala och Bunkeflostrand.",
  },
  {
    q: "Tål en pergola regn?",
    a: "Ja, en pergola med rätt tak ger regnskydd. Med pergolaväggar tillkommer skydd mot vind och indrev.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, mäter ut ytan och går igenom hur pergolan kan placeras. Erbjudandet gäller när vi är med från måttagning till montering.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar den måttbeställda pergolan efter dina önskemål.",
  },
  {
    q: "Vad kostar en pergola?",
    a: "Priset påverkas av materialval, storlek, design och eventuella specialtillval. Vi guidar dig genom alternativen så att pergolan uppfyller dina behov inom din budget.",
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

export default function PergolaPage() {
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
          title="Pergola i Malmö och Svedala — uterum för trädgården"
          intro="I villaträdgårdar i Malmö, Bunkeflostrand och Svedala förvandlar pergolan uteplatsen till ett riktigt uterum. Regnskydd, solskydd och rumsligheten du saknar när terrassen bara är en öppen yta. Fristående eller väggmonterad."
          faq={faq}
          images={[
            { src: "/images/pergola_img1.png", alt: "Pergola över uteplats" },
            { src: "/images/pergola-img-vand.png", alt: "Pergola i trädgård" },
            { src: "/images/low-angle-shot-of-a-pergola-wooden-ceiling-in-the-2023-01-17-15-51-35-utc-1.jpeg", alt: "Tak på pergola sett underifrån" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Pergolan är uterummet med möjligheter
              </h2>
              <p className="text-mid-gray leading-relaxed">
                En pergola är en utomhusstruktur som lyxar till uteplatsen och
                skapar ett extra rum i trädgården. Den ger skugga och luft till
                dig som vistas ute — och med rätt utförande förlänger du
                utesäsongen till långt in på hösten.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Välj mellan tak, väggar eller fristående
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Det finns många modeller och storlekar. På villatomten i Svedala
                är den fristående pergolan vanlig — du placerar den där du vill
                ha rumsligheten, oavsett hur huset ligger. På villan i Limhamn
                där uteplatsen ligger mot husfasaden blir den väggmonterade
                varianten en naturlig förlängning av huset.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Pergola med tak och väggar
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vill du ha extra skydd och komfort rekommenderar vi en pergola
                med tak och sidoväggar — en lösning som ger skydd mot både regn
                och vind där du kan njuta av uteplatsen även vid sämre väder.
                Vid soligt väder drar du undan väggarna och öppnar upp mot
                trädgården.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Vädersäker och vacker
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Pergolan byggs i en stark konstruktion av aluminium som ger ett
                modernt och gediget intryck. Den tål skånskt väder år efter år —
                vi använder material som är framtagna för nordiskt klimat.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Extrautrustning för utelivet
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Pergolan kan kompletteras med belysning, värmare, rullgardiner
                eller insynsskydd. Vi guidar dig genom alternativen på hembesöket
                så att du får en pergola som passar hur du vill använda den.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
