import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Persienner", href: "/persienner" },
  { label: "Markiser", href: "/markiser" },
  { label: "Plissegardiner", href: "/plissegardiner" },
  { label: "Rullgardiner", href: "/rullgardiner" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-base font-bold text-white tracking-[0.1em] uppercase mb-1">
              Bellevue Solskydd
            </p>
            <p className="text-sm">Kvalitet sedan 1982</p>
          </div>

          <div className="space-y-2">
            <a href="tel:040181100" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-teal" />
              040-18 11 00
            </a>
            <a href="mailto:info@bellevuesolskydd.se" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-teal" />
              info@bellevuesolskydd.se
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">Snabblänkar</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {links.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <p className="text-sm text-center">
          &copy;2026 Bellevue Solskydd. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
