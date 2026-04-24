# INNEHÅLLSKARTA — Bellevue Solskydd (nextjs-site/)

Branch: `draft/nextjs-v2`  
Datum: 2026-04-24  
Metod: Statisk analys av källkod (ingen runtime)

---

## 1. SIDOR (app/**/page.tsx)

### 1.1 Startsida

| Fält | Värde |
|------|-------|
| URL | `/` |
| Fil | `app/page.tsx` (27 rader) |
| H1 | Ingen egen — delegeras till Hero-komponenten: **"Solskydd i Malmö och södra Skåne"** |
| Ordcount | ~0 i filen (allt innehåll i komponenter) |
| H2:or | 0 (i filen) |
| FAQ | Nej |
| Bilder | 0 i filen (Hero laddar `/images/hero/hero-persienner.webp`) |
| JSON-LD | Nej |
| Unika element | Topbar, Header, Hero, TrustBar (5 trust-signaler), Products (15 produktkort), Hembesok-CTA, Contact (formulär), Footer |

---

### 1.2 Produktsidor (14 st)

Alla produktsidor följer identisk struktur via `ProductPageLayout`:
- Topbar → Header → Breadcrumb → H1/intro → H2-sektioner med brödtext → InlineProductImage (2 st) → Bildgalleri (images-prop) → FAQ-sektion → CTA-sektion → Footer

| # | URL | Fil | H1 | ~Ord | H2 | FAQ | Bilder | JSON-LD |
|---|-----|-----|----|------|----|----|--------|---------|
| 1 | `/persienner` | `app/persienner/page.tsx` | Persienner i Malmö — Bäst i Test sedan 1982 | 757 | 6 | 7 | 4 | HCB + FAQ |
| 2 | `/trapersienner` | `app/trapersienner/page.tsx` | Träpersienner i Malmö — premium för villan | 546 | 7 | 6 | 1 | HCB + FAQ |
| 3 | `/pergola` | `app/pergola/page.tsx` | Pergola i Malmö och Svedala — uterum för trädgården | 524 | 5 | 6 | 3 | HCB + FAQ |
| 4 | `/parasoller` | `app/parasoller/page.tsx` | Parasoller i Malmö och Trelleborg — uteservering och trädgård | 515 | 6 | 5 | 4 | HCB + FAQ |
| 5 | `/lamellgardiner` | `app/lamellgardiner/page.tsx` | Lamellgardiner i Malmö — för stora fönsterpartier | 503 | 5 | 6 | 2 | HCB + FAQ |
| 6 | `/markiser` | `app/markiser/page.tsx` | Markiser i Malmö — balkong, fasad och innerstadsfastigheter | 485 | 6 | 5 | 3 | HCB + FAQ |
| 7 | `/plissegardiner` | `app/plissegardiner/page.tsx` | Plissegardiner i Malmö — eleganta för alla fönstertyper | 478 | 5 | 5 | 1 | HCB + FAQ |
| 8 | `/insektsskydd` | `app/insektsskydd/page.tsx` | Insektsskydd i Malmö och Staffanstorp — fönster och dörrar | 474 | 5 | 5 | 2 | HCB + FAQ |
| 9 | `/terrassmarkiser` | `app/terrassmarkiser/page.tsx` | Terrassmarkiser i Malmö — för södervända uteplatser | 459 | 5 | 5 | 2 | HCB + FAQ |
| 10 | `/draperier` | `app/draperier/page.tsx` | Draperier i Malmö — wavegardiner för äldre fastigheter | 459 | 5 | 5 | 3 | HCB + FAQ |
| 11 | `/fonstermarkiser` | `app/fonstermarkiser/page.tsx` | Fönstermarkiser i Malmö — funkisvillor och äldre bestånd | 447 | 5 | 5 | 1 | HCB + FAQ |
| 12 | `/panelgardiner` | `app/panelgardiner/page.tsx` | Panelgardiner i Malmö — för stora fönsterpartier | 445 | 5 | 5 | 2 | HCB + FAQ |
| 13 | `/zip-screen` | `app/zip-screen/page.tsx` | Zip Screen i Malmö — vindtålig vertikalmarkis | 432 | 5 | 5 | 2 | HCB + FAQ |
| 14 | `/rullgardiner` | `app/rullgardiner/page.tsx` | Rullgardiner i Malmö — från ljusfilter till mörkläggning | 419 | 5 | 5 | 2 | HCB + FAQ |

> **HCB** = HomeAndConstructionBusiness, **FAQ** = FAQPage  
> Ordcount är uppskattad från extraherade svenska ord i JSX (exkl. kod, attribut, JSON-LD).

---

### 1.3 Kontaktsida

| Fält | Värde |
|------|-------|
| URL | `/kontakt` |
| Fil | `app/kontakt/page.tsx` (26 rader) |
| H1 | Ingen i filen — delegeras till Contact-komponenten |
| Ordcount | ~0 i filen (allt i Contact-komponent) |
| H2:or | 0 i filen |
| FAQ | Nej |
| Bilder | 0 i filen |
| JSON-LD | Nej |
| Metadata-title | "Kontakta oss \| Bellevue Solskydd" |
| Unika element | Contact-komponent (formulär, kontaktkort) |

---

### 1.4 H2-rubriker per produktsida

**Persienner (6):** Måttbeställda persienner med montering · Bäst i Test-persiennen · 7 modeller för alla behov · Checklista för att välja rätt persienner · Mått · 11 standardfärger i aluminium

**Träpersienner (7):** Träpersienner skapar atmosfär · Hållbar och certifierad träproduktion · Teknik som fungerar · Skräddarsydd design · Flera färger och träslag · Enkel skötsel · Montering

**Markiser (6):** Terrassmarkiser för balkong och uteplats · Fasadmontering i innerstadsfastigheter · Fönstermarkiser — stoppar solen innan den når glaset · Korgmarkiser — klassisk design · Zip Screen — maximalt skydd i vind · Designa din markis

**Parasoller (6):** Specialtillverkade för företag och privat · Många storlekar och färger · Klassiska parasoller i stort urval · Sammankopplade parasoller för stora ytor · Vindstarka parasoller för utsatta lägen · För alla behov

**Pergola (5):** Pergolan är uterummet med möjligheter · Välj mellan tak, väggar eller fristående · Pergola med tak och väggar · Vädersäker och vacker · Extrautrustning för utelivet

**Lamellgardiner (5):** Enkel styrning av ljus och insyn · Skräddarsydda lösningar för dina behov · Designa din atmosfär med färg och struktur · För villor och kontor · Monteras med precision

**Draperier (5):** Exklusiva gardiner för ditt hem · Wave-tekniken · Funktionalitet och anpassningsbarhet · Modern styrning · Passform för innerstadens hem

**Fönstermarkiser (5):** Stoppar solstrålningen · Fönstermarkiser för alla · Motordriven eller bandreglage · Designa din markis själv · Enkel installation

**Insektsskydd (5):** För fönster och dörrar · Effektivt och estetiskt · Anpassat efter dina behov · Transparent glasfiberväv · Skräddarsytt skydd

**Panelgardiner (5):** Ett mångsidigt solskydd · Modernt och flexibelt val · Styrning och material · Kombinera mångsidighet och stil · Skräddarsydd för ditt hem

**Plissegardiner (5):** Plisségardinen är ett elegant solskydd · Skydd mot ljus och insyn · Hållbar och smart funktion · För takvåningar och snedfönster · Välj färg och material

**Rullgardiner (5):** Måttanpassade rullgardiner med montering · Styrning · Hemmakontor, butik eller lägenhet · Smart hem · Montering

**Terrassmarkiser (5):** Terrassmarkiser monterade och säkra · Motordrift och sensorer · Välj takprofilering eller kassett · Design och materialval · För hem och företag

**Zip Screen (5):** Zip Screen mot värme och insyn · Sidoskenor som håller i vind · Måttanpassad för varje fönster · Många valmöjligheter · Trippelt skydd

---

## 2. KOMPONENTER (app/components/*.tsx)

| # | Fil | Syfte | Används på |
|---|-----|-------|------------|
| 1 | `Contact.tsx` | Kontaktformulär + kontaktkort (telefon, email, område) | Startsidan, Kontakt |
| 2 | `Footer.tsx` | Sidfot med snabblänkar, kontaktinfo, copyright | Alla sidor |
| 3 | `Header.tsx` | Sticky nav med dropdown (Invändigt/Utvändigt), mobilmeny, CTA | Alla sidor |
| 4 | `Hembesok.tsx` | CTA-sektion "Kostnadsfritt hembesök — utan köptvång" | Startsidan |
| 5 | `Hero.tsx` | Hero-bild med H1 och CTA-knapp ("Boka kostnadsfritt hembesök") | Startsidan |
| 6 | `ProductPageLayout.tsx` | Sidmall för alla produktsidor (breadcrumb, titel, FAQ, galleri, CTA) | Alla 14 produktsidor |
| 7 | `Products.tsx` | Produktgrid (8 invändiga + 7 utvändiga) med kort och bilder | Startsidan |
| 8 | `ScrollAnimator.tsx` | IntersectionObserver-utility för scroll-animationer | Alla sidor |
| 9 | `Topbar.tsx` | Sticky topprad med telefon-CTA | Alla sidor |
| 10 | `TrustBar.tsx` | 5 trust-signaler (Sedan 1982, Bäst i Test, etc.) | Startsidan |

---

## 3. GLOBALA ELEMENT

### 3.1 Navigation (Header.tsx)

**Toppmeny:**
- Logo (länk till `/`)
- Dropdown: **Invändigt solskydd** → Persienner, Träpersienner, Plissegardiner, Rullgardiner, Lamellgardiner, Panelgardiner, Draperier
- Dropdown: **Utvändigt solskydd** → Markiser, Terrassmarkiser, Fönstermarkiser, Zip Screen, Pergola, Parasoller, Insektsskydd
- Textlänk: Kontakt
- CTA-knapp: "Boka hembesök" → `/kontakt`
- Hamburger-meny (mobil) med samma struktur

**Saknas i navigationen:** Korgmarkiser (listas i Products.tsx men pekar till `/markiser`), Vindskydd (listas i Products.tsx utan länk)

### 3.2 Footer (Footer.tsx)

- Företagsnamn + tagline "Kvalitet sedan 1982"
- Telefon: 040-18 11 00
- Email: info@bellevuesolskydd.se
- Snabblänkar: Persienner, Markiser, Plissegardiner, Rullgardiner, Kontakt
- Copyright: ©2026

### 3.3 Trust-strip (TrustBar.tsx)

Visas bara på startsidan. 5 signaler:
1. Sedan 1982
2. Bäst i Test – Testfakta 4.6/5
3. Kostnadsfritt hembesök
4. Måttanpassat
5. Egen montering

### 3.4 Kontaktuppgifter

| Uppgift | Värde | Visas i |
|---------|-------|---------|
| Telefon | 040-18 11 00 | Topbar, Hero (implicit via CTA), Hembesok, ProductPageLayout, Contact, Footer |
| Email | info@bellevuesolskydd.se | Contact, Footer |
| Adress | Ingen fysisk adress visas på sajten | — |
| Öppettider | Inga | — |

### 3.5 Geografi

| Ort | Var den nämns |
|-----|---------------|
| **Malmö** | Alla H1:or, metadata, Topbar, Hero, Contact, Hembesok, ProductPageLayout, JSON-LD |
| Staffanstorp | Insektsskydd-H1, Hembesok, ProductPageLayout, JSON-LD |
| Vellinge | Hembesok, ProductPageLayout, JSON-LD |
| Trelleborg | Parasoller-H1, Hembesok, ProductPageLayout, JSON-LD |
| Svedala | Pergola-H1, Hembesok, ProductPageLayout, JSON-LD |
| Burlöv | Hembesok, ProductPageLayout |
| Lomma | Hembesok, ProductPageLayout |
| Kävlinge | Hembesok, ProductPageLayout |
| Skurup | Hembesok, ProductPageLayout |
| Eslöv | Hembesok, ProductPageLayout |
| Södra Skåne | layout.tsx (meta), Hero, Contact |
| Lund | Nämns ej |

---

## 4. BILDER

### 4.1 Mappstruktur i public/images/

| Mapp | Antal filer | Innehåll |
|------|-------------|----------|
| `images/` (rot) | 121 | Alla produktbilder, stockfoton, ikoner |
| `images/hero/` | 1 | `hero-persienner.webp` |
| `images/brand/` | 1 | `bellevue-solskydd-logo.webp` |
| **Totalt** | **123** | |

### 4.2 Filformat

| Format | Antal |
|--------|-------|
| .jpg | 50 |
| .png | 48 |
| .webp | 18 |
| .jpeg | 6 |
| .webm | 1 (video: `Vi-ar-Bellevue-Solskydd.webm`) |

### 4.3 Bilder per produktsida

| Sida | Antal | Filer |
|------|-------|-------|
| Parasoller | 4 | parasoll-1.png, parasoll-2.png, parasoll_pool.png, sun-bath-*.webp |
| Persienner | 4 | Persienner-img.webp, bellevue-vse_002.jpeg, blinds-1-scaled.jpg, shadow-of-window-blinds-*.jpg |
| Draperier | 3 | Draperier-img.webp, blue-silk-drapery-*.jpg, curtain-draperies-*.jpg |
| Markiser | 3 | markiser_img1.png, Markis-fran-Bellevue-Solskydd-1.png, exterior-shots-*.jpg |
| Pergola | 3 | pergola_img1.png, pergola-img-vand.png, low-angle-shot-*.jpeg |
| Lamellgardiner | 2 | Lamellgardiner-img.webp, vertical-blinds-*.jpg |
| Panelgardiner | 2 | Ljusa-panelgardiner-1.jpg, Graa-panelgardiner-1.jpg |
| Insektsskydd | 2 | back-yard-*.png, open-door-*.png |
| Terrassmarkiser | 2 | classic2.webp, exterior-shots-*.jpg |
| Rullgardiner | 2 | Bellevue-rullgardin.jpg, Rullgardin-Bellevue.jpg |
| Zip Screen | 2 | Zip-screen-img-vand.png, zip-screen-img.webp |
| Fönstermarkiser | 1 | fonstermarkiser-vand.webp |
| Plissegardiner | 1 | Plissegardiner-980x551-1.webp |
| Träpersienner | 1 | shutterstock_172695749-*.jpg |

### 4.4 Trasiga bildreferenser

**Inga.** Alla bildsökvägar som refereras i koden finns i `public/images/`.

---

## 5. JSON-LD SCHEMA

| Sida | Schema-typer |
|------|-------------|
| Startsidan | Inga |
| Kontakt | Inga |
| Alla 14 produktsidor | `HomeAndConstructionBusiness` + `FAQPage` (med `Question`/`Answer`) |

Saknas på sajtnivå: `Organization`, `LocalBusiness`, `WebSite`, `BreadcrumbList`

---

## 6. MILJÖVARIABLER

Inga `.env`-filer finns. Inga `process.env`- eller `NEXT_PUBLIC_`-referenser i koden.

Kontaktformuläret (Contact.tsx) använder Web3Forms API men API-nyckeln är hårdkodad som `"YOUR_KEY_HERE"` — **formuläret fungerar inte**.

---

## 7. RAPPORTFILER I REPO-ROTEN

| Fil | Senast ändrad |
|-----|---------------|
| `ARKIV_PLAN.md` | 2026-04-17 |
| `RAPPORT_BILDLAYOUT.md` | 2026-04-17 |
| `RAPPORT_DESIGN_LYFT.md` | 2026-04-17 |
| `RAPPORT_LOGO_HERO_BILDER.md` | 2026-04-17 |
| `RAPPORT_NAV_BILDER.md` | 2026-04-17 |
| `RAPPORT_PRODUKTSIDOR.md` | 2026-04-17 |

---

## 8. SAMMANFATTNING

| Mått | Värde |
|------|-------|
| Totalt antal sidor | 16 (1 start + 14 produkt + 1 kontakt) |
| Totalt antal komponenter | 10 |
| Sidor utan FAQ | 2 (Startsidan, Kontakt) |
| Sidor utan bilder (i sidfilen) | 2 (Startsidan, Kontakt) |
| Sidor med <400 ord brödtext | 0 (lägst: Rullgardiner ~419) |
| Sidor med <450 ord brödtext | 5 (Rullgardiner, Zip Screen, Plissegardiner, Panelgardiner, Fönstermarkiser) |
| Totalt FAQ-frågor | 76 |
| Totalt bilder i public/ | 123 (inkl. 1 video) |
| Trasiga bildreferenser | 0 |
| TODO-kommentarer | 0 |

### Produkter utan egen sida

| Produkt | Listning | Länk |
|---------|----------|------|
| **Korgmarkiser** | Products.tsx (startsidan) | Pekar till `/markiser` |
| **Vindskydd** | Products.tsx (startsidan) | **Ingen länk** |

### Produkter i nav vs sidor

Header-navigationen listar 14 produkter. Products-komponenten listar 15 (+ Korgmarkiser) + 1 utan länk (Vindskydd) = 16 produkttyper totalt. Korgmarkiser och Vindskydd saknar i navigationen.

---

## 9. OBSERVATIONER

1. **Kontaktformulär trasigt.** `Contact.tsx:89` har `value="YOUR_KEY_HERE"` som Web3Forms access_key. Formuläret kommer inte att skicka iväg data.

2. **Ingen fysisk adress.** Telefon och email finns, men ingen gatuadress eller besöksadress visas någonstans — varken i UI eller JSON-LD.

3. **Inga öppettider.** Varken i UI eller schema.

4. **JSON-LD saknas på startsida och kontaktsida.** Startsidan (som borde ha `Organization`/`LocalBusiness`/`WebSite`) har ingen strukturerad data alls.

5. **BreadcrumbList-schema saknas.** Visuella breadcrumbs finns (ProductPageLayout) men ingen `BreadcrumbList`-schema i JSON-LD.

6. **Vindskydd har ingen sida och ingen länk.** Kortet i Products.tsx renderas utan `<a>`-tagg — det går inte att klicka.

7. **Korgmarkiser har ingen egen sida.** Pekar till `/markiser` som en "catch-all". I navigationen (Header) finns Korgmarkiser inte alls.

8. **TrustBar bara på startsidan.** Trust-signalerna (Bäst i Test, Sedan 1982, etc.) visas inte på produktsidorna.

9. **Lund nämns aldrig.** Trots att Lund är en stor stad nära Malmö nämns den inte i vare sig brödtext, metadata eller JSON-LD.

10. **Startsidans H1 sitter i Hero-komponenten.** Inte i `page.tsx`. Det är korrekt men gör det svårare att se vad som renderas.

11. **Footer-snabblänkar ojämna.** Bara 5 av 14 produkter finns i footern (Persienner, Markiser, Plissegardiner, Rullgardiner, Kontakt).

12. **Video-fil (`Vi-ar-Bellevue-Solskydd.webm`) används inte.** Filen finns i `public/images/` men refereras aldrig i koden.

13. **Många bilder i public/ är oanvända.** 123 filer i public/images/ men produktsidorna refererar totalt ~34 unika bilder + 1 hero + 1 logo = ~36. Resterande ~87 filer verkar oanvända.

14. **Alla H1:or nämner "Malmö".** Bra för lokal SEO men gör att bi-orter (Staffanstorp, Trelleborg, Svedala) bara fångas i H1 för 3 av 14 sidor.

15. **Ordcount-variation.** Persienner-sidan (757 ord) har nästan dubbelt så mycket text som de tunnaste sidorna (~420 ord). Innehållsdjupet är ojämnt.

16. **Copyright "©2026".** Stämmer med nuvarande år men är hårdkodat, inte dynamiskt.
