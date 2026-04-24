# DESIGN_REFERENS.md

Snabbanalys av nuvarande live-sajt `https://www.bellevuesolskydd.se/` — en
tillfällig "under uppbyggnad"-version med kompakt men tydlig struktur. Syftet
med detta dokument är att dokumentera vad Next.js-sajten ska matcha i känsla
och rytm (utan att kopiera palett eller typografi — den är låst).

Källa: `index.html` i repo-roten (samma fil som serveras från GitHub Pages).

---

## Struktur i ordning

1. **Header** — sticky, vit bakgrund, logotyp centrerad, 1 px underkant-border.
2. **Hero** — mörk charcoal-bakgrund (`#434952`) med hero.webp som overlay på
   30 % opacitet. H1 "Ny hemsida under uppbyggnad", p-text, CTA-knapp i teal.
   Höjden är innehållsstyrd (~5 rem topp, 4.5 rem botten).
3. **Trust-strip** — beige-light bakgrund (`#f4f3ef`), 1 px underkant, centrerat
   innehåll, `flex` med `gap: 3rem`. Exakt **2 signaler**:
   - "Över 40 år i branschen" (klock-ikon)
   - "Testfakta: \"Bäst i Test\"" (check-in-ram-ikon)
4. **Produktgrid** — sektion `.products` med vit bakgrund, padding `4.5 rem 2 rem`.
   - Rubrik "Våra solskyddslösningar" + underrubrik "Måttanpassade produkter för hem och företag med material av högsta kvalitet."
   - Grid: `auto-fill minmax(280px, 1fr)` → 3 kort per rad på desktop, 2 på
     medelstor skärm, 1 på mobil.
   - **6 kort**: Persienner, Markiser, Zip Screen & Solfilm, Lamellgardiner, Plissegardiner, Rullgardiner.
   - Kort: bild `height: 210px object-fit: cover`, body med h3 + p. Bg `warm-white` (`#faf9f7`), 1 px grå border, radius 8 px, hover lyfter 3 px + skugga.
   - Persienner-kortet har **ribbon "Bäst i Test"** i teal, roterad -45° uppe till vänster.
5. **Kontakt-sektion** — id `kontakt`. Charcoal bakgrund, vit text.
   - Rubrik "Kontakta oss" + underrubrik "Boka hembesök, begär offert eller ställ en fråga — vi återkommer snabbt."
   - 2-kolumn layout `1fr 1fr`: formulär vänster, info höger.
   - Formulär: transparent input-bakgrund (`rgba(255,255,255,0.07)`), border med 15 % vit, teal focus-ring, fält: Namn + Telefon (1-rad), E-post, Intresserad av (select med 8 alternativ), Meddelande. Submit-knapp i teal.
   - Info-sida: rubrik "Vill du hellre ringa eller maila?", telefon `0707-923 651` (livens gamla nummer), e-post, kort förklaring om kostnadsfria hembesök.
6. **Footer** — beige-light, centrerad, en rad: "Ny hemsida under uppbyggnad. **Bellevue Solskydd** © 2026".

---

## Var Next.js-sajten är tunnare än live-referensen

| Område | Live | Next.js (före denna körning) |
|---|---|---|
| Trust-strip | 2 signaler, stram layout | 6 signaler varav 3 ska bort (garanti, patent, 500k-siffra) |
| Hero | Charcoal + fotobild-overlay, tydlig bildkänsla | Gradient + linjemönster, ingen fotoreferens |
| Produktgrid | 6 kort, stor bild (210 px), ribbon-badge | 8 indoor + 7 outdoor kort, men samma layout — mycket innehåll men ingen "ribbon" för Bäst i Test |
| Rytm / alternerande bakgrunder | Vit → beige → vit → charcoal → beige | Charcoal → light-bg → light-bg → teal → vit |
| Kontaktsektion | Charcoal-bakgrund ger tydligt avslut | Vit bakgrund → mindre kontrast |

---

## Avvikelser som designlåset tvingar oss hålla

- Palett: live använder **charcoal #434952 + teal #7ebec5 + beige #e5dfd8 + warm-white #faf9f7**. Next.js-sajten är låst till **#2C2C2C charcoal + #4ABFBF teal + #F8F8F8 light-bg**. Matchar i funktion men inte i faktiska färger. Ingen ändring i paletten.
- Typografi: live använder system font stack. Next.js använder **Raleway + Open Sans**. Ingen ändring.
- "Ribbon"-badge över Persienner-kortet är ett designtillägg; får bara göras om det passar den låsta paletten och inte kräver nya CSS-klasser.

---

## Takeaways för rytm-höjning

1. **Trim trust-strip till 4 signaler.** Ta bort garanti, patent, 500k-siffra.
   Behåll Sedan 1982, Bäst i Test. Lägg till 2 neutrala: Måttanpassat, Egen montering.
2. **Gör Persienner-kortet visuellt tydligare** på startsidans produktgrid —
   någon form av "Bäst i Test"-badge i den låsta paletten.
3. **Använd specifika orter** i stället för "hela södra Skåne" i geografi-
   formuleringar.
4. **Ingen ny CSS-klass eller komponent behövs** för att städa texterna — det
   är det största av städjobbet.
