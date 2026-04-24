import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/korgmarkiser";

export const metadata: Metadata = {
  title: "Korgmarkiser i Malmö — klassisk design för butik & villa | Bellevue Solskydd",
  description:
    "Måttanpassade korgmarkiser i Malmö. Fast eller fällbar korg i hållbar, vädertålig väv. Sekelskiftesfasader, butiker och restauranger. 3 års garanti vid montering.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade korgmarkiser?",
    a: "Ja, korgmarkiserna måttanpassas efter dina fönster och fasadmått.",
  },
  {
    q: "Passar korgmarkiser på en villa?",
    a: "Korgmarkiser förknippas ofta med butiker och restauranger, men de passar lika bra på en villa — särskilt sekelskiftesfastigheter och funkishus med karaktärsfasader.",
  },
  {
    q: "Kan ni trycka logotyp på korgmarkisen?",
    a: "Ja, vi trycker gärna din logotyp eller annat budskap på väven. Populärt bland butiker, restauranger och hotell.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, mäter fasaden och ger råd om design och färgval — utan köptvång.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar korgmarkiserna. Montering utförs av våra specialister.",
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

export default function KorgmarkiserPage() {
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
          title="Korgmarkiser i Malmö — klassisk design"
          intro="Korgmarkisen är en tidlös klassiker som pryder fasader i hela Malmö — från sekelskifteshus i innerstaden till butiker och restauranger längs gågatan. Med sin rundade form ger den effektivt sol- och värmeskydd från alla sidor, samtidigt som den tillför karaktär och elegans."
          faq={faq}
          images={[
            { src: "/images/shutterstock_73378162-1024x576-1.jpg", alt: "Korgmarkis på fasad — klassisk design" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Korgmarkiser ger effektivt sol- och värmeskydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Genom sin konstruktion skyddar korgmarkisen mot solen från alla
                sidor och ger därför ett särskilt effektivt sol- och värmeskydd.
                Den rundade formen skapar ett naturligt luftflöde som håller
                temperaturen nere bakom fönstret. Korgmarkiser är dessutom extra
                stabila i sin konstruktion och tål väl de vindar som drar in från
                Öresund.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För butiker, restauranger och villor
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Korgmarkiser är vanligast som solskydd för butiker, restauranger
                och hotell. Men de passar lika bra på en privat villa och ger
                fasaden en personlig och exklusiv prägel. Väljer du korgmarkiser
                till din butik eller restaurang trycker vi gärna din logotyp
                eller annat budskap på den hållbara väven.
              </p>
            </div>

            <InlineProductImage
              src="/images/exterior-shots-of-a-modern-terrace-with-dining-tab-2021-09-01-22-37-46-utc-1.jpg"
              alt="Markis över uteservering — skydd och stil"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Sekelskiftesfasader i Malmö
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Malmös innerstadsfasader — längs Davidshallsgatan, i Rörsjöstaden
                och runt Möllevångstorget — har en arkitektur som förhöjs av
                korgmarkisens klassiska silhuett. Den rundade formen kompletterar
                äldre fasader utan att konkurrera med originaldetaljerna. Vi
                anpassar färg och mönster efter fasadens karaktär.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsydda och säkert monterade
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Korgmarkiserna från Bellevue Solskydd är ett äkta hantverk. Du
                väljer fast eller fällbar korg, färg och mönster på den hållbara
                och vädertåliga väven. Sedan tillverkar vi markiserna helt efter
                måtten på varje fönster. Montering ingår och utförs av våra
                specialister.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fast eller fällbar korg
              </h2>
              <p className="text-mid-gray leading-relaxed">
                En fast korgmarkis sitter uppe året runt och ger ett dekorativt
                intryck även vintertid. En fällbar korgmarkis kan fällas in
                vid behov — praktiskt om du vill maximera dagsljuset under de
                mörkare månaderna. Vi hjälper dig välja rätt modell utifrån
                fasad, väderstreck och hur du använder utrymmet.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
