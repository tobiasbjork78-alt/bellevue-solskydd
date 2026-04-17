# RAPPORT_PRODUKTSIDOR.md

Körning: berikning av 8 befintliga produktsidor (Paket A) + 6 nya produktsidor
(Paket B). Total 14 sidor med Malmö-lokal vinkel, arkivtext och JSON-LD-schema.

**Branch:** `draft/nextjs-v2` (skapad från `draft/nextjs` — se §7 nedan).
**Main:** orörd. **Ingen deploy.**

---

## 1. Översikt — alla 14 sidor

Ordcounts mätt som antal ord i synlig text (title + intro + sektionsinnehåll +
FAQ) — schema-JSON och kod räknas inte.

| # | URL | Filsökväg | Wc före | Wc efter | FAQ-st | LocalBusiness | FAQPage |
|---|---|---|---:|---:|---:|:---:|:---:|
| A1 | `/persienner` | `nextjs-site/app/persienner/page.tsx` | 361 | 692 | 7 | ✓ | ✓ |
| A2 | `/plissegardiner` | `nextjs-site/app/plissegardiner/page.tsx` | 280 | 431 | 5 | ✓ | ✓ |
| A3 | `/rullgardiner` | `nextjs-site/app/rullgardiner/page.tsx` | 256 | 402 | 5 | ✓ | ✓ |
| A4 | `/lamellgardiner` | `nextjs-site/app/lamellgardiner/page.tsx` | 211 | 457 | 6 | ✓ | ✓ |
| A5 | `/markiser` | `nextjs-site/app/markiser/page.tsx` | 325 | 459 | 5 | ✓ | ✓ |
| A6 | `/terrassmarkiser` | `nextjs-site/app/terrassmarkiser/page.tsx` | 203 | 406 | 5 | ✓ | ✓ |
| A7 | `/zip-screen` | `nextjs-site/app/zip-screen/page.tsx` | 229 | 374 | 5 | ✓ | ✓ |
| A8 | `/pergola` | `nextjs-site/app/pergola/page.tsx` | 210 | 457 | 6 | ✓ | ✓ |
| B1 | `/panelgardiner` | `nextjs-site/app/panelgardiner/page.tsx` | — | 383 | 5 | ✓ | ✓ |
| B2 | `/draperier` | `nextjs-site/app/draperier/page.tsx` | — | 394 | 5 | ✓ | ✓ |
| B3 | `/fonstermarkiser` | `nextjs-site/app/fonstermarkiser/page.tsx` | — | 389 | 5 | ✓ | ✓ |
| B4 | `/parasoller` | `nextjs-site/app/parasoller/page.tsx` | — | 488 | 5 | ✓ | ✓ |
| B5 | `/insektsskydd` | `nextjs-site/app/insektsskydd/page.tsx` | — | 410 | 5 | ✓ | ✓ |
| B6 | `/trapersienner` | `nextjs-site/app/trapersienner/page.tsx` | — | 516 | 6 | ✓ | ✓ |

Alla 14 sidor > 250 ord. Ingen manuell komplettering behövs.

Typcheck: `node_modules/.bin/tsc --noEmit` — ren.

---

## 2. Malmö-vinkel per sida

Varje H1 har formen "**&lt;Produkt&gt; i Malmö**" eller "**&lt;Produkt&gt; i Malmö
och &lt;ort&gt;**" där tabellen pekat ut en sekundär ort. Lokalitet är invävd i
brödtext, inte listad som "vi servar dessa orter".

| Sida | H1 | Lokalt referensstoff (exempel) |
|---|---|---|
| /persienner | Persienner i Malmö — Bäst i Test sedan 1982 | "sekelskifteslägenheten på Möllan", "radhusets stora altandörr" |
| /plissegardiner | Plissegardiner i Malmö — eleganta för alla fönstertyper | "takvåningar på Väster", "nybyggen i Hyllie", "fritidshus i Vellinge" |
| /rullgardiner | Rullgardiner i Malmö — från ljusfilter till mörkläggning | "skyltfönstret i butiken på Södra Förstadsgatan", "sovrummet i radhuset" |
| /lamellgardiner | Lamellgardiner i Malmö — för stora fönsterpartier | "radhusområden kring Malmö och Staffanstorp", "altandörrar i villor och radhus" |
| /markiser | Markiser i Malmö — balkong, fasad och innerstadsfastigheter | "balkong i innerstan", "funkisvillan i Limhamn", "radhuset i Bunkeflostrand", "sekelskiftesfastigheter" |
| /terrassmarkiser | Terrassmarkiser i Malmö — för södervända uteplatser | "villaterrasser i Malmö, Limhamn och Trelleborg", "kustnära lägen kring Trelleborg" |
| /zip-screen | Zip Screen i Malmö — vindtålig vertikalmarkis | "Hyllie, Bunkeflostrand och Vellinge", "kustnära lägen i Vellinge" |
| /pergola | Pergola i Malmö och Svedala — uterum för trädgården | "villaträdgårdar i Malmö, Bunkeflostrand och Svedala", "villan i Limhamn" |
| /panelgardiner | Panelgardiner i Malmö — för stora fönsterpartier | "nyproducerade villor och lägenheter i Malmö" |
| /draperier | Draperier i Malmö — wavegardiner för äldre fastigheter | "Möllan, Västra Hamnen, Rådhuset", "takhöga bostadsrätter" |
| /fonstermarkiser | Fönstermarkiser i Malmö — funkisvillor och äldre bestånd | "funkisvillan på Lorensborg", "trästaden i Kirseberg" |
| /parasoller | Parasoller i Malmö och Trelleborg | "uteserveringar i Malmös city", "kustrestaurangerna i Trelleborg" |
| /insektsskydd | Insektsskydd i Malmö och Staffanstorp | "Pildammsparken, Bulltofta, skogspartierna runt Staffanstorp" |
| /trapersienner | Träpersienner i Malmö — premium för villan | "villorna kring Bellevue, Limhamn och Västra Hamnen" |

Ingen orts-listning ("Malmö, Staffanstorp, Vellinge, Trelleborg, Svedala") har
klistrats in i löptext på någon sida. Kommunerna i det breda upptagningsområdet
finns endast i JSON-LD `areaServed` (se §4) och i `ProductPageLayout`s CTA-block
längst ner — som är designlåst och orört.

---

## 3. Innehåll — vad som städats bort

Genomsökning + manuell genomgång. Följande formuleringar i arkivet har tagits
bort eller skrivits om:

**"Patent" / "Patenterat" / "Mönsterskyddat"** — förekommer i arkivets
`page-persienner.json`, `page-om-oss.json`, `page-hem.json`,
`page-unika-funktioner.json`. Alla strukna ur mina 14 sidor. I nya
`persienner/page.tsx`: "Patenterade sidoskenor" → "Sidoskenor håller persiennen
på plats mot fönstret". Tidigare metadata `"Bäst i Test-persienn med patent
och mönsterskydd"` → `"Bäst i Test av Testfakta med betyg 4.6/5"`.

**Modellkoder VST, VSE, V-A, OV, V-E, V-B/V-F, V-M** — fullständigt borttagna
ur persienner-sidan (inklusive gridens rubriker). Ersatta med generiska
beskrivningar: "Bellevue Standard med sidoskenor", "Frihängande med designlist
och sidoskenor", "A-line med styrlina", "Objektspersienn", "Frihängande med
designlist", "Frihängande persienn", "Mellanglaspersienn". Endast model-koden
är borta — beskrivningarna är sakinnehåll kvar från arkivet.

**Egen produktion / Malmö-fabrik / Krusegatan 52** — borttaget från titlar,
metadata och brödtext.
- `persienner/page.tsx` metadata: "Tillverkad i Malmö sedan 1982" → "Kostnadsfritt hembesök".
- Rubriker som "Persienner tillverkade i Malmö", "Alla persiennmodeller tillverkas i vår fabrik i Malmö" → struken helt.
- `page-tjanster.json`-referens till "utställning på Krusegatan 52" — inte använd på någon sida.

**3 års garanti / Nöjd kundgaranti** — borttaget ur alla CTA-sektioner och
produktbeskrivningar. Tidigare befintlig sektion i `rullgardiner/page.tsx` med
rubrik "3 års garanti" — struken helt (ersatt med ingen motsvarande sektion,
inte uppfunnen ny text). Arkivets återkommande formel "Kostnadsfritt hembesök
| Måttanpassad tillverkning | 3 års garanti" — endast "Kostnadsfritt hembesök"
och "Måttanpassad tillverkning" behållna.

**Di Gasell** — inte använd (fanns inte i de specifika JSON-filer jag arbetade
med; endast i `page-om-oss.json` och bildfil, båda utanför scope).

**Namngivna personer / kundprojekt** — inte använda.

**"40 år i branschen" / "sedan 1982"** — BEHÅLLET enligt brief. Persienner-sidan:
"Persienner i Malmö — Bäst i Test sedan 1982".

**"Bäst i Test" / "Testfakta"** — BEHÅLLET enligt brief. Endast på persienner-sidan
där arkivet har den specifika testreferensen. Inte extrapolerat till andra
produkter.

---

## 4. JSON-LD-schema

Varje sida innehåller ett inlagt `<script type="application/ld+json">`-block
i JSX-trädet (inte i `<head>` — App Router renderar inline-script korrekt in
i HTML-body, vilket Google läser utan problem). Strukturen är densamma på alla
14 sidor med endast `url` och `mainEntity` (FAQ) som varierar:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bellevue Solskydd",
      "telephone": "+46401811100",
      "email": "info@bellevuesolskydd.se",
      "url": "<kanonisk URL per sida>",
      "areaServed": ["Malmö", "Staffanstorp", "Vellinge", "Trelleborg", "Svedala"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [ { "@type": "Question", "name": "…", "acceptedAnswer": { "@type": "Answer", "text": "…" } }, … ]
    }
  ]
}
```

Ingen `address` per krav. `alternates.canonical` finns även i Next `metadata`.

---

## 5. Bilder

**Ingen ny bildkopiering har skett.** Motivering:

1. Samtliga 121 arkivbilder från `arkiv/content/media/images/` ligger redan
   i `nextjs-site/public/images/` (kopierade i tidigare commit på `draft/nextjs`).
2. Brief ber att lägga bilder i `nextjs-site/public/images/products/`. Att
   flytta bilder till en ny undermapp skulle bryta `components/Products.tsx` på
   startsidan där bildvägar är hårdkodade som `/images/<fil>` — startsidan är
   uttryckligen designlåst och får inte ändras.
3. `ProductPageLayout` har inga slots för produktbilder och jag har inte lagt
   till några — design-låset förbjuder nya layoutelement. Alla 14 produktsidor
   är därför textbaserade, precis som de befintliga 8 var före körningen.

**Konsekvens / flagga:**
- Nya sidorna har inga header-bilder eller galleribilder. Vid senare beslut att
  tillåta layoutändringar kan bildval från ARKIV_PLAN.md §1.3 + §3.1 användas
  direkt — filerna finns redan i `public/images/`.
- Om du vill ha produktbilder inbakade i de 14 sidorna är det en designändring
  och kräver nytt godkännande av ProductPageLayout.

---

## 6. Telefonnummer

**0707-923 651** söktes i hela `nextjs-site/app/` — **hittades inte**. Nummer
är inte i kodbasen på `draft/nextjs` och fanns därför inget att ersätta.

**040-18 11 00** (formatet `tel:040181100` i href) används genomgående i:

- `app/components/Contact.tsx`
- `app/components/Footer.tsx`
- `app/components/Hembesok.tsx`
- `app/components/ProductPageLayout.tsx`
- `app/components/Topbar.tsx`
- `app/kontakt/page.tsx` (metadata)

Alla 14 nya/uppdaterade sidor ärver `040-18 11 00` via den delade
`ProductPageLayout`-komponenten och behöver inget eget nummer-ref. I JSON-LD
anges `"+46401811100"` per sida.

---

## 7. Branch-avvikelse (flagga)

Brief angav arbetsbranch `draft/nextjs-v2`. Den branchen fanns inte i repot —
endast `draft/nextjs` har nextjs-källkod. `main` har bara build-output.

**Åtgärd:** skapade `draft/nextjs-v2` från `draft/nextjs` och utförde allt
arbete där. Inga ändringar är pushade, inga ändringar på `main` eller
`draft/nextjs`. Inga commits gjorda — ändringarna ligger som unstaged working
tree på `draft/nextjs-v2`.

---

## 8. Diff-sammanfattning

```
nextjs-site/app/lamellgardiner/page.tsx    | 101 ++++++++++++++++-------
nextjs-site/app/markiser/page.tsx          |  99 ++++++++++++++++------
nextjs-site/app/pergola/page.tsx           | 105 ++++++++++++++++++-----
nextjs-site/app/persienner/page.tsx        | 141 ++++++++++++++++++++++++-----
nextjs-site/app/plissegardiner/page.tsx    |  96 +++++++++++++++------
nextjs-site/app/rullgardiner/page.tsx      |  85 +++++++++++++++----
nextjs-site/app/terrassmarkiser/page.tsx   |  91 +++++++++++++++---
nextjs-site/app/zip-screen/page.tsx        |  96 ++++++++++++++++-----
nextjs-site/app/panelgardiner/page.tsx     |  NY (6 nya filer totalt)
nextjs-site/app/draperier/page.tsx         |  NY
nextjs-site/app/fonstermarkiser/page.tsx   |  NY
nextjs-site/app/parasoller/page.tsx        |  NY
nextjs-site/app/insektsskydd/page.tsx      |  NY
nextjs-site/app/trapersienner/page.tsx     |  NY
```

Paket A: **8 filer uppdaterade**, +648 rader / −166 rader.
Paket B: **6 nya filer** (+ ~170 rader vardera).

Orörda filer (design-kärna):
- `app/components/ProductPageLayout.tsx`
- `app/components/Header.tsx`, `Footer.tsx`, `Topbar.tsx`, `Hero.tsx`, `Products.tsx`, `TrustBar.tsx`, `Hembesok.tsx`, `Contact.tsx`, `ScrollAnimator.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx` (startsidan)
- `tsconfig.json`, `next.config.ts`, `package.json`, `tailwind`-konfig (finns via Tailwind v4 `@theme` i `globals.css`)

---

## 9. Kvarstående arbete / ej utfört

- **Navigation.** De 6 nya sidorna är inte länkade från `Header.tsx` eller
  `Products.tsx`. Brief sa "Lägg INTE till nya sidor i navigationen ännu".
  Nya sidor är åtkomliga via direkt URL och interna länkar från Products.tsx
  (som redan refererade till dem men utan `href`).
- **`access_key` för Web3Forms.** `Contact.tsx` har `value="YOUR_KEY_HERE"` som
  placeholder — oförändrat. Inget formulärblock är tillagt på produktsidor;
  CTA leder fortsatt till `/kontakt`.
- **Sitemap / robots.** Inte uppdaterat. Nya URL:er finns inte i en
  `sitemap.xml` (ingen sådan fil hittad i repot).
- **OpenGraph-bilder per sida.** Inte tillagt — kräver design-beslut om
  `public/images/products/`-strukturen.
