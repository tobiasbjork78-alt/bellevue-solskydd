import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/zip-screen";

export const metadata: Metadata = {
  title: "Zip Screen i Malmö — vindtålig vertikalmarkis | Bellevue Solskydd",
  description:
    "Zip Screen i Malmö — balkongskydd och insynsskydd som tål vind. Måttanpassat för varje fönster. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Tål Zip Screen vind?",
    a: "Ja. Sidoskenorna håller duken på plats även i blåsigt väder — mer vindtålig än konventionella markiser och därför ett bra val för utsatta lägen nära kusten.",
  },
  {
    q: "Skyddar Zip Screen mot insekter?",
    a: "Ja, Zip Screen ger skydd mot insekter samtidigt som den skyddar mot sol och insyn.",
  },
  {
    q: "Kan man få måttanpassade Zip Screen?",
    a: "Ja, Zip Screen måttanpassas för varje fönster eller öppning.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar Zip Screen efter dina önskemål.",
  },
  {
    q: "Kan jag få kostnadsfritt hembesök?",
    a: "Ja. Vi kommer hem till dig i Malmö och södra Skåne, mäter och rådger på plats.",
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

export default function ZipScreenPage() {
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
          title="Zip Screen i Malmö — vindtålig vertikalmarkis"
          intro="För moderna villor i nyproduktion och uteplatser i Malmö, Hyllie, Bunkeflostrand och Vellinge. Zip Screen hålls på plats av sidoskenor även i vind — ett skydd mot sol och insyn som fungerar hela säsongen."
          category="utvandigt"
          faq={faq}
          images={[
            { src: "/images/Zip-screen-img-vand.png", alt: "Zip Screen vertikalmarkis" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="text-2xl text-black mb-3">
                Zip Screen mot värme och insyn
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen är en vertikalmarkis som stoppar solstrålningen innan
                den når fönsterrutan — ger svalare invändig miljö och tillvaratar
                insynsskyddet. Särskilt effektiv på stora glaspartier i modern
                nyproduktion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Sidoskenor som håller i vind
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Till skillnad från vanliga markiser sitter Zip Screen fast i
                sidoskenor som håller duken på plats även i blåsigt väder. Det
                gör den särskilt bra för kustnära lägen i Vellinge och för
                utsatta uteplatser i Malmö.
              </p>
            </div>

            <InlineProductImage
              src="/images/zip-screen-img.webp"
              alt="Zip Screen nedrullad på uteplats"
            />

            <div>
              <h2 className="text-2xl text-black mb-3">
                Måttanpassad för varje fönster
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen måttanpassas efter ditt fönster eller din öppning.
                Vi monterar både på enstaka fönster och på större partier — med
                motordrift som standard för smidig hantering.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Många valmöjligheter
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj mellan olika väv-kvaliteter och färger. Materialet är
                tåligt och håller över tid, både mot solens UV-strålning och
                mot vindbelastning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Trippelt skydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen ger dig tre skydd i ett: solskydd, insektsskydd och
                insynsskydd. Ett bra val för uteplatser, altaner och balkonger
                där du vill kunna njuta av livet ute utan störande insekter.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Balkongskydd och insynsskydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Letar du efter balkongskydd i Malmö som skyddar mot både insyn
                och sol? Zip Screen fungerar som ett effektivt insynsskydd för
                balkong — du ser ut, men grannar och förbipasserande ser inte in.
                Väven finns i olika täthetsgrader så att du kan välja hur mycket
                sikt du vill behålla. Särskilt populärt i flerbostadshus i
                Limhamn, Hyllie och centrala Malmö där balkongerna ligger nära
                varandra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black mb-3">
                Vindskydd för balkong
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Sidoskenorna gör Zip Screen till ett vindskydd för uteplats som
                håller även i byig vind från Öresund. Till skillnad från fristående
                vindskydd sitter Zip Screen fast i fasaden och kan rullas upp när
                den inte behövs. Det gör den till ett praktiskt vindskydd för
                balkonger och altaner i havsnära lägen som Höllviken och Falsterbo.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
