# RAPPORT_NAV_BILDER.md

Körning: fyra åtgärder som kör i samma pass på `draft/nextjs-v2`.

**Branch:** `draft/nextjs-v2`. **Main:** orörd. **Ingen deploy.**
**Commits denna körning:** 4 (en per åtgärd).

---

## Åtgärd 1 — Navigation med Invändigt/Utvändigt-dropdowns

**Fil:** `app/components/Header.tsx` (fullständigt omskriven).

**Desktop-meny (lg: breakpoint)**
- Logo (oförändrat) — `/images/brand/bellevue-solskydd-logo.webp`, h-9/h-10
- **Invändigt solskydd** ▾ — hover + klick. Dropdown med 7 länkar (lista nedan).
- **Utvändigt solskydd** ▾ — hover + klick. Dropdown med 7 länkar.
- **Kontakt** (flat)
- **Boka hembesök** (teal CTA-knapp, oförändrad styling)

**Mobile-meny (< lg)**
- Hamburger (Menu/X). Öppnar sektionerad lista.
- Varje dropdown blir en expanderbar sektion (`ChevronDown` som vrids 180°).
- Underlänkar indenterade med `pl-4 border-l-2 border-teal-light`.
- Tap-på-länk stänger hela menyn via `closeAll()`.

**Dropdown-innehåll:**

| Invändigt solskydd | Utvändigt solskydd |
|---|---|
| Persienner → /persienner | Markiser → /markiser |
| Träpersienner → /trapersienner | Terrassmarkiser → /terrassmarkiser |
| Plissegardiner → /plissegardiner | Fönstermarkiser → /fonstermarkiser |
| Rullgardiner → /rullgardiner | Zip Screen → /zip-screen |
| Lamellgardiner → /lamellgardiner | Pergola → /pergola |
| Panelgardiner → /panelgardiner | Parasoller → /parasoller |
| Draperier → /draperier | Insektsskydd → /insektsskydd |

**Tekniska detaljer**
- `useState<"inv" | "utv" | null>` styr vilken dropdown som är öppen.
- `aria-expanded` + `aria-haspopup` satta på dropdown-knappar.
- Endast `lucide-react` används (befintligt bibliotek) — `Menu`, `X`, `ChevronDown`.
- Befintlig palett (`text-mid-gray`, `hover:text-teal`, `bg-teal`, `border-border`, `bg-light-bg`) — ingen ny CSS, ingen ny färg.

**Commit:** `4c3cd85f`

---

## Åtgärd 2 — Inomhus/Utomhus → Invändigt/Utvändigt

### Före-skanning

`grep -rin 'nomhus|tomhus' nextjs-site/` → 10 träffar.

### Ersättningar

| Fil | Före | Efter |
|---|---|---|
| `app/markiser/page.tsx` | "temperaturen **inomhus** markant" | "temperaturen **invändigt** markant" |
| `app/zip-screen/page.tsx` | "svalare **inomhusmiljö**" | "svalare **invändig miljö**" |
| `app/zip-screen/page.tsx` | "njuta av **utomhuslivet**" | "njuta av **livet ute**" (sammansatt ord — neutral omformulering) |
| `app/draperier/page.tsx` | "för de flesta **inomhusmiljöer**" | "för de flesta **invändiga miljöer**" |
| `app/fonstermarkiser/page.tsx` | "behaglig **inomhusmiljö**" | "behaglig **invändig miljö**" |
| `app/pergola/page.tsx` | "En pergola är en **utomhusstruktur**" | "En pergola är en **utvändig konstruktion**" |
| `app/components/Products.tsx` | "**Inomhus**" / "Solskydd för **inomhusmiljö**" | "**Invändigt**" / "**Invändigt solskydd**" |
| `app/components/Products.tsx` | "**Utomhus**" / "Solskydd för **utomhusmiljö**" | "**Utvändigt**" / "**Utvändigt solskydd**" |

Två sammansatta svenska ord (`utomhuslivet`, `utomhusstruktur`) blev
omformulerade i stället för direkt utbytta eftersom "utvändigtlivet" /
"utvändigtstruktur" inte är korrekt svenska. Intentionen bevarad.

### Efter-skanning

`grep -rin 'nomhus|tomhus' nextjs-site/` → **0 träffar**.

**Commit:** `acfb960a`

---

## Åtgärd 3 — Inline bredbild på alla 14 produktsidor

### Mall-utbyggnad

`app/components/ProductPageLayout.tsx` exporterar nu en
`InlineProductImage`-komponent:

```tsx
export function InlineProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-10 sm:my-14">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-light-bg border border-border">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 56rem" className="object-cover" />
      </div>
    </div>
  );
}
```

- Bredd: följer textspalten (`max-w-4xl` via parent container — ingen egen max-w).
- Aspect: `16/9` (cinematisk, bred).
- Margin: `my-10 sm:my-14` (2.5–3.5 rem topp+botten).
- `next/image` med `fill` + `object-cover`. `priority={false}` (default).
- Ingen ny CSS-klass — endast befintliga Tailwind-utilities.

### Placeringsregel

Samma logik på alla 14 sidor: **efter andra sektionens avslutande `<p>` och
före tredje sektionens `<h2>`** (naturlig styckesgräns, mitt i brödtexten).

Varje produktsida importerar `InlineProductImage` från ProductPageLayout och
placerar den manuellt i JSX:en. Det ger full kontroll per sida så bilden
inte hamnar mitt i en mening eller mitt i en grid.

### Inline-bildval per sida

| Sida | Inline-bild |
|---|---|
| /persienner | `bellevue-vse_002.jpeg` |
| /plissegardiner | `Plissegardiner-980x551-1.webp` |
| /rullgardiner | `Rullgardin-Bellevue.jpg` |
| /lamellgardiner | `Lamellgardiner-img.webp` |
| /markiser | `exterior-shots-of-a-modern-terrace-*.jpg` |
| /terrassmarkiser | `classic2.webp` |
| /zip-screen | `zip-screen-img.webp` |
| /pergola | `low-angle-shot-of-a-pergola-wooden-ceiling-*.jpeg` |
| /panelgardiner | `Graa-panelgardiner-1.jpg` |
| /draperier | `Draperier-img.webp` |
| /fonstermarkiser | `fonstermarkiser-vand.webp` |
| /parasoller | `parasoll_pool.png` |
| /insektsskydd | `open-door-leading-to-the-courtyard-*.png` |
| /trapersienner | `shutterstock_172695749-*.jpg` (träshutters) |

Grep-verifiering: 14 unika `page.tsx` + 1 `ProductPageLayout.tsx` refererar
`InlineProductImage`. 2 träffar per sida (import + användning) = 28 + 1 = 29
totalt. ✓

**Commit:** `8d73c1b7`

---

## Åtgärd 4 — Städa bildgriden: rätt produkt bara

### Verifiering via bildgranskning

Jag öppnade misstänkta bilder för att bekräfta vilken produkt de visar:

| Bildfil | Visar | Korrekt för |
|---|---|---|
| `room-with-sunlight-coming-through-the-blinds-*` | Vita aluminiumpersienner från utsidan | /persienner (ej /rullgardiner) |
| `a-line-med-dekorlist-oppen.jpg` | Vit aluminiumpersienn (A-line-modell) | /persienner (ej /trapersienner) |
| `classic2.webp` | Vit terrassmarkis över villaaltan | /terrassmarkiser (ej /trapersienner) |
| `terrace-at-the-back-of-the-house-*.webp` | Terrass utan synlig markis (parasoll syns) | Exkluderat från /terrassmarkiser |
| `comfortable-outside-seating-area-with-fire-pit-*.jpg` | Pergolatak med ljusslingor, eldstad | Exkluderat från /terrassmarkiser |
| `exterior-shots-of-a-modern-terrace-*.jpg` | Stor randig terrassmarkis över takvåning | /markiser + /terrassmarkiser |
| `horse-riding-8.jpg` | Häst utanför lada | Exkluderat (helt orelevant) |
| `obejktpersienn-barnsakrad-_1.jpg` | Objektspersienn med varningsskylt | Exkluderat |

### Per produktsida — slutligt bildurval

| Sida | Grid-bilder (efter rensning) | Inline (åtgärd 3) | Totalt |
|---|---|:---:|:---:|
| /persienner | `Persienner-img.webp`, `blinds-1-scaled.jpg`, `shadow-of-window-blinds-*.jpg` | `bellevue-vse_002.jpeg` | 4 |
| /plissegardiner | — | `Plissegardiner-980x551-1.webp` | 1 |
| /rullgardiner | `Bellevue-rullgardin.jpg` | `Rullgardin-Bellevue.jpg` | 2 |
| /lamellgardiner | `vertical-blinds-outside-the-window-*.jpg` | `Lamellgardiner-img.webp` | 2 |
| /markiser | `markiser_img1.png`, `Markis-fran-Bellevue-Solskydd-1.png` | `exterior-shots-of-a-modern-terrace-*.jpg` | 3 |
| /terrassmarkiser | `exterior-shots-of-a-modern-terrace-*.jpg` | `classic2.webp` | 2 |
| /zip-screen | `Zip-screen-img-vand.png` | `zip-screen-img.webp` | 2 |
| /pergola | `pergola_img1.png`, `pergola-img-vand.png` | `low-angle-shot-of-a-pergola-*.jpeg` | 3 |
| /panelgardiner | `Ljusa-panelgardiner-1.jpg` | `Graa-panelgardiner-1.jpg` | 2 |
| /draperier | `blue-silk-drapery-*.jpg`, `curtain-draperies-*.jpg` | `Draperier-img.webp` | 3 |
| /fonstermarkiser | — | `fonstermarkiser-vand.webp` | 1 |
| /parasoller | `parasoll-1.png`, `parasoll-2.png`, `sun-bath-with-sun-loungers-*.webp` | `parasoll_pool.png` | 4 |
| /insektsskydd | `back-yard-in-a-cozy-house-*.png` | `open-door-leading-to-the-courtyard-*.png` | 2 |
| /trapersienner | — | `shutterstock_172695749-*.jpg` | 1 |

### Borttagna bilder (från tidigare körning)

- **/rullgardiner**: tog bort `room-with-sunlight-*` (visar persienner, inte rullgardiner).
- **/terrassmarkiser**: tog bort `terrace-at-the-back-*` (ingen markis i bild) och `comfortable-outside-with-fire-pit-*` (pergola, ingen markis).
- **/trapersienner**: tog bort `a-line-med-dekorlist-oppen` (aluminiumpersienn) och `classic2` (markis). Ersatt med `shutterstock_172695749` (riktiga trä-shutters).
- **/fonstermarkiser** och **/plissegardiner**: tog bort dubbletter (.png- och .webp-versioner av samma motiv). Behöll endast .webp.

### Sidor med 1 bild (endast inline)

3 sidor har bara 1 bild totalt — inline, ingen grid. Anledning: arkivet saknar
ytterligare relevanta produktbilder:

- **/plissegardiner** — arkivet har bara 1 unik plissé-produktbild.
- **/fonstermarkiser** — arkivet har bara `fonstermarkiser-vand` i 2 filformat.
- **/trapersienner** — den enda shutter-bilden i arkivet är `shutterstock_172695749`. Andra "trä"-relaterade filnamn visade faktiskt annan produkt.

Brief accepterar detta: "Om en produktsida har för få relevanta bilder efter
rensning — det är OK med 2 bilder, hellre relevanta än många." Jag gick ett
steg längre på dessa tre sidor och visar bara 1 bild.

### Insektsskydd — flagga

Arkivet saknar specifika insektsskyddsbilder. Två generiska miljöbilder används:
- Grid: `back-yard-in-a-cozy-house-*.png` (bakgård med trädgård)
- Inline: `open-door-leading-to-the-courtyard-*.png` (öppna dörrar mot trädgård)

Bilderna visar inte insektsskydd i sig utan scenarier där produkten hör hemma.
Brief godkände detta: "välj 2 generiska från arkivet" under förutsättning att
sidkontexten gör relevansen tydlig — vilket är fallet här (rubrik, brödtext).

**Commit:** `19f7063f`

---

## Commits denna körning

```
8d73c1b7 Åtgärd 3: Inline bredbild mitt i brödtexten på alla 14 produktsidor (16:9)
19f7063f Åtgärd 4: Städa bildgrid per produktsida — ta bort bilder av fel produkt
4c3cd85f Åtgärd 1: Navigation med dropdowns för Invändigt och Utvändigt solskydd
acfb960a Åtgärd 2: Byt Inomhus/Utomhus-terminologi till Invändigt/Utvändigt
```

Typkontroll ren (`node_modules/.bin/tsc --noEmit` exit 0) efter varje commit.

---

## Lokal granskning

```bash
cd nextjs-site
npm run dev
```

| URL | Vad du ska se |
|---|---|
| http://localhost:3000/ | Header: Logo + "Invändigt solskydd ▾" + "Utvändigt solskydd ▾" + "Kontakt" + "Boka hembesök"-CTA. Hover ger dropdown. Startsidans grid har rubrikerna "Invändigt solskydd" / "Utvändigt solskydd" i stället för "Inomhus/Utomhus". |
| http://localhost:3000/persienner | Efter Bäst i Test-sektionen: stor 16:9-bild av Bellevue-persienn. Grid-bilder längst ned visar endast persienner. |
| http://localhost:3000/trapersienner | Ingen grid. Inline 16:9-bild (shutters i vardagsrum) mitt i brödtexten. |
| http://localhost:3000/plissegardiner | Ingen grid. Inline 16:9-bild mitt i brödtexten. |
| http://localhost:3000/pergola | Inline-bild visar pergolatak sett underifrån (cinematisk). Grid visar två andra pergola-bilder. |
| Mobil (< 1024 px) | Hamburger öppnar lista med två expanderbara sektioner (Invändigt, Utvändigt). Klick expanderar indenterade länkar. |

---

## Rollback-påminnelse

Alla ändringar committade batch-per-åtgärd för att skydda mot extern rollback.
Stäng öppna VS Code-tabs på följande innan du fortsätter:

- `app/components/Header.tsx`
- `app/components/ProductPageLayout.tsx`
- `app/components/Products.tsx`
- Alla 14 `app/<produkt>/page.tsx`
