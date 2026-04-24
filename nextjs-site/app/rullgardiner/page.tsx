import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import GuaranteeBlock from "../components/GuaranteeBlock";

const pageUrl = "https://bellevuesolskydd.se/rullgardiner";

export const metadata: Metadata = {
  title: "Rullgardiner i Malmö — ljusfilter till mörkläggning | Bellevue Solskydd",
  description:
    "Rullgardiner i Malmö — från ljusfilter till mörkläggande. Måttanpassat, 10 års garanti. Boka hembesök hos Bellevue Solskydd.",
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
          category="invandigt"
          guaranteeYears={10}
          faq={faq}
          images={[
            { src: "/images/Bellevue-rullgardin.jpg", alt: "Rullgardin i vardagsrum" },
          ]}
        >
          <GuaranteeBlock years={10} condition="Vid montering av våra montörer" />

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

            <InlineProductImage
              src="/images/Rullgardin-Bellevue.jpg"
              alt="Rullgardin — närbild på väv och överlist"
            />

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

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Mörkläggande rullgardin
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Behöver du en mörkläggande rullgardin för sovrummet eller
                barnrummet? Våra mörkläggande rullgardiner stänger ute ljuset
                helt — även under de ljusaste sommarnätterna. Väven har en
                ljusblockerande beläggning som ger total mörkläggning utan att
                kompromissa med designen.
              </p>
              <p className="text-mid-gray leading-relaxed mt-3">
                I barnrummet ger den mörkläggande rullgardinen bättre sömn
                för de små. Välj bland barnsäkra manöveralternativ utan
                lösa snören. Alla vävar är fria från skadliga ämnen och
                enkla att rengöra. Finns i en mängd färger som matchar
                barnrummets inredning.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
