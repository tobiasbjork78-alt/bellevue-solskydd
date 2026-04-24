import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Persienner", href: "/persienner" },
  { label: "Markiser", href: "/markiser" },
  { label: "Plissegardiner", href: "/plissegardiner" },
  { label: "Rullgardiner", href: "/rullgardiner" },
  { label: "Kontakt", href: "/kontakt" },
];

const textStyle = { fontSize: "14px", fontWeight: 400, letterSpacing: "0.14px", lineHeight: 1.5 };
const smallLabelStyle = { fontSize: "13px", fontWeight: 500, letterSpacing: "0.13px" };

export default function Footer() {
  return (
    <footer className="bg-light-gray text-dark-gray" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <p className="label-uppercase text-black mb-2">Bellevue Solskydd</p>
            <p className="text-dark-gray" style={textStyle}>Kvalitet sedan 1982</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-dark-gray" style={textStyle}>
              <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>Satellitvägen 16<br />245 34 Staffanstorp</span>
            </div>
            <a
              href="tel:040181100"
              className="flex items-center gap-2 text-dark-gray hover:text-black transition-colors"
              style={textStyle}
            >
              <Phone className="w-4 h-4 text-black" strokeWidth={1.5} />
              040-18 11 00
            </a>
            <a
              href="mailto:info@bellevuesolskydd.se"
              className="flex items-center gap-2 text-dark-gray hover:text-black transition-colors break-all"
              style={textStyle}
            >
              <Mail className="w-4 h-4 text-black" strokeWidth={1.5} />
              info@bellevuesolskydd.se
            </a>
          </div>

          <div>
            <p className="text-black mb-3" style={smallLabelStyle}>Snabblänkar</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-dark-gray hover:text-black transition-colors"
                  style={textStyle}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-black mb-3" style={smallLabelStyle}>Serviceområde</p>
            <p className="text-dark-gray" style={textStyle}>
              Malmö, Limhamn, Staffanstorp, Lund, Lomma, Löddeköpinge,
              Vellinge, Höllviken, Ljunghusen, Falsterbo, Skanör, Trelleborg
            </p>
          </div>
        </div>

        <hr className="my-10" style={{ border: "0", borderTop: "1px solid rgba(0,0,0,0.05)" }} />

        <p className="text-center text-warm-gray" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.13px" }}>
          &copy;2026 Bellevue Solskydd. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
