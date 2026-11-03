# Justeringar 2026-11-03: el, CTA-rubrik och vävfaktor

Verifiering: `npm run build` ger 0 fel och 29 sidor. `node scripts/interactions.mjs` ger 28 PASS och 0 FAIL. Sökningen i dist efter de gamla formuleringarna om el och om färg som prisfaktor ger 0 träffar. FAQ-schemat (JSON-LD) byggs från FAQ:n på sidorna och följer därför med ändringarna.

## Del 1: el

Regeln står i `docs/produktdata-2026-11-02.md` under "Montage och el" (se nedan). Hela `src/content/pages` är genomsökt mening för mening efter el, ström, kabel, elektriker, koppla, matning, uttag, 230V och dragning. Komponenter, mallar och `src/lib` har ingen text om el.

### Ändrade meningar

**markiser-malmo.md**

Före:
```
- { title: "Ström till motorn", text: "Ska markisen ha motor bestämmer vi vid besöket var kabeln dras." }
    - { title: "Montage", text: "Egna montörer sätter upp terrassmarkisen och går igenom styrningen med dig." }
```
Efter:
```
- { title: "Montage och provkörning", text: "Våra montörer sätter upp markisen och provkör motorn med testkabel." }
    - { title: "Fast elanslutning", text: "Har markisen motor kopplar din elektriker in den fasta strömmen." }
```

**markiser-malmo.md**

Före:
```
Var strömmen ska dras och vilken styrning som passar går vi igenom vid hembesöket.
```
Efter:
```
Vilken styrning som passar och var din elektriker behöver dra fram strömmen går vi igenom vid hembesöket.
```

**markiser-malmo.md**

Före:
```
- question: "Vad kostar en terrassmarkis från Selt eller Harol?"
```
Efter:
```
- question: "Behöver jag en elektriker till en markis med motor?"
      answer: "Ja, om markisen ska ha motor. Våra montörer sätter upp markisen och provkör motorn med en testkabel, men den fasta elanslutningen gör en behörig elektriker som du själv anlitar. Vi kopplar inte fast el, och elarbetet ingår inte i vårt montage. En markis med vev behöver ingen el alls."
    - question: "Vad kostar en terrassmarkis från Selt eller Harol?"
```

**zip-screen-malmo.md**

Före:
```
intro: "Eftersom ZiiiP endast går med motor och Coolscreen har io-motor som standard planerar vi strömmen redan vid hembesöket."
```
Efter:
```
intro: "Eftersom ZiiiP endast går med motor och Coolscreen har io-motor som standard går vi redan vid hembesöket igenom var din elektriker ska dra fram strömmen."
```

**zip-screen-malmo.md**

Före:
```
- { title: "Mätning", text: "Vi mäter glaspartiets bredd och höjd och väljer modell efter måtten." }
    - { title: "Ström och infästning", text: "Vi bestämmer var kabeln dras och hur kassetten fästs i fasaden." }
    - { title: "Vävval", text: "Du ser vävproverna mot ditt eget glas, i dagsljus." }
    - { title: "Montage", text: "Egna montörer sätter upp screenen och ställer in motorn med dig." }
```
Efter:
```
- { title: "Mätning och infästning", text: "Vi mäter glaspartiet och bestämmer hur kassetten fästs i fasaden." }
    - { title: "Vävval", text: "Du ser vävproverna mot ditt eget glas, i dagsljus." }
    - { title: "Montage och provkörning", text: "Våra montörer sätter upp screenen och provkör motorn med testkabel." }
    - { title: "Fast elanslutning", text: "Din elektriker kopplar in den fasta strömmen till motorn." }
```

**zip-screen-malmo.md**

Före:
```
- { name: "Montage och el", text: "Fasad, monteringshöjd och kabeldragning avgör arbetet." }
```
Efter:
```
- { name: "Montage", text: "Fasad och monteringshöjd avgör arbetet. Elanslutningen gör din elektriker." }
```

**zip-screen-malmo.md**

Före:
```
- question: "Måste en zip screen ha motor?"
    answer: "Selts R 120 ZiiiP och R 95 ZiiiP finns endast med motor. Harols Coolscreen har io-styrning som standard och fungerar med TaHoma. Coolscreen 8 Solar drivs med solcell och ett batteri på 2,2 Ah som laddas på 3 timmar. Var strömmen ska dras bestämmer vi vid hembesöket."
```
Efter:
```
- question: "Måste jag anlita en elektriker för att få en zip screen?"
    answer: "I de flesta fall, ja. Selts R 120 ZiiiP och R 95 ZiiiP finns bara med motor, och Harols Coolscreen har io-motor som standard. Vi monterar screenen och provkör motorn med testkabel, men den fasta elanslutningen gör en behörig elektriker som du själv anlitar. Undantaget är Coolscreen 8 Solar, som drivs med solcell och ett batteri på 2,2 Ah."
```

**zip-screen-malmo.md**

Före:
```
tillval som sensorer och hur montaget och kabeldragningen ser ut.
```
Efter:
```
tillval som sensorer och hur montaget ser ut.
```

**fonstermarkiser-malmo.md**

Före:
```
- { title: "Montage", text: "Egna montörer monterar och ställer in eventuell motor med dig." }
```
Efter:
```
- { title: "Montage", text: "Egna montörer monterar och provkör en eventuell motor med testkabel." }
```

**fonstermarkiser-malmo.md**

Före:
```
- question: "Kan en fönstermarkis ha motor?"
      answer: "Ja, de flesta. Selts Italia och Italia Box finns med vev eller motor, medan Italia Balcony endast har vev. Fönstermiljös Sofiero och Läckö har vev som standard och Solliden och Haga band, och alla fyra kan få motor som tillval. Fönstermiljö använder motorer från Somfy och Becker."
```
Efter:
```
- question: "Behövs en elektriker om fönstermarkisen ska ha motor?"
      answer: "Ja. Vi monterar fönstermarkisen och provkör motorn med testkabel, och den fasta elanslutningen gör en behörig elektriker som du själv anlitar. Motor finns till Selts Italia och Italia Box och som tillval till Fönstermiljös Sofiero, Solliden, Haga och Läckö, med motorer från Somfy och Becker. Italia Balcony har endast vev och behöver ingen el."
```

**pergola-malmo.md**

Före:
```
vilket innebär att vi behöver dra fram en 230V-anslutning eller koppla till befintligt fasaduttag. Vid hembesöket går vi igenom dragvägar och tar ställning till om elektriker behöver vara inblandad redan vid montering eller om vi kan ta dragningen själva.
```
Efter:
```
vilket innebär att pergolan behöver en fast 230V-anslutning. Den gör en behörig elektriker som ni själva anlitar; vi monterar pergolan och provkör motorn med testkabel. Vid hembesöket går vi igenom var anslutningen behöver sitta, så att er elektriker kan förbereda den.
```

**pergola-malmo.md**

Före:
```
- { title: "Funktionstest", text: "Motorer, sensorer och tillval testas. Pergolan lämnas i drift samma dag." }
```
Efter:
```
- { title: "Provkörning", text: "Motorer, sensorer och tillval provkörs med testkabel." }
```

**rullgardiner-malmo.md**

Före:
```
Vi installerar gärna en kabelbunden 230V-motor istället där det går — då slipper ni laddcykeln helt.
```
Efter:
```
Där det går kan rullgardinen i stället få en kabelbunden 230V-motor — då slipper ni laddcykeln helt. Den fasta elanslutningen gör en behörig elektriker som ni själva anlitar.
```

**rullgardiner-malmo.md**

Före:
```
- { name: "230V-motor", text: "Kostar mer än batteri eftersom motor och elinstallation tillkommer." }
```
Efter:
```
- { name: "230V-motor", text: "Kostar mer än batteri, och den fasta elanslutningen gör en elektriker." }
```

**markiser-malmo.md**

Före:
```
- { name: "Väv", text: "Kvalitet och färg påverkar priset." }
```
Efter:
```
- { name: "Typ av väv", text: "Akryl, vattentät akryl eller PVC-belagd väv. Färgen påverkar inte priset." }
```


### Genomgånget och inte ändrat

| Fil | Mening | Skäl |
|---|---|---|
| markiser-malmo.md, FAQ "Vad mäter ni vid hembesöket …" | "… och var det finns ström om markisen ska ha motor." | Säger bara att vi kontrollerar var det finns ström, inte att vi kopplar in den. |
| markiser-malmo.md, FAQ "Kan man få belysning och värme …" | "Vilka tillval som går att kombinera med elen och fasaden hos dig …" | Säger inte att vi drar el. |
| pergola-malmo.md, FAQ "Kan vi börja med stommen …" | "kabeldragning för LED … förbereds redan i stommen" | Gäller kablar inne i konstruktionen, inte den fasta elanslutningen. På pergolasidan ändras bara felaktiga påståenden. |
| guider/motoriserat-solskydd.md | "Den kräver elinstallation och är därför vanligast vid nybygge eller renovering där elektrikern ändå är på plats." | Stämmer med regeln, eftersom elektrikern gör installationen. |
| guider/motoriserat-solskydd.md, rullgardiner-malmo.md | "kabelbunden 230V … där motorn kräver mer ström" | Beskriver produkten, inte vem som gör elarbetet. |
| Flera sidor | "kopplade fönster", "seriekopplas", "kopplas vidare i bredd och djup", "kopplas mot smart hem" | Har inget med el att göra. |

### Nya FAQ-frågor om elektriker

- **markiser-malmo:** "Behöver jag en elektriker till en markis med motor?" är en ny fråga. Sidan har nu 9 frågor.
- **zip-screen-malmo:** "Måste jag anlita en elektriker för att få en zip screen?" ersätter "Måste en zip screen ha motor?". Det behövs för att sidan ska hålla sig till max 8 frågor. Fakta om motorn ligger kvar i svaret.
- **fonstermarkiser-malmo:** "Behövs en elektriker om fönstermarkisen ska ha motor?" ersätter "Kan en fönstermarkis ha motor?". Även här finns fakta om motorn kvar i svaret, och sidan har kvar max 8 frågor.

Svaren står i före/efter-listan ovan.

## Del 2: den mörka CTA-sektionen på markiser-malmo

Rubriken och brödmeningen var redan bytta i föregående uppdrag. Rubriken visas på två rader: "Du berättar hur du vill ha det –" och "vi vet vilken markis som passar.". Inga andra sidor är ändrade.

| Sida | Rubrik | Brödmening |
|---|---|---|
| /markiser-malmo/ | Du berättar hur du vill ha det – vi vet vilken markis som passar. | Vid hembesöket lyssnar vi på dina önskemål och tar hänsyn till sol, vind och fasad, så att markisen blir rätt från början. |
| / | Kostnadsfri rådgivning i hela Malmö. | Vi kommer hem till er, mäter på plats och föreslår en lösning som passar fönstren, ljuset och budgeten. Inga övertramp, inga säljmöten. |
| /fonstermarkiser-malmo/ | Vi mäter dina fönster och visar modellerna på plats. | Hembesöket och offerten kostar ingenting, och du får pris per fönster när måtten är tagna. |
| /zip-screen-malmo/ | Vi mäter ditt glasparti och visar vävproverna på plats. | Hembesöket är kostnadsfritt, och du får offerten när måtten är tagna. |
| /pergola-malmo/ | Vi kommer hem och tittar på platsen. | Mätning, dimensionering och materialråd sker på uteplatsen. Hembesök och offert är kostnadsfria — det slutliga valet av modell och tillval avgörs på plats. |
| /insektsskydd-malmo/ | Vi kommer hem och mäter öppningarna. | Måttning sker per fönster eller dörr på plats. Hembesök och offert är kostnadsfria — vi kommer hem oavsett om det blir affär eller inte. |
| /markiser-skanor-falsterbo/ | Boka hembesök i Skanör-Falsterbo. | Vi besöker fasaden, bedömer vind- och saltbelastning och föreslår en premiummarkis som klarar Falsterbohalvöns klimat. Hembesök och offert är kostnadsfria. |
| /invandigt-solskydd/ | Boka kostnadsfritt hembesök. | Vi mäter på plats, visar vävprover i det ljus ni har, och offererar fönster för fönster. Hembesöket är gratis även om ni väljer att inte beställa — och täcker hela södra Skåne. |
| /persienner-malmo/ | Boka kostnadsfritt hembesök för persienner. | Vi mäter på plats, visar färgprover och föreslår modell utifrån fönstret — frihängande eller mellanglas. Hembesök, mätning och offert är gratis i hela södra Skåne. |
| /plissegardiner-malmo/ | Boka kostnadsfritt hembesök för plissé. | Vi mäter, visar vävprover i ert ljus och föreslår modell utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hela södra Skåne. |
| /rullgardiner-malmo/ | Boka kostnadsfritt hembesök för rullgardiner. | Vi mäter på plats, visar vävprover och föreslår motorisering där det gör skillnad. Hembesök, mätning och offert är gratis — gäller hela södra Skåne. |
| /lamellgardiner-malmo/ | Boka kostnadsfritt hembesök för lamellgardiner. | Vi mäter på plats, visar lamell- och vävprover, och föreslår skenkonfiguration utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hem, kontor och skolor i hela södra Skåne. |
| /referenser/ | Boka kostnadsfri rådgivning. | Vi besöker fastigheten, mäter på plats och föreslår en lösning som matchar både huset och hur ni faktiskt använder det. Hembesök och offert är kostnadsfria. |
| /guider/isolerande-gardiner/ | Vi visar dubbelväven på plats. | Vid hembesöket har vi med oss prov på både enkelväv och dubbelväv så ni kan se skillnaden i hand. Plus en lampa för att visa hur mörkläggande isolerväv stoppar ljus. |
| /guider/markis-eller-zip-screen/ | Osäker på vilket som passar? | Vi besöker fasaden, går igenom väderstreck, vindexponering och hur ni vill använda uteplatsen — och föreslår en lösning som matchar just er. Hembesök och offert är kostnadsfria. |
| /guider/motoriserat-solskydd/ | Vi guidar er genom valet. | Vid hembesöket går vi igenom vilka fönster som faktiskt drar nytta av motor, kollar om ni redan har Thread Border Router i hemmet, och föreslår motorfamilj utifrån befintligt smart hem-system. |
| /guider/plissegardin-eller-rullgardin/ | Vi hjälper er välja per rum. | Vid hembesöket går vi igenom alla fönster och föreslår plissé eller rullgardin utifrån användning, väderstreck och budget. Hembesök, mätning och offert kostar inget. |
| /guider/rullgardin-eller-persienn/ | Osäker på vilken som passar? | Vi gör hembesök i Malmö och närliggande orter, går igenom rummens användning och föreslår rullgardin eller persienn — fönster för fönster. Hembesök, mätning och offert är gratis. |
| /guider/skotsel-invandigt-solskydd/ | Frågor om skötsel? Kontakta oss. | Vi hjälper befintliga kunder med skötselråd, reservdelar och garantiärenden. Ring 040-18 11 00 eller mejla info@bellevuesolskydd.se så slår vi upp er installation. |
| /guider/solskydd-insyn/ | Vi tittar på fönstret tillsammans. | Vid hembesöket går vi runt fastigheten och tittar på var insynen faktiskt kommer in — gata, gångväg, motstående hus. Sedan föreslår vi den lösning som täcker exakt det området. |
| /guider/solskydd-kontor/ | Boka platsbesök för kontoret. | Vi gör platsbesök hos företag i Malmö, Lund och hela södra Skåne. Mätning, vävprover på plats, dokumenterad brandklass — och specificerad offert per fönster. Kostnadsfritt. |
| /guider/solskydd-sovrum/ | Boka kostnadsfritt hembesök. | Vi mäter sovrumsfönstret, går igenom var ljuset läcker in idag och föreslår en lösning som faktiskt mörklägger. Inkluderar motoralternativ och sidoskenor där det behövs. |
| /guider/solskydd-varme/ | Vi tittar på de varma fönstren tillsammans. | Hembesöket är gratis. Vi går runt fasaden, identifierar vilka fönster som faktiskt är värmeproblem, och föreslår en kombination av invändigt och utvändigt skydd där det behövs. |
| /guider/valja-ratt-solskydd-inomhus/ | Vi hjälper er välja per fönster. | Vid hembesöket går vi igenom alla fönster, lyssnar på hur rummen används och föreslår produkter rum för rum. Hembesöket är gratis. |
| /guider/vilket-solskydd-passar-bast/ | Vi hjälper er välja rätt. | Vi besöker fönstren, går igenom problemet ni vill lösa och föreslår en lösning som faktiskt fungerar i ert hus. Hembesök och offert är kostnadsfria. |

Guideöversikten (/guider/), /kontakt/ och /om-oss/ har ingen mörk CTA-sektion.

## Del 3: väv och färg som prisfaktor

**fonstermarkiser-malmo.md**

Före:
```
- { name: "Väv och ramfärg", text: "Fönstermiljö: akrylväv från Sattler, Sandatex eller Dickson, ram i valfri RAL." }
```
Efter:
```
- { name: "Väv", text: "Fönstermiljö: akrylväv från Sattler, Sandatex eller Dickson Constant." }
```

**fonstermarkiser-malmo.md**

Före:
```
styrning och val av väv och ramfärg.
```
Efter:
```
styrning och val av väv.
```

**lamellgardiner-malmo.md**

Före:
```
- { name: "Färg och lamellbredd", text: "Specialfärger och 89 eller 127 mm påverkar marginellt." }
```
Efter:
```
- { name: "Lamellbredd", text: "89 eller 127 mm påverkar priset marginellt." }
```

**guider/rullgardin-eller-persienn.md**

Före:
```
mellanglas och 30-färgs lameller på persienn höjer marginellt.
```
Efter:
```
mellanglas på persienn höjer marginellt.
```


Kontrollerat och inte ändrat:
- pergola-malmo: "Alla RAL-färger ingår i standardpris". Den säger att färgen inte påverkar priset.
- **Obs:** färg är nu struken som prisfaktor även för lamellgardiner (Umbra) och i guiden rullgardin-eller-persienn. Uppgiften att färgen inte påverkar priset gäller enligt produktdata Selts markisvävar. Om specialfärger kostar mer hos Umbra är **okänt**.

## Tillägg i produktdata-2026-11-02.md

Ny rubrik **"Montage och el"**, efter Garanti:
- Vi monterar markisen eller screenen och provkör motorn med testkabel.
- Den fasta elanslutningen gör en behörig elektriker som kunden själv anlitar.
- Vi kopplar aldrig fast el, och el ingår inte i vårt montage.

Ny rubrik **"Markisvävar (Selt)"**, efter Terrassmarkiser:

| Väv | Uppgift |
|---|---|
| Akryl | 100 % genomfärgad, 330 mm vattenpelare. Vattenavvisande, inte vattentät. |
| Waterproof (akryl) | Över 800 mm vattenpelare |
| PVC-belagd polyester | Plain, Sunworker, Valmex, Soltis 92 |

- Färgen påverkar inte priset (Bellevue).
- Skriv aldrig att någon väv gör markisen till regnskydd.
- Källa: Selts dokument "Tekstiltyper", https://res.cloudinary.com/vistanorge-no/image/upload/v1549281962/PDF%20filer/Utvendig%20solskjerming/Selt%20Tekstiltyper.pdf


---

# Tillägg 2026-11-03 (eftermiddag): färgmeningen, CTA-texter, "du", processen på fönstermarkiser

Verifiering: `npm run build` ger 0 fel och 30 sidor (den nya BRF-sidan ingår). `node scripts/interactions.mjs` ger 28 PASS och 0 FAIL.

## Färgmeningen borttagen

| Fil | Före | Efter |
|---|---|---|
| markiser-malmo.md, kostnadsrutan "Typ av väv" | Akryl, vattentät akryl eller PVC-belagd väv. Färgen påverkar inte priset. | Akryl, vattentät akryl eller PVC-belagd väv. |
| pergola-malmo.md, Versuz-kortets spec | "Alla RAL-färger ingår i standardpris" | Borttagen |
| pergola-malmo.md, Versuz-kortets brödtext | "Smala profiler och alla RAL-färger ingår – passar fasader där pergolan inte ska dominera arkitekturen." | "Smala profiler passar fasader där pergolan inte ska dominera arkitekturen." |
| produktdata-2026-11-02.md, "Markisvävar (Selt)" | "Färgen påverkar inte priset (Bellevue)." | "Färgen påverkar inte priset (Bellevue, intern uppgift, skrivs inte på sajten)" |

## Del 1: CTA-texter, före och efter

I mallar med två rubrikfält (fönstermarkiser, zip screen och insektsskydd) är rubriken delad vid meningsgränsen. markiser-malmo och pergola-malmo är inte rörda. Pergolans tankstreck ändrades i del 2.

**index.md**

Före:
```
  heading: Kostnadsfri rådgivning i hela Malmö.
  body: Vi kommer hem till er, mäter på plats och föreslår en lösning som passar fönstren, ljuset och budgeten. Inga övertramp, inga säljmöten.
```
Efter:
```
  heading: "Berätta vad du vill uppnå. Vi tar fram lösningen."
  body: "Vi kommer hem till dig i Malmö och södra Skåne, mäter på plats och föreslår en lösning som passar dina fönster, ditt ljus och din budget. Hembesöket och offerten är kostnadsfria."
```

**fonstermarkiser-malmo.md**

Före:
```
  headingLine1: "Vi mäter dina fönster"
  headingLine2: "och visar modellerna på plats."
  body: "Hembesöket och offerten kostar ingenting, och du får pris per fönster när måtten är tagna."
  cta: { label: "Boka platsbesök", href: "/kontakt/" }
```
Efter:
```
  headingLine1: "Vilka fönster släpper in för mycket sol?"
  headingLine2: "Vi väljer markis efter dem."
  body: "Hembesöket och offerten kostar ingenting, och du får pris per fönster när måtten är tagna."
  cta: { label: "Boka platsbesök", href: "/kontakt/" }
```

**zip-screen-malmo.md**

Före:
```
  headingLine1: "Vi mäter ditt glasparti"
  headingLine2: "och visar vävproverna på plats."
  body: "Hembesöket är kostnadsfritt, och du får offerten när måtten är tagna."
  button: "Boka platsbesök"
```
Efter:
```
  headingLine1: "Vill du stänga ute sol och insyn?"
  headingLine2: "Vi vet vilken screen som klarar det."
  body: "Vi har med oss vävprover, och du får offerten när måtten är tagna. Hembesöket är kostnadsfritt."
  button: "Boka platsbesök"
```

**insektsskydd-malmo.md**

Före:
```
  headingLine1: "Vi kommer hem"
  headingLine2: "och mäter öppningarna."
  body: "Måttning sker per fönster eller dörr på plats. Hembesök och offert är kostnadsfria — vi kommer hem oavsett om det blir affär eller inte."
  cta: { label: "Boka platsbesök", href: "/kontakt/" }
```
Efter:
```
  headingLine1: "Du ska kunna ha fönstret öppet."
  headingLine2: "Vi ser till att insekterna stannar ute."
  body: "Vi mäter varje fönster och dörr på plats. Hembesöket och offerten är kostnadsfria, även om det inte blir någon affär."
  cta: { label: "Boka platsbesök", href: "/kontakt/" }
```

**markiser-skanor-falsterbo.md**

Före:
```
  heading: "Boka hembesök i Skanör-Falsterbo."
  body: "Vi besöker fasaden, bedömer vind- och saltbelastning och föreslår en premiummarkis som klarar Falsterbohalvöns klimat. Hembesök och offert är kostnadsfria."
```
Efter:
```
  heading: "Vid kusten blåser det mer. Det tar vi hänsyn till."
  body: "Vi besöker fasaden, bedömer hur utsatt den är för vind och salt och föreslår en markis efter det. Hembesöket och offerten är kostnadsfria."
```

**invandigt-solskydd.md**

Före:
```
  heading: "Boka kostnadsfritt hembesök."
  body: "Vi mäter på plats, visar vävprover i det ljus ni har, och offererar fönster för fönster. Hembesöket är gratis även om ni väljer att inte beställa — och täcker hela södra Skåne."
```
Efter:
```
  heading: "Varje rum har sitt ljus. Vi väljer solskydd fönster för fönster."
  body: "Vi mäter på plats och visar vävprover i ljuset du har hemma. Hembesöket är gratis även om du inte beställer, och vi kommer till hela södra Skåne."
```

**persienner-malmo.md**

Före:
```
  heading: "Boka kostnadsfritt hembesök för persienner."
  body: "Vi mäter på plats, visar färgprover och föreslår modell utifrån fönstret — frihängande eller mellanglas. Hembesök, mätning och offert är gratis i hela södra Skåne."
```
Efter:
```
  heading: "Hur mycket ljus vill du släppa in? Vi väljer persienn efter det."
  body: "Vi mäter på plats, visar färgprover och föreslår frihängande persienn eller mellanglas utifrån fönstret. Hembesök, mätning och offert är gratis i hela södra Skåne."
```

**plissegardiner-malmo.md**

Före:
```
  heading: "Boka kostnadsfritt hembesök för plissé."
  body: "Vi mäter, visar vävprover i ert ljus och föreslår modell utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hela södra Skåne."
```
Efter:
```
  heading: "Plissé finns i många utföranden. Vi vet vilket som passar ditt fönster."
  body: "Vi mäter, visar vävprover i ditt ljus och föreslår modell utifrån fönstret. Hembesök, mätning och offert är gratis i hela södra Skåne."
```

**rullgardiner-malmo.md**

Före:
```
  heading: "Boka kostnadsfritt hembesök för rullgardiner."
  body: "Vi mäter på plats, visar vävprover och föreslår motorisering där det gör skillnad. Hembesök, mätning och offert är gratis — gäller hela södra Skåne."
```
Efter:
```
  heading: "Mörkläggande eller ljusdämpande? Vi hjälper dig välja väv."
  body: "Vi mäter på plats, visar vävprover och föreslår motor där det gör skillnad. Hembesök, mätning och offert är gratis i hela södra Skåne."
```

**lamellgardiner-malmo.md**

Före:
```
  heading: "Boka kostnadsfritt hembesök för lamellgardiner."
  body: "Vi mäter på plats, visar lamell- och vävprover, och föreslår skenkonfiguration utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hem, kontor och skolor i hela södra Skåne."
```
Efter:
```
  heading: "Vi planerar skenorna, du väljer väven."
  body: "Vi mäter på plats, visar lamell- och vävprover och föreslår hur skenorna ska sitta. Hembesök, mätning och offert är gratis i hela södra Skåne, för hem, kontor och skolor."
```

**referenser.md**

Före:
```
  eyebrow: "Vill ni ha ett liknande resultat?"
  heading: "Boka kostnadsfri rådgivning."
  body: "Vi besöker fastigheten, mäter på plats och föreslår en lösning som matchar både huset och hur ni faktiskt använder det. Hembesök och offert är kostnadsfria."
```
Efter:
```
  eyebrow: "Vill ni ha ett liknande resultat?"
  heading: "Vill du se hur det kan bli hos dig?"
  body: "Vi besöker dig, mäter på plats och föreslår en lösning efter hur du använder huset. Hembesöket och offerten är kostnadsfria."
```

**guider/isolerande-gardiner.md**

Före:
```
  heading: Vi visar dubbelväven på plats.
  body: Vid hembesöket har vi med oss prov på både enkelväv och dubbelväv så ni kan se skillnaden i hand. Plus en lampa för att visa hur mörkläggande isolerväv stoppar ljus.
```
Efter:
```
  heading: "Vi visar dubbelväven på plats."
  body: "Vid hembesöket har vi med oss prov på både enkelväv och dubbelväv, så att du kan känna skillnaden. Med en lampa visar vi hur mörkläggande isolerväv stoppar ljuset."
```

**guider/markis-eller-zip-screen.md**

Före:
```
  heading: Osäker på vilket som passar?
  body: Vi besöker fasaden, går igenom väderstreck, vindexponering och hur ni vill använda uteplatsen — och föreslår en lösning som matchar just er. Hembesök och offert är kostnadsfria.
```
Efter:
```
  heading: "Markis eller zip screen? Det avgör vi tillsammans på plats."
  body: "Vi besöker fasaden och går igenom väderstreck, vind och hur du vill använda uteplatsen. Sedan föreslår vi det som passar. Hembesöket och offerten är kostnadsfria."
```

**guider/motoriserat-solskydd.md**

Före:
```
  heading: Vi guidar er genom valet.
  body: Vid hembesöket går vi igenom vilka fönster som faktiskt drar nytta av motor, kollar om ni redan har Thread Border Router i hemmet, och föreslår motorfamilj utifrån befintligt smart hem-system.
```
Efter:
```
  heading: "Har du redan ett smart hem? Vi väljer motor som passar in."
  body: "Vid hembesöket går vi igenom vilka fönster som har nytta av motor, kollar om du har en Thread Border Router och föreslår motor efter det system du redan har."
```

**guider/plissegardin-eller-rullgardin.md**

Före:
```
  heading: Vi hjälper er välja per rum.
  body: Vid hembesöket går vi igenom alla fönster och föreslår plissé eller rullgardin utifrån användning, väderstreck och budget. Hembesök, mätning och offert kostar inget.
```
Efter:
```
  heading: "Vi hjälper dig välja rum för rum."
  body: "Vid hembesöket går vi igenom alla fönster och föreslår plissé eller rullgardin efter hur rummet används, väderstreck och budget. Hembesök, mätning och offert kostar inget."
```

**guider/rullgardin-eller-persienn.md**

Före:
```
  heading: Osäker på vilken som passar?
  body: Vi gör hembesök i Malmö och närliggande orter, går igenom rummens användning och föreslår rullgardin eller persienn — fönster för fönster. Hembesök, mätning och offert är gratis.
```
Efter:
```
  heading: "Rullgardin eller persienn? Vi går igenom fönstren med dig."
  body: "Vi gör hembesök i Malmö med omnejd och föreslår rätt produkt för varje fönster. Hembesök, mätning och offert är gratis."
```

**guider/skotsel-invandigt-solskydd.md**

Före:
```
  eyebrow: Service och reservdelar
  heading: Frågor om skötsel? Kontakta oss.
  body: Vi hjälper befintliga kunder med skötselråd, reservdelar och garantiärenden. Ring 040-18 11 00 eller mejla info@bellevuesolskydd.se så slår vi upp er installation.
```
Efter:
```
  eyebrow: Service och reservdelar
  heading: "Frågor om skötsel? Hör av dig."
  body: "Vi hjälper dig med skötselråd och reservdelar. Ring 040-18 11 00 eller mejla info@bellevuesolskydd.se."
```

**guider/solskydd-insyn.md**

Före:
```
  heading: Vi tittar på fönstret tillsammans.
  body: Vid hembesöket går vi runt fastigheten och tittar på var insynen faktiskt kommer in — gata, gångväg, motstående hus. Sedan föreslår vi den lösning som täcker exakt det området.
```
Efter:
```
  heading: "Vi tittar på insynen tillsammans med dig."
  body: "Vid hembesöket går vi runt huset och ser var insynen kommer in, från gatan, gångvägen eller grannhuset. Sedan föreslår vi en lösning som täcker just det."
```

**guider/solskydd-kontor.md**

Före:
```
  heading: Boka platsbesök för kontoret.
  body: Vi gör platsbesök hos företag i Malmö, Lund och hela södra Skåne. Mätning, vävprover på plats, dokumenterad brandklass — och specificerad offert per fönster. Kostnadsfritt.
```
Efter:
```
  heading: Boka platsbesök för kontoret.
  body: "Vi gör platsbesök hos företag i Malmö, Lund och hela södra Skåne. Du får mätning, vävprover på plats, dokumenterad brandklass och en offert per fönster, utan kostnad."
```

**guider/solskydd-sovrum.md**

Före:
```
  heading: Boka kostnadsfritt hembesök.
  body: Vi mäter sovrumsfönstret, går igenom var ljuset läcker in idag och föreslår en lösning som faktiskt mörklägger. Inkluderar motoralternativ och sidoskenor där det behövs.
```
Efter:
```
  heading: "Hur mörkt vill du ha det?"
  body: "Vi mäter sovrumsfönstret, ser var ljuset läcker in i dag och föreslår en lösning som mörklägger. Motor och sidoskenor finns med som alternativ där det behövs."
```

**guider/solskydd-varme.md**

Före:
```
  heading: Vi tittar på de varma fönstren tillsammans.
  body: Hembesöket är gratis. Vi går runt fasaden, identifierar vilka fönster som faktiskt är värmeproblem, och föreslår en kombination av invändigt och utvändigt skydd där det behövs.
```
Efter:
```
  heading: "Vilka rum blir för varma? Där börjar vi."
  body: "Hembesöket är gratis. Vi går runt fasaden, ser vilka fönster som släpper in mest värme och föreslår invändigt eller utvändigt solskydd där det gör skillnad."
```

**guider/valja-ratt-solskydd-inomhus.md**

Före:
```
  heading: Vi hjälper er välja per fönster.
  body: Vid hembesöket går vi igenom alla fönster, lyssnar på hur rummen används och föreslår produkter rum för rum. Hembesöket är gratis.
```
Efter:
```
  heading: "Vi går igenom rummen med dig, ett i taget."
  body: "Vid hembesöket tittar vi på alla fönster, lyssnar på hur du använder rummen och föreslår produkter rum för rum. Hembesöket är gratis."
```

**guider/vilket-solskydd-passar-bast.md**

Före:
```
  heading: Vi hjälper er välja rätt.
  body: Vi besöker fönstren, går igenom problemet ni vill lösa och föreslår en lösning som faktiskt fungerar i ert hus. Hembesök och offert är kostnadsfria.
```
Efter:
```
  heading: "Berätta vad du vill lösa. Vi vet vad som fungerar."
  body: "Vi tittar på fönstren, går igenom problemet och föreslår en lösning som fungerar hos dig. Hembesöket och offerten är kostnadsfria."
```

**guider/skotsel-invandigt-solskydd.md (brödtext)**

Före:
```
**Reservdelar och garanti.** Vi tillhandahåller reservdelar och hanterar garantiärenden. Spara fakturan så vi snabbt kan slå upp installationen vid kontakt.
```
Efter:
```
**Reservdelar.** Vi tillhandahåller reservdelar. Spara fakturan.
```


## Del 2: "du" och tankstreck, antal ändringar per fil

Mallar och komponenter har ingen text med ni eller er. De "—" som finns kvar där är dekorativa listmarkörer med `aria-hidden`.

| Fil | ni/er → du/din/ditt/dina | — → – |
|---|---|---|
| guider/index.md | 2 | 9 |
| guider/isolerande-gardiner.md | 6 | 26 |
| guider/markis-eller-zip-screen.md | 3 | 9 |
| guider/motoriserat-solskydd.md | 11 | 25 |
| guider/plissegardin-eller-rullgardin.md | 4 | 27 |
| guider/rullgardin-eller-persienn.md | 7 | 19 |
| guider/skotsel-invandigt-solskydd.md | 5 | 21 |
| guider/solskydd-insyn.md | 7 | 25 |
| guider/solskydd-kontor.md | 2 | 23 |
| guider/solskydd-sovrum.md | 14 | 25 |
| guider/solskydd-varme.md | 3 | 23 |
| guider/valja-ratt-solskydd-inomhus.md | 11 | 29 |
| guider/vilket-solskydd-passar-bast.md | 3 | 18 |
| index.md | 1 | 3 |
| insektsskydd-malmo.md | 3 | 22 |
| invandigt-solskydd.md | 8 | 35 |
| lamellgardiner-malmo.md | 6 | 30 |
| markiser-skanor-falsterbo.md | 0 | 5 |
| pergola-malmo.md | 6 | 41 |
| persienner-malmo.md | 4 | 31 |
| plissegardiner-malmo.md | 9 | 43 |
| referenser.md | 1 | 6 |
| rullgardiner-malmo.md | 14 | 35 |

Frågor där "ni" syftar på företaget och inte på läsaren är **inte** ändrade:
- "Vilken markis monterar ni oftast?"
- "Vad mäter ni vid hembesöket inför en markis?"
- "Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen från Staffanstorp?"
- "Vilka områden i södra Skåne arbetar ni i?" (insektsskydd och pergola)
- "Lamell- eller vävtak – hur väljer ni på plats?"
- "Var hjälper ni att välja?"
- "Hur lång leveranstid har ni?"

Tankstreck i intervall som "Lördag–Söndag" och "0°–140°" är redan kortstreck utan mellanslag och är kvar som de är.

## Del 3: processen och BRF, före och efter

**fonstermarkiser-malmo.md**

Före:
```
steps:
    - { title: "Mätning per fönster", text: "Vi mäter varje fönster och noterar väderstreck och infästning." }
    - { title: "BRF-underlag", text: "Behöver föreningen godkänna får du modell och kulör att visa styrelsen." }
    - { title: "Beställning", text: "När du har godkänt offerten beställer vi och bokar montage." }
    - { title: "Montage", text: "Egna montörer monterar och provkör en eventuell motor med testkabel." }
```
Efter:
```
steps:
    - { title: "Hembesök", text: "Vi mäter varje fönster och tittar på väderstreck och infästning." }
    - { title: "Offert", text: "Du får modell, väv och styrning skriftligt, med pris per fönster." }
    - { title: "Montage och provkörning", text: "Våra montörer sätter upp markiserna och provkör dem, motorer med testkabel." }
    - { title: "Fast elanslutning", text: "Med motor anlitar du en elektriker för den fasta anslutningen." }
```

**fonstermarkiser-malmo.md**

Före:
```
- question: "Vad kostar en fönstermarkis?"
```
Efter:
```
- question: "Behöver jag fråga min bostadsrättsförening?"
      answer: "Bor du i bostadsrätt behöver styrelsen oftast godkänna ändringar på fasaden, och markiser räknas dit. Fråga styrelsen innan du beställer. Äger du huset själv behövs inget godkännande från någon förening."
      link: { label: "Läs mer om markis i bostadsrätt", href: "/solskydd-brf-malmo/" }
    - question: "Vad kostar en fönstermarkis?"
```

**fonstermarkiser-malmo.md**

Före:
```
badges: ["Malmö & södra Skåne", "Egna montörer", "BRF-underlag"]
```
Efter:
```
badges: ["Malmö & södra Skåne", "Egna montörer", "Selt och Fönstermiljö"]
```

**insektsskydd-malmo.md**

Före:
```
- { title: "Montering", text: "Efter leverans, typiskt en halvdag till en hel dag." }
```
Efter:
```
- { title: "Montering", text: "Vi monterar när näten har levererats." }
```

**guider/markis-eller-zip-screen.md**

Före:
```
Vi tar fram ett underlag – modell, färg, infästning och bilder – som ni kan skicka till styrelsen.
```
Efter:
```

```

**guider/vilket-solskydd-passar-bast.md**

Före:
```
Egna montörer monterar, kalibrerar och kontrollerar funktionen – och städar efter sig.
```
Efter:
```
Egna montörer monterar och kontrollerar funktionen – och städar efter sig.
```


Övriga ProcessSteps har gåtts igenom. Inga fler tidslöften eller "ställs in på plats" om motor eller sensor finns kvar. Ordet "BRF-underlag" och löften om underlag eller bilder till styrelser finns inte längre i `src`.

## Ej utfört

Det första inklistrade uppdraget den här omgången, "El, vävfaktor, CTA-texter och 'du' på hela sajten", var avklippt efter del 2 punkt 3. Delarna om el och väv i det uppdraget var redan gjorda i förra omgången, se ovan. Resten av det uppdraget kom aldrig fram. CTA-texterna och "du" gjordes i stället enligt det senare uppdraget.
