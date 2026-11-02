# Markissidorna: förberedelse inför omskrivning, 2026-11-02

Läsuppgift. Inga filer har ändrats utom den här rapporten, och inga git-kommandon har körts.

Underlag från Bellevue: 90 % av markisförsäljningen är Selt Palladio. Resten fördelas på Selt Jamaica, Harol Cadiz och Harol Tucan. Ett fåtal Selt Dakar och Selt Corsica har sålts. Övriga modeller säljs i stort sett aldrig.

**Så har jag mätt:**
- **Rubriker, ordantal, länkar och modellnamn** är hämtade ur det byggda `astro/dist/<route>/index.html` (bygget från 2026-11-02), inne i `<main>`.
- **Ordantalet** gäller den synliga texten i `<main>`, inklusive brödsmulor och knapptexter. Head, sidhuvud och sidfot räknas inte.
- **FAQ-frågorna och styckena** är hämtade ur frontmatter i `astro/src/content/pages/<sida>.md`. Ingen av de fyra sidorna har Markdown-brödtext.
- **Modellförekomster** är räknade med ordgränser:
  - "Classic" räknas inte när det står "Classic Nova", och "Italia" räknas inte när det står "Italia Box" eller "Italia Balcony".
  - Kategorin "kort" är alla förekomster inne i ett modellkort, även när modellen nämns i ett *annat* modellkort.
  - "Bild-alt" är alt-texten på kortets bild.
  - "JSON-LD" är träffar i sidans `application/ld+json`.

---

## 1. Sidorna

### /markiser-malmo/

- **H1:** Markiser i Malmö med rådgivning, måttning och montering.
- **H2 (7):**
  1. Vad är skillnaden — och vilken behöver du?
  2. När en markis inte räcker — pergola.
  3. Hur vi tänker när vi rekommenderar.
  4. Vad som styr priset på en markis.
  5. Tre års garanti och lokal service.
  6. Inför platsbesöket — det vi får frågor om markiser.
  7. Det avgörs på er fasad — inte här.
- **Ordantal:** 1 678

**Modeller:** alla nämns en gång, i typkorten under H2 "Vad är skillnaden — och vilken behöver du?".

| Modell | Tillverkare | Var | Antal |
|---|---|---|---|
| Palladio | Selt | kort "Terrassmarkis — soltak över altan eller uteplats." | 1 |
| BX260 | Harol | samma kort | 1 |
| Tidö Duo | Fönstermiljö | samma kort | 1 |
| Italia | Selt | kort "Fönstermarkis — stoppar värmen vid själva glaset." | 1 |
| Sofiero | Fönstermiljö | samma kort | 1 |
| Ängsö (korgmarkis) | Fönstermiljö | kort "Korgmarkis — kupé över entré eller skyltfönster." | 1 |

Inga modeller nämns i FAQ eller JSON-LD. JSON-LD-typer: BreadcrumbList, Service, FAQPage, WebPage.

**FAQ (8), ordagrant:**
1. Vad är skillnaden mellan terrassmarkis och fönstermarkis?
2. Är det värt att motorisera en markis med vindsensor?
3. Hur tål en markis blåsten i Malmö?
4. Hur lång är monteringstiden från beställning?
5. Behöver vi godkännande från bostadsrättsföreningen?
6. Vilken väv håller längst i kustklimat?
7. Behöver markisen vinterförvaras eller kan den sitta uppe året om?
8. Vilka områden i södra Skåne arbetar ni i?

**Interna länkar till de andra tre sidorna:**
- → /terrassmarkiser-malmo/ "Mer om terrassmarkiser i Malmö" (typkortet Terrassmarkis)
- → /fonstermarkiser-malmo/ "Så fungerar fönstermarkiser för söder- och västerfönster" (typkortet Fönstermarkis)
- Ingen länk till /markiser-skanor-falsterbo/.

### /terrassmarkiser-malmo/

- **H1:** Terrassmarkiser i Malmö — måttanpassade och monterade av oss.
- **H2 (10):**
  1. När en terrassmarkis verkligen gör skillnad.
  2. Harol — belgisk precision för uteplatsen.
  3. Selt — polskt sortiment i bredd.
  4. Fönstermiljö — svensk hantverk från Laholm.
  5. För entréer och skyltfönster — korgmarkis Ängsö.
  6. Hur vi väljer rätt modell med er.
  7. Vad som styr investeringen i en terrassmarkis.
  8. Garanti och lokal service.
  9. Frågor inför mätningen.
  10. Vi kommer hem och måttar altanen.
- **Ordantal:** 3 069
- **Modellkort (17):**
  - Harol: CADIZ, LUX, BX260, BX270, PRAIA, TUCAN
  - Selt: Palladio, CASABLANCA, DAKAR, CORSICA, AUSTRALIA, JAMAICA
  - Fönstermiljö: Tidö Duo, FA 44 Design, Classic Nova, FA 42, Classic

**Modeller:**

| Modell | Tillverkare | Kort | Löptext | FAQ | Bild-alt | JSON-LD | Totalt |
|---|---|---|---|---|---|---|---|
| Palladio | Selt | 3 | 1 | 1 | 1 | 1 | 7 |
| Jamaica | Selt | 2 | 0 | 0 | 1 | 0 | 3 |
| Dakar | Selt | 2 | 0 | 0 | 1 | 0 | 3 |
| Corsica | Selt | 2 | 1 (investering) | 0 | 1 | 0 | 4 |
| Casablanca | Selt | 3 (varav 1 i Dakar-kortet) | 0 | 0 | 1 | 0 | 4 |
| Australia | Selt | 5 (varav 3 i Jamaica-kortet) | 0 | 0 | 1 | 0 | 6 |
| Cadiz | Harol | 7 | 0 | 2 | 1 | 2 | 12 |
| LUX | Harol | 5 | 1 (Harol-intro) | 2 | 1 | 2 | 11 |
| BX260 | Harol | 7 (varav 5 i BX270-kortet) | 0 | 1 | 1 | 1 | 10 |
| BX270 | Harol | 3 | 0 | 1 | 1 | 1 | 6 |
| Praia | Harol | 2 | 0 | 2 | 1 | 2 | 7 |
| Tucan | Harol | 2 | 0 | 0 | 1 | 0 | 3 |
| Tidö Duo | Fönstermiljö | 2 | 1 (process) | 0 | 1 | 0 | 4 |
| FA 44 Design | Fönstermiljö | 3 | 0 | 0 | 1 | 0 | 4 |
| Classic Nova | Fönstermiljö | 2 | 0 | 0 | 1 | 0 | 3 |
| FA 42 | Fönstermiljö | 3 (varav 1 i FA 44-kortet) | 0 | 0 | 1 | 0 | 4 |
| Classic | Fönstermiljö | 2 | 0 | 0 | 1 | 0 | 3 |
| Ängsö (korgmarkis) | Fönstermiljö | 0 | 3 (egen sektion) | 0 | 0 | 0 | 3 |

BX260-kortet innehåller också texten "Harols 'Classic, elegant'-linje". Det är en Harol-designlinje och inte Fönstermiljö Classic, så den är inte räknad. JSON-LD-typer: BreadcrumbList, Service, FAQPage, WebPage.

**FAQ (8), ordagrant:**
1. Hur breda terrassmarkiser kan ni måtta upp?
2. Lönar sig kassettmodell jämfört med öppen arm i kustklimat?
3. Vad är skillnaden mellan vikarmsmarkis och fallarmsmarkis?
4. Kan terrassmarkisen kopplas över ett hörn eller flera fönsterpartier?
5. Får vi LED-belysning och infravärme integrerat i terrassmarkisen?
6. Hur hanterar terrassmarkisen regn när den är utfälld?
7. Behövs el dragen till markisen vid monteringen?
8. Vilka områden i södra Skåne arbetar ni i?

**Interna länkar till de andra tre sidorna:**
- → /markiser-malmo/ "Markiser Malmö" (brödsmula)
- → /fonstermarkiser-malmo/ "fönstermarkiser" (löptext)
- → /markiser-malmo/ "markissortimentet i Malmö" (löptext)
- Ingen länk till /markiser-skanor-falsterbo/.

### /fonstermarkiser-malmo/

- **H1:** Fönstermarkiser i Malmö — solen stoppas vid glaset.
- **H2 (9):**
  1. När fönstermarkis är rätt val.
  2. Modellerna vi tar mått för.
  3. Övriga fönstermarkiser i sortimentet.
  4. Fönstermarkis eller terrassmarkis?
  5. Så jobbar vi med fönstermarkiser.
  6. Vad som styr kostnaden per fönster.
  7. Garanti och lokal kontaktpunkt.
  8. Frågor om fönstermarkiser.
  9. Vi kommer hem och mäter fasaden.
- **Ordantal:** 1 608
- **Modellkort (4):** Selt Italia Box, Selt Italia, Fönstermiljö Sofiero, Fönstermiljö Solliden.
- **Lista "Övriga" (3):** Selt Italia Balcony, Fönstermiljö Haga, Fönstermiljö Läckö.

**Modeller:**

| Modell | Tillverkare | Kort/lista | Löptext | FAQ | Bild-alt | JSON-LD | Totalt |
|---|---|---|---|---|---|---|---|
| Italia Box | Selt | 3 (varav 1 i Sofiero-kortet) | 2 (hero, kostnad) | 1 | 1 | 1 | 8 |
| Italia | Selt | 2 | 2 (hero, kostnad) | 0 | 1 | 0 | 5 |
| Italia Balcony | Selt | 1 (lista) | 2 (hero, "När fönstermarkis är rätt val.") | 1 | 0 | 1 | 5 |
| Sofiero | Fönstermiljö | 2 | 2 (hero, kostnad) | 1 | 1 | 1 | 7 |
| Solliden | Fönstermiljö | 2 | 3 (hero, "När fönstermarkis…", kostnad) | 1 | 1 | 1 | 8 |
| Haga | Fönstermiljö | 1 (lista) | 2 (hero, kostnad) | 0 | 0 | 0 | 3 |
| Läckö | Fönstermiljö | 1 (lista) | 2 (hero, kostnad) | 0 | 0 | 0 | 3 |

JSON-LD-typer: BreadcrumbList, Service, FAQPage, WebPage.

**FAQ (8), ordagrant:**
1. Hur effektivt stoppar en fönstermarkis värmen jämfört med invändigt solskydd?
2. Måste fönstermarkiserna ha samma färg som grannarnas i bostadsrättsföreningen?
3. Är fönstermarkis ett alternativ till persienn eller rullgardin på insidan?
4. Behövs motor om vi har många fönstermarkiser i samma fastighet?
5. Kan fönstermarkis monteras över franska balkonger eller balkongdörrar?
6. Klarar fönstermarkisen att sitta uppe i Malmö-vintern?
7. Hur diskret blir fönstermarkisen på fasaden när den är indragen?
8. Vilka områden i södra Skåne arbetar ni i?

**Interna länkar till de andra tre sidorna:**
- → /markiser-malmo/ "Markiser Malmö" (brödsmula)
- → /terrassmarkiser-malmo/ "Läs om terrassmarkiser för uteplatser"
- → /markiser-malmo/ "hela markissortimentet i Malmö"
- Ingen länk till /markiser-skanor-falsterbo/.

### /markiser-skanor-falsterbo/

- **H1:** Markiser i Skanör-Falsterbo
- **H2 (5):**
  1. Varför markiser i Skanör-Falsterbo?
  2. Kort om markiser
  3. Så hjälper vi dig i Skanör-Falsterbo
  4. Frågor från Skanör-Falsterbo.
  5. Boka hembesök i Skanör-Falsterbo.
- **Ordantal:** 453
- **Modeller:** inga.
- JSON-LD-typer: BreadcrumbList, Service, FAQPage.

**FAQ (3), ordagrant:**
1. Hur tål markiser saltvinden i Skanör, Falsterbo, Höllviken och Ljunghusen?
2. Finns det markisfärger som passar klassiska sommarvillor i Falsterbo?
3. Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen från Staffanstorp?

**Interna länkar till de andra tre sidorna:**
- → /markiser-malmo/ "Markiser Malmö" (brödsmula)
- → /markiser-malmo/ "Läs mer om markiser i Malmö och hela södra Skåne"

Ingen av de fyra sidorna länkar till /markiser-skanor-falsterbo/.

---

## 2. Överlapp

### Modeller som finns på mer än en sida

| Modell | Sidor |
|---|---|
| Selt Palladio | markiser-malmo (typkort), terrassmarkiser-malmo |
| Harol BX260 | markiser-malmo (typkort), terrassmarkiser-malmo |
| Fönstermiljö Tidö Duo | markiser-malmo (typkort), terrassmarkiser-malmo |
| Fönstermiljö Ängsö | markiser-malmo (typkort), terrassmarkiser-malmo |
| Selt Italia | markiser-malmo (typkort), fonstermarkiser-malmo |
| Fönstermiljö Sofiero | markiser-malmo (typkort), fonstermarkiser-malmo |

Ingen modell finns på både terrassmarkiser-malmo och fonstermarkiser-malmo. markiser-skanor-falsterbo nämner inga modeller.

### FAQ-frågor som är samma eller nästan samma

| Fråga | Sidor |
|---|---|
| "Vilka områden i södra Skåne arbetar ni i?" | **identisk** på markiser-malmo, terrassmarkiser-malmo och fonstermarkiser-malmo. Svaren är nästan likadana (ordlikhet 0,87–0,94), bara verbet och produktnamnet skiljer. Skanör har motsvarigheten "Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen från Staffanstorp?" |
| "Vad är skillnaden mellan terrassmarkis och fönstermarkis?" (markiser-malmo) | ≈ "Vad är skillnaden mellan vikarmsmarkis och fallarmsmarkis?" (terrassmarkiser-malmo). Samma förklaring: horisontellt över en yta mot snett ner över ett fönster. fonstermarkiser-malmo tar upp samma sak i sektionen H2 "Fönstermarkis eller terrassmarkis?" (inte i FAQ). |
| "Behöver markisen vinterförvaras eller kan den sitta uppe året om?" (markiser-malmo) | ≈ "Klarar fönstermarkisen att sitta uppe i Malmö-vintern?" (fonstermarkiser-malmo). Båda svaren säger att kassett klarar året runt och att öppen modell bör tas in. |
| "Behöver vi godkännande från bostadsrättsföreningen?" (markiser-malmo) | ≈ "Måste fönstermarkiserna ha samma färg som grannarnas i bostadsrättsföreningen?" (fonstermarkiser-malmo). Båda tar upp gemensam färgskala/fasadlinje och att vi tar fram underlag. |
| "Vilken väv håller längst i kustklimat?" och "Hur tål en markis blåsten i Malmö?" (markiser-malmo) | Delvis samma ämne som "Lönar sig kassettmodell jämfört med öppen arm i kustklimat?" (terrassmarkiser-malmo) och "Hur tål markiser saltvinden i Skanör, Falsterbo, Höllviken och Ljunghusen?" (markiser-skanor-falsterbo). |
| "Är det värt att motorisera en markis med vindsensor?" (markiser-malmo) | Delvis samma ämne som "Behövs motor om vi har många fönstermarkiser i samma fastighet?" (fonstermarkiser-malmo). |

### Stycken som till stor del säger samma sak

Likheten är mätt som andel gemensamma treordsfraser. 1,0 betyder samma text.

| Likhet | Sida A — rubrik | Sida B — rubrik | Innehåll |
|---|---|---|---|
| 1,0 | markiser-malmo — "Tre års garanti och lokal service." (stycke 1) | terrassmarkiser-malmo — "Garanti och lokal service." (stycke 1) | "Selts markiser har 7 års garanti och motorn 5 år. Övrigt utvändigt solskydd har 3 års garanti. …" Ordagrant samma. |
| 1,0 | markiser-malmo — samma | fonstermarkiser-malmo — "Garanti och lokal kontaktpunkt." (stycke 1) | Samma stycke, men slutet är kortare. |
| 0,93 | markiser-malmo — "Tre års garanti och lokal service." (stycke 2) | terrassmarkiser-malmo — "Garanti och lokal service." (stycke 2) | "Service och reservdelar går genom oss … egna montörer i Malmö, Lund, Vellinge …" |
| 0,45 | markiser-malmo / terrassmarkiser-malmo — garantins stycke 2 | fonstermarkiser-malmo — "Garanti och lokal kontaktpunkt." (stycke 2) | Samma budskap med andra ord. |
| 1,0 | markiser-malmo — "Vad som styr priset på en markis." (avslutning) | terrassmarkiser-malmo — "Vad som styr investeringen i en terrassmarkis." (avslutning) | "Vi räknar på ert projekt på plats — material, montage, eventuell el och styrelseunderlag — …" Ordagrant samma. |
| 0,38 | samma två | fonstermarkiser-malmo — "Vad som styr kostnaden per fönster." (avslutning) | Samma upplägg: "specificerad offert där varje … står för sig själv". |
| 0,78 | markiser-malmo — "Vad som styr priset på en markis." (stycke 5, montage) | terrassmarkiser-malmo — "Vad som styr investeringen i en terrassmarkis." (stycke 5) | "Slutligen montage… slät putsfasad … tredje våningen … skylift." |
| 0,46 | markiser-malmo — samma (stycke 4, väv) | terrassmarkiser-malmo — samma (stycke 4) | Akrylväv med UV- och smutsbehandling, "viktigt nära havet", specialkulörer. |
| 0,23 / 0,20 | markiser-malmo — samma (stycke 1 storlek, stycke 3 motor) | terrassmarkiser-malmo — samma (stycke 1, stycke 3) | Samma prisfaktorer i samma ordning: storlek, motor och sensorer, väv, montage. |
| 0,96 | markiser-malmo — slut-CTA "Det avgörs på er fasad — inte här." (brödtext) | terrassmarkiser-malmo — slut-CTA "Vi kommer hem och måttar altanen." (brödtext) | "Mätning/Måttning, modellval och vävprover sker mot er fasad i dagsljus. Hembesök och offert är kostnadsfria …" |
| 0,73 | samma två | fonstermarkiser-malmo — slut-CTA "Vi kommer hem och mäter fasaden." (brödtext) | Samma mening med "BRF-underlag" tillagt. |
| 0,53 | markiser-malmo — FAQ "Behöver markisen vinterförvaras …" (svar) | fonstermarkiser-malmo — FAQ "Klarar fönstermarkisen att sitta uppe i Malmö-vintern?" (svar) | Kassett året runt, öppen modell in vintertid. |
| 0,15 (ordlikhet 0,50) | markiser-malmo — "Hur vi tänker när vi rekommenderar." (stycke 1) | terrassmarkiser-malmo — "Hur vi väljer rätt modell med er." (stycke 1) | "Vi börjar med fasaden, inte modellen … väderstreck … vinden från Öresund." |
| 0,44 | markiser-malmo — typkortet "Terrassmarkis — soltak över altan eller uteplats." (stycke 1) | terrassmarkiser-malmo — I korthet (punkt 1) | Definitionen av terrassmarkis. |
| 0,35 | markiser-malmo — typkortet "Fönstermarkis — stoppar värmen vid själva glaset." (Löser-stycket) | fonstermarkiser-malmo — FAQ "Hur effektivt stoppar en fönstermarkis värmen …" (svar) | "stoppar typiskt en väsentligt större andel av värmen än persienner eller rullgardin på insidan". |
| 0,6 | markiser-malmo — I korthet (punkt 4) | terrassmarkiser-malmo och fonstermarkiser-malmo — garantins stycke 1 | Samma garantimening. |

Uppgifterna om garanti är inte samstämmiga mellan och inom sidorna:
- markiser-malmo har H2 "Tre års garanti och lokal service.", men stycket under säger att Selts markiser har 7 års garanti.
- terrassmarkiser-malmo har "3 års garanti" i I korthet (punkt 4), men 7 år för Selt i garantisektionen.

### Vilken sida har mest innehåll om terrassmarkiser (vikarm och kassett)

**/terrassmarkiser-malmo/.**

| Sida | Ord | "vikarm" | "kassett" | "terrassmarkis" | Terrassmarkismodeller med eget kort |
|---|---|---|---|---|---|
| terrassmarkiser-malmo | 3 069 | 33 | 71 | 24 | 17 |
| markiser-malmo | 1 678 | 0 | 10 | 8 | 0 (3 modeller nämns i ett typkort) |
| fonstermarkiser-malmo | 1 608 | 0 | 19 | 4 | 0 |
| markiser-skanor-falsterbo | 453 | 0 | 4 | 0 | 0 |

Antalen är träffar på ordstammen i den synliga texten i `<main>`. "kassett" räknas även i ord som "kassettmodell".

---

## 3. Faktaläge för modellerna Bellevue säljer

### Källor som har genomsökts
- `astro/src/data`: **finns inte**. Astro-projektet har ingen datamapp; modelltexterna ligger direkt i frontmatter.
- `nextjs-v3/data/fakta/markiser/`: INDEX.md (genererad 2026-05-20) samt `selt/*.yaml` och `harol/*.yaml`.
- `nextjs-v3/data/research-output/`: `selt-*-awning.{json,md}`, `harol-cadiz-*.{json,md}` och `harol-tucan-*.{json,md}`.
- `~/projects/product-scraper/output/`:
  - skrapade mappar `markiza-*-selt_*`, `selt-awnings-collection_*` och `harol-folding-arm-awnings_*`
  - `selt-sortiment.md`, `harol-sortiment.md`, `verifiering-selt.md` och `verifiering-fonstermiljo-harol.md`
  - kopior av yaml-filerna under `output/selt/fakta/` och `output/harol/fakta/`
- `~/projects/product-scraper/verify-output/` och `~/projects/product-scraper/bellevue-bekraftad-lista.md`.

### Hur statusen är satt
- **verifierad:** manufacturer-verified 🏭 eller catalog-verified ✅ (minst 2 eniga källor).
- **enskild källa:** single-source ⚡.
- **osäker:** disputed ⚠️, insufficient-search, eller ett värde som bara finns i rå research utan verifieringsstatus. För disputed visas båda värdena.
- Statusen kommer från yaml-filen. När verify-output säger något annat står det inom parentes.

Förkortningar i Fil-kolumnen: Y = yaml, V = verify-output, T2 = `verify-output/test-b-harol-cadiz-v2.json`, R = research-output, S = skrapad `product.json`.

**Tre saker att veta innan tabellerna:**
1. **Yaml-filerna är daterade 2026-05-12, verifieringen kördes 2026-05-19–20.** Yaml har inte uppdaterats efteråt. Många värden står därför som "enskild källa" i yaml trots att verify-output bekräftar dem från tillverkarens kanal.
2. **Jamaica och Dakar verifierades med ett äldre schema.** Deras verify-filer har bara statusen `verified` (minst 2 eniga domäner) och ingen uppgift om tillverkarkanal. INDEX.md räknar dem som 0 🏭 och 0 ✅. Här visas den statusen som "verifierad\*".
3. **Kassettypen är motstridig för Palladio, Jamaica och Corsica.** Källorna säger full kassett, halvkassett eller ingen kassett. Detaljerna står under respektive modell.

Kontroller jag gjorde själv av underlaget nedan:
- `palladio.yaml` rad 4 säger "Terrassmarkis full kassett".
- "madeira" ger 0 träffar i astro/src, nextjs-v3/data, product-scraper/output och verify-output.
- `astro/public/images/terrassmarkis/` innehåller Harol-BX270, -CADIZ, -LUX, -PRAIA och -TUCAN (webp).

### Selt Palladio
**Filer:**
- `nextjs-v3/data/fakta/markiser/selt/palladio.yaml` (identisk kopia i `~/projects/product-scraper/output/selt/fakta/palladio.yaml`)
- `~/projects/product-scraper/verify-output/selt-palladio-awning.{json,md}` (2026-05-20, tillverkarkanal plikiapi.selt.com)
- `nextjs-v3/data/research-output/selt-palladio-awning.{json,md}`
- `~/projects/product-scraper/output/markiza-tarasowa-palladio-selt_2026-05-04T10-22-29-241Z/`
- selt-sortiment.md, verifiering-selt.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Produkttyp | Terrassmarkis med vikbara armar (semi-kassett) | verifierad (V: ⚠️ "Terrace awning / cassette awning" mot "semi-cassette") | plikiapi.selt.com, archiselt.com | Y |
| Utfall | 1,6 m, 2,1 m, 2,6 m, 3,1 m, 3,6 m | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Maximalt utfall | 3,6 m | verifierad (V: ⚠️ bara format "360 cm") | plikiapi.selt.com, archiselt.com | Y |
| Maxbredd | 7,0 m | verifierad (V: ⚠️ bara format "700 cm") | plikiapi.selt.com, archiselt.com | Y |
| Minbredd | Utfall + 0,5 m, eller med överlappande armar: utfall – 0,4 m | enskild källa (V: 🏭; V har även "210 cm" ⚡ shopsun.eu) | plikiapi.selt.com | Y |
| Rullrör diameter | 70 mm | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Lutningsvinkel | 5°–50° / alt. 5°–40° | osäker (V: 🏭 5°–50°) | plikiapi.selt.com, archiselt.com / e-markizy.pl | Y |
| Valfri huv | Nej | verifierad (V: 🏭) | plikiapi.selt.com, archiselt.com | Y |
| Kassett | Ja (semi-kassett) | enskild källa (V: 🏭 "yes") | archiselt.com | Y |
| Konstruktionsfärger | Vit, beige, brun, silver, strukturell grafit | enskild källa (V: ⚠️ alt. "white, graphite, silver with graphite finishing, beige, and brown") | plikiapi.selt.com | Y |
| Antal tygmönster | ca 150 | verifierad (V: ⚠️ alt. "140 patterns" / "over 100 different colors") | plikiapi.selt.com, archiselt.com | Y |
| Falbana | 3 former enligt mall; standardhöjd 21 cm (±0,5), max icke-standard 40 cm (±0,5) eller rak 50 cm (±0,5) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Falbana tillgänglig | Ja | verifierad (V: 🏭) | plikiapi, archiselt | Y |
| Applikation | Utvändig | verifierad (V: 🏭) | plikiapi, archiselt | Y |
| Monteringstyper | Vägg, tak, takstol | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Breddtolerans | ± 2 cm | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Överlappande armar | Ja, ej vid utfall 360 cm | verifierad (V: 🏭) | plikiapi, archiselt | Y |
| Spänning/frekvens | 230 V / 50 Hz | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Motoreffekt | 198–275 W | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| gtot | 0,01–0,90 (typ C-glas, EN 14501:2005) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Vindklass, bredd ≤700, utfall ≤260, 2/3 armar | Klass 2 (84 Pa) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Vindklass, bredd ≤590, utfall 310/360, 2 armar | Klass 1 (48 Pa) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Vindklass, bredd >590–≤700, utfall 310, 3 armar | Klass 2 (84 Pa) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Vindklass, bredd >590–≤700, utfall 360, 2 armar | Klass 0 (<48 Pa) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Vindklass, bredd >650–≤700, utfall 360, 3 armar | Klass 1 (48 Pa) | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Teleskopstöd frontprofil | Standard och Plus | enskild källa (saknas i V) | archiselt.com | Y |
| Väggfäste | 225 × 205 mm | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Takfäste | 240 × 226 mm | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Takstolsfäste | 350 × 406 mm | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Minimihöjd vid montage | 2200 mm ovan mark | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Certifiering | CE-märkning | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Certifiering | EN 13561:2015 | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Certifiering | Maskindirektivet 2006/42/EC (motoriserade) | enskild källa | plikiapi.selt.com | Y |
| Certifiering | CPR (EU) nr 305/2011 | enskild källa | plikiapi.selt.com | Y |
| Material | Vikbara aluminiumarmar med fjädrar och Flyer-kedja, nivåjustering | verifierad (V: 🏭) | plikiapi, archiselt | Y |
| Material | Extruderat aluminium | enskild källa (V: ✅ archiexpo, bcbsystems) | archiselt.com | Y |
| Material | Pulverlackerad konstruktion | enskild källa | e-markizy.pl | Y |
| Material | Akrylväv med fluororesin/teflon, impregnerande skyddsbarriär | verifierad (V: fabric_material ⚡ shopsun) | e-markizy.pl, plikiapi | Y |
| Material | Bärande fyrkantprofil i aluminium | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Motor/styrning | Manuell vev 1,5 / 1,8 / 2,2 m | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Motor/styrning | Motor, motor med nödöverstyrning, fjärrmottagare, sol-vind-automatik | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Motor/styrning | Motorer IP 44 | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Motor/styrning | Individuell och gruppstyrning med en- eller flerkanalig fjärrkontroll | enskild källa | plikiapi.selt.com | Y |
| Motor/styrning | Termiskt skydd stänger av efter några minuters kontinuerlig drift | enskild källa | plikiapi.selt.com | Y |
| Motor/styrning | Växel 11:1 saknar mekaniskt ändläge (manuell drift) | enskild källa | plikiapi.selt.com | Y |
| USP | Semi-kassett skyddar tyget och ger estetisk fasad vid stängd markis | enskild källa | archiselt.com | Y |
| USP | Flyer-kedja förstärker armarna även vid stora bredder/utfall | enskild källa | archiselt.com | Y |
| USP | Teleskopstöd (tillval) ökar vindmotståndet | enskild källa | archiselt.com | Y |
| USP | Avrundade sidor och front | enskild källa | archiselt.com | Y |
| Övrigt | Max vindklass för vikarmsmarkiser enligt EN 13561 är klass 2 | enskild källa | plikiapi.selt.com | Y |
| Övrigt | Får inte användas vid 0 °C eller lägre | enskild källa | plikiapi.selt.com | Y |
| Övrigt | Horisontell deformation av frontprofil upp till 25 mm är normalt | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Övrigt | SELT Sp. z o.o., 45-449 Opole, ul. Wschodnia 23A | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Övrigt | Dokumentation utgåva 7, giltig från 28 mars 2022 | enskild källa (V: 🏭) | plikiapi.selt.com | Y |
| Extra: produktnamn | Terrace awning PALLADIO | verifierad (🏭) | shopsun.eu, plikiapi, archiexpo, bcbsystems.co.uk | V |
| Extra: max tvättemperatur väv | 30 °C | verifierad (🏭) | plikiapi.selt.com | V |
| Extra: minbredd | 210 cm | enskild källa | shopsun.eu | V |
| Extra: pris | 2684,00 € | enskild källa | shopsun.eu | V |
| Extra: valance-varianter | C (max 40 cm), D, E | osäker (bara research) | brevo.lt | R |
| Extra: vindmotstånd | 0–2 class, <28 km/h upp till 38 km/h | osäker (bara research) | brevo.lt | R |
| Extra: pris | från €1 051,20 inkl. moms efter 10 % rabatt | osäker (bara research) | brevo.lt | R |
| Extra: pris | 2137,00 zł | osäker (bara skrap) | e-markizy.pl | S |

**Bilder:**
- Det finns ingen bild på sajten. `terrassmarkiser-malmo.md` pekar på `/images/markiser/selt-palladio.jpg`, men mappen `images/markiser` finns inte, och fältet `plannedImage` används inte av mallarna.
- Det finns skrapade råbilder (identifierade via alt-text och URL, inte granskade visuellt):
  - `~/projects/product-scraper/output/selt-awnings-collection_2026-05-04T09-55-51-504Z/images/3388c8e9.png`, `e03da344.png`
  - `~/projects/product-scraper/output/markiza-tarasowa-palladio-selt_2026-05-04T10-22-29-241Z/images/b81fd9e0.jpg`, `9da898ef.jpg`, `cebb8228.jpg`, `86bfba23.jpg`, plus 3 YouTube-miniatyrer (`074910a7.jpg`, `b7ffc653.jpg`, `683ade01.jpg`)
  - måttdiagram i `~/projects/product-scraper/output/markiza-corsica-selt_2026-05-04T10-16-41-736Z/images/0ec9d572.jpg`, `527d4702.jpg`, `ca3abd71.jpg`

**Saknar data helt:** nej.

**Att notera:**
- Yaml säger både "Terrassmarkis full kassett" (`produkttyp`) och "semi-kassett" (spec). Aluprof säger semi-cassette (enligt verifiering-selt.md), medan e-markizy och selt-sortiment.md säger full kassett.
- Lutningen 5°–40° tillskrivs e-markizy.pl, men den skrapade e-markizy-sidan anger 5°–50°.

### Selt Jamaica
**Filer:**
- `nextjs-v3/data/fakta/markiser/selt/jamaica.yaml` (identisk kopia i product-scraper/output/selt/fakta/)
- `~/projects/product-scraper/verify-output/selt-jamaica-awning.{json,md}` (2026-05-19, gammalt schema)
- `nextjs-v3/data/research-output/selt-jamaica-awning.{json,md}`
- selt-sortiment.md, verifiering-selt.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Maxbredd | 700 cm | enskild källa (V: verifierad\* "7 m") | e-markizy.pl | Y |
| Minbredd | 205 cm | enskild källa (V: ⚠️ "utfall + 0,5 m, eller med överlappande armar: utfall – 0,4 m" [plikiapi] mot "from 210 cm") | e-markizy.pl | Y |
| Maxutfall | 360 cm | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Minutfall | 160 cm | enskild källa (V: verifierad\* utfall 1,6/2,1/2,6/3,1/3,6 m) | e-markizy.pl | Y |
| Lutningsvinkel | 5°–40° steglös | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Leveranstid | ca 14–21 arbetsdagar | enskild källa | e-markizy.pl | Y |
| Material | Fyrkantig aluminiumbalk | enskild källa | e-markizy.pl | Y |
| Material | Pulverlackerad, flera standardfärger | enskild källa (V construction_colour ⚠️) | e-markizy.pl | Y |
| Material | Armar med Flyer-kedjelänksystem | enskild källa (V arms ⚠️, formulering) | e-markizy.pl | Y |
| Material | CNC-bearbetade armfästen i aluminium | enskild källa | e-markizy.pl | Y |
| Material | Centralt stöd för upprullningsröret | enskild källa | e-markizy.pl | Y |
| Material | 100 % akryl med teflonbehandling | enskild källa | e-markizy.pl | Y |
| Material | Över 100 dukfärger | enskild källa (V: ⚠️ "c. 150 patterns" / "140 patterns" / "over 100 colors") | e-markizy.pl | Y |
| Motor/styrning | Manuell vev (standard) | enskild källa (V: verifierad\* vev 1,5/1,8/2,2 m) | e-markizy.pl | Y |
| Motor/styrning | Elmotor (tillval), även med nödvev | enskild källa (V ⚡) | e-markizy.pl | Y |
| Motor/styrning | Trådlös fjärrkontroll med styrcentral (tillval) | enskild källa | e-markizy.pl | Y |
| Motor/styrning | Vind-/vibrationssensor (tillval) | enskild källa | e-markizy.pl | Y |
| Motor/styrning | LED på armarna (tillval) | enskild källa | e-markizy.pl | Y |
| USP | Centralt stöd ger jämn dukspänning | enskild källa | e-markizy.pl | Y |
| USP | Flyer-kedjelänksarmar med precisionsleder | enskild källa | e-markizy.pl | Y |
| USP | Fyrkantig balk ger fritt val av fästeplacering | enskild källa | e-markizy.pl | Y |
| Övrigt | Väggfäste standard; tak- och takstolsfäste tillval | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Övrigt | Halvkassett/skyddshuv som tillval | enskild källa (V optional_hood verifierad\* "Yes") | e-markizy.pl | Y |
| Övrigt | Teleskopstöd frontprofil som tillval | enskild källa | e-markizy.pl | Y |
| Övrigt | Montering på isolerad fasad upp till 20 cm med kemiskt infästningsset | enskild källa (V: ⚠️ "upp till 25 cm (betong), max 15 cm (Porotherm/massivt tegel)" [plikiapi]) | e-markizy.pl | Y |
| Övrigt | Breddmått = total ytterbredd inkl. fästen | enskild källa | e-markizy.pl | Y |
| Extra | Max utfall med volang 3,1 m; max bredd med volang 5,9 m; 2–5 fästen beroende på bredd; volang standardhöjd 21 cm; breddtolerans ±2 cm; manuell eller motor | verifierad\* | shopsun.eu, plikiapi, archiexpo | V |
| Extra | Rullrör 70/78 mm / 70, 80 mm | osäker (⚠️) | plikiapi / okänd | V |
| Extra | Volangformer: 3 enligt mall / 3 mönster | osäker (⚠️) | plikiapi | V |
| Extra | Volang max höjd akryl 1,2 m / upp till 120 cm | osäker (⚠️) | plikiapi | V |
| Extra | cassette: no | enskild källa | archiexpo.com | V |
| Extra | half_cassette_option: yes | enskild källa | shopsun.eu | V |
| Extra | Startpris 750,00 € | enskild källa | markizes24.lv | V |
| Extra | 230 V/50 Hz; 198–275 W; IP 44; växel 11:1; min montagehöjd 2200 mm; frontdeformation upp till 25 mm; gtot 0,01–0,90; EN 13561:2015; CE | enskild källa | plikiapi.selt.com | V |
| Extra | Takfäste 215 × 235 mm; väggfäste 200 × 210 mm; väggfäste med huv 225 × 230 mm; takstolsfäste 330 × 415 mm; huv bara vid väggmontage | enskild källa | plikiapi.selt.com | V |
| Extra | Vindklasser: bredd ≤410/utfall ≤260/2 armar klass 2 (132 Pa); bredd ≤700/utfall ≤260 klass 2 (84 Pa); bredd ≤700/utfall 360 klass 1 (48 Pa) | enskild källa | plikiapi.selt.com | V |
| Extra | Dokumentation utgåva 9, mars 2022 | enskild källa | plikiapi.selt.com | V |

**Bilder:** ingen bild på sajten (`plannedImage` pekar på `/images/markiser/selt-jamaica.jpg`, som inte finns). Skrapade råbilder: `~/projects/product-scraper/output/selt-awnings-collection_2026-05-04T09-55-51-504Z/images/57902210.png` och `9051a189.png`.

**Saknar data helt:** nej.

**Att notera:**
- Alla 26 yaml-poster bygger på en enda källa, e-markizy.pl.
- Kassettypen är motstridig. Yaml säger "lätt kassett" och selt-sortiment.md säger "Lätt kassettmarkis". Mot det står verifiering-selt.md (aluprof: "non-cassette", e-markizy: "bez kasety") och verify `cassette: no`.
- Research kunde inte hämta tillverkarens PDF.

### Selt Dakar
**Filer:**
- `nextjs-v3/data/fakta/markiser/selt/dakar.yaml` (identisk kopia i product-scraper)
- `~/projects/product-scraper/verify-output/selt-dakar-awning.{json,md}` (2026-05-19, gammalt schema)
- `nextjs-v3/data/research-output/selt-dakar-awning.{json,md}`
- selt-sortiment.md, verifiering-selt.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Maxbredd | 600 cm | enskild källa (V: ⚠️ bara format) | e-markizy.pl | Y |
| Minbredd | 200 cm | enskild källa (V: ⚠️ "utfall + 0,4 m" [plikiapi] mot "200 cm") | e-markizy.pl | Y |
| Maxutfall | 360 cm | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Minutfall | 160 cm | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Lutningsvinkel | 5°–40° steglös | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Kassettyp | Full kassett (oval) | enskild källa (V: cassette verifierad\* "Yes"; cassette_type ⚠️ "full sealed cassette" / "yes, with a gasket") | e-markizy.pl | Y |
| Leveranstid | ca 14–21 arbetsdagar | enskild källa | e-markizy.pl | Y |
| Konstruktionsfärger | 5 standardfärger, pulverlackerade | enskild källa (V: ⚠️ olika listor) | e-markizy.pl | Y |
| Vävfärger | Över 100 | enskild källa (V: ⚠️ ca 150 / över 100 / 140) | e-markizy.pl | Y |
| Material | Fällbara armar i aluminiumlegering | enskild källa (V ⚠️ formulering) | e-markizy.pl | Y |
| Material | Flyer-kedja i rostfritt stål | enskild källa | e-markizy.pl | Y |
| Material | Tätningar inuti kassetten | enskild källa | e-markizy.pl | Y |
| Material | Konsolmonterade armfästen | enskild källa | e-markizy.pl | Y |
| Material | Pulverlackerad konstruktion | enskild källa | e-markizy.pl | Y |
| Material | 100 % akryl med teflonbeläggning | enskild källa | e-markizy.pl | Y |
| Motor/styrning | Manuell vev (standard) | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Motor/styrning | Elmotor (tillval), även med nödvev | enskild källa (V ⚡) | e-markizy.pl | Y |
| Motor/styrning | Trådlös fjärrkontroll (tillval) | enskild källa | e-markizy.pl | Y |
| Motor/styrning | Vind-/vibrationssensor (tillval) | enskild källa | e-markizy.pl | Y |
| Motor/styrning | LED på armarna (tillval) | enskild källa | e-markizy.pl | Y |
| USP | Stängd: bara den ovala kassetten syns | enskild källa | e-markizy.pl | Y |
| USP | Tätningar ger extra vävskydd | enskild källa | e-markizy.pl | Y |
| USP | Väggmontage på isolerad fasad upp till 20 cm | enskild källa | e-markizy.pl | Y |
| Övrigt | Väggfäste standard; tak/takstol tillval | enskild källa (V: verifierad\*) | e-markizy.pl | Y |
| Övrigt | Teleskopstöd som tillval | enskild källa (V: ⚡ "Standard" aluprof, **motsäger**) | e-markizy.pl | Y |
| Övrigt | Måttbeställd | enskild källa | e-markizy.pl | Y |
| Extra | Utvändig; extruderat aluminium; ingen valfri huv; volang ja, 3 former, standard 21 cm; breddtolerans ±2 cm; stöd för rullrör vid större bredder | verifierad\* | plikiapi, aluprof, archiexpo, markizes24, shopsun | V |
| Extra | Typ: vikarmsmarkis / boxmarkis | osäker (⚠️) | plikiapi, archiexpo | V |
| Extra | Rullrör 78 / 80 mm | osäker (⚠️) | plikiapi | V |
| Extra | 2 armar | enskild källa | plikiapi.selt.com | V |
| Extra | Pris från 1 370,00 € | enskild källa | markizes24.lv | V |
| Extra | CE; EN 13561:2015; 2006/42/EC; 230 V/50 Hz; 198–275 W; IP 44; gtot 0,01–0,90; min montagehöjd 2200 mm; max vindklass för vikarmsmarkiser klass 2 | enskild källa | plikiapi.selt.com | V |
| Extra | Väggfäste 285 × 202,5 mm; takfäste djup 245 mm, bredd 290 mm; takstolsfäste 410 × 412 mm; volang max 40 cm / rak 50 cm | enskild källa | plikiapi.selt.com | V |
| Extra | Vindklasser: bredd ≤410/utfall ≤310/2 armar klass 2 (84 Pa); bredd ≤410/utfall 360 klass 1; bredd >410–600/utfall ≤360 klass 1 (48 Pa) | enskild källa | plikiapi.selt.com | V |
| Extra | Dokumentation utgåva 7, mars 2022 | enskild källa | plikiapi.selt.com | V |
| Extra | Antal fästen: ≤4,1 m = 2, >4,1 m = 3 / "2 till 4 beroende på bredd" | osäker (bara research, källorna oeniga) | shopsun.eu / e-markizy.pl | R |
| Extra | Växel 11:1 utan mekaniskt ändläge | osäker (bara research) | manualslib.com | R |

**Bilder:** ingen bild på sajten (`/images/markiser/selt-dakar.jpg` finns inte). Skrapade råbilder:
- `~/projects/product-scraper/output/selt-awnings-collection_2026-05-04T09-55-51-504Z/images/ab13f78c.png`, `541fd8fb.png`
- `~/projects/product-scraper/output/markiza-tarasowa-palladio-selt_2026-05-04T10-22-29-241Z/images/f63a248f.jpg`, `ed246b78.jpg`, `ccbdccc9.jpg`, `fd4cfa4b.jpg`, `b53a98c7.jpg`, `df1b1b99.jpg` (ligger i Palladio-mappen)

**Saknar data helt:** nej.

**Att notera:** yaml bygger på en enda källa (e-markizy.pl), och verify använder det gamla schemat.

### Selt Corsica
**Filer:**
- `nextjs-v3/data/fakta/markiser/selt/corsica.yaml` (identisk kopia i product-scraper)
- `~/projects/product-scraper/verify-output/selt-corsica-awning.{json,md}` (2026-05-20, **ingen tillverkarkanal hittad**)
- `nextjs-v3/data/research-output/selt-corsica-awning.{json,md}`
- `~/projects/product-scraper/output/markiza-corsica-selt_2026-05-04T10-16-41-736Z/`
- selt-sortiment.md, verifiering-selt.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Produktkod | CORSICA.700x160-210-260-310-360 | enskild källa | plikiapi.selt.com | Y |
| Maxbredd | 700 cm | verifierad (V: ⚠️ bara format) | e-markizy.pl, plikiapi | Y |
| Minbredd | 205 cm | enskild källa (V: ⚠️ "utfall + 0,5 m" [aluprof] mot "210–700 cm") | e-markizy.pl | Y |
| Maxutfall | 360 cm | verifierad (V: ⚠️ bara format) | e-markizy.pl, plikiapi | Y |
| Tillgängliga utfall | 160, 210, 260, 310, 360 cm | enskild källa (V ⚡ aluprof) | e-markizy.pl | Y |
| Utfall per bredd 205–254 cm | 160 cm | enskild källa | e-markizy.pl | Y |
| Utfall per bredd 255–304 cm | 160, 210 cm | enskild källa | e-markizy.pl | Y |
| Utfall per bredd 305–354 cm | 160, 210, 260 cm | enskild källa | e-markizy.pl | Y |
| Utfall per bredd 355–409 cm | 160, 210, 260, 310 cm | enskild källa | e-markizy.pl | Y |
| Utfall per bredd 410–700 cm | 160–360 cm | enskild källa | e-markizy.pl | Y |
| Lutningsvinkel | 5°–35° | enskild källa (V: ⚠️ bara format) | e-markizy.pl | Y |
| Navrör | 70 mm | enskild källa (V ⚡ aluprof) | e-markizy.pl | Y |
| Halvkassett i standard | Ja | enskild källa (V cassette ✅ "yes") | e-markizy.pl | Y |
| Antal armar | 2 eller 3 beroende på mått | verifierad | e-markizy.pl, plikiapi | Y |
| 3 armar vid utfall 160/210/260 | Från bredd 531 cm | enskild källa | e-markizy.pl | Y |
| 3 armar vid utfall 310 | Från bredd 591 cm | enskild källa | e-markizy.pl | Y |
| 3 armar vid utfall 360 | Från bredd 651 cm | enskild källa | e-markizy.pl | Y |
| Monteringsfästen | 2–5 beroende på bredd | enskild källa (V ✅: ≤3,5 m = 2; 3,5–4,7 = 3; 4,7–5,9 = 4; >5,9 = 5) | e-markizy.pl | Y |
| Breddtolerans | ±2 cm | enskild källa (V ⚡) | e-markizy.pl | Y |
| gtot | 0,01–0,90 | enskild källa | plikiapi.selt.com | Y |
| Vindklass, bredd ≤700, utfall ≤260, 2/3 armar | Klass 2 (84 Pa) | enskild källa | plikiapi.selt.com | Y |
| Vindklass, bredd ≤590, utfall 310/360, 2 armar | Klass 1 (48 Pa) | enskild källa | plikiapi.selt.com | Y |
| Vindklass, bredd 590–700, utfall 310, 3 armar | Klass 2 (84 Pa) | enskild källa | plikiapi.selt.com | Y |
| Vindklass, bredd 590–700, utfall 360, 2 armar | Klass 0 (<48 Pa) | enskild källa | plikiapi.selt.com | Y |
| Vindklass, bredd 650–700, utfall 360, 3 armar | Klass 1 (48 Pa) | enskild källa | plikiapi.selt.com | Y |
| Certifiering | CE, DoP nr 06/M/2018 | enskild källa | plikiapi.selt.com | Y |
| Certifiering | EN 13561:2015 | enskild källa | plikiapi.selt.com | Y |
| Material | Aluminiumarmar med fjädrar och Flyer-kedja | enskild källa | e-markizy.pl | Y |
| Material | Kassett på kvadratisk bärbalk | enskild källa | e-markizy.pl | Y |
| Material | Teflonbelagd akryl, över 100 färger | enskild källa (V ⚠️ ca 150 / 140 / över 100 / över 150) | e-markizy.pl | Y |
| Material | Ingen volang | enskild källa (V valance ✅ "No") | e-markizy.pl | Y |
| Material | Standardfärger: RAL 9010 MAT, RAL 1015 MAT, VSR 240 SATIN, RAL 8003 MAT, RAL 8014 MAT, RAL 9006 MAT, FSM 71319 MAT, RAL 7016 STR, RAL 9005 STR | enskild källa (V ⚠️ "white, beige, brown, silver, structural graphite") | e-markizy.pl | Y |
| Motor/styrning | Elmotor utan nödöppning (ingen manuell manövrering) | enskild källa (V manual_drive ✅ "No") | e-markizy.pl | Y |
| Motor/styrning | Elektroniska ändlägen rekommenderas | enskild källa | e-markizy.pl | Y |
| Motor/styrning | Knapp, styrcentral, fjärrkontroll, vindgivare | enskild källa | e-markizy.pl | Y |
| Motor/styrning | Komfortposition | enskild källa | e-markizy.pl | Y |
| USP | LED längs kassetten möjlig | enskild källa (V: LED_lighting_option ✅ "Yes", LED_lighting_standard_or_optional ✅ "standard") | e-markizy.pl | Y |
| USP | Vägg-, tak- och takåsmontage | enskild källa (V ✅) | e-markizy.pl | Y |
| USP | Isolerad vägg upp till 20 cm | enskild källa | e-markizy.pl | Y |
| Övrigt | SELT Sp. z o.o., Opole | enskild källa | plikiapi.selt.com | Y |
| Övrigt | Bedömningssystem System 4 | enskild källa | plikiapi.selt.com | Y |
| Övrigt | Motordriven vikarmsmarkis för utvändigt bruk på byggnader | enskild källa | plikiapi.selt.com | Y |
| Övrigt | gtot enligt EN 14501:2005, typ C-glas | enskild källa | plikiapi.selt.com | Y |
| Extra | Produktnamn Terrace Awning CORSICA; extruderat aluminium; ingen valfri huv | verifierad (✅) | aluprof, archiexpo, globalblinds | V |
| Extra | Eldrift: motor, fjärrmottagare, sol-vind-automatik / yes / Somfy RTS | osäker (⚠️) | aluprof.com | V |
| Extra | Väv: 100 % akryl med teflon / akryl med teflonimpregnering | osäker (⚠️) | shopsun.eu | V |
| Extra | Utvändig; CE; EN 13561:2015; 2006/42/EC; 230 V/50 Hz; 198–275 W; IP 44; tvätt max 30 °C; min montagehöjd 2200 mm; frontdeformation upp till 25 mm; fluororesinbeläggning | enskild källa | aluprof.com | V |
| Extra | Väggfäste 240 × 245 mm; takfäste 267 × 267 mm; takstolsfäste 366 × 451 mm | enskild källa | aluprof.com | V |
| Extra | 5 års garanti (återförsäljare) | enskild källa | globalblinds.com.au | V |
| Extra | Priser 3460,00 € / 1 280,00 € / från 1 516,50 € inkl. moms | enskild källa | shopsun.eu / markizes24.lv / brevo.lt | V |
| Extra | Leverans 20 dagar efter betalning; smart hem: ja; vindmotstånd 0–2 class | enskild källa | brevo.lt | V |
| Extra | Vikt kan överstiga 100 kg; 71 kg (2100–2900 × 1600) till 137,5 kg (6501–7000 × 3600) | osäker (bara research) | shopsun.eu / e-markizy.pl | R |
| Extra | Pris 3572,00 zł | osäker (bara skrap) | e-markizy.pl | S |

**Bilder:** ingen bild på sajten (`/images/markiser/selt-corsica.jpg` finns inte). Skrapade råbilder:
- `~/projects/product-scraper/output/selt-awnings-collection_2026-05-04T09-55-51-504Z/images/0f8b6809.png`, `22abb74f.png`
- `~/projects/product-scraper/output/markiza-corsica-selt_2026-05-04T10-16-41-736Z/images/8a739358.jpg`, `935da98f.jpg`, `d7a761f8.jpg`, `43d2cc32.jpg`, `7046c2b5.jpg`, `b9783ae4.jpg`, `8528f985.jpg`, `ea9fc208.jpg`, `e8ef2971.jpg`, `99a6401d.jpg`

**Saknar data helt:** nej.

**Att notera:**
- Verify har 0 poster från tillverkaren, eftersom aluprof.com inte godtogs som tillverkarkanal och plikiapi inte hämtades.
- Kassettypen är motstridig. Yaml säger halvkassett, den skrapade beskrivningen säger "w pełnej kasecie", och aluprof säger semi-kassett som fungerar som full kassett vid väggmontage.
- LED anges som tillval i yaml men som standard i verify.

### Harol Cadiz
**Filer:**
- `nextjs-v3/data/fakta/markiser/harol/cadiz.yaml` (identisk kopia i product-scraper)
- `~/projects/product-scraper/verify-output/harol-cadiz-folding-arm-awning.{json,md}` (2026-05-19, tillverkarkanal harol.com)
- `verify-output/test-b-harol-cadiz.{json,md}` (0 poster) och `test-b-harol-cadiz-v2.{json,md}`
- `nextjs-v3/data/research-output/harol-cadiz-awning.{json,md}` och `harol-cadiz-folding-arm-awning.{json,md}`
- `~/projects/product-scraper/output/harol-folding-arm-awnings_2026-05-04T10-52-50-333Z/`
- harol-sortiment.md, verifiering-fonstermiljo-harol.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Maxbredd | 7000 mm | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Max utfall | 4000 mm | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Box | 295 × 185 mm | verifierad (V 🏭) | harol.com, archiproducts.com | Y |
| Vario-valance max | 2000 mm | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Fast volang | 25 cm | enskild källa (V ✅) | carstads.se | Y |
| Kopplingsbar bredd | Upp till 12 m | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Lutning | 10°–40° | enskild källa (V ✅ carstads, enviroblinds; T2 ⚠️ alt. 5°–40° auquier-jette.be) | carstads.se | Y |
| Vindklass | Klass 2 (EN 13561) | enskild källa (V ✅) | carstads.se | Y |
| Boxtyp | Sluten box med rundade kanter | verifierad (V 🏭 / ✅) | harol.com, carstads.se | Y |
| Testad hållbarhet | 25 000 cykler (≈ 25 år, 2 gånger/dag) | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Montering | Vägg eller tak | verifierad (V ✅) | harol.com, carstads.se | Y |
| Modellår | 2021 | enskild källa (V ⚡) | archiproducts.com | Y |
| Garanti | 5 år | verifierad (V 🏭) | harol.com, carstads.se | Y |
| Utmärkelse | Red Dot Design Award | enskild källa (saknas i V) | harol.com | Y |
| Utmärkelse | iF Design Award | enskild källa (saknas i V) | harol.com | Y |
| Utmärkelse | German Design Award | enskild källa (saknas i V) | harol.com | Y |
| Utmärkelse | Archiproducts Design Awards | enskild källa (saknas i V) | harol.com | Y |
| Certifiering | EN 13561 (vindklass 2) | enskild källa (V ✅) | carstads.se | Y |
| Material | Två stålkablar (galvaniserat) i varje arm | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Material | Invisibly wired arms (standard) | verifierad (V 🏭) | harol.com, carstads.se, archiproducts.com | Y |
| Material | Glidteknik | enskild källa | carstads.se | Y |
| Material | Integrerat vattenavlopp i utfallsprofil | enskild källa (V ✅) | carstads.se | Y |
| Material | Standardduk: Dickson Orchestra eller Sattler Elements / alt. Sattler Urban Design | osäker (V ⚠️) | harol.com / carstads.se | Y |
| Material | Valfri duk: Dickson, Swela, Sattler | verifierad (V 🏭) | harol.com, carstads.se | Y |
| Material | Över 200 dukfärger och mönster | enskild källa (V 🏭) | harol.com | Y |
| Material | Alla RAL-färger (över 300) och strukturlacker utan pristillägg | verifierad (V ⚠️ formulering) | harol.com, carstads.se | Y |
| Material | Smutsavvisande dukbehandling | enskild källa | carstads.se | Y |
| Material | Konsolmontering med enkelpunktsspänning | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | Motor standard | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | io som standard, io-homecontrol | verifierad (V 🏭) | harol.com, carstads.se | Y |
| Motor/styrning | Sändare standard | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | RTS tillval | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | Kabelstyrning tillval | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | Manuell vev: ej tillgänglig | enskild källa (V ✅) | carstads.se | Y |
| Motor/styrning | Sol-, vind- och regnsensor tillval | verifierad (V ✅) | harol.com, carstads.se | Y |
| Motor/styrning | Vario-valance med io-motor tillval | enskild källa (V ✅) | carstads.se | Y |
| USP | 25 000 cykler ≈ 25 års daglig användning | verifierad | harol.com, carstads, archiproducts | Y |
| USP | Dolda kablar | verifierad | harol.com, carstads, archiproducts | Y |
| USP | Glidteknik skyddar duken | enskild källa | carstads.se | Y |
| USP | Sluten box skyddar mot smuts | verifierad | harol.com, carstads.se | Y |
| USP | Vario-valance upp till 2 m | verifierad | harol.com, carstads.se | Y |
| USP | Alla RAL utan pristillägg | verifierad | harol.com, carstads.se | Y |
| Övrigt | LED-tillval: indirekt i box och profil, direkt i box, i armar, i armar och box | verifierad (V ✅) | harol.com, carstads.se | Y |
| Övrigt | Dimbar LED | verifierad | harol.com, carstads, archiproducts | Y |
| Övrigt | Storelight LED-spotlights tillval | enskild källa (V ✅) | carstads.se | Y |
| Övrigt | Undervärme tillval | verifierad (V ✅) | harol.com, carstads.se | Y |
| Övrigt | Fast volang, 4 typer (tillval) | enskild källa (V ✅) | carstads.se | Y |
| Övrigt | Användning: restauranger, hotell, bostäder, trädgårdar, äldreboenden | enskild källa (V ✅) | carstads.se | Y |
| Övrigt | Somfy io-homecontrol-kompatibel | enskild källa (V ✅) | carstads.se | Y |
| Extra | Produktnamn Cadiz; Harol; vikarmsmarkis | verifierad (🏭) | harol.com + 6 domäner | V |
| Extra | Artikelnr 066067; Harol, Diest (BE); stilkategori Elegant | verifierad (✅) | carstads.se, enviroblinds.co.uk | V |
| Extra | Vindklass 7,5–10,4 m/s | enskild källa | zenronline.eu | V |
| Extra | Artikelnr 065869; min utfall 1,5 m; utfall 1500–4000 mm; max 6 m med 2 armar, 7 m med 3 armar; min bredd 2 armar: utfall + 610 mm; 3 armar: (utfall × 1,5) + 800 mm; min montagehöjd 2500 mm | enskild källa | auquier-jette.be | T2 |
| Extra | Rullrör Ø78 × 1 mm; motor Sunea IO; kabel 5 m; helt aluminium; gjutna aluminiumleder; konsolbredd 164 mm | enskild källa | auquier-jette.be | T2 |
| Extra | Dukvikt ± 290–300 g/m²; tjocklek ± 0,5 mm; våd 1200 mm; vikt ± 27,5 kg/m (± 30 kg/m med vario) | enskild källa | auquier-jette.be | T2 |
| Extra | LED 3000 K, 600 lm/m, 9,6 W/m, 24 V; vario max: Soltis96 2000 / akryl uni 1800 / fantasy stripe 1400 / Rhythm harmony 1000 mm | enskild källa | auquier-jette.be | T2 |
| Extra | Kopplingsbar "12 m i 2 delar med 4 armar" | osäker (T2 ⚠️) | auquier-jette.be | T2 |

**Bilder:**
- På sajten finns `astro/public/images/terrassmarkis/Harol-CADIZ-terrassmarkis.webp` (och samma fil i `nextjs-v3/public/images/terrassmarkis/`). Den används inte i astro/src. Sidan pekar på `/images/markiser/harol-cadiz.jpg`, som inte finns.
- Skrapade råbilder: `~/projects/product-scraper/output/harol-folding-arm-awnings_2026-05-04T10-52-50-333Z/images/a616e654.jpg`, `76263f72.jpg`, `d43d8ba4.jpg`, `899f7f7d.jpg` (harol.com).

**Saknar data helt:** nej.

**Att notera:**
- De två research-filerna stämmer överens om alla siffror. De skiljer sig i vilken källa som anges för boxmåttet och i att bara den ena nämner modellåret 2021.
- Standardduken är "Sattler Elements" enligt harol.com men "Sattler Urban Design" enligt carstads och enviroblinds.
- Utmärkelserna finns bara i yaml. harol-sortiment.md knyter Red Dot 2022 och Archiproducts 2022 till LUX, så det är **okänt** om de gäller Cadiz.

### Harol Tucan
**Filer:**
- `nextjs-v3/data/fakta/markiser/harol/tucan.yaml` (identisk kopia i product-scraper)
- `~/projects/product-scraper/verify-output/harol-tucan-folding-arm-awning.{json,md}` (2026-05-20, tillverkarkanal harol.com)
- `nextjs-v3/data/research-output/harol-tucan-folding-arm-awning.{json,md}`
- `~/projects/product-scraper/output/harol-folding-arm-awnings_2026-05-04T10-52-50-333Z/`
- harol-sortiment.md, verifiering-fonstermiljo-harol.md, bellevue-bekraftad-lista.md, INDEX.md

| Spec | Värde | Status | Källa (domän) | Fil |
|---|---|---|---|---|
| Maxbredd | 6 m / alt. 5,5 m | osäker (V ⚠️) | harol.com, archiproducts.com / albanblinds.com | Y |
| Max utfall | 3,5 m / alt. 3 m | osäker (V ⚠️) | harol.com, archiproducts.com / albanblinds.com | Y |
| Box | 200 × 130 mm | verifierad (V 🏭) | harol.com, archiproducts.com | Y |
| Valance | Upp till 25 cm | verifierad (V 🏭) | harol.com, archiproducts, albanblinds | Y |
| Lutning | 10°–90° | enskild källa (V ⚡) | albanblinds.com | Y |
| Boxtyp | Sluten eller halvöppen | verifierad (V 🏭) | harol.com, archiproducts, albanblinds | Y |
| Vindklass | Klass 2 (EN 13561) | enskild källa (V ⚡) | albanblinds.com | Y |
| Livslängd | 25 000 cykler | verifierad (V 🏭) | harol.com, albanblinds.com | Y |
| Montering | Vägg eller tak | verifierad (V 🏭) | harol.com, albanblinds.com | Y |
| Kopplingsbar | Nej (n/a) | enskild källa (V ⚡) | albanblinds.com | Y |
| Vario-valance med io-motor | Ej tillgänglig | enskild källa (V ⚡) | albanblinds.com | Y |
| Vattenavrinning i utfallsprofil | Standard | enskild källa (V ⚡) | albanblinds.com | Y |
| Garanti | 5 år | verifierad (V: ⚡ bara albanblinds, **avviker**) | harol.com, albanblinds.com | Y |
| Certifiering | EN 13561 | enskild källa | albanblinds.com | Y |
| Material | Lätt vikarmssystem i aluminium | enskild källa | archiproducts.com | Y |
| Material | Rostfritt stål i fästmaterial | enskild källa | archiproducts.com | Y |
| Material | Två galvaniserade stålkablar per arm | enskild källa (V 🏭) | harol.com | Y |
| Material | Rundad boxkant | verifierad (V 🏭) | harol.com, albanblinds.com | Y |
| Material | Vävt akryltyg, behandlat mot röta och mögel | verifierad (V: ⚡ bara albanblinds, **avviker**) | albanblinds.com, archiproducts.com | Y |
| Material | Standardväv Dickson Orchestra eller Sattler Elements / alt. Sattler Urban Design | osäker (V ⚠️) | harol.com / albanblinds.com | Y |
| Material | Tillval väv: Swela, Sattler, Dickson | verifierad (V ⚠️ ordning) | harol.com, albanblinds.com | Y |
| Material | Spinnfärgad fiber | enskild källa | archiproducts.com | Y |
| Material | Vatten-, smutsavvisande, UV-beständig | verifierad | archiproducts.com, harol.com | Y |
| Material | Konsolmontage med enkelpunktsspänning | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | Motor standard | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | io-homecontrol standard | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | Sändare standard | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | Manuell vev tillval | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | RTS tillval | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | Trådbunden styrning tillval | enskild källa (V ⚡) | albanblinds.com | Y |
| Motor/styrning | Sol-, vind- och regnsensor tillval | verifierad (V: ⚡, **avviker**) | albanblinds.com, harol.com | Y |
| USP | Passar lägenhetsterrasser (lätt duk, kompakt) | verifierad | albanblinds.com, harol.com | Y |
| USP | Osynlig kabeldragning i armarna | enskild källa (**motsägs** av V "n/a" och av en annan yaml-post) | harol.com | Y |
| USP | 25 000 cykler ≈ 25 år | enskild källa (V 🏭) | harol.com | Y |
| USP | Alla RAL utan pristillägg | verifierad (V ⚠️ formulering) | albanblinds.com, harol.com | Y |
| USP | "100% belgiskt måttbeställt" | enskild källa (V ⚡ "100% made-to-order"; land Belgien ✅). Ordet "belgiskt" finns inte i citatet. | archiproducts.com | Y |
| USP | Sluten box håller väven fräsch | enskild källa | harol.com | Y |
| USP | Väven lätt att byta | enskild källa | archiproducts.com | Y |
| Övrigt | Dimbar LED i armarna (tillval) | verifierad (V 🏭 "Various led lighting options") | albanblinds, archiproducts, harol.com | Y |
| Övrigt | LED i box (tillval) | enskild källa (**motsägs**: V "n/a" från samma källa) | albanblinds.com | Y |
| Övrigt | Undervärme Storelight (tillval) | verifierad (V 🏭) | albanblinds.com, harol.com | Y |
| Övrigt | Storelight LED-spotlights (tillval) | enskild källa (V ⚡) | albanblinds.com | Y |
| Övrigt | Fast volang, 4 typer (tillval) | enskild källa (V ⚡) | albanblinds.com | Y |
| Övrigt | Modellår 2020 | enskild källa (V ⚡) | archiproducts.com | Y |
| Övrigt | Användning: restauranger, hotell, bostäder, trädgårdar, äldreboenden | enskild källa (V ⚡) | albanblinds.com | Y |
| Övrigt | Ljuddämpande väv | enskild källa | archiproducts.com | Y |
| Övrigt | Över 200 färger och mönster | enskild källa | harol.com | Y |
| Övrigt | Över 300 RAL-färger | enskild källa (V ⚠️) | harol.com | Y |
| Övrigt | Osynligt kablade armar: n/a | enskild källa (V ⚡) | albanblinds.com | Y |
| Extra | Produktnamn Harol Tucan; vikarmsmarkis | verifierad (🏭) | harol.com, archiproducts, albanblinds | V |
| Extra | Tillverkningsland Belgien; stilkategori Elegant | verifierad (✅) | archiproducts/allumondo, albanblinds/allumondo | V |
| Extra | Vario-valance max höjd: n/a | enskild källa | albanblinds.com | V |
| Extra | Monteringstyper 1–4 (vägg 5°–38° / 38°–90°, tak 14°–52° / 52°–90°) | osäker (bara research) | manualslib.com | R |
| Extra | Motor Somfy OREA 50 WT 25/17 eller 40/17; Orea 25/17 LT50 RTS | osäker (bara research) | manualslib.com | R |
| Extra | Ankare min Ø 12 mm, kemisk förankring | osäker (bara research) | manualslib.com | R |

**Bilder:**
- På sajten finns `astro/public/images/terrassmarkis/Harol-TUCAN-terrassmarkis.webp` (och samma fil i nextjs-v3/public). Den används inte i astro/src. Sidan pekar på `/images/markiser/harol-tucan.jpg`, som inte finns.
- Skrapade råbilder: `~/projects/product-scraper/output/harol-folding-arm-awnings_2026-05-04T10-52-50-333Z/images/20e0b503.jpg`, `b629995f.jpg`.

**Saknar data helt:** nej.

**Att notera:**
- Yaml motsäger sig själv om dolda kablar och om LED i boxen.
- Maxbredd och maxutfall är omstridda: harol.com och archiproducts anger 6 m / 3,5 m, albanblinds anger 5,5 m / 3 m.

### Selt Madeira
- **Saknar data helt: ja.**
- Inga filer och inga träffar på "madeira" i fakta-yaml, INDEX.md, research-output, product-scraper/output, verify-output, bellevue-bekraftad-lista.md eller astro/src.
- Den enda förekomsten är `nextjs-v3/docs/status-2026-11-02.md` (rad 73–74 och 272), som konstaterar att modellen inte finns.
- Madeira finns inte bland de 12 bekräftade Selt-modellerna i bellevue-bekraftad-lista.md. Det är **okänt** om modellen finns i Selts sortiment.
- Inga bilder.

### Sammanfattning punkt 3

Antalen gäller yaml-posterna. Extra-raderna från verify och research ingår inte.

| Modell | Specar i yaml | Verifierad | Enskild källa | Osäker | Bild på sajten | Skrapade bilder | Data saknas helt |
|---|---|---|---|---|---|---|---|
| Selt Palladio | 54 | 10 | 43 | 1 | nej | ja | nej |
| Selt Jamaica | 26 | 0 | 26 | 0 | nej | ja | nej |
| Selt Dakar | 26 | 0 | 26 | 0 | nej | ja | nej |
| Selt Corsica | 43 | 3 | 40 | 0 | nej | ja | nej |
| Harol Cadiz | 49 | 23 | 25 | 1 | ja (webp, används inte) | ja | nej |
| Harol Tucan | 49 | 15 | 31 | 3 | ja (webp, används inte) | ja | nej |
| Selt Madeira | 0 | 0 | 0 | 0 | nej | nej | ja |

Fördelningen i verify-output (🏭 / ✅ / ⚠️ / ⚡):

| Modell | 🏭 | ✅ | ⚠️ | ⚡ |
|---|---|---|---|---|
| Palladio | 38 | 1 | 5 | 3 |
| Corsica | 0 | 13 | 8 | 37 |
| Cadiz | 17 | 32 | 2 | 2 |
| Tucan | 11 | 2 | 5 | 26 |
| Jamaica (gammalt schema) | 15 verified | – | 8 | 29 |
| Dakar (gammalt schema) | 16 verified | – | 8 | 26 |

---

## 4. Modeller som ska bort

Det här är alla markismodeller på de fyra sidorna som inte står i listan i punkt 3 (Palladio, Jamaica, Dakar, Corsica, Cadiz, Tucan, Madeira). Ingen av sidorna har någon tabell, så tabeller förekommer inte.

Listan i punkt 3 innehåller **ingen fönstermarkis och ingen korgmarkis**. Därför hamnar alla sju modeller på fonstermarkiser-malmo och Ängsö här.

### markiser-malmo
Alla förekomster finns i typkorten under H2 "Vad är skillnaden — och vilken behöver du?". Det finns inga i FAQ, löptext utanför korten eller JSON-LD.

| Modell | Var |
|---|---|
| Harol BX260 | kort "Terrassmarkis — soltak över altan eller uteplats." (stycket "Passar dig om") |
| Fönstermiljö Tidö Duo | samma kort och stycke |
| Selt Italia | kort "Fönstermarkis — stoppar värmen vid själva glaset." (stycket "Passar dig om") |
| Fönstermiljö Sofiero | samma kort och stycke |
| Fönstermiljö Ängsö | kort "Korgmarkis — kupé över entré eller skyltfönster." (stycket "Passar dig om") |

### terrassmarkiser-malmo

| Modell | Kort | Löptext | FAQ | JSON-LD |
|---|---|---|---|---|
| Harol LUX | eget kort; nämns i korten BX260 och PRAIA | Harol-intro (H2 "Harol — belgisk precision för uteplatsen.") | 2 svar under "Frågor inför mätningen.": breddsvaret ("Spannet är stort. Harol-modellerna CADIZ, LUX och PRAIA …") och kopplingssvaret ("I bredd kan flera Harol-modeller — CADIZ, LUX, PRAIA, BX260, BX270 …") | 2 (samma FAQ-svar i FAQPage) |
| Harol BX260 | eget kort; nämns 5 gånger i BX270-kortet | – | kopplingssvaret | 1 |
| Harol BX270 | eget kort | – | kopplingssvaret | 1 |
| Harol PRAIA | eget kort | – | bredd- och kopplingssvaret | 2 |
| Selt CASABLANCA | eget kort; nämns i DAKAR-kortet | – | – | – |
| Selt AUSTRALIA | eget kort; nämns 3 gånger i JAMAICA-kortet | – | – | – |
| Fönstermiljö Tidö Duo | eget kort | H2 "Hur vi väljer rätt modell med er." ("Fristående Tidö Duo när altanen saknar lämplig fasad.") | – | – |
| Fönstermiljö FA 44 Design | eget kort | – | – | – |
| Fönstermiljö Classic Nova | eget kort | – | – | – |
| Fönstermiljö FA 42 | eget kort; nämns i FA 44 Design-kortet | – | – | – |
| Fönstermiljö Classic | eget kort | – | – | – |
| Fönstermiljö Ängsö (korgmarkis) | – | egen sektion, H2 "För entréer och skyltfönster — korgmarkis Ängsö." (3 förekomster) | – | – |

Varje eget kort har också modellnamnet i bildens alt-text. Bilden är en tom platshållare, eftersom `plannedImage` inte renderas.

Hela sektionen H2 "Fönstermiljö — svensk hantverk från Laholm." innehåller bara modeller som ska bort. Sidans meta-titel och meta-beskrivning nämner inga modeller.

Båda FAQ-svaren som nämner LUX, PRAIA, BX260 och BX270 nämner också CADIZ, som är kvar i punkt 3. De kan alltså inte tas bort helt, de måste skrivas om.

### fonstermarkiser-malmo
Alla sju modellerna på sidan är fönstermarkiser och finns inte i punkt 3.

| Modell | Kort/lista | Löptext | FAQ | JSON-LD |
|---|---|---|---|---|
| Selt Italia Box | eget kort (H2 "Modellerna vi tar mått för."); nämns i Sofiero-kortet | hero-ingressen; H2 "Vad som styr kostnaden per fönster." | "Klarar fönstermarkisen att sitta uppe i Malmö-vintern?" | 1 (samma svar) |
| Selt Italia | eget kort | hero-ingressen; kostnadssektionen | – | – |
| Fönstermiljö Sofiero | eget kort | hero-ingressen; kostnadssektionen | vintersvaret | 1 |
| Fönstermiljö Solliden | eget kort | hero-ingressen; H2 "När fönstermarkis är rätt val."; kostnadssektionen | "Kan fönstermarkis monteras över franska balkonger eller balkongdörrar?" | 1 |
| Selt Italia Balcony | lista (H2 "Övriga fönstermarkiser i sortimentet.") | hero-ingressen; H2 "När fönstermarkis är rätt val." | balkongsvaret | 1 |
| Fönstermiljö Haga | lista | hero-ingressen; kostnadssektionen | – | – |
| Fönstermiljö Läckö | lista | hero-ingressen; kostnadssektionen | – | – |

Korten för Italia Box, Italia, Sofiero och Solliden har också modellnamnet i bildens alt-text (platshållarbild).

### markiser-skanor-falsterbo
Inga modeller nämns.

### Modeller i faktadatan som inte står på sidorna
Selt GIANT, Selt MALTA och Fönstermiljö Ängsö finns i `nextjs-v3/data/fakta/markiser/INDEX.md`. GIANT och MALTA nämns inte på någon av de fyra sidorna.

---

## Övriga iakttagelser
- **Bilder:**
  - Alla modellkort på terrassmarkiser-malmo och fonstermarkiser-malmo har en `plannedImage` under `/images/markiser/`. Mappen finns inte och fältet renderas inte, så korten visar tomma platshållare.
  - `astro/public/images/terrassmarkis/` innehåller webp-bilder för Harol BX270, CADIZ, LUX, PRAIA och TUCAN, men ingen fil i astro/src använder dem.
- **Garanti:** se punkt 2. H2 "Tre års garanti …" och I korthet "3 års garanti" står mot "Selts markiser har 7 års garanti och motorn 5 år".
- **Länkar:** ingen av de fyra sidorna länkar till /markiser-skanor-falsterbo/.
