import type { Metadata } from "next";
import type { CityPageConfig } from "@/components/sections/CityPageView";
import { SITE_URL } from "@/lib/schema";

export type CityPageEntry = CityPageConfig & { metadata: Metadata };

function entry(config: CityPageConfig): CityPageEntry {
  return {
    ...config,
    metadata: {
      title: config.metadataTitle,
      description: config.metadataDescription,
      alternates: { canonical: config.pageUrl },
    },
  };
}

const url = (slug: string) => `${SITE_URL}/${slug}/`;

export const CITY_PAGES: Record<string, CityPageEntry> = {
  "markiser-skanor-falsterbo": entry({
    product: "markiser",
    citySlug: "skanor-falsterbo",
    cityLabel: "Skanör-Falsterbo",
    pageUrl: url("markiser-skanor-falsterbo"),
    metadataTitle: "Markiser Skanör-Falsterbo | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Skanör, Falsterbo, Höllviken och Ljunghusen — premiumkassetter med korrosionsskydd för Sveriges hårdaste fasadklimat.",
    answerBox:
      "Skanör-Falsterbohalvön har Sveriges hårdaste fasadklimat — salt, vind, UV. Vi använder enbart premiumkassetter med korrosionsbeständiga komponenter och vindsensor. Klassiska färger i randigt eller unikulör för att matcha sommarvillornas estetik.",
    whyParagraphs: [
      "Falsterbohalvön sticker ut åt tre håll i Östersjön och möter vinden från alla riktningar. På söder- och västerlägen kan byar gå över 20 m/s flera gånger per säsong. Standardmarkiser klarar inte detta — vi använder enbart kassettmodeller med vindklass 3 enligt EN 13561 och alltid vindsensor.",
      "Estetiken är lika viktig som tekniken. Skanör-Falsterbo har en stark byggnadskaraktär — fiskelägets randiga markiser, 50–60-tals sommarvillor i vita unikulörer, modernt minimalt. Vi tar med oss klassiska randvävar och premiumkulörer för att hitta något som matchar arkitekturen.",
    ],
    processIntro:
      "Vid hembesök inspekterar vi fasaden för korrosionsspår, befintliga fästpunkter och vindexponering. Premiumkomponenter är standard.",
    faqs: [
      {
        question:
          "Hur tål markiser saltvinden i Skanör, Falsterbo, Höllviken och Ljunghusen?",
        answer:
          "Med premium kassettmarkis, vindsensor och korrosionsbeständig infästning, mycket bra. Vi använder fästen i rostfritt eller marinklassad aluminium och mekanik som är specifikt designad för kustnära installation. Avspolning med sötvatten 3–4 gånger per säsong rekommenderas.",
      },
      {
        question:
          "Finns det markisfärger som passar klassiska sommarvillor i Falsterbo?",
        answer:
          "Ja. Klassiska randiga vävar i marin-rött/vitt, ljusblått/vitt eller grönt/vitt är vanliga val på 50–60-tals sommarvillor. Unikulörer i kremvit, sandbeige eller dovgrön passar både äldre och nyare hus. Vi har provkartor med epokriktiga färger.",
      },
      {
        question:
          "Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen från Staffanstorp?",
        answer:
          "Ja, alla fyra orter. Vi kör till Falsterbohalvön regelbundet och kan koordinera flera kunder samma dag. Avstånd cirka 35–40 minuters bilväg via E6 och länsväg 100. Hembesök kostar inget.",
      },
    ],
    ctaHeading: "Boka hembesök i Skanör-Falsterbo.",
    ctaBody:
      "Vi besöker fasaden, bedömer vind- och saltbelastning och föreslår en premiummarkis som klarar Falsterbohalvöns klimat. Hembesök och offert är kostnadsfria.",
  }),
};
