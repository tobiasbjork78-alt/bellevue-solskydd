import { CityPageView } from "@/components/sections/CityPageView";
import { CITY_PAGES } from "@/lib/cityPageData";

const config = CITY_PAGES["rullgardiner-trelleborg"];

export const metadata = config.metadata;

export default function Page() {
  return <CityPageView config={config} />;
}
