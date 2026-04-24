import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import GuaranteeBlock from "../components/GuaranteeBlock";

const pageUrl = "https://bellevuesolskydd.se/plissegardiner";

export const metadata: Metadata = {
  title: "Plissegardiner i Malmö — snedfönster & takvåning | Bellevue Solskydd",
  description:
    "Plissegardiner och mörkläggningsgardiner i Malmö. Måttanpassat för alla fönster, 10 års garanti. Kostnadsfritt hembesök i södra Skåne.",
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
          <GuaranteeBlock years={10} condition="Vid montering av våra montörer" />

          <section className="mb-12 space-y-8">
            <div>
              <h2 className="text-2xl text-black mb-3">
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
              <h2 className="text-2xl text-black mb-3">
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
              <h2 className="text-2xl text-black mb-3">
                Hållbar och smart funktion
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plissegardinen hissas och regleras med en kraftig draglina. En
                mekanism låser gardinen i önskat läge. Alternativt kan den
                motorstyras — Bellevue Solskydd erbjuder båda varianterna.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
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
              <h2 className="text-2xl text-black mb-3">
                Välj färg och material
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi erbjuder många kvaliteter på väv i olika färger och nyanser,
                så att du kan matcha din inredning. Solskyddsegenskaperna går från
                transparent ljusfilter till fullständig mörkläggning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Mörkläggningsgardiner — total ljusstopp
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Söker du en mörkläggningsgardin i Malmö som verkligen stänger ute
                allt ljus? Våra plissegardiner med aluminiumkärna och isolerande
                väv ger fullständig mörkläggning — perfekt för sovrummet,
                barnrummet eller hemmakontoret där du behöver total kontroll över
                ljuset.
              </p>
              <p className="text-mid-gray leading-relaxed mt-3">
                Plissé med mörkläggningsväv fungerar genom att det reflekterande
                aluminiumskiktet blockerar solstrålarna helt. Det ger inte bara
                mörkläggning utan också en isolerande effekt som håller värmen ute
                på sommaren och inne på vintern. I barnrummet säkerställer den att
                de små kan sova ostört även under ljusa sommarkvällar.
              </p>
              <p className="text-mid-gray leading-relaxed mt-3">
                Vi erbjuder mörkläggning för barnrum i flera färger och material.
                Samtliga vävar är barnsäkra och fria från skadliga ämnen. Vävarna
                rengörs enkelt med en fuktig trasa eller dammsugare med mjukt
                munstycke — gardinen behöver inte tas ner.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
