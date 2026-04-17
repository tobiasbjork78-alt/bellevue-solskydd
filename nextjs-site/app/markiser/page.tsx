import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/markiser";

export const metadata: Metadata = {
  title: "Markiser i Malmö — balkong och fasadmonterat | Bellevue Solskydd",
  description:
    "Måttanpassade markiser i Malmö. Balkongmarkiser, fasadmonterade terrassmarkiser, fönstermarkiser och korgmarkiser. Sänk temperaturen med upp till 10 °C. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade markiser?",
    a: "Ja, markiserna måttanpassas efter dina önskemål.",
  },
  {
    q: "Erbjuder ni gratis hembesök i Malmö?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö och södra Skåne där vi mäter, rådger och lämnar offert.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda markiserna efter dina önskemål.",
  },
  {
    q: "Vad kostar markiser?",
    a: "Priset varierar beroende på typ, dimensioner, materialval och hur omfattande installationen är. Kontakta oss för en offert anpassad efter dina förutsättningar.",
  },
  {
    q: "Går det att fasadmontera på lägenhetsbalkong i innerstan?",
    a: "Ofta ja — men det beror på fastighetens regler. Vi går igenom bygglovs- och bostadsrättsfrågor vid hembesöket och anpassar monteringen efter fasaden.",
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

export default function MarkiserPage() {
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
          title="Markiser i Malmö — balkong, fasad och innerstadsfastigheter"
          intro="Rätt markis kan sänka temperaturen på uteplats eller balkong med upp till 10 °C. Vi fasadmonterar på balkong i innerstan, på funkisvillan i Limhamn och på radhuset i Bunkeflostrand. Kostnadsfritt hembesök — vi går igenom förutsättningarna på plats."
          faq={faq}
          images={[
            { src: "/images/markiser_img1.png", alt: "Markis över uteplats" },
            { src: "/images/Markis-fran-Bellevue-Solskydd-1.png", alt: "Markis monterad på fasad" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Terrassmarkiser för balkong och uteplats
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Terrassmarkisen är det populäraste valet för balkonger och
                uteplatser. Med motordrift, fjärrstyrning och sensorer för sol
                och vind får du en smidig användning. Vi anpassar markisen för
                allt från lägenhetsbalkonger i Malmö innerstad till större
                fasadmonteringar på villa och radhus.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fasadmontering i innerstadsfastigheter
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Fasadmontage i innerstan ställer särskilda krav — fastighetens
                regler, bygglov och balkongens bärförmåga påverkar vilken
                lösning som fungerar. Vi har lång erfarenhet av montering i
                Malmös sekelskiftesfastigheter, funkishus och modernare
                bostadsrätter.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fönstermarkiser — stoppar solen innan den når glaset
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Fönstermarkisen monteras utanpå fönstret och stoppar upp till
                80 % av solstrålarna innan de når glaset. Det minskar
                temperaturen invändigt markant och ger en behagligare miljö utan
                att du behöver stänga ute ljuset helt.
              </p>
            </div>

            <InlineProductImage
              src="/images/exterior-shots-of-a-modern-terrace-with-dining-tab-2021-09-01-22-37-46-utc-1.jpg"
              alt="Markis över takvåningens matplats"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Korgmarkiser — klassisk design
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Korgmarkisen har en tidlös design som passar fasader i alla
                stilar. Populär för butiker, restauranger och bostäder som vill
                ge fasaden en klassisk känsla — vanligt i Malmös butiksgator
                och längs kanalstråken.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Zip Screen — maximalt skydd i vind
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen hålls på plats av sidoskenor och tål vind bättre än
                andra solskydd. Ger maximalt skydd mot sol, insekter och insyn —
                ett bra val för uteplatser som används hela säsongen.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Designa din markis
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj bland många olika mönster och färger på markisväven. Vi
                hjälper dig designa en markis som harmoniserar med fasaden och
                förstärker stilen på huset.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
