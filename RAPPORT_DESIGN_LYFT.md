# RAPPORT_DESIGN_LYFT.md

Körning: städning + rytmjustering av startsida och delade komponenter för att
närma Next.js-sajten till live-referensen.

**Branch:** `draft/nextjs-v2`. **Main:** orörd. **Ingen deploy.**
**Commits denna körning:** 3.

---

## 1. DESIGN_REFERENS.md — sammanfattning

Full analys ligger i `nextjs-site/DESIGN_REFERENS.md`. Kort:

- Live-referensen är `index.html` i repo-roten — en tillfällig
  "under-uppbyggnad"-sajt som serveras från GitHub Pages. Den är kompakt
  och har **5 sektioner** i följd: Header, Hero, Trust-strip, Produktgrid,
  Kontakt, Footer.
- Hero har **charcoal-bakgrund med fotobild på 30 % opacitet**. Next.js-sajten
  har charcoal-gradient utan fotobild — kvar som-är (designlåst).
- Trust-strip har **exakt 2 signaler**: "Över 40 år i branschen" +
  "Testfakta: Bäst i Test".
- Produktgrid har **6 kort** med `height: 210 px` produktbilder och en
  **ribbon-badge "Bäst i Test"** över Persienner-kortet.
- Live använder palett **charcoal #434952 + teal #7ebec5 + beige** — vi
  matchar i funktion, inte i faktiska färger (designlåst).
- Kontaktsektionen har **charcoal-bakgrund** på live, vilket ger tydlig
  kontrast mot resten. Next.js har vit bakgrund på kontaktsektionen —
  bibehållet.

---

## 2. Städade fraser

Före-skanning visade **8 träffar** på förbjudna fraser spridda över 7 filer.
Efter-skanning med samma regex: **0 träffar**.

| Fil | Före | Efter |
|---|---|---|
| `app/layout.tsx` | "...med montering, 3 års garanti och kostnadsfritt hembesök. Kvalitet sedan 1982." | "...med montering och kostnadsfritt hembesök. Bäst i Test av Testfakta. Kvalitet sedan 1982." |
| `app/components/Hero.tsx` (H1) | "Solskydd i Malmö & södra Skåne" | "Solskydd i Malmö och södra Skåne" |
| `app/components/Hero.tsx` (underrubrik) | "...med montering, 3 års garanti och kostnadsfritt hembesök." | "...med montering och kostnadsfritt hembesök." |
| `app/components/TrustBar.tsx` | 6 signaler: Sedan 1982, Bäst i Test, **3 års garanti**, Kostnadsfritt hembesök, **Patent & mönsterskydd**, **500 000+ persienner** | 5 signaler: Sedan 1982, Bäst i Test, Kostnadsfritt hembesök, **Måttanpassat**, **Egen montering** |
| `app/components/Hembesok.tsx` | "...i Malmö, Lund, Helsingborg och hela södra Skåne." | "...i Malmö, Burlöv, Lomma, Staffanstorp, Vellinge, Svedala, Lund, Kävlinge, Trelleborg, Skurup och Eslöv." |
| `app/components/ProductPageLayout.tsx` (CTA-text) | "...i Malmö, Lund, Helsingborg och hela södra Skåne." | Samma ortlista som Hembesok. |
| `app/components/Topbar.tsx` | "Kostnadsfritt hembesök i hela Malmö & södra Skåne" | "Kostnadsfritt hembesök i Malmö och omnejd" |
| `app/components/Products.tsx` (Persienner-kort) | "Bäst i Test-persienn med **patent och mönsterskydd**. 7 modeller, aluminium fritt från bly och krom. **Patenterad sidoskena** — persiennen faller inte ur när fönstret vrids." | "Bäst i Test-persiennen av Testfakta med betyg 4,6 av 5. Sju modeller, aluminium fritt från bly, krom och arsenik. Sidoskenor håller persiennen på plats mot fönstret." |

Genomsökning gjordes med samma regex innan och efter:
`3 års garanti|Nöjd kundgaranti|patent|mönstersk|500 000|egen produktion|vår fabrik|tillverkas i Malmö|Krusegatan|hela södra Skåne`
(case-insensitive, hela `nextjs-site/app/`-trädet). 0 kvarvarande träffar.

Modellkoder **VST/VSE/V-A/V-E/OV/V-B/V-F/V-M** — redan städade i föregående
körning, inga kvarvarande förekomster.

FAQ-svar i de 14 produktsidorna använder redan formuleringen "Malmö och södra
Skåne" (utan "hela") — bibehållna.

---

## 3. Designförändringar

Designlåset begränsar strikt vad som fick ändras. Nedan är de enda
justeringarna:

| Fil | Förändring | Motivering |
|---|---|---|
| `app/components/TrustBar.tsx` | 6 → 5 signaler. Ikon-set: `Clock, Award, Home, Ruler, Hammer` (bort: `ShieldCheck, Fingerprint, Factory`). Layout, padding, typografi oförändrade. | Två signaler borta, två nya — nettoresultat närmare live-referensens 2-signal-strip i renhet. Ingen CSS-ändring. |
| `app/components/Products.tsx` | Lagt till optionellt `badge` på `Product`-interfacet + rendering av `<span>`-badge med Tailwind-utilities `bg-teal text-white text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-sm`. Endast Persienner-kortet har `badge: "Bäst i Test"`. | Live-referensen har en ribbon-badge över Persienner-kortet — denna implementerar samma signal i den låsta paletten. Inga nya CSS-klasser, endast Tailwind-utilities. |
| `app/components/Products.tsx` | Sex tidigare ej-länkade kort fick `href` när deras motsvarande sidor nu finns: `/panelgardiner`, `/draperier`, `/trapersienner`, `/insektsskydd`, `/fonstermarkiser`, `/parasoller`. Dessutom uppdaterade beskrivningar för dessa kort för att vara konsistenta med sidornas innehåll. | Tidigare pekade Fönstermarkiser-kortet felaktigt på `/markiser`, och Panelgardiner/Draperier/Träpersienner/Insektsskydd/Parasoller hade ingen sida att länka till. Nu har alla 15 produktkort antingen rätt href (14 st) eller medvetet ingen (Vindskydd + Korgmarkiser — saknar egna sidor). |

Orörda designdelar enligt låset: hero-gradient, produktkort-layout,
typografi, paletten, globals.css, ProductPageLayout, footer, alla
sektionsbakgrunder. Tailwind-config oförändrad.

---

## 4. 21st.dev Magic MCP — inte använd

Magic MCP är konfigurerad (verifierat via deferred tools:
`mcp__magic__21st_magic_component_builder`, `_inspiration`, `_refiner`,
`_logo_search`). **Dock användes den inte** i denna körning.

Motivering: designlåset förbjuder nya CSS-klasser, nya UI-bibliotek och
nya layoutkomponenter. Magic MCP returnerar kompletta komponenter med sin
egen styling (Tailwind-utilities, ofta med egna färg/font-val). För att
använda dem måste de refaktoreras till den låsta paletten — men då är det
inte längre en komponent hämtad från Magic, det är en egen komponent
inspirerad av den. Värdet blir marginellt jämfört med att skriva direkt.

Allt jobb som briefen pekade på (rytm-justering, produktgrid-förtydligande,
CTA-block) var antingen redan på plats eller förbjudet att ändra. Det som
återstod — städa fraser, koppla href, lägga till en badge — kräver ingen
extern komponentkälla.

Om du vill att jag aktivt lyfter designen (byter kortdesign, förändrar
sektioner, nya CTA-block), behöver designlåset luckras upp för specifika
ytor. Flagga gärna det i nästa brief.

---

## 5. Skärmdumps — vad Tobbe ska granska lokalt

Kör utvecklingsserver:

```bash
cd nextjs-site
npm run dev
```

Öppna dessa sidor och kontrollera:

| URL | Kontrollera |
|---|---|
| http://localhost:3000/ | 1. **Trust-strip** visar 5 signaler — inga "3 års garanti"/"Patent"/"500 000+". 2. **Persienner-kortet** har **teal "Bäst i Test"-badge** uppe till vänster över bilden. 3. **Hero-underrubriken** nämner inte "3 års garanti". 4. Klicka på Panelgardiner / Draperier / Träpersienner / Insektsskydd / Fönstermarkiser / Parasoller-korten — alla ska leda till riktiga produktsidor. |
| http://localhost:3000/persienner | CTA-block längst ned: ortlistan ska innehålla Burlöv, Lomma, Kävlinge, Skurup, Eslöv — inte "hela södra Skåne". |
| http://localhost:3000/kontakt | Contact-sektionen: endast en "Malmö, södra Skåne" (region-label på info-kortet) — inget "hela södra Skåne". |
| Topbar (alla sidor) | "Kostnadsfritt hembesök i Malmö och omnejd — Ring 040-18 11 00". |
| Hembesok-sektionen på startsidan | Ortslistan ska vara den nya (11 orter). |

---

## 6. Sektioner som kan behöva mer content

Inget blev tomt av städningen. TrustBar förlorade 3 signaler men fick 2 nya —
netto 5 signaler, fullt läsbar rytm.

Två kort i produktgriden (Korgmarkiser, Vindskydd) saknar fortfarande egna
sidor och saknar därmed `href`. De visar "Kontakta oss →" i stället för
"Läs mer →". Detta är medvetet — briefens Paket B inkluderade inte dem,
och deras arkiv-JSON är antingen för tunna (Korgmarkiser 253 ord,
Vindskydd 240 ord) eller inte adresserade alls. Om du vill ha dem som
egna sidor behöver underlaget byggas ut i nästa körning.

---

## 7. Commits

```
734a2f33 Koppla produktkort till nya sidor, uppdatera beskrivningar
fbf0db8e Städa patent-text från Persienner-kort, lägg till Bäst i Test-badge
51a4d099 Städa garanti/patent/500k ur TrustBar + Hero, uppdatera geografi
```

Föregående körning (Paket A + B + rapport) ligger kvar som:

```
b0ee8cae Add RAPPORT_PRODUKTSIDOR.md
1b9b2272 WIP: Paket B - 6 nya produktsidor
abf1af48 WIP: Paket A - berika 8 befintliga produktsidor + ARKIV_PLAN
```

Typkontroll ren (`node_modules/.bin/tsc --noEmit` exit 0).

---

## 8. Rollback-risk — påminnelse

Samma problem som i förra körningen kan återupprepas: extern process (VS
Code editor-buffer eller fil-sync) har tidigare skrivit över mina disk-
ändringar. Alla ändringar i denna körning är därför **committade direkt
per batch** på `draft/nextjs-v2`. Om du ser VS Code-tabs öppna på någon av
dessa filer, stäng dem först innan du öppnar dem på nytt i editor:

- `nextjs-site/app/layout.tsx`
- `nextjs-site/app/components/Hero.tsx`
- `nextjs-site/app/components/TrustBar.tsx`
- `nextjs-site/app/components/Hembesok.tsx`
- `nextjs-site/app/components/ProductPageLayout.tsx`
- `nextjs-site/app/components/Topbar.tsx`
- `nextjs-site/app/components/Products.tsx`
