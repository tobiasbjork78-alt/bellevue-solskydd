# RAPPORT — FAS 3: Rådgivningswizard + guider + scroll-fix + mobilmeny

Branch: `draft/nextjs-v3`
Build: `npm run build` lyckas — 12 statiska sidor (+ metadata-routes).

## Nya sidor

| URL | Typ | Ord (HTML) |
|---|---|---|
| `/kostnadsfri-radgivning/` | Wizard (client) | 137 (server-renderad shell — innehåll fylls på klient) |
| `/guider/` | Listsida | 178 |
| `/guider/markis-eller-zip-screen/` | Artikel | 784 |
| `/guider/vilket-solskydd-passar-bast/` | Artikel | 837 |

## Wizardens logik (input → output)

Frågorna lagras som svar-objekt med nycklar `lage`, `problem`, `yta`,
`placering`, `prio`. Rekommendationen returneras av `recommend(answers)`
i `app/kostnadsfri-radgivning/Wizard.tsx`. Kort if/else, inga vikter.

| Scenario (svar) | Rekommendation |
|---|---|
| problem = "Mörkläggning (sovrum)" | Rullgardiner + Plisségardiner |
| yta = "Takfönster" | Plisségardiner |
| yta = "Terrass / uteplats" eller problem = "Vill förlänga uteplatsen" | Pergola + Markiser |
| yta = "Balkong" | Markiser + Persienner |
| problem = "Värme och sol" + placering = "Utvändigt" | Zip screen + Markiser |
| problem = "Värme och sol" + placering = "Invändigt" | Plisségardiner + Rullgardiner |
| problem = "Värme och sol" + yta = "Stort glasparti" | Zip screen + Markiser |
| problem = "Värme och sol" (övrigt) | Zip screen + Plisségardiner |
| problem = "Insyn" | Persienner + Plisségardiner |
| problem = "Bländning / skärmarbete" | Persienner + Plisségardiner |
| Default-fall | Persienner + Plisségardiner |

`prio` (Design / Funktion / Pris / Allt) och `lage` (Söder / Väster / etc.)
samlas men styr inte rekommendationen — de skickas som hidden fields i
formuläret för att ge en mer komplett bild i förfrågan till säljaren.

Resultatvyn visar 1–2 produktkort (länk till respektive produktsida) +
inbyggt kontaktformulär (namn, telefon, e-post + alla wizardsvar som
hidden fields). Web3Forms `access_key = "YOUR_KEY_HERE"` (placeholder).

UX-detaljer:
- **Progress** — tunn linje i `bg-brand-brass`, fyller från 0 till 100%.
- **Aktiv RadioCard** — `border-brand-green` + check-cirkel + bg-tint.
- **Knappar** — "Nästa" är primary (deaktiverad tills svar valts), "Tillbaka" är ghost.
- **Resultat** — produktkort i `bg-canvas` + formulär i samma container.
- **Reset** — "Börja om"-länk i resultatvyn nollställer state.

## Guider — fil och struktur

- `nextjs-v3/app/guider/layout.tsx` — Delad layout (Header + main + Footer + StickyMobileCTA) för hela `/guider/`-trädet.
- `nextjs-v3/app/guider/page.tsx` — Listsida med två guidekort.

### Guide A — `/guider/markis-eller-zip-screen/`

| Egenskap | Värde |
|---|---|
| H1 | "Markis eller zip screen?" |
| Eyebrow | "Jämförelse" |
| Ord (HTML) | 784 |
| Sektioner | Hur fungerar de? · Värme och bländning · Vind och väder · Utsikt och insyn · Estetik och fasad · Kan man kombinera? · Sammanfattning (jämförelsetabell) |
| Jämförelsetabell | 6 rader (värmeskydd, vindtålighet, utsikt, estetik, lämplighet, pris) |
| FAQ | 3 frågor (kostnad, brf-godkännande, motorisering) |
| Schemas | Article + FAQPage + BreadcrumbList |

### Guide B — `/guider/vilket-solskydd-passar-bast/`

| Egenskap | Värde |
|---|---|
| H1 | "Vilket solskydd passar bäst?" |
| Eyebrow | "Översikt" |
| Ord (HTML) | 837 |
| Sektioner | Börja med problemet · Invändigt vs utvändigt · Produktöversikt (6 produkter med länkar) · Malmö-specifikt · Vår process · CTA-blockering till `/kostnadsfri-radgivning/` |
| Produktreferenser | Persienner, Plisségardiner, Rullgardiner, Markiser, Zip screen, Pergola — alla länkade |
| FAQ | 3 frågor (kombinera produkter, pris, leveranstid) |
| Schemas | Article + FAQPage + BreadcrumbList |

`articleSchema()` lades till i `nextjs-v3/lib/schema.ts` — skapar
Article-noder med `headline`, `description`, `url`, `mainEntityOfPage`,
`datePublished`, `dateModified`, `inLanguage: sv-SE`, `author` och
`publisher` refererande till Organization.

## Scroll-reveal — status

Hooken `useReveal` (oförändrad) hittar alla `.reveal`-element, grupperar
per parentElement och staggrar 100 ms × index. Triggas via
IntersectionObserver med threshold 0.15. `prefers-reduced-motion`
respekteras i hook + CSS.

| Sektion på `/` | Reveal-element |
|---|---|
| HeroArchitectural | Eyebrow, h1, Divider-wrap, Lead, knappar (5 element, staggrade) |
| LocalProofSection | 4 TrustBadges (lade till `className="reveal"` i fas 3) |
| ProductCategoryGrid | 6 ProductCards (varje kort har `reveal` inbyggt; 3-kort-grid → 0/100/200ms stagger per rad) |
| ConsultationCTA | Inga reveal-element (statiskt — visas alltid när scrollat dit) |

`RevealProvider` är monterad på `app/page.tsx` och kör hooken vid mount.
Inget krävde fix — reveal triggade redan korrekt på Hero och ProductCard.
Lade bara till `reveal` på TrustBadges per krav.

## Mobilmeny — focus-trap

`nextjs-v3/components/sections/Header.tsx` uppdaterad:

- **Escape** — `keydown` på document stänger menyn (`event.key === "Escape"`).
- **Tab-trap** — focusables (a/button/[tabindex≥0]) inom overlay listas; Shift+Tab på första elementet → fokus till sista; Tab på sista → fokus till första.
- **Initial fokus** — första focusable i menyn fokuseras när menyn öppnas.
- **Restore** — Escape eller stängknappen återlämnar fokus till hamburger-knappen via ref.
- **A11y** — overlay har `role="dialog"`, `aria-modal="true"`, `aria-label="Huvudmeny"`. Hamburger-knappen har `aria-expanded={open}`.
- **Body scroll-lock** — `document.body.style.overflow = "hidden"` när menyn är öppen (fanns redan).

## Verifierad körning

```
npm run build
✓ Compiled successfully
✓ Generating static pages (15/15)

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /guider
├ ○ /guider/markis-eller-zip-screen
├ ○ /guider/vilket-solskydd-passar-bast
├ ○ /kontakt
├ ○ /kostnadsfri-radgivning
├ ○ /markiser-malmo
├ ○ /pergola-malmo
├ ○ /persienner-malmo
├ ○ /plissegardiner-malmo
├ ○ /rullgardiner-malmo
└ ○ /zip-screen-malmo
```

## Kvarstående efter fas 3

- `WEB3FORMS_KEY = "YOUR_KEY_HERE"` placeholder finns nu på två
  ställen: `/kontakt/` och `/kostnadsfri-radgivning/` (Wizard).
- `/om-oss/` är fortfarande länkad i Header men inte byggd — ger 404.
- "Tjänster"-kolumnen i Footer pekar fortfarande på `/kontakt/`.
- Mobilmenyns focus-trap är robust nog för standardanvändning men
  hanterar inte dynamiskt tillagda focusables (vi har inga sådana idag).
- Inga bilder — typografi och färg bär designen per spec.
