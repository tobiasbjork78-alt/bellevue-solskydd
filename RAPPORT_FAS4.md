# RAPPORT — FAS 4: Extra produktsidor + sitemap + robots + OG + referensmall

Branch: `draft/nextjs-v3`
Build: `npm run build` lyckas — 18 statiska routes (17 sidor + `_not-found`).

## Nya sidor

| URL | Eyebrow | Ord (HTML) | FAQ | Schemas |
|---|---|---|---|---|
| `/lamellgardiner-malmo/` | Invändigt solskydd | 725 | 4 | BreadcrumbList + Service + FAQPage |
| `/fonstermarkiser-malmo/` | Utvändigt solskydd | 712 | 4 | BreadcrumbList + Service + FAQPage |
| `/insektsskydd-malmo/` | Tillbehör | 730 | 4 | BreadcrumbList + Service + FAQPage |
| `/trapersienner-malmo/` | Invändigt solskydd | 790 | 4 | BreadcrumbList + Service + FAQPage |
| `/referenser/` | Referenser | 264 | — | BreadcrumbList + CollectionPage (med ItemList) |
| `/om-oss/` | Om Bellevue Solskydd | 154 | — | BreadcrumbList |

Alla produktsidor följer samma struktur som tidigare (Breadcrumb,
Eyebrow, H1, AnswerBox, sektioner, steglista, FAQ, ConsultationCTA).
Unik copy och Malmö-vinkel per sida (lamellgardiner: kontor och stora
glaspartier, fönstermarkiser: brf-fasader och söderlägen,
insektsskydd: havsnära mygg, träpersienner: sekelskifte och funkis).

## Filer

```
nextjs-v3/app/lamellgardiner-malmo/page.tsx
nextjs-v3/app/fonstermarkiser-malmo/page.tsx
nextjs-v3/app/insektsskydd-malmo/page.tsx
nextjs-v3/app/trapersienner-malmo/page.tsx
nextjs-v3/app/referenser/page.tsx
nextjs-v3/app/om-oss/page.tsx
nextjs-v3/components/molecules/CaseStudyCard.tsx
nextjs-v3/public/sitemap.xml
nextjs-v3/public/robots.txt
```

Modifierade:
```
nextjs-v3/components/sections/Header.tsx        (5+4 nav-items)
nextjs-v3/components/sections/Footer.tsx        (10 produkter, +Referenser/Wizard i about)
nextjs-v3/app/layout.tsx                        (OG + Twitter defaults)
nextjs-v3/lib/schema.ts                         (export ORG_ID/BUSINESS_ID/SITE_ID)
```

## CaseStudyCard — referenser

`components/molecules/CaseStudyCard.tsx` är en återanvändbar
referenskort-komponent: produkttyp-Badge i kategorifärg, ort som
eyebrow, titel, kort beskrivning. 3 dummy-case på `/referenser/`:

1. **Zip screen mot västersolen** — Västra Hamnen, Malmö (zipscreen-färg)
2. **Pergola för förlängd uteplatssäsong** — Limhamn, Malmö (pergola-färg)
3. **Träpersienner i sekelskifteslägenhet** — Slottsstaden, Malmö (persienner-färg)

Avslutas med "Fler referensprojekt publiceras löpande."

## Header & Footer — uppdaterade

`Header.tsx` dropdowns:

**Invändigt:** Persienner · Plisségardiner · Rullgardiner · Lamellgardiner · Träpersienner
**Utvändigt:** Markiser · Fönstermarkiser · Zip Screen · Pergola

`Footer.tsx`:

**Produkter (10):** Markiser · Fönstermarkiser · Persienner · Träpersienner · Plisségardiner · Rullgardiner · Lamellgardiner · Zip Screen · Pergola · Insektsskydd

**Tjänster:** (oförändrad — alla pekar på `/kontakt/`)

**Om / mer:** Om oss · Referenser · Guider · Kostnadsfri rådgivning

## Open Graph & Twitter — globala defaults

`app/layout.tsx` `export const metadata`:

```ts
openGraph: {
  siteName: "Bellevue Solskydd",
  locale: "sv_SE",
  type: "website",
}
twitter: {
  card: "summary",
}
```

Per-sida `title` och `description` ärvs automatiskt till `og:title` och
`og:description` via Next.js Metadata API. Verifierat i renderad
HTML — alla nya sidor har egna OG-tags som matchar metadata.

## Sitemap.xml & robots.txt

`public/sitemap.xml` — 17 URL:er kopierade till `out/sitemap.xml` vid build.

| Priority | URLs |
|---|---|
| 1.0 | `/` |
| 0.8 | 11 produkter + `/kostnadsfri-radgivning/` |
| 0.7 | `/kontakt/` |
| 0.6 | `/guider/` + 2 artiklar + `/referenser/` |

Alla med `lastmod=2026-04-29` och `changefreq=monthly`.
Notera: `/om-oss/` är medvetet **inte** med i sitemap — den är en
placeholder utan färdigt innehåll. Lägg till när riktig copy publiceras.

`public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.bellevuesolskydd.se/sitemap.xml
```

Kopierat till `out/robots.txt` vid build.

## Totalt sidantal

| Kategori | Antal |
|---|---|
| Produktsidor | 11 (6 från fas 1–2 + 5 nya i fas 4 inkl. insektsskydd och träpersienner) |
| Guider | 1 listsida + 2 artiklar = 3 |
| Verktyg & info | `/kostnadsfri-radgivning/`, `/referenser/`, `/om-oss/`, `/kontakt/` = 4 |
| Startsida | 1 |
| **Totalt** | **19 sidor** (varav 17 i sitemap; om-oss + _not-found är inte med) |

Build-output:
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /fonstermarkiser-malmo
├ ○ /guider
├ ○ /guider/markis-eller-zip-screen
├ ○ /guider/vilket-solskydd-passar-bast
├ ○ /insektsskydd-malmo
├ ○ /kontakt
├ ○ /kostnadsfri-radgivning
├ ○ /lamellgardiner-malmo
├ ○ /markiser-malmo
├ ○ /om-oss
├ ○ /pergola-malmo
├ ○ /persienner-malmo
├ ○ /plissegardiner-malmo
├ ○ /referenser
├ ○ /rullgardiner-malmo
├ ○ /trapersienner-malmo
└ ○ /zip-screen-malmo
```

## Sitemap-verifiering

```
$ grep -c "<url>" out/sitemap.xml
17
```

URL-lista i sitemap matchar specens lista exakt — `/`,
11 produktsidor, 3 guidesidor, `/kostnadsfri-radgivning/`,
`/referenser/`, `/kontakt/`.

## Kvarstående efter fas 4

- `WEB3FORMS_KEY = "YOUR_KEY_HERE"` i `/kontakt/` och `/kostnadsfri-radgivning/`.
- `/om-oss/` är placeholder — lägg till i sitemap när riktig copy publiceras.
- `/referenser/` har 3 dummy-case utan bilder. Riktiga referenser med
  bilder kommer i fas 5/senare.
- Footer "Tjänster"-kolumn pekar fortfarande på `/kontakt/`. Egna
  tjänstesidor finns inte ännu.
- "Om oss"-länk i Header och alla produktsidor är synlig — sidan finns
  nu (placeholder), så ingen 404 längre.
