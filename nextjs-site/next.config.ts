import type { NextConfig } from "next";

// Mappning från gamla WordPress-URL:er till nya sidor. Varje entry genereras
// med och utan trailing slash så att båda varianterna matchar.
const wordpressRedirectMap: Array<[string, string]> = [
  // Direktmatchningar (samma slug)
  ["/persienner", "/persienner"],
  ["/trapersienner", "/trapersienner"],
  ["/plissegardiner", "/plissegardiner"],
  ["/rullgardiner", "/rullgardiner"],
  ["/lamellgardiner", "/lamellgardiner"],
  ["/panelgardiner", "/panelgardiner"],
  ["/draperier", "/draperier"],
  ["/terrassmarkiser", "/terrassmarkiser"],
  ["/fonstermarkiser", "/fonstermarkiser"],
  ["/korgmarkiser", "/korgmarkiser"],
  ["/pergola", "/pergola"],
  ["/parasoller", "/parasoller"],
  ["/insektsskydd", "/insektsskydd"],
  ["/zip-screen", "/zip-screen"],
  ["/vindskydd", "/vindskydd"],
  ["/kontakt", "/kontakt"],

  // Orts-varianter → generisk produktsida
  ["/persienner-malmo", "/persienner"],
  ["/persienner-lund", "/persienner"],
  ["/persienner-helsingborg", "/persienner"],
  ["/persienner-bellevue-nykoping", "/persienner"],
  ["/markiser-malmo", "/markiser"],
  ["/markiser-lund", "/markiser"],
  ["/markiser-helsingborg", "/markiser"],
  ["/markiser-ost", "/markiser"],
  ["/rullgardin-ost", "/rullgardiner"],
  ["/lamellgardin-bellevue-solskydd-nykoping", "/lamellgardiner"],
  ["/plissegardin-nykoping", "/plissegardiner"],
  ["/panelgardiner-ost", "/panelgardiner"],
  ["/parasoll-ost", "/parasoller"],
  ["/pergola-ost", "/pergola"],
  ["/vindskydd-bellevue-solskydd-nykoping", "/vindskydd"],
  ["/kontakt-ost", "/kontakt"],

  // Synonymer och kampanjsidor
  ["/wavegardiner", "/draperier"],
  ["/kampanjsida-plissegardiner", "/plissegardiner"],
  ["/kampanjsida-persienner", "/persienner"],

  // Företagssidor (ingen motsvarande sida i nya sajten) → startsida
  ["/om-oss", "/"],
  ["/om-oss/miljo-kvalitetspolicy", "/"],
  ["/om-oss/samarbetspartner", "/"],
  ["/om-oss/unika-funktioner", "/"],
  ["/tjanster", "/"],
  ["/produkter", "/"],
  ["/referensprojekt", "/"],
  ["/hem", "/"],
  ["/bloggen-om-solskydd", "/"],

  // Kontakt-relaterade
  ["/kostnadsfritt-hembesok", "/kontakt"],
  ["/tack-meddelande", "/kontakt"],
  ["/tack-meddelande-ost", "/kontakt"],

  // Blogginlägg — intelligenta mappningar
  ["/persienner-eller-gardiner-vad-ar-bast-for-dig", "/persienner"],
  ["/pergola-en-elegant-losning-for-din-tradgard", "/pergola"],
  ["/1-552-persienner-till-kronprinsen-i-malmo", "/persienner"],
  ["/arets-julklapp-markisen", "/markiser"],
  ["/varkampanj-20-rabatt-pa-markiser", "/markiser"],
  ["/forlang-sasongen-pa-din-uteplatsterrass", "/terrassmarkiser"],
  ["/saljare-sokes-till-bellevue-solskydd-ab", "/kontakt"],

  // Blogginlägg utan tydlig produktkoppling → startsida
  ["/vara-gardiner-skapar-varmare-atmosfar", "/"],
  ["/solskydd-motverkar-kallras", "/"],
  ["/stor-hostkampanj-med-20-rabatt-pa-alla-solskydd", "/"],
  ["/bellevue-solskydd-onskar-god-jul-och-gott-nytt-ar", "/"],
  ["/god-jul-och-gott-nytt-ar", "/"],
  ["/semesterstangt-2", "/"],
  ["/glad-midsommar", "/"],
  ["/paskstangt", "/"],
  ["/valkommen-2020", "/"],
  ["/jul-nyarsstangt-3", "/"],
  ["/onsdagen-den-11-12-stanger-vi-kl-1500", "/"],
  ["/glad-pask", "/"],
  ["/jul-nyarsstangt-2", "/"],
  ["/989-2", "/"],
  ["/913-2", "/"],
  ["/e-mail-problem-lost", "/"],
  ["/tekniska-problem-med-vara-e-mail-adresser", "/"],
  ["/somfy-utbildning-fran-kl-13-00-onsdag-202", "/"],
  ["/jul-nyarsstangt", "/"],
  ["/lussefirande-1312", "/"],
  ["/storningar-telefonnatet-atgardat", "/"],
  ["/storningar-i-telefonnatet", "/"],
  ["/semesterstangt", "/"],
  ["/forlangt-masserbjudande-fran-bellevue-solskydd", "/"],
  ["/vinn-biljetter-till-stora-villamassan-malmo", "/"],
  ["/montageteam-bellevue-solskydd", "/"],
  ["/stora-villamassan-malmo", "/"],
  ["/ny-hemsida", "/"],
  ["/omtyckt-persiennfabrik-i-malmo-byter-agare", "/"],
];

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: ".",
  },
  // OBS: `output: "export"` bygger ren statisk HTML — `redirects()` körs inte
  // vid runtime eftersom det inte finns någon Next-server. Kartan här
  // dokumenterar avsikten och aktiveras automatiskt om `output: "export"`
  // släpps (t.ex. vid flytt till Vercel). För nuvarande GitHub Pages-deploy
  // krävs hostinglagrets redirect-mekanism eller separat _redirects-fil.
  async redirects() {
    return wordpressRedirectMap.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
