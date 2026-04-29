import Link from "next/link";
import { Divider } from "@/components/atoms/Divider";

const productLinks = [
  { label: "Markiser", href: "/markiser-malmo/" },
  { label: "Persienner", href: "/persienner-malmo/" },
  { label: "Plisségardiner", href: "/plissegardiner-malmo/" },
  { label: "Rullgardiner", href: "/rullgardiner-malmo/" },
  { label: "Zip Screen", href: "/zip-screen-malmo/" },
  { label: "Pergola", href: "/pergola-malmo/" },
];

const serviceLinks = [
  { label: "Rådgivning på plats", href: "/kontakt/" },
  { label: "Måttagning", href: "/kontakt/" },
  { label: "Montering", href: "/kontakt/" },
  { label: "Service & reparation", href: "/kontakt/" },
];

const aboutLinks = [
  { label: "Om oss", href: "/om-oss/" },
  { label: "Guider", href: "/guider/" },
];

export function Footer() {
  return (
    <footer className="bg-canvas-deep text-ink-inverse">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display uppercase tracking-[0.15em] text-lg mb-5">
              Bellevue Solskydd
            </p>
            <Divider tone="inverse" className="bg-brand-brass" />
            <p className="mt-5 body-copy text-sm text-ink-inverse/70 max-w-xs">
              Lokalt solskyddsföretag i Malmö med rådgivning, måttagning och
              montering i hela södra Skåne.
            </p>
          </div>
          <Column heading="Produkter" links={productLinks} />
          <Column heading="Tjänster" links={serviceLinks} />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-brass mb-4">
              Kontakt
            </p>
            <ul className="space-y-2 text-sm text-ink-inverse/80">
              <li>
                <a
                  href="tel:+46401811100"
                  className="hover:text-ink-inverse transition-colors"
                >
                  040-18 11 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bellevuesolskydd.se"
                  className="hover:text-ink-inverse transition-colors"
                >
                  info@bellevuesolskydd.se
                </a>
              </li>
              <li className="text-ink-inverse/70">
                Satellitvägen 16
                <br />
                245 34 Staffanstorp
              </li>
            </ul>
            <ul className="mt-6 space-y-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-inverse/80 hover:text-ink-inverse transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-inverse/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ink-inverse/60">
          <p>© {new Date().getFullYear()} Bellevue Solskydd</p>
          <p>Satellitvägen 16, 245 34 Staffanstorp</p>
        </div>
      </div>
    </footer>
  );
}

function Column({
  heading,
  links,
}: {
  heading: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-brass mb-4">
        {heading}
      </p>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={`${heading}-${link.label}`}>
            <Link
              href={link.href}
              className="text-ink-inverse/80 hover:text-ink-inverse transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
