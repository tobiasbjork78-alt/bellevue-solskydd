# Bildbehov per kluster, 2026-11-04

Underlag: byggd sajt i `dist/` och sidmallarna i `src/templates/`. Varje bild som bedöms är öppnad och jämförd med produktdata och tillverkarens bild. Hela bildinventeringen finns i `bildinventering.csv` och `index.html`.

**Regler som användes**
- Hero och modellkort: minst 1600×900 i 16:9. En bild i 3:2 räknas som OK om den går att beskära till 1600×900.
- Vikt: hero högst 400 KB, kort högst 300 KB.
- En bild har en status. Om flera gäller används den första i ordningen SAKNAS, FEL MOTIV, ÅTERFÖRSÄLJARBILD, FÖR LÅG UPPLÖSNING, FÖR TUNG.
- Hero räknas bara där mallen har en hero-bildplats: start, markiser, fönstermarkiser, insektsskydd, pergola och zip screen. Article-, city-, om oss-, kontakt-, referens- och guideöversiktsmallarna har ingen.
- En AI-bild som visar en namngiven modell räknas som FEL MOTIV, eftersom den inte bevisligen visar den modellen.

## Sammanfattning

| Kluster | Platser | OK | FEL MOTIV | FÖR LÅG UPPLÖSNING | FÖR TUNG | ÅTERFÖRSÄLJARBILD | SAKNAS |
|---|---|---|---|---|---|---|---|
| Utvändigt | 40 | 6 | 21 | 6 | 0 | 0 | 7 |
| Invändigt | 5 | 0 | 5 | 0 | 0 | 0 | 0 |
| Guider | 13 | 1 | 12 | 0 | 0 | 0 | 0 |
| Företag | 11 | 8 | 0 | 1 | 1 | 0 | 1 |
| **Totalt** | **69** | **15** | **38** | **7** | **1** | **0** | **8** |

Ingen bild på sajten i dag är hämtad från en återförsäljarsajt. Fotona i Repon från Direkt Solskydd och Svealands solskydd är återförsäljarbilder och föreslås inte.

**AI-bilder med personer i dag (ska vara riktiga foton):**
- `/pergola-malmo/` hero: video och poster med fyra personer. `pergola/hero.webp`, som har samma motiv, används bara om videon tas bort.
- `/zip-screen-malmo/` garantisektionen: `zip-screen-process-bg.webp` med två montörer i Bellevue-tröjor.

**Kontroll av modellbilder**
- **Madeira** (`bildbank/selt-aluprof/madeira/Awnings_EN_s4_Im0.jpg`): bilden är sida 4 i Aluprofs broschyr, en översiktsbild. Kassetten syns bara från gaveln, och modellen går inte att avgöra. Den används inte på sajten, och Madeira har inget modellkort.
- **MTH**:
  - Sex av bilderna är menyikoner med bara text: Fasta ramar, Rullgardin Deluxe, Takfönster Deluxe, Rullgardin, Plissé, Solide och Nätdraperi.
  - `Pojke-och-hund_plisse` visar ett nätdraperi, inte plissé.
  - `S700dorr.jpg` visar en öppen dörr där inget nät syns tydligt.
  - `Kök-1.jpg` visar ett rullnät som syns svagt.
  - `Liten-bild_takfönster` visar nät i ett takfönster.
  - Ingen MTH-bild används på sajten.
- **Pergola**: alla fyra Harol-korten och båda Tarasola-korten visar AI-bilder. Harols riktiga bilder finns i `public/images/pergola/` (brera, opera, nomo, versuz.webp) men är inte inkopplade.

## Utvändigt

| Sida | Plats | Nuvarande bild | Status | Åtgärd | Kommentar |
|---|---|---|---|---|---|
| `/markiser-malmo/` | Hero | platshållare (1×1 svg) | SAKNAS | GENERERA (hero-underlag/markiser-malmo) | Mallen har en hero-bildplats. |
| `/markiser-malmo/` | Modellkort Selt Palladio | /images/markiser/palladio.webp, 1325×1000, 197 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Rätt modell enligt Aluprofs galleri. Kassetten syns inte, bilden är tagen underifrån. |
| `/markiser-malmo/` | Modellkort Selt Jamaica | /images/markiser/jamaica.webp, 1325×1000, 182 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Rätt modell enligt Aluprofs galleri. Den högra markisen har skyddstak (tillval). |
| `/markiser-malmo/` | Modellkort Harol Cadiz | /images/markiser/cadiz.webp, 1001×595, 94 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Harols rendering, rätt modell. |
| `/markiser-malmo/` | Modellkort Harol Tucan | /images/markiser/tucan.webp, 1600×900, 174 KB | OK | – | Harols rendering i kvällsljus, rätt modell. |
| `/markiser-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | GENERERA (beskärs från ny hero) | Flygbild över Malmö, visar ingen markis. |
| `/fonstermarkiser-malmo/` | Hero | platshållare (1×1 svg) | SAKNAS | GENERERA (hero-underlag/fonstermarkiser-malmo) |  |
| `/fonstermarkiser-malmo/` | Modellkort Selt Italia | ingen (image: null) | SAKNAS | TILLVERKARENS BILDBANK (begärs via Daniel) | Bildbankens Italia-bilder är 860 px, och den monterade har texten Pauze och en trafikskylt. |
| `/fonstermarkiser-malmo/` | Modellkort Selt Italia Box | /images/fonstermarkiser/italia-box.webp, 1325×1000, 99 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Rätt modell, kassetten syns. |
| `/fonstermarkiser-malmo/` | Modellkort Selt Italia Balcony | ingen (image: null) | SAKNAS | KOPPLA IN BEFINTLIG (bildbank/selt-aluprof/italia-balcony/italia-poreczowa-2.webp) | 1325×1000, alltså under 1600×900. Högupplöst bör begäras. |
| `/fonstermarkiser-malmo/` | Modellkort Fönstermiljö Sofiero | /images/fonstermarkiser/sofiero.webp, 1600×1068, 220 KB | OK | – | Från Fönstermiljös Sofiero-sida. Kassetten är smal och syns svagt. |
| `/fonstermarkiser-malmo/` | Modellkort Fönstermiljö Solliden | /images/fonstermarkiser/solliden.webp, 1600×1066, 99 KB | OK | – | Frilagd närbild, vals utan kassett stämmer med Solliden. |
| `/fonstermarkiser-malmo/` | Modellkort Fönstermiljö Haga | ingen (image: null) | SAKNAS | KOPPLA IN BEFINTLIG (bildbank/fonstermiljo/haga/haga3-2048x1490.jpg) | 2048×1490, 2,6 MB, behöver komprimeras. Kassetten syns. |
| `/fonstermarkiser-malmo/` | Modellkort Fönstermiljö Läckö | ingen (image: null) | SAKNAS | KOPPLA IN BEFINTLIG (bildbank/fonstermiljo/lacko/lacko-2048x1513.jpg) | 2048×1513, 2,1 MB, behöver komprimeras. |
| `/fonstermarkiser-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | GENERERA (beskärs från ny hero) |  |
| `/zip-screen-malmo/` | Hero | /images/zip-screen/selt-zipcreen-120-header.webp, 1672×941, 226 KB | OK | – | AI. Generell zip screen med rund kassett, ingen modell nämns i alt eller H1. |
| `/zip-screen-malmo/` | Bild i brödtext (kontextbild) | /images/zip-screen/zip-screen-context.webp, 2172×724, 167 KB | OK | – | AI, samma scen som heron. |
| `/zip-screen-malmo/` | Modellkort Harol Coolscreen 8 och 10 | /images/zip-screen/coolscreen.webp, 1001×618, 127 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Rätt modell. |
| `/zip-screen-malmo/` | Modellkort Selt R 120 ZiiiP | /images/zip-screen/r-120-ziiip.webp, 1131×800, 8 KB | FÖR LÅG UPPLÖSNING | TILLVERKARENS BILDBANK (begärs via Daniel) | Frilagd rendering, fyrkantig kassett stämmer. |
| `/zip-screen-malmo/` | Modellkort Selt R 95 ZiiiP | /images/zip-screen/selt-r-ziiip-95.webp, 1448×1086, 362 KB | FEL MOTIV | TILLVERKARENS BILDBANK (begärs via Daniel) | AI-bild, visar inte bevisligen R 95. Är också för tung (362 KB). Alt ändrad till neutral. |
| `/zip-screen-malmo/` | Bakgrund i garantisektionen | /images/zip-screen/zip-screen-process-bg.webp, 1811×868, 177 KB | FEL MOTIV | MÅSTE VARA RIKTIGT FOTO | AI-bild med två montörer i tröjor med Bellevue-logga. Visar personer och antyder vår montering. Flaggas. |
| `/zip-screen-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/zip-screen/selt-zipcreen-120-header.webp, beskuren till 1200×630) |  |
| `/pergola-malmo/` | Hero (video + poster) | /videos/pergola-hero.mp4 1,6 MB, poster /images/pergola/pergola-hero-poster.webp 1280×720 113 KB | FEL MOTIV | GENERERA (hero-underlag/pergola-malmo, utan personer) | AI med fyra personer. Regeln: allt med personer ska vara riktiga foton. Postern är också under 1600×900. |
| `/pergola-malmo/` | Modellkort Harol Brera | /images/pergola/harol-brera.jpg, 1600×900, 250 KB | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/pergola/brera.webp) | AI-bild, visar inte bevisligen Brera. brera.webp är Harols foto men bara 1002×628, så högupplöst bör begäras. |
| `/pergola-malmo/` | Modellkort Harol Opera | /images/pergola/harol-opera.jpg, 1600×900, 233 KB | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/pergola/opera.webp) | AI. opera.webp är 1002×648 och visar personer. |
| `/pergola-malmo/` | Modellkort Harol Nomo | /images/pergola/harol-nomo.jpg, 1600×900, 239 KB | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/pergola/nomo.webp) | AI. nomo.webp är 1000×667. |
| `/pergola-malmo/` | Modellkort Harol Versuz | /images/pergola/harol-versuz.jpg, 1600×900, 282 KB | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/pergola/versuz.webp) | AI. versuz.webp är 1000×667 och visar personer. |
| `/pergola-malmo/` | Modellkort Tarasola Technic Pro | /images/pergola/tarasola-technic-pro.jpg, 1600×900, 290 KB | FEL MOTIV | TILLVERKARENS BILDBANK (begärs via Daniel) | AI. Tarasola finns inte i produktdata och inte i bildbanken. |
| `/pergola-malmo/` | Modellkort Tarasola Technic View | /images/pergola/tarasola-technic-view.jpg, 1600×900, 287 KB | FEL MOTIV | TILLVERKARENS BILDBANK (begärs via Daniel) | Som ovan. |
| `/pergola-malmo/` | Jämförelsetabell, 6 miniatyrer | samma sex filer som modellkorten | FEL MOTIV | KOPPLA IN BEFINTLIG (samma byte som modellkorten) | Räknas som sex platser. |
| `/pergola-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | GENERERA (beskärs från ny hero) |  |
| `/insektsskydd-malmo/` | Hero | platshållare (1×1 svg) | SAKNAS | GENERERA (hero-underlag/insektsskydd-malmo) | Typkorten har ingen bildplats. |
| `/insektsskydd-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | GENERERA (beskärs från ny hero) |  |
| `/markiser-skanor-falsterbo/` | og:image 1200×630 | /og/default.jpg | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/markiser/tucan.webp, beskuren) | Mallen (city) har ingen hero- eller kortbildplats. |
| `/solskydd-brf-malmo/` | og:image 1200×630 | /og/default.jpg | OK | – | Flygbild med flerbostadshus passar sidans ämne. Mallen (article) har inga bildplatser. |

## Invändigt

| Sida | Plats | Nuvarande bild | Status | Åtgärd | Kommentar |
|---|---|---|---|---|---|
| `/invandigt-solskydd/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Mallen (article) har ingen hero-, kort- eller brödtextbild. Hela sidan saknar bilder. |
| `/persienner-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Mallen (article) har ingen hero-, kort- eller brödtextbild. Hela sidan saknar bilder. |
| `/plissegardiner-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Mallen (article) har ingen hero-, kort- eller brödtextbild. Hela sidan saknar bilder. |
| `/rullgardiner-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Mallen (article) har ingen hero-, kort- eller brödtextbild. Hela sidan saknar bilder. |
| `/lamellgardiner-malmo/` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Mallen (article) har ingen hero-, kort- eller brödtextbild. Hela sidan saknar bilder. |

## Guider

| Sida | Plats | Nuvarande bild | Status | Åtgärd | Kommentar |
|---|---|---|---|---|---|
| `/guider/markis-eller-zip-screen/ (Utvändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/zip-screen/selt-zipcreen-120-header.webp, beskuren) | Artikelmallen har inga andra bildplatser. |
| `/guider/vilket-solskydd-passar-bast/ (Båda)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | GENERERA (beskärs från ny hero för /markiser-malmo/) | Artikelmallen har inga andra bildplatser. |
| `/guider/solskydd-varme/ (Båda)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | KOPPLA IN BEFINTLIG (public/images/zip-screen/zip-screen-context.webp, beskuren) | Artikelmallen har inga andra bildplatser. |
| `/guider/isolerande-gardiner/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/motoriserat-solskydd/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/plissegardin-eller-rullgardin/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/rullgardin-eller-persienn/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/skotsel-invandigt-solskydd/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/solskydd-insyn/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/solskydd-kontor/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/solskydd-sovrum/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/valja-ratt-solskydd-inomhus/ (Invändigt)` | og:image 1200×630 | /og/default.jpg (1200×630, 146 KB) | FEL MOTIV | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Artikelmallen har inga andra bildplatser. |
| `/guider/ (översikt)` | og:image 1200×630 | /og/default.jpg | OK | – | Översiktssida, generell bild räcker. |

## Företag

| Sida | Plats | Nuvarande bild | Status | Åtgärd | Kommentar |
|---|---|---|---|---|---|
| `/` | Hero | /images/terrassmarkis-malmo-hero.webp, 1942×809, 308 KB | FÖR LÅG UPPLÖSNING | GENERERA (hero-underlag/startsida) | AI. Höjden 809 px når inte 900. Turning Torso i bakgrunden. |
| `/` | Produktkort Persienner | ingen (image: null) | SAKNAS | TILLVERKARENS BILDBANK (Umbra, begärs via Daniel) | Inga bekräftade Umbra-bilder hittades i Repon. |
| `/` | Produktkort Plissé | /images/cards/card-plisse.webp, 1086×1448, 217 KB | OK | – | Källa okänd. Bellevue-logga i hörnet, se osäkerheter. |
| `/` | Produktkort Rullgardiner | /images/cards/card-rullgardiner.webp, 1086×1448, 172 KB | OK | – | Källa okänd. Bellevue-logga i hörnet. |
| `/` | Produktkort Markiser | /images/cards/card-markiser.webp, 1086×1448, 512 KB | FÖR TUNG | KOPPLA IN BEFINTLIG (samma fil, komprimerad under 300 KB) | Källa okänd. |
| `/` | Produktkort Zip Screen | /images/cards/card-zipscreen.webp, 1086×1448, 214 KB | OK | – | Källa okänd. |
| `/` | Produktkort Pergola | /images/cards/card-pergola.webp, 1600×900, 258 KB | OK | – | AI, inga personer. |
| `/` | og:image 1200×630 | /og/default.jpg | OK | – | Flygbild över Malmö, rimlig för startsidan. |
| `/om-oss/` | og:image 1200×630 | /og/default.jpg | OK | – | Mallen har ingen bildplats. En bild på personalen måste vara ett riktigt foto. |
| `/kontakt/` | og:image 1200×630 | /og/default.jpg | OK | – | Mallen har ingen bildplats. |
| `/referenser/` | og:image 1200×630 | /og/default.jpg | OK | – | Mallen har ingen bildplats. Bilder på kundprojekt måste vara riktiga foton. |
