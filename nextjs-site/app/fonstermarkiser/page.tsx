import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/fonstermarkiser";

export const metadata: Metadata = {
  title: "Fönstermarkiser i Malmö — funkisvilla & äldre bestånd | Bellevue Solskydd",
  description:
    "Måttanpassade fönstermarkiser i Malmö. Fallarmsmarkis som stoppar upp till 80 % av solen innan den når fönstret. Passar funkisvillor och äldre bestånd.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade fönstermarkiser?",
    a: "Ja, alla fönstermarkiser måttanpassas efter dina fönster.",
  },
  {
    q: "Passar fönstermarkiser på funkisvillor?",
    a: "Ja. Fönstermarkisen är den klassiska lösningen på funkisvillan där stora fönsterpartier tar emot mycket sol. Den är också vanlig på äldre bestånd i Malmö där fasaden gynnas av markisens retrokänsla.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig och ger tips och råd kring fönstermarkiser och hur de passar ditt hem.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda fönstermarkiserna efter dina önskemål.",
  },
  {
    q: "Vad kostar fönstermarkiser?",
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

export default function FonstermarkiserPage() {
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
          title="Fönstermarkiser i Malmö — funkisvillor och äldre bestånd"
          intro="På funkisvillan på Lorensborg eller trästaden i Kirseberg stoppar fönstermarkisen upp till 80 % av solstrålarna innan de når glaset. Klassisk fallarmsmarkis som ger svalare rum utan att du behöver dra för gardinerna."
          faq={faq}
          images={[
            { src: "/images/fonstermarkiser-vand.webp", alt: "Fönstermarkis monterad över fönster" },
            { src: "/images/fonstermarkiser-vand.png", alt: "Fönstermarkis i vänt utförande" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Stoppar solstrålningen
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Våra måttillverkade fönstermarkiser är fallarmsmarkiser. De
                stoppar upp till 80 % av solstrålarna redan innan de når
                fönsterrutan — därför passar fönstermarkisen dig som vill ha en
                behaglig invändig miljö även den soligaste dag.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fönstermarkiser för alla
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi levererar och monterar markiser för alla fönster — från det
                lilla fönstret i funkisvillan till seriekopplade installationer
                för industri- eller kontorskomplex. Du väljer själv om du vill
                ha skyddande kassett eller utan.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Motordriven eller bandreglage
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Valet är ditt: antingen motoriserade fönstermarkiser eller
                manuell hantering med band. Oavsett val får du ett pålitligt
                system som håller och är enkelt att manövrera.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Designa din markis själv
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj väv bland många olika mönster och färger. Fönstermarkisen
                har en retrokänsla som passar särskilt bra på fasader från det
                äldre beståndet — vi hjälper dig hitta ett mönster som smälter
                in med husets karaktär.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Enkel installation
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Våra montörer hanterar hela installationen. Vi kommer hem till
                dig i Malmö, mäter, och monterar på plats — oavsett om det
                handlar om ett enstaka fönster eller hela husets fasad.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
