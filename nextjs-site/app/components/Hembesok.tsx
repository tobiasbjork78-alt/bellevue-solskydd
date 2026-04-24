import { Phone } from "lucide-react";

export default function Hembesok() {
  return (
    <section id="hembesok" className="bg-warm-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-black mb-8"
            style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.17 }}
          >
            Kostnadsfritt hembesök — utan köptvång
          </h2>
          <p
            className="text-dark-gray mb-12"
            style={{ fontSize: "18px", fontWeight: 400, letterSpacing: "0.18px", lineHeight: 1.6 }}
          >
            Vi kommer hem till dig i Malmö, Limhamn, Staffanstorp, Lund,
            Lomma, Löddeköpinge, Vellinge, Höllviken, Ljunghusen,
            Falsterbo, Skanör och Trelleborg.
            Mäter, rådger och presenterar rätt alternativ för just ditt hem.
            Du bestämmer om du vill gå vidare.
          </p>
          <a href="tel:040181100" className="btn-black-pill" style={{ padding: "14px 24px", fontSize: "16px" }}>
            <Phone className="w-4 h-4" />
            Ring 040-18 11 00
          </a>
          <p
            className="mt-6 text-warm-gray"
            style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "0.14px" }}
          >
            Eller fyll i formuläret nedan — vi hör av oss inom 24h
          </p>
        </div>
      </div>
    </section>
  );
}
