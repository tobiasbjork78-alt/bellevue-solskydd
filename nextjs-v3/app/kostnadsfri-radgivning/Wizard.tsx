"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Check, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/cn";

const WEB3FORMS_KEY = "YOUR_KEY_HERE";

type AnswerKey = "lage" | "problem" | "yta" | "placering" | "prio";

type Question = {
  key: AnswerKey;
  prompt: string;
  options: string[];
};

const questions: Question[] = [
  {
    key: "lage",
    prompt: "Var sitter fönstret?",
    options: ["Söder", "Väster", "Öster", "Norr", "Vet inte"],
  },
  {
    key: "problem",
    prompt: "Vad är största problemet?",
    options: [
      "Värme och sol",
      "Insyn",
      "Bländning / skärmarbete",
      "Mörkläggning (sovrum)",
      "Vill förlänga uteplatsen",
    ],
  },
  {
    key: "yta",
    prompt: "Vilken typ av fönster eller yta?",
    options: [
      "Vanligt fönster",
      "Stort glasparti / skjutdörr",
      "Balkong",
      "Terrass / uteplats",
      "Takfönster",
    ],
  },
  {
    key: "placering",
    prompt: "Invändigt eller utvändigt?",
    options: [
      "Invändigt (inne i rummet)",
      "Utvändigt (på fasaden)",
      "Vet inte — hjälp mig välja",
    ],
  },
  {
    key: "prio",
    prompt: "Vad är viktigast?",
    options: [
      "Design och känsla",
      "Funktion och prestanda",
      "Pris",
      "Allt lika viktigt",
    ],
  },
];

type Answers = Partial<Record<AnswerKey, string>>;

type Recommendation = {
  slug: string;
  name: string;
  reason: string;
  href: string;
};

const products: Record<string, Recommendation> = {
  zipscreen: {
    slug: "zipscreen",
    name: "Zip screen",
    reason:
      "Utvändig screen som stoppar värmen innan den når glaset. Vindstabil och effektiv på stora glaspartier i västerläge.",
    href: "/zip-screen-malmo/",
  },
  markiser: {
    slug: "markiser",
    name: "Markiser",
    reason:
      "Klassisk utfällbar markis som skuggar uteplatser och fönsterpartier. Bra balans mellan estetik, skugga och pris.",
    href: "/markiser-malmo/",
  },
  pergola: {
    slug: "pergola",
    name: "Pergola",
    reason:
      "Fast konstruktion med justerbart tak för uteplatsen. Ger skugga, regnskydd och förlänger säsongen i skånskt klimat.",
    href: "/pergola-malmo/",
  },
  plisse: {
    slug: "plisse",
    name: "Plisségardiner",
    reason:
      "Mångsidigt invändigt solskydd. Honeycomb-väv isolerar effektivt och plissén passar även takfönster och oregelbundna former.",
    href: "/plissegardiner-malmo/",
  },
  persienner: {
    slug: "persienner",
    name: "Persienner",
    reason:
      "Lameller som vinklas i steg — mycket flexibelt mot bländning och insyn. Klassiskt uttryck i hem och kontor.",
    href: "/persienner-malmo/",
  },
  rullgardiner: {
    slug: "rullgardiner",
    name: "Rullgardiner",
    reason:
      "Stilrent solskydd med jämn väv. Mörkläggande blackout med sidoskenor är förstahandsvalet i sovrum.",
    href: "/rullgardiner-malmo/",
  },
};

function recommend(answers: Answers): Recommendation[] {
  const { problem, yta, placering } = answers;

  if (problem === "Mörkläggning (sovrum)") {
    return [products.rullgardiner, products.plisse];
  }

  if (yta === "Takfönster") {
    return [products.plisse];
  }

  if (yta === "Terrass / uteplats" || problem === "Vill förlänga uteplatsen") {
    return [products.pergola, products.markiser];
  }

  if (yta === "Balkong") {
    return [products.markiser, products.persienner];
  }

  if (problem === "Värme och sol") {
    if (placering === "Utvändigt (på fasaden)") {
      return [products.zipscreen, products.markiser];
    }
    if (placering === "Invändigt (inne i rummet)") {
      return [products.plisse, products.rullgardiner];
    }
    if (yta === "Stort glasparti / skjutdörr") {
      return [products.zipscreen, products.markiser];
    }
    return [products.zipscreen, products.plisse];
  }

  if (problem === "Insyn") {
    return [products.persienner, products.plisse];
  }

  if (problem === "Bländning / skärmarbete") {
    return [products.persienner, products.plisse];
  }

  return [products.persienner, products.plisse];
}

export function Wizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const isResult = step === questions.length;
  const total = questions.length;

  function setAnswer(key: AnswerKey, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, total));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const currentQuestion = !isResult ? questions[step] : null;
  const currentAnswer = currentQuestion
    ? answers[currentQuestion.key]
    : undefined;
  const progress = isResult ? 100 : ((step + (currentAnswer ? 1 : 0)) / total) * 100;

  return (
    <div className="rounded-premium border border-ink/10 bg-canvas-soft p-6 md:p-10 shadow-soft">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-3">
          <span>
            {isResult ? "Resultat" : `Fråga ${step + 1} / ${total}`}
          </span>
          {!isResult && currentAnswer && (
            <span className="text-brand-green">Svarat</span>
          )}
        </div>
        <div className="h-px bg-ink/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-brand-brass transition-all duration-500 ease-premium"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {currentQuestion ? (
        <QuestionView
          question={currentQuestion}
          value={currentAnswer}
          onChange={(v) => setAnswer(currentQuestion.key, v)}
        />
      ) : (
        <Result answers={answers} onReset={reset} />
      )}

      {!isResult && (
        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className={cn(
              "inline-flex items-center gap-2 text-sm",
              step === 0
                ? "text-ink-muted cursor-not-allowed"
                : "text-ink-soft hover:text-ink"
            )}
          >
            <ArrowLeft size={16} strokeWidth={1.6} />
            Tillbaka
          </button>
          <Button
            onClick={next}
            disabled={!currentAnswer}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === total - 1 ? "Visa rekommendation" : "Nästa"}
            <ArrowRight size={16} strokeWidth={1.6} />
          </Button>
        </div>
      )}
    </div>
  );
}

function QuestionView({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="heading-section text-3xl md:text-4xl text-ink mb-8">
        {question.prompt}
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {question.options.map((option) => (
          <RadioCard
            key={option}
            label={option}
            selected={value === option}
            onSelect={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

function RadioCard({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group flex items-center justify-between gap-3 rounded-soft border bg-canvas px-5 py-4 text-left",
        "transition-all duration-300 ease-premium",
        selected
          ? "border-brand-green bg-brand-green/5 shadow-soft"
          : "border-ink/12 hover:border-ink/25 hover:bg-canvas/80"
      )}
    >
      <span
        className={cn(
          "font-medium",
          selected ? "text-ink" : "text-ink-soft group-hover:text-ink"
        )}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-premium",
          selected
            ? "border-brand-green bg-brand-green text-ink-inverse"
            : "border-ink/25"
        )}
      >
        {selected && <Check size={14} strokeWidth={2} />}
      </span>
    </button>
  );
}

function Result({
  answers,
  onReset,
}: {
  answers: Answers;
  onReset: () => void;
}) {
  const recommendations = recommend(answers);

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
        Vår rekommendation
      </p>
      <h2 className="heading-section text-3xl md:text-4xl text-ink mb-3">
        {recommendations.length === 1
          ? "Vi föreslår:"
          : "Vi föreslår två lösningar:"}
      </h2>
      <p className="body-copy text-ink-soft mb-8">
        Baserat på dina svar är detta vad vi skulle rekommendera. En
        kostnadsfri rådgivning hemma hos dig ger ett mer exakt förslag.
      </p>

      <div className="space-y-4 mb-10">
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.slug} rec={rec} />
        ))}
      </div>

      <ResultForm answers={answers} recommendations={recommendations} />

      <div className="mt-8 flex items-center gap-4 text-sm">
        <button
          type="button"
          onClick={onReset}
          className="text-ink-soft hover:text-ink underline"
        >
          Börja om
        </button>
        <span aria-hidden className="text-ink-muted">
          eller
        </span>
        <a
          href="tel:+46401811100"
          className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
        >
          <Phone size={14} strokeWidth={1.6} />
          Ring 040-18 11 00
        </a>
      </div>
    </div>
  );
}

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <div className="rounded-soft border border-ink/10 bg-canvas px-6 py-5">
      <h3 className="heading-section text-2xl text-ink mb-2">{rec.name}</h3>
      <p className="body-copy text-ink-soft text-sm mb-4">{rec.reason}</p>
      <Link
        href={rec.href}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:text-ink transition-colors"
      >
        Läs mer om {rec.name.toLowerCase()}
        <ArrowRight size={14} strokeWidth={1.6} />
      </Link>
    </div>
  );
}

function ResultForm({
  answers,
  recommendations,
}: {
  answers: Answers;
  recommendations: Recommendation[];
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append(
      "subject",
      `Wizard-förfrågan: ${recommendations.map((r) => r.name).join(", ")}`
    );

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
        setError(result.message ?? "Något gick fel.");
      }
    } catch {
      setStatus("error");
      setError("Kunde inte skicka. Kontrollera din anslutning.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-soft border border-brand-green/30 bg-brand-green/5 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-2">
          Tack
        </p>
        <h3 className="heading-section text-2xl text-ink mb-2">
          Vi hör av oss.
        </h3>
        <p className="body-copy text-ink-soft text-sm">
          Tack för din förfrågan. Vi återkommer samma vardag på det
          telefonnummer eller den e-post du angav.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-soft border border-ink/10 bg-canvas px-6 py-6 space-y-4"
    >
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-1">
        Boka kostnadsfri rådgivning
      </p>
      <h3 className="heading-section text-2xl text-ink">
        Vi mäter på plats och visar prover.
      </h3>

      <Field name="name" label="Namn" required autoComplete="name" />
      <div className="grid md:grid-cols-2 gap-3">
        <Field
          name="phone"
          label="Telefon"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          name="email"
          label="E-post"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      {/* Hidden wizard answers */}
      <input type="hidden" name="wizard_lage" value={answers.lage ?? ""} />
      <input type="hidden" name="wizard_problem" value={answers.problem ?? ""} />
      <input type="hidden" name="wizard_yta" value={answers.yta ?? ""} />
      <input
        type="hidden"
        name="wizard_placering"
        value={answers.placering ?? ""}
      />
      <input type="hidden" name="wizard_prio" value={answers.prio ?? ""} />
      <input
        type="hidden"
        name="wizard_rekommendation"
        value={recommendations.map((r) => r.name).join(", ")}
      />

      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full md:w-auto disabled:opacity-60"
      >
        {status === "submitting" ? "Skickar…" : "Boka kostnadsfri rådgivning"}
      </Button>

      {status === "error" && error && (
        <p className="text-sm text-brand-terracotta">{error}</p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.22em] text-ink-soft mb-1">
        {label}
        {required && <span className="text-brand-terracotta"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-soft border border-ink/15 bg-canvas-soft px-4 py-3 text-ink outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
      />
    </label>
  );
}

