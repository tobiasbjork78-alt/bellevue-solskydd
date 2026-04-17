"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Persienner", href: "/persienner" },
  { label: "Plissegardiner", href: "/plissegardiner" },
  { label: "Rullgardiner", href: "/rullgardiner" },
  { label: "Lamellgardiner", href: "/lamellgardiner" },
  { label: "Markiser", href: "/markiser" },
  { label: "Zip Screen", href: "/zip-screen" },
  { label: "Pergola", href: "/pergola" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="Bellevue Solskydd — till startsidan">
            <Image
              src="/images/brand/bellevue-solskydd-logo.webp"
              alt="Bellevue Solskydd"
              width={980}
              height={283}
              priority
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-mid-gray hover:text-teal transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-teal hover:bg-teal-dark text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Boka hembesök
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Öppna meny"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-mid-gray hover:text-teal py-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors text-center mt-2"
            >
              Boka hembesök
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
