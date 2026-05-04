# Rapport: 15 invändiga solskyddssidor

**Datum:** 2026-05-04
**Branch:** draft/nextjs-v3
**Build status:** `npm run build` lyckas — 60 statiska sidor genereras

---

## Översikt

15 nya/omskrivna sidor levererade. All säljtext, brödtext, ingresser och
FAQ är skriven från grunden för Bellevue Solskydd. Produktfakta
(Umbra-modeller, mått, motorfamiljer, vävtyper) är behållen från
drafterna eftersom de avser samma produktsortiment.

Inga meningar har kopierats rakt av från `content-drafts/`. Tonen är
saklig och lokal — inga claims om Testfakta, Bäst i Test, patent eller
40 år.

---

## Produktsidor

| URL | Status | Ord (rensad räkning) |
|---|---|---|
| `/invandigt-solskydd/` | NY hubsida | 1 093 |
| `/plissegardiner-malmo/` | OMSKRIVEN | 1 457 |
| `/rullgardiner-malmo/` | OMSKRIVEN | 1 176 |
| `/persienner-malmo/` | OMSKRIVEN | 1 186 |
| `/lamellgardiner-malmo/` | OMSKRIVEN | 1 143 |

Ordräkningen ovan är från ett strikt regex som strippar JSX-taggar och
kodordsnyckelord; den synliga ordmängden ligger 5–15 % högre när
inline-formaterade `<strong>`-element och länktexter inkluderas.

---

## Guideartiklar

| URL | Status | Ord (rensad räkning) |
|---|---|---|
| `/guider/valja-ratt-solskydd-inomhus/` | NY | 779 |
| `/guider/rullgardin-eller-persienn/` | NY | 675 |
| `/guider/plissegardin-eller-rullgardin/` | NY | 747 |
| `/guider/solskydd-sovrum/` | NY | 843 |
| `/guider/solskydd-insyn/` | NY | 812 |
| `/guider/solskydd-varme/` | NY | 847 |
| `/guider/solskydd-kontor/` | NY | 843 |
| `/guider/motoriserat-solskydd/` | NY | 833 |
| `/guider/isolerande-gardiner/` | NY | 876 |
| `/guider/skotsel-invandigt-solskydd/` | NY | 764 |

Befintliga guider `/guider/markis-eller-zip-screen/` och
`/guider/vilket-solskydd-passar-bast/` är orörda.

---

## Bekräftelse: ingen duplicerad copy

- All H1, ingress, sektionsbrödtext och CTA-texter är formulerade på nytt.
- Alla FAQ-frågor och FAQ-svar är formulerade på nytt — samma ämne men
  andra frågeordning, andra exempel, annan tonvikt.
- Identiska produktfakta (modellnamn `Liora/Mono/Dualis/Optima/Velo/Atria`,
  rullgardinsstorlekar `Mini/Medi/Maxi`, motorfamiljerna
  `Motion/Eve-Motion`, lamellmått `89 mm/127 mm`, persiennlamell
  `25 mm × 0,18 mm`, väggrupper) är behållna eftersom det är samma
  Umbra-sortiment.
- Tabeller använder andra rubriker, annan kolumnstruktur och andra
  jämförelsepunkter än drafterna.
- Malmö-vinkeln är inarbetad i både hubsida, produktsidor och guider —
  Möllevången, Davidshall, Slottsstaden, Limhamn, Hyllie, Västra Hamnen,
  Bunkeflo, Sofielund nämns där det är relevant. Västersolen mot
  Öresund, kustvinden, BRF-godkännanden och nyproduktionens stora
  glaspartier är genomgående teman.

---

## JSON-LD scheman per sida

Alla sidor har komplett strukturerad data via `lib/schema.ts`:

| Sida | Schemas |
|---|---|
| `/invandigt-solskydd/` | BreadcrumbList + Service + FAQPage |
| `/plissegardiner-malmo/` | BreadcrumbList + Service + FAQPage |
| `/rullgardiner-malmo/` | BreadcrumbList + Service + FAQPage |
| `/persienner-malmo/` | BreadcrumbList + Service + FAQPage |
| `/lamellgardiner-malmo/` | BreadcrumbList + Service + FAQPage |
| `/guider/valja-ratt-solskydd-inomhus/` | BreadcrumbList + Article + FAQPage |
| `/guider/rullgardin-eller-persienn/` | BreadcrumbList + Article + FAQPage |
| `/guider/plissegardin-eller-rullgardin/` | BreadcrumbList + Article + FAQPage |
| `/guider/solskydd-sovrum/` | BreadcrumbList + Article + FAQPage |
| `/guider/solskydd-insyn/` | BreadcrumbList + Article + FAQPage |
| `/guider/solskydd-varme/` | BreadcrumbList + Article + FAQPage |
| `/guider/solskydd-kontor/` | BreadcrumbList + Article + FAQPage |
| `/guider/motoriserat-solskydd/` | BreadcrumbList + Article + FAQPage |
| `/guider/isolerande-gardiner/` | BreadcrumbList + Article + FAQPage |
| `/guider/skotsel-invandigt-solskydd/` | BreadcrumbList + Article + FAQPage |

Produktsidornas breadcrumbs har dessutom uppdaterats med en mellannivå
"Invändigt solskydd" som länkar till hubsidan.

---

## Sitemap-uppdatering

11 nya URL:er tillagda i `public/sitemap.xml`:

```
/invandigt-solskydd/
/guider/rullgardin-eller-persienn/
/guider/plissegardin-eller-rullgardin/
/guider/valja-ratt-solskydd-inomhus/
/guider/solskydd-sovrum/
/guider/solskydd-insyn/
/guider/solskydd-varme/
/guider/solskydd-kontor/
/guider/motoriserat-solskydd/
/guider/isolerande-gardiner/
/guider/skotsel-invandigt-solskydd/
```

Hubsidan har `priority 0.8`, guider `priority 0.6`. `lastmod` på
hubsida och alla nya guider satt till `2026-05-04`.

---

## Navigation

`components/sections/Header.tsx` — i dropdown "Invändigt" ligger
"Översikt invändigt" som första post och länkar till `/invandigt-solskydd/`.
Befintliga produktlänkar är behållna i samma ordning.

`app/guider/page.tsx` — listan visar alla 12 guider (10 nya + 2
befintliga) i logisk ordning: översikt först, sedan jämförelser, sedan
tema-guider, skötsel sist. Varje kort har eyebrow-kategori (Översikt,
Jämförelse, Tema, Praktiskt).

---

## Intern länkning

Genomgående länkkonventioner som vi använder genomgående:

- Hubsidan länkar till alla 4 produktsidor med fyra produktkort.
- Varje produktsida länkar till hubsidan via breadcrumb och till de
  andra 3 produktsidorna i sektionen "Andra invändiga lösningar".
- Plissé- och rullgardinssidan länkar till `/zip-screen-malmo/` och
  `/markiser-malmo/` för värme-kombination.
- Guider länkar till relevanta produktsidor och till andra guider —
  exempelvis länkar `/guider/solskydd-sovrum/` till plissé och
  rullgardin samt till plissé-vs-rullgardin-jämförelsen.

---

## Build-verifikation

```
npm run build
✓ Compiled successfully
✓ Generating static pages using 19 workers (60/60)
```

Totalt antal sidor på sajten: **60 statiska routes** (upp från 49 före
detta arbete — 11 nya routes tillagda).

---

## Commits

Arbetet är levererat i tre commits:

1. `c8c9e98` — Hub `/invandigt-solskydd/` + 4 omskrivna produktsidor
2. `d21487b` — 4 nya guider (jämförelser + sovrum)
3. `6f344e2` — 6 nya guider (insyn, värme, kontor, motor, isolering,
   skötsel)

En slutlig commit lägger till sitemap-uppdatering, header-navigation,
guides-listsida och denna rapport.
