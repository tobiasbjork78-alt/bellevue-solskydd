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

const navLinkClass =
  "flex items-center gap-1 text-dark-gray hover:text-black transition-colors py-2";
const navLinkStyle = { fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" };

const dropdownCardClass = "absolute left-0 top-full w-60 bg-white py-2 mt-1";
const dropdownCardStyle = {
  borderRadius: "16px",
  boxShadow:
    "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
};

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
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
    >
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
          <nav className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("inv")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "inv" ? null : "inv")}
                className={navLinkClass}
                style={navLinkStyle}
                aria-expanded={openDropdown === "inv"}
                aria-haspopup="true"
              >
                Invändigt solskydd
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "inv" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "inv" && (
                <div className={dropdownCardClass} style={dropdownCardStyle}>
                  {invandigtItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-2 text-dark-gray hover:text-black hover:bg-light-gray transition-colors"
                      style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("utv")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "utv" ? null : "utv")}
                className={navLinkClass}
                style={navLinkStyle}
                aria-expanded={openDropdown === "utv"}
                aria-haspopup="true"
              >
                Utvändigt solskydd
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "utv" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "utv" && (
                <div className={dropdownCardClass} style={dropdownCardStyle}>
                  {utvandigtItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-2 text-dark-gray hover:text-black hover:bg-light-gray transition-colors"
                      style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/kontakt" className="text-dark-gray hover:text-black transition-colors" style={navLinkStyle}>
              Kontakt
            </Link>

            <Link href="/kontakt" className="btn-black-pill">
              Boka hembesök
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-black"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="lg:hidden pb-4 pt-2 flex flex-col"
            style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
          >
            <button
              type="button"
              onClick={() => setMobileInv(!mobileInv)}
              className="flex items-center justify-between w-full py-3 text-dark-gray hover:text-black"
              style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" }}
              aria-expanded={mobileInv}
            >
              <span>Invändigt solskydd</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileInv ? "rotate-180" : ""}`} />
            </button>
            {mobileInv && (
              <div className="flex flex-col pl-4 mb-2" style={{ borderLeft: "2px solid var(--color-warm-stone)" }}>
                {invandigtItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="py-2 text-dark-gray hover:text-black"
                    style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.15px" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileUtv(!mobileUtv)}
              className="flex items-center justify-between w-full py-3 text-dark-gray hover:text-black"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.15px",
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
              aria-expanded={mobileUtv}
            >
              <span>Utvändigt solskydd</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileUtv ? "rotate-180" : ""}`} />
            </button>
            {mobileUtv && (
              <div className="flex flex-col pl-4 mb-2" style={{ borderLeft: "2px solid var(--color-warm-stone)" }}>
                {utvandigtItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="py-2 text-dark-gray hover:text-black"
                    style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.15px" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/kontakt"
              onClick={closeAll}
              className="py-3 text-dark-gray hover:text-black"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.15px",
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              Kontakt
            </Link>

            <Link href="/kontakt" onClick={closeAll} className="btn-black-pill text-center mt-3">
              Boka hembesök
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
