// Navigation structure shared by Header and Footer (UI text, allowed in code).
export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export const navInvandigt: NavItem[] = [
  { label: "Översikt invändigt", href: "/invandigt-solskydd/" },
  { label: "Persienner", href: "/persienner-malmo/" },
  { label: "Plisségardiner", href: "/plissegardiner-malmo/" },
  { label: "Rullgardiner", href: "/rullgardiner-malmo/" },
  { label: "Lamellgardiner", href: "/lamellgardiner-malmo/" },
];

export const navUtvandigt: NavItem[] = [
  {
    label: "Markiser",
    href: "/markiser-malmo/",
    children: [
      { label: "Fönstermarkiser", href: "/fonstermarkiser-malmo/" },
    ],
  },
  { label: "Zip Screen", href: "/zip-screen-malmo/" },
  { label: "Pergola", href: "/pergola-malmo/" },
  { label: "Insektsskydd", href: "/insektsskydd-malmo/" },
];

export const navLinks = [
  { label: "Guider", href: "/guider/" },
  { label: "Om oss", href: "/om-oss/" },
  { label: "Kontakt", href: "/kontakt/" },
];

// Footer "Tjänster": plain text, not links
export const serviceItems = ["Rådgivning på plats", "Måttagning", "Montering", "Service & reparation"];

export const aboutLinks = [
  { label: "Om oss", href: "/om-oss/" },
  { label: "Referenser", href: "/referenser/" },
  { label: "Guider", href: "/guider/" },
];

// Additional entries in the Header that are not under "Invändigt"/"Utvändigt" groups
// are handled in Header.astro; the footer mirrors the same product structure.
export const markiserSkanor = { label: "Markiser Skanör-Falsterbo", href: "/markiser-skanor-falsterbo/" };
