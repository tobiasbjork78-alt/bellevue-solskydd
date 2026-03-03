# Arkiv: bellevuesolskydd.se

Komplett arkiv av webbplatsen bellevuesolskydd.se (Bellevue Solskydd AB, konkurs 2026-01-16).

## Struktur

```
raw-mirror/          # wget --mirror rå-kopia av hela sajten
content/
  pages/             # JSON-filer per sida/inlägg med strukturerat innehåll
  media/
    images/          # Alla bilder (jpg, png, webp, svg)
    pdfs/            # Alla PDF-dokument
  sitemap.json       # Komplett URL-karta
  reviews.json       # Recensioner (Trustindex)
  SUMMARY.md         # Sammanfattning av allt arkiverat innehåll
```

## Teknik

- **Källa**: WordPress 6.9.1 + Divi Page Builder
- **Metod**: WP REST API (`/wp-json/wp/v2/`) + wget mirror + HTML-scraping
- **Datum**: 2026-02-26

## Körning

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python3 extract_content.py
.venv/bin/python3 download_media.py
```

wget-mirror körs separat:
```bash
wget --mirror --convert-links --adjust-extension --page-requisites \
  --no-parent --directory-prefix=./raw-mirror \
  --wait=1 --random-wait \
  --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  https://bellevuesolskydd.se/
```
