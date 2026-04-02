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
    <section id="kontakt" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-charcoal">
            Kontakta oss
          </h2>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-light-bg border border-border">
            <Phone className="w-5 h-5 text-teal mb-3" />
            <p className="text-sm text-mid-gray mb-1">Telefon</p>
            <a href="tel:040181100" className="font-semibold text-charcoal hover:text-teal transition-colors">
              040-18 11 00
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-light-bg border border-border">
            <Mail className="w-5 h-5 text-teal mb-3" />
            <p className="text-sm text-mid-gray mb-1">E-post</p>
            <a href="mailto:info@bellevuesolskydd.se" className="font-semibold text-charcoal hover:text-teal transition-colors">
              info@bellevuesolskydd.se
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-light-bg border border-border">
            <MapPin className="w-5 h-5 text-teal mb-3" />
            <p className="text-sm text-mid-gray mb-1">Område</p>
            <p className="font-semibold text-charcoal">Malmö, södra Skåne</p>
          </div>
        </div>

        {/* Form + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-12 h-12 text-teal mb-4" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-2">
                  Tack för din förfrågan!
                </h3>
                <p className="text-mid-gray">Vi hör av oss inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-light-bg text-charcoal placeholder:text-mid-gray/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                    placeholder="Ditt namn"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-md border border-border bg-light-bg text-charcoal placeholder:text-mid-gray/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="070-000 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-light-bg text-charcoal placeholder:text-mid-gray/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-1.5">
                    Intresserad av
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="w-full px-4 py-3 rounded-md border border-border bg-light-bg text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  >
                    <option value="">Välj produkt (valfritt)</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-light-bg text-charcoal placeholder:text-mid-gray/50 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-y"
                    placeholder="Beskriv vad du behöver hjälp med..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white px-8 py-3 rounded-md text-base font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Skicka förfrågan
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-light-bg border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-charcoal mb-4">
                Vill du hellre ringa eller maila?
              </h3>
              <div className="space-y-3">
                <a href="tel:040181100" className="flex items-center gap-3 text-charcoal hover:text-teal transition-colors">
                  <Phone className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-semibold">040-18 11 00</span>
                </a>
                <a href="mailto:info@bellevuesolskydd.se" className="flex items-center gap-3 text-charcoal hover:text-teal transition-colors">
                  <Mail className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-semibold">info@bellevuesolskydd.se</span>
                </a>
              </div>
              <hr className="my-5 border-border" />
              <p className="text-sm text-mid-gray leading-relaxed">
                Vi erbjuder kostnadsfria hembesök där vi tar mått, ger rådgivning och lämnar offert på plats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
