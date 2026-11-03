# Hero-underlag, 2026-11-04

Mappen ligger i `C:\Users\tobia\Desktop\Kunder\Bellevue\Bellevue site bilder\hero-underlag\`. Uppdraget angav `Desktop\Bellevue site bilder\`, men den mappen finns inte; bildmappen ligger under `Kunder\Bellevue\`.

## 1. Hur heron renderas

Uppmätt med Playwright i den byggda sajten. Textblocket är H1 med ingress, knappar och märken; brödsmulorna står för sig.

| Mall (sidor) | Vy | Bildyta | object-position | Synlig del av en 16:9-bild | Text ligger | Overlay |
|---|---|---|---|---|---|---|
| Home (`/`) | 1440×900 | 1440×900 (1,6:1) | 50% 50% | bredd 5–95 %, hela höjden | centrerad: bredd 28–72 %, höjd 24–80 % | gradient från vänster, 95 % → 20 % svart |
| Home (`/`) | 390×844 | 390×844 (0,46:1) | 50% 50% | bredd 37–63 %, hela höjden | bredd 6–94 %, höjd 22–83 % | gradient nedifrån, 95 % → 40 % |
| Markiser-hero (markiser, fönstermarkiser, insektsskydd) | 1440×900 | 1440×702 (2,05:1) | 50% 50% | hela bredden, höjd 7–93 % | vänster: bredd 13–59 %, höjd 24–86 % (beror på H1-längd); brödsmulor höjd 6–9 % | gradient från vänster, 80 % → 5 % |
| Markiser-hero | 390×844 | 390×591 (0,66:1) | 50% 50% | bredd 31–69 %, hela höjden | bredd 6–94 %, höjd 15–91 % (insektsskydd) till 39–91 % (markiser) | gradient nedifrån, 85 % → 25 % |
| Pergola | 1440×900 | 1440×702 | 50% 25% | hela bredden, höjd 3–90 % | som markiser-heron, höjd 30–86 % | som markiser-heron |
| Pergola | 390×844 | 390×591 | 50% 25% | bredd 31–69 % | höjd 9–91 % | som markiser-heron |
| ZipScreen | 1440×900 och 390×844 | som markiser-heron | 50% 50% | som markiser-heron | som markiser-heron | bilden har dessutom opacity 0,55 |

**Säker yta**, det vill säga den yta som syns och inte täcks av text på båda vyerna:
- **Markiser-heron och pergola:** bredd 50–68 %, höjd 8–40 %. Vänstra 45 % och nedre 55 % ska vara lugna.
- **Startsidan:** bredd 52–63 %, höjd 4–22 %. Mitten (bredd 28–72 %, höjd 24–80 %) ska vara lugn.
- Mobilvyn visar bara en smal mittremsa av en liggande bild. En separat mobilbeskärning skulle ge mer, men det är en kodändring och ingår inte här.

## 2. Stilreferens

**Vald:** `astro/public/images/zip-screen/selt-zipcreen-120-header.webp` (AI, 1672×941), kopierad som `01-stil.webp` i varje mapp.

**Varför inte `pergola-hero-poster.webp`:**
- Den är tagen i skymning med tända lampor, medan alla prompter beskriver eftermiddagssol där skuggan är poängen. Ljuset går inte att matcha.
- Den visar fyra personer, vilket inte ska finnas i nya heroes.
- Den är bara 1280×720.

**Varför zip-screen-heron:** lågt varmt sidoljus från vänster, mjuk kontrast utan HDR-kanter, naturliga färger, puts och grönska, och inga personer. Den är redan i bruk på sajten, så nya heroes får samma ton.

## 3. Varför invändiga sidor inte har underlag
De invändiga sidorna (`/invandigt-solskydd/`, `/persienner-malmo/`, `/plissegardiner-malmo/`, `/rullgardiner-malmo/`, `/lamellgardiner-malmo/`) använder artikelmallen, som saknar hero-bildplats. Därför fick de ingen hero-status och inget underlag.

Inga bekräftade Umbra-bilder hittades i Repon. Bildernas ursprung:
- **Direkt Solskydd och Svealands solskydd:** foton från deras kunder och återförsäljarsajter.
- **Gemini (trolig AI):** tre bilder i formatet 1408×768.
- **Vävprover:** med en annan återförsäljares vattenmärke.

Umbras egen bildbank är vägen om en invändig hero läggs till.

## 4. Underlag per sida

### /markiser-malmo/

- **Varför ny hero:** Ingår alltid enligt uppdraget. Heron är i dag en osynlig platshållare (status SAKNAS).
- **Miljö:** Puts
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/markiser-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferensen, se ovan.
  - `02-produkt.webp` ← `bildbank/selt-aluprof/palladio/palladio_RAL_9005.webp`: Aluprofs frilagda rendering av Palladio, 4093×2894. Halvkassetten, båda armarna med armbåge, frontprofilen och fallet syns tydligast av alla Palladio-bilder.
  - `03-miljo.webp` ← `bildbank/selt-aluprof/palladio/2011_palladio_dom_jednorodzinny_czarnowasy_10_FIX.webp`: Palladio monterad över en villaterrass, visar proportionen mot huset.
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

- **Varför ny hero:** Heron är en osynlig platshållare (SAKNAS). Huvudmodell: Selt Italia Box, som står först med bild och har kassett.
- **Miljö:** Tegel
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/fonstermarkiser-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferensen.
  - `02-produkt.webp` ← `bildbank/selt-aluprof/italia-box/2006-06_Italia_Kasetowa_Dom_Opole_05+-+RETUSZ.webp`: Italia Box monterad över en altandörr; kassetten och båda fallarmarna syns.
  - `04-detalj.webp` ← `bildbank/selt-aluprof/italia-box/91974Italia_kasetowa__kaseta.jpg.webp`: Närbild av kassett och armfäste.

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

- **Varför ny hero:** Heron är en osynlig platshållare (SAKNAS). Produkt: MTH Rullgardin Deluxe (rullnät i kassett), eftersom det är den enda MTH-produkt där bildbanken har en bild som visar konstruktionen. För plissénätdörren finns bara en menyikon.
- **Miljö:** Interiör
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/insektsskydd-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferensen.
  - `02-produkt.jpg` ← `bildbank/mth/rullgardin-deluxe/Kök-1.jpg`: MTH:s egen bild, 3700×5544: kassetten överst i fönstret och bottenlisten som dras ner. En person syns, men bilden är bara referens. Nätet syns svagt.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. Image 2 = product reference. Images 3–4 (optional) = setting or detail.
SUBJECT: An insect screen roller blind for a window: a slim white aluminium cassette fixed across the top of the window frame on the inside, narrow white side rails on both sides of the frame, and a fine grey mesh pulled down to a white bottom rail so it covers the whole opening. The mesh is see-through and softens the view of the garden. Copy the construction from image 2 (the cassette at the top and the bottom rail). Frame in white. Mesh: plain grey, no pattern, no logo, no text.
SCENE: Interior architectural photograph of a bright Scandinavian kitchen. A white wooden window with the casement opened outwards; the insect screen is pulled down inside the frame. A pale wooden worktop below the window with a few herbs in pots on the sill. A green summer garden outside. No people, no pets.
LIGHT: Late summer afternoon, low warm sun coming in through the window from the left, soft shadows on the worktop. Exposure balanced so the garden outside is not blown out. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.4 m), slight angle to the window, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the top cassette and the upper part of the mesh in the window inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the window extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (a plain light wall or kitchen cabinet in shade) because the headline sits there on desktop, and keep the lower 55% simple (worktop and floor) because text covers it on mobile. Leave clear space above the product.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, lens flare, oversaturated sky, text, watermarks, brand logos, people posing.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The mesh is pulled down smoothly from the cassette to the bottom rail in about 4 seconds. Only the leaves in the garden move slightly.
```

### /pergola-malmo/

- **Varför ny hero:** Heron (video och poster) är AI och visar fyra personer, vilket regeln inte tillåter (FEL MOTIV). Postern är dessutom 1280×720. Ny hero utan personer. Huvudmodell: Harol Brera, som står först.
- **Miljö:** Trä och kust
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/pergola-malmo/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferensen.
  - `02-produkt.jpg` ← `bildbank/harol/brera/Brera_HAROL2.jpg`: Harols foto av Brera mot en tegelfasad; lamellerna är delvis skjutna åt sidan, vilket skiljer Brera från Opera. Stolpar och ram syns.
  - `04-detalj.jpg` ← `bildbank/harol/brera/TalkAbout_Harol_2598.jpg`: Lamelltaket inifrån.

```
Photorealistic architectural photograph for a website hero image.
Image 1 = style reference. Image 2 = product reference. Images 3–4 (optional) = setting or detail.
SUBJECT: An aluminium pergola with a louvred roof: flat aluminium louvres between two long side beams, which can both rotate and slide to one end of the roof. Square aluminium posts (about 15 × 15 cm) with the gutter built into the frame. Mounted against the house wall on one side. Copy the construction and proportions exactly from image 2. Frame in textured anthracite grey. Louvres half open. No fabric roof, no glass walls, no side screens.
SCENE: The pergola is mounted against the back of a single-storey house clad in light grey vertical timber, close to the coast. Stone-paved terrace with a low outdoor sofa in light fabric and a coffee table under the roof. Dune grasses and a low stone wall at the edge, a glimpse of the sea and a pale horizon. No people.
LIGHT: Late summer afternoon, low warm sun from the left. Stripes of sunlight and shadow from the louvres fall across the terrace and the sofa – the adjustable shade is the point of the image. Match the light, color grade and contrast of image 1.
CAMERA: Eye level (about 1.6 m), three-quarter view, 35 mm lens look, straight verticals, no wide-angle distortion.
COMPOSITION: The website crops this image hard and lays text over it. Put the front roof edge with the louvres and one post inside the zone from 50% to 68% of the image width and from 8% to 40% of the image height. Let the rest of the pergola extend to the right of that zone. Keep the left 45% of the frame calm and fairly dark (timber wall in shade) because the headline sits there on desktop, and keep the lower 55% simple (paving and the striped shadows) because text covers it on mobile. Leave clear space above the product. The website shows this image with the focus point 25% from the top, so nothing important may sit in the bottom 10%.
FORMAT: Landscape, 16:9 if available, otherwise 3:2. Highest resolution available.
AVOID: 3D render or CGI look, HDR halos, lens flare, oversaturated sky, text, watermarks, brand logos, people posing.
OPTIONAL MOTION (Kling, use this image as the end frame): Static camera. The louvres rotate slowly from closed to half open in about 5 seconds and the stripes of light widen across the terrace. Only the grasses move slightly in a light breeze.
```

### /

- **Varför ny hero:** Heron är AI, 1942×809: höjden når inte 900 (FÖR LÅG UPPLÖSNING). Startsidan visar en terrassmarkis i dag; ny bild med Harol Cadiz så att den inte blir samma modell som markiser-sidan.
- **Miljö:** Trä
- **Mapp:** `Desktop/Kunder/Bellevue/Bellevue site bilder/hero-underlag/startsida/`
- **Referenser:**
  - `01-stil.webp` ← `astro/public/images/zip-screen/selt-zipcreen-120-header.webp`: Stilreferensen.
  - `02-produkt.jpg` ← `bildbank/harol/cadiz/Cadiz-1-1.jpg`: Harols rendering av Cadiz; den rundade helkassetten, armarna och frontprofilen syns.
  - `03-miljo.jpg` ← `bildbank/harol/cadiz/Cadiz-1-1024x576.jpg`: Samma Cadiz på avstånd mot villan, visar storleken mot huset.

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

## Att kontrollera

- **Insektsskydd:** nätet syns svagt i referensen. Be Daniel om MTH:s bildbank om resultatet blir otydligt.
- **Pergola:** om videon byts behövs också en ny poster. Rörelsen i prompten kan användas för den.
- **Brera-referensen** är 1002×628. Konstruktionen syns, men ett högupplöst original från Harol skulle ge en säkrare kopia.