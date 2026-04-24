"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type NavItem = { label: string; href: string };

const invandigtItems: NavItem[] = [
  { label: "Persienner", href: "/persienner" },
  { label: "Träpersienner", href: "/trapersienner" },
  { label: "Plissegardiner", href: "/plissegardiner" },
  { label: "Rullgardiner", href: "/rullgardiner" },
  { label: "Lamellgardiner", href: "/lamellgardiner" },
  { label: "Panelgardiner", href: "/panelgardiner" },
  { label: "Draperier", href: "/draperier" },
];

const utvandigtItems: NavItem[] = [
  { label: "Markiser", href: "/markiser" },
  { label: "Terrassmarkiser", href: "/terrassmarkiser" },
  { label: "Fönstermarkiser", href: "/fonstermarkiser" },
  { label: "Zip Screen", href: "/zip-screen" },
  { label: "Pergola", href: "/pergola" },
  { label: "Parasoller", href: "/parasoller" },
  { label: "Insektsskydd", href: "/insektsskydd" },
  { label: "Korgmarkiser", href: "/korgmarkiser" },
  { label: "Vindskydd", href: "/vindskydd" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"inv" | "utv" | null>(null);
  const [mobileInv, setMobileInv] = useState(false);
  const [mobileUtv, setMobileUtv] = useState(false);

  function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileInv(false);
    setMobileUtv(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Bellevue Solskydd — till startsidan"
            onClick={closeAll}
          >
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
          <nav className="hidden lg:flex items-center gap-5">
            {/* Invändigt dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("inv")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "inv" ? null : "inv")}
                className="flex items-center gap-1 text-mid-gray hover:text-teal transition-colors text-sm font-medium py-2"
                aria-expanded={openDropdown === "inv"}
                aria-haspopup="true"
              >
                Invändigt solskydd
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "inv" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "inv" && (
                <div className="absolute left-0 top-full w-60 bg-white border border-border rounded-md shadow-lg py-2">
                  {invandigtItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-mid-gray hover:text-teal hover:bg-light-bg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Utvändigt dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("utv")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "utv" ? null : "utv")}
                className="flex items-center gap-1 text-mid-gray hover:text-teal transition-colors text-sm font-medium py-2"
                aria-expanded={openDropdown === "utv"}
                aria-haspopup="true"
              >
                Utvändigt solskydd
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "utv" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "utv" && (
                <div className="absolute left-0 top-full w-60 bg-white border border-border rounded-md shadow-lg py-2">
                  {utvandigtItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-mid-gray hover:text-teal hover:bg-light-bg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/kontakt"
              className="text-mid-gray hover:text-teal transition-colors text-sm font-medium"
            >
              Kontakt
            </Link>

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
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-2 flex flex-col">
            {/* Invändigt mobil */}
            <button
              type="button"
              onClick={() => setMobileInv(!mobileInv)}
              className="flex items-center justify-between w-full py-3 text-mid-gray hover:text-teal text-sm font-semibold"
              aria-expanded={mobileInv}
            >
              <span>Invändigt solskydd</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileInv ? "rotate-180" : ""}`} />
            </button>
            {mobileInv && (
              <div className="flex flex-col pl-4 border-l-2 border-teal-light mb-2">
                {invandigtItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="py-2 text-sm text-mid-gray hover:text-teal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Utvändigt mobil */}
            <button
              type="button"
              onClick={() => setMobileUtv(!mobileUtv)}
              className="flex items-center justify-between w-full py-3 text-mid-gray hover:text-teal text-sm font-semibold border-t border-border"
              aria-expanded={mobileUtv}
            >
              <span>Utvändigt solskydd</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileUtv ? "rotate-180" : ""}`} />
            </button>
            {mobileUtv && (
              <div className="flex flex-col pl-4 border-l-2 border-teal-light mb-2">
                {utvandigtItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="py-2 text-sm text-mid-gray hover:text-teal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/kontakt"
              onClick={closeAll}
              className="py-3 text-sm text-mid-gray hover:text-teal font-semibold border-t border-border"
            >
              Kontakt
            </Link>

            <Link
              href="/kontakt"
              onClick={closeAll}
              className="bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors text-center mt-3"
            >
              Boka hembesök
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
