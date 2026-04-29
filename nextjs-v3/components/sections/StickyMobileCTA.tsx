import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-ink/10 border-t border-ink/10 backdrop-blur">
        <a
          href="tel:+46401811100"
          className="flex items-center justify-center gap-2 bg-canvas-soft py-4 text-sm font-medium text-ink"
        >
          <Phone size={16} strokeWidth={1.6} />
          Ring 040-18 11 00
        </a>
        <Link
          href="/kontakt/"
          className="flex items-center justify-center gap-2 bg-brand-green py-4 text-sm font-medium text-ink-inverse"
        >
          <Calendar size={16} strokeWidth={1.6} />
          Boka rådgivning
        </Link>
      </div>
    </div>
  );
}
