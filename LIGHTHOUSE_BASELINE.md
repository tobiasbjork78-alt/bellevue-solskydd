# LIGHTHOUSE_BASELINE.md

Branch: `draft/nextjs-v2`
Datum: 2026-04-24

---

## Status — Lighthouse-körning

**Lighthouse CLI gick inte att köra i den här miljön.**

Miljö: WSL2 Ubuntu på Windows. Lighthouse kräver en Chrome-instans som
den kan styra via CDP. Försökta vägar och resultat:

| Försök | Resultat |
|--------|----------|
| `lighthouse` via `npm install -D lighthouse chrome-launcher` + default chrome-launcher | Hittar ingen Chrome på WSL-sidan |
| Peka `CHROME_PATH` på Windows `chrome.exe` | `Unable to connect to Chrome` (WSL-localhost ≠ Windows-localhost för debug-port) |
| `@puppeteer/browsers install chrome@stable` (bundled Linux-binär) | Binären laddas ner men saknar systembibliotek (`libnspr4.so` m.fl.). Installation av dessa kräver `sudo apt install` |

Att få igång en fungerande Lighthouse-körning i WSL kräver
sudo-installation av Chrome + följdbibliotek — dvs. betydligt mer än en
timme med privilege-prompts, utan garanti att siffrorna blir stabila i
WSL i alla fall.

Per instruktion ("Om en Lighthouse-quick-win är större än en timme —
flagga och hoppa över") är detta flaggat.

`lighthouse` och `chrome-launcher` finns installerade som devDeps och är
redo att användas när Chrome finns tillgängligt (t.ex. i CI eller på
Mac/Linux-dev-maskin).

### Kommando att köra när Chrome finns

```bash
# 1. Bygg + serva
npm run build
npx serve -p 3456 out &

# 2. Kör lighthouse (mobile + desktop)
for url in / /persienner /markiser /plissegardiner; do
  for form in mobile desktop; do
    npx lighthouse "http://localhost:3456${url}" \
      --preset=${form} \
      --output=html,json \
      --output-path="lh-${url//\//_}-${form}" \
      --chrome-flags="--headless --no-sandbox"
  done
done
```

---

## Statisk kodaudit (ersätter mätning)

Eftersom Lighthouse inte kunde köras har jag gjort en manuell
kodgenomgång av de faktorer Lighthouse vanligen flaggar. Ingen faktisk
LCP/INP/CLS-siffra finns — men kodgrunden är redan relativt ren.

### Performance — nuläge

| Område | Status | Kommentar |
|--------|--------|-----------|
| `next/image` | OK | 5 st `<Image>` används. Inga råa `<img>`-taggar. |
| `priority`-flagga | OK | Hero (`app/components/Hero.tsx`) och Header-logo (`app/components/Header.tsx`) har `priority`. |
| `sizes` på responsiva bilder | OK | Hero (`100vw`), Products-kort (`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw`), ProductPageLayout-galleri/inline (`(max-width: 1024px) 100vw, 56rem`). |
| Explicit width/height | OK | Header-logo har 980×283. `fill`-bilder har aspect-ratio via `aspect-[16/9]` → ingen CLS. |
| `next/font` | OK | `next/font/google` med Raleway + Open Sans, `display: swap`, `subsets: ["latin"]`. |
| Latin-ext subsetting | Miss | Svenska ä/ö finns i `latin`-subset, `latin-ext` inte strikt nödvändigt. Kan läggas till för säkerhets skull. |
| Font preload | OK (auto) | `next/font/google` preloadar automatiskt. |
| `next.config.ts` output | Obs | `output: "export"` + `images: { unoptimized: true }` — ingen runtime-bildoptimering, men inga WebP/AVIF-pipelines. Bilderna är redan i `.webp` där så är valt. |
| Bundle | Rimligt | Build ger ~700 KB JS-chunks totalt i `out/_next/static/chunks/`. Ingen dynamisk import nödvändig ännu. |
| `Header.tsx` som Client Component | OK | Behövs för dropdown-state. Resten av komponenterna är servrade statiskt. |

### Accessibility — nuläge

| Område | Status | Kommentar |
|--------|--------|-----------|
| Språk | OK | `<html lang="sv">` i `app/layout.tsx`. |
| Alt-texter | Delvis | Alla `<Image>` har `alt`, men Hero har `alt=""` (OK — dekorativ bakgrund), Products-kort använder `imageAlt || product.title`. Produktsidornas gallery har meningsfulla alt-texter men några kan förbättras i Steg 6. |
| Färgkontrast | OK | `charcoal` (#2C2C2C) mot vit bakgrund = 13.9:1. `mid-gray` (#5A5A5A) mot vit = 7.5:1. Teal (#4ABFBF) har svagare kontrast (~2.3:1 mot vit) — används bara för accenter, inte brödtext. |
| Tangentbordsnavigering | OK | Länkar/knappar är standard-`<a>`/`<button>`. |
| ARIA | OK | `aria-label` på logo-länken i Header. Dropdown-menyer saknar aria-expanded/controls — kan förbättras men inte kritiskt. |

### SEO — nuläge

| Område | Status | Kommentar |
|--------|--------|-----------|
| `<title>` | Delvis | Root `layout.tsx` har titel + description. Alla produktsidor har egen `title` via metadata. OK. |
| Meta description | Delvis | Finns på alla sidor men flera är generiska eller för korta. **Åtgärdas i Steg 5.** |
| Canonical URL | Delvis | Finns på alla produktsidor (`alternates: { canonical }`). Saknas på startsidan och kontaktsidan. **Åtgärdas i Steg 6.** |
| Strukturerad data | OK | Alla produktsidor har HomeAndConstructionBusiness + FAQPage + BreadcrumbList. Start- och kontakt-sidan har Organization/LocalBusiness/WebSite (steg 6 från föregående uppdrag). |
| `sitemap.xml` | Saknas | **Åtgärdas i Steg 3.** |
| `robots.txt` | Saknas | **Åtgärdas i Steg 3.** |
| 301-redirects från gamla WP-URL:er | Saknas | **Åtgärdas i Steg 4.** |

### Best Practices — nuläge

| Område | Status | Kommentar |
|--------|--------|-----------|
| HTTPS | N/A | Deploymiljöfråga (Vercel/hosting), inte kod. |
| Säkerhetsheaders | Saknas | CSP/X-Frame-Options etc. är hostinglagrets ansvar vid statisk export. Inte scope för denna baseline. |
| Konsolfel | Oklart | Kan inte mätas utan browser. |
| Web3Forms access_key | Hårdkodad som `"YOUR_KEY_HERE"` i `app/components/Contact.tsx`. Formuläret fungerar inte — känd begränsning (se INNEHALLSKARTA.md). |

---

## Identifierade Quick Wins (statisk analys)

Dessa ska åtgärdas i kommande steg. Quick wins är begränsade eftersom
basen redan är rätt trimmad.

1. **`sizes`-attribut på Hero** är `100vw` — OK, men kan göras smartare för desktop-resolutioner för att undvika att skicka 2560×1440-bilder till små skärmar. *Lågt värde, hoppas över.*
2. **`latin-ext` subset** läggs till i `next/font/google` som säkerhet för svensk text i vissa fallback-fall. *Litet men harmlöst.*
3. **Metadata description** — skriv unika per sida enligt byråns ordlista. *Steg 5.*
4. **Canonical URL** på startsida och kontakt. *Steg 6.*
5. **sitemap.xml + robots.txt**. *Steg 3.*
6. **301-redirects** från gamla WP-URL:er. *Steg 4.*
7. **Alt-texter** — gå igenom produktbild-galleriet och gör alt-texterna
   mer beskrivande (ort + produkt där det passar). *Steg 6.*

### Ej quick wins (flaggade, inte gjorda)

- **Runtime bildoptimering (WebP/AVIF)** — kräver att `images.unoptimized`
  sätts till `false`, vilket kräver att `output: "export"` släpps. Större
  deploy-beslut, utanför scope.
- **Dynamic imports för tunga komponenter** — appen har inga tunga klient-
  komponenter. Nuvarande bundle är ~700 KB totalt vilket är OK.
- **Third-party scripts** — inga laddas. Inget att trimma.

---

## Efter Steg 2 — Performance quick wins

Kodbasen var redan förhållandevis trimmad. Verifierat i Steg 2:

| Punkt | Resultat |
|-------|----------|
| `next/image` med `priority` på Hero + Header-logo | Redan på plats, inget att ändra |
| `sizes`-attribut på alla responsiva bilder | Redan korrekta (100vw på Hero, grid-medveten på Products-kort, 56rem-cap på ProductPageLayout) |
| Inga råa `<img>`-taggar | Bekräftat |
| `next/font/google` med `display: swap` + `latin`-subset | Redan på plats. `latin` innehåller å/ä/ö, `latin-ext` ej nödvändig |
| Font-weight subsetting | Raleway 400/600/700/800 laddas — alla används (111×bold, 20×semibold, 1×extrabold, 10×medium som faller på Open Sans). Ingen reduktion möjlig utan att bryta design |
| Bundle-size | ~696 KB JS + 36 KB CSS i `out/_next/static/chunks/` — ingen dynamisk import nödvändig |
| Hero-bild | 253 KB webp — rimligt. Mobile-variant kräver `images.unoptimized: false` (skulle bryta statisk export) → ej scope |
| Tredjepartsskript | Inga finns att trimma |

**Enda konkreta ändring**: lagt till `metadataBase` i
`app/layout.tsx` så att relativa URL:er i metadata (OG-bilder m.m.)
resolveras korrekt mot produktionsdomänen.

*Lighthouse-efter-mätning kan inte köras — se "Status" ovan.*
