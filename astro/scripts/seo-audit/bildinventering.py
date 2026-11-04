# Image inventory: writes docs/bilder/bildinventering.csv and docs/bilder/index.html (contact sheet per source).
# Usage: python3 scripts/seo-audit/bildinventering.py   (from astro/, after npm run build)
# Descriptions were written after looking at every image (contact sheets + single images), not from file names.
import csv
import hashlib
import html
import os
import re
from collections import defaultdict
from pathlib import Path

from bs4 import BeautifulSoup
from PIL import Image

ASTRO = Path(__file__).resolve().parents[2]
REPO = ASTRO.parent                      # bellevue-solskydd
REPON = REPO.parent                      # Desktop/Repon
DESKTOP = REPON.parent
BSB = DESKTOP / "Kunder" / "Bellevue" / "Bellevue site bilder"
OUT = ASTRO / "docs" / "bilder"
OUT.mkdir(parents=True, exist_ok=True)

# ---------- usage on the site (dist) ----------
usage = defaultdict(set)
for f in sorted((ASTRO / "dist").rglob("*.html")):
    page = "/" + f.relative_to(ASTRO / "dist").as_posix().replace("index.html", "")
    soup = BeautifulSoup(f.read_text(encoding="utf-8"), "html.parser")
    for tag in soup.find_all(["img", "video", "source"]):
        for attr in ("src", "poster"):
            v = tag.get(attr)
            if v and v.startswith("/"):
                usage[v].add(page)
    for m in soup.find_all("meta", property="og:image"):
        usage[m["content"].replace("https://bellevuesolskydd.se", "")].add(page + " (og)")


def used_on(public_path):
    pages = sorted(usage.get(public_path, []))
    if not pages:
        return "används inte"
    if len(pages) > 8:
        return f"{len(pages)} sidor (alla)"
    return ", ".join(pages)


# ---------- descriptions (what the image shows) and source ----------
AI = "AI"
OLD = "gamla sajten"
PUBLIC = {
    "bellevue-logo-white.webp": ("Bellevue Solskydds logotyp i vitt.", "egen"),
    "bellevue-logo.webp": ("Bellevue Solskydds logotyp i svart.", "egen"),
    "cards/card-markiser.webp": ("Vikarmsmarkis med grön väv utfälld över ett trädäck vid ett ljust trähus.", "okänt"),
    "cards/card-pergola.webp": ("Mörkgrå lamellpergola över en soffgrupp på en stenterrass vid kusten.", AI),
    "cards/card-plisse.webp": ("Ljus plisségardin halvt neddragen i ett fönster med bordslampa, Bellevue-logga i hörnet.", "okänt"),
    "cards/card-rullgardiner.webp": ("Ljus rullgardin i ett köksfönster i kvällsljus, Bellevue-logga i hörnet.", "okänt"),
    "cards/card-zipscreen.webp": ("Mörk zip screen halvt nedfälld framför en altandörr med mörkgröna karmar.", "okänt"),
    "fonstermarkiser/hero.webp": ("Selt Italia Box med kassett och mörkgrå väv över en altandörr på ett blåputsat hus.", "tillverkare (Selt/Aluprof, Awnings_EN.pdf s. 20)"),
    "fonstermarkiser/italia-box-produkt.webp": ("Frilagd rendering av Selt Italia Box med kassett och ljusgrå väv, vit kant till 16:9.", "tillverkare (Selt/Aluprof)"),
    "fonstermarkiser/sofiero.webp": ("Fönstermiljö Sofiero med randig väv över ett glasparti på en orangeputsad villa.", "tillverkare (Fönstermiljö)"),
    "fonstermarkiser/solliden.webp": ("Frilagd närbild av Fönstermiljö Solliden: vals, väv och fallarm utan kassett.", "tillverkare (Fönstermiljö)"),
    "malmo-aerial-bg.webp": ("Svartvit flygbild över Malmö med Turning Torso.", "okänt"),
    "markiser/cadiz.webp": ("Rendering av Harol Cadiz utfälld över en terrass vid en ljus tegelvilla.", "tillverkare (Harol)"),
    "markiser/hero.webp": ("Terrassmarkis med svart halvkassett och sandfärgad väv över ett matbord på en stenlagd uteplats, låg sol.", "AI (produktreferens palladio_RAL_9005.webp)"),
    "markiser/jamaica.webp": ("Två Selt Jamaica utfällda över en uteservering vid en tegelfasad.", "tillverkare (Selt/Aluprof)"),
    "markiser/palladio.webp": ("Selt Palladio sedd underifrån över en terrass med två matbord och pool.", "tillverkare (Selt/Aluprof)"),
    "markiser/tucan.webp": ("Rendering av Harol Tucan med LED över ett matbord vid en tegelfasad i kvällsljus.", "tillverkare (Harol)"),
    "pergola/brera.webp": ("Harol Brera mot en tegelfasad sedd uppifrån, två personer i en soffgrupp.", "tillverkare (Harol)"),
    "pergola/harol-brera.jpg": ("Svart pergola med glasväggar och matplats vid en träfasad, havet i bakgrunden.", AI),
    "pergola/harol-nomo.jpg": ("Svart pergola med ljus duk i taket över en soffgrupp vid ett vitt hus nära kusten.", AI),
    "pergola/harol-opera.jpg": ("Grå pergola med lamelltak och sidoscreen över en soffgrupp vid havet.", AI),
    "pergola/harol-versuz.jpg": ("Väggmonterad pergola med lutande vävtak vid ett gult tegelhus.", AI),
    "pergola/hero.webp": ("Pergola med lamelltak vid ett tegelhus i skymningen, fyra personer.", AI),
    "pergola/nomo.webp": ("Harol Nomo sedd underifrån mot en ljus tegelvilla.", "tillverkare (Harol)"),
    "pergola/opera.webp": ("Harol Opera framför en häck vid en pool, grupp personer.", "tillverkare (Harol)"),
    "pergola/pergola-hero-poster.webp": ("Lamellpergola vid ett tegelhus i skymningen, fyra personer, tända lampor.", AI),
    "pergola/pratic-opera.jpg": ("Vit pergola med glasväggar och soffgrupp på en gräsmatta vid ett trähus.", AI),
    "pergola/tarasola-technic-pro.jpg": ("Vit pergola med belysning över utekök och matbord i kvällsljus.", AI),
    "pergola/tarasola-technic-view.jpg": ("Mörkgrå pergola med skjutbara lamellväggar vid ett vitt hus.", AI),
    "pergola/versuz.webp": ("Harol Versuz med lutande tak mot en tegelfasad, två personer i soffan.", "tillverkare (Harol)"),
    "terrassmarkis-malmo-hero.webp": ("Terrassmarkis vid ett tegelhus i kvällssol, Turning Torso i bakgrunden.", AI),
    "terrassmarkis/Harol-BX270-terrassmarkis.webp": ("Mörk vikarmsmarkis över ett matbord vid ett vitt putsat hus.", AI),
    "terrassmarkis/Harol-CADIZ-terrassmarkis.webp": ("Mörk kassettmarkis över en soffgrupp vid ett vitt hus.", AI),
    "terrassmarkis/Harol-LUX-terrassmarkis.webp": ("Mörk markis över ett matbord vid ett ljust tegelhus.", AI),
    "terrassmarkis/Harol-PRAIA-terrassmarkis.webp": ("Mörk vikarmsmarkis sedd underifrån vid en ljus tegelfasad.", AI),
    "terrassmarkis/Harol-TUCAN-terrassmarkis.webp": ("Svart markis över ett trädgårdsbord vid ett vitt hus, stående format.", AI),
    "zip-screen/coolscreen.webp": ("Tre Harol Coolscreen nedfällda på en ljus tegelfasad.", "tillverkare (Harol)"),
    "zip-screen/harol-coolscreen.webp": ("Mörk zip screen framför en vit fönsterdörr på ett vitt hus.", AI),
    "zip-screen/r-120-ziiip.webp": ("Frilagd rendering av Selt R 120 ZiiiP med fyrkantig kassett, väven halvt nere.", "tillverkare (Selt/Aluprof)"),
    "zip-screen/selt-r-120-ziiip.webp": ("Zip screen på en träpanelfasad, stående format.", AI),
    "zip-screen/selt-r-ziiip-95.webp": ("Zip screen med vit kassett halvt nere framför ett fönster på en grå träfasad.", AI),
    "zip-screen/selt-zipcreen-120-header.webp": ("Svart zip screen med rund kassett framför ett glasparti i en putsad fasad, låg kvällssol.", AI),
    "zip-screen/zip-screen-context.webp": ("Närbild på svart zip screen med rund kassett i en putsad fasad, låg sol.", AI),
    "zip-screen/zip-screen-process-bg.webp": ("Två montörer i tröjor med Bellevue-logga monterar en kassett över ett fönster.", AI),
}
OG = {"default.jpg": ("Svartvit flygbild över Malmö med Turning Torso, 1200×630.", "okänt")}

BSB_DESC = {
    "Pratic-opera.png": ("Vit pergola med glasväggar och soffgrupp vid ett trähus (original till pratic-opera.jpg).", AI),
    "Tarasola-Technic Pro.png": ("Vit pergola med belysning i kvällsljus (original till tarasola-technic-pro.jpg).", AI),
    "Tarasola-technic-view.png": ("Mörkgrå pergola med lamellväggar (original till tarasola-technic-view.jpg).", AI),
    "harol- verzus.png": ("Pergola med lutande vävtak vid ett gult tegelhus (original till harol-versuz.jpg).", AI),
    "harol-brera.png": ("Svart pergola med glasväggar vid havet (original till harol-brera.jpg).", AI),
    "harol-nomo.png": ("Svart pergola med ljus duk vid ett vitt hus (original till harol-nomo.jpg).", AI),
    "harol-opera.png": ("Grå lamellpergola vid havet (original till harol-opera.jpg).", AI),
    "pergola-hero-malmö.png": ("Lamellpergola i skymningen med fyra personer (original till poster och hero.webp).", AI),
    "pergola-hero.png": ("Pergola i kvällsljus med fyra personer, närmare bild.", AI),
    "Australia.png": ("Frilagd rendering av öppen vikarmsmarkis, sedd uppifrån, svart bakgrund.", "okänt (rendering i Selts stil)"),
    "Bora.png": ("Frilagd rendering av sidomarkis med utdragen väv.", "okänt (rendering i Selts stil)"),
    "Casablanca sida.png": ("Frilagd rendering av vikarmsmarkis sedd uppifrån.", "okänt (rendering i Selts stil)"),
    "Casablanca.png": ("Frilagd närbild av kassett och arm, sedd från sidan.", "okänt (rendering i Selts stil)"),
    "Corsica sida.png": ("Frilagd rendering av vikarmsmarkis sedd uppifrån.", "okänt (rendering i Selts stil)"),
    "Corsica.png": ("Frilagd närbild av kassettgavel och arm.", "okänt (rendering i Selts stil)"),
    "Dakar sida.png": ("Frilagd rendering av vikarmsmarkis sedd uppifrån.", "okänt (rendering i Selts stil)"),
    "Dakar.png": ("Frilagd närbild av rundad kassett och arm.", "okänt (rendering i Selts stil)"),
    "Italia 1.png": ("Frilagd rendering av fallarmsmarkis utan kassett.", "okänt (rendering i Selts stil)"),
    "Italia Box.png": ("Frilagd rendering av fallarmsmarkis med kassett.", "okänt (rendering i Selts stil)"),
    "Italia.png": ("Frilagd rendering av fallarmsmarkis utan kassett.", "okänt (rendering i Selts stil)"),
    "Jamaica detalj rullfron.png": ("Frilagd närbild av gavel med rullbart frontfall.", "okänt (rendering i Selts stil)"),
    "Jamaica rullfront.png": ("Frilagd rendering av markis med rullbart frontfall nedfällt.", "okänt (rendering i Selts stil)"),
    "Jamaica sida.png": ("Frilagd rendering av vikarmsmarkis sedd uppifrån.", "okänt (rendering i Selts stil)"),
    "Palladio sida.png": ("Frilagd rendering av vikarmsmarkis sedd uppifrån.", "okänt (rendering i Selts stil)"),
    "Palladio.png": ("Frilagd närbild av halvkassett och arm.", "okänt (rendering i Selts stil)"),
    "ChatGPT Image 4 maj 2026 13_31_49 (1).png": ("Beige vikarmsmarkis över ett matbord vid en vit villa, klar himmel.", AI),
    "ChatGPT Image 4 maj 2026 13_31_49 (2).png": ("Mörkgrå vikarmsmarkis över ett trädäck med matbord vid en vit villa.", AI),
    "ChatGPT Image 4 maj 2026 13_31_49 (3).png": ("Brun vikarmsmarkis över ett trädäck vid ett vitt hus.", AI),
    "ChatGPT Image 4 maj 2026 13_31_50 (4).png": ("Grön vikarmsmarkis över en terrass vid ett vitt hus.", AI),
    "ChatGPT Image 4 maj 2026 13_31_50 (5).png": ("Ljus vikarmsmarkis över ett trädäck vid en skärgårdsvik.", AI),
}

ARKIV = {
    "20-rabatt-1.png": "Grön ruta med gul stjärna och texten 20 % rabatt.",
    "20-rabatt-2.png": "Samma kampanjgrafik, 20 % rabatt.",
    "20-rabatt.png": "Samma kampanjgrafik, 20 % rabatt.",
    "20-rea-sommar-2024.png": "Kampanjgrafik 20 % rabatt på allt t.o.m. 31/8.",
    "Bellevue-mini-icon.png": "Liten Bellevue-ikon.",
    "Bellevue-rullgardin.jpg": "Man monterar en beige rullgardin vid ett fönster.",
    "Boka-in-ett-kostnadsfritt-hembesok-BTN.png": "Knappgrafik med texten Boka in ett kostnadsfritt hembesök.",
    "Draperier-img.png": "Mörka draperier och vita gardiner vid en dagbädd i ljust rum.",
    "Draperier-img.webp": "Samma som Draperier-img.png.",
    "Gardiner-img.png": "Ljusa gardiner vid ett runt bord med vattenkokare.",
    "Gardiner-img.webp": "Samma som Gardiner-img.png.",
    "Graa-panelgardiner-1.jpg": "Grå gardiner och soffa i ett ljust vardagsrum.",
    "Inomhusklimat-img-front.jpg": "Ljus träpersienn eller rullgardin vid ett fönster med en växt.",
    "Lamellgardiner-img.png": "Sovrum med träpanel och vertikala lamellgardiner mot balkong.",
    "Lamellgardiner-img.webp": "Samma som Lamellgardiner-img.png.",
    "Ljusa-panelgardiner-1.jpg": "Ljusa gardiner vid ett fönster och ett trappräcke.",
    "Malmo-zip-screen-1-230x300-1-e1687269571213.jpg": "Zip screen över ett fönsterparti i en tegelfasad, liten bild.",
    "Markis-fran-Bellevue-Solskydd-1.png": "Ljus markis över ett trädäck med möbler.",
    "Panelgardiner-shutterstock.png": "Vitt vardagsrum med panelgardiner (stockbild enligt filnamnet).",
    "Parasoll_header_img.png": "Parasoller över en uteservering vid en rosa fasad.",
    "Pergola-artikel-1.jpg": "Träpergola vid en pool med blå soffa.",
    "Persienner-img.png": "Persienner med ljusstrimmor på en vägg.",
    "Persienner-img.webp": "Samma som Persienner-img.png.",
    "Plissegardiner-980x551-1.jpg": "Ljust arbetsrum med vita gardiner över ett skrivbord.",
    "Plissegardiner-980x551-1.webp": "Samma som Plissegardiner-980x551-1.jpg.",
    "Rullgardin-Bellevue.jpg": "Närbild på en grå hissgardin mot en tegelvägg.",
    "SlW5oMT1_o.jpg": "Badrum med spegelvägg och tavlor.",
    "Utomhuslimat-img-front.jpg": "Parasoll över en uteplats vid ett tegelhus.",
    "Vi-ar-Bellevue-Solskydd.webm": "Videofil (kan inte visas som bild).",
    "Wavegardiner-Bellevue-Solskydd-Malmo.jpg": "Mörka wavegardiner vid en dagbädd.",
    "Zip-screen-img-vand.png": "Zip screens och markis på en tegelvilla, spegelvänd.",
    "a-line-med-dekorlist-oppen.jpg": "Vit persienn i ett fönster, produktbild.",
    "abstract-vertical-blind-shadows-on-linoleum-floor-2022-12-16-12-38-58-utc-scaled.jpg": "Skuggor från vertikala lameller på ett golv.",
    "back-yard-in-a-cozy-house-2022-03-02-19-15-30-utc-scaled-1.jpg": "Bakgård med parasoll vid ett tegelhus.",
    "bellevue-med-sidoskenor.jpg": "Vit persienn med sidoskenor i ett fönster.",
    "bellevue-v-e_003.jpeg": "Persienn i ett fönster, sedd snett från sidan.",
    "bellevue-vse_002.jpeg": "Persienn i ett fönster med en etikett.",
    "big-unicorn-inflatable-ring-in-a-swimming-pool-2021-08-29-14-14-48-utc-scaled.jpg": "Uppblåsbar enhörning i en pool, gul fönstermarkis på huset.",
    "blinds-1-scaled.jpg": "Närbild på persiennlameller.",
    "blue-and-white-striped-folding-umbrella-above-the-street-2021-08-26-16-44-10-utc-scaled.jpg": "Randig markis sedd underifrån.",
    "blue-silk-drapery-and-upholstery-fabric-from-above-2022-12-16-13-58-17-utc-scaled.jpg": "Blått sidentyg på ett träbord.",
    "classic2.jpg": "Vit markis över en uteplats vid ett vitt hus.",
    "classic2.webp": "Samma som classic2.jpg.",
    "comfortable-outside-seating-area-with-fire-pit-2021-08-26-15-32-08-utc-scaled.jpg": "Uteplats med eldstad och ljusslingor på kvällen.",
    "cropped-Bellevue-mini-icon.png": "Bellevue-ikon, pixlig.",
    "curtain-draperies-at-window-close-up-2023-10-23-23-58-58-utc-scaled.jpg": "Vita och mörka gardiner vid ett fönster.",
    "di-gasell-foretag-dagens-industri-2022-malmo.png": "Logotyp DI Gasell 2022.",
    "divi-logo-mark-white.png": "Divi-logotyp.",
    "exterior-shots-of-a-modern-terrace-with-dining-table-2022-03-02-19-15-33-utc-scaled.jpg": "Randig markis över en takterrass med matbord.",
    "facebook.png": "Facebook-ikon.",
    "fonstermarkiser-vand.png": "Röda fönstermarkiser på ett höghus, spegelvänd.",
    "fonstermarkiser-vand.webp": "Samma som fonstermarkiser-vand.png.",
    "gardiner_img1.png": "Gardiner vid öppen dörr mot en innergård.",
    "horse-riding-8.jpg": "Häst vid ett rött stall.",
    "image-16.png": "Närbild på persienn och fönsterhandtag.",
    "image001-1024x576-1.jpg": "Vit pergola vid en pool.",
    "img_2287.jpeg": "Vardagsrum med två fåtöljer.",
    "img_2289.jpeg": "Fönster med många krukväxter.",
    "instagram.png": "Instagram-ikon.",
    "kontakt-img-bellevue-1.webp": "Fåtölj och orange bord framför persienn och gardin.",
    "kontakt-img-bellevue.png": "Samma motiv, fåtölj framför persienn.",
    "kontakt_header_img.png": "Samma motiv i bredformat.",
    "kostnadsfritt-hembesok-BTN.png": "Knappgrafik Boka in ett kostnadsfritt hembesök.",
    "low-angle-shot-of-a-pergola-wooden-ceiling-in-the-garden-2022-04-14-09-26-57-utc-scaled.jpg": "Träpergola med klätterväxt sedd underifrån.",
    "luxury-garden-furniture-2021-08-26-15-44-16-utc-1-scaled-356x310.jpg": "Trädgårdsmöbler under en träpergola.",
    "markiser-malmo-lund-nykoping-1-980x653-1.jpg": "Markis över ett matbord i skymningen, rendering.",
    "markiser-malmo-lund-nykoping-1-980x653-1.webp": "Samma som föregående.",
    "markiser_img1.png": "Ljus markis över ett trädäck.",
    "miljobild-christina6-scaled-1.jpg": "Gammal svart telefon på marken.",
    "minimalist-living-room-with-elegant-furniture-2021-08-26-22-48-55-utc-scaled-356x310.jpg": "Rullgardin vid ett fönster med en växt.",
    "obejktpersienn-barnsakrad-_1.jpg": "Vit persienn i ett fönster med etikett.",
    "open-door-leading-to-the-courtyard-of-the-house-2021-09-03-13-08-55-utc-1-scaled-356x267.jpg": "Gardiner vid öppen dörr mot en innergård.",
    "parasoll-1.png": "Parasoll framför en rosa fasad.",
    "parasoll-2.png": "Parasoll vid en pool.",
    "parasoll-3.png": "Parasoll sett underifrån mot blå himmel.",
    "parasoll-4.png": "Två barn under ett parasoll på en strand.",
    "parasoll_img1.png": "Parasoll på en uteplats vid ett tegelhus.",
    "parasoll_pool.png": "Parasoll vid en pool, stående.",
    "parsol_img2.png": "Parasoll vid en pool.",
    "pergola-img-vand.png": "Vit pergola vid en pool, spegelvänd.",
    "pergola_img1.png": "Trädgårdsmöbler under en träpergola.",
    "persienn-produkt-temp-1.jpg": "Vit persienn i ett fönster, produktbild.",
    "persienn-produkt-temp.jpg": "Samma persienn, produktbild.",
    "persienner-malmo_vit-1.png": "Bellevue-logotyp i vitt på grönt.",
    "pil_svart.png": "Liten svart pil.",
    "pil_vit.png": "Liten vit pil.",
    "rolls-of-fabric-and-textiles-in-a-factory-shop-2022-12-16-20-40-33-utc-scaled.jpg": "Tygrullar i nära bild.",
    "room-with-sunlight-coming-through-the-blinds-2022-03-23-19-09-45-utc-scaled.jpg": "Ljust rum med persienner och växter.",
    "room-with-sunlight-coming-through-the-blinds-2022-03-23-19-10-26-utc-scaled.jpg": "Ljust rum med persienner och pall.",
    "room-with-sunlight-coming-through-the-blinds-2022-03-23-19-10-26-utc-scaled.webp": "Samma som föregående.",
    "shadow-of-window-blinds-on-wall-2022-12-16-12-25-28-utc-scaled.jpg": "Persiennskuggor på en vit vägg.",
    "shutterstock_172695749-1024x576-1.jpg": "Matplats med fönsterluckor och blommor.",
    "shutterstock_298906718-1.jpg": "Vitt vardagsrum i motljus.",
    "shutterstock_311544557-1-1024x683-1.jpg": "Röda fönstermarkiser på ett höghus.",
    "shutterstock_36862129-1024x685-1.jpg": "Sovrum med träpanel och lamellgardiner.",
    "shutterstock_455819377-1024x576-1.jpg": "Ljusa lamellgardiner vid ett fönster.",
    "shutterstock_456666382-1024x576-1.jpg": "Balkonger på en äldre fasad.",
    "shutterstock_73378162-1024x576-1.jpg": "Villa med mörka markiser över fönstren.",
    "solskydd-logga-bs.png": "Bellevue-logotyp i svart på grönt.",
    "solskydd-pwa-screen-1-1.png": "Bellevue-logotyp, liten.",
    "solskydd_bild1.png": "Fåtölj framför persienn och gardin.",
    "sun-bath-with-sun-loungers-and-parasol-3d-rendering-2022-12-16-12-38-54-utc-scaled.jpg": "Solstolar vid en pool, rendering.",
    "sun-bath-with-sun-loungers-and-parasol-3d-rendering-2022-12-16-12-38-54-utc-scaled.webp": "Samma som föregående.",
    "terrace-at-the-back-of-the-house-2022-03-02-19-15-30-utc-scaled.jpg": "Trädäck längs ett hus med parasoll.",
    "terrace-at-the-back-of-the-house-2022-03-02-19-15-30-utc-scaled.webp": "Samma som föregående.",
    "testfakta_bellevue-150x150-1.jpg": "Märket Bäst i Test från Testfakta 2010.",
    "the-sun-loungers-by-the-pool-in-the-yard-2021-08-26-15-37-19-utc-scaled.jpg": "Solstolar och stängda parasoller vid en pool.",
    "the-sun-loungers-by-the-pool-in-the-yard-2021-08-26-15-37-19-utc-scaled.webp": "Samma som föregående.",
    "vertical-blinds-outside-the-window-2021-08-26-15-36-35-utc-scaled.jpg": "Vertikala lameller i motljus.",
    "white-and-gold-vertical-blinds-and-shadows-on-the-floor-2022-12-16-12-25-05-utc-scaled.jpg": "Vita vertikala lameller och skuggor på golvet.",
    "window-blinds-couch-and-artwork-2021-08-26-16-07-43-utc-1.jpg": "Vardagsrum med soffa och persienner.",
    "wireframe-square-1200.jpg": "Grå platshållarbild.",
    "zip-screen-Skane-204x300-1.jpg": "Zip screens på en grå träfasad, liten bild.",
    "zip-screen-img.png": "Ljusa zip screens och markis på en tegelvilla.",
    "zip-screen-img.webp": "Samma som zip-screen-img.png.",
    "zip-screen-malmo-980x653-1.jpg": "Samma motiv som zip-screen-img, mindre.",
    "zipscreen-Bellevue-solskydd-200x300-1-e1687269596823.jpg": "Närbild på en grå zip screen, liten bild.",
    "55263-sofa-and-blinds-in-living-room-2022-03-18-19-29-49-utc-1-1-scaled-1249x605.jpg": "Soffa med kuddar framför ljusa persienner.",
    "beige_jum-quadrat_terrasse-meerblick_becher-1.jpg": "Stora parasoller över en terrass vid havet.",
    "beige_jum-quadrat_terrasse-meerblick_becher.jpg": "Samma motiv.",
    "beige_jum-quadrat_terrasse-meerblick_becher.webp": "Samma motiv.",
}

# bildbank: description per file (manifest order), source from manifest
BB = {
    "Cadiz-1-1.jpg": "Rendering av Cadiz utfälld över en terrass vid en ljus tegelvilla.",
    "Cadiz-1-1024x576.jpg": "Samma villa på avstånd, Cadiz utfälld över terrassen.",
    "Cadiz_Variovolant.jpg": "Cadiz med nedfällt frontfall över en lounge, sedd uppifrån, en person.",
    "Tucan-7.jpg": "Tucan med LED över ett matbord vid en tegelfasad i kvällsljus.",
    "Tucan-1-1024x576.jpg": "Tucan utfälld under en balkong, sedd underifrån mot himlen.",
    "Tucan_closed_appartment_cassette-reverse-1024x576.jpg": "Stängd Tucan-kassett under ett tak, närbild.",
    "TalkAbout_Harol_2598.jpg": "Lamellpergola över ett långt dukat bord, sedd inifrån.",
    "Brera_HAROL2.jpg": "Brera mot en tegelfasad sedd uppifrån, lameller delvis skjutna åt sidan, två personer.",
    "Brera_White-2.jpg": "Vit lamellpergola vid en pool, sedd uppifrån.",
    "Brera_Black-13.jpg": "Svart pergola med en person i soffan, stående format.",
    "Opera_Harol.jpg": "Opera framför en häck, grupp personer vid en pool.",
    "Opera-2-1.jpg": "Kvinna läser under lamelltaket, del av taket syns.",
    "Opera_HR-12-1.jpg": "Pergola med havsutsikt, teleskop och dukat bord.",
    "Harol_Buitenleven_Opera_1.jpg": "Tre personer vid ett bord under en pergola, stående format.",
    "Nomo-1-e1708355196784.jpg": "Nomo med vikduk mot en vit och träklädd fasad.",
    "Nomo-2.jpg": "Nomo sedd underifrån mot en ljus tegelvilla.",
    "Harol_2021_Hasselt_Nomo_.jpg": "Detalj med pool och blommor, pergolan syns delvis, stående.",
    "Versuz-2_Harol.jpg": "Versuz över en lång terrass vid en mörk tegelvilla.",
    "Versuz-14.jpg": "Versuz bakom suddiga gula blommor i förgrunden.",
    "Versuz-7.jpg": "Versuz med lutande tak mot en tegelfasad, två personer i soffan.",
    "3.jpg": "Versuz Linea, vit horisontell pergola över ett matbord vid en vit villa.",
    "Harol-Coolscreen-8.jpg": "Tre Coolscreen nedfällda på en ljus tegelfasad.",
    "Harol_Coolscreen_S8_vierkante-kast.jpg": "Närbild av fyrkantig kassett med Harol-logga.",
    "Harol_Coolscreen_R8_ronde-kast.jpg": "Närbild av rund kassett.",
    "Coolscreen-8-Led-1.jpg": "Mörkt hus i skymning med screens, stående format.",
    "Coolscreen-8-Solar.jpg": "Screens på ett trähus vid en uteplats, stående format.",
    "DSC5998-2048x1367.jpg": "Sofiero med randig väv över ett glasparti på en orangeputsad villa.",
    "DSC6000-2048x1367.jpg": "Samma villa med blommor i förgrunden.",
    "DSC6069-2048x1367.jpg": "Inifrån: randig markis syns genom glasdörrarna.",
    "DSC4966_red.jpg": "Solliden över ett fönster på ett rött trähus, stående.",
    "DSC5013.jpg": "Solliden sedd underifrån mot himlen.",
    "solliden1-2048x1365.jpg": "Frilagd närbild av vals, väv och fallarm.",
    "haga3-2048x1490.jpg": "Två randiga markiser med kassett över fönster på ett grått trähus med blomlådor.",
    "80E3025-2048x1367.jpg": "Inifrån en matsal, markiser syns genom fönstren.",
    "haga2-2048x1509.jpg": "Markis sedd inifrån genom fönstret över ett badkar.",
    "lacko-2048x1513.jpg": "Lång randig markis över en fönsterrad på ett grått trähus.",
    "80E2992-2048x1367.jpg": "Läckö över en bred fönsterrad, svensk flagga i bakgrunden.",
    "lacko2-2048x1365.jpg": "Frilagd närbild av röd väv och fäste.",
    "84017Italia__kawiarnia_zdjecie.jpg.webp": "Gul Italia över en caféentré med texten Pauze och en trafikskylt.",
    "57510Italia__bok_markizy_detal.jpg.webp": "Frilagd detalj av sidofäste och vevkrok.",
    "72919R_95_ZiiiP__geometryczny_design.jpg.webp": "Genomskärning av rektangulär kassett.",
    "Foldegardin-lifegardin-model-1-ny.jpg": "Grå hissgardin, två bilder sida vid sida.",
    "foldegardin4.jpg": "Collage med fyra rum med hissgardiner.",
    "gardiner-ringe-kouser.jpg": "Grå gardin med öljetter på en stång.",
    "farver-kouser-v2.jpg": "Sex öljetter i olika färger.",
    "laeg-header.jpg": "Grå gardin med veck på en skena.",
    "2pleat-www.jpg": "Närbild av veck i grå väv.",
    "Dim-Out-Desire_004-sfw.jpg": "Ljusdämpande gardin i ett sovrum med stadsutsikt.",
    "4916-Altea-FR-Blackout-7-sfw.jpg": "Kök med hissgardiner och mörk inredning.",
    "VELOURBANNER_blue.JPG": "Blå velour med texten VELOUR.",
    "Curtain_Velta-M490068-velourside.jpg": "Grön velourgardin i ett vardagsrum, stående.",
    "d75b959d-7f4c-44d5-97ef-8665b0b37b37.jpg": "Vit gardin vid ett badkar med pampasgräs.",
    "Fasta_ramar_meny.png": "Menyikon med texten Fasta ramar, ingen produkt.",
    "Kök-1.jpg": "Kvinna drar ner ett rullnät i ett köksfönster; nätet syns svagt.",
    "mth_rullgardin_deluxe.png": "Menyikon med texten Rullgardin Deluxe, ingen produkt.",
    "Liten-bild_takfönster-1-of-1.jpg": "Kvinna med barn drar ner nät i ett takfönster.",
    "mth_takfönster-deluxe.png": "Menyikon med texten Takfönster Deluxe, ingen produkt.",
    "S700dorr.jpg": "Öppen balkongdörr i ett ljust rum; inget nät syns tydligt.",
    "rullgardin.png": "Menyikon med texten Rullgardin, ingen produkt.",
    "plisse.png": "Menyikon med texten Plissé, ingen produkt.",
    "Lifestyle_nätdörr-1-of-1.jpg": "Sidohängd nätdörr, oskarp, med krukväxter bakom.",
    "mth_solidesidoh.png": "Menyikon med texten Solide sidohängd, ingen produkt.",
    "Pojke-och-hund_plisse-1-of-1.jpg": "Pojke och hund bakom ett nätdraperi (filnamnet säger plissé).",
    "natdraperi.png": "Menyikon med texten Nätdraperi, ingen produkt.",
    "Awnings_EN_s4_Im0.jpg": "Markis över en terrass med två personer och sjöutsikt; modellen går inte att avgöra.",
    "Restauracja-Toruń-2.webp": "Två Jamaica över en uteservering vid en tegelfasad.",
    "2011_palladio_dom_jednorodzinny_czarnowasy_10_FIX.webp": "Palladio över en terrass vid en villa med pool.",
    "2012-05_Palladio_Hotel_Cypr_26_poprawka.webp": "Palladio på en hotellbalkong med havsutsikt.",
    "palladio-stare_zukowice+copy.webp": "Palladio sedd underifrån över en terrass med matbord.",
    "2009-07_Dakar_Dom_Tychy_077.webp": "Beige Dakar över en terrass vid en villa.",
    "Dakar-ChromaStock_59024753.webp": "Dakar över ett trädäck med pool och bergsutsikt.",
    "2017-wizualizacja-MARKIZA_CORSICA-dom_jednorodzinny.webp": "Rendering av Corsica över ett trädäck med räcke.",
    "2006-06_Italia_Kasetowa_Dom_Opole_05+-+RETUSZ.webp": "Italia Box över en altandörr på ett blåputsat hus.",
    "italia-poreczowa-2.webp": "Rosa balkongmarkiser på ett flerbostadshus.",
    "90400Italia_poreczowa__zdjecie_1.jpg.webp": "Randig röd-vit balkongmarkis över blommor.",
    "Fotolia_33296203_Subscription_Monthly_XXL_croped_wizualka.webp": "Modern vit villa med terrass; sidomarkisen syns inte tydligt.",
    "13188Refleksol_ZiiiP_Wielkogabarytowa.jpg.webp": "Stor screen på en vit fasad, solen speglas i glaset.",
    "13225R_120_ZiiiP_Lekkosc_formy.jpg.webp": "Screens framför ett glasparti sedda inifrån, havsutsikt.",
    "63582Jamaica__Volant3.jpg.webp": "Jamaica med nedfällt frontfall vid ett modernt hus.",
    "97019Energy_Saving.jpg.webp": "Illustration med energiklasser och ett grönt hus.",
    "93523Refleksol_ZiiiP_Wiatr.jpg.webp": "Illustration av vind mot en screen.",
    "10520Plastex__detal__Cord.jpg.webp": "Detalj av sidoskena med tätning.",
}


def bb_desc(file, model):
    name = os.path.basename(file)
    if name in BB:
        return BB[name]
    m = re.search(r"(RAL_\d{4}|FSM_71319)", name)
    if m:
        return f"Frilagd rendering av {model} i ramfärg {m.group(1).replace('_', ' ')}."
    if re.search(r"_FSM(_orto)?\.jpg\.webp$|FSM(-orto)?\.webp$", name):
        return f"Frilagd rendering av {model}."
    if re.match(r"^(Palladio|Jamaica|Dakar|Corsica|Italia-Kasetowa|Italia-Poreczowa|Bora)\.webp$", name) or name in ("s-R-120-ZiiiP-v1.webp",):
        return f"Måttskiss för {model}."
    if "transparent" in name:
        return f"Frilagd rendering av kassetten på {model}."
    if "lancuch" in name:
        return "Detalj av armled med kedja."
    if "podpora" in name:
        return "Detalj av teleskopstöd."
    if re.match(r"^\d{5,7}(01)?\.jpg\.webp$|^\d+_Markiza_Bora", name):
        return f"Frilagd bild av {model} mot mörk bakgrund."
    if "silnik" in name:
        return "Detalj av sidogavel med motor."
    if "zaokraglona" in name:
        return "Detalj av rundad kassett."
    if "uszczelka" in name:
        return "Detalj av gavel med tätning."
    if "oswietlenie_LED" in name:
        return "Detalj av LED i nederkanten."
    if "estetyczna_oslona" in name:
        return f"Frilagd rendering av {model} med skyddstak."
    if "volant_detal" in name:
        return "Detalj av gavel med rullbart frontfall."
    if "kaseta" in name or "zamknieta" in name:
        return f"Detalj av kassetten på {model}."
    if "borakaseta" in name or "69841120ziiip" in name:
        return f"Måttritning av kassetten på {model}."
    if "rewizja" in name:
        return "Detalj av kassett med servicelucka."
    if "Niestandardowy" in name:
        return "Frilagd rendering av R 120 ZiiiP med fyrkantig kassett."
    return f"Bild av {model}."


UMBRA = {
    "001-hero-plissegardin-kok.jpg": "Plissé över ett långt smalt köksfönster.",
    "007-lamellgardiner-i-sjovik.webp": "Vertikala lamellgardiner i ett högt vardagsrum, sett uppifrån.",
    "044-lamellgardiner-pa-marstrand.webp": "Lamellgardiner i ett triangelfönster och plissé nedanför.",
    "092-Lamellgardiner-Svealands-solskydd.webp": "Nederkant av vertikala lameller med kedja mot ett trägolv.",
    "090-Lamellgardiner-uterum-Svealands-solskydd.webp": "Lamellgardin i ett uterum med fåtöljer och fårskinn.",
    "004-mattanpassade-persienner-gbg.webp": "Vit persienn i ett fönster med ljusstakar, stående.",
    "034-mattanpassade-persienner-i-goteborg.webp": "Två vita persienner i ett fönster ovanför en säng, stående.",
    "015-morklaggande-rullgardin-molndal.webp": "Mörk rullgardin i ett sovrumsfönster.",
    "014-morklaggande-rullgardin-partille.webp": "Mörk rullgardin i ett stort fönster med träkarm.",
    "persienn 1.webp": "Vit persienn i ett fönster ovanför en säng, stående.",
    "091-persienner-1-svealands-solskydd.webp": "Persienn i en glasdörr, stående.",
    "093-persienner-1webp.webp": "Sovrum med träpersienner, Luxaflex-etikett på sängen.",
    "094-persienner-2-svealands-solskydd.webp": "Vardagsrum med persienner bakom gardiner.",
    "089-persienner-badrum-svealands-solskydd.webp": "Badrum med persienn bakom ett fristående badkar.",
    "090-persienner-svealands-solskydd-1.webp": "Persienn i en glasdörr, stående.",
    "042-persienner-svealands-solskydd.webp": "Närbild av persiennlameller med Svealands-etikett.",
    "095-persienner-utvald-bild-1200x628-1.webp": "Närbild av mörka persiennlameller.",
    "088-persienner-vardagsrum-svealands-solskydd.webp": "Vardagsrum med rosa soffa och persienner.",
    "plisse 4.jpg": "Plissé längs ett inglasat balkongräcke.",
    "plisse 6.jpg": "Ljus plissé i ett fönster med en monstera.",
    "plisse oop 12.webp": "Två plisséer i ett fönster mot en trädgård.",
    "105-plisse.jpg": "Mörk plissé i en glasdörr i ett marmorbadrum.",
    "plisse3.jpg.webp": "Gröna plisséer i ett uterum.",
    "022-plissegardin-i-kok-goteborg.jpg": "Plissé över ett köksfönster bakom en diskho.",
    "006-plissegardiner-for-sommarstuga-i-falkenberg.webp": "Plissé i en fönsterrad bakom ett matbord.",
    "023-plissegardiner-for-stora-fonster-i-eriksberg.webp": "Beige plisséer i stora fönster med stadsutsikt.",
    "024-plissegardiner-for-takfonster-i-molndal.webp": "Plissé i fönster och balkongdörr i ett vardagsrum.",
    "021-plissegardiner-i-goteborg.webp": "Plissé över ett köksfönster med mikrovågsugn.",
    "026-plissegardiner-i-lerum.webp": "Plissé i två fönster på ett vitt trähus, sett utifrån.",
    "025-plissegardiner-pa-balkong-i-eriksberg-goteborg.webp": "Plissé längs en inglasad balkong.",
    "038-Rullgardiner-1-Svealands-solskydd.webp": "Vävprov med Svealands logotyp.",
    "102-rullgardiner-balkong-2-kopiera.webp": "Rullgardiner på en inglasad balkong högt upp, stående.",
    "103-rullgardiner-balkong-kopiera.webp": "Rullgardiner på en inglasad balkong med utsikt, stående.",
    "104-rullgardiner-inglasad-balkong.webp": "Inglasad balkong med rullgardiner, stadsutsikt, stående.",
    "096-Rullgardiner-svarta.webp": "Mörkgröna rullgardiner i två fönster i ett vardagsrum.",
    "097-Rullgardiner-svealands-solskydd-1.webp": "Rullgardin i ett fönster ovanför ett dukat bord.",
    "100-Rullgardiner-Svealands-solskydd.webp": "Ljus rullgardin i ett sovrumsfönster.",
    "005-screen-rullgardiner-i-kungalv.webp": "Screen-rullgardiner i ett inglasat uterum.",
    "018-Svealands-solskydd-fasadpersienner.webp": "Fasadpersienner, collage med två bilder.",
    "072-Svealands-solskydd-morklaggande-rullgardin.webp": "Grå rullgardin i ett fönster över ett skrivbord.",
    "101-Svealands-solskydd-plissegardin-badrum-.webp": "Mörk plissé i en glasdörr i ett marmorbadrum.",
    "071-Svealands-solskydd-rullgardiner-i-kok.webp": "Ljus rullgardin i ett köksfönster med kruka.",
    "016-transparent-rullgardin-onsala.webp": "Ljus rullgardin framför ett stort fönster mot skärgården.",
}
UMBRA_AI_SIZE = {(1408, 768)}  # Gemini output size; these three look generated


def img_info(p):
    try:
        with Image.open(p) as im:
            return f"{im.width}×{im.height}"
    except Exception:
        return "okänt"


rows = []  # (group, path_display, rel_for_html, dims, kb, desc, source, used)


def add(group, path, desc, source, used="används inte"):
    rel = os.path.relpath(path, OUT).replace(os.sep, "/")
    disp = str(path.relative_to(DESKTOP)).replace(os.sep, "/")
    rows.append((group, disp, rel, img_info(path), round(path.stat().st_size / 1024), desc, source, used))


# a) public/images + og + video
for p in sorted((ASTRO / "public" / "images").rglob("*")):
    if p.is_file():
        key = p.relative_to(ASTRO / "public" / "images").as_posix()
        d, s = PUBLIC[key]
        add("a) astro/public/images", p, d, s, used_on("/images/" + key))
for p in sorted((ASTRO / "public" / "og").glob("*")):
    d, s = OG[p.name]
    add("a) astro/public/images", p, d, s, used_on("/og/" + p.name))
vid = ASTRO / "public" / "videos" / "pergola-hero.mp4"
rows.append(("a) astro/public/images", str(vid.relative_to(DESKTOP)), None, "video", round(vid.stat().st_size / 1024),
             "Video: pergola i skymningen med personer (samma scen som postern).", AI, used_on("/videos/pergola-hero.mp4")))

# b) bildbank
import json  # noqa: E402

man = json.loads((REPO / "bildbank" / "manifest.json").read_text(encoding="utf-8"))
MAKERS = {"harol": "Harol", "selt-aluprof": "Selt/Aluprof", "fonstermiljo": "Fönstermiljö", "mth": "MTH", "pagunette": "Pagunette", "3m": "3M"}
for im in man["images"]:
    p = REPO / "bildbank" / im["file"]
    model = im["model"].replace("-", " ").title().replace("Ziiip", "ZiiiP")
    add("b) bildbank", p, bb_desc(im["file"], model), f"tillverkare ({MAKERS.get(im['maker'], im['maker'])})")

# c) arkiv (originals only)
for p in sorted((REPO / "arkiv" / "content" / "media" / "images").rglob("*")):
    if not p.is_file() or (re.search(r"-\d+x\d+\.", p.name) and not any(k[:28] == p.name[:28] for k in ARKIV)):
        continue
    desc = ARKIV.get(p.name) or next((v for k, v in ARKIV.items() if k[:28] == p.name[:28]), "okänt")
    src = OLD + (" (stockbild enligt filnamnet)" if re.search(r"shutterstock|-utc-|stock", p.name) else "")
    add("c) arkiv (gamla sajten)", p, desc, src)

# d) Bellevue site bilder
for p in sorted(BSB.rglob("*")):
    if p.is_file() and p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp") and "hero-underlag" not in p.parts:
        d, s = BSB_DESC[p.name]
        add("d) Bellevue site bilder", p, d, s)

# e) Umbra candidates in Repon (max 50, unique)
seen = set()
cands = []
for line in Path(os.environ.get("UMBRA_LIST", "/dev/null")).read_text().splitlines():
    p = Path(REPON / line.lstrip("./"))
    if not p.exists():
        continue
    h = hashlib.md5(p.read_bytes()).hexdigest()
    key = re.sub(r"^\d+-", "", p.name).lower()
    if h in seen or key in seen:
        continue
    seen.update({h, key})
    cands.append(p)
for p in cands[:50]:
    with Image.open(p) as im:
        size = im.size
    if "svealand" in str(p).lower():
        src = "återförsäljarsajt (Svealands solskydd); Umbra-ursprung okänt"
    elif size in UMBRA_AI_SIZE:
        src = "AI (trolig, Gemini-format 1408×768); Umbra-ursprung okänt"
    else:
        src = "återförsäljarsajt (Direkt Solskydd); Umbra-ursprung okänt"
    if "093-persienner" in p.name:
        src = "återförsäljarsajt (Svealands solskydd); Luxaflex-etikett syns, inte Umbra"
    add("e) Umbra-kandidater i Repon (kopieras inte)", p, UMBRA[p.name], src)

# ---------- write ----------
with open(OUT / "bildinventering.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh)
    w.writerow(["grupp", "sokvag", "matt", "filstorlek_kb", "visar", "kalla", "anvands_pa"])
    for g, disp, _rel, dims, kb, desc, src, used in rows:
        w.writerow([g, disp, dims, kb, desc, src, used])

groups = defaultdict(list)
for r in rows:
    groups[r[0]].append(r)
parts = ["<!DOCTYPE html><html lang='sv'><head><meta charset='utf-8'><title>Bildinventering 2026-11-04</title><style>",
         "body{font:13px/1.4 system-ui,sans-serif;margin:20px;background:#f4f4f4;color:#222}h2{margin:28px 0 8px;border-bottom:1px solid #ccc}",
         ".row{display:flex;flex-wrap:wrap;gap:10px}.c{width:230px;background:#fff;border:1px solid #ddd;padding:6px;word-break:break-all;font-size:11px}",
         ".c img{width:100%;height:150px;object-fit:contain;background:#eee;display:block}.ai{border-color:#c60}.s{color:#555}</style></head><body>",
         "<h1>Bildinventering 2026-11-04</h1><p>Sökvägar är relativa till skrivbordet. Orange ram = AI-genererad. Samma data finns i bildinventering.csv.</p>"]
for g, items in groups.items():
    parts.append(f"<h2>{html.escape(g)} ({len(items)})</h2><div class='row'>")
    for _g, disp, rel, dims, kb, desc, src, used in items:
        thumb = f"<img loading='lazy' src='{html.escape(rel)}' alt=''>" if rel else "<div style='height:150px;background:#ddd'>video</div>"
        cls = "c ai" if src.startswith("AI") else "c"
        parts.append(f"<div class='{cls}'>{thumb}<b>{html.escape(disp)}</b><br>{dims} · {kb} KB<br>{html.escape(desc)}<br><span class='s'>{html.escape(src)} · {html.escape(used)}</span></div>")
    parts.append("</div>")
parts.append("</body></html>")
(OUT / "index.html").write_text("\n".join(parts), encoding="utf-8")
print(len(rows), "rader;", {g: len(v) for g, v in groups.items()})
