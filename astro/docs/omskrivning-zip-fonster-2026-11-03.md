# Omskrivning av zip-screen-malmo och fonstermarkiser-malmo, 2026-11-03

Faktakälla: `docs/produktdata-2026-11-02.md`. Radnumren i tabellerna nedan (Lxx) avser den filen. Upplägget följer markiser-malmo: hero, AnswerBox med datumrad, en I korthet-lista utan synlig etikett, modellkort, jämförelsetabell, CrossLinkCards, ProcessSteps, CostFactors, GuaranteeTiles, FAQ och CTA.

## Verifiering

| Kontroll | Resultat |
|---|---|
| `npm run build` | 0 fel, 29 sidor |
| `node scripts/interactions.mjs` | 28 PASS, 0 FAIL |
| Title | zip 38 tecken, fönster 43 tecken |
| Meta description | zip 155 tecken, fönster 140 tecken |
| AnswerBox | zip 57 ord, fönster 57 ord |
| Antal FAQ-frågor | 8 på varje sida. Schemat kräver 6–8. |
| Förbjudna ord i `<main>`<br>(40 år, Testfakta, Bäst i Test, patent, egen produktion, Gasell, 500 000, vindklass 6, Coolscreen 7, kr/kronor/SEK, ni/er, villa, radhus, lägenhet, flerfamiljshus, bostadsrätt) | 0 träffar. Den enda "kr"-träffen var ordet "kräver". |
| Meningar ordagrant lika markiser-malmo | 0 |
| Synliga tankstreck | 0. Listmarkörerna är `aria-hidden`. |
| Garantirutorna | Oförändrade |
| Skärmdumpar | `docs/omskrivning/zip-screen-malmo__desktop-1440.png`<br>`docs/omskrivning/zip-screen-malmo__mobil-390.png`<br>`docs/omskrivning/fonstermarkiser-malmo__desktop-1440.png`<br>`docs/omskrivning/fonstermarkiser-malmo__mobil-390.png` |

## Kodändringar

- **`src/content/schemas/sections.ts`:** tre nya scheman.
  - `comparisonSchema`: varje rad måste ha en cell per kolumn.
  - `shortModelCardSchema`: 2–3 faktarader per kort.
  - `modelGroupSchema`: en grupp modellkort under en H2.
- **`src/content/schemas/zipScreen.ts` och `fonstermarkiser.ts`:** omskrivna till den nya sektionsordningen. FAQ:n kräver 6–8 frågor.
- **`src/templates/ZipScreen.astro` och `Fonstermarkiser.astro`:** omskrivna. Herobilden, kontextbilden och garantibakgrunden på zip-sidan ligger kvar.
- **Nya komponenter:**
  - `sections/ComparisonTable.astro`: tabellen från markissidan, flyttad till en egen komponent. Markiser.astro använder den nu, med samma markup som tidigare.
  - `sections/TldrPlain.astro`: I korthet-listan med bara `aria-label`, utan synligt ögonbryn.
- **`markiser/ModelCard.astro`:** när `image` är null visas ett kort med bara text i stället för en platshållarbild. Det gäller Italia, Italia Balcony, Haga och Läckö, som saknar bild.
- **`utvandigt/ZipModelCard.astro`:** `passarDigOm` är nu valfritt.

---

## zip-screen-malmo

- **H1:** Zip screen i Malmö
- **Title:** Zip screen i Malmö | Bellevue Solskydd
- **Meta description:** Zip screen i Malmö från Harol och Selt: Coolscreen upp till 6 × 6 m och R 120 ZiiiP upp till 7 m bred. Vi mäter glaspartiet vid ett kostnadsfritt hembesök.
- **Breadcrumb:** Hem › Zip screen
- **Datumrad:** "Senast uppdaterad 2026-11-03" (`updated` 2026-11-03)

**H2:**
1. Harol Coolscreen 8 och 10, upp till 6 × 6 meter
2. Selt R 120 ZiiiP och R 95 ZiiiP, båda med motor
3. Coolscreen och ZiiiP jämförda: mått, kassett och vindklass
4. När terrassmarkis, fönstermarkis eller pergola passar bättre än zip screen
5. Fyra steg från mätt glasparti till monterad zip screen
6. Fem saker som styr priset på en zip screen
7. 5 års garanti på Coolscreen och 3 år på ZiiiP
8. Frågor om zip screen från Harol och Selt
9. CTA: Vi mäter ditt glasparti / och visar vävproverna på plats.

**AnswerBox, ordagrant:**
> En zip screen är en utvändig screen där väven löper i sidoskenor längs glasets båda sidor. Bellevue Solskydd monterar Coolscreen 8 och Coolscreen 10 från Harol och R 120 ZiiiP och R 95 ZiiiP från Selt i Malmö och södra Skåne. Vilken modell, väv och styrning ditt glasparti behöver avgör vi vid hembesöket, när vi har mätt.

**Faktapåståenden och källrader**

| Påstående på sidan | Källa |
|---|---|
| Coolscreen 8 och 10 är Harols zip screens | L149 |
| Coolscreen 8 och 10 går upp till 6 × 6 m, Coolscreen 8 upp till 24 m² | L153, L157 |
| Coolscreen 8 Plus har osynlig bottenskena, LED har LED i kassetten och Solar har solcellsdrift | L154–156 |
| Solar: 5,6 × 3 m, 12 m², batteri 2,2 Ah som laddas på 3 h | L156 |
| Coolscreen 10 byggs in i fasaden vid nybygge | L157 |
| Kassettmått per variant, fyrkantig eller rund kassett på 8 | L153–157 |
| Vindklass 3 på alla Coolscreen-varianter | L153–157 |
| io som standard, kompatibel med TaHoma, sol- och vindsensor som tillval | L160 |
| Väv i polyester eller glasfiber, ljusgenomsläpplig eller helt mörkläggande | L161 |
| Mer än 300 RAL-färger | L162 |
| Testad för 15 000 cykler | L163 |
| 80–100 km/h enligt Harol, beroende på modell och storlek | L164 |
| Red Dot 2023 för hela Coolscreen-kollektionen | L167 |
| German Design Award 2025 för Coolscreen 8 LED | L168 |
| R 120 ZiiiP: fyrkantig kassett 126 × 126 mm, Large upp till 7 m bred, DZ inbyggd, endast motor | L178 |
| R 120 ZiiiP: höjd "upp till 4 m beroende på bredd" | L178, L345 |
| R 120 ZiiiP: vävarna Serge 1 %, Serge 600 och Soltis VEOZIP | L178 |
| R 120 ZiiiP: ingen vindklass angiven ("ej angivet") | L178, L344 |
| R 95 ZiiiP: rektangulär kassett, 2,7 × 3,0 m, endast motor, samma väv som R 120 | L179 |
| R 95 ZiiiP: vindklass "ej angivet", kassettmått "ej angivet" | L179 (vind ej hittad, inga kassettmått) |
| Selt ingår numera i Aluprof, och modellerna finns på aluprof.com | L35 |
| 5 år på Coolscreen från Harol | L51 |
| 3 år på ZiiiP från Selt | Inte i produktdata. Kommer från garantirättningen 2026-11-03 (Bellevues 3 år tills vidare). |
| Pergola med screens som tillval | L121 (Nomo: "LED, värme, skjutväggar, screens") |
| Hembesök, mätning, kabeldragning, montage med egna montörer, ROT bara på arbetskostnaden | Bellevues arbetssätt, inte produktdata. Samma sakuppgifter som på markiser-malmo. |

**Struket från den gamla sidan**

- **Sektionen "När en zip-screen är rätt val — och när det är något annat":**
  - jämförelsen med persienn och plissé om värme
  - påståendet om utformning enligt EN 13561
  - "vi rekommenderar alltid vindsensor"

  Sektionen är ersatt av CrossLinkCards.
- **Harol-ingressen:** "belgisk precision", "designfokuserad produktlinje" och att Bellevue installerar den linstyrda Coolscreen 7.
- **Coolscreen-kortet:**
  - "Över 300 RAL-kulörer utan pristillägg". "Utan pristillägg" finns inte i källan.
  - texten om Coolscreen 7
  - passar-dig-om-raden och begränsningsrutan
- **Selt-ingressen:**
  - "polsk zip-screen-specialist"
  - "tvådelade sidoskenor och kompenserande tätningar som ger mörkläggande effekt"
  - "kassetten resonerar inte i regn"
- **R 120-kortet:**
  - "självbärande", "extruderad aluminium", "motorn sitter i kassetten"
  - "fungerar som insektsnät", "revision från framsidan", utförandet "Standard"
  - "RAL-kulörer utan pristillägg"
  - passar-dig-om-raden
- **R 95-kortet:**
  - "maxyta 8,1 m²" (uträknat, inte angivet)
  - "provad enligt EN 13561", "maskindirektiv 2006/42/EC", "valfri RAL-kulör"
  - begränsningsrutan
- **Kostnadsfaktorn** "Kompakta R 95 ZiiiP ligger lägre än …". En prisjämförelse utan källa.
- **Gamla FAQ-frågor:**
  - "Vad är vindklass", med skalan 0–6
  - "Hur skiljer sig zip-mekaniken", med påståendet om insektsnät
  - "Hur mycket utsikt har vi inifrån"
  - "Behövs el dragen" (230V)
  - "Krävs styrelsegodkännande – och bygglov", med påståendet om bygglov i Malmö
  - "Kan zip-screen kombineras med pergola eller terrassmarkis"
- **I korthet:** raden om fasadens jämnhet och exponering.
- **Hero:** texten om blixtlåset "även i hård vind".
- **Breadcrumb:** heter nu "Zip screen" i stället för "Zip-screen".
- **Service-schemat:** heter nu "Zip screen Malmö". `dateModified` är 2026-11-03.

---

## fonstermarkiser-malmo

- **H1:** Fönstermarkiser i Malmö
- **Title:** Fönstermarkiser i Malmö | Bellevue Solskydd
- **Meta description:** Fönstermarkiser i Malmö från Selt och Fönstermiljö i Laholm, upp till 8,5 meter breda. Vi mäter dina fönster vid ett kostnadsfritt hembesök.
- **Breadcrumb:** Hem › Fönstermarkiser
- **Datumrad:** "Senast uppdaterad 2026-11-03" (`updated` 2026-11-03)

**H2:**
1. Selt Italia i tre utföranden, upp till 5,0 meter breda
2. Fönstermiljö från Laholm: Sofiero, Solliden, Haga och Läckö
3. Sju fönstermarkiser jämförda: bredd, utfall och styrning
4. När terrassmarkis, zip screen eller invändigt solskydd passar bättre än fönstermarkis
5. Från mätta fönster till monterade fönstermarkiser
6. Antal fönster, kassett och styrning avgör priset på fönstermarkiser
7. 7 år på Italia från Selt, 3 år på Fönstermiljö
8. Frågor om fönstermarkiser från Selt och Fönstermiljö
9. CTA: Vi mäter dina fönster / och visar modellerna på plats.

**AnswerBox, ordagrant:**
> En fönstermarkis är en markis som sitter ovanför ett fönster och fälls ut på fallarmar så att glaset skuggas utifrån. Bellevue Solskydd monterar Italia, Italia Box och Italia Balcony från Selt och Sofiero, Solliden, Haga och Läckö från Fönstermiljö, som tillverkar i Laholm. Vilken modell som passar dina fönster avgör vi vid hembesöket, när vi har mätt.

**Faktapåståenden och källrader**

| Påstående på sidan | Källa |
|---|---|
| Italia: fallarmsmarkis utan kassett, bredd 5,0 m, utfall 1,8 m | L196 |
| Italia: armlängderna 1,0, 1,4 och 1,8 m, vev eller motor, lutning 90° eller 160° på beställning | L196 |
| Italia Box: kassett, 5,0 m, utfall 1,4 m, vev eller motor, lutning 90° eller 140° på beställning | L197 |
| Italia Balcony: monteras på balkongräcket, ingen kassett, 5,0 m, fast utfall 0,7 m, vindklass 1, endast vev | L198 |
| Fönstermiljö tillverkar i Laholm | L39 |
| Sofiero: kassett, 6,0 m eller 7,0 m med vävskarv, seriekoppling upp till 18 m | L212 |
| Sofiero: utfall 1,3 m (det valda värdet) | L212, L342 |
| Sofiero: snäckväxel och vev som standard, motor från Somfy som tillval | L212 |
| Solliden: utan kassett, fungerar även på balkong | L213 |
| Solliden: 3,75 m med band eller vev, 4,2 m med motor | L213 |
| Solliden: utfall 1,2 m med band, 0,9 m med motor | L213, L343 |
| Solliden: band som standard, motor och vev som tillval | L213 |
| Haga: kassett, 3,75 m med band, 4,2 m med motor, utfall 1,2 m med band och 0,9 m med motor, band som standard och motor som tillval | L214 |
| Läckö: för fönster bredare än 3,5 m, kassett eller tak som tillval, 8,5 m, utfall 1,6 m, vev som standard och motor som tillval | L215 |
| Väv i 100 % spinnfärgad akryl från Sattler, Sandatex och Dickson Constant | L218 |
| Ramfärger: vit, svart, natur/vit, natur/grå och valfri RAL | L219 |
| Motorer från Somfy och Becker | L220 |
| Vindklass "ej angivet" för Fönstermiljö | L221 (ska kontrolleras innan den publiceras) |
| Vindklass "ej angivet" för Italia och Italia Box | L196–197 (ej hittad) |
| 7 år på Italia från Selt, 5 år på motorn | L50 (Selts markiser) |
| 3 år på Fönstermiljö | L52 |
| BRF-underlag, hembesök, mätning per fönster, montage med egna montörer, ROT bara på arbetskostnaden | Bellevues arbetssätt, inte produktdata |

**Struket från den gamla sidan**

- **Sektionen "När fönstermarkis är rätt val.":**
  - söder- och västerfönster
  - "flerfamiljshus och bostadsrätter"
  - balkonger där föreningen förbjuder fasadinfästning

  Sektionen kopplade produkter till byggnadstyper.
- **Sektionen "Övriga fönstermarkiser i sortimentet."** Italia Balcony, Haga och Läckö har nu egna kort med siffror.
- **Sektionen "Fönstermarkis eller terrassmarkis?"** Den är ersatt av CrossLinkCards.
- **Italia Box-kortet:**
  - "Ca 150 vävmönster"
  - "Polsk Aluprof-tillverkning"
  - "väsentligt vid söderfasad … slagregn"
- **Italia-kortet:**
  - "vanligaste utförandet på äldre svenska fasader"
  - "något ekonomiskt än kassettversionen"
  - "Volang och kulör väljs vid hembesöket"
- **Sofiero-kortet:**
  - "samma logik som Italia Box men i svensk leveranskedja"
  - stativen i naturanodiserad eller pulverlackerad aluminium
- **Solliden-kortet:**
  - "Vanlig på flerfamiljshus där föreningen valt en gemensam fasadlinje"
  - "Seriekoppling möjlig". Det står bara för Sofiero i produktdata.
- **Processen:** "typiskt en halvdag per fönsterparti", "fotograferar fasaden" och "eventuell isolering eller fuktspärr".
- **Kostnaden:**
  - "Kassettmodell … högre i grundpris"
  - "Sensorpaket – sol, vind, regn". Sensorer för fönstermarkiser finns inte i produktdata.
- **Gamla FAQ-frågor:**
  - värme jämfört med invändigt solskydd
  - samma färg som grannarna i en BRF
  - komplement till persienn
  - motor vid många markiser i samma fastighet
  - franska balkonger
  - Malmö-vintern
  - hur diskret markisen är
  - vilka områden vi arbetar i
- **I korthet:**
  - "Kassettmodell vid året-runt-bruk; öppen fallarm i klassiska fasader och vid lägre budget"
  - raden om BRF-underlag
- **Synligt ögonbryn** "I korthet". Etiketten finns nu bara som `aria-label`.
- **Service-schemat:** `dateModified` är 2026-11-03.

## Att ta ställning till

1. **Garantin på ZiiiP (3 år)** finns inte i produktdata. Den kommer från instruktionen i garantirättningen.
2. **Garantin på Italia (7 år) och motorn (5 år):** det är fortfarande oklart om villkoret om årlig service gäller (L50).
3. **Selt Bora** (sidomarkis, L199) står under "Fönster- och balkongmarkiser" i produktdata men nämndes inte i uppdraget. Den är inte med på sidan.
4. **Bilder saknas** för Italia, Italia Balcony, Haga och Läckö. Deras kort har bara text, utan platshållarbild. Fönstermarkissidans hero är fortfarande en platshållare, som tidigare.
5. **ROT-avdraget** nämns nu på båda sidorna, avgränsat till arbetskostnaden. Ingen av de gamla sidorna nämnde ROT.
