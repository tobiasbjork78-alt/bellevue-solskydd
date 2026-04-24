# KONTEXT — Handoff till ny session

Datum: 2026-04-24
Branch: `draft/nextjs-v2`
Senaste commit: `620214c8` ("Steg 1–3: Garantier, Bäst i Test-avgränsning, Patenterad")
Working tree: **RENT** — inga uncommitted ändringar

> OBS: Commit 620214c8 fick ett missvisande meddelande. Den innehåller
> i praktiken Steg 1–4 (alla ändringar gjordes före commit). Alla
> nextjs-site-filer är trackade och korrekta.

---

## KLART (Steg 1–4, allt i commit 620214c8)

### Steg 1 — Garantier
- `TrustBar.tsx`: Ny komponent med props `variant` ("default"|"product") och `guaranteeYears` (10|3). Default-varianten visar "Upp till 10 års garanti". Product-varianten visar "X års garanti".
- `layout.tsx`: metadata description ändrad till "Upp till 10 års garanti" (ersatte "Bäst i Test av Testfakta").
- Inget garantitext existerade tidigare i brödtext — det fanns ingen "3 års garanti" att ersätta i produktsidorna.

### Steg 2 — Bäst i Test avgränsat
- `TrustBar.tsx`: "Bäst i Test – Testfakta 4.6/5" → "Persienner: Bäst i Test – Testfakta"
- "Bäst i Test" förekom BARA på /persienner-sidan och i Products.tsx (persienner-kortet). Inget togs bort från andra sidor.

### Steg 3 — Patenterad på /persienner
- `persienner/page.tsx` rad ~143: "Bäst i Test-persiennen" → "Den patenterade Bäst i Test-persiennen"
- `persienner/page.tsx` rad ~146: "Vår Bellevue-persienn" → "Vår patenterade Bellevue-persienn"

### Steg 4 — Staffanstorp-adress + serviceområde + Lund
- **Hembesok.tsx**: Ortlista uppdaterad till: Malmö, Limhamn, Staffanstorp, Lund, Lomma, Löddeköpinge, Vellinge, Höllviken, Ljunghusen, Falsterbo, Skanör, Trelleborg
- **ProductPageLayout.tsx**: Samma ortlista i CTA-sektionen
- **Footer.tsx**: Nytt 4-kolumnslayout med adressblock (Satellitvägen 16, 245 34 Staffanstorp) + serviceområde-kolumn
- **Contact.tsx**: 4 kontaktkort (Telefon, E-post, Besöksadress med Satellitvägen 16, Serviceområde)
- **layout.tsx**: title ändrad till "Malmö, Lund och Staffanstorp" (ersatte "södra Skåne")
- **Alla 14 produktsidors JSON-LD**: `areaServed` uppdaterad via sed till ny ortlista
- Borttagna orter: Burlöv, Svedala, Kävlinge, Skurup, Eslöv
- Tillagda orter: Lund, Limhamn, Löddeköpinge, Höllviken, Ljunghusen, Falsterbo, Skanör

---

## KVAR ATT GÖRA (Steg 5–9)

### Steg 5 — Skapa /korgmarkiser + /vindskydd
**Status: inte påbörjat**

Uppgift:
1. Skapa `app/korgmarkiser/page.tsx` — ny sida med ProductPageLayout
   - H1: "Korgmarkiser i Malmö — klassisk design"
   - Lokal vinkel: sekelskiftesfastigheter, innerstadsfasader
   - 3 års garanti i JSON-LD
   - Arkivkälla finns: `arkiv/content/pages/page-korgmarkiser.json`
   - Befintlig bild: `/images/shutterstock_73378162-1024x576-1.jpg`
   - FAQ: 5 frågor
   - JSON-LD: HomeAndConstructionBusiness + FAQPage (med nya areaServed)

2. Skapa `app/vindskydd/page.tsx` — ny sida med ProductPageLayout
   - H1: "Vindskydd i Malmö — för balkong och uteplats"
   - Lokal vinkel: havsnära lägen (Höllviken, Falsterbo)
   - 3 års garanti
   - Arkivkälla: `arkiv/content/pages/page-vindskydd.json`
   - Befintlig bild: `/images/shutterstock_456666382-1024x576-1.jpg`
   - FAQ: 5 frågor

3. **Header.tsx**: Lägg till i `utvandigtItems`:
   - `{ label: "Korgmarkiser", href: "/korgmarkiser" }`
   - `{ label: "Vindskydd", href: "/vindskydd" }`

4. **Products.tsx**: 
   - Korgmarkiser: ändra `href: "/markiser"` → `href: "/korgmarkiser"`
   - Vindskydd: lägg till `href: "/vindskydd"` (saknas idag)

### Steg 6 — JSON-LD på startsida och kontakt
**Status: inte påbörjat**

Uppgift:
1. `app/page.tsx`: Lägg till `<script type="application/ld+json">` med:
   - Organization
   - HomeAndConstructionBusiness (med Staffanstorp-adress, telefon, email, areaServed)
   - WebSite (med SearchAction)

2. `app/kontakt/page.tsx`: Lägg till:
   - ContactPage
   - HomeAndConstructionBusiness (samma som ovan)

LocalBusiness-data:
```json
{
  "@type": "HomeAndConstructionBusiness",
  "name": "Bellevue Solskydd",
  "image": "https://bellevuesolskydd.se/images/brand/bellevue-solskydd-logo.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Satellitvägen 16",
    "postalCode": "245 34",
    "addressLocality": "Staffanstorp",
    "addressCountry": "SE"
  },
  "telephone": "+46401811100",
  "email": "info@bellevuesolskydd.se",
  "url": "https://bellevuesolskydd.se",
  "areaServed": ["Malmö", "Limhamn", "Staffanstorp", "Lund", "Lomma", "Löddeköpinge", "Vellinge", "Höllviken", "Ljunghusen", "Falsterbo", "Skanör", "Trelleborg"]
}
```

### Steg 7 — BreadcrumbList JSON-LD
**Status: inte påbörjat**

Uppgift: Lägg till BreadcrumbList-schema i `ProductPageLayout.tsx` så alla produktsidor (inkl. nya korgmarkiser/vindskydd) och kontakt får det automatiskt.

ProductPageLayout behöver en ny prop `breadcrumbCategory` (t.ex. "Invändigt solskydd" eller "Utvändigt solskydd") och URL-slug.

Exempel för /persienner:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://bellevuesolskydd.se" },
    { "@type": "ListItem", "position": 2, "name": "Invändigt solskydd", "item": "https://bellevuesolskydd.se/#invandigt" },
    { "@type": "ListItem", "position": 3, "name": "Persienner" }
  ]
}
```

Varje produktsida måste skicka `breadcrumbCategory` till ProductPageLayout. Kategorier:
- **Invändigt solskydd**: persienner, trapersienner, plissegardiner, rullgardiner, lamellgardiner, panelgardiner, draperier
- **Utvändigt solskydd**: markiser, terrassmarkiser, fonstermarkiser, korgmarkiser, zip-screen, pergola, parasoller, insektsskydd, vindskydd

### Steg 8 — TrustBar på alla produktsidor
**Status: komponent klar, integration ej gjord**

TrustBar-komponenten har redan `variant="product"` och `guaranteeYears`-prop (gjort i Steg 1).

Kvar:
- Integrera TrustBar i `ProductPageLayout.tsx` — placera ovanför CTA-sektionen
- ProductPageLayout behöver ny prop `guaranteeYears` (10 eller 3)
- Sidor med 10 års garanti: `/persienner`, `/plissegardiner`, `/rullgardiner`
- Alla andra: 3 års garanti (default)
- Varje page.tsx måste skicka `guaranteeYears={10}` eller ingenting (default 3)

### Steg 9 — Keyword-berikning (4 sidor)
**Status: inte påbörjat**

1. **`/plissegardiner`** — Ny H2: "Mörkläggningsgardiner — total ljusstopp"
   - Sökord: "mörkläggningsgardin Malmö", "plisségardin för sovrum", "mörkläggning för barnrum"
   - Nämn Umbra-plissé (Liora, Mono, Dualis, Optima med aluminiumkärna)
   - ~150-250 ord
   - Placera efter befintlig sektion "Välj färg och material"

2. **`/zip-screen`** — Två nya H2:or:
   - "Balkongskydd och insynsskydd" (sökord: "balkongskydd Malmö", "insynsskydd balkong")
   - "Vindskydd balkong" (sökord: "vindskydd för uteplats")
   - ~200 ord totalt
   - Placera efter "Trippelt skydd"

3. **`/rullgardiner`** — Ny H2: "Mörkläggande rullgardin"
   - Sökord: "mörkläggande rullgardin sovrum", "rullgardin barnrum"
   - ~100-150 ord
   - Placera efter "Montering"

4. **`/markiser`** — Två nya H2:or:
   - "Pergolamarkis" (sökord: "pergolamarkis Malmö")
   - "Motoriserade markiser" (sökord: "motordriven markis", "elstyrd markis")
   - ~150-200 ord totalt
   - Placera efter "Designa din markis"

---

## SLUTRAPPORT

Steg 9 i originaluppdraget: skriv `RAPPORT_USP_SCHEMA_KEYWORDS.md` i repo-roten med sammanfattning per steg, commit-hashar, filändringar, och vad som gjordes var.

---

## NUVARANDE FILSTATUS (verifierat)

TrustBar.tsx har dessa props:
```tsx
interface TrustBarProps {
  variant?: "default" | "product";
  guaranteeYears?: 10 | 3;
}
```

ProductPageLayout.tsx har dessa props:
```tsx
interface ProductPageLayoutProps {
  title: string;
  intro: string;
  children: ReactNode;
  faq?: FAQItem[];
  images?: ProductImage[];
}
```
→ Behöver utökas med `guaranteeYears?` och `breadcrumbCategory?` i Steg 7+8.

Header.tsx `utvandigtItems` saknar Korgmarkiser och Vindskydd.

Products.tsx:
- Korgmarkiser: `href: "/markiser"` (ska bli `/korgmarkiser`)
- Vindskydd: saknar `href` (ska bli `/vindskydd`)

---

## DESIGN-LÅS (oförändrat)
- Färger: teal #4ABFBF, charcoal #2C2C2C, light-bg #F8F8F8
- Fonter: Raleway + Open Sans
- Inga nya UI-bibliotek
- Web3Forms access_key: LÄMNA "YOUR_KEY_HERE" kvar

## SERVICEOMRÅDE (slutgiltigt)
Malmö, Limhamn, Staffanstorp, Lund, Lomma, Löddeköpinge, Vellinge, Höllviken, Ljunghusen, Falsterbo, Skanör, Trelleborg

## FÖRETAGSADRESS
Bellevue Solskydd, Satellitvägen 16, 245 34 Staffanstorp
Telefon: 040-18 11 00 | E-post: info@bellevuesolskydd.se

## GARANTIREGLER
- 10 år: /persienner, /plissegardiner, /rullgardiner (formulering: "10 års garanti vid montering av våra montörer")
- 3 år: alla andra sidor
- Tillbehör (motorer, fjärrkontroller): 3 års garanti
- Globalt (startsida, TrustBar default): "Upp till 10 års garanti"
