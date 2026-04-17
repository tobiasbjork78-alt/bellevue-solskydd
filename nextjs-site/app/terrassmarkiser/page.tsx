import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/terrassmarkiser";

export const metadata: Metadata = {
  title: "Terrassmarkiser i Malmö — motordrift & sensorer | Bellevue Solskydd",
  description:
    "Måttanpassade terrassmarkiser i Malmö och Trelleborg. Södervända villaterrasser, motordrift och sol-/vindsensorer. Sänk temperaturen med upp till 10 °C.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade terrassmarkiser?",
    a: "Ja, alla terrassmarkiser måttanpassas efter dina önskemål.",
  },
  {
    q: "Har markiserna motordrift?",
    a: "Ja, våra terrassmarkiser finns med motordrift, fjärrstyrning och automatiska sensorer för sol och vind.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja, en solskyddsexpert kommer hem till dig och ger tips och råd kring vilka terrassmarkiser som passar. Erbjudandet gäller när vi är med från måttagning till montering.",
  },
  {
    q: "Ingår montering av terrassmarkiserna?",
    a: "Ja, vi levererar och monterar de måttbeställda terrassmarkiserna efter dina önskemål.",
  },
  {
    q: "Vad kostar en terrassmarkis?",
    a: "Priset varierar beroende på dimensioner, materialval och hur omfattande installationen är. Kontakta oss för en offert anpassad efter dina förutsättningar.",
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

export default function TerrassmarkiserPage() {
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
          title="Terrassmarkiser i Malmö — för södervända uteplatser"
          intro="På södervända villaterrasser i Malmö, Limhamn och Trelleborg gör terrassmarkisen hela skillnaden. Utöka utesäsongen, sänk temperaturen med upp till 10 °C och få skugga som följer solens gång. Motordrift, fjärrstyrning och sensorer för sol och vind."
          faq={faq}
          images={[
            { src: "/images/classic2.webp", alt: "Terrassmarkis på villa" },
            { src: "/images/exterior-shots-of-a-modern-terrace-with-dining-tab-2021-09-01-22-37-46-utc-1.jpg", alt: "Terrassmarkis över takvåningens matplats" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Terrassmarkiser monterade och säkra
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Med markisen får du inte bara ett skydd mot solens strålar, utan
                också en förlängning av boendet där du kan njuta av friska brisar
                med komfort. Vi levererar och monterar — på villor och radhus
                lika väl som på terrasser i kustnära lägen kring Trelleborg.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Motordrift och sensorer
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Våra terrassmarkiser finns med motordrift, fjärrstyrning och
                automatiska sensorer för sol och vind. Markisen fälls automatiskt
                ut vid stark sol och rullas in vid hård vind — särskilt värdefullt
                för södervända lägen som tar emot både sol och sjöbris.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Välj takprofilering eller kassett
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Väven kan skyddas i en kassett som skydd mot väder och smuts, eller
                monteras med takprofilering för ett lägre pris. Vi går igenom för-
                och nackdelar på hembesöket.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Design och materialval
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj bland många mönster och färger på markisväven. Vi hjälper
                dig designa en markis som harmoniserar med ditt hem och förstärker
                stilen. Fokus på hållbarhet, design och kvalitet — markisväven ska
                klara nordiskt klimat år efter år.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För hem och företag
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi levererar och monterar markiser för alla behov — från den
                enskilda villaterrassen till seriekopplade installationer för
                kontor och restaurang.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
