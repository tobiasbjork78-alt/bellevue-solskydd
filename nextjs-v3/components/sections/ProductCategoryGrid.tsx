import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { ProductCard } from "@/components/molecules/ProductCard";

const indoor = [
  {
    title: "Persienner",
    description:
      "Måttanpassade persienner för hem och kontor. Dämpad lyster och mjukt ljus utan att helt stänga ute dagen.",
    href: "/persienner-malmo/",
    color: "persienner" as const,
  },
  {
    title: "Plissé",
    description:
      "Plissegardiner som följer fönstrets form. Svala på sommaren, isolerande på vintern.",
    href: "/plissegardiner-malmo/",
    color: "plisse" as const,
  },
  {
    title: "Rullgardiner",
    description:
      "Stilren rullgardin med fokus på tyg, fall och ljusgenomsläpp. Från transparent till mörkläggande.",
    href: "/rullgardiner-malmo/",
    color: "rullgardiner" as const,
  },
];

const outdoor = [
  {
    title: "Markiser",
    description:
      "Fasta och utfällbara markiser i färg och tyg som matchar fasaden. Kyler ner uterum och fönsterpartier.",
    href: "/markiser-malmo/",
    color: "markiser" as const,
  },
  {
    title: "Zip Screen",
    description:
      "Vindstabil utvändig screen som monteras direkt på fasaden. Effektivt skydd mot värme och insyn.",
    href: "/zip-screen-malmo/",
    color: "zipscreen" as const,
  },
  {
    title: "Pergola",
    description:
      "Pergola med justerbart tak — skugga när solen står högt, öppet himmelrum när den inte gör det.",
    href: "/pergola-malmo/",
    color: "pergola" as const,
  },
];

export function ProductCategoryGrid() {
  return (
    <section id="produkter" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <Eyebrow>Sortiment</Eyebrow>
          <h2 className="heading-section text-4xl md:text-5xl mt-5 text-ink">
            Solskydd som möter ljuset där det är.
          </h2>
          <Divider className="mt-7" />
          <p className="mt-7 body-copy text-ink-soft">
            Vi väljer lösning efter rummet, fasaden och hur ni faktiskt
            använder huset. Inte tvärtom.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-6">
            Invändigt solskydd
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {indoor.map((p) => (
              <ProductCard key={p.href} {...p} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-6">
            Utvändigt solskydd
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outdoor.map((p) => (
              <ProductCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
