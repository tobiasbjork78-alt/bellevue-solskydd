# RAPPORT — Steg 5–9

Branch: `draft/nextjs-v2`
Datum: 2026-04-24

---

## Steg 5 — Skapa /korgmarkiser + /vindskydd
**Commit:** `c00b8954`

| Ändring | Fil |
|---------|-----|
| Ny produktsida | `app/korgmarkiser/page.tsx` |
| Ny produktsida | `app/vindskydd/page.tsx` |
| Nav-uppdatering | `app/components/Header.tsx` — Korgmarkiser + Vindskydd i utvändigt-dropdown |
| Produktkort | `app/components/Products.tsx` — Korgmarkiser → `/korgmarkiser`, Vindskydd → `/vindskydd` |

- Korgmarkiser: H1 "Korgmarkiser i Malmö — klassisk design", 5 H2, 5 FAQ, JSON-LD (HCB + FAQ), lokal vinkel sekelskiftesfasader
- Vindskydd: H1 "Vindskydd i Malmö — för balkong och uteplats", 5 H2, 5 FAQ, JSON-LD (HCB + FAQ), lokal vinkel Höllviken/Falsterbo
- Båda med 3 års garanti, areaServed-lista, bilder från public/images/

**OBS:** Denna commit återställde även hela nextjs-site/ i git-treet (commit 620214c8 hade av misstag tagit bort katalogen från treet).

---

## Steg 6 — JSON-LD på startsida + kontakt
**Commit:** `9d803300`

| Ändring | Fil |
|---------|-----|
| JSON-LD tillagt | `app/page.tsx` |
| JSON-LD tillagt | `app/kontakt/page.tsx` |

Startsidan fick:
- `Organization` (name, url, logo)
- `HomeAndConstructionBusiness` (Satellitvägen 16, Staffanstorp, telefon, email, areaServed)
- `WebSite` med `SearchAction`

Kontaktsidan fick:
- `ContactPage`
- `HomeAndConstructionBusiness` (samma som startsidan)
- Canonical URL tillagd

---

## Steg 7 — BreadcrumbList JSON-LD
**Commit:** `5ce92cde`

| Ändring | Fil |
|---------|-----|
| Ny prop `category` + BreadcrumbList-schema + visuell breadcrumb | `app/components/ProductPageLayout.tsx` |
| `category="invandigt"` | 7 sidor: persienner, trapersienner, plissegardiner, rullgardiner, lamellgardiner, panelgardiner, draperier |
| `category="utvandigt"` | 9 sidor: markiser, terrassmarkiser, fonstermarkiser, zip-screen, pergola, parasoller, insektsskydd, korgmarkiser, vindskydd |
| BreadcrumbList Hem → Kontakt | `app/kontakt/page.tsx` |

Struktur: Hem → Invändigt/Utvändigt solskydd → Produktnamn

---

## Steg 8 — TrustBar på alla produktsidor
**Commit:** `5054f668`

| Ändring | Fil |
|---------|-----|
| Import TrustBar, ny prop `guaranteeYears`, placering mellan FAQ och CTA | `app/components/ProductPageLayout.tsx` |
| `guaranteeYears={10}` | persienner, plissegardiner, rullgardiner |

- TrustBar variant="product" visas nu på alla 16 produktsidor
- 3 sidor har 10 års garanti, övriga 13 har 3 år (default)

---

## Steg 9 — Keyword-berikning
**Commit:** `3022d14b`

| Sida | Nya H2:or | Sökord | ~Ord |
|------|-----------|--------|------|
| `/plissegardiner` | Mörkläggningsgardiner — total ljusstopp | mörkläggningsgardin Malmö, mörkläggning barnrum | 200 |
| `/zip-screen` | Balkongskydd och insynsskydd · Vindskydd för balkong | balkongskydd Malmö, insynsskydd balkong, vindskydd uteplats | 200 |
| `/rullgardiner` | Mörkläggande rullgardin | mörkläggande rullgardin sovrum, rullgardin barnrum | 150 |
| `/markiser` | Pergolamarkis · Motoriserade markiser | pergolamarkis Malmö, motordriven markis, elstyrd markis | 200 |

---

## Sammanfattning

| Steg | Commit | Filer ändrade |
|------|--------|---------------|
| 5 | `c00b8954` | 170 (inkl. tree-restore) |
| 6 | `9d803300` | 2 |
| 7 | `5ce92cde` | 18 |
| 8 | `5054f668` | 4 |
| 9 | `3022d14b` | 4 |

Sajten har nu 18 sidor (16 produkt + startsida + kontakt), alla med JSON-LD, BreadcrumbList och TrustBar.
