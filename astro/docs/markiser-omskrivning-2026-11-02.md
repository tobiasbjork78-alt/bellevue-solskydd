# /markiser-malmo/ omskriven, /terrassmarkiser-malmo/ borttagen, 2026-11-02

Arbetet är gjort i astro/ och inga git-kommandon har körts. Skillen writer-voice användes för den nya texten. Modulerna som lästes var voice-axioms, structural-patterns, anti-slop, swedish-language, claims-rules, faq och landing-page.

## Verifiering

| Kontroll | Resultat | Bevis |
|---|---|---|
| `npm run build` | 29 sidor, 0 fel (tidigare 30; terrassmarkiser-malmo är borta) | rc=0, inga error- eller warning-rader |
| interactions.mjs | 22/22 PASS mot dist | rc=0. Ett test är ändrat, se Avvikelser. |
| Exakt en H1 | 1 | heading-trädet nedan |
| "terrassmarkiser-malmo" i astro/src, public och dist | träff bara i `public/_redirects` och `dist/_redirects` | grep -rl |
| LUX, BX260, BX270, PRAIA, Casablanca, Australia, Tidö Duo, FA 44, Classic Nova, FA 42, Ängsö på markiser-malmo | 0 träffar i både `dist/markiser-malmo/index.html` och `src/content/pages/markiser-malmo.md` | grep -oi per namn |
| Italia, Sofiero, Solliden, Haga, Läckö, Fönstermiljö, Madeira, Giant, Malta på markiser-malmo | 0 träffar | grep -oi |
| Sitemap | /terrassmarkiser-malmo/ saknas, /markiser-malmo/ finns | `dist/sitemap-0.xml` |
| Meny och sidfot | länken "Terrassmarkiser" är borttagen (0 träffar på `>Terrassmarkiser<` i dist) | `src/lib/nav.ts` |
| title | 54 tecken: "Markiser Malmö – Selt och Harol, 7 års garanti på Selt" | dist |
| description | 150 tecken, innehåller "7 års garanti på Selt" | dist |
| AnswerBox | 64 ord | räknat i dist |
| FAQ-svar | 43–60 ord vardera, 8 frågor | räknat i dist |
| FAQPage i JSON-LD | frågor och svar är ordagrant lika den synliga FAQ:n | jämfört i dist |
| Service | areaServed `{"@type":"City","name":"Malmö"}`, dateModified 2026-11-02 | JSON-LD |
| WebPage | speakable `.speakable-tldr`, `.speakable-faq-1` (1 element vardera på sidan), dateModified 2026-11-02 | JSON-LD och DOM |
| BreadcrumbList | Hem › Markiser Malmö | JSON-LD |
| `updated` i frontmatter | 2026-11-02 | md |
| "i Malmö och södra Skåne" | 1 förekomst (AnswerBox), 0 i meta | dist |
| Tankstreck (—) i sidans text | 0 i md. Listmarkörerna är dekorativa `aria-hidden`-spann från komponenterna. | grep |
| Tabell | äkta `<table>` på desktop (display: table vid 1440 px), staplade kort på mobil (display: none vid 390 px) | Playwright |
| Priser | 0 träffar på kr, kronor och SEK | regex |
| Skärmdumpar | `docs/markiser-malmo__desktop-1440.png` och `docs/markiser-malmo__mobil-390.png` (helsida, efter att kortbilderna laddats) | jag har granskat dem visuellt |

## Heading-träd

```
H1 Markiser i Malmö, måttagna och monterade på din fasad
  H2 Selt Palladio – markisen vi monterar oftast
    H3 Palladio
  H2 Selt Jamaica, Harol Cadiz och Harol Tucan
    H3 Jamaica
    H3 Cadiz
    H3 Tucan
  H2 Palladio, Jamaica, Cadiz och Tucan sida vid sida
  H2 När fönstermarkis, zip screen eller pergola passar bättre
  H2 Från hembesök till färdig markis på fasaden
  H2 Det här avgör vad din markis kostar
  H2 Garanti på Selt och Harol, service från egna montörer
  H2 Frågor om terrassmarkiser från Selt och Harol
    H3 Vad är en terrassmarkis?
    H3 Vilken markis monterar ni oftast?
    H3 Hur bred kan en markis från Selt eller Harol bli?
    H3 Kan markisen styras med motor och sensorer?
    H3 Hur lång garanti har markiserna från Selt och Harol?
    H3 Vad mäter ni vid hembesöket inför en markis?
    H3 Kan man få belysning och värme i markisen?
    H3 Vad kostar en terrassmarkis från Selt eller Harol?
  H2 Vi mäter din uteplats och föreslår en markis.
```

Alla nio H2 förekommer bara en gång på sajten (kontrollerat mot alla H2 i dist, normaliserat).

## Sektionerna: rubrik och vinkel

1. **Hero, H1 "Markiser i Malmö, måttagna och monterade på din fasad".** Ingressen säger på två meningar att vi monterar Selt och Harol, att nio av tio blir en Palladio och att vi tar reda på modell och mått vid hembesöket. Knappen heter "Boka platsbesök". Bilden är en platshållare med `plannedImage: /images/markiser/hero.webp`.
2. **AnswerBox.** Den kan stå på egen hand: Bellevue Solskydd, markiser i Malmö och södra Skåne, nio av tio är Palladio, garantin per tillverkare, egna montörer och hembesök. Raden "Senast uppdaterad 2 november 2026" står direkt under rutan.
3. **I korthet.** Fyra rader med tankstreck: vad en terrassmarkis är, Palladio-andelen, garantin och hembesöket. Etiketten finns bara som `aria-label`, inte som synligt ögonbryn.
4. **"Selt Palladio – markisen vi monterar oftast".** Palladio presenteras med verifierade mått (7,0 m bred, 3,6 m utfall) och andelen nio av tio, plus ett modellkort med spec-lista. Inga skäl till varför Palladio väljs anges.
5. **"Selt Jamaica, Harol Cadiz och Harol Tucan".** De tre alternativen har var sitt kort, och Dakar och Corsica nämns i en mening utan kort. Cadiz och Tucan har de befintliga bilderna, Jamaica har en platshållare.
6. **"Palladio, Jamaica, Cadiz och Tucan sida vid sida".** Jämförelsetabellen har kolumnerna Modell, Tillverkare, Typ, Max bredd, Max utfall och Garanti. Celler utan godkänd data har "–" och den fotnot som var angiven.
7. **"När fönstermarkis, zip screen eller pergola passar bättre".** Två stycken utan kortnät, med länkar till /fonstermarkiser-malmo/, /zip-screen-malmo/ och /pergola-malmo/.
8. **"Från hembesök till färdig markis på fasaden".** Arbetsgången i ordning: hembesök med mätning, fasad och infästning, el och motor, egna montörer och funktionstest tillsammans med kunden.
9. **"Det här avgör vad din markis kostar".** Kostnadsfaktorerna i den angivna ordningen: bredd, utfall, motor eller vev, väv, tillval (vindautomatik, belysning, värme) och fasad. ROT-avdraget gäller arbetskostnaden. Inga siffror.
10. **"Garanti på Selt och Harol, service från egna montörer".** Garantin står per tillverkare och modell, och service och reservdelar går genom Bellevue.
11. **"Frågor om terrassmarkiser från Selt och Harol".** Åtta frågor. Den första är en definitionsfråga och den sista gäller kostnad utan siffror.
12. **Mörk CTA, "Vi mäter din uteplats och föreslår en markis."** Hembesöket och offerten är kostnadsfria och mätningen sker på plats. Knappen heter "Boka platsbesök".

Varje H2-sektion börjar med en mening som nämner produkten och ett konkret faktum. "Bellevue i Malmö" upprepas inte i styckena.

## FAQ, ordagrant

**1. Vad är en terrassmarkis?**
En terrassmarkis är en markis som fälls ut över en uteplats på vikbara armar och rullas in när den inte används. Den monteras på fasaden eller under ett tak ovanför uteplatsen. En kassettmarkis har dessutom en box som väven rullas in i, så att väven är skyddad när markisen är indragen. Selt Palladio och Harol Cadiz är båda byggda så.

**2. Vilken markis monterar ni oftast?**
Selt Palladio. Nio av tio markiser vi monterar är en Palladio, och resten är främst Selt Jamaica, Harol Cadiz och Harol Tucan. Selt Dakar och Selt Corsica monterar vi någon gång. Vilken av dem som passar din uteplats avgörs vid hembesöket, när vi har mätt och sett fasaden.

**3. Hur bred kan en markis från Selt eller Harol bli?**
Selt Palladio och Harol Cadiz går upp till 7 meters bredd, och Cadiz kan kopplas ihop till upp till 12 meter. Utfallet är upp till 3,6 meter på Palladio och 4 meter på Cadiz. För Selt Jamaica och Harol Tucan bekräftar vi maxmåtten vid hembesöket, eftersom uppgifterna saknas eller skiljer sig mellan källorna.

**4. Kan markisen styras med motor och sensorer?**
Ja. Selt Jamaica finns med vev eller motor, och Harol Cadiz har io-styrning som standard. Både Cadiz och Tucan kan få sol-, vind- och regnsensor som tillval, så att markisen dras in automatiskt när det blåser. Var strömmen ska dras och vilken styrning som passar går vi igenom vid hembesöket.

**5. Hur lång garanti har markiserna från Selt och Harol?**
Selts markiser, Palladio, Jamaica, Dakar och Corsica, har 7 års garanti på markisen och 5 år på motorn. Harols markiser, Cadiz och Tucan, har 3 års garanti. Garanti och service går genom oss, och det är våra egna montörer som kommer ut om något behöver åtgärdas.

**6. Vad mäter ni vid hembesöket inför en markis?**
Vi mäter fasadens bredd och hur långt ut markisen behöver gå för att skugga den yta där du sitter. Vi tittar på fasadens material för infästningen, var solen står under eftermiddagen och var det finns ström om markisen ska ha motor. Vävproverna visar vi mot fasaden i dagsljus.

**7. Kan man få belysning och värme i markisen?**
Harol Cadiz kan få LED-belysning i boxen, i frontprofilen eller i armarna, och Harol Tucan kan få LED i armarna. Båda kan få undervärme som tillval. Vilka tillval som går att kombinera med elen och fasaden hos dig går vi igenom vid hembesöket.

**8. Vad kostar en terrassmarkis från Selt eller Harol?**
Priset beror på bredd, utfall, om markisen ska ha motor eller vev, vilken väv du väljer, tillval som vindautomatik och hur fasaden ser ut. Därför lämnar vi pris först efter hembesöket, när måtten är tagna. ROT-avdraget gäller arbetskostnaden för montaget, och hembesöket och offerten kostar ingenting.

### Dubblettkontroll mot resten av sajten
- **Exakta dubbletter** (normaliserad frågetext, alla FAQ-knappar i dist): **0**.
- **Frågor med minst 60 % gemensamma ord med en fråga på en annan sida:** de liknar varandra i formen men gäller andra produkter.
  - "Vad är en terrassmarkis?" liknar "Vad är en pergola?" (pergola-malmo) och flera "Vad är …"-frågor på persienner, plissé, lamellgardiner och motoriserat solskydd.
  - "Hur bred kan en markis från Selt eller Harol bli?" liknar "Hur bred kan en rullgardin vara?" (rullgardiner-malmo).
  - "Hur lång garanti har markiserna från Selt och Harol?" liknar "Hur lång leveranstid har ni?" (guider/vilket-solskydd-passar-bast).
  - "Vad kostar en terrassmarkis från Selt eller Harol?" liknar "Vad kostar en pergola – grovt?" (pergola-malmo). Den närmaste frågan om markispris på sajten är "Vad kostar en markis jämfört med en zip screen?" (guider/markis-eller-zip-screen), som har en annan formulering.

## Garantiformuleringar på sidan (alla)

| Plats | Formulering |
|---|---|
| title | "… 7 års garanti på Selt" |
| description | "7 års garanti på Selt och 5 år på motorn, 3 år på Harol." |
| AnswerBox | "Selts markiser har 7 års garanti och motorn 5 år, medan Harols markiser har 3 års garanti." |
| I korthet | "Selts markiser har 7 års garanti och motorn 5 år. Harols markiser har 3 års garanti." |
| Palladio-kortet | "Garanti 7 år på markisen, 5 år på motorn" |
| Jamaica-kortet | "Garanti 7 år på markisen, 5 år på motorn" |
| Alternativ-ingressen | "… Selt Jamaica har samma garanti som Palladio." |
| Cadiz-kortet | "Garanti 3 år" |
| Tucan-kortet | "Garanti 3 år" |
| Tabell, Palladio / Jamaica | "7 år, motor 5 år" |
| Tabell, Cadiz / Tucan | "3 år" |
| Garantisektionen | "Selts markiser, Palladio, Jamaica, Dakar och Corsica, har 7 års garanti på markisen och 5 år på motorn. Harols markiser, Cadiz och Tucan, har 3 års garanti." |
| FAQ 5 | samma två meningar som garantisektionen |

Ingen formulering motsäger en annan. Tidigare H2 "Tre års garanti och lokal service." och badgen "3 års garanti" i heron är borttagna.

## Specar på sidan: värde, status och källa

"Verifierad" betyder två eller fler källor. Fil-sökvägarna står i `docs/markis-forberedelse-2026-11-02.md`, punkt 3.

### Selt Palladio
| Spec (som på sidan) | Status | Källa |
|---|---|---|
| Max bredd 7,0 m | verifierad | plikiapi.selt.com, archiselt.com (`palladio.yaml`) |
| Max utfall 3,6 m | verifierad | plikiapi.selt.com, archiselt.com |
| Utfall 1,6, 2,1, 2,6, 3,1 eller 3,6 m (enligt tillverkare) | enskild källa, tillverkare | plikiapi.selt.com |
| Vev eller motor (enligt tillverkare) | enskild källa, tillverkare | plikiapi.selt.com |
| Montage på vägg, tak eller takstol (enligt tillverkare) | enskild källa, tillverkare | plikiapi.selt.com |
| Vindklass 2 vid bredd upp till 7,0 m och utfall upp till 2,6 m (enligt tillverkare) | enskild källa, tillverkare | plikiapi.selt.com |
| Garanti 7 år på markisen, 5 år på motorn | förstahandsuppgift | Bellevue (uppgiften) |
| Prosa: vikbara aluminiumarmar med fjädrar och Flyer-kedja | verifierad | plikiapi.selt.com, archiselt.com |
| Prosa: kan få falbana | verifierad | plikiapi.selt.com, archiselt.com |
| Prosa: armarna kan monteras överlappande, utom vid 3,6 m utfall | verifierad | plikiapi.selt.com, archiselt.com |
| Typ "kassettmarkis" | enligt instruktion (källorna säger full eller halv kassett) | – |
| Nio av tio markiser | förstahandsuppgift | Bellevue |

### Selt Jamaica (inga siffror)
| Spec | Status | Källa |
|---|---|---|
| Typ "Terrassmarkis" | verifierad\* | product_name från shopsun.eu, plikiapi.selt.com, archiexpo.com och markizes24.lv (`verify-output/selt-jamaica-awning.json`) |
| Vev eller motor | verifierad\* | plikiapi.selt.com, archiexpo.com |
| Montage på vägg, tak eller takstol | verifierad\* | shopsun.eu, plikiapi.selt.com |
| Skyddshuv som tillval | verifierad\* | plikiapi.selt.com, archiexpo.com |
| Garanti 7 år / motor 5 år | förstahandsuppgift | Bellevue |

\* Statusen kommer från verify-output med det gamla schemat (≥2 eniga domäner). Ingen uppgift från `jamaica.yaml` används, eftersom alla poster där har e-markizy.pl som enda källa.

### Harol Cadiz
| Spec | Status | Källa |
|---|---|---|
| Max bredd 7 m | verifierad | harol.com, carstads.se, archiproducts.com (`cadiz.yaml`) |
| Max utfall 4 m | verifierad | harol.com, carstads.se, archiproducts.com |
| Kopplingsbar upp till 12 m | verifierad | harol.com, carstads.se, archiproducts.com |
| Box 295 × 185 mm | verifierad | harol.com, archiproducts.com |
| Vario-valance upp till 2 m | verifierad | harol.com, carstads.se, archiproducts.com |
| Armar testade för 25 000 cykler | verifierad | harol.com, carstads.se, archiproducts.com |
| io-styrning som standard | verifierad | harol.com, carstads.se |
| Sol-, vind- och regnsensor som tillval | verifierad | harol.com, carstads.se |
| Prosa: sluten box med rundade kanter | verifierad | harol.com, carstads.se |
| Prosa: kablarna dolda i armprofilen | verifierad | harol.com, carstads.se, archiproducts.com |
| FAQ: LED i box, frontprofil eller armar; undervärme | verifierad | harol.com, carstads.se |
| Garanti 3 år | förstahandsuppgift | Bellevue. Se Avvikelser: yaml anger 5 år. |

### Harol Tucan (ingen maxbredd och inget maxutfall)
| Spec | Status | Källa |
|---|---|---|
| Box 200 × 130 mm | verifierad | harol.com, archiproducts.com (`tucan.yaml`) |
| Sluten eller halvöppen box | verifierad | harol.com, archiproducts.com, albanblinds.com |
| Valance upp till 25 cm | verifierad | harol.com, archiproducts.com, albanblinds.com |
| LED i armarna som tillval | verifierad | harol.com, archiproducts.com, albanblinds.com |
| Undervärme som tillval | verifierad | harol.com, albanblinds.com |
| Sol-, vind- och regnsensor som tillval | verifierad i yaml (verify-output: ⚡ bara albanblinds) | harol.com, albanblinds.com |
| Montage på vägg eller tak | verifierad | harol.com, albanblinds.com |
| Prosa: armar testade för 25 000 cykler | verifierad | harol.com, albanblinds.com |
| Prosa: boxen är mindre än Cadiz box | härlett ur två verifierade mått (200 × 130 mot 295 × 185) | – |
| Garanti 3 år | förstahandsuppgift | Bellevue. Se Avvikelser: yaml anger 5 år. |

### Tabellen
Palladio 7,0 m / 3,6 m och Cadiz 7 m / 4 m är verifierade. Jamaica har "–" eftersom instruktionen inte tillåter siffror. Tucan har "–" eftersom källorna anger olika värden. Typ-kolumnen följer korten.

## Förbjudna fraser och rubriker som är undvikna

Alla följande ger 0 träffar i sidans `<main>` och `<head>`:
- **H2:** "Vad påverkar priset?", "Pris och vad som påverkar det", "Så går rådgivning och montering till", "Montering och skötsel", "Vanliga frågor", "Frågor om markiser", "Jämför modellerna", "Modelljämförelse" och "Vad är en markis?". Den sista används inte heller som FAQ.
- **Fraser:** "Bellevue Solskydd levererar", "Boka kostnadsfri rådgivning", "Kontakta oss idag", "Vi specificerar varje del i offerten", "vi lovar", "stolt partner", "branschledande", "marknadens bästa" och "unik lösning".
- **Påståenden:** Testfakta, Bäst i Test, 40 år, patent, egen produktion och Di Gasell.
- **Övrigt:**
  - Madeira, hel- och halvkassett samt semi-kassett förekommer inte.
  - Inga priser.
  - Ingen produkt kopplas till en hustyp.
  - Inga skäl till varför Palladio väljs.
- **"i Malmö och södra Skåne"** förekommer en gång (AnswerBox).
- **Ögonbryn:** de enda är tillverkarnamnen SELT och HAROL ovanför modellnamnen i korten.

## Ändrade och borttagna filer i astro/

**Ändrade:**
- `src/content/pages/markiser-malmo.md`: helt omskriven.
- `src/templates/Markiser.astro`: ny struktur med AnswerBox, I korthet utan synlig etikett, modellkort, tabell och mobilkort.
- `src/content/schemas/markiser.ts`:
  - nytt `markiserSchema` och `modelCardSchema`
  - `heroSchema.secondaryCta` och `badges` är nu valfria
- `src/components/markiser/Hero.astro`: sekundärlänken och badge-raden renderas bara om de finns. Fönstermarkiser och insektsskydd har oförändrat innehåll.
- `src/lib/nav.ts`: menyposten Terrassmarkiser är borttagen. Den gällde både sidhuvud och sidfot.
- `src/pages/[...slug].astro` och `src/content.config.ts`: mallen och schemat för terrassmarkiser är borttagna.
- `src/content/pages/zip-screen-malmo.md`: 2 länkar ändrade från /terrassmarkiser-malmo/ till /markiser-malmo/. Bara `href` är ändrat.
- `src/content/pages/fonstermarkiser-malmo.md`: 1 länk ändrad på samma sätt. Bara `href` är ändrat.
- `public/_redirects`: `/terrassmarkiser-malmo/ /markiser-malmo/ 301` tillagd.
- `scripts/interactions.mjs`: se Avvikelser.

**Borttagna:**
- `src/content/pages/terrassmarkiser-malmo.md`
- `src/templates/Terrassmarkiser.astro`
- `src/content/schemas/terrassmarkiser.ts`
- `src/components/terrass/StackedModelCard.astro` (mappen `terrass/` är också borttagen)

**Nya:**
- `docs/markiser-malmo__desktop-1440.png`
- `docs/markiser-malmo__mobil-390.png`
- den här rapporten

## Avvikelser och saker att ta ställning till

1. **Harols garanti.** Sidan säger 3 år, som du angav. `cadiz.yaml` och `tucan.yaml` anger 5 år som verifierad (harol.com, carstads.se, albanblinds.com). Om 3 år är Bellevues egen garanti och 5 år tillverkarens behöver det bekräftas. Sidan nämner inte 5 år någonstans.
2. **interactions.mjs.** Testet "dropdown visible on hover" letade efter länktexten "Terrassmarkiser", som uppgiften tar bort. Testet letar nu efter "Fönstermarkiser" i samma dropdown under Utvändigt. Före ändringen gav körningen 21/22 med just detta som FAIL, efter ändringen 22/22.
3. **fonstermarkiser-malmo.** Uppgiften sa både "rör inte fonstermarkiser-malmo" och "uppdatera alla interna länkar". Jag har bara ändrat `href` i en länk och ingenting annat på sidan, eftersom grep-kravet annars inte kan uppfyllas.
4. **Död kod.** Mall, schema och kortkomponent för terrassmarkiser är borttagna, eftersom grep på "terrassmarkiser-malmo" annars gav träffar i deras kodkommentarer.
5. **Tilltal.** Texten använder "du", som är writer-voice-skillens standard. Övriga sidor på sajten använder "ni" och "er".
6. **Description** är 150 tecken, alltså på den nedre gränsen.
7. **Bilder.** Palladio och Jamaica visar platshållare. Palladios `plannedImage` är `/images/markiser/palladio.webp`, och Jamaica har ingen planerad sökväg eftersom ingen var angiven. Hero-bilden är fortfarande en platshållare (`/images/markiser/hero.webp`).
8. **Mobil-skärmdumpen.** Den fasta CTA-raden längst ner på mobilen hamnar mitt i helsidesbilden, ovanpå AnswerBox. Det beror på hur helsidesbilder tas. Sidan i sig är inte påverkad.
