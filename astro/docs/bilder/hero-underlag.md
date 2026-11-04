# Hero-underlag, 2026-11-04

Mappen ligger i `C:\Users\tobia\Desktop\Kunder\Bellevue\Bellevue site bilder\hero-underlag\`. Uppdraget angav `Desktop\Bellevue site bilder\`, men den mappen finns inte, utan bildmappen ligger under `Kunder\Bellevue\`.

Pergolans hero (video och poster) behålls och har inget underlag. Enligt det förtydligade beskedet får AI-bilder visa människor i stämningsbilder.

## 1. Hur heron renderas

Uppmätt med Playwright i den byggda sajten. Textblocket är H1 med ingress, knappar och märken. Brödsmulorna räknas för sig.

| Mall (sidor) | Vy | Bildyta | object-position | Synlig del av en 16:9-bild | Här ligger texten | Overlay |
|---|---|---|---|---|---|---|
| Home (`/`) | 1440×900 | 1440×900 (1,6:1) | 50% 50% | bredd 5–95 %, hela höjden | centrerad: bredd 28–72 %, höjd 24–80 % | gradient från vänster, 95 % → 20 % svart |
| Home (`/`) | 390×844 | 390×844 (0,46:1) | 50% 50% | bredd 37–63 %, hela höjden | bredd 6–94 %, höjd 22–83 % | gradient nedifrån, 95 % → 40 % |
| Markiser-hero (markiser, fönstermarkiser, insektsskydd) | 1440×900 | 1440×702 (2,05:1) | 50% 50% | hela bredden, höjd 7–93 % | till vänster: bredd 13–59 %, höjd 24–86 % (beror på H1-längd). Brödsmulor på höjd 6–9 % | gradient från vänster, 80 % → 5 % |
| Markiser-hero | 390×844 | 390×591 (0,66:1) | 50% 50% | bredd 31–69 %, hela höjden | bredd 6–94 %, höjd från 15–91 % (insektsskydd) till 39–91 % (markiser) | gradient nedifrån, 85 % → 25 % |
| ZipScreen | båda | som markiser-heron | 50% 50% | som markiser-heron | som markiser-heron | bilden har dessutom opacity 0,55 |

**Säker yta**, alltså den yta som syns och inte täcks av text i båda vyerna:
- **Markiser-heron:** bredd 50–68 %, höjd 8–40 %. Vänstra 45 % och nedre 55 % ska vara lugna.
- **Startsidan:** bredd 52–63 %, höjd 4–22 %. Mitten (bredd 28–72 %, höjd 24–80 %) ska vara lugn.
- **Invändiga sidor:** de har ingen hero i dag. Prompterna följer markiser-herons säkra yta, så att bilden fungerar om den mallen används.
- I mobilvyn syns bara en smal remsa i mitten av en liggande bild.

## 2. Stilreferenser

**Utvändigt:** `astro/public/images/zip-screen/selt-zipcreen-120-header.webp` (AI, 1672×941). Den har lågt varmt sidoljus från vänster, mjuk kontrast utan HDR-kanter, naturliga färger och inga personer, och den används redan på sajten. Pergolans poster valdes bort, eftersom den är tagen i skymning medan prompterna beskriver eftermiddagssol.

**Invändigt:** `astro/public/images/cards/card-plisse.webp` (källa okänd, 1086×1338 efter att loggan beskurits bort). Det är den enda interiörbilden i materialet med samma låga, varma sidoljus och naturliga färger.

Andra interiörbilder valdes bort:
- `card-rullgardiner.webp` är tagen i kvällsmörker.
- Pagunettes bilder är platta och har stadsutsikt.
- Fotona från Direkt Solskydd och Svealands solskydd är återförsäljarbilder.

Eftersom card-plisse själv visar en plissé säger varje interiörprompt att bara ljus och färg ska hämtas ur den.

## 3. Underlag per sida

### /

- **Varför ny hero:** Heron är AI, 1942×809: höjden når inte 900 (FÖR LÅG UPPLÖSNING). Startsidan visar en terrassmarkis i dag. Den nya bilden har Harol Cadiz, så att den inte blir samma modell som markiser-sidan.
- **Miljö:** Trä
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/startsida/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferens för utvändiga bilder.
  - `02-produkt.jpg` ← `bildbank/harol/cadiz/Cadiz-1-1.jpg`: Harols rendering av Cadiz. Den rundade helkassetten, armarna och frontprofilen syns.
  - `03-miljo.jpg` ← `bildbank/harol/cadiz/Cadiz-1-1024x576.jpg`: Samma Cadiz på avstånd mot villan. Visar storleken mot huset.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. Image 2 = product reference. Images 3–4 (optional) = setting or detail.
SUBJECT: A retractable folding-arm terrace awning with a full cassette: a rounded aluminium cassette that closes completely around the fabric and arms when retracted. Two folding arms with visible elbow joints, a straight front profile and a short straight valance. Copy the construction and proportions exactly from image 2. Frame in matt white. Fabric: plain solid light grey acrylic, no stripes, no pattern, no logo, no text.
SCENE: The awning is extended over a timber deck at the back of a detached house clad in white painted horizontal wooden boards, with large glass doors. A low lounge sofa and a side table in the shade, a potted olive tree, a lawn and birch trees behind. No people.
LIGHT: Late summer afternoon, low warm sun from the left. The awning casts a clear, deep shadow over the sofa – the shade is the point of the image. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.6 m), three-quarter view, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and centres the text over it. Let the cassette and front profile run across the top fifth of the frame so that they pass through the zone from 52% to 63% of the image width and 4% to 22% of the image height – on mobile only that central strip is visible above the text. Keep the middle of the frame, from 28% to 72% wide and 24% to 80% high, calm and fairly dark (shade under the awning, the deck) because the headline sits there. The right edge, beyond 72% of the width, may show an arm and the shaded sofa.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, lens flare, oversaturated sky, text, watermarks, brand logos, people posing.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The awning extends smoothly out of the cassette to fully open in about 5 seconds and the shadow spreads across the deck. Only the birch leaves move slightly in a light breeze.
```

### /markiser-malmo/

- **Varför ny hero:** Ingår alltid enligt uppdraget. Heron är i dag en osynlig platshållare (SAKNAS).
- **Miljö:** Puts
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/markiser-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferens för utvändiga bilder.
  - `02-produkt.webp` ← `bildbank/selt-aluprof/palladio/palladio_RAL_9005.webp`: Aluprofs frilagda rendering av Palladio, 4093×2894. Halvkassetten, båda armarna med armbågsled, frontprofilen och kappan syns tydligare här än i någon annan Palladio-bild.
  - `03-miljo.webp` ← `bildbank/selt-aluprof/palladio/2011_palladio_dom_jednorodzinny_czarnowasy_10_FIX.webp`: Palladio monterad över en villaterrass. Visar proportionen mot huset.
  - `04-detalj.webp` ← `bildbank/selt-aluprof/palladio/9576701.jpg.webp`: Närbild av halvkassetten.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. Image 2 = product reference. Images 3–4 (optional) = setting or detail.
SUBJECT: A retractable folding-arm terrace awning with a semi-cassette: an aluminium hood covers the fabric roller from above. Two folding arms with visible elbow joints, a straight front profile and a short straight valance. Copy the construction and proportions exactly from image 2. Frame in textured anthracite grey. Fabric: plain solid warm sand acrylic, no stripes, no pattern, no logo, no text.
SCENE: The awning is fully extended over a stone-paved terrace at the back of a detached house with a light rendered facade and large black-framed glass doors. A simple wooden dining table with chairs stands in the shade. Planters with grasses, a lawn and a low hedge behind. No people.
LIGHT: Late summer afternoon, low warm sun from the left. The awning casts a clear, deep shadow over the table – the shade is the point of the image. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.6 m), three-quarter view, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the semi-cassette and one elbow joint inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the awning extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (plain rendered facade or shade) because the headline sits there on desktop, and keep the lower 55% simple (paving, the table in shadow, lawn) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, lens flare, oversaturated sky, text, watermarks, brand logos, people posing.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The awning extends smoothly from closed to fully open in about 5 seconds and the shadow spreads across the terrace. Only leaves move slightly in a light breeze.
```

### /fonstermarkiser-malmo/

- **Varför ny hero:** Heron är en osynlig platshållare (SAKNAS). Huvudmodell är Selt Italia Box, som är den första modellen med bild och har kassett.
- **Miljö:** Tegel
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/fonstermarkiser-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferens för utvändiga bilder.
  - `02-produkt.webp` ← `bildbank/selt-aluprof/italia-box/2006-06_Italia_Kasetowa_Dom_Opole_05+-+RETUSZ.webp`: Italia Box monterad över en altandörr. Kassetten och båda fallarmarna syns.
  - `04-detalj.webp` ← `bildbank/selt-aluprof/italia-box/91974Italia_kasetowa__kaseta.jpg.webp`: Närbild av kassetten och armfästet.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. Image 2 = product reference. Images 3–4 (optional) = setting or detail.
SUBJECT: A drop-arm window awning with a cassette: a slim rectangular aluminium cassette fixed to the wall directly above the window holds the rolled fabric. Two straight drop arms are hinged at the sides of the window and hold the front profile out from the facade at an angle of about 45°. No folding elbow arms. Copy the construction and proportions exactly from image 2. Frame in white. Fabric: plain solid anthracite grey acrylic, no stripes, no pattern, no logo, no text.
SCENE: One awning over a large white-framed window on the gable of a red-brick detached house. Below the window a narrow gravel bed with lavender and a low clipped hedge. A light lawn in front. No people.
LIGHT: Late summer afternoon, low warm sun from the left. The awning throws a clear shadow over the upper half of the window glass – the shaded glass is the point of the image. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.6 m), three-quarter view of the gable, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the cassette and the upper end of one drop arm inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window and awning extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (plain brick wall in shade) because the headline sits there on desktop, and keep the lower 55% simple (gravel bed, hedge, lawn) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, lens flare, oversaturated sky, text, watermarks, brand logos, people posing.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The fabric unrolls from the cassette and the arms swing out to the angle in about 4 seconds while the shadow moves down over the glass. Only the lavender moves slightly in a light breeze.
```

### /insektsskydd-malmo/

- **Varför ny hero:** Heron är en osynlig platshållare (SAKNAS). Nytt huvudmotiv är MTH Plissénätdörr Exclusive i en öppen altandörr en sommarkväll. Bildbanken har bara en menyikon för plissénätdörren, så konstruktionen beskrivs i texten och 02-produkt används inte. Den tidigare referensen Kök-1.jpg är borttagen ur mappen.
- **Miljö:** Interiör mot trädgård
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/insektsskydd-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferens för utvändiga bilder. Ljuset faller utifrån, så samma referens gäller här.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A pleated insect screen door fitted in an open terrace door. A slim white aluminium frame (RAL 9010) is screwed into the door frame: a top rail, two side profiles and a very low, flat bottom guide only a few millimetres high that lies flush on the threshold – no raised floor rail. Black insect mesh folded in fine vertical pleats like a concertina hangs between the top rail and the bottom guide and slides sideways; a slim white vertical handle profile runs along its leading edge. The screen is drawn about two thirds across the opening and the rest of the mesh is folded into a narrow pleat pack at the side. The black mesh is fine enough that the garden is clearly visible through it. No logo, no text.
SCENE: Interior view from a calm Scandinavian living room towards a wide white-framed terrace door standing open onto a stone terrace and a green summer garden with a lawn and flowering shrubs. Light oak floor, a plain linen armchair to one side. No people, no pets.
LIGHT: Summer evening, low warm sun from the left over the garden; soft warm light falls across the floor through the mesh. Exposure balanced so the garden is not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the door, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the top rail and the upper part of the pleated mesh inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the door opening extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (a plain wall in soft shade) because the headline sits there on desktop, and keep the lower 55% simple (floor and threshold) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The pleated mesh glides sideways from its pleat pack across the open door in about 4 seconds. Only the garden leaves move slightly in a light breeze.
```

### /invandigt-solskydd/

- **Varför ny hero:** Mallen har ingen hero-bildplats i dag (se punkt 6 i rapporten). Underlaget tas fram i förväg. Motivet är en rullgardin med mörkläggande väv i sovrummet, eftersom sovrum står först under Vanliga rum och mörkläggande står först i vävlistan.
- **Miljö:** Sovrum
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/invandigt-solskydd/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/cards/card-plisse.webp`: Stilreferens för interiörer, bara för ljus och färg.

```
Photorealistic premium interior architectural photograph for a website hero image.
Image 1 = style reference for light, color grade and contrast only – do not copy its window covering, room or furniture. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A made-to-measure roller blind with blackout fabric: a smooth, plain opaque fabric in warm off-white that rolls down from the top, with its roller hidden in a slim white aluminium cassette mounted on the window frame. A straight white bottom rail and a thin white bead chain at the side. The blind is lowered about two thirds, so the lower part of the window stays open. No pattern, no logo, no text.
SCENE: A calm Scandinavian bedroom with white walls, light oak floor and a low bed with linen bedding. One wide white-framed window with deep sill, trees outside. A bedside table with a ceramic lamp. Nothing else.
LIGHT: Late summer afternoon, low warm sun from the left coming through the glass; soft shadows, natural white balance, the room evenly exposed so the view outside is not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window wall, 28–35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the cassette and the upper half of the blind inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (the white wall in soft shade) because the headline sits there on desktop, and keep the lower 55% simple (bed and floor) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The blind rolls down smoothly from the cassette to two thirds of the window in about 4 seconds and the light on the bed softens. Nothing else moves.
```

### /persienner-malmo/

- **Varför ny hero:** Ingen hero-bildplats i dag. Motivet är Klassisk LV, som sidan säger är den modell som installeras mest: 25 mm aluminiumlameller, all manövrering i överlisten, glasstav och lina fritt framför rutan.
- **Miljö:** Kök
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/persienner-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/cards/card-plisse.webp`: Stilreferens för interiörer, bara för ljus och färg.

```
Photorealistic premium interior architectural photograph for a website hero image.
Image 1 = style reference for light, color grade and contrast only – do not copy its window covering, room or furniture. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A made-to-measure venetian blind in an inward-opening window: horizontal aluminium slats 25 mm wide in matt white, held by thin ladder tapes and a lift cord. All mechanics sit in a slim white head rail at the top of the window sash; a clear glass-look tilting wand and the pull cord hang freely in front of the pane, with nothing fixed to the frame. The slats are tilted half open so sunlight falls through in fine horizontal stripes. No logo, no text.
SCENE: A bright Scandinavian kitchen with white cabinetry, a pale stone worktop running under the window and a few ceramic bowls. One white-framed window above the worktop, a garden view outside. No people.
LIGHT: Late summer afternoon, low warm sun from the left; fine stripes of light from the slats fall across the worktop – the controlled light is the point of the image. Natural white balance. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window wall, 28–35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the head rail and the upper slats inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (a plain cabinet front or wall in shade) because the headline sits there on desktop, and keep the lower 55% simple (worktop and the light stripes) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The slats tilt slowly from closed to half open in about 4 seconds and the stripes of light widen across the worktop. Nothing else moves.
```

### /plissegardiner-malmo/

- **Varför ny hero:** Ingen hero-bildplats i dag. Motivet är Dualis: linspänd, tvåvägsjustering, handtag på över- och underlist och den nedre halvan täckt mot insyn.
- **Miljö:** Vardagsrum mot gata
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/plissegardiner-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/cards/card-plisse.webp`: Stilreferens för interiörer, bara för ljus och färg. Bilden visar själv en plissé, därför säger prompten uttryckligen att den inte ska kopieras.

```
Photorealistic premium interior architectural photograph for a website hero image.
Image 1 = style reference for light, color grade and contrast only – do not copy its window covering, room or furniture. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A made-to-measure pleated blind with top-down and bottom-up adjustment, fitted inside the window sash: a single-layer light-filtering fabric in warm sand white, pleated in fine horizontal folds, between a slim white top rail and a slim white bottom rail. Thin tension cords run from the corners of the sash so the fabric stays straight; both rails have a small handle. The blind covers the lower half of the window and the upper half is open to the sky. No logo, no text.
SCENE: A living room in a turn-of-the-century apartment facing a street: tall white-framed window with a deep sill, white walls with a simple moulding, herringbone oak floor, a low linen sofa and a small side table. The facades across the street are just visible through the open upper half. No people.
LIGHT: Late summer afternoon, low warm sun from the left coming through the glass; soft shadows, natural white balance, the room evenly exposed so the view outside is not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window wall, 28–35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the top rail and the pleated fabric inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (the wall beside the window in shade) because the headline sits there on desktop, and keep the lower 55% simple (sofa and floor) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The bottom rail rises slowly and the pleats unfold upwards to half height in about 4 seconds. Nothing else moves.
```

### /rullgardiner-malmo/

- **Varför ny hero:** Ingen hero-bildplats i dag. Motivet är en rullgardin med screenväv i kassett och kulkedja, för hemmakontor (Medi-storlek).
- **Miljö:** Hemmakontor
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/rullgardiner-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/cards/card-plisse.webp`: Stilreferens för interiörer, bara för ljus och färg.

```
Photorealistic premium interior architectural photograph for a website hero image.
Image 1 = style reference for light, color grade and contrast only – do not copy its window covering, room or furniture. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A made-to-measure roller blind with screen fabric: a fine perforated fabric in light grey that softens glare but keeps the view outside visible, rolling down from a slim white aluminium cassette mounted above the window. A straight bottom rail and a thin bead chain at the side. Lowered about halfway. No pattern, no logo, no text.
SCENE: A quiet home office: a plain oak desk under a wide white-framed window, a simple chair, a closed laptop and a desk lamp. White walls, a bookshelf at the edge of the frame, trees and neighbouring houses softly visible through the screen fabric. No people.
LIGHT: Late summer afternoon, low warm sun from the left coming through the glass; soft shadows, natural white balance, the room evenly exposed so the view outside is not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window wall, 28–35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the cassette and the upper part of the screen fabric inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (the wall and bookshelf in shade) because the headline sits there on desktop, and keep the lower 55% simple (desk and floor) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The screen blind rolls down from the cassette to half height in about 4 seconds and the glare on the desk fades. Nothing else moves.
```

### /lamellgardiner-malmo/

- **Varför ny hero:** Ingen hero-bildplats i dag. Motivet är lamellgardiner med 89 mm lameller, takskena, vridkedja och dragstav på ett glasparti med skjutdörr.
- **Miljö:** Öppen matplats
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/lamellgardiner-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/cards/card-plisse.webp`: Stilreferens för interiörer, bara för ljus och färg.

```
Photorealistic premium interior architectural photograph for a website hero image.
Image 1 = style reference for light, color grade and contrast only – do not copy its window covering, room or furniture. There is no product reference image: build the product exactly as described below and add nothing it does not have.
SUBJECT: A made-to-measure vertical blind on a wide glass wall with a sliding door: a slim white ceiling-mounted rail from which vertical fabric vanes 89 mm wide hang, one vane per clip, so each vane can turn around its vertical axis. Light-filtering fabric in warm white. A thin chain controls the angle and a slim pull wand moves the stack sideways. The vanes are turned half open, and part of the stack is drawn to one side in front of the sliding door. No logo, no text.
SCENE: An open-plan dining area with a long oak table and simple chairs in front of a floor-to-ceiling glass wall with a sliding door to a terrace and garden. Polished concrete floor, white walls. No people.
LIGHT: Late summer afternoon, low warm sun from the left; vertical stripes of light and shadow from the vanes fall across the table and floor. Natural white balance, the garden outside not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window wall, 28–35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the ceiling rail and the upper part of the turned vanes inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the glass wall extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (a plain wall in shade) because the headline sits there on desktop, and keep the lower 55% simple (table and floor with the light stripes) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, blown-out windows, lens flare, clutter, text, watermarks, brand logos, people, pets.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The vanes turn slowly from closed to half open in about 4 seconds and the stripes of light spread across the floor. Nothing else moves.
```

## Att kontrollera

- **Plissénätdörren:** konstruktionen bygger bara på produktdata. Där står plisserad nätdörr utan hög golvskena, skruvad i karm eller nisch, och upp till 3800 mm bred. Att nätet skjuts i sidled och har en handtagsprofil är min tolkning, eftersom det inte står uttryckligen. Kontrollera mot MTH:s bildbank.
- **Invändiga produkter:** de beskrivs utan referensbild, utifrån sidtexterna. En bild ur Umbras bildbank som 02-produkt skulle ge en säkrare kopia.