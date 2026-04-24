import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/lamellgardiner";

export const metadata: Metadata = {
  title: "Lamellgardiner i Malmö — stora fönsterpartier | Bellevue Solskydd",
  description:
    "Lamellgardiner i Malmö för villor och kontor. Stora fönsterpartier, måttanpassat. Kostnadsfritt hembesök från Bellevue Solskydd.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade lamellgardiner?",
    a: "Ja, alla lamellgardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Passar lamellgardiner för stora fönsterpartier?",
    a: "Ja. Lamellgardinen är särskilt bra för stora fönsterytor och skjutdörrar — vanligt i villor och radhus i Malmö och Staffanstorp. Varje lamell vrids individuellt så du får full kontroll över ljusinsläppet.",
  },
  {
    q: "Erbjuder ni kostnadsfritt hembesök?",
    a: "Ja, en solskyddsexpert ger tips och råd kring lamellgardiner och hur de passar ditt hem. Erbjudandet gäller när Bellevue Solskydd är med från måttagning till montering.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda lamellgardinerna efter dina önskemål.",
  },
  {
    q: "Vad kostar lamellgardiner?",
    a: "Priset bestäms utifrån storlek, material och om du vill ha motordrift eller manuell styrning. Kontakta oss för en offert anpassad efter dina förutsättningar.",
  },
  {
    q: "Passar lamellgardiner också i kontor?",
    a: "Ja, lamellgardiner är ett populärt val för kontorsmiljöer tack vare enkel styrning av ljus och insyn samt ett diskret, professionellt utseende.",
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

export default function LamellgardinerPage() {
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
          title="Lamellgardiner i Malmö — för stora fönsterpartier"
          intro="För villor och radhus med stora fönsterpartier och altandörrar. Lamellgardinen ger dig full kontroll över ljuset — vrid lamellerna för precis så mycket ljus eller insyn som du vill ha. Vanlig lösning i radhusområden kring Malmö och Staffanstorp."
          category="invandigt"
          faq={faq}
          images={[
            { src: "/images/vertical-blinds-outside-the-window-2021-08-28-11-59-36-utc-1.jpg", alt: "Lamellgardin från utsidan" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Enkel styrning av ljus och insyn
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardiner ger dig full kontroll över ljusinsläppet med en
                enkel vridmekanism. Vrid lamellerna för att släppa in precis så
                mycket ljus som du vill, eller stäng helt för maximalt
                insynsskydd. Fungerar utmärkt på stora glaspartier och skjutdörrar.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsydda lösningar för dina behov
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardinen är dels ett effektivt insynsskydd, men fungerar även
                som anpassningsbar rumsavdelare. Konstruktionen gör gardinen till
                ett vackert och stilrent inslag i rummet, och den är väldigt enkel
                att rengöra — en regelbunden avtorkning räcker.
              </p>
            </div>

            <InlineProductImage
              src="/images/Lamellgardiner-img.webp"
              alt="Lamellgardin i stort fönsterparti"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Designa din atmosfär med färg och struktur
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj bland ett brett utbud av vävar i olika färger och transparens —
                från ljusfiltrerande till mörkläggande. Vi hjälper dig hitta rätt
                material för just ditt utrymme. Lamellerna kan få kompletterande
                färger i stegband och snördropp.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För villor och kontor
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardiner är ett av de mest populära solskydden för
                kontorsmiljöer tack vare sitt diskreta utseende och enkla hantering.
                I hemmiljö är de särskilt tacksamma vid stora fönsterpartier och
                altandörrar i villor och radhus.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Monteras med precision
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardinerna monteras med precision av våra utbildade
                installatörer. Vi kommer hem till dig, mäter och presenterar en
                lösning som passar fönsterpartiet exakt.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
