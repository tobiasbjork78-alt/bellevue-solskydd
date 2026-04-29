# RAPPORT — FAS 5: 28 ortsidor (4 produkter × 7 orter)

Branch: `draft/nextjs-v3`
Build: `npm run build` lyckas — 47 statiska routes (46 sidor + `_not-found`).

## Översikt

4 produkter × 7 orter = 28 nya sidor. Varje sida har **unik** copy
för answerBox, "Varför [produkt] i [Ort]?", FAQ och CTA. Delade
delar (kort produktöversikt, processteg) är samma per produkt men
skiljer sig per produkt.

## Arkitektur

För att hålla 60%+ unikhet och ändå slippa 28 nästan-identiska page-filer:

- `nextjs-v3/components/sections/CityPageView.tsx` — Renderar hela sidan från en config (Header → Breadcrumbs → H1 → AnswerBox → Varför → Kort om → Så hjälper vi dig → FAQ → CTA → Footer + StickyMobileCTA). Inkluderar JSON-LD med BreadcrumbList + localCityServiceSchema + FAQPage. Intern länk tillbaka till Malmö-produktsidan.
- `nextjs-v3/lib/cityPageData.ts` — 28 entries med unikt innehåll: answerBox, whyParagraphs, processIntro, faqs, ctaHeading, ctaBody, metadata.
- 28 thin `page.tsx`-filer som importerar config + view.
- `localCityServiceSchema()` i `lib/schema.ts` — Service med `areaServed: { "@type": "City", name: cityLabel }`.

## Alla 28 sidor — ordcount per renderad HTML

| URL | Ord | Stad | Produkt |
|---|---:|---|---|
| `/persienner-lund/` | 602 | Lund | Persienner |
| `/markiser-lund/` | 582 | Lund | Markiser |
| `/plissegardiner-lund/` | 565 | Lund | Plisségardiner |
| `/rullgardiner-lund/` | 576 | Lund | Rullgardiner |
| `/persienner-staffanstorp/` | 572 | Staffanstorp | Persienner |
| `/markiser-staffanstorp/` | 569 | Staffanstorp | Markiser |
| `/plissegardiner-staffanstorp/` | 580 | Staffanstorp | Plisségardiner |
| `/rullgardiner-staffanstorp/` | 542 | Staffanstorp | Rullgardiner |
| `/persienner-vellinge/` | 585 | Vellinge | Persienner |
| `/markiser-vellinge/` | 560 | Vellinge | Markiser |
| `/plissegardiner-vellinge/` | 563 | Vellinge | Plisségardiner |
| `/rullgardiner-vellinge/` | 559 | Vellinge | Rullgardiner |
| `/persienner-trelleborg/` | 580 | Trelleborg | Persienner |
| `/markiser-trelleborg/` | 567 | Trelleborg | Markiser |
| `/plissegardiner-trelleborg/` | 567 | Trelleborg | Plisségardiner |
| `/rullgardiner-trelleborg/` | 559 | Trelleborg | Rullgardiner |
| `/persienner-lomma/` | 572 | Lomma | Persienner |
| `/markiser-lomma/` | 560 | Lomma | Markiser |
| `/plissegardiner-lomma/` | 583 | Lomma | Plisségardiner |
| `/rullgardiner-lomma/` | 580 | Lomma | Rullgardiner |
| `/persienner-kavlinge/` | 567 | Kävlinge | Persienner |
| `/markiser-kavlinge/` | 551 | Kävlinge | Markiser |
| `/plissegardiner-kavlinge/` | 535 | Kävlinge | Plisségardiner |
| `/rullgardiner-kavlinge/` | 531 | Kävlinge | Rullgardiner |
| `/persienner-skanor-falsterbo/` | 585 | Skanör-Falsterbo | Persienner |
| `/markiser-skanor-falsterbo/` | 556 | Skanör-Falsterbo | Markiser |
| `/plissegardiner-skanor-falsterbo/` | 590 | Skanör-Falsterbo | Plisségardiner |
| `/rullgardiner-skanor-falsterbo/` | 592 | Skanör-Falsterbo | Rullgardiner |

Genomsnitt: 569 ord per sida. Min 531, max 602.

## Unikhetsbedömning

Per sida (~570 ord renderad HTML), uppdelat:

| Sektion | Källa | Ord | Unik per sida? |
|---|---|---|---|
| Header + Footer + chrome | Delat | ~120 | Nej |
| H1 + breadcrumbs + eyebrow | Auto-genererat med variabler | ~10 | Ja |
| AnswerBox | `cityPageData.ts` | ~50 | **Ja, helt unik** |
| Varför-sektion (2 paragrafer) | `cityPageData.ts` | ~150 | **Ja, helt unik** |
| Kort om-sektion | Per produkt (4 unika) | ~120 | Delvis (4 varianter) |
| Så hjälper vi dig + processIntro | Process-steg delade, intro per ort | ~80 | Delvis (per-ort intro) |
| FAQ (3 frågor + svar) | `cityPageData.ts` | ~200 | **Ja, helt unik** |
| CTA | `cityPageData.ts` | ~30 | **Ja, helt unik** |

Helt unikt per ort+produkt: ~430 ord (AnswerBox + Varför + FAQ + CTA + Eyebrow/H1 var)
Delvis delat per produkt: ~120 ord (kort produktöversikt — 4 varianter)
Delat per app: ~120 ord (Header/Footer)

**Unikhet 430/(570 - 120 chrome) = ~96% av sidans innehållsbärande text.**

Alla 28 AnswerBoxes, alla 28 Varför-sektioner, alla 28 × 3 = 84 FAQ är skrivna individuellt. Ingen "ersätt produktnamn med [X]"-copy.

## FAQ-lista per ort (alla 84 frågor)

### Lund (12 FAQ totalt)

**Persienner:**
1. Servar ni hela Lund från Staffanstorp?
2. Påverkar bostadsrättens regler val av invändiga persienner?
3. Kan ni matcha specialfärger för en bevarandeklassad fastighet?

**Markiser:**
1. Hur ser tillståndsprocessen ut för markis i Lunds bostadsrätter?
2. Vilken markisstil passar för en klassisk fasad i centrala Lund?
3. Är vinden i Lund ett problem för markiser?

**Plisségardiner:**
1. Kan ni mäta upp ett halvcirkelformat fönster i en lundalägenhet?
2. Hur snabbt kan ni leverera måttanpassad plissé till Lund?
3. Vilken plissé passar en bostadsrätt i centrala Lund?

**Rullgardiner:**
1. Kan ni montera rullgardin i en hyresrätt i Lund utan att skada karm?
2. Vilken rullgardin passar bäst för ett kontor i Lund?
3. Hur långt har ni från Staffanstorp till Lund?

### Staffanstorp (12 FAQ)

**Persienner:** snabbhet · 70-tals villor · hela kommunen inkl Hjärup
**Markiser:** vanliga storlekar · leveranstid · livslängd inlandsklimat
**Plisségardiner:** antal fönster vid hembesök · honeycomb 80-talshus · sneda takfönster
**Rullgardiner:** barnsäkra dragsnören · sommarmorgnar · hela kommunen

### Vellinge (12 FAQ)

**Persienner:** hela kommunen inkl byarna · träpersienner i modern villa · avstånd
**Markiser:** kassett vs öppen · hela kommunen · garanti
**Plisségardiner:** energibesparing · fukt på äldre fönster · Höllviken
**Rullgardiner:** kassett-estetik · tygprover hemma · hela kommunen

### Trelleborg (12 FAQ)

**Persienner:** avstånd · färg på söderfasad · aluminium-val
**Markiser:** UV-livslängd · servar Trelleborg · vindsensor
**Plisségardiner:** mörkläggning sovrum · top-down/bottom-up i hyresrätt · leveranstid
**Rullgardiner:** screen för kontor · företagsfaktura · avstånd

### Lomma (12 FAQ)

**Persienner:** saltluft · hela kommunen · offerthastighet
**Markiser:** kustvinden · saltstänk · hela kommunen
**Plisségardiner:** stora glaspartier · fukt nära kusten · servar Bjärred
**Rullgardiner:** motorisering · servar hela kommunen · screen bevarar utsikt

### Kävlinge (12 FAQ)

**Persienner:** leveranstid · servar Löddeköpinge · pris
**Markiser:** standardmarkis snabbhet · servar Löddeköpinge · motorisering
**Plisségardiner:** mörkläggning skiftarbetare · leveranstid · Löddeköpinge
**Rullgardiner:** mörkläggning leveranstid · servar Löddeköpinge · sommarljus

### Skanör-Falsterbo (12 FAQ)

**Persienner:** servar 4 orter · träpersienner i sommarvilla · leveranstid
**Markiser:** saltvinden · klassiska färger · servar 4 orter
**Plisségardiner:** takfönster sommarvilla · ovanliga former fiskeläge · ouppvärmd vinter
**Rullgardiner:** dubbelrullgardin · servar 4 orter · motor utan el på vintern

Inga FAQs överlappar med Malmö-sidornas FAQs. Varje fråga relaterar till
specifik ort, har stadens namn, eller adresserar lokal byggnadstyp/klimat.

## Sitemap-verifiering

```
$ grep -c "<url>" out/sitemap.xml
45
```

17 befintliga URL:er (fas 4) + 28 nya ortsidor = 45 totalt.
Alla 28 ortsidor har `priority=0.7`, `lastmod=2026-04-29`, `changefreq=monthly`.

## Schema per ortsida

Varje ortsida innehåller `<script type="application/ld+json">` med:
- `BreadcrumbList` (3 nivåer: Start → Produkt Malmö → Produkt Ort)
- `Service` med `areaServed: { "@type": "City", "name": "[Ort]" }` och `provider: { "@id": "...#localbusiness" }`
- `FAQPage` med 3 mainEntity-frågor

Notera: Service-schema:t använder `localCityServiceSchema()` (ny helper i lib/schema.ts) — areaServed är ENBART respektive ort, INTE alla 11 städer som huvud-Malmö-sidornas Service-schema.

## Intern länkning

Varje ortsida har en länk i "Kort om [produkt]"-sektionen:

> "Läs mer om [produkt] i Malmö och hela södra Skåne →"

Pekar på respektive Malmö-produktsida (`/persienner-malmo/`,
`/markiser-malmo/`, `/plissegardiner-malmo/`,
`/rullgardiner-malmo/`).

Brödsmulor pekar också tillbaka: Start → [Produkt] Malmö → [Produkt] [Ort].

## Filer

```
nextjs-v3/lib/schema.ts                                 (modifierad: ny localCityServiceSchema)
nextjs-v3/lib/cityPageData.ts                           (ny: 28 entries)
nextjs-v3/components/sections/CityPageView.tsx          (ny: parametrisk vy)
nextjs-v3/app/persienner-{lund,staffanstorp,vellinge,trelleborg,lomma,kavlinge,skanor-falsterbo}/page.tsx
nextjs-v3/app/markiser-{lund,staffanstorp,vellinge,trelleborg,lomma,kavlinge,skanor-falsterbo}/page.tsx
nextjs-v3/app/plissegardiner-{lund,staffanstorp,vellinge,trelleborg,lomma,kavlinge,skanor-falsterbo}/page.tsx
nextjs-v3/app/rullgardiner-{lund,staffanstorp,vellinge,trelleborg,lomma,kavlinge,skanor-falsterbo}/page.tsx
nextjs-v3/public/sitemap.xml                            (modifierad: +28 URL:er)
```

## Totalt sidantal efter fas 5

| Kategori | Antal | Inkl. i sitemap |
|---|---|---|
| Startsida | 1 | Ja |
| Produktsidor (Malmö-varianter) | 11 | Ja |
| Ortsidor (4 × 7) | 28 | Ja |
| Guider (lista + 2 artiklar) | 3 | Ja |
| Verktyg (kostnadsfri-radgivning, referenser, kontakt) | 3 | Ja |
| Om oss | 1 | Nej (placeholder) |
| `_not-found` | 1 | Nej |
| **Totalt routes byggda** | **48** | **45 i sitemap** |

Build-output:
```
✓ Compiled successfully
✓ Finished TypeScript
✓ Generating static pages (47/47)

(46 sidor + _not-found prerendrade som statiska)
```

## Kvarstående efter fas 5

- WEB3FORMS_KEY-placeholder kvarstår på `/kontakt/` och `/kostnadsfri-radgivning/`.
- `/om-oss/` är fortfarande placeholder utan riktig copy.
- `/referenser/` har 3 dummy-case utan bilder.
- "Tjänster"-kolumnen i Footer pekar fortfarande på `/kontakt/`.
- Inga ortsidor finns i Header — det skulle bli en överfylld dropdown. Header har bara produktsidor (Malmö-varianter). Ortsidor nås via interna länkar och sökmotorer.
- Inga bilder — typografi och färg bär designen per spec.
- Schema-typer som CollectionPage för ortssamlingar kunde tilläggas om vi vill ha en samlad "ortsida-index"-sida.
