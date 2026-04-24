import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/plissegardiner";

export const metadata: Metadata = {
  title: "Plissegardiner i Malmö — snedfönster & takvåning | Bellevue Solskydd",
  description:
    "Måttanpassade plissegardiner i Malmö. Passar snedfönster, takvåningar och nybyggen. Avskärma ljuset från botten, toppen eller hela fönstret. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade plissegardiner?",
    a: "Ja, alla plissegardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Passar plissegardiner för snedfönster och takfönster?",
    a: "Ja. Plissegardinen är flexibel och fungerar på snedfönster, takfönster och fönster med ovanliga format — vanligt i takvåningar och nybyggen i Malmö och Vellinge.",
  },
  {
    q: "Erbjuder ni kostnadsfritt hembesök?",
    a: "Ja, en solskyddsexpert kommer hem till dig, ger tips och råd kring plissegardiner och hur de passar ditt hem. Erbjudandet gäller när vi är med från måttagning till montering.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda plissegardinerna efter dina önskemål.",
  },
  {
    q: "Vad kostar plissegardiner?",
    a: "Priset varierar beroende på val av väv och antal gardiner. Kontakta oss för en offert anpassad efter dina förutsättningar.",
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

export default function PlissegardinerPage() {
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
          title="Plissegardiner i Malmö — eleganta för alla fönstertyper"
          intro="Plissegardinen passar snedfönster, takfönster och ovanliga format. Vanligt i takvåningar på Väster, nybyggen i Hyllie och fritidshus i Vellinge. Avskärma ljuset från botten, toppen eller över hela fönstret."
          category="invandigt"
          guaranteeYears={10}
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Plisségardinen är ett elegant solskydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plisségardinen är ett elegant och modernt val som gör sig lika rätt
                i hemmet som på kontoret. En av gardinens fördelar är hur flexibel
                den är — du kan avskärma ljus från toppen eller botten av fönstret,
                eller över hela ytan. Den ger ett mjukt, rogivande ljusinsläpp som
                passar alla typer av rum.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skydd mot ljus och insyn
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plissegardinen fungerar som insynsskydd utan att göra rummet
                mörkläggande — en perfekt balans mellan ljusreglering och privatliv.
                Materialval och tjocklek styr hur mycket ljus som släpps in. Välj
                mjuka tyger för ljus och luftig känsla, eller mörkläggande tyger
                för sovrum.
              </p>
            </div>

            <InlineProductImage
              src="/images/Plissegardiner-980x551-1.webp"
              alt="Plissegardin med mjukt ljusinsläpp"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Hållbar och smart funktion
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plissegardinen hissas och regleras med en kraftig draglina. En
                mekanism låser gardinen i önskat läge. Alternativt kan den
                motorstyras — Bellevue Solskydd erbjuder båda varianterna.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För takvåningar och snedfönster
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Det som gör plissegardinen unik är att den kan måttanpassas för
                fönster som ingen annan gardin klarar — snedfönster i vindsvåningen,
                triangulära fönsterpartier, takfönster i nybyggen. Vi mäter på plats
                i Malmö och Vellinge och tar fram en lösning som faktiskt passar.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Välj färg och material
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi erbjuder många kvaliteter på väv i olika färger och nyanser,
                så att du kan matcha din inredning. Solskyddsegenskaperna går från
                transparent ljusfilter till fullständig mörkläggning.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
