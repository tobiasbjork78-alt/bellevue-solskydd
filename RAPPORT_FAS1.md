# RAPPORT — FAS 1: Bellevue Solskydd "Malmö Light Architecture"

Branch: `draft/nextjs-v3`
Projektkatalog: `nextjs-v3/` (befintlig `nextjs-site/` är orörd)
Build: `npm run build` lyckas — 4 statiska routes (`/`, `/_not-found`, `/kontakt`, `/persienner-malmo`).

## Stack-avvikelser från specen

- `create-next-app@latest` installerade Next.js 16.2.4 + Tailwind v4.
  Specen är skriven för Tailwind v3-syntax (`@tailwind base/components/utilities` + `tailwind.config.ts`).
  Tailwind nedgraderades till `^3.4.0` och `@tailwindcss/postcss` byttes mot klassisk `tailwindcss + autoprefixer`.
  PostCSS-konfigen uppdaterades därefter.
- `next.config.ts` har `turbopack.root` satt till projektkatalogen för att undvika lockfile-warning (Next 16 använder Turbopack som default).

## Skapade filer

### Konfiguration
- `nextjs-v3/next.config.ts` — `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`, `turbopack.root`.
- `nextjs-v3/tailwind.config.ts` — Designtokens enligt spec: canvas/ink/brand/product-färger, fontFamily (sans/display), borderRadius (soft/premium), boxShadow (soft/lift), `transitionTimingFunction.premium`.
- `nextjs-v3/postcss.config.mjs` — `tailwindcss + autoprefixer`.
- `nextjs-v3/app/globals.css` — `@tailwind`-direktiv, base/components-lager (heading-display, heading-section, body-copy, reveal-animering, prefers-reduced-motion override).

### Layout & fonts
- `nextjs-v3/app/layout.tsx` — Laddar `Fraunces` (display, weights 400/500/600) och `Geist` (sans, weights 400/500) via `next/font/google`, exponerar som CSS-variabler `--font-display` och `--font-sans`. `<html lang="sv">`. Default metadata med `metadataBase`.

### Atoms (`components/atoms/`)
- `Button.tsx` — Variants `primary | secondary | ghost`, sizes `sm | md | lg`. Renderas som `<a>` (next/link) om `href`, annars `<button>`.
- `Eyebrow.tsx` — Uppercase, `tracking-[0.22em]`, tone `green | inverse`.
- `LinkArrow.tsx` — Text + pil med hover translate-x.
- `Badge.tsx` — Pill med produktfärg (markiser/persienner/plisse/rullgardiner/zipscreen/pergola).
- `Divider.tsx` — 1px hög, w-16, tone `brass | ink | inverse`.

### Molecules (`components/molecules/`)
- `AnswerBox.tsx` — `rounded-premium`, `border-ink/10`, `bg-canvas-soft`, `shadow-soft`, eyebrow-label.
- `ProductCard.tsx` — `hover:-translate-y-1 hover:shadow-lift`, accentstreck per produktfärg, "Läs mer →".
- `TrustBadge.tsx` — Lucide-ikon i pill + titel + beskrivning, tone `light | dark`.
- `FAQItem.tsx` — Client component, smooth height-animation via `max-height` baserad på `scrollHeight`, plus-ikon roteras 45° när öppen.
- `Breadcrumbs.tsx` — Renderar lista + `BreadcrumbList` JSON-LD automatiskt.

### Sections (`components/sections/`)
- `Header.tsx` — Sticky, transparent vid topp, `bg-canvas-soft/95 backdrop-blur` vid scroll. Desktop-nav med Invändigt/Utvändigt dropdowns. Mobil hamburger → fullscreen overlay. CTA "Boka rådgivning".
- `Footer.tsx` — `bg-canvas-deep` + `text-ink-inverse`. 4 kolumner: Bellevue/Produkter/Tjänster/Kontakt+Om. Brass-mässingsstreck. Botten med © år + adress.
- `StickyMobileCTA.tsx` — Fixed bottom, 2-col grid (Ring + Boka), endast under `lg`.
- `HeroArchitectural.tsx` — `min-h-screen`, `bg-canvas-deep`, två subtila CSS-gradients (linjer, opacity 3% / 2.5%) — INGA bakgrundsbilder. Eyebrow + H1 ("Ljus. Skugga. På dina villkor.") + lead + två knappar. Reveal-staggered.
- `ProductCategoryGrid.tsx` — Eyebrow "Sortiment" + h2 + Divider + lead, sedan två rader (Invändigt / Utvändigt) med 3 ProductCard varje. id="produkter" för anchor-länk från hero.
- `ConsultationCTA.tsx` — `bg-brand-green`, `text-ink-inverse`. Konfigurerbar via props (eyebrow/heading/body/cta/href).
- `LocalProofSection.tsx` — `bg-canvas-soft`, 4 TrustBadges (Lokal montering, Garanti, Kostnadsfritt hembesök, Rådgivning på plats).

### Schema-helpers
- `nextjs-v3/components/JsonLd.tsx` — `<script type="application/ld+json">` med `JSON.stringify(data).replace(/</g, "\\u003c")`.
- `nextjs-v3/lib/schema.ts` — Funktioner: `organizationSchema()`, `localBusinessSchema()` (HomeAndConstructionBusiness), `websiteSchema()`, `breadcrumbSchema(items)`, `servicePageSchema(name, url, description)`, `faqSchema(items)`, `contactPageSchema(url)`, `siteGraph(extra)`, `graph(...nodes)`. Konstanter: `SITE_URL`, `phone`, `email`, `address`, `areasServed`.

### Utility
- `nextjs-v3/lib/cn.ts` — `clsx`-wrapper.
- `nextjs-v3/hooks/useReveal.ts` — IntersectionObserver-hook (threshold 0.15) som lägger `visible` på `.reveal`-element. Stagger via `transitionDelay` per syskon (100ms × index). `prefers-reduced-motion` → visa direkt utan animation.
- `nextjs-v3/components/RevealProvider.tsx` — Client-component wrapper för hook (anropas en gång i layout/page).

### Sidor
- `nextjs-v3/app/page.tsx` — Startsida. Sektioner: Hero → LocalProof → ProductCategoryGrid → ConsultationCTA → Footer + StickyMobileCTA. JSON-LD: `siteGraph()` (Organization + HomeAndConstructionBusiness + WebSite).
- `nextjs-v3/app/persienner-malmo/page.tsx` — Mall för produktsida med riktig copy (ingen lorem). Breadcrumbs → H1 → AnswerBox → "När passar persienner?" → "Vilka typer finns?" → "Vad påverkar priset?" → "Så går rådgivning och montering till" (4 numrerade steg) → 5 FAQ → ConsultationCTA. JSON-LD: BreadcrumbList + Service + FAQPage.
- `nextjs-v3/app/kontakt/page.tsx` + `ContactForm.tsx` — Kontaktinfo, öppettider, formulär (Web3Forms — `access_key = "YOUR_KEY_HERE"`, fält: namn/telefon/epost/produkt/meddelande, honeypot, success-state). JSON-LD: BreadcrumbList + ContactPage.

## Fonts som laddas (next/font/google)

| Familj | CSS-variabel | Vikter | Användning |
|---|---|---|---|
| Fraunces | `--font-display` | 400, 500, 600 | `.heading-display`, `.heading-section`, logo |
| Geist | `--font-sans` | 400, 500 | Body, brödtext, UI-text |

Båda med `display: "swap"` och latin subset.

## JSON-LD per sida

| Sida | Schemas |
|---|---|
| `/` | Organization, HomeAndConstructionBusiness (med areaServed för 11 orter), WebSite |
| `/persienner-malmo/` | BreadcrumbList, Service (med provider-ref till LocalBusiness), FAQPage (5 frågor) |
| `/kontakt/` | BreadcrumbList, ContactPage (med about-ref till LocalBusiness) |

Alla sanitiseras via `<.replace(/</g, "\\u003c")` i `JsonLd`-komponenten.

## Lighthouse-tips att testa

- **Performance** — Verifiera att `next/font` faktiskt prerenderar fonten utan FOUT på prod. Mät LCP på `/` (Hero h1) och CLS (Hero har stark typografi men ingen bild).
- **Accessibility** — Kontrollera kontrast på `text-ink-soft` på `bg-canvas` (#7B8178 mot #F6F2EA — gränsfall för 4.5:1, kan behöva mörkare nyans på små texter). Mobilmenyns trap-focus är inte implementerad — bör läggas till om vi vill ha full A11y.
- **Best Practices** — `output: "export"` ger statisk HTML; inga server-side huvuden. `images.unoptimized: true` är medvetet för static export.
- **SEO** — `metadataBase` är satt på root så att canonical resolves. Verifiera att `<html lang="sv">` plockas upp och att JSON-LD validerar i Google Rich Results.
- **CWV INP** — Mobilmeny + FAQItem är client components. Mät INP vid första interaktion.
- **Reduced motion** — `prefers-reduced-motion: reduce` är respekterat både i CSS och i `useReveal`.

## Kvarstående placeholders & TODO

- `app/kontakt/ContactForm.tsx` — `WEB3FORMS_KEY = "YOUR_KEY_HERE"` måste bytas mot riktig nyckel före produktion.
- Header-länkar pekar på sidor som ännu inte finns: `/markiser-malmo/`, `/plisse-malmo/`, `/rullgardiner-malmo/`, `/zipscreen-malmo/`, `/pergola-malmo/`, `/guider/`, `/om-oss/`. Bygget genererar dem inte ännu — bara `/persienner-malmo/` finns som mall. Klick på de andra ger 404 i statisk export.
- Footer-länkar mot `Tjänster`-kolumnen pekar alla på `/kontakt/` (placeholder — egna tjänstesidor finns inte ännu).
- Inga bilder är inkluderade. Hero, ProductCards och övriga sektioner bär designen via typografi och färg som specen kräver. Bilder införs i fas 2.
- `/_not-found` är default Next-sida — egen 404-design kan göras i fas 2.
- Mobilmenyn saknar focus-trap och Esc-stäng. Lägg till om A11y-strikt drift.
- ESLint-konfig (`eslint.config.mjs`) är default. `npm run lint` har inte körts som del av detta steg.

## Verifierad körning

```
npm run build
✓ Compiled successfully in 8.3s
✓ Finished TypeScript in 7.8s
✓ Generating static pages (6/6) in 4.1s

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /kontakt
└ ○ /persienner-malmo

○ (Static) prerendered as static content
```

Statisk export ligger i `nextjs-v3/out/` med `index.html`, `kontakt/index.html`, `persienner-malmo/index.html`.
