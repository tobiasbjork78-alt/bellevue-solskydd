"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";

const WEB3FORMS_KEY = "YOUR_KEY_HERE";

const productOptions = [
  "Markiser",
  "Persienner",
  "Plissé",
  "Rullgardiner",
  "Zip Screen",
  "Pergola",
  "Annat / vet inte",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message ?? "Något gick fel. Försök igen.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Kunde inte skicka. Kontrollera din anslutning.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-premium border border-ink/10 bg-canvas-soft p-8 md:p-10 shadow-soft">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
          Tack
        </p>
        <h2 className="heading-section text-3xl text-ink mb-3">
          Vi hör av oss.
        </h2>
        <p className="body-copy text-ink-soft">
          Tack för din förfrågan. Vi återkommer samma vardag på det
          telefonnummer eller den e-post du angav.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-premium border border-ink/10 bg-canvas-soft p-8 md:p-10 shadow-soft space-y-5"
    >
      <Field label="Namn" name="name" type="text" required autoComplete="name" />
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          label="E-post"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <SelectField
        label="Intresserad av"
        name="product"
        options={productOptions}
      />
      <TextareaField label="Meddelande" name="message" required rows={5} />

      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="disabled:opacity-60"
        >
          {status === "submitting" ? "Skickar…" : "Skicka förfrågan"}
        </Button>
        <p className="text-xs text-ink-muted">
          Vi delar aldrig dina uppgifter. Du kan när som helst be oss
          radera dem.
        </p>
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-brand-terracotta">{errorMessage}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-2">
        {label}
        {required && <span className="text-brand-terracotta"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-soft border border-ink/15 bg-canvas px-4 py-3 text-ink outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-2">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-soft border border-ink/15 bg-canvas px-4 py-3 text-ink outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
      >
        <option value="" disabled>
          Välj produkt…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  rows,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-2">
        {label}
        {required && <span className="text-brand-terracotta"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows ?? 4}
        className="w-full rounded-soft border border-ink/15 bg-canvas px-4 py-3 text-ink outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-vertical"
      />
    </label>
  );
}
