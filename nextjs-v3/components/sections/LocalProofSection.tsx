import { Wrench, ShieldCheck, Home, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { TrustBadge } from "@/components/molecules/TrustBadge";

const items = [
  {
    icon: Home,
    title: "Lokal montering",
    description: "Egna montörer i Malmö med omnejd.",
  },
  {
    icon: ShieldCheck,
    title: "Garanti",
    description: "Tydlig garanti på produkt och installation.",
  },
  {
    icon: Wrench,
    title: "Kostnadsfritt hembesök",
    description: "Vi mäter och rådger utan kostnad.",
  },
  {
    icon: MessageCircle,
    title: "Rådgivning på plats",
    description: "Förslag som utgår från fönstret, inte katalogen.",
  },
];

export function LocalProofSection() {
  return (
    <section className="bg-canvas-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <Eyebrow>Lokalt i Malmö</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Personlig rådgivning. Lokala montörer.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <TrustBadge
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="reveal"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
