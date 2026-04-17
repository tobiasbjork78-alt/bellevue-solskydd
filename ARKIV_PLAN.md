# ARKIV_PLAN.md — Inventering och återanvändningsplan

Analys av `arkiv/` (snapshot 2026-02-26 av bellevuesolskydd.se, tidigare bolag
i konkurs 2026-01-16). Målet är att bygga ut `nextjs-site/` med minsta möjliga
copywriting genom att återanvända arkivmaterial inom de gränser uppdraget sätter.

Ingen kod är ändrad. Detta är ett underlag inför beslut.

---

## 1. Inventering

### 1.1 Textmaterial (JSON)

Totalt 83 JSON-filer i `arkiv/content/pages/`. Uppdelat enligt nedan.

**Produktsidor — inomhus (8 st)**
| Fil | Ord | Status |
|---|---|---|
| `page-persienner.json` | 994 | Kärnprodukt. FAQ + modell-info |
| `page-trapersienner.json` | 517 | Underkategori |
| `page-plissegardiner.json` | 742 | FAQ inkluderad |
| `page-rullgardiner.json` | 659 | FAQ inkluderad |
| `page-lamellgardiner.json` | 825 | FAQ inkluderad |
| `page-panelgardiner.json` | 618 | Finns inte på nya sajten |
| `page-draperier.json` | 440 | Finns inte på nya sajten |
| `page-wavegardiner.json` | 431 | Finns inte på nya sajten |

**Produktsidor — utomhus (8 st)**
| Fil | Ord | Status |
|---|---|---|
| `page-terrassmarkiser.json` | 650 | FAQ inkluderad |
| `page-fonstermarkiser.json` | 517 | Finns inte på nya sajten |
| `page-korgmarkiser.json` | 253 | Finns inte på nya sajten |
| `page-zip-screen.json` | 496 | FAQ inkluderad |
| `page-pergola.json` | 795 | FAQ inkluderad |
| `page-parasoller.json` | 555 | Finns inte på nya sajten |
| `page-vindskydd.json` | 240 | Finns inte på nya sajten |
| `page-insektsskydd.json` | 405 | Finns inte på nya sajten |

**Ortsidor (6 st, alla med ~identisk mallstruktur, ortnamn utbytt)**
- `page-persienner-malmo.json` (1048 ord) / `...-lund.json` (1066) / `...-helsingborg.json` (2160)
- `page-markiser-malmo.json` (486 ord) / `...-lund.json` (486) / `...-helsingborg.json` (486)

**Nyköping/Öst-sidor (10 st)** — hör till tidigare östra verksamheten. Strukturellt
dubletter av sydsajten med annan kontaktinfo. Lågt nettovärde för nya sajten.
Filer: `page-*-ost.json`, `page-*-nykoping.json`.

**Service-/infosidor (8 st)**
| Fil | Användbar del |
|---|---|
| `page-hem.json` (336) | Sektionsstruktur + generella beskrivningar |
| `page-tjanster.json` (206) | Konsultation, installation, byggtjänster — text kan lyftas |
| `page-kostnadsfritt-hembesok.json` (81) | Mall för hembesöksformulär |
| `page-miljo-kvalitetspolicy.json` (326) | Hållbarhets-/kvalitetsskrivning, fungerar generiskt |
| `page-produkter.json` (102) | Produktkatalog-grid |
| `page-unika-funktioner.json` (212) | EXKLUDERAS — beskriver patentet |
| `page-om-oss.json` (297) | EXKLUDERAS — grundarstorytelling |
| `page-referensprojekt.json` (231) | EXKLUDERAS — namngivna kunder |

**Kampanj-/funnel-sidor (4 st)** — kampanjsidor för persienner och plissegardiner
innehåller utökat innehåll värt att granska. Tack-sidor är tunna.
| Fil | Ord |
|---|---|
| `page-kampanjsida-persienner.json` | 1293 |
| `page-kampanjsida-plissegardiner.json` | 831 |

**Kontakt (2 st)** — `page-kontakt.json` är omgjord till konkursinformation,
endast 13 ord. Inget att lyfta.

### 1.2 Blogginlägg (JSON)

Totalt 36 poster i samma katalog (prefix `post-`). Endast 6 är substantiellt
kunskapsinnehåll — resten är semesterstängt, julstängt, kampanjer, mässor,
rekryteringar, telefonistörningar.

**Sakinnehåll, återanvändbart:**
| Fil | Ord | Ämne |
|---|---|---|
| `post-persienner-eller-gardiner-vad-ar-bast-for-dig.json` | 1135 | Val av solskydd — jämförelse persienn/gardin/pliss/rull/lamell/panel/draperi |
| `post-pergola-en-elegant-losning-for-din-tradgard.json` | 1127 | Pergola-guide |
| `post-solskydd-motverkar-kallras.json` | 90 | Kort text om värme/kallras |
| `post-vara-gardiner-skapar-varmare-atmosfar.json` | 75 | Kort text, samma tema |
| `post-forlang-sasongen-pa-din-uteplatsterrass.json` | 43 | Kort, utesäsong/värmare |
| `post-arets-julklapp-markisen.json` | 77 | Kort, markis som julklapp |

**Bör INTE återanvändas:** 30 poster som rör företagsnyheter (semester-/jul-/påskstängt,
mässor, kampanjer, rekryteringar, Somfy-utbildning, Di Gasell, namngivna referensprojekt
som "1 552 persienner till Kronprinsen").

### 1.3 Bilder

121 filer i `arkiv/content/media/images/`. Grova kategorier:

**Säker återanvändning — generisk stock/miljö (~55 st):**
Fotografier utan personer eller varumärken: `shutterstock_*`, `blinds-1-scaled`,
`room-with-sunlight-coming-through-the-blinds-*`, `curtain-draperies-at-window-*`,
`shadow-of-window-blinds-on-wall-*`, `abstract-vertical-blind-shadows-*`,
`vertical-blinds-outside-the-window-*`, `terrace-at-the-back-of-the-house-*`,
`luxury-garden-furniture-*`, `open-door-leading-to-the-courtyard-*`,
`back-yard-in-a-cozy-house-*`, `comfortable-outside-seating-area-*`,
`minimalist-living-room-*`, `exterior-shots-of-a-modern-terrace-*`,
`the-sun-loungers-by-the-pool-*`, `blue-and-white-striped-folding-umbrella-*`,
`window-blinds-couch-and-artwork-*`, `55263-sofa-and-blinds-in-living-room-*`,
`low-angle-shot-of-a-pergola-wooden-ceiling-*`, `sun-bath-with-sun-loungers-and-parasol-*`.

**Produktbilder / produkt-headers (~25 st):**
`Persienner-img.png/webp`, `Plissegardiner-*`, `Lamellgardiner-*`, `Draperier-img.*`,
`Gardiner-img.*`, `Rullgardin-Bellevue.jpg`, `Panelgardiner-shutterstock.png`,
`Graa-panelgardiner-1.jpg`, `Ljusa-panelgardiner-1.jpg`, `Wavegardiner-*`,
`Zip-screen-img-vand.*`, `pergola_img1.png`, `pergola-img-vand.png`,
`fonstermarkiser-vand.*`, `markiser_img1.png`, `Markis-fran-Bellevue-Solskydd-1.png`,
`parasoll_img1/2/3/4.png`, `parasoll_pool.png`, `Parasoll_header_img.png`,
`a-line-med-dekorlist-oppen.jpg`, `bellevue-med-sidoskenor.jpg`,
`bellevue-v-e_003.jpeg`, `bellevue-vse_002.jpeg`, `obejktpersienn-barnsakrad-_1.jpg`.

Flera heter "Bellevue-" i filnamnet men visar generiska produkter — endast filnamnet
röjer källan. OK att rename vid behov.

**Exkluderas:**
- `miljobild-christina6-scaled-1.jpg` (namngiven person)
- `di-gasell-foretag-dagens-industri-2022-malmo-1.png` (pris gamla bolaget)
- `testfakta_bellevue-150x150-1.jpg` (certifieringsmärke)
- `divi-logo-mark-white.png`, `wireframe-square-1200.jpg`, `solskydd-logga-bs.png`,
  `Bellevue-mini-icon.png`, `cropped-Bellevue-mini-icon.png`,
  `solskydd-pwa-screen-1-1.png` (gamla bolagets grafik)
- `20-rabatt*.png`, `20-rea-sommar-2024.png`, `Boka-in-ett-kostnadsfritt-hembesok-BTN.png`,
  `kostnadsfritt-hembesok-BTN.png`, `persienner-malmo_vit-1.png` (kampanjknappar)

**Oklara (kräver bedömning i bild):**
`img_2287.jpeg`, `img_2289.jpeg`, `horse-riding-8.jpg`, `SlW5oMT1_o.jpg`,
`classic2.jpg/webp`, `image-16.png`, `image001-1024x576-1.jpg`.

### 1.4 PDF-dokument

11 filer i `arkiv/content/media/pdfs/`:

**Monteringsanvisningar (4):** `BS_Monteringsanvisning_OV_A5_v2-1.pdf`,
`..._V-E_A5_NY-1.pdf`, `..._VSE_v2-EJ-FARDIG.pdf`, `..._VST_A5-1.pdf`.

**Teknisk data (7):** `Tekniskdata-A-Line-med-styrlina.pdf`,
`...Bellevue-standard-med-styrskena.pdf`, `...Frihangande-1.pdf`, `...Mellanglas-1.pdf`,
`...Objektspersienn.pdf`, `...V-E-med-designlist.pdf`, `...VSE-med-designlist-samt-styrskena.pdf`.

Samtliga beskriver tidigare bolagets egen produktion och modellbeteckningar.
Bör inte återanvändas direkt — flaggas under §5.

### 1.5 Övriga filer

- `arkiv/content/sitemap.json` — komplett URL-karta (användbar för redirects om vi
  vill fånga upp inkommande trafik på gamla URLer).
- `arkiv/content/reviews.json` — tom (`Antal datapunkter: 0`).
- `arkiv/raw-mirror/` — wget-mirror, inte granskad i detalj. Kan slås upp vid behov.

---

## 2. Mappning mot befintliga 11 sidor

Nuvarande sajt ligger i `nextjs-site/app/` på branchen `draft/nextjs` (main har
ingen källkod, bara build-output). Sidor inventerade: `/`, `/persienner`,
`/plissegardiner`, `/rullgardiner`, `/lamellgardiner`, `/markiser`, `/terrassmarkiser`,
`/zip-screen`, `/pergola`, `/kontakt`, `_not-found`.

| Nuvarande sida | Arkivkällor som kan lyftas in | Vad kan hämtas |
|---|---|---|
| `/` | `page-hem.json` | Sektionsstruktur "Solskydd inomhus/utomhus", teaser-texter per produkt. Rensa "40 år", "sedan 1982", "Bäst i Test". |
| `/persienner` | `page-persienner.json` | Checklist, FAQ (5 frågor), generiska mått-/färg-/monteringsavsnitt. Rensa patent, Testfakta, "Bäst i Test", egenproduktion. |
| `/plissegardiner` | `page-plissegardiner.json` | FAQ (4 frågor), "Ljusinsläpp och design", "Funktionalitet", "Installation". |
| `/rullgardiner` | `page-rullgardiner.json` | FAQ (3 frågor), "Varför du bör överväga rullgardiner", tekniksektionen. |
| `/lamellgardiner` | `page-lamellgardiner.json` | FAQ (4 frågor), "Designa din atmosfär", "Skräddarsydda lösningar". |
| `/markiser` | `page-markiser-malmo.json` eller `...-lund.json` (identisk text förutom ort) | "Markiser stoppar solstrålningen", "Design & kvalité", FAQ (4 frågor). |
| `/terrassmarkiser` | `page-terrassmarkiser.json` | FAQ (4 frågor), materialavsnitt, servicebeskrivning. |
| `/zip-screen` | `page-zip-screen.json` | "Måttanpassad för varje fönster", "Vindtålig och stark", FAQ (3 frågor). |
| `/pergola` | `page-pergola.json` | FAQ (3 frågor), "Välj mellan tak, väggar eller fristående", "Vad kostar det att bygga en pergola?" |
| `/kontakt` | `page-kostnadsfritt-hembesok.json` | Formulärmall (fält: Namn, Telefon, Adress, Ort, E-post, Meddelande). Ta bort kontaktuppgifter som inte gäller nya bolaget. |
| `_not-found` | — | Inget att hämta. |

Genomgående mönster över hela arkivet: varje produktsida har **ett FAQ-block med
4–6 frågor** som följer identiskt recept (måttanpassad? hembesök? montering ingår?
pris?). Svaren är generiska och kan lyftas som komponent.

Teman som dyker upp på nästan alla produktsidor — "Inomhusklimat" / "Utomhusklimat"
sektion, "Upptäck liknande produkter för" — kan bli återanvändbara block på nya sajten.

---

## 3. Förslag på nya sidor

### 3.1 Nya produktsidor (S)

Arkivet har fullt utbyggt innehåll för 7 produkter som saknas på nuvarande sajt.
Varje ny sida är ~1 dag copywriting + 1 dag layout om vi återanvänder befintlig
`ProductPageLayout.tsx`.

| Förslag URL | Källa | Storlek | Kommentar |
|---|---|---|---|
| `/panelgardiner` | `page-panelgardiner.json` | S | 618 ord, "Vad kostar panelgardiner?" sektion. Bilder: `Graa-panelgardiner-1.jpg`, `Ljusa-panelgardiner-1.jpg`. |
| `/draperier` | `page-draperier.json` | S | 440 ord. Bilder: `Draperier-img.png/webp`, `blue-silk-drapery-*`, `curtain-draperies-*`. |
| `/wavegardiner` | `page-wavegardiner.json` | S | 431 ord. Bild: `Wavegardiner-Bellevue-Solskydd-Malmo.jpg`. |
| `/fonstermarkiser` | `page-fonstermarkiser.json` | S | 517 ord, FAQ inkluderad. Bilder: `fonstermarkiser-vand.png/webp`. |
| `/korgmarkiser` | `page-korgmarkiser.json` | S | 253 ord — tunt, men räcker för en grundsida. |
| `/parasoller` | `page-parasoller.json` | S | 555 ord. Bilder: `parasoll-1..4.png`, `parasoll_pool.png`. |
| `/vindskydd` | `page-vindskydd.json` | S | 240 ord — tunt, behöver byggas ut. |
| `/insektsskydd` | `page-insektsskydd.json` | S | 405 ord. |
| `/trapersienner` | `page-trapersienner.json` | S | 517 ord. Kan alternativt vara underavsnitt på `/persienner`. |

Totalt: 9 nya produktsidor som **kan byggas från befintlig text** (med städning
enligt §4) utan att skriva något från noll.

### 3.2 Guide-/kunskapssektion (M)

En egen sektion `/guider/` fungerar som SEO-pelare och konverterar sökflöde till
produktsidor. Fyra av blogg-posterna i arkivet räcker som grundmaterial.

| Förslag URL | Källa | Storlek | Kommentar |
|---|---|---|---|
| `/guider/valja-solskydd` | `post-persienner-eller-gardiner-vad-ar-bast-for-dig.json` | M | 1135 ord, redan strukturerad som "välj-rätt-guide" med H2/H3 per produkttyp. Bilder från surferseo.art — byt mot arkivets generiska stockbilder. |
| `/guider/pergola-grunder` | `post-pergola-en-elegant-losning-for-din-tradgard.json` | M | 1127 ord, pergola-djupdykning. |
| `/guider/solskydd-vintertid` | `post-solskydd-motverkar-kallras.json` + `post-vara-gardiner-skapar-varmare-atmosfar.json` | S | Totalt ~165 ord — behöver byggas ut något. Tema: kallras, energi, vinter. |
| `/guider/forlang-utesasongen` | `post-forlang-sasongen-pa-din-uteplatsterrass.json` + `post-arets-julklapp-markisen.json` | S | Totalt ~120 ord — behöver byggas ut. Tema: markis/pergola/terrassmarkis för hela året. |

### 3.3 FAQ-block per produktsida (S)

Arkivet innehåller **redan skrivna FAQ-svar** inlined i varje produkt-JSON.
Snittantal: 4–5 frågor per produkt. Genomgående frågor:

- "Kan man få måttanpassade X?"
- "Erbjuder ni gratis hembesök?"
- "Ingår montering av X?"
- "Vad kostar X?"
- "Hur rengör jag X?" (endast för persienner)

Effort: **mycket lågt**. Lägg till ett `<FAQ />`-block på varje befintlig + ny
produktsida. Existerande persienner-sida har redan en `faq`-array — återanvänd
samma komponent.

### 3.4 Ortssidor (L — men tveksamt)

Arkivet har 6 ortssidor (persienner + markiser × Malmö/Lund/Helsingborg) som är
**nästan identiska** bortsett från ortnamnet. Google straffar numera doorway-sidor
med mallad text + utbytt ort.

Alternativ:
1. **Hoppa över.** Skippa ortssidor. Använd istället en "Vi finns i södra Skåne"-sektion på huvudsidorna.
2. **Bygg ut med unikt innehåll.** Varje ortssida behöver skrivas med verkligt ortsspecifikt stoff (lokala referensobjekt, ortsavstånd från verkstad/lager, kartbild). Det är **L-storlek** och en stor del copywriting från noll.

Rekommendation: välj alt 1 tills bolaget har lokal förankring i respektive ort.

### 3.5 Service/Info-sidor (S)

| Förslag URL | Källa | Storlek |
|---|---|---|
| `/tjanster` eller `/hur-det-gar-till` | `page-tjanster.json` | S — 206 ord om konsultation/installation. Rensa "kostnadsfri timme i Krusegatan 52". |
| `/hallbarhet` | `page-miljo-kvalitetspolicy.json` | S — 326 ord, hyfsat generisk hållbarhetspolicy. |
| `/boka-hembesok` | `page-kostnadsfritt-hembesok.json` | S — formulärmall. |

---

## 4. 80/20 — minsta insats för störst sajtutbyggnad

De 20 % jobbet som ger 80 % av räckvidden:

1. **Lägg till FAQ-block på alla 9 befintliga produktsidor.** (~1 dag totalt.)
   Dubblerar textmängden per sida, alla svaren finns färdiga i arkivet.

2. **Skapa 6 nya produktsidor med `ProductPageLayout.tsx`:** `/panelgardiner`,
   `/draperier`, `/fonstermarkiser`, `/parasoller`, `/insektsskydd`,
   `/trapersienner`. (~2 dagar, textredigering + bildurval.)

3. **Bygg `/guider/`-sektion med 2 pelar-artiklar:** `/guider/valja-solskydd` och
   `/guider/pergola-grunder`. (~1 dag.) Dessa två står för den mesta organiska
   trafiken i kunskapsområdet.

Summa: ~4 arbetsdagar → sajten går från 11 sidor till **~26 sidor** och varje
produktsida dubblas i innehåll.

Det som INTE ingår i 80/20:
- Ortssidor (kräver skriva från noll).
- De tunna guide-artiklarna (kallras/utesäsong).
- De tunna produktsidorna (`/korgmarkiser`, `/vindskydd`, `/wavegardiner` —
  tillräckligt tunt innehåll att de blir "döda sidor" om de inte byggs ut).

---

## 5. Risker och oklarheter

### 5.1 Rättigheter efter konkurs

**Kritiskt och oklart.** Tidigare bolaget gick i konkurs 2026-01-16. Nya bolaget
som driver `bellevue-solskydd`-sajten behöver kunna dokumentera att texter,
produktfoton och varumärket Bellevue Solskydd har förvärvats från konkursboet.
Frågor att lösa innan publicering:

- **Varumärke.** Användning av "Bellevue" / "Bellevue Solskydd" — registrerat
  varumärke? Överfört?
- **Upphovsrätt på text.** WordPress-innehållet skapades av tidigare bolaget
  (eller byrå anlitad av dem). Rättigheter bör vara överförda i
  konkursuppgörelsen, annars är text-återanvändning en rättslig risk.
- **Bildlicenser.** Shutterstock-bilderna hade licens knuten till gamla
  organisationen — licensen följer INTE automatiskt med vid försäljning.
  Samma sak gäller surferseo.art-bilder i blogginläggen. Behöver ny licens
  eller bytas mot egna foton.

**Rekommendation:** verifiera med jurist/konkursförvaltare innan publicering.
Arkivet i repot är fine att ha kvar — det är publiceringen på nya domänen som
är känsligt.

### 5.2 Material som "smittar" även om det ser generiskt ut

Flera fraser återkommer i princip varje produktsida och måste städas bort konsekvent:

- "Bäst i Test" / "Testfakta" / "2010 utnämnd till" — finns i 50+ förekomster
  över arkivet (se SUMMARY.md).
- "patenterat", "mönsterskyddat", "patent" — förekomster i `page-persienner.json`,
  `page-unika-funktioner.json`, `page-hem.json`, `page-om-oss.json` m.fl.
- "sedan 1982", "början av 80-talet", "40 år i branschen", "rik historia".
- "3 års garanti" / "Nöjd kundgaranti" — gammal utfästelse, nya bolaget måste
  besluta sin egen policy innan text kopieras.
- "Tillverkas i Malmö" / "egen produktion" / "vår fabrik i Malmö" / "Krusegatan 52"
  — nya bolaget har inte egen produktion enligt uppdragsbrevet.
- "Di Gasell" — finns både i text och som bild.

Det mesta kan hanteras med söka/ersätta, men varje produkttext behöver läsas
igenom — inte klipps-och-klistras blint.

### 5.3 Konkreta blockers i arkivet

- `reviews.json` är **tom** (`Antal datapunkter: 0`) — inga recensioner att lyfta
  trots att gamla sajten kopplade Trustindex.
- `page-unika-funktioner.json` är i princip 100 % patentberättelse — **exkludera helt**.
- `page-om-oss.json` är grundarstorytelling — **exkludera helt**.
- `page-referensprojekt.json` — namngivna kunder, **exkludera helt**.
- 11 PDF-filer (monteringsanvisningar + teknisk data) beskriver tidigare bolagets
  egen produktion och patenterade modeller (VST, VSE, V-A, OV, V-E, V-B/V-F, V-M).
  **Exkludera hela PDF-uppsättningen**. Om montage-/måttguide behövs på nya sajten
  måste den skrivas generiskt från noll.
- Modellbeteckningarna ovan är återkommande genom hela arkivet (inklusive
  FAQ-svar, produkttext, H3-rubriker). Vid återanvändning av persienner-texten
  behöver hela "Olika typer av persienner för alla behov"-sektionen tas bort
  eller skrivas om utan Bellevue-specifika modellnamn.
- Bloggposter använder bilder från `images.surferseo.art/...` som inte är
  nedladdade till arkivet — externa URLer går sönder. Måste ersättas med
  arkivets egna generiska miljöbilder.

### 5.4 Doorway-/ortssidor

6 nästan identiska ortssidor finns i arkivet. Att lyfta dem rakt av ger sämre
SEO än inga ortssidor alls. Flaggas här så att beslut fattas aktivt snarare
än att de smyger med i "återanvänd allt".

### 5.5 Ej granskat

- `arkiv/raw-mirror/` — full wget-mirror, 200+ bilder i kopia. Kan innehålla
  material som inte finns i den strukturerade `content/`-vyn, inte genomgånget.
- `arkiv/content/sitemap.json` — användbart för att sätta 301-redirects från
  gamla URLer, men endast relevant om nya bolaget äger `bellevuesolskydd.se`
  (vilket CNAME-ändringen i main antyder, men bör verifieras).
- Detaljerat bildinnehåll — 121 bilder har listats på filnamn men inte öppnats
  en och en. Några av de "generiska" kan i praktiken innehålla skyltar, personer,
  referenser vid bildgranskning.

---

## 6. Sammanfattning

- **Starkt återanvändningsvärde:** produktbeskrivningar (16 st), FAQ-block
  (≈50 frågor/svar), 2 substantiella guide-artiklar, ~55 generiska miljöbilder.
- **Nolltrafik:** 30 av 36 blogginlägg, alla ortssidor i nuvarande form,
  samtliga PDF:er, alla Nyköping-/Öst-sidor.
- **Absolut exkluderat:** om-oss, unika-funktioner, referensprojekt,
  "Bäst i Test"/Testfakta-referenser, "sedan 1982", patenttext, egen produktion,
  di-gasell, namngivna personer.
- **Stort kvarvarande beslut:** rättighetsläget efter konkursen — texter,
  varumärke, bildlicenser. Bör redas ut innan publicering.
- **Föreslagen nästa milstolpe:** FAQ på befintliga 9 produktsidor +
  6 nya produktsidor + 2 guider → 11 sidor blir ~26 sidor på ca 4 arbetsdagar.
