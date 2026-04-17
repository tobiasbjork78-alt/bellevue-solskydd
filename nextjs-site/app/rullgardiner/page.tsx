import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/rullgardiner";

export const metadata: Metadata = {
  title: "Rullgardiner i Malmö — ljusfilter till mörkläggning | Bellevue Solskydd",
  description:
    "Måttanpassade rullgardiner i Malmö för hemmakontoret, butiken eller lägenheten. Från transparent ljusfilter till fullständig mörkläggning. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade rullgardiner?",
    a: "Ja, alla rullgardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Erbjuder ni gratis hembesök i Malmö?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö och södra Skåne. En solskyddsexpert ger tips och råd kring vilka rullgardiner som passar ditt hem.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda rullgardinerna efter dina önskemål.",
  },
  {
    q: "Kan jag styra rullgardinerna med mobilen?",
    a: "Ja. Med motordrift går det att integrera mot smart hem-system och styra via app, röstkommando eller tidsinställning.",
  },
  {
    q: "Fungerar rullgardiner till butik och hemmakontor?",
    a: "Ja. I butik används rullgardiner ofta för skyltfönster och bakre rum. I hemmakontoret hjälper de att dämpa reflexer i skärmen och ge kontrollerat ljus under arbetsdagen.",
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

export default function RullgardinerPage() {
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
          title="Rullgardiner i Malmö — från ljusfilter till mörkläggning"
          intro="För hemmakontoret i lägenheten, skyltfönstret i butiken på Södra Förstadsgatan eller sovrummet i radhuset. Välj exakt hur mycket ljus du vill ha — från transparent ljusfilter till fullständig mörkläggning."
          faq={faq}
          images={[
            { src: "/images/Rullgardin-Bellevue.jpg", alt: "Rullgardin — närbild" },
            { src: "/images/room-with-sunlight-coming-through-the-blinds-2023-06-15-22-23-44-utc-scaled.jpg", alt: "Sollljus genom rullgardin" },
            { src: "/images/Bellevue-rullgardin.jpg", alt: "Rullgardin i vardagsrum" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Måttanpassade rullgardiner med montering
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Rullgardinen är en favorit bland husägare sedan länge, och det är
                inte svårt att förstå varför. Eleganta och funktionella solskydd
                som passar en stor bredd av fönster. Vi skräddarsyr rullgardinerna
                efter dina önskemål och monterar dem på plats.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Styrning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Kulkedja", desc: "Klassisk manuell styrning. Enkel och driftsäker." },
                  { title: "Fjädermekanism", desc: "Smidig upp- och nerrullning med fjäderdriven mekanism." },
                  { title: "Inbyggd motor", desc: "Motoriserad styrning med möjlighet till fjärrkontroll och smart hem-integration." },
                ].map((item) => (
                  <div key={item.title} className="bg-light-bg border border-border rounded-lg p-5">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-sm text-mid-gray">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Hemmakontor, butik eller lägenhet
              </h2>
              <p className="text-mid-gray leading-relaxed">
                I lägenheten ger rullgardinen diskret insynsskydd utan att ta
                utrymme. I hemmakontoret rullar du ner gardinen när solen skiner
                in i skärmen och rullar upp när det blivit överskyet. I butiken
                används mörkläggande rullgardiner både till skyltfönster efter
                stängning och till bakre rum där dagsljuset behöver stängas av
                helt.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Smart hem
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Med motoriserade rullgardiner kan du integrera med ditt smart
                hem-system. Styr via röstkommando, app eller tidsinställning — en
                enkel knapptryckning räcker.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Montering
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Rullgardinerna kan monteras på väggen, i fönsterkarmen eller i
                taket. Välj bland en mängd olika färger, mönster och material —
                från transparent ljusfilter till fullständig mörkläggning.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
