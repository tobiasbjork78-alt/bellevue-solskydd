"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/cn";

const navInvandigt = [
  { label: "Persienner", href: "/persienner-malmo/" },
  { label: "Plisségardiner", href: "/plissegardiner-malmo/" },
  { label: "Rullgardiner", href: "/rullgardiner-malmo/" },
];

const navUtvandigt = [
  { label: "Markiser", href: "/markiser-malmo/" },
  { label: "Zip Screen", href: "/zip-screen-malmo/" },
  { label: "Pergola", href: "/pergola-malmo/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-500 ease-premium",
        scrolled
          ? "bg-canvas-soft/95 backdrop-blur-md border-b border-ink/8"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display uppercase tracking-[0.15em] text-base md:text-lg text-ink"
          >
            Bellevue Solskydd
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <NavGroup label="Invändigt" items={navInvandigt} />
            <NavGroup label="Utvändigt" items={navUtvandigt} />
            <Link
              href="/guider/"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              Guider
            </Link>
            <Link
              href="/om-oss/"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt/"
              className="text-ink-soft hover:text-ink transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button href="/kontakt/" size="sm">
              Boka rådgivning
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Öppna meny"
            className="lg:hidden text-ink"
          >
            <Menu size={24} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-canvas-soft lg:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display uppercase tracking-[0.15em] text-base text-ink">
              Bellevue Solskydd
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Stäng meny"
              className="text-ink"
            >
              <X size={24} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="px-6 pt-6 pb-12 space-y-8 overflow-y-auto h-[calc(100vh-5rem)]">
            <MobileGroup label="Invändigt" items={navInvandigt} onNavigate={() => setOpen(false)} />
            <MobileGroup label="Utvändigt" items={navUtvandigt} onNavigate={() => setOpen(false)} />
            <div className="space-y-4">
              <Link
                href="/guider/"
                onClick={() => setOpen(false)}
                className="block heading-section text-2xl text-ink"
              >
                Guider
              </Link>
              <Link
                href="/om-oss/"
                onClick={() => setOpen(false)}
                className="block heading-section text-2xl text-ink"
              >
                Om oss
              </Link>
              <Link
                href="/kontakt/"
                onClick={() => setOpen(false)}
                className="block heading-section text-2xl text-ink"
              >
                Kontakt
              </Link>
            </div>
            <Button href="/kontakt/" className="w-full" size="lg">
              Boka rådgivning
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavGroup({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-ink-soft hover:text-ink transition-colors"
      >
        {label}
        <ChevronDown size={14} strokeWidth={1.6} />
      </button>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-premium">
        <div className="min-w-[220px] rounded-soft bg-canvas-soft border border-ink/10 shadow-soft py-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-2 text-sm text-ink-soft hover:text-ink hover:bg-ink/3 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: Array<{ label: string; href: string }>;
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block heading-section text-2xl text-ink"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
