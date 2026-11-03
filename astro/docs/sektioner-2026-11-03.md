# Sektionskomponenter och Terrassmarkiser i menyn, 2026-11-03

Verifiering: `npm run build` ger 0 fel och 29 sidor. `node scripts/interactions.mjs` mot dist på :4402 ger 28 PASS och 0 FAIL.
Skärmdumpar ligger i `docs/sektioner/`:
- `markiser-malmo__desktop-1440.png`
- `markiser-malmo__mobil-390.png`
- `meny__desktop-1440.png`
- `meny__mobil-390.png`
- `meny-utvandigt__mobil-390.png`

## Komponenter

Komponenterna ligger i `src/components/sections/`. Schemat ligger i `src/content/schemas/sections.ts`.

| Komponent | Markup | Regler i schemat |
|---|---|---|
| CrossLinkCards | `<ul>` med kort där hela kortet är en enda `<a>`. Vitt kort med beige ram (`brand-linen`). 3 kolumner från 1024 px, annars 1. | 2–4 kort, kortets text max 12 ord |
| ProcessSteps | `<ol>` med mässingslinje och stor mässingssiffra i Fraunces. 4 kolumner från 1024 px (3 om det finns 3 steg), annars vertikal lista. | 3–5 steg, stegnamn max 3 ord, text max 12 ord |
| CostFactors | `<ul>` med numrerade rutor och valfri chip-rad. Inga ikoner och inga nya beroenden. | 4–6 faktorer, text max 12 ord |
| GuaranteeTiles | `<dl>` med siffran som text i Fraunces, färg `#2E4A38`, och en servicerad under. Har läget `stacked` för smala kolumner. | 1–3 rutor (se garantiflaggor) |

Gemensamt för alla fyra:
- H2 är oförändrad.
- Ingressen är valfri, och schemat stoppar mer än en mening.
- Allt renderas på servern utan klientskript.
- Ord- och antalsgränserna kontrolleras vid build. Om en rad är för lång stoppar bygget.

Övriga kodändringar:
- **FAQList:** dragspelet behålls. Från 1024 px blir det två oberoende kolumner när sidan har 6 eller fler frågor. Ordningen på mobil är oförändrad.
- **FaqSection, ZipScreen och Pergola:** FAQ-behållaren är max-w-5xl när frågorna visas i två kolumner, samma bredd som sektionerna ovanför.
- **Artikelmallen:** nytt fält `tail` (prose, crossLinks, processSteps, costFactors) som renderas efter Markdown-texten och före FAQ:n. Sektionerna från "Pris och vad som påverkar det" och framåt har flyttats från Markdown till `tail`, så att ordningen på sidan är densamma. Brödtexten i flyttade prosasektioner är oförändrad.

## Sidor som fått komponenterna

| Sida | CrossLinkCards | ProcessSteps | CostFactors | GuaranteeTiles | FAQ i två kolumner |
|---|---|---|---|---|---|
| markiser-malmo | När fönstermarkis, zip screen eller pergola passar bättre | Från hembesök till färdig markis på fasaden | Det här avgör vad din markis kostar | Garanti på Selt och Harol … | ja (8) |
| fonstermarkiser-malmo | – | Så jobbar vi med fönstermarkiser. | Vad som styr kostnaden per fönster. | Garanti och lokal kontaktpunkt. | ja (8) |
| zip-screen-malmo | – | Vägen från glaspartiet till rätt zip-screen. | Vad investeringen består av. | Garanti och lokal service. (staplad, bakgrundsbilden kvar) | ja (8) |
| pergola-malmo | – | Hantverket bakom konstruktionen. | Spannet — och vad som styr det. | Fem års garanti på Harol … | ja (9) |
| insektsskydd-malmo | – | Måttning och montering på plats. | – | Tre års garanti och lokal service. | nej (5) |
| persienner-malmo | Persienner jämfört med andra invändiga val | – | Pris och vad som påverkar det | – | ja (6) |
| plissegardiner-malmo | – | – | Pris och vad som påverkar det | – | ja (6) |
| rullgardiner-malmo | Rullgardin i kombination — eller helt själv | – | Pris och vad som påverkar det | – | ja (6) |
| lamellgardiner-malmo | – | – | Pris och vad som påverkar det | – | ja (6) |
| invandigt-solskydd | – | Så går det till | – | – | nej (5) |
| markiser-skanor-falsterbo | – | Så hjälper vi dig i Skanör-Falsterbo | – | – | nej (3) |

Följande sektioner har jag bedömt och låtit vara:

| Sida | Sektion | Varför den inte ändrades |
|---|---|---|
| zip-screen-malmo | "När en zip-screen är rätt val — och när det är något annat." | Handlar främst om när zip screen passar och är ingen ren sektion om alternativ. |
| fonstermarkiser-malmo | "Fönstermarkis eller terrassmarkis?" | En jämförelse mellan två produkter med en länk. |
| plissegardiner-malmo | "Välj din plissé i tre frågor" | Beslutsguide. |
| lamellgardiner-malmo | "Här hör lamellgardiner hemma" | Listor över var produkten passar och inte passar. |
| guider/* | – | Inga sektioner av de fyra typerna. |
| index, referenser, om-oss, kontakt | – | Inga sektioner av de fyra typerna. |

Pergola-sidan: bara layouten för process, kostnad och garanti är ändrad, plus FAQ i två kolumner. Bilder och övrig text är orörda.

## Struket och flyttat, per sida

Inget har flyttats till FAQ. Allt som inte fick plats fanns redan i sidans FAQ eller övriga text, eller ströks. I de omskrivna sektionerna används "du".

### markiser-malmo
- **Alternativ:** "så den passar när problemet är värmen inne i rummet" är kortat till "när värmen inne är problemet".
- **Process:**
  - "Varje markis börjar med ett hembesök …" är kortat.
  - "var solen står under eftermiddagen" och "hur mycket vind platsen tar" har blivit "sol och vind".
  - "Tegel, puts, trä och isolerade väggar kräver olika fästen" är struket. FAQ:n om hembesöket nämner fasadens material.
  - "när den är utfälld", "så att det är klart före montaget" och "När markisen sitter uppe kör vi ut och in den tillsammans med dig" är strukna.
- **Kostnad:**
  - Ordningsorden "först", "därefter" och "sedan" är strukna. Numreringen visar ordningen.
  - Exemplet "första våningen i puts … tredje våningen i tegel" är kortat till "Våning och fasadmaterial".
  - "Offerten tar vi fram efter hembesöket" har blivit en chip.
- **Garanti:** "Ringer du om markisen når du samma företag som monterade den" är struket.

### fonstermarkiser-malmo
- **Process:**
  - "eventuell isolering eller fuktspärr" är struket.
  - "Det ni skickar till styrelsen ska vara komplett — vi har vana med vad föreningar i Malmö centralt typiskt vill ha med" är struket.
  - "eventuell sensor riktas in efter solens väg över huset" är kortat till "sensor ställs in på plats".
- **Kostnad:**
  - "håller väven bättre över tid i kustklimat" är struket. FAQ:n om vintern täcker kassettens året-runt-bruk.
  - "Båda leverantörerna har breda vävkollektioner" och "I bostadsrätter måste valet ändå hålla sig inom föreningens fasadlinje" är strukna. FAQ:n om BRF täcker det.
- **Garanti:**
  - "samma företag som installerar … tre år senare" är struket.
  - Stycket med länken "hela markissortimentet i Malmö" (till /markiser-malmo/) är struket.

### zip-screen-malmo
- **Process:**
  - "Modellvalet börjar i fasaden, inte i sortimentet" är struket.
  - Fasadtyperna "tegel, puts, isolerad yttervägg eller post-and-beam" är strukna.
  - Öppningsgrad och "inte mot en showroom-bakgrund" är strukna. FAQ:n om utsikt täcker öppningsgrad och vävprover.
  - "För sovrum eller hemmabio … blackout-väv" är struket. FAQ:n om mörkläggning täcker det.
  - "Slutligt val är situationsbundet" är struket.
- **Kostnad:**
  - "materialmängden skalar med ytan, inte linjärt med bredden" är struket.
  - "Harols 300+ RAL-kulörer tillkommer utan pristillägg, men premiumvävar från Dickson, Sattler och Swela tillkommer" är struket. "Utan pristillägg" finns inte i produktdata.
  - "förlänger livslängden genom automatisk infällning" och "Smart hem-integration tillkommer beroende på system" är strukna.
  - Exemplet med bostadsrättsfasad och skylift samt "Saknas el-uttag … löser vi dragningen" är strukna. FAQ:n om el täcker dragningen.
  - Avslutningsmeningen har blivit chipen "Specificerad offert efter hembesöket".
- **Garanti:**
  - "utan diskussion om vem som ska kallas in" är struket.
  - Ortslistan (Malmö … Svedala) och "tre år senare" är strukna.
  - Stycket med länkarna "terrassmarkis över altanen" och "markissortimentet i Malmö där fönster- och korgmarkiser också ingår" är struket. FAQ:n "Kan zip-screen kombineras med pergola eller terrassmarkis?" täcker kombinationen.

### pergola-malmo
- **Hantverk:**
  - "inte underentreprenörer" är struket.
  - "betongplint, mark eller terrass beroende på underlag" är struket.
  - "inte isoleringen" är struket. FAQ:n om fasaden täcker det.
  - Tillvalslistan "LED, värme, screens" har blivit "tillval".
- **Kostnad:**
  - Exemplet "3 × 3 m … 5 × 7 m" är struket.
  - "Vävmodeller landar lägre … tillvalskedjan" och "integrerad vattenavrinning" är strukna.
  - "Färgval i RAL … inkluderat hos vissa modeller, tillägg hos andra" är struket.
  - Exemplen om trädäck och tegel är kortade.
  - "el och bygglovskontakt" i avslutningen är struket. Avslutningen har blivit chipen "Specificerad offert efter platsbesöket".
- **Garanti:**
  - "Selts markiser har 7 års garanti och motorn 5 år" är struket, eftersom sidan inte säljer Selt.
  - Stycket "Harol är en belgisk tillverkare …" är struket.

### insektsskydd-malmo
- **Montering:**
  - "eventuella spår som lösningen ska följa", "inom eller utanpå karmen" och "Monteringen sker när näten levererats" är kortade.
  - "om vi behöver justera karmpartier eller dra rejäla spår" är struket.
- **Garanti:**
  - Exemplen "nätet glappar, fjädern slutar dra in, rullen kärvar" och "utan diskussion" är strukna.
  - "tio år senare" och "håller koll på er installation" är strukna.
  - Ortslistan är struken. FAQ:n "Vilka områden …" täcker den.

### persienner-malmo
- **Pris:** "Vi mäter på plats, så får ni siffran innan ni bestämmer" har blivit chipen "Pris efter mätning på plats".
- **Jämförelse:** raden "Persienn — stegvis ljuskontroll. Aluminium tål fukt och fett." har blivit ingressen.

### plissegardiner-malmo
- **Pris:** "eftersom både dubbelvävskonstruktionen och aluminiumlagret kostar att tillverka" och "där tvåvägs och mörkläggning gör mest skillnad" är strukna.

### rullgardiner-malmo
- **Pris:** "Ingen rullgardin är den andra lik prismässigt" är struket.
- **Kombination:** "Bara rullgardinen själv — för cirka 80 procent av fönsterna räcker det" är struket.

### lamellgardiner-malmo
- **Pris:**
  - "mer än för någon annan invändig lösning" är struket.
  - Exemplet med sex meter mot två meter är struket.
  - "varje lamell består av väv plus klädnypa plus eventuell viktbotten" är struket.

### invandigt-solskydd
- **Så går det till:**
  - Ortslistan i steg 1 är struken.
  - "Inga säljmöten — bara fakta och alternativ" är struket.
  - "Inga klumpsummor och inga dolda kostnader" är struket.
  - "och eventuellt det gamla solskyddet" är struket.

### markiser-skanor-falsterbo
- **Process:**
  - Ingressens andra mening, "Premiumkomponenter är standard.", är struken. Answerboxen säger redan "enbart premiumkassetter".
  - "Vi bokar in ett tillfälle som passar" och "tydligt material- och tillvalsval" är kortade.
  - "Vi monterar i Skanör-Falsterbo med våra egna montörer" har blivit stegnamnet "Egna montörer".

## Garantiflaggor

Rutorna visar bara siffror som redan stod på respektive sida. Inga siffror är kopierade mellan sidor, och inga rutor visar 10 år.

1. **zip-screen-malmo:** sidan anger "Selts markiser 7 år, motorn 5 år", men sidans Selt-produkter är zip screens (R 120 och R 95 ZiiiP), inte markiser. Rutan "7 år – Selts markiser, motorn 5 år" visar det sidan redan säger. Vilken garanti som gäller för Selts zip screens är **okänt**. Det behöver redas ut.
2. **pergola-malmo:** garantin för Tarasola anges inte separat. Om "Övrigt utvändigt solskydd 3 år" gäller Tarasola är **okänt**. Selt-meningen är struken, så rutorna är Harols pergolor 5 år och övrigt utvändigt 3 år.
3. **insektsskydd-malmo:** sidan anger bara en garanti, 3 år. Därför visas 1 ruta, inte 2–3. Schemat tillåter 1–3 rutor av det skälet.
4. **fonstermarkiser-malmo:** hero-badgen säger "3 års garanti" medan garantisektionen anger 7 år på Selts markiser. Badgen är inte ändrad.
5. **Persienner, plissé, rullgardiner, lamellgardiner och invandigt-solskydd** saknar en garantisiffra i texten. De har inga rutor.
6. **Kvar från produktdata:** det är oklart om villkoret om årlig service gäller Selts 7 år. Det påverkar markiser-, fönstermarkis- och zip-sidornas rutor.

## Menyändringar (del 3)

- **Menydata (`src/lib/nav.ts`):** "Markiser" med indraget "Fönstermarkiser" är ersatt med två jämställda poster, "Terrassmarkiser" → /markiser-malmo/ och "Fönstermarkiser" → /fonstermarkiser-malmo/. "Zip Screen" heter nu "Zip screen". Ändringen gäller desktop-dropdownen, mobilmenyn och footern, som alla läser från samma data.
- **markiser-malmo:**
  - title: "Markiser och terrassmarkiser i Malmö | Bellevue Solskydd".
  - description: "Terrassmarkis i Malmö från Selt och Harol. Vi mäter din uteplats vid ett kostnadsfritt hembesök och monterar markisen med egna montörer." (136 tecken).
  - H1: "Terrassmarkiser i Malmö".
  - AnswerBoxens första mening är nu "Bellevue Solskydd mäter och monterar terrassmarkiser i Malmö och södra Skåne, och nio av tio markiser vi monterar är Selt Palladio."
  - Breadcrumb i hero och BreadcrumbList-schema: "Terrassmarkiser".
  - "Terrassmarkis" har lagts till på 3 ställen: AnswerBoxen, process-steg 4 ("terrassmarkisen") och slut-CTA:n ("och föreslår en terrassmarkis.").
- **301-omdirigeringen** /terrassmarkiser-malmo/ → /markiser-malmo/ i `public/_redirects` är kvar och orörd.
- **Interna länkar till /markiser-malmo/:** inga ankartexter är bytta. Ingen länk har ankartexten "markiser" i betydelsen terrassmarkiser.

  | Plats | Ankartext | Bedömning |
  |---|---|---|
  | zip-screen-malmo | "terrassmarkis" | Säger redan terrassmarkis. |
  | fonstermarkiser-malmo, contrast-länken | "Läs om terrassmarkiser för uteplatser" | Säger redan terrassmarkiser. |
  | index.md, kortet | "Markiser" | Beskrivningen gäller även fönsterpartier, alltså markiser generellt. Ej ändrad. |
  | guider/solskydd-varme | "markis" | Står i ett sammanhang om glasytor och värme, inte terrassmarkis. Ej ändrad. |
  | guider/vilket-solskydd-passar-bast | "Läs mer" | Ingen ankartext med "markiser". |
  | markiser-skanor-falsterbo | "Läs mer om markiser i Malmö och hela södra Skåne" | Sidan beskriver terrass-, fönster- och korgmarkiser. Om "terrassmarkiser" är rätt här är **okänt**. Ej ändrad. |
  | Struket | "hela markissortimentet i Malmö" (fönstermarkiser) och "terrassmarkis över altanen" och "markissortimentet i Malmö" (zip-screen) | Låg i garantisektioner som har gjorts om. Se "Struket" ovan. |

- **Flagga, ej ändrat:** fönstermarkiser-, zip-screen- och Skanör-sidornas breadcrumbs har kvar "Markiser Malmö" → /markiser-malmo/ som föräldernivå. Eftersom menyn nu visar Fönstermarkiser och Zip screen som syskon till Terrassmarkiser stämmer den hierarkin inte längre.

## Tester

I `scripts/interactions.mjs` finns 6 nya kontroller, och alla passerar:

| Kontroll | Vad den kontrollerar |
|---|---|
| dropdown: Terrassmarkiser → /markiser-malmo/ | Posten finns i dropdownen och är synlig. |
| dropdown: Terrassmarkiser and Fönstermarkiser are siblings | Posterna ligger på samma nivå. |
| dropdown: "Zip screen" label | Etiketten är skriven med litet s. |
| mobile menu: Terrassmarkiser → /markiser-malmo/ | Posten finns i mobilmenyn. |
| mobile menu: Fönstermarkiser not nested under Terrassmarkiser | Fönstermarkiser ligger inte under Terrassmarkiser. |
| footer: Terrassmarkiser → /markiser-malmo/ | Posten finns i footern. |

Det befintliga testet "dropdown visible on hover" fungerar utan ändring.

## Garantirättning

Siffrorna kommer från `docs/produktdata-2026-11-02.md`, avsnittet Garanti. Verifiering: `npm run build` ger 0 fel och 29 sidor. `node scripts/interactions.mjs` ger 28 PASS och 0 FAIL. Skärmdumparna av garantisektionen på desktop 1440 och mobil 390 ligger i `docs/sektioner/garanti/`.

### 1. Garantirutor

| Sida | Rutor nu | Före |
|---|---|---|
| markiser-malmo | 7 år – Selts markiser · 5 år – motorn på Selts markiser · 5 år – Harols markiser | Oförändrat |
| zip-screen-malmo | 5 år – Coolscreen från Harol · 3 år – ZiiiP från Selt | Rutan "7 år – Selts markiser, motorn 5 år" är borttagen. Meningen fanns sedan sektionspasset bara som den rutan. "Övrigt utvändigt solskydd" har ersatts av ZiiiP-rutan. |
| fonstermarkiser-malmo | 7 år – Italia från Selt · 5 år – Motor på Selt · 3 år – Fönstermiljö | Selts markiser, motorn på Selts markiser, övrigt utvändigt solskydd |
| pergola-malmo | 5 år – Pergolor från Harol · 3 år – Pergolor från Tarasola | Harols pergolor, övrigt utvändigt solskydd |
| insektsskydd-malmo | 3 år – Utvändigt monterat solskydd och insektsskydd. 1 ruta. | Oförändrad text. Ny layout: från 768 px står rutan med fast bredd (18 rem) och serviceraden bredvid. |
| persienner-malmo | 10 år – Persienner | Ny |
| plissegardiner-malmo | 10 år – Plisségardiner | Ny |
| rullgardiner-malmo | 10 år – Rullgardiner | Ny |
| lamellgardiner-malmo | 3 år – Lamellgardiner | Ny |

Om de invändiga sidorna:
- Ingen av sidorna nämnde garanti tidigare. Rutorna ligger därför direkt före FAQ:n, som sista block i `tail` med den nya typen `guarantee`.
- H2 är "Garanti". Rubriken är ny text, eftersom sektionen inte fanns.
- Serviceraden är "Monteras av våra egna montörer.". Ingen av sidorna hade en egen formulering om montörer.

Ingen utvändig sida visar 10 år. Kontrollerat i dist: förekomsten av "10 år" är 0 på markiser, zip, fönstermarkiser, pergola, insektsskydd och Skanör.

### 2. Hero-badges

| Sida | Före | Efter | Skäl |
|---|---|---|---|
| fonstermarkiser-malmo | "3 års garanti" | "BRF-underlag" | Tre garantinivåer. Att Bellevue tar fram BRF-underlag står redan i description, tldr och processen. |
| zip-screen-malmo | "5 års garanti på Harol" | "Harol och Selt" | Två nivåer. "Monterar Harol och Selt" står redan i description. |
| pergola-malmo | "5 års garanti på Harol" | "Harol och Tarasola" | Två nivåer. "Vi installerar Harol och Tarasola" står redan i tldr och description. **Obs:** punkt 1 säger "Inget annat på pergolasidan ändras", men punkt 2 gäller alla sidor. Jag följde punkt 2. Säg till om badgen ska återställas. |
| insektsskydd-malmo | "3 års garanti" | Oförändrad | En enda garantinivå. |

markiser-malmo har inga hero-badges.

### 3. Breadcrumbs

Det finns ingen hubbsida för utvändigt solskydd. Föräldern är därför Hem.

| Sida | Synligt och BreadcrumbList nu |
|---|---|
| fonstermarkiser-malmo | Hem › Fönstermarkiser (både `schemaBreadcrumbs` och hero-crumbs) |
| zip-screen-malmo | Hem › Zip-screen |
| markiser-skanor-falsterbo | Start › Markiser Skanör-Falsterbo |

Skanör fick Start som förälder, inte Terrassmarkiser. Skälet:
- Sidan handlar om markiser generellt. "Kort om markiser" säger att de "monteras på fasaden eller i taket ovanför fönstret" och att "vanligast är terrass-, fönster- och korgmarkiser".
- Answerboxen och FAQ:n talar om "premiumkassetter", "markiser" och "markisfärger", aldrig specifikt om terrassmarkiser.
- Hemnivån heter "Start" på sidan sedan tidigare. Det namnet behölls.

Ingen sida har längre "Markiser Malmö" som förälder, vare sig synligt eller i BreadcrumbList. Det är kontrollerat i dist. Den enda kvarvarande förekomsten av "Markiser Malmö" är `name` i Service-schemat på markiser-malmo, som inte är en breadcrumb. Den är inte ändrad.

### 4. Garantisiffror på hela sajten

Jag sökte igenom `src/`: sidor, guider, komponenter (inklusive footern) och schema.

| Fil | Mening | Stämmer med punkt 1 |
|---|---|---|
| markiser-malmo.md | answerBox: "Selts markiser har 7 års garanti och motorn 5 år, medan Harols markiser har 5 års garanti." | Ja |
| markiser-malmo.md | tldr: "Selts markiser har 7 års garanti och motorn 5 år. Harols markiser har 5 års garanti." | Ja |
| markiser-malmo.md | Palladio- och Jamaica-specs: "Garanti 7 år på markisen, 5 år på motorn" | Ja |
| markiser-malmo.md | alternatives intro: "Selt Jamaica har samma garanti som Palladio" | Ja |
| markiser-malmo.md | Cadiz- och Tucan-specs: "Garanti 5 år" | Ja |
| markiser-malmo.md | Jämförelsetabellen: "7 år, motor 5 år" (Palladio, Jamaica) och "5 år" (Cadiz, Tucan) | Ja |
| markiser-malmo.md | Garantirutor och FAQ: "Selts markiser … 7 års garanti på markisen och 5 år på motorn. Harols markiser … 5 års garanti." | Ja |
| zip-screen-malmo.md | tldr: "5 års garanti på Harol, egna montörer, lokal service …" | Ja |
| zip-screen-malmo.md | Coolscreen-spec: "Testad för 15 000 öppningscykler, 5 års garanti från Harol" | Ja |
| zip-screen-malmo.md | Hero-badge "5 års garanti på Harol" | Två nivåer. Ändrad, se punkt 2. |
| zip-screen-malmo.md | Ruta "7 år – Selts markiser, motorn 5 år" | Nej. Borttagen. |
| fonstermarkiser-malmo.md | Hero-badge "3 års garanti" | Nej, flera nivåer. Ändrad. |
| fonstermarkiser-malmo.md | Rutorna "Selts markiser" / "Övrigt utvändigt solskydd" | Ändrade enligt punkt 1. |
| pergola-malmo.md | description och ogDescription: "… 5 års garanti på Harol …" | Ja |
| pergola-malmo.md | tldr: "5 års garanti på Harol, egna montörer …" | Ja |
| pergola-malmo.md | H2 "Fem års garanti på Harol — och kontakten är lokal." | Ja |
| pergola-malmo.md | title och ogTitle: "… installation, garanti, hembesök …" | Ingen siffra |
| pergola-malmo.md | Hero-badge "5 års garanti på Harol" | Två nivåer. Ändrad, se punkt 2. |
| pergola-malmo.md | Ruta "Övrigt utvändigt solskydd" | Ändrad till "Pergolor från Tarasola". |
| insektsskydd-malmo.md | Hero-badge "3 års garanti" | Ja, en nivå |
| insektsskydd-malmo.md | tldr: "Lokal kontaktpunkt och 3 års garanti på installation." | Ja |
| insektsskydd-malmo.md | H2 "Tre års garanti och lokal service." och rutan "3 år" | Ja |
| invandigt-solskydd.md | Process-steg: "Vi monterar, går igenom skötsel och garanti …" | Ingen siffra |
| index.md | localProof: "Tydlig garanti på produkt och installation." | Ingen siffra |
| guider/skotsel-invandigt-solskydd.md | "… skötselråd, reservdelar och garantiärenden." och "**Reservdelar och garanti.** … hanterar garantiärenden." | Ingen siffra |
| Footer, Header, övriga komponenter och `src/lib` | Inga träffar | – |
| JSON-LD | Byggs från sidornas FAQ och fält. Inga egna garantisiffror. | – |

Jag har inte ändrat något annat än det som stod i strid med punkt 1, plus badges och breadcrumbs enligt punkt 2 och 3.

**Kvar från produktdata, ej ändrat:** det är oklart om villkoret om årlig service gäller Selts 7 år. Det påverkar markiser-malmo och fonstermarkiser-malmo.
