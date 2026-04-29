# RAPPORT — FAS 2: Produktsidor + buggfix CTA + nav-uppdatering

Branch: `draft/nextjs-v3`
Build: `npm run build` lyckas — 11 statiska routes (8 sidor + 3 metadata-routes).

## Nya sidor

| URL | Eyebrow | Schema |
|---|---|---|
| `/markiser-malmo/` | Utvändigt solskydd | BreadcrumbList + Service + FAQPage |
| `/plissegardiner-malmo/` | Invändigt solskydd | BreadcrumbList + Service + FAQPage |
| `/rullgardiner-malmo/` | Invändigt solskydd | BreadcrumbList + Service + FAQPage |
| `/zip-screen-malmo/` | Utvändigt solskydd | BreadcrumbList + Service + FAQPage |
| `/pergola-malmo/` | Utvändigt solskydd | BreadcrumbList + Service + FAQPage |

Befintlig sida (oförändrad i fas 2): `/persienner-malmo/`.

## Filer

- `nextjs-v3/app/markiser-malmo/page.tsx`
- `nextjs-v3/app/plissegardiner-malmo/page.tsx`
- `nextjs-v3/app/rullgardiner-malmo/page.tsx`
- `nextjs-v3/app/zip-screen-malmo/page.tsx`
- `nextjs-v3/app/pergola-malmo/page.tsx`

Varje sida följer samma struktur som `/persienner-malmo/`:
1. Breadcrumbs (med BreadcrumbList JSON-LD)
2. Eyebrow → H1 → Divider
3. AnswerBox (40–60 ord, sökintention)
4. Sektion 1 — Malmö-specifik vinkel
5. Sektion 2 — "Vilka typer finns?" (4 produkttyper var)
6. Sektion 3 — "Vad påverkar priset?"
7. Sektion 4 — "Så går rådgivning och montering till" (4 numrerade steg)
8. FAQ-sektion (5 unika frågor + svar)
9. ConsultationCTA (med produktspecifik eyebrow/heading/body)

## Ordcount per sida (rendererad HTML, inkl. delad nav/footer ≈ 100 ord)

| Sida | Ord (HTML totalt) | Unikt innehåll (ungefär) |
|---|---|---|
| `/markiser-malmo/` | 770 | ~670 |
| `/plissegardiner-malmo/` | 766 | ~666 |
| `/rullgardiner-malmo/` | 736 | ~636 |
| `/zip-screen-malmo/` | 793 | ~693 |
| `/pergola-malmo/` | 830 | ~730 |
| `/persienner-malmo/` (referens) | 729 | ~629 |
| `/` (startsida — referens för chrome) | 335 | — |

Ingen sida har copy-paste-text mellan sig — varje produkt har egen
prisresonemang, egen typ-genomgång, egna FAQ-svar och egen Malmö-vinkel
(västersol+Öresund för markis/zip screen, äldre fastigheter för plissé,
nybyggen+Hyllie/Västra Hamnen för rullgardin, skånskt klimat för pergola).

## FAQ-antal per sida

| Sida | Antal frågor |
|---|---|
| `/markiser-malmo/` | 5 |
| `/plissegardiner-malmo/` | 5 |
| `/rullgardiner-malmo/` | 5 |
| `/zip-screen-malmo/` | 5 |
| `/pergola-malmo/` | 5 |

Totalt 25 unika FAQ för fas 2.

## Header & länkar — uppdaterade

`nextjs-v3/components/sections/Header.tsx`:
- "Plissé" → "Plisségardiner"
- `/plisse-malmo/` → `/plissegardiner-malmo/`
- `/zipscreen-malmo/` → `/zip-screen-malmo/`

`nextjs-v3/components/sections/Footer.tsx`:
- "Plissé" → "Plisségardiner"
- `/plisse-malmo/` → `/plissegardiner-malmo/`
- `/zipscreen-malmo/` → `/zip-screen-malmo/`

`nextjs-v3/components/sections/ProductCategoryGrid.tsx` (kort på startsidan):
- `/plisse-malmo/` → `/plissegardiner-malmo/`
- `/zipscreen-malmo/` → `/zip-screen-malmo/`

(Persienner, Rullgardiner, Markiser och Pergola hade redan korrekta URL:er.)

## Bekräftade JSON-LD-schemas (per sida)

| Route | Schemas i `<script type="application/ld+json">` |
|---|---|
| `/` | Organization, HomeAndConstructionBusiness (med areaServed × 11 städer), WebSite |
| `/persienner-malmo/` | BreadcrumbList, Service, FAQPage |
| `/markiser-malmo/` | BreadcrumbList, Service, FAQPage |
| `/plissegardiner-malmo/` | BreadcrumbList, Service, FAQPage |
| `/rullgardiner-malmo/` | BreadcrumbList, Service, FAQPage |
| `/zip-screen-malmo/` | BreadcrumbList, Service, FAQPage |
| `/pergola-malmo/` | BreadcrumbList, Service, FAQPage |
| `/kontakt/` | BreadcrumbList, ContactPage |

Alla schemas använder Service-typ (inte Product) per krav. Alla saniteras
via `replace(/</g, "\\u003c")` i `JsonLd`-komponenten.

## Verifierad körning

```
npm run build
✓ Compiled successfully
✓ Generating static pages (11/11)

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /kontakt
├ ○ /markiser-malmo
├ ○ /pergola-malmo
├ ○ /persienner-malmo
├ ○ /plissegardiner-malmo
├ ○ /rullgardiner-malmo
└ ○ /zip-screen-malmo
```

## Kvarstående efter fas 2

- `/guider/` och `/om-oss/` är fortfarande länkade i Header men byggs inte
  som sidor — klick ger 404 i statisk export.
- "Tjänster"-kolumnen i Footer pekar fortfarande på `/kontakt/` som
  placeholder (egna tjänstesidor finns inte ännu).
- `WEB3FORMS_KEY = "YOUR_KEY_HERE"` i kontaktformuläret kvarstår.
- Inga bilder — typografi och färg bär designen per spec. Bilder kan
  införas i fas 3.
- Mobilmeny saknar fortfarande focus-trap och Esc-stäng.
