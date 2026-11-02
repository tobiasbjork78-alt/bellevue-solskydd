# Portering nextjs-v3 → Astro, 2026-11-02

Katalog: `/mnt/c/Users/tobia/Desktop/Repon/bellevue-solskydd`, branch `draft/astro`. Ingen git-åtgärd är gjord och inget i `nextjs-v3/` är ändrat. `git status` för nextjs-v3 är samma som före passet: 5 M i components och 1 D i nextjs-site.

## 0. Kontroll
- `pwd` → `/mnt/c/Users/tobia/Desktop/Repon/bellevue-solskydd`
- `git branch --show-current` → `draft/astro`

## 1. Inventering (nextjs-v3)

**Routes: 29 page.tsx**
- `/` och `/kontakt/`, `/om-oss/`, `/referenser/`
- `/guider/` och 12 guider
- Invändigt: `/invandigt-solskydd/`, `/persienner-malmo/`, `/plissegardiner-malmo/`, `/rullgardiner-malmo/`, `/lamellgardiner-malmo/`
- Utvändigt: `/markiser-malmo/`, `/terrassmarkiser-malmo/`, `/fonstermarkiser-malmo/`, `/zip-screen-malmo/`, `/pergola-malmo/`, `/insektsskydd-malmo/`, `/markiser-skanor-falsterbo/`
- Dessutom Nexts egen 404-sida (`out/404.html` och `out/404/index.html`) och `_not-found`.

**Komponenter**
- atoms: Badge, Button, Divider, Eyebrow, LinkArrow
- molecules: AnswerBox, Breadcrumbs, CaseStudyCard, FAQItem, ProductCard, TrustBadge
- sections: CityPageView, ConsultationCTA, Footer, Header, HeroArchitectural, LocalProofSection, ProductCategoryGrid, StickyMobileCTA
- övriga: JsonLd, RevealProvider

**Övriga filer**
- Hooks: `useReveal.ts`
- lib: `schema.ts`, `cityPageData.ts`, `cn.ts`
- `tailwind.config.ts`: färger canvas, ink, brand och product; fontFamily sans och display; borderRadius soft och premium; boxShadow soft och lift; easing premium.
- Fonter (`app/layout.tsx`): next/font/google Fraunces 400/500/600 och Geist 400/500, subset latin.
- Global CSS: `app/globals.css` med heading-display, heading-section, body-copy, reveal och prefers-reduced-motion.

**Klientsida i dag**
- `Header.tsx` ("use client"): scrolltillstånd (scrollY > 8), mobilmeny med focus trap, Esc och fokusåterställning, samt body scroll-lock.
- Dropdownen i desktop-headern är ren CSS (`group-hover`) och har ingen JS.
- `FAQItem.tsx` ("use client"): accordion.
- `RevealProvider` och `useReveal`: scroll-reveal, bara på startsidan.
- Inga andra event handlers. Kontaktsidan har inget formulär (TODO om Web3Forms).

**Referens:** `nextjs-v3/out/`, byggd 2026-09-14. Den byggdes inte om.

## 2. Setup

- **Astro:** 7.4.4, senaste stabila. Kräver Node ≥ 22.23.4. WSL hade v20.20.0 (default) och v22.22.3, så Node 22.23.4 installerades via `nvm install 22.23.4`. Nvm-default är oförändrad (v20). `astro/.nvmrc` = 22.23.4 och `engines.node` ≥ 22.23.4. Kommandon körs med `source ~/.nvm/nvm.sh && nvm use 22.23.4`.
- **Byggläge:** `output: "static"`, `trailingSlash: "always"`, `build.format: "directory"`. Det ger URL:er som `/markiser-malmo/`.
- **Tailwind:** v3.4.19 via PostCSS (`postcss.config.cjs`). `tailwind.config.mjs` är en kopia av nextjs-v3 med samma theme; bara content-sökvägarna är ändrade. Integrationen @astrojs/tailwind stöder inte Astro 7, därför PostCSS.
- **Fonter:** `@fontsource/fraunces` latin-400/500/600 och `@fontsource/geist` latin-400/500, importerade i `src/layouts/BaseLayout.astro`. CSS-variablerna `--font-display` och `--font-sans` ligger i `src/styles/global.css`.
- **Site:** `https://bellevuesolskydd.se`, utan www.
- **Markdown:** Astro 7 använder Sätteri som standard. För att kunna köra en rehype-plugin används `unified({ smartypants: false, rehypePlugins: [rehypeProse] })` från `@astrojs/markdown-remark`. Smartypants är avstängt så att raka citattecken och tankstreck inte konverteras.
- **`astro/.gitignore`:** node_modules, dist, .astro.

**Beroenden**
- dependencies: astro, @astrojs/sitemap, @astrojs/markdown-remark, @fontsource/fraunces, @fontsource/geist
- devDependencies: tailwindcss@3, postcss, autoprefixer, sharp (för og-bilden), yaml (läser frontmatter för sitemap)

## 3. Innehåll

**Struktur**
- En collection, `pages`, i `src/content.config.ts`. Den har en Zod-`discriminatedUnion` på fältet `template`, med schemat för varje mall i `src/content/schemas/<mall>.ts` och gemensamma fält i `base.ts`.
- En Markdown-fil per route. Filens sökväg är routen: `src/content/pages/index.md` = `/` och `src/content/pages/guider/index.md` = `/guider/`. 29 filer.
- Routes genereras av `src/pages/[...slug].astro`, som renderar med `src/templates/<Mall>.astro`.
- Mallar: home, article (guider plus invändiga produktsidor), city, guideIndex, kontakt, omOss, referenser, markiser, terrassmarkiser, fonstermarkiser, insektsskydd, pergola och zipScreen.

**Frontmatter och brödtext**
- I frontmatter: meta title och description, breadcrumbs (och `schemaBreadcrumbs` när JSON-LD hade andra namn, t.ex. "Hem"), AnswerBox, FAQ, CTA, modellkort, tabelldata, hero-bilder och JSON-LD-beskrivare.
- I body: löptext. `## ` blir en section och `### ` blir h3. `src/lib/rehype-prose.mjs` lägger på samma DOM och samma klasser som nextjs-v3 hade.

**`updated`**
- 28 sidor: 2026-06-04, resultatet av `git log -1 --format=%ad --date=short -- <page.tsx>`. Observera att commit 30a872d9 är den commit som raderade filerna ur git-trädet (se status-2026-11-02.md).
- `terrassmarkiser-malmo`: 2026-05-26. Filen saknar commit, så filens ändringsdatum är använt.
- Fältet skrivs i tre stilar (citerat, enkelciterat, ociterat). Alla tolkas som samma datum.

**Bildplatshållare**
De finns kvar exakt som i dag: 1×1-SVG som data-URI, eller `image: null` med platshållarkort. Den planerade sökvägen från varje TODO ligger i fältet `plannedImage`. Ingen av de planerade filerna finns.

| Sida | Fält | Planerad sökväg |
|---|---|---|
| markiser-malmo | hero | /images/markiser/hero.jpg |
| fonstermarkiser-malmo | hero | /images/markiser/fonstermarkiser-hero.jpg |
| fonstermarkiser-malmo | modellkort ×4 | /images/markiser/selt-italia-box.jpg, selt-italia.jpg, fonstermiljo-sofiero.jpg, fonstermiljo-solliden.jpg |
| insektsskydd-malmo | hero | /images/insektsskydd/hero.jpg |
| terrassmarkiser-malmo | hero | /images/markiser/terrassmarkiser-hero.jpg |
| terrassmarkiser-malmo | modellkort ×19 | /images/markiser/harol-{cadiz,lux,bx260,bx270,praia,tucan}.jpg, selt-{palladio,casablanca,dakar,corsica,giant,australia,jamaica,malta}.jpg, fonstermiljo-{tido-duo,fa-44-design,classic-nova,fa-42,classic}.jpg |

Övriga bilder:
- Pergola och zip-screen: alla 14 bildsökvägar pekar på befintliga filer.
- Pergola har en TODO-gren för saknad bild (page.tsx:874). Den renderas aldrig eftersom alla 7 modeller har bild.
- Bilderna i `public/images/terrassmarkis/` är fortfarande oanvända, som i dag.

## 4. Komponenter och skript

**Komponenter**
- Alla komponenter är .astro. Ingen React finns i projektet.
- Gemensamma: Header, Footer, StickyMobileCTA, ConsultationCTA, Breadcrumbs (utan egen JSON-LD), AnswerBox, FAQList, Eyebrow, Divider, Button, Icon (inline Lucide-SVG med samma markup), TrustBadge, ProductCard, Badge, CaseStudyCard och Reveal.
- Sidspecifika ligger i `src/components/markiser/`, `src/components/terrass/` och `src/components/utvandigt/`.

**Vanilla-skript.** Astro inlinar dem som `<script type="module">`; det finns 0 externa .js-filer i dist.
- `Header.astro`: scrolltillstånd, mobilmeny (öppna och stäng, focus trap Tab och Shift+Tab, Esc, fokus tillbaka till knappen, body scroll-lock) och stängning vid klick på länk.
- Dropdownen är CSS-hover som i dag. Ingen JS behövdes.
- `FAQList.astro`: accordion. Första frågan renderas med `aria-expanded="true"` och `max-height:0px`, exakt som nextjs-v3:s SSR-utdata. Svaret syns först efter två klick. Beteendet är porterat 1:1, inte rättat.
- `Reveal.astro`: scroll-reveal, bara på startsidan.

**Sidor utan JS**
- `404.html` har noll JS.
- Alla övriga sidor har headerns menyskript (1 309 B), eftersom mobilmenyn finns på alla sidor.
- Interaktionstest (`astro/scripts/interactions.mjs`, Playwright): 15 av 15 PASS. Testet täcker meny, Esc, focus trap, scroll-lock, FAQ, scrollheader, dropdown och reveal.

## 5. SEO-infrastruktur

- **Canonical, og:url, sitemap och JSON-LD:** alla utan www. `grep -rl www.bellevuesolskydd dist` → 0 filer.
- **JSON-LD:** samma typer per route som i dag:
  - startsidan: HomeAndConstructionBusiness, Organization, WebSite
  - Service, FAQPage, Article, ContactPage, CollectionPage och WebPage med speakable där nextjs-v3 hade dem
  - BreadcrumbList läggs in en gång per sida av `BaseLayout`. `Breadcrumbs.astro` skriver ingen JSON-LD.
- **og:image:**
  - `public/og/default.jpg`, 1200×630 JPG, 149 032 B, gjord från `public/images/malmo-aerial-bg.webp` (flygfoto över Malmö, svartvitt). Varför flygfotot: det gick inte att avgöra om hero-bilden `terrassmarkis-malmo-hero.webp` är ett riktigt foto, och uppdraget sa flygfotot i så fall.
  - Bilden kan bytas per sida med frontmatter `ogImage`.
  - `og:image:width/height` och `twitter:image` är satta.
- **Sitemap:**
  - @astrojs/sitemap ger `dist/sitemap-index.xml` och `dist/sitemap-0.xml`.
  - 28 URL:er, samma urval som `nextjs-v3/public/sitemap.xml` (`/om-oss/` exkluderas via `sitemap: false`).
  - lastmod från `updated` (27 st 2026-06-04, 1 st 2026-05-26). changefreq och priority är samma som i dag.
- **robots.txt:** samma som i dag, men `Sitemap: https://bellevuesolskydd.se/sitemap-index.xml`.
- **Footer:** samma struktur som headern. Under Produkter finns grupperna Invändigt (Invändigt solskydd, Persienner, Plisségardiner, Rullgardiner, Lamellgardiner) och Utvändigt (Markiser med Terrassmarkiser och Fönstermarkiser under sig, Zip Screen, Pergola, Insektsskydd, Markiser Skanör-Falsterbo).
- **Head:** `twitter:card summary_large_image` och `robots index, follow` finns kvar på de 6 utvändiga sidorna som hade dem (frontmatter `twitterCard` och `robots`).

## 6. Verifiering

**a) Bygge**
- `npx astro build` → `30 page(s) built`, 0 fel (29 routes + 404).
- Inga deprecation-varningar efter bytet till `markdown.processor`.

**b) Route-paritet**
- out: 29 HTML-routes, dist: 29, och inga routes saknas åt något håll.
- 404: `out/404.html` motsvaras av `dist/404.html`, med samma text "404 This page could not be found.".
- `out/404/index.html` och `out/_not-found/` är Next-interna dubbletter och har ingen motsvarighet i dist.

**c) Text-paritet**
- Metod: `astro/scripts/parity.py`. Den tar synlig text utan script, style, noscript, template, header, nav och footer, tar bort HTML-kommentarer och normaliserar whitespace.
- Resultat: **0 avvikelser på alla 29 routes.**

| Route | Ord out | Ord dist |
|---|---|---|
| / | 237 | 237 |
| /fonstermarkiser-malmo/ | 1674 | 1674 |
| /guider/ | 309 | 309 |
| /guider/isolerande-gardiner/ | 921 | 921 |
| /guider/markis-eller-zip-screen/ | 689 | 689 |
| /guider/motoriserat-solskydd/ | 894 | 894 |
| /guider/plissegardin-eller-rullgardin/ | 852 | 852 |
| /guider/rullgardin-eller-persienn/ | 763 | 763 |
| /guider/skotsel-invandigt-solskydd/ | 762 | 762 |
| /guider/solskydd-insyn/ | 829 | 829 |
| /guider/solskydd-kontor/ | 868 | 868 |
| /guider/solskydd-sovrum/ | 856 | 856 |
| /guider/solskydd-varme/ | 848 | 848 |
| /guider/valja-ratt-solskydd-inomhus/ | 873 | 873 |
| /guider/vilket-solskydd-passar-bast/ | 742 | 742 |
| /insektsskydd-malmo/ | 1003 | 1003 |
| /invandigt-solskydd/ | 1311 | 1311 |
| /kontakt/ | 46 | 46 |
| /lamellgardiner-malmo/ | 1290 | 1290 |
| /markiser-malmo/ | 1724 | 1724 |
| /markiser-skanor-falsterbo/ | 462 | 462 |
| /om-oss/ | 63 | 63 |
| /pergola-malmo/ | 2234 | 2234 |
| /persienner-malmo/ | 1339 | 1339 |
| /plissegardiner-malmo/ | 1573 | 1573 |
| /referenser/ | 175 | 175 |
| /rullgardiner-malmo/ | 1355 | 1355 |
| /terrassmarkiser-malmo/ | 3357 | 3357 |
| /zip-screen-malmo/ | 1981 | 1981 |

**d) JSON-LD-paritet**
- Samma uppsättning @type på 29 av 29 routes.
- BreadcrumbList exakt en gång på de 28 routes som har den; startsidan har ingen, som i dag.
- I dag har 22 routes den två gånger.
- Enligt forkarnas jämförelse är nodinnehållet identiskt med out/ när www tas bort.

**e) Skärmdumpar**
- 24 filer i `astro/docs/port-screens/`, namngivna `<sida>__<desktop-1440|mobil-390>__<nextjs|astro>.png`, helsida.
- Sidor: start, markiser-malmo, pergola-malmo, zip-screen-malmo, persienner-malmo och guide-solskydd-insyn.
- Skript: `scripts/screens.mjs`, med Playwright från `~/projects/product-scraper`. out/ och dist/ serverades med `python3 -m http.server` på 4401 och 4402.
- Uppmätta skillnader (Playwright, `main`- och `footer`-höjd):
  - **Footer:** +149 px. Nextjs-v3: 509 px desktop och 1 166 px mobil; Astro: 658 och 1 315. Det är den nya länkstrukturen i steg 5.
  - **`main`:** samma höjd på startsidan, persienner (desktop), zip-screen och guiden (desktop).
  - **Radbrytningar:** några enskilda stycken bryts på en rad mindre i Astro (27 px per rad). Det gäller pergola desktop (5 stycken, −136 px), markiser-malmo desktop (1 stycke), persienner mobil (6 stycken, −160 px) och guiden mobil (2 stycken).
  - **Orsak, uppmätt:** samma stycketext mäter 2 652 px med nextjs-v3:s Geist-fil (Google Fonts via next/font) och 2 611 px med Fontsource Geist 5.3.0 (canvas `measureText`, 16 px). Font-family, storlek, letter-spacing och bredd är identiska. Test med `@fontsource-variable` gav samma resultat, så den ändringen är återställd.
  - Antalet element i `main` är detsamma på alla uppmätta sidor.
- Pixeldiff (`scripts/screens-diff.mjs`): 5–23 % olika pixlar. Skillnaden kommer av höjdförskjutningen nedanför första avvikande stycket och av den nya footern.

**f) JavaScript**

| | nextjs-v3/out | astro/dist |
|---|---|---|
| .js-filer totalt | 17 filer, 753 954 B | 0 filer, 0 B |
| JS per sida (externt + inline, exkl. JSON-LD) | 633 209–768 868 B | 0–1 841 B |
| Summa över alla HTML-sidor | 22 195 300 B (32 sidor inkl. 404-dubbletter) | 50 205 B (30 sidor) |

Fördelning i dist:
- 404: 0 B
- kontakt, om-oss, referenser och guider-index: 1 309 B (bara header)
- 24 sidor med FAQ: 1 797 B (header + FAQ)
- startsidan: 1 841 B (header + reveal)

Mätskript: `scripts/js-size.py`.

## 7. Det som inte porterades 1:1, och varför

1. **Footer:** ny länkstruktur enligt uppdraget i steg 5. Den är 149 px högre.
2. **Radbrytningar i enstaka stycken:** Fontsource-filen för Geist har andra teckenbredder än Google-filen som next/font använde (uppmätt −1,5 %). Specen kräver Fontsource.
3. **Sitemap-URL:** `/sitemap.xml` i dag, nu `/sitemap-index.xml` + `/sitemap-0.xml`. Det är @astrojs/sitemaps filnamn. robots.txt pekar på `sitemap-index.xml`.
4. **og:url, og:image, og:image:width och height, twitter:image och `<link rel="sitemap">`** är nya i `<head>`.
5. **Bilder:** `next/image` med `fill` är ersatt med `<img class="absolute inset-0 h-full w-full ...">`. Nexts inline-style och `data-nimg` finns inte kvar. Bildoptimering finns inte heller (nextjs-v3 hade `images.unoptimized: true`).
6. **Inline-HTML i Markdown:** där klasserna skiljer sig från standardreglerna i rehype-prose ligger elementen som inline-HTML med originalklasserna. Texten finns fortfarande i innehållsfilen. Gäller:
   - jämförelsetabeller (6 guider)
   - Step-, ProductOverview- och ComparisonRow-block
   - wizard-rutan i vilket-solskydd-passar-bast
   - produktkort, jämförelsetabell och steg på invandigt-solskydd
   - plissé-listan "Välj din plissé i tre frågor" (`space-y-3`)
   - telefonraden på persienner, `<strong class="text-ink">`
7. **`prose: false` och explicita `<section>`-omslag:** används på `vilket-solskydd-passar-bast`, eftersom wizard-rutan ligger efter sista sektionen.
8. **isolerande-gardiner:** sektionen "Andra invändiga lösningar" ligger efter FAQ:n, i frontmatter-fältet `afterFaq`. Article-mallen renderar det fältet efter FAQ:n.
9. **markiser-skanor-falsterbo:** rubriker och stegtexter med ortnamnet är lagrade färdigskrivna i frontmatter. Förut byggdes de ihop i koden.
10. **Kontakt:** ingen formulärdel, som i dag. Div:en är tom; TODO:n är en Astro-kommentar.
11. **Mobilmenyn:** ligger i DOM med `hidden`. I Next renderades den bara när den var öppen.
12. **Knapp- och länktexter i koden:** "Boka kostnadsfri rådgivning", "Utforska produkter", "Boka rådgivning", "Läs guiden", och i Terrassmarkiser "Boka platsbesök" och "Se sortimentet". Även nav, footer och aria-labels ligger i koden. Allt detta är tillåtna undantag. På Pergola, ZipScreen och Markiser-sidorna ligger motsvarande texter i frontmatter.
13. **Genererade innehållsfiler:** flera innehållsfiler skapades med skript som läste page.tsx eller den byggda HTML:en i out/. Skripten ligger i scratchpad och ingår inte i repot. Text-pariteten är verifierad med `parity.py`.

## 8. Git-synlighet (bara läsning)

- `git check-ignore -v --no-index astro/package.json astro/src/pages/index.astro "astro/src/pages/[...slug].astro" astro/src/content/pages/persienner-malmo.md astro/src/components/Header.astro` → ingen träff (rc=1).
- `astro/src/pages/index.astro` finns inte. Startsidan genereras av `[...slug].astro` från `src/content/pages/index.md`.
- `git status --short -- astro` → `?? astro/`

## Filer
- Källkod: `astro/src/`, 99 filer.
- Verifieringsskript: `astro/scripts/parity.py`, `js-size.py`, `screens.mjs`, `screens-diff.mjs`, `interactions.mjs`.
- Skärmdumpar: `astro/docs/port-screens/`, 24 png.
- Bygg: `cd astro && source ~/.nvm/nvm.sh && nvm use 22.23.4 && npm run build`
