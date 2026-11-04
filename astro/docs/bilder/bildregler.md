# Bildregler, 2026-11-04

Gäller alla bilder på sajten.

## Modellbilder

- **Vad en modellbild är.** En modellbild är tillverkarens produktfoto där miljön har bytts ut med AI. Produkten ska stämma med originalet: kassett, armar, profiler, lameller, skenor och proportioner. Syftet är att sajten inte ska använda samma bild som alla andra återförsäljare.
- **Alt-text.** En sådan bild räknas som en bild på modellen. Alt-texten får därför ha tillverkare och modell, enligt mallen: tillverkare + modell + produkttyp + situation.
- **Källbild.** Varje AI-modellbild ska ha en känd källbild, alltså tillverkarens original. Kopplingen mellan AI-bild och källbild står i `ai-kallor.csv`.
- **Status.** En AI-modellbild har en av tre statusar:
  - **STÄMMER:** produkten matchar källbilden. Alt-texten får ha tillverkare och modell.
  - **AVVIKER:** AI har ändrat produkten, till exempel genom annan kassett, fler armar eller fel lameller. Bilden räknas som fel motiv, och alt-texten ska vara neutral tills en ny bild finns.
  - **INGEN KÄLLA:** originalet saknas. Alt-texten ska vara neutral.
- **Tillval.** Tillval som tillverkaren har, till exempel sidoscreen, LED eller glasväggar, får finnas med i bilden. Detaljer som modellen inte har får inte finnas med.

## Herobilder

- Herobilder ska visa den riktiga produkten. AI får bara byta miljö.
- Om AI inte återger produkten exakt används tillverkarens original.
- Produkter utan referensbild genereras inte.

## Personer

- AI-bilder får visa människor i stämningsbilder.
- AI får aldrig visa personer som framställs som Bellevues personal eller kunder, till exempel i tröjor med logga, som "våra montörer" eller "hos kund".
- AI-bilder används aldrig som referensbilder. Om oss, referenser och bilder på kundprojekt ska vara riktiga foton.

## Alt-texter

- **Innehåll:** svenska, beskriv det som syns, högst 125 tecken. Aldrig "Bild på" eller "Foto av" först.
- **Inget som inte syns:** inga ortnamn och inga påståenden om garanti, kvalitet, "bäst", "vår montering" eller "hos kund".
- **Dekorativa bilder:** `alt=""` och `aria-hidden="true"`.
- **Olika bilder** får inte ha samma alt-text. Samma fil får ha samma alt-text på flera sidor.
- **Kontroll:** `scripts/seo-audit/alt-check.py` kontrollerar reglerna i den byggda sajten. Samma regler gäller för `og:image:alt`.
