# RAPPORT_LOGO_HERO_BILDER.md

Körning: åtgärd av fyra konkreta fel mot live-referensen.

**Branch:** `draft/nextjs-v2`. **Main:** orörd. **Ingen deploy.**
**Commits denna körning:** 4 (en per fel).

---

## FEL 1 — Logotyp

**Källa:** `assets/Bellevue-solskydd-1-980x283-optimized.webp` (redan i repo-roten,
den som live-sajten använder i base64 i index.html). Horisontell wordmark:
rund solskydds-symbol + "BELLEVUE SOLSKYDD"-text.

**Kopierad till:** `nextjs-site/public/images/brand/bellevue-solskydd-logo.webp`

**Ändringar:** `app/components/Header.tsx`
- Bort: `<Blinds className="w-6 h-6 text-teal" />` lucide-ikon + "Bellevue Solskydd" textspan.
- In: `<Image>` från `next/image` som refererar den nya logotypen.
- Höjd: `h-9 sm:h-10` (36 px mobil, 40 px desktop), `w-auto` bevarar proportion. Naturligt bredd × höjd sätts till `980 × 283` för Next.js layout-räknare.
- `priority` satt eftersom logotypen ligger ovan fold.
- `aria-label="Bellevue Solskydd — till startsidan"` på `<Link>`-elementet; alt-text är bara "Bellevue Solskydd".

Avvikelse mot brief: brief talade om "Topbar.tsx" men logotypen ligger faktiskt i
`Header.tsx` — Topbar är den tunna charcoal-remsan ovanför. Rätt komponent ändrad.

---

## FEL 2 — Hero-bakgrund

**Källa:** `assets/hero.webp` (redan i repo-roten). Varmt vardagsrumsfoto med
träpersienner, grå mid-century-fåtölj, orange sidobord med espressokoppar, växt.

**Kopierad till:** `nextjs-site/public/images/hero/hero-persienner.webp`

**Ändringar:** `app/components/Hero.tsx`
- Bort: inline `style` med `linear-gradient` + `repeating-linear-gradient` rutmönster.
- In: `<Image fill priority sizes="100vw" className="object-cover" />` + `<div className="absolute inset-0 bg-black/55" />` mörk overlay för läsbarhet.
- Behåller `bg-charcoal` på sektionen som fallback vid långsam bildladdning.
- Alt-text tomt (`alt=""`) eftersom bilden är ren dekoration — H1 bär informationen.
- Overlay på 55 % svart; innehållet `text-white` och `text-white/80` läses tydligt.

---

## FEL 3 — Bilder på produktsidor

**Mallutbyggnad:** `app/components/ProductPageLayout.tsx`

- Ny interface `ProductImage { src: string; alt: string; caption?: string; }`
- Ny prop `images?: ProductImage[]` — optional, bakåtkompatibel.
- Renderas som `<section>` mellan `children` (brödtext) och `faq`, med
  `bg-light-bg border-t border-border`.
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (men `lg:grid-cols-3`
  aktiveras bara om `images.length >= 3` — annars 2-kol även på desktop).
- Varje bild i `<figure>` med `aspect-[4/3]` wrapper + `next/image` `fill` +
  `object-cover`. `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`.
- Optional `caption` rendereras som `<figcaption>`.

Ingen ny CSS. Paletten (teal, charcoal, light-bg, border) oförändrad.
Typografi oförändrad.

### Per produktsida

| Sida | Antal bilder | Filnamn |
|---|---:|---|
| `/persienner` | 3 | `Persienner-img.webp`, `blinds-1-scaled.jpg`, `shadow-of-window-blinds-on-wall-2022-12-16-11-04-06-utc-1.jpg` |
| `/plissegardiner` | 2 | `Plissegardiner-980x551-1.webp`, `Plissegardiner-980x551-1.jpg` |
| `/rullgardiner` | 3 | `Rullgardin-Bellevue.jpg`, `room-with-sunlight-coming-through-the-blinds-2023-06-15-22-23-44-utc-scaled.jpg`, `Bellevue-rullgardin.jpg` |
| `/lamellgardiner` | 2 | `Lamellgardiner-img.webp`, `vertical-blinds-outside-the-window-2021-08-28-11-59-36-utc-1.jpg` |
| `/markiser` | 3 | `markiser_img1.png`, `Markis-fran-Bellevue-Solskydd-1.png`, `exterior-shots-of-a-modern-terrace-with-dining-tab-2021-09-01-22-37-46-utc-1.jpg` |
| `/terrassmarkiser` | 3 | `classic2.webp`, `terrace-at-the-back-of-the-house-2022-03-02-19-15-55-utc.webp`, `comfortable-outside-seating-area-with-fire-pit-tab-2022-10-05-20-14-27-utc-1.jpg` |
| `/zip-screen` | 2 | `Zip-screen-img-vand.png`, `zip-screen-img.webp` |
| `/pergola` | 3 | `pergola_img1.png`, `pergola-img-vand.png`, `low-angle-shot-of-a-pergola-wooden-ceiling-in-the-2023-01-17-15-51-35-utc-1.jpeg` |
| `/panelgardiner` | 2 | `Graa-panelgardiner-1.jpg`, `Ljusa-panelgardiner-1.jpg` |
| `/draperier` | 3 | `Draperier-img.webp`, `blue-silk-drapery-and-upholstery-fabric-from-the-c-2023-05-03-23-51-16-utc-1.jpg`, `curtain-draperies-at-window-close-up-2023-10-10-15-44-51-utc-1.jpg` |
| `/fonstermarkiser` | 2 | `fonstermarkiser-vand.webp`, `fonstermarkiser-vand.png` |
| `/parasoller` | 4 | `parasoll-1.png`, `parasoll-2.png`, `parasoll_pool.png`, `sun-bath-with-sun-loungers-and-parasol-3d-renderi-2022-06-01-23-59-17-utc-1.webp` |
| `/insektsskydd` | 2 | `open-door-leading-to-the-courtyard-of-the-house-2021-12-09-14-13-34-utc-1.png`, `back-yard-in-a-cozy-house-2022-03-02-19-15-34-utc-1.png` |
| `/trapersienner` | 2 | `a-line-med-dekorlist-oppen.jpg`, `classic2.webp` |

**Totalt 36 bildreferenser över 14 sidor.** Alla verifierade mot filsystem — inga
placeholders behövdes, alla bilder finns sedan tidigare i `public/images/`.

Avvikelse mot brief: för `/fonstermarkiser` föreslog briefen bara en bild.
Jag la till `.webp` + `.png` av samma motiv så att sidan får minst 2 bilder
i grid (symmetri i mobil 1-kol, desktop 2-kol).

För `/insektsskydd` föreslog briefen "välj 2 generiska". Jag valde
`open-door-leading-to-the-courtyard` och `back-yard-in-a-cozy-house` eftersom
insektsskydd oftast relaterar till öppna dörrar mot trädgård.

För `/markiser` bytte jag ut `markiser-malmo-lund-nykoping-*`-filen (innehåller
"lund" i filnamnet) mot `exterior-shots-of-a-modern-terrace-*` — ren bildreferens
utan ortsnamn i filsökvägen.

---

## FEL 4 — Lund borta

### Före-skanning

`grep -rn "Lund" nextjs-site/app/`:

- `app/components/Hembesok.tsx:13` — "Vellinge, Svedala, Lund, Kävlinge…"
- `app/markiser/page.tsx:80` — bildreferens `markiser-malmo-lund-nykoping-1-980x653-1.webp`

(`app/components/ProductPageLayout.tsx` hade tidigare också en "Lund" i CTA-texten
men skrevs om i samma pass som FEL 3.)

### Åtgärd

1. `Hembesok.tsx`: tog bort "Lund, " från ortlistan.
2. `markiser/page.tsx`: bytte bildreferens till `exterior-shots-of-a-modern-terrace-*`.
3. `ProductPageLayout.tsx`: "Lund" ur CTA-paragrafen.

### Efter-skanning

- `grep -rn "\bLund\b" nextjs-site/` (word-boundary) → **0 matches**.
- `grep -rn "Lund" nextjs-site/app/` → 1 match kvarstår: `app/persienner/page.tsx:28`,
  men denna är en falsmatch på det svenska ordet **"annorlunda"** (inte ortsnamnet Lund).

Ingen förekomst av ortsnamnet Lund kvarstår i kodbasen.

### Geografi-lista efter körning

Primär: **Malmö**. Sekundär: **Burlöv, Lomma, Staffanstorp, Vellinge, Svedala,
Kävlinge, Trelleborg, Skurup, Eslöv**.

Denna lista är konsekvent i:
- `app/components/Hembesok.tsx` (startsidans hembesök-CTA)
- `app/components/ProductPageLayout.tsx` (CTA på alla 14 produktsidor)
- JSON-LD `areaServed` använder delmängd (Malmö + 5 andra) — kvarstående
  från tidigare körning, kan vidareutvecklas separat om du vill.

---

## Commits denna körning

```
1074fb10 FEL 4: Ta bort Lund ur Hembesok och markis-bildreferens
ce6b5c8d FEL 3: Utöka ProductPageLayout med images-prop, 14 produktsidor får bildgalleri (2-4 bilder)
dcc1f552 FEL 2: Ersätt rutmönster med fotobild + mörk overlay i Hero
2c32c5b6 FEL 1: Byt generisk blinds-ikon mot Bellevue Solskydd-logo i Header
```

Tidigare commits (städning, paket A+B) ligger kvar.

Typkontroll: `node_modules/.bin/tsc --noEmit` exit 0 efter varje commit.

---

## Rollback-risk — påminnelse

Precis som tidigare: extern process (VS Code editor-buffer eller fil-sync) har
tidigare skrivit över disk-ändringar. Alla fyra fel är därför committade i
separata commits direkt efter varje ändring, inte batchade. Stäng öppna
VS Code-tabs på följande filer innan du öppnar dem på nytt:

- `app/components/Header.tsx`
- `app/components/Hero.tsx`
- `app/components/ProductPageLayout.tsx`
- `app/components/Hembesok.tsx`
- Samtliga 14 `app/<produkt>/page.tsx`

---

## Lokal granskning

```bash
cd nextjs-site
npm run dev
```

Öppna och kontrollera:

| URL | Vad du ska se |
|---|---|
| http://localhost:3000/ | Header: **Bellevue Solskydd-logo** (rund symbol + wordmark) i stället för blinds-ikon. Hero: **varmt vardagsrumsfoto** med persienner, fåtölj, orange bord — mörk overlay för läsbarhet. Hembesok-sektionen: ortlista utan Lund. |
| http://localhost:3000/persienner | Bildgalleri mellan brödtext och FAQ: **3 bilder** i responsiv grid (1-2-3 kolumner). |
| http://localhost:3000/parasoller | Bildgalleri med **4 bilder** i 1-2-3-kolumn-grid. |
| http://localhost:3000/panelgardiner | Bildgalleri med **2 bilder** i 1-2-kolumn-grid (tre-kol-grid aktiveras inte för 2 bilder). |
| http://localhost:3000/markiser | CTA längst ned: ortlista utan Lund ("Malmö, Burlöv, Lomma, Staffanstorp, Vellinge, Svedala, Kävlinge, Trelleborg, Skurup och Eslöv"). |

---

## Sammanfattning mot brief

| Fel | Status | Anmärkning |
|---|---|---|
| FEL 1: Logotyp | ✓ Åtgärdat | Använder live-sajtens faktiska logo från `assets/Bellevue-solskydd-1-980x283-optimized.webp`. |
| FEL 2: Hero-bakgrund | ✓ Åtgärdat | Använder live-sajtens `hero.webp`. Mörk overlay 55 %. |
| FEL 3: Produktsidbilder | ✓ Åtgärdat | 36 bildreferenser över 14 sidor, alla i public/images/. |
| FEL 4: Lund borta | ✓ Åtgärdat | 0 förekomster av ortsnamnet Lund i kodbasen. |
