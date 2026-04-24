"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const productOptions = [
  "Persienner",
  "Plissegardiner",
  "Rullgardiner",
  "Lamellgardiner",
  "Panelgardiner",
  "Draperier",
  "Träpersienner",
  "Insektsskydd",
  "Terrassmarkiser",
  "Fönstermarkiser",
  "Korgmarkiser",
  "Zip Screen",
  "Pergola",
  "Vindskydd",
  "Parasoller",
];

const labelStyle = { fontSize: "14px", fontWeight: 500, letterSpacing: "0.14px" };
const inputClass =
  "w-full px-4 py-3 bg-white text-black placeholder:text-warm-gray focus:outline-none transition-colors";
const inputStyle = {
  borderRadius: "12px",
  boxShadow: "rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset",
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "0.16px",
};
const infoCardStyle = {
  borderRadius: "20px",
  boxShadow:
    "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-black" style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.17 }}>
            Kontakta oss
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-white" style={infoCardStyle}>
            <Phone className="w-5 h-5 text-black mb-3" strokeWidth={1.5} />
            <p className="text-warm-gray mb-1" style={{ fontSize: "13px", fontWeight: 500 }}>
              Telefon
            </p>
            <a
              href="tel:040181100"
              className="text-black hover:opacity-70 transition-opacity"
              style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "0.16px" }}
            >
              040-18 11 00
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white" style={infoCardStyle}>
            <Mail className="w-5 h-5 text-black mb-3" strokeWidth={1.5} />
            <p className="text-warm-gray mb-1" style={{ fontSize: "13px", fontWeight: 500 }}>
              E-post
            </p>
            <a
              href="mailto:info@bellevuesolskydd.se"
              className="text-black hover:opacity-70 transition-opacity break-all"
              style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "0.16px" }}
            >
              info@bellevuesolskydd.se
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white" style={infoCardStyle}>
            <MapPin className="w-5 h-5 text-black mb-3" strokeWidth={1.5} />
            <p className="text-warm-gray mb-1" style={{ fontSize: "13px", fontWeight: 500 }}>
              Besöksadress
            </p>
            <p className="text-black" style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "0.16px" }}>
              Satellitvägen 16
            </p>
            <p className="text-dark-gray" style={{ fontSize: "14px", letterSpacing: "0.14px" }}>
              245 34 Staffanstorp
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white" style={infoCardStyle}>
            <MapPin className="w-5 h-5 text-black mb-3" strokeWidth={1.5} />
            <p className="text-warm-gray mb-1" style={{ fontSize: "13px", fontWeight: 500 }}>
              Serviceområde
            </p>
            <p className="text-black" style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "0.14px", lineHeight: 1.5 }}>
              Malmö, Lund, Staffanstorp, Lomma, Vellinge, Trelleborg m.fl.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle className="w-12 h-12 text-black mb-5" strokeWidth={1.5} />
                <h3 className="text-black mb-3" style={{ fontSize: "28px", fontWeight: 300, letterSpacing: "-0.01em" }}>
                  Tack för din förfrågan!
                </h3>
                <p className="text-dark-gray" style={{ fontSize: "16px", letterSpacing: "0.16px" }}>
                  Vi hör av oss inom 24 timmar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />

                <div>
                  <label htmlFor="name" className="block text-black mb-2" style={labelStyle}>
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Ditt namn"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-black mb-2" style={labelStyle}>
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClass}
                      style={inputStyle}
                      placeholder="070-000 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-black mb-2" style={labelStyle}>
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      style={inputStyle}
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-black mb-2" style={labelStyle}>
                    Intresserad av
                  </label>
                  <select
                    id="product"
                    name="product"
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Välj produkt (valfritt)</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-black mb-2" style={labelStyle}>
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputClass} resize-y`}
                    style={inputStyle}
                    placeholder="Beskriv vad du behöver hjälp med..."
                  />
                </div>

                <button type="submit" className="btn-black-pill" style={{ padding: "12px 22px" }}>
                  <Send className="w-4 h-4" />
                  Skicka förfrågan
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-warm-stone p-7 sticky top-24" style={{ borderRadius: "20px" }}>
              <h3 className="text-black mb-5" style={{ fontSize: "20px", fontWeight: 300, letterSpacing: "-0.01em" }}>
                Vill du hellre ringa eller maila?
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:040181100"
                  className="flex items-center gap-3 text-black hover:opacity-70 transition-opacity"
                  style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" }}
                >
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>040-18 11 00</span>
                </a>
                <a
                  href="mailto:info@bellevuesolskydd.se"
                  className="flex items-center gap-3 text-black hover:opacity-70 transition-opacity break-all"
                  style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.15px" }}
                >
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>info@bellevuesolskydd.se</span>
                </a>
              </div>
              <hr className="my-6" style={{ border: "0", borderTop: "1px solid rgba(0,0,0,0.08)" }} />
              <p className="text-dark-gray" style={{ fontSize: "14px", letterSpacing: "0.14px", lineHeight: 1.5 }}>
                Vi erbjuder kostnadsfria hembesök där vi tar mått, ger rådgivning och lämnar offert på plats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
