# RAPPORT_BILDLAYOUT.md

Körning: bildgrid-sektionen i `ProductPageLayout.tsx` går från responsiv
1/2/3-kolumn 4:3-grid till stackad enkel-kolumn med 16:9-bilder i samma
bredd som inline-bilden.

**Branch:** `draft/nextjs-v2`. **Main:** orörd. **En commit:** `85d4dd8b`.
**Typkontroll:** ren (`node_modules/.bin/tsc --noEmit` exit 0).

---

## Diff — ProductPageLayout.tsx

```diff
-      {/* Gallery */}
+      {/* Gallery — stackad enkel-kolumn, samma bredd och aspect som inline-bilden */}
       {images && images.length > 0 && (
         <div className="bg-light-bg border-t border-border">
-          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
-            <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${images.length >= 3 ? "lg:grid-cols-3" : ""}`}>
-              {images.map((img) => (
-                <figure key={img.src} className="flex flex-col">
-                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white border border-border">
-                    <Image
-                      src={img.src}
-                      alt={img.alt}
-                      fill
-                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
-                      className="object-cover"
-                    />
-                  </div>
-                  {img.caption && (
-                    <figcaption className="mt-2 text-sm text-mid-gray">
-                      {img.caption}
-                    </figcaption>
-                  )}
-                </figure>
-              ))}
-            </div>
+          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 sm:space-y-14">
+            {images.map((img) => (
+              <figure key={img.src} className="flex flex-col">
+                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-light-bg border border-border">
+                  <Image
+                    src={img.src}
+                    alt={img.alt}
+                    fill
+                    sizes="(max-width: 1024px) 100vw, 56rem"
+                    className="object-cover"
+                  />
+                </div>
+                {img.caption && (
+                  <figcaption className="mt-2 text-sm text-mid-gray">
+                    {img.caption}
+                  </figcaption>
+                )}
+              </figure>
+            ))}
           </div>
         </div>
       )}
```

---

## Konsistens — inline vs. stacked

| Egenskap | Inline-bild (`InlineProductImage`) | Stackad grid-bild (efter) |
|---|---|---|
| Container-wrapper | `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8` (via children-sektionen) | `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8` |
| Bild-bredd | `w-full` inom max-w-4xl ≈ **56 rem** | `w-full` inom max-w-4xl ≈ **56 rem** |
| Aspect | `aspect-[16/9]` | `aspect-[16/9]` |
| Bg-placeholder | `bg-light-bg` | `bg-light-bg` |
| Border | `border border-border` | `border border-border` |
| Rundade hörn | `rounded-lg` | `rounded-lg` |
| `sizes` | `(max-width: 1024px) 100vw, 56rem` | `(max-width: 1024px) 100vw, 56rem` |

Bildcontainern är **identisk** mellan inline och stacked. Enda skillnaden är
den omslutande sektionen: inline bor i den vita children-sektionen med
`my-10 sm:my-14` vertikal marginering; stacked bor i gallery-sektionen med
`bg-light-bg` bakgrund och `space-y-10 sm:space-y-14` mellan bilder.

Vertikal rytm i stackade bilder: `space-y-10 sm:space-y-14` (2.5 rem / 3.5 rem)
— matchar `my-10 sm:my-14` på inline-bilden.

---

## Ingen förändring i vilka bilder som visas

Images-arrayen på varje produktsida är oförändrad. Endast renderings­logiken
i layout-komponenten har ändrats.

---

## Lokal granskning

```bash
cd nextjs-site
npm run dev
```

| URL | Vad du ska se |
|---|---|
| http://localhost:3000/persienner | Inline-bild (Bellevue-persienn) mellan brödtextsektioner. Längst ned, på light-bg-sektionen: 3 stackade 16:9-bilder (`Persienner-img`, `blinds-1-scaled`, `shadow-of-window-blinds`) i samma bredd och aspect som inline-bilden. |
| http://localhost:3000/terrassmarkiser | Inline-bild (`classic2.webp`, villa-altan). Stackad sektion nedanför med 1 bild (`exterior-shots-of-a-modern-terrace`) i samma bredd och aspect. |
| http://localhost:3000/pergola | Inline-bild (pergolatak underifrån). Stackad sektion med 2 bilder (`pergola_img1`, `pergola-img-vand`). |
| http://localhost:3000/parasoller | Inline-bild (parasoll vid pool). Stackad sektion med 3 bilder i 1-kolumn. |

**Testmål:** på alla sidor ska inline-bilden och varje stackad bild ha
exakt samma bredd (56 rem desktop, 100 % viewport mobil) och samma 16:9
proportion.
