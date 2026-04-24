import {
  Blinds,
  Layers,
  ArrowDownFromLine,
  Columns3,
  PanelLeft,
  Shirt,
  TreePine,
  Bug,
  Sun,
  SolarPanel,
  Store,
  MonitorSmartphone,
  Fence,
  Wind,
  Umbrella,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
}

const indoorProducts: Product[] = [
  {
    icon: Blinds,
    title: "Persienner",
    description:
      "Bäst i Test-persiennen av Testfakta med betyg 4,6 av 5. Sju modeller, aluminium fritt från bly, krom och arsenik. Sidoskenor håller persiennen på plats mot fönstret. Min 23 cm, max 300 × 300 cm.",
    href: "/persienner",
    image: "/images/Persienner-img.webp",
    imageAlt: "Måttanpassade persienner",
    badge: "Bäst i Test",
  },
  {
    icon: Layers,
    title: "Plissegardiner",
    description:
      "Elegant solskydd för alla fönstertyper — även takfönster och snedtak. Montering mot vägg, fönsterram eller tak. Kraftig draglina med låsmekanism.",
    href: "/plissegardiner",
    image: "/images/Plissegardiner-980x551-1.jpg",
    imageAlt: "Plissegardin med mjukt ljusinsläpp",
  },
  {
    icon: ArrowDownFromLine,
    title: "Rullgardiner",
    description:
      "Från lätt ljusfilter till fullständig mörkläggning. Kulkedja, fjädermekanism eller inbyggd motor med smart hem-integration och röststyrning.",
    href: "/rullgardiner",
    image: "/images/Rullgardin-Bellevue.jpg",
    imageAlt: "Rullgardin närbild",
  },
  {
    icon: Columns3,
    title: "Lamellgardiner",
    description:
      "Klassiskt och funktionellt för större glaspartier. Enkel styrning av ljus och insyn. Passar kontor och hem.",
    href: "/lamellgardiner",
    image: "/images/Lamellgardiner-img.webp",
    imageAlt: "Lamellgardiner vid stort fönsterparti",
  },
  {
    icon: PanelLeft,
    title: "Panelgardiner",
    description:
      "Modernt alternativ för panoramafönster och som rumsavdelare. Smidigt sidledsystem med två till fem spår.",
    href: "/panelgardiner",
    image: "/images/Gardiner-img.webp",
    imageAlt: "Panelgardiner i svenskt hem",
  },
  {
    icon: Shirt,
    title: "Draperier",
    description:
      "Wavegardiner med mjuk vågeffekt. Passar sekelskifteslägenheter och höga tak. Manuell, lindrag eller motor.",
    href: "/draperier",
    image: "/images/Draperier-img.webp",
    imageAlt: "Draperi med mjuk vågeffekt",
  },
  {
    icon: TreePine,
    title: "Träpersienner",
    description:
      "FSC-certifierat trä i flera träslag och färger. Stilren inredningsdetalj som reglerar ljuset naturligt.",
    href: "/trapersienner",
    image: "/images/shutterstock_172695749-1024x576-1.jpg",
    imageAlt: "Träpersienner i vardagsrum",
  },
  {
    icon: Bug,
    title: "Insektsskydd",
    description:
      "Transparent glasfiberväv med sidoskenor som håller. Släpp in ljuset och luften — stäng ute insekterna.",
    href: "/insektsskydd",
    image: "/images/shutterstock_455819377-1024x576-1.jpg",
    imageAlt: "Insektsskydd vid villafönster",
  },
];

const outdoorProducts: Product[] = [
  {
    icon: Sun,
    title: "Terrassmarkiser",
    description:
      "Utöka din uteplats med upp till 10°C. Motordrift med sol- och vindsensorer. Anpassas för hem och företag.",
    href: "/terrassmarkiser",
    image: "/images/classic2.webp",
    imageAlt: "Terrassmarkis över uteplats",
  },
  {
    icon: SolarPanel,
    title: "Fönstermarkiser",
    description:
      "Fallarmsmarkis som stoppar upp till 80 % av solstrålarna innan de når glaset. Klassiker för funkisvillor och äldre bestånd.",
    href: "/fonstermarkiser",
    image: "/images/fonstermarkiser-vand.webp",
    imageAlt: "Fönstermarkis ovanför villafönster",
  },
  {
    icon: Store,
    title: "Korgmarkiser",
    description:
      "Klassisk markis med tidlös design. Passar fasader i alla stilar.",
    href: "/korgmarkiser",
    image: "/images/shutterstock_73378162-1024x576-1.jpg",
    imageAlt: "Klassisk korgmarkis på fasad",
  },
  {
    icon: MonitorSmartphone,
    title: "Zip Screen",
    description:
      "Maximalt skydd mot sol, insekter och insyn. Hålls på plats av sidoskenor även i vind.",
    href: "/zip-screen",
    image: "/images/zip-screen-img.webp",
    imageAlt: "Zip Screen över uteplats",
  },
  {
    icon: Fence,
    title: "Pergola",
    description:
      "Tak till din terrass — regnskydd och solskydd i ett. Fristående eller väggmonterad.",
    href: "/pergola",
    image: "/images/Pergola-artikel-1.jpg",
    imageAlt: "Pergola i villaträdgård",
  },
  {
    icon: Wind,
    title: "Vindskydd",
    description:
      "Glas och textilpaneler som förlänger utelivssäsongen.",
    href: "/vindskydd",
    image: "/images/shutterstock_456666382-1024x576-1.jpg",
    imageAlt: "Vindskydd för balkong och uteplats",
  },
  {
    icon: Umbrella,
    title: "Parasoller",
    description:
      "Från klassiska runda till vindstarka premiummodeller upp till 12×12 m. Uteserveringar, terrasser och trädgårdar.",
    href: "/parasoller",
    image: "/images/Parasoll_header_img.png",
    imageAlt: "Parasoll över uteplats",
  },
];

function CardInner({ product }: { product: Product }) {
  return (
    <>
      {product.image && (
        <div className="relative h-44 w-full overflow-hidden bg-light-gray" style={{ borderRadius: "20px 20px 0 0" }}>
          <Image
            src={product.image}
            alt={product.imageAlt || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.badge && (
            <span
              className="absolute top-3 left-3 bg-black text-white label-uppercase px-3 py-1"
              style={{ borderRadius: "9999px", fontSize: "10px", letterSpacing: "0.5px" }}
            >
              {product.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <product.icon className="w-4 h-4 text-black shrink-0" strokeWidth={1.5} />
          <h3 className="text-black" style={{ fontSize: "18px", fontWeight: 400, letterSpacing: "0.16px" }}>
            {product.title}
          </h3>
        </div>
        <p
          className="text-dark-gray mb-5 flex-1"
          style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "0.14px", lineHeight: 1.5 }}
        >
          {product.description}
        </p>
        <span
          className="inline-flex items-center text-black group-hover:opacity-70 transition-opacity"
          style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.14px" }}
        >
          {product.href ? "Läs mer" : "Kontakta oss"} →
        </span>
      </div>
    </>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const className = `animate-on-scroll stagger-${(index % 4) + 1} group card-surface flex flex-col overflow-hidden`;

  if (product.href) {
    return (
      <Link href={product.href} className={className}>
        <CardInner product={product} />
      </Link>
    );
  }

  return (
    <div className={className}>
      <CardInner product={product} />
    </div>
  );
}

export default function Products() {
  return (
    <section id="produkter" className="py-20 sm:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="text-center mb-14">
            <p className="label-uppercase text-warm-gray mb-3">Invändigt</p>
            <h2 className="text-black" style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.17 }}>
              Invändigt solskydd
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {indoorProducts.map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-14">
            <p className="label-uppercase text-warm-gray mb-3">Utvändigt</p>
            <h2 className="text-black" style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.17 }}>
              Utvändigt solskydd
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorProducts.map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
