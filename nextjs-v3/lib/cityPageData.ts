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
  // ─────────────────── LUND ───────────────────
  "persienner-lund": entry({
    product: "persienner",
    citySlug: "lund",
    cityLabel: "Lund",
    pageUrl: url("persienner-lund"),
    metadataTitle: "Persienner Lund | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Lund — måttanpassade lösningar för sekelskifteslägenheter, brf och villor i Professorsstaden. Hembesök från Staffanstorp.",
    answerBox:
      "Persienner är ett invändigt solskydd som passar Lunds blandade bebyggelse — från trånga studentlägenheter till sekelskiftesfastigheter och brf med strikt fasadestetik. Vi mäter på plats och föreslår lameller och färg som matchar både fönster och förening.",
    whyParagraphs: [
      "Lund är en universitetsstad med särpräglad blandning: trånga lägenheter i kvarteren runt Domkyrkan, sekelskiftesfastigheter med originalfönster, brf-hus från olika epoker och villaområden som Professorsstaden. Persienner är diskreta, måttanpassade och påverkar inte fasaden — vilket gör dem till ett vanligt val även i föreningar med strikta regler.",
      "I äldre lägenheter med kopplade fönster väljer vi ofta smalare lameller (25 mm) som inte konkurrerar med listverk och fönsterspröjsar. I nyare brf och villor passar bredare lameller (35 eller 50 mm) bättre — de ger en lugnare yta. Vi har vävprover och färgkartor att visa direkt vid hembesöket.",
    ],
    processIntro:
      "Vi utgår från Staffanstorp och kör till Lund regelbundet — det är ungefär 20 minuters bilväg. Fönstermått, materialval och offert hanteras i ett enda hembesök.",
    faqs: [
      {
        question: "Servar ni hela Lund från Staffanstorp?",
        answer:
          "Ja. Vi kör till Lund regelbundet — både centrala kvarter, Norra Fäladen, Klostergården och villaområden som Professorsstaden. Hembesöket är kostnadsfritt och tar normalt 30–60 minuter beroende på antalet fönster.",
      },
      {
        question: "Påverkar bostadsrättens regler val av invändiga persienner?",
        answer:
          "Sällan. Persienner sitter på insidan av rutan och syns inte utåt — de flesta föreningar i Lund tillåter dem utan särskilt godkännande. Är ni osäkra hjälper vi gärna till att formulera en kort beskrivning till styrelsen.",
      },
      {
        question:
          "Kan ni matcha specialfärger för en bevarandeklassad fastighet?",
        answer:
          "Ja. För kulturhistoriska fastigheter i centrala Lund kan vi specialbeställa persienner i RAL-färg och välja band/snöre i en tonad nyans. Vi tar med fysiska färgprover vid hembesöket så att valet kan göras mot rummets ton i naturligt ljus.",
      },
    ],
    ctaHeading: "Boka hembesök i Lund.",
    ctaBody:
      "Vi kommer hem till er i Lund — centralt eller i villakvarteren — mäter, visar prover och lämnar en specificerad offert. Hembesöket är kostnadsfritt och utan köpkrav.",
  }),

  "markiser-lund": entry({
    product: "markiser",
    citySlug: "lund",
    cityLabel: "Lund",
    pageUrl: url("markiser-lund"),
    metadataTitle: "Markiser Lund | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Lund — terrass, fönster och balkong. Brf-godkända modeller och kulörer som passar äldre fasader. Hembesök, måttagning och montering.",
    answerBox:
      "Markiser är utvändigt solskydd som monteras på fasaden — och därför är de ett fasadingrepp som ofta kräver styrelsens godkännande i Lunds bostadsrätter. Vi hjälper er välja modell och färg som passar både fönstret och föreningens regler.",
    whyParagraphs: [
      "Lund har många flerbostadshus där fasadens uttryck är en gemensam tillgång. Det betyder att brf-styrelser ofta har en bestämd färgskala för markiser, och att val måste passa in. Vi tar fram förslag som följer föreningens regler — och dokumentation som ni kan skicka in.",
      "På villor i Professorsstaden, S:t Lars och norra Lund är klassiska fällarmsmarkiser och korgmarkiser vanliga. Vi rekommenderar kassettmodell på utsatta lägen så att väven skyddas när markisen är indragen — det förlänger livslängden och håller färgen.",
    ],
    processIntro:
      "Markiser är ett av få solskydd där bygglov eller styrelsegodkännande kan bli aktuellt. Vi tar med oss färgprover, ritningar och underlag som ni kan skicka in.",
    faqs: [
      {
        question:
          "Hur ser tillståndsprocessen ut för markis i Lunds bostadsrätter?",
        answer:
          "I de flesta brf i Lund krävs styrelsens godkännande innan ni får montera utvändig markis. Föreningen har ofta en gemensam färgskala. Vi tar fram modell-, färg- och infästningsunderlag som ni skickar in. Beslut tar normalt 2–4 veckor.",
      },
      {
        question:
          "Vilken markisstil passar för en klassisk fasad i centrala Lund?",
        answer:
          "Klassiska fällarmsmarkiser i ensfärgad eller randig akrylväv är det vanligaste valet. Korgmarkis vid entrédörrar och butiksfasader. På 70-talsfasader passar släta unikulörer bättre. Vi visar färgprover mot er fasad vid hembesöket.",
      },
      {
        question: "Är vinden i Lund ett problem för markiser?",
        answer:
          "Lund ligger något inåt landet och är mindre vindexponerat än kuststäderna. För standardvillor i Lund räcker normalt vindklass 2 enligt EN 13561. På högre lägen och utsatta fasader rekommenderar vi vindsensor som rullar in markisen automatiskt.",
      },
    ],
    ctaHeading: "Boka hembesök i Lund.",
    ctaBody:
      "Vi besöker fasaden, går igenom föreningens eventuella regler och föreslår en markislösning som passar både huset och brf:n. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-lund": entry({
    product: "plisse",
    citySlug: "lund",
    cityLabel: "Lund",
    pageUrl: url("plissegardiner-lund"),
    metadataTitle: "Plisségardiner Lund | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Lund för sekelskiftesfönster, smala lägenhetsfönster och takfönster. Måttanpassad plissé spänns mellan vajrar. Hembesök ingår.",
    answerBox:
      "Plissé är en plisserad väv som spänns mellan vajrar och kan följa nästan vilken fönsterform som helst. Det gör den till ett av få solskydd som fungerar i Lunds äldre lägenheter med ovanliga fönstermått — smala, halvcirkelformade eller snedställda.",
    whyParagraphs: [
      "Lunds centrala kvarter har ett bestånd av lägenheter där originalfönstren har bevarats. Måtten är sällan standardiserade — fönstren är smalare, högre eller har en omramning som gör att rullgardin eller persienn inte passar. Plissén klipps i exakta mått och fungerar oavsett geometri.",
      "I funkishus från 1930–1950-talet, vanliga i kvarteren runt Klostergården, finns ofta välvda eller snedställda fönster i trapphus. Plissé i top-down/bottom-up-utförande är ett bra val för dessa — ljus uppifrån, insynsskydd nertill.",
    ],
    processIntro:
      "Specialformade fönster kräver mer tid vid måttagningen. Vi avsätter extra tid vid hembesök i Lunds äldre lägenheter och dubbelkollar mått innan beställning.",
    faqs: [
      {
        question:
          "Kan ni mäta upp ett halvcirkelformat fönster i en lundalägenhet?",
        answer:
          "Ja. Halvcirkulära, triangulära och snedställda fönster är vanliga i Lunds äldre fastigheter. Vi använder en utbyggd mall som följer fönstrets verkliga form, och plissén tillverkas mot beställning. Leveranstid är 4–6 veckor på sådana mått.",
      },
      {
        question: "Hur snabbt kan ni leverera måttanpassad plissé till Lund?",
        answer:
          "Standardmått ligger på 1–3 veckor från godkänd offert. Specialformer och specialvävar 4–6 veckor. Vi anger en tydlig tidsplan i offerten och bokar montering så snart varan är inkommen.",
      },
      {
        question: "Vilken plissé passar en bostadsrätt i centrala Lund?",
        answer:
          "I sekelskiftesfastigheter väljer vi ofta enkelvikt med smal plisseringsbredd för att inte konkurrera med fönsterspröjsen. På norrfasader fungerar transparenta vävar bra; på söder- och västersida är ljusfiltrerande väv ett vanligare val.",
      },
    ],
    ctaHeading: "Boka hembesök i Lund.",
    ctaBody:
      "Vi mäter alla fönster — även de med ovanlig form — och föreslår en plissélösning per rum. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-lund": entry({
    product: "rullgardiner",
    citySlug: "lund",
    cityLabel: "Lund",
    pageUrl: url("rullgardiner-lund"),
    metadataTitle: "Rullgardiner Lund | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Lund för studentlägenheter, kontor och villor. Transparent, ljusfiltrerande och mörkläggande väv. Hembesök från Staffanstorp.",
    answerBox:
      "Rullgardin är ett enkelt och prisvärt invändigt solskydd — en jämn väv som rullas upp eller ner. I Lund passar den bra för studentlägenheter, mindre kontor och villor där ni vill ha ett rent uttryck utan synliga lameller eller plisseringar.",
    whyParagraphs: [
      "Lund har ett bestånd av små lägenheter — i synnerhet i de centrala kvarteren och kring universitetet — där rullgardin är det självklara valet. Väven rullas helt åt sidan när den inte används, vilket gör att fönstret känns större. Vi har klämfästen som inte skadar karm eller listverk, vilket är viktigt i hyresrätter och brf.",
      "På Lunds kontorsfastigheter — IDEON, Brunnshög, Sankt Lars — är rullgardin standard på det glas som vetter mot söder eller väster. Screen-väv släpper igenom utsikt utåt men dämpar bländning på skärmarbete utan att man behöver tända elljus.",
    ],
    processIntro:
      "Rullgardin är vårt snabbaste solskydd att leverera. På standardmått och lagerfärger kan ni ha den uppe inom någon vecka från offert.",
    faqs: [
      {
        question:
          "Kan ni montera rullgardin i en hyresrätt i Lund utan att skada karm?",
        answer:
          "Ja. Vi använder klämfästen eller spännfästen som låses utan skruv i karmen. Det är vanligt i hyresrätter och studentlägenheter — fästena kan demonteras vid avflyttning utan spår.",
      },
      {
        question: "Vilken rullgardin passar bäst för ett kontor i Lund?",
        answer:
          "Screen-väv med 3–5 procent öppningsgrad är vanligaste valet. Den dämpar bländning vid skärmarbete, behåller utsikt utåt och passar både äldre kontorsfastigheter och nya kontor i Brunnshög och IDEON. Motorisering är vanlig på höga eller många fönster.",
      },
      {
        question: "Hur långt har ni från Staffanstorp till Lund?",
        answer:
          "Cirka 15 km, normalt 20–25 minuter bilväg. Vi kör till Lund flera gånger i veckan för hembesök, måttagning och montering. Hembesöket kostar inget.",
      },
    ],
    ctaHeading: "Boka hembesök i Lund.",
    ctaBody:
      "Vi mäter på plats, visar vävprover och föreslår en rullgardinslösning som passar rummet. Hembesök och offert är kostnadsfria — gäller hem, kontor och studentlägenheter.",
  }),

  // ─────────────────── STAFFANSTORP ───────────────────
  "persienner-staffanstorp": entry({
    product: "persienner",
    citySlug: "staffanstorp",
    cityLabel: "Staffanstorp",
    pageUrl: url("persienner-staffanstorp"),
    metadataTitle: "Persienner Staffanstorp | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Staffanstorp — vår hemmaort. Måttanpassade persienner för 70–80-tals villor och nybyggen i Sockerbruksområdet. Snabba hembesök.",
    answerBox:
      "Vi har vårt kontor på Satellitvägen i Staffanstorp och utgår härifrån för hembesök i hela södra Skåne. Persienner är ett klassiskt val för kommunens 70–80-tals villor med stora fönsterpartier — och för nybyggen i Sockerbruksområdet.",
    whyParagraphs: [
      "Staffanstorp domineras av villor från 70- och 80-talet, ofta med stora fönsterpartier mot trädgården. Persienner är ett bra val här eftersom lamellerna kan vinklas i steg — full öppning på morgonen för att släppa in ljuset, vinklad mot eftermiddagssolen, helt stängd på kvällen för insynsskydd.",
      "I Sockerbruksområdet och övriga nybyggen i centrala Staffanstorp har bostäderna ofta moderna fönster med smalare karmar. Där passar persienner mellan karm och båge bra — installationen blir diskret och syns knappt.",
    ],
    processIntro:
      "Vi sitter i Staffanstorp och kan ofta komma på hembesök redan dagen efter ert samtal. Korta avstånd betyder också att service efter installation går snabbt.",
    faqs: [
      {
        question:
          "Hur snabbt kan ni komma på hembesök i centrala Staffanstorp?",
        answer:
          "Ofta inom 1–2 dagar. Vi sitter på Satellitvägen och har korta avstånd inom kommunen. Vid akuta behov — söndertrasiga persienner, plötsligt insynsskyddsbehov — försöker vi ordna besök samma dag.",
      },
      {
        question:
          "Vilken persienn passar en 70-tals villa i Staffanstorp med stora fönsterpartier?",
        answer:
          "Bredare lameller (35–50 mm) i aluminium ger en lugn yta som balanserar de stora fönstren. På söder- och västerlägen rekommenderar vi täta lameller med god vinklingsbredd. För representativa rum är trälameller ett vanligt val — ger en varmare ton.",
      },
      {
        question: "Servar ni hela Staffanstorps kommun, inklusive Hjärup?",
        answer:
          "Ja. Vi monterar i Staffanstorps tätort, Hjärup, Kyrkheddinge och övriga delar av kommunen. Hjärup når vi på under 10 minuter från kontoret.",
      },
    ],
    ctaHeading: "Boka hembesök i Staffanstorp.",
    ctaBody:
      "Vi kör hem till er — ofta redan inom någon dag. Vi mäter, visar prover och lämnar offert. Hembesök och offert är kostnadsfria.",
  }),

  "markiser-staffanstorp": entry({
    product: "markiser",
    citySlug: "staffanstorp",
    cityLabel: "Staffanstorp",
    pageUrl: url("markiser-staffanstorp"),
    metadataTitle: "Markiser Staffanstorp | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Staffanstorp — terrassmarkiser, fönstermarkiser och balkongmarkiser. Vi sitter i kommunen och monterar med egna montörer.",
    answerBox:
      "I Staffanstorps villaträdgårdar är terrassmarkis det vanligaste valet — en utfällbar duk som skuggar uteplatsen där familjen sitter och äter. Vi sitter på Satellitvägen och har egna montörer som arbetar i hela kommunen.",
    whyParagraphs: [
      "Staffanstorp är en villakommun där uteplatsen är en central del av huset. Terrassmarkiser i bredd 4–5 meter är vanligaste storleken, och kan kompletteras med en fönstermarkis på fasaden för att också skugga matplatsen inomhus.",
      "Eftersom vi sitter i Staffanstorp kan vi enkelt återkomma för service, justering eller komplettering. Det märks framför allt på sensorinstallation — vind- och solautomatik kräver en kort efterbesiktning för att kalibreras mot rätt nivå.",
    ],
    processIntro:
      "Vi har ofta korta leveranstider på standardmodeller, och eftersom vi sitter i kommunen kan installation göras flexibelt — vardagar, kvällar eller helger om det krävs.",
    faqs: [
      {
        question:
          "Vilken storlek är vanligast på terrassmarkiser i Staffanstorps villor?",
        answer:
          "Bredd 4–5 meter och utfall 2,5–3 meter är det vanligaste — det räcker för att skugga en matplats för 6–8 personer plus lite marginal. På större altaner går vi upp till 7 meter, ibland delat på två markiser.",
      },
      {
        question:
          "Hur snabbt kan ni leverera och montera om vi bor i Staffanstorp?",
        answer:
          "På standardfärger och -storlekar är det normalt 2–3 veckor från godkänd offert till färdig montering. Måttanpassade markiser med specialväv eller motor 4–6 veckor. Korta avstånd inom kommunen gör att monteringsdag bokas flexibelt.",
      },
      {
        question:
          "Hur länge håller en markis i Staffanstorps klimat?",
        answer:
          "Med UV-behandlad akrylväv håller färg och form normalt 10+ år. Inlandsklimatet i Staffanstorp är skonsammare än kustlägen — saltbelastning och hård vind är låg. Mekaniken håller längre om markisen alltid dras in torr efter regn.",
      },
    ],
    ctaHeading: "Boka hembesök i Staffanstorp.",
    ctaBody:
      "Vi mäter terrassen, går igenom väderstreck och föreslår en markislösning som matchar både huset och hur uteplatsen används. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-staffanstorp": entry({
    product: "plisse",
    citySlug: "staffanstorp",
    cityLabel: "Staffanstorp",
    pageUrl: url("plissegardiner-staffanstorp"),
    metadataTitle: "Plisségardiner Staffanstorp | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Staffanstorp — energibesparande honeycomb-väv för villor med många fönster. Vi sitter i kommunen och mäter på plats.",
    answerBox:
      "Plissé fungerar utmärkt i Staffanstorps villor — varje fönster får sin egen plissé och kan styras enskilt. Honeycomb-väven (dubbelväv) ger en isolerande luftbarriär mellan ruta och rumssida, vilket märks både sommar och vinter.",
    whyParagraphs: [
      "Staffanstorpsvillor från 70- och 80-talen har ofta många fönster — fönsterrad i vardagsrum, fönster i sovrum, kök och badrum. Plissé per fönster ger styrning per rum, och eftersom plissén klipps i mått så stör de inte varandra mellan tätt placerade fönster.",
      "Många väljer honeycomb-väv på fönster mot söder och väster för att reducera värmeförluster vintertid och hålla värmen ute sommartid. På sneda takfönster — vanliga i utbyggda lofter — är plissé en av få lösningar som faktiskt fungerar.",
    ],
    processIntro:
      "Vid hembesök mäter vi normalt 8–12 fönster i en standardvilla — det tar cirka en timme. Vi specificerar pris per fönster så ni kan välja att börja med några rum och bygga ut.",
    faqs: [
      {
        question:
          "Hur många fönster är det vanligt att mäta vid ett hembesök i Staffanstorp?",
        answer:
          "8–12 fönster är typiskt för en villa i Staffanstorp. Vissa större hus har upp till 18–20 fönster. Vi avsätter 60–90 minuter för måttagning och materialgenomgång — gärna vid det första besöket så all data finns i offerten.",
      },
      {
        question:
          "Är honeycomb-plissé värd extrakostnaden i ett 80-talshus?",
        answer:
          "Ofta ja. Många 80-talsvillor i Staffanstorp har 2-glasfönster med relativt höga U-värden. Honeycomb-väven skapar slutna luftceller som ger en isoleringsförbättring som märks både i värmeräkning och vid kallras vintertid.",
      },
      {
        question: "Kan ni hantera plissé på sneda takfönster i Staffanstorp?",
        answer:
          "Ja. Plissé för Velux och liknande takfönster spänns i sidoskenor och fungerar i lutningar upp till cirka 60 grader. Det är en specialprodukt som beställs i mått — leveranstid normalt 3–5 veckor.",
      },
    ],
    ctaHeading: "Boka hembesök i Staffanstorp.",
    ctaBody:
      "Vi mäter alla fönster, inklusive sneda takfönster, och föreslår plissé per rum med rätt vävtyp. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-staffanstorp": entry({
    product: "rullgardiner",
    citySlug: "staffanstorp",
    cityLabel: "Staffanstorp",
    pageUrl: url("rullgardiner-staffanstorp"),
    metadataTitle: "Rullgardiner Staffanstorp | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Staffanstorp för barnrum, sovrum och vardagsrum. Mörkläggande blackout med säkra dragsnören för småbarn.",
    answerBox:
      "Mörkläggande rullgardin är det vanligaste valet i Staffanstorps barnrum och sovrum — kombinerad med sidoskenor som stoppar ljusläckage längs karmen. Vi monterar med säkra dragsnörsystem som följer småbarnsstandarder.",
    whyParagraphs: [
      "Staffanstorp har många småbarnsfamiljer. Mörkläggning i barnrum är det vanligaste önskemålet — för middagsvila, tidiga sommarmorgnar och nattlig oro. Vi väljer blackout-väv plus sidoskenor och kontrollerar att infästningen är robust nog för att klara barn som drar i den.",
      "I vardagsrum och kök passar ljusfiltrerande eller transparent rullgardin bättre — den dämpar bländning utan att helt stänga ute dagsljuset. Många staffanstorpsvillor har stora fönsterpartier mot söder; där rekommenderar vi medeltät screen-väv för bättre värmeskydd sommartid.",
    ],
    processIntro:
      "Vi monterar barnsäkra dragsnörsystem som standard. Vid hembesök går vi också igenom hur rullgardinen ska sitta i förhållande till barnens räckvidd.",
    faqs: [
      {
        question:
          "Hur säkrar ni dragsnören för småbarnsfamiljer i Staffanstorp?",
        answer:
          "Vi monterar säkerhetsspärrar och fästen som håller snöret spänt mot vägg eller karm. Alternativt levererar vi kedjedrift istället för snöre, eller fjäderdriven rullgardin utan snöre alls. Säkerhetslösningen ingår i grundpriset.",
      },
      {
        question:
          "Vilken mörkläggning fungerar mot ljusa sommarmorgnar i Staffanstorp?",
        answer:
          "Blackout-väv tillsammans med sidoskenor stoppar ljus från att läcka in vid karmen. Det är skillnaden mellan ”mörkt nog att sova” och ”helt mörkt”. För barnrum vid söderläget är sidoskenor i princip nödvändigt på sommaren.",
      },
      {
        question:
          "Servar ni hela Staffanstorps kommun inklusive Hjärup?",
        answer:
          "Ja. Vi monterar i Staffanstorps tätort, Hjärup, Kyrkheddinge och övriga byar i kommunen. Korta avstånd från kontoret gör att vi kan boka hembesök flexibelt.",
      },
    ],
    ctaHeading: "Boka hembesök i Staffanstorp.",
    ctaBody:
      "Vi kommer hem till er, mäter sovrum och övriga rum, visar vävprover och föreslår en lösning som passar familjen. Hembesök och offert är kostnadsfria.",
  }),

  // ─────────────────── VELLINGE ───────────────────
  "persienner-vellinge": entry({
    product: "persienner",
    citySlug: "vellinge",
    cityLabel: "Vellinge",
    pageUrl: url("persienner-vellinge"),
    metadataTitle: "Persienner Vellinge | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Vellinge — måttanpassade lösningar för villor med kvalitetsfokus. Träpersienner, aluminium och bambu. Hembesök regelbundet.",
    answerBox:
      "Vellinge är en villakommun där materialval och måttanpassning prioriteras högt. Träpersienner i basswood eller bambu är vanligare här än i andra kommuner — de ger ett varmt uttryck som matchar de större vellingevillornas inredning.",
    whyParagraphs: [
      "Vellinge har en tydlig blandning: 60–70-tals villor i Vellinge tätort, äldre lantligare hus i Räng, Skanör-relaterade fastigheter, och nybyggen. Husägarna lägger generellt mer på inredning än genomsnittet i Skåne — vilket gör att premiummaterial som trä och bambu blir naturliga val.",
      "På större fönsterpartier i moderna villor rekommenderar vi motoriserade persienner. Det skonar mekaniken på tunga trälameller, ger jämnare uppdragning och kan integreras med smart hem-system. Vid hembesök går vi igenom alla materialalternativ med fysiska prover.",
    ],
    processIntro:
      "Vi kör till Vellinge regelbundet och har vana att jobba med villor i kommunen. Vi tar med oss prover på basswood, bambu, aluminium och motorlösningar.",
    faqs: [
      {
        question: "Servar ni hela Vellinge kommun, inklusive byarna?",
        answer:
          "Ja. Vi monterar i Vellinge tätort, Räng, Vellinge by, Hököpinge, Höllviken och övriga byar i kommunen. För Skanör-Falsterbo har vi en separat sida — men vi servar hela kommunen från Staffanstorp.",
      },
      {
        question:
          "Passar träpersienner en modern villa i Vellinge?",
        answer:
          "Ja, ofta mycket bra. Moderna vellingevillor har ofta större rum och högre i tak än standard, vilket gör att bredare trälameller (50 mm) kan användas. Bambu i ljus ton matchar skandinavisk inredning; basswood i mörkare bets passar mer traditionella interiörer.",
      },
      {
        question: "Hur långt åker ni från Staffanstorp till Vellinge?",
        answer:
          "Ungefär 30 minuter. Vi kör hela vägen via E6 eller länsväg 100 beroende på trafik. Hembesöket är kostnadsfritt och vi tar gärna med oss flera materialprover så valet kan göras direkt.",
      },
    ],
    ctaHeading: "Boka hembesök i Vellinge.",
    ctaBody:
      "Vi tar med oss material- och färgprover och visar dem mot rummets ljus. Vi specificerar pris per fönster så att val kan göras med full insyn. Hembesök och offert är kostnadsfria.",
  }),

  "markiser-vellinge": entry({
    product: "markiser",
    citySlug: "vellinge",
    cityLabel: "Vellinge",
    pageUrl: url("markiser-vellinge"),
    metadataTitle: "Markiser Vellinge | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Vellinge — kassettmarkiser med UV-behandlad akrylväv för villor med kvalitetsfokus. Vindsensor och motorisering på utsatta lägen.",
    answerBox:
      "Vellinges villaägare prioriterar oftast kvalitet framför pris. Vi rekommenderar kassettmarkis med UV-behandlad akrylväv som standard — den skyddar väven när markisen är indragen och håller färg och form 10+ år.",
    whyParagraphs: [
      "Vellinge ligger en bit från kusten men närmare Öresund än de flesta andra inlandskommuner. Det betyder att vinden kan bli kraftig på utsatta tomter, särskilt mot söder och väster. Vi rekommenderar vindsensor som rullar in markisen automatiskt vid en inställd vindstyrka.",
      "Vellingevillor har ofta välplanerade uteplatser med integrerad design — markisens färg och kassettmodell måste matcha både fasad och övrig inredning ute. Vi visar väv- och kassettprover mot själva fasaden vid hembesök.",
    ],
    processIntro:
      "Vi går igenom material, motoroptioner och tillval i detalj — det är vanligt att vellingekunder vill se hela palett före beslut.",
    faqs: [
      {
        question:
          "Vad är skillnaden mellan kassettmarkis och öppen markis?",
        answer:
          "Kassetten är ett aluminiumhölje som täcker väven när markisen är inrullad — det skyddar mot UV, regn och smuts. På 10 års perspektiv är skillnaden i livslängd märkbar. Öppen markis kostar mindre i inköp men kräver mer underhåll och håller kortare i kustnära klimat.",
      },
      {
        question: "Servar ni Vellinge tätort och hela kommunen?",
        answer:
          "Ja. Vi monterar i Vellinge tätort, Räng, Vellinge by, Hököpinge och övriga delar av kommunen. Skanör-Falsterbo har egen produktsida men vi servar hela kommunen från Staffanstorp.",
      },
      {
        question:
          "Hur lång garanti gäller på markiser i Vellinge?",
        answer:
          "Garantin varierar med modell och tillverkare — typiskt 2–5 år på mekanik, 5–7 år på väv. Vi specificerar exakt garantiperiod per produkt i offerten och hjälper med eventuella reklamationsärenden om de uppstår.",
      },
    ],
    ctaHeading: "Boka hembesök i Vellinge.",
    ctaBody:
      "Vi besöker fasaden, mäter på plats och visar fysiska prover mot huset. Vi går igenom motor- och sensoroptioner — ingen försäljningspress. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-vellinge": entry({
    product: "plisse",
    citySlug: "vellinge",
    cityLabel: "Vellinge",
    pageUrl: url("plissegardiner-vellinge"),
    metadataTitle: "Plisségardiner Vellinge | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Vellinge — honeycomb-dubbelväv för isolering på äldre fönster. Måttanpassad plissé och hembesök från Staffanstorp.",
    answerBox:
      "Plissé med honeycomb-väv är ett av de få invändiga solskydd som påverkar fönstrets faktiska isolering. På Vellingevillor med 60–70-tals fönster ger dubbelväv en luftbarriär som reducerar värmeförluster märkbart utan att fönstret behöver bytas.",
    whyParagraphs: [
      "Många villor i Vellinge är byggda 1960–1980 med standardfönster från sin tid. Att byta hela fönsterstocken är dyrt; honeycomb-plissé är en mer kostnadseffektiv väg att förbättra fönstrets isolering. Effekten märks både i lägre uppvärmningskostnader vintertid och svalare rum sommartid.",
      "På fönster i sovrum och vardagsrum mot väster är dubbelväv-plissé också ett effektivt värmeskydd mot eftermiddagssolen — utan att helt stänga ute dagsljuset. Vävvalet blir en kombination av prestanda och estetik som vi hjälper er resonera kring.",
    ],
    processIntro:
      "Honeycomb-plissé kostar mer än enkelvikt men sparar in på drift. Vid hembesök räknar vi gärna översiktligt på återbetalningstid utifrån fönsterstorlekar.",
    faqs: [
      {
        question:
          "Hur mycket sänker honeycomb-plissé värmekostnaderna i en Vellingevilla?",
        answer:
          "Beror på fönstrens U-värde och hur stor fönsteryta som täcks. På äldre 2-glasfönster är besparingar på 5–15 procent på årlig uppvärmningskostnad realistiska om all större fönsteryta täcks med dubbelväv. Vi räknar översiktligt vid hembesök.",
      },
      {
        question:
          "Tål honeycomb-plissé fukt och kallras på äldre fönster?",
        answer:
          "Ja, om vi väljer rätt vävtyp. Modern honeycomb-väv är behandlad mot fukt och mögel. På fönster där kondens är ett återkommande problem rekommenderar vi att plissén monteras med 1–2 cm luftspalt mellan väv och glas — det förebygger.",
      },
      {
        question:
          "Servar ni Vellinge tätort och Höllviken?",
        answer:
          "Vellinge tätort ja, regelbundet. Höllviken ligger i Vellinge kommun och vi servar dit också — men för Höllviken specifikt finns mycket gemensamt med vår Skanör-Falsterbo-information eftersom området är kustnära.",
      },
    ],
    ctaHeading: "Boka hembesök i Vellinge.",
    ctaBody:
      "Vi mäter alla fönster, går igenom isoleringsbehov och föreslår en plissélösning som passar både prestandakrav och estetik. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-vellinge": entry({
    product: "rullgardiner",
    citySlug: "vellinge",
    cityLabel: "Vellinge",
    pageUrl: url("rullgardiner-vellinge"),
    metadataTitle: "Rullgardiner Vellinge | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Vellinge — kassettrullgardiner i moderna villor. Blackout för sovrum, screen för stora glaspartier. Hembesök ingår.",
    answerBox:
      "I moderna Vellingevillor är kassettrullgardin ett vanligt val — kassetten döljer mekaniken och ger ett stilrent uttryck som matchar den minimalistiska inredningen. Vi använder kvalitetsvävar med god färgbeständighet.",
    whyParagraphs: [
      "Nybyggda och nyrenoverade villor i Vellinge har ofta en stram inredningsestetik där solskyddet ska smälta in snarare än märkas. Kassettrullgardin lever upp till det — kassetten kan målas i samma kulör som listverket, och väven syns bara när rullgardinen är nere.",
      "Vellinge har också ett bestånd 60–70-tals villor där traditionell rullgardin (öppen montering) fortfarande är vanligast. Där rekommenderar vi modeller med tjockare ändaprofiler och stabila fästen — det blir mer hållbart i längden än de billigaste alternativen.",
    ],
    processIntro:
      "Vid hembesök går vi igenom skillnaden mellan öppen montering och kassett, och vad det innebär för pris och uttryck.",
    faqs: [
      {
        question:
          "Vad innebär kassettrullgardin estetiskt jämfört med öppen?",
        answer:
          "Kassetten är en aluminiumlist som monteras ovanför fönstret och döljer rullgardinens mekanik och uppe-rullad väv. Den finns i flera kulörer och kan beställas i samma färg som karm eller listverk. Resultatet blir att fönstret ser slätt ut även när rullgardinen är upprullad.",
      },
      {
        question: "Tar ni med tygprover hem till Vellinge?",
        answer:
          "Ja. Vi har vanligtvis 30–50 vävprover med oss i bilen — från transparenta screen till mörkläggande blackout, i alla tonregister. Provet hålls upp mot fönstret så att ni ser hur ljuset filtreras i ert verkliga ljus.",
      },
      {
        question:
          "Servar ni Vellinge tätort, Räng och övriga delar av kommunen?",
        answer:
          "Ja. Vi kör till hela Vellinge kommun från Staffanstorp. Avståndet är cirka 30 minuters bilväg — vi planerar gärna in flera besök i området samma dag.",
      },
    ],
    ctaHeading: "Boka hembesök i Vellinge.",
    ctaBody:
      "Vi mäter på plats och visar både öppna fästen och kassettmodeller mot fönstret. Vi specificerar varje del i offerten. Hembesök och offert är kostnadsfria.",
  }),

  // ─────────────────── TRELLEBORG ───────────────────
  "persienner-trelleborg": entry({
    product: "persienner",
    citySlug: "trelleborg",
    cityLabel: "Trelleborg",
    pageUrl: url("persienner-trelleborg"),
    metadataTitle: "Persienner Trelleborg | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Trelleborg för bostäder och kontor — Sveriges sydligaste stad med kraftig söderfasadssol. Vi monterar med egna montörer.",
    answerBox:
      "Trelleborg är Sveriges sydligaste tätort och har den högsta solinstrålningen i landet. Persienner är ett självklart val på söderfasader — lameller som vinklas i steg styr ljus och bländning utan att helt stänga ute dagen.",
    whyParagraphs: [
      "Trelleborg har en unik solbelastning. Sydligaste läget innebär både kraftigare direkt sol mitt på dagen och längre antal soltimmar än norr i Sverige. På söderfasader behövs effektiv bländningsstyrning både på sommarhalvåret och vintermorgnar när solen står lågt.",
      "Vi rekommenderar smala lameller (25 mm) på fönster där vinkling är viktig — de ger fler ”steg” mellan helt öppet och stängt och därmed mer exakt kontroll. Aluminiumpersienner reflekterar dessutom värmen tillbaka utåt, vilket gör skillnad i rumstemperaturen.",
    ],
    processIntro:
      "Vi kör till Trelleborg på ungefär 30 minuter. Vid hembesök bedömer vi solbelastning per fönster — det styr både val av väv och om motor med solautomatik bör övervägas.",
    faqs: [
      {
        question: "Hur långt har ni från Staffanstorp till Trelleborg?",
        answer:
          "Cirka 35 km, normalt 30–35 minuter bilväg via E22 eller väg 9. Vi kör till Trelleborg regelbundet — både för bostads- och kontorsuppdrag.",
      },
      {
        question:
          "Vilken persiennfärg fungerar bäst på en söderfasad i Trelleborg?",
        answer:
          "Ljusa, reflekterande färger — vit, ljusgrå, silver — håller mer värme ute än mörka. Aluminium med blank yta reflekterar mest. För estetisk synlighet utåt finns specialbehandlade vävar/lameller som ser mörkare ut från utsidan men reflekterar bra.",
      },
      {
        question:
          "Är aluminiumpersienner det bästa valet för stark sol i Trelleborg?",
        answer:
          "Ofta ja, om värme är det primära problemet. Aluminium reflekterar mer än trä eller bambu och tål direkt UV-strålning utan att blekna. Träpersienner i ljus färg fungerar i representativa rum, men på söderläge med långa soltimmar håller aluminium längre.",
      },
    ],
    ctaHeading: "Boka hembesök i Trelleborg.",
    ctaBody:
      "Vi besöker fastigheten, går igenom solbelastning per fönster och föreslår persienner som faktiskt klarar Trelleborgs sol. Hembesök och offert är kostnadsfria.",
  }),

  "markiser-trelleborg": entry({
    product: "markiser",
    citySlug: "trelleborg",
    cityLabel: "Trelleborg",
    pageUrl: url("markiser-trelleborg"),
    metadataTitle: "Markiser Trelleborg | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Trelleborg — kassettmarkiser med UV-behandlade akrylvävar som klarar sydligaste Sveriges solbelastning. Vindsensor på utsatta fasader.",
    answerBox:
      "Trelleborgs sydliga läge ger Sveriges högsta UV-belastning. Vi använder enbart UV-behandlade akrylvävar och rekommenderar kassettmodell som standard — det är skillnaden mellan en markis som håller 5 år och en som håller 12.",
    whyParagraphs: [
      "I Trelleborg möts två faktorer: kraftig sol och vind från Östersjön. Det innebär både hög UV-stress på vävmaterial och mekanisk belastning på markisens armar. Lågkvalitetsvävar bleks på två-tre år; vi använder bara akrylvävar med dokumenterad UV-resistens.",
      "På utsatta fasader nära hamnen och kustnära områden kompletterar vi alltid med vindsensor. Det skyddar markisen vid plötsliga byar och förlänger livslängden på mekaniken. För kommersiella fastigheter — kontor, butiker, restauranger — är solautomatik också ett vanligt tillval.",
    ],
    processIntro:
      "Vi tar med vävprover som har genomgått accelererad UV-test så ni ser hur färg och form klarar Trelleborgsklimatet. Hembesöket täcker både fasadbedömning och vindexponering.",
    faqs: [
      {
        question:
          "Hur länge håller markisen om den sitter ute hela sommaren i Trelleborg?",
        answer:
          "Med UV-behandlad akrylväv och kassettskydd håller färg och form 10+ år vid normal användning. Utan kassett 5–7 år. Mekaniken kan hålla 15+ år om markisen alltid dras in torr efter regn och vid hård vind.",
      },
      {
        question: "Servar ni Trelleborg från Staffanstorp?",
        answer:
          "Ja. Vi kör till Trelleborg regelbundet — både hembesök, montering och service. Avståndet är cirka 30–35 minuter bilväg och vi planerar gärna in flera besök samma dag i området.",
      },
      {
        question:
          "Är vindsensor obligatorisk på markiser i Trelleborg?",
        answer:
          "Inte tekniskt obligatorisk men starkt rekommenderad på fastigheter inom 1–2 km från hamnen och kusten. Vid mer skyddade lägen i centrala Trelleborg kan det räcka med manuell drift om ni är hemma och kan dra in markisen vid blåst.",
      },
    ],
    ctaHeading: "Boka hembesök i Trelleborg.",
    ctaBody:
      "Vi besöker fasaden, går igenom vindexponering och visar UV-tåliga vävprover. Vi specificerar väv, motor och sensor i offerten. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-trelleborg": entry({
    product: "plisse",
    citySlug: "trelleborg",
    cityLabel: "Trelleborg",
    pageUrl: url("plissegardiner-trelleborg"),
    metadataTitle: "Plisségardiner Trelleborg | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Trelleborg — mörkläggande sovrumsplissé och dagljusstyrande vardagsrum. Top-down/bottom-up för insynsskydd. Hembesök ingår.",
    answerBox:
      "I Trelleborg, med Sveriges högsta solinstrålning, är plissé ett mångsidigt invändigt solskydd. Mörkläggande väv för sovrum, ljusfiltrerande för vardagsrum, top-down/bottom-up för gatuvåningar — vi anpassar väv och styrning per rum.",
    whyParagraphs: [
      "Mörkläggning är extra viktigt i Trelleborg eftersom sommaren har långa dagar med stark sol redan från tidig morgon. En blackout-plissé tillsammans med tätningar i karmen ger sömnkvalitet jämförbar med slutna rullgardiner — men med plissens diskreta uttryck när den är uppdragen.",
      "På gatuvåningar och i radhus i Trelleborgs centrala kvarter är top-down/bottom-up ett vanligt val: ni släpper in dagsljus upptill medan insynen nedtill skärmas av. Det är en kombination som är svår att få till med rullgardin eller persienn.",
    ],
    processIntro:
      "Vi tar med flera vävtyper vid hembesök i Trelleborg — från transparent till mörkläggande — så ni ser skillnaden i ljusgenomsläpp i ert verkliga ljus.",
    faqs: [
      {
        question:
          "Räcker mörkläggande plissé för ett sovrum mot söder i Trelleborg?",
        answer:
          "Med blackout-väv och tätningar i karmen, ja — sovrumsmörkläggning fungerar bra även mot söder och söderväster. Vid extremt höga krav (t.ex. nattskiftsovning) kan en mörkläggande rullgardin med sidoskenor vara ett mer absolut alternativ.",
      },
      {
        question: "Fungerar top-down/bottom-up plissé i hyresrätt i Trelleborg?",
        answer:
          "Ja. Vi monterar med spännfästen eller klämfästen som kan tas bort utan att skada karmen. Det är vanligt i hyresrätter och radhus. Föreningens regler reglerar sällan invändiga solskydd.",
      },
      {
        question: "Hur snabbt levereras plissé till Trelleborg?",
        answer:
          "Standardmått 1–3 veckor från godkänd offert. Specialvävar och top-down/bottom-up i specialmått 3–5 veckor. Vi anger en konkret tidsplan i offerten och bokar montering så snart varan är inkommen — kör till Trelleborg från Staffanstorp för installation.",
      },
    ],
    ctaHeading: "Boka hembesök i Trelleborg.",
    ctaBody:
      "Vi mäter på plats, visar vävprover i ert ljus och föreslår plissé per rum med rätt typ av styrning. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-trelleborg": entry({
    product: "rullgardiner",
    citySlug: "trelleborg",
    cityLabel: "Trelleborg",
    pageUrl: url("rullgardiner-trelleborg"),
    metadataTitle: "Rullgardiner Trelleborg | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Trelleborg för kontor, butiker och bostäder. Screen-väv mot stark söderfasadssol, blackout för sovrum. Hembesök från Staffanstorp.",
    answerBox:
      "Trelleborgs starka södersol gör screenrullgardin till ett vanligt val på kontor och i butiker — väven dämpar bländning och värme utan att blockera utsikten utåt. För sovrum kombineras blackout-rullgardin med sidoskenor.",
    whyParagraphs: [
      "I Trelleborg har många kontor och butiker stora fönsterpartier mot gator och torg. Screen-rullgardin med 3–5 procent öppningsgrad är förstahandsvalet — den dämpar bländning vid skärmarbete och värme på grund av direkt sol, men kunder och förbipasserande kan fortfarande se in (vilket är önskvärt för butik).",
      "I trelleborgsbostäder är blackout-rullgardin med sidoskenor förstahandsvalet i sovrum mot söder. Sidoskenorna stoppar ljusläckage som blir extra synligt på sommarmorgnar med tidig soluppgång.",
    ],
    processIntro:
      "Vi servar både privatpersoner och företag i Trelleborg. För företag erbjuder vi företagsfaktura och kan koordinera installation efter arbetstid om det krävs.",
    faqs: [
      {
        question:
          "Vilken screen-väv passar bäst för ett kontor i Trelleborg?",
        answer:
          "3 procent öppningsgrad är vanligaste valet — den ger god solskärming utan att rummet blir mörkt. På kontor med mycket skärmarbete och låga krav på utsikt utåt fungerar 1 procent ännu bättre mot bländning. Vi visar prover mot er glasruta vid hembesök.",
      },
      {
        question: "Kan ni leverera och fakturera till företag i Trelleborg?",
        answer:
          "Ja. Vi har företagsfaktura med 30 dagars betalningsvillkor och kan ROT-/ROT-rapportera om det är aktuellt. Större installationer kan koordineras efter arbetstid eller helger för att inte störa verksamheten.",
      },
      {
        question:
          "Hur långt har ni till Trelleborg från kontoret i Staffanstorp?",
        answer:
          "Cirka 35 km via E22, normalt 30–35 minuter. Vi kör till Trelleborg flera gånger i veckan — både för hembesök, montering och service. Avståndet är inget hinder och hembesök kostar inget.",
      },
    ],
    ctaHeading: "Boka hembesök i Trelleborg.",
    ctaBody:
      "Vi besöker bostaden eller kontoret, mäter på plats och föreslår rullgardiner med rätt vävtyp och fästmetod. Hembesök och offert är kostnadsfria — företag och privat.",
  }),

  // ─────────────────── LOMMA ───────────────────
  "persienner-lomma": entry({
    product: "persienner",
    citySlug: "lomma",
    cityLabel: "Lomma",
    pageUrl: url("persienner-lomma"),
    metadataTitle: "Persienner Lomma | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Lomma och Bjärred — havsnära villor med starkt reflekterat ljus. Aluminium- och träpersienner med fokus på estetik. Hembesök ingår.",
    answerBox:
      "I Lomma och Bjärred reflekteras ljuset från Öresund och gör rummen ljusstarka även när solen inte står direkt på fönstret. Persienner styr ljus i steg utan att blockera helt — perfekt för att hantera havsljusets variationer.",
    whyParagraphs: [
      "Lomma kommun ligger direkt vid kusten med hela bebyggelsen orienterad mot Öresund. Havsljuset är speciellt: starkt reflekterat under dagen, ständigt rörligt på grund av vågor och moln. Persienner hanterar det smidigt eftersom lamellerna kan finjusteras under dagen — något som är svårare med rullgardin eller plissé.",
      "Lomma och Bjärred har ett bestånd av moderna villor och radhus med stora glaspartier mot havet. På dessa fungerar bredare lameller (35–50 mm) bra. Vi rekommenderar aluminium med pulverlackning av högkvalitativ standard — det tål den salta luften och håller färgen länge.",
    ],
    processIntro:
      "Vid hembesök i Lomma går vi igenom hur ljuset rör sig under dagen och vilken vinkling som ger bäst kompromiss mellan utsikt och solskydd.",
    faqs: [
      {
        question: "Påverkar saltluften i Lomma persiennernas livslängd?",
        answer:
          "Direkt på utsidan, ja — men persienner är invändiga och utsätts inte för saltstänk. Aluminiumlameller med pulverlack klarar luftfuktigheten utan problem. Trälameller fungerar också bra invändigt; vi rekommenderar bara att man undviker dem i bad-/duschrum nära havet.",
      },
      {
        question: "Servar ni hela Lomma kommun, inklusive Bjärred?",
        answer:
          "Ja. Vi kör regelbundet till både Lomma centrum, Bjärred, Borgeby och övriga delar av kommunen. Avståndet från Staffanstorp är cirka 30 minuters bilväg.",
      },
      {
        question:
          "Hur snabbt får jag offert efter hembesök i Lomma?",
        answer:
          "Normalt inom 1–2 vardagar. Vi tar mått och materialval på plats och skickar specificerad offert digitalt. Vid komplexa installationer eller specialfärger kan det ta 3–4 dagar för slutligt pris.",
      },
    ],
    ctaHeading: "Boka hembesök i Lomma.",
    ctaBody:
      "Vi besöker villan eller radhuset, mäter alla fönster och visar materialprover mot havsljuset. Hembesök och offert är kostnadsfria.",
  }),

  "markiser-lomma": entry({
    product: "markiser",
    citySlug: "lomma",
    cityLabel: "Lomma",
    pageUrl: url("markiser-lomma"),
    metadataTitle: "Markiser Lomma | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Lomma och Bjärred — vindstabila kassettmarkiser med vindsensor för havsnära fasader. Korrosionsbeständiga komponenter för kustklimat.",
    answerBox:
      "Lomma och Bjärred är direkt kustnära — vinden från Öresund är ständigt en faktor. Vi rekommenderar enbart kassettmarkiser med vindklass 3 och vindsensor som standard, plus korrosionsbeständig infästning som tål den salta luften.",
    whyParagraphs: [
      "Lomma kommun ligger på Öresundskusten med fasader som möter vinden direkt. Det är inte ovanligt med byar på 15–20 m/s under sommarens lågtryck. En markis utan vindsensor kommer att skadas — vindsensorn rullar in markisen automatiskt vid en inställd vindstyrka och är därmed inte en option utan en förutsättning.",
      "Saltvatten i luften påverkar mekaniken över tid. Vi använder fästen och armar i material som tål korrosion, och rekommenderar att markisen sköljs av med sötvatten 2–3 gånger per säsong för att minska saltavlagringar.",
    ],
    processIntro:
      "Vi har vana att jobba i kustnära miljö och tar med komponentlistor som är specifikt avsedda för havsnära installationer.",
    faqs: [
      {
        question: "Hur tål markiser kustvinden i Lomma och Bjärred?",
        answer:
          "Med vindsensor och vindklass 3 enligt EN 13561, mycket bra. Sensorn detekterar vindstyrka 8–12 m/s (justerbart) och rullar in markisen automatiskt. Det skyddar både väven och armarna mot byar som annars hade kunnat skada konstruktionen.",
      },
      {
        question:
          "Påverkar saltstänk själva väven på en markis i Lomma?",
        answer:
          "UV-behandlade akrylvävar tål saltbelastning bra — färgen påverkas marginellt. Vi rekommenderar avspolning med sötvatten 2–3 gånger per säsong, helst när väven är utvikt så den får torka. Mekaniken är mer känslig — den kapslade kassetten skyddar effektivt.",
      },
      {
        question:
          "Servar ni hela Lomma kommun från Staffanstorp?",
        answer:
          "Ja. Vi monterar i Lomma tätort, Bjärred, Borgeby och övriga kommunen. Avståndet är cirka 30 minuter bilväg och vi kör regelbundet — både hembesök och service.",
      },
    ],
    ctaHeading: "Boka hembesök i Lomma.",
    ctaBody:
      "Vi besöker fasaden, bedömer vindexponering och föreslår en markis som klarar Öresundskustens villkor. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-lomma": entry({
    product: "plisse",
    citySlug: "lomma",
    cityLabel: "Lomma",
    pageUrl: url("plissegardiner-lomma"),
    metadataTitle: "Plisségardiner Lomma | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Lomma och Bjärred — mjukt filtrerat ljus i havsnära villor. Plissé på stora glaspartier delas i sektioner. Hembesök ingår.",
    answerBox:
      "I Lommas havsnära villor med stora glaspartier är plissé ett bra val för att mjuka upp det starka reflekterade ljuset. Vävens plissering filtrerar ljuset jämnt utan att blockera, och stora partier kan delas i flera sektioner för smidig drift.",
    whyParagraphs: [
      "Moderna villor i Bjärred och Lomma har ofta panoramafönster mot Öresund. Det är vacker arkitektur men praktiskt utmanande — bländning under flera timmar per dag, kraftig värmeinstrålning sommartid. Plissé i medeltät väv filtrerar ljuset till ett behagligt skimmer utan att stänga ute havsutsikten helt.",
      "På riktigt stora glaspartier delar vi plissén i två eller tre sektioner som möts kant i kant. Det är dels praktiskt för manövrering, dels ger det möjlighet att dra upp en del medan en annan är nere — t.ex. öppet i kanterna, dragen i mitten där eftermiddagssolen är starkast.",
    ],
    processIntro:
      "Vi gör hembesök i Lomma med flera vävprover så ni kan se hur olika täthetsgrader filtrerar havsljuset.",
    faqs: [
      {
        question:
          "Klarar plissé stora glaspartier i en villa i Bjärred?",
        answer:
          "Ja. Vi delar väldigt breda partier i två eller tre sektioner som styrs separat. Bredd över 250 cm i ett stycke börjar bli opraktiskt — då rekommenderar vi delning. Honeycomb-väv är ett populärt val på utsatta partier eftersom den ger lite extra isolering.",
      },
      {
        question:
          "Påverkar fukten nära kusten plissévävens material?",
        answer:
          "Standard plisséväv tål normal luftfuktighet utan problem. På fönster där kondens är ett återkommande problem (typiskt fönsterytor mot havet med tunnare glas) väljer vi en fukttolerant vävtyp. Vi går igenom det vid hembesök.",
      },
      {
        question:
          "Servar ni Lomma och Bjärred regelbundet?",
        answer:
          "Ja. Vi kör till Lomma kommun varje vecka — hembesök, montering och service. Avståndet från Staffanstorp är cirka 30 minuter bilväg, så vi koordinerar gärna flera kunder samma dag.",
      },
    ],
    ctaHeading: "Boka hembesök i Lomma.",
    ctaBody:
      "Vi mäter alla fönster, även stora glaspartier mot havet, och föreslår plissé per rum. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-lomma": entry({
    product: "rullgardiner",
    citySlug: "lomma",
    cityLabel: "Lomma",
    pageUrl: url("rullgardiner-lomma"),
    metadataTitle: "Rullgardiner Lomma | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Lomma och Bjärred — screen-väv för panoramafönster mot Öresund. Motoriserade lösningar för stora och höga partier.",
    answerBox:
      "Modern villaarkitektur i Lomma använder ofta panoramafönster mot havet. Screen-rullgardin med låg öppningsgrad bevarar utsikten utåt men dämpar kraftigt reflekterat havsljus. På höga och breda partier är motorisering förstahandsvalet.",
    whyParagraphs: [
      "Bjärred och Lomma har många villor med arkitektoniskt designade fönsterpartier — höga, breda, ibland från golv till tak. Manuell rullgardin på sådana partier blir snabbt opraktisk. Motoriserad rullgardin med fjärrstyrning eller smart hem-integration löser det utan kompromiss på estetik.",
      "Screen-väv i 3 eller 5 procent öppningsgrad är det absolut vanligaste valet i kustnära villor. Det är skillnaden mellan att se ut och att inte se ut — på dagtid behåller ni full utsikt mot Öresund medan ljuset filtreras. Kvällstid när det är ljusare inne än ute byts insynsförhållandet — då rekommenderar vi en innanförsittande mörkläggning eller plissé om det behövs.",
    ],
    processIntro:
      "Vid hembesök i Lomma visar vi vävprover mot själva fönstret så ni ser exakt hur utsikten påverkas.",
    faqs: [
      {
        question:
          "Är motorisering nödvändig för stora rullgardiner i Lomma-villor?",
        answer:
          "På riktigt stora och höga partier (över 220 cm hög, över 200 cm bred) är motor i praktiken nödvändigt — manuell drift fungerar men blir tröttsam i daglig användning. Smart hem-integration lägger till tidsstyrning så rullgardinerna går ner automatiskt när eftermiddagssolen är som starkast.",
      },
      {
        question: "Servar ni hela Lomma kommun, inklusive Bjärred och Borgeby?",
        answer:
          "Ja. Vi kör till hela Lomma kommun varje vecka från Staffanstorp. Bjärred och Borgeby ingår, liksom Lomma tätort. Hembesök är kostnadsfritt.",
      },
      {
        question:
          "Bevarar screen-rullgardin verkligen utsikten mot Öresund?",
        answer:
          "Ja, dagtid. Screen-väv är perforerad och ni ser tydligt utåt även med rullgardinen helt nere. Tonen blir något dämpad och kontrasten lägre — men landskapsutsikten finns kvar. Lägre öppningsgrad = mer värmeskydd och mer privat utåt; högre = mer utsikt.",
      },
    ],
    ctaHeading: "Boka hembesök i Lomma.",
    ctaBody:
      "Vi besöker villan, mäter de stora glaspartierna och föreslår en lösning som bevarar utsikten utan kompromiss på solskydd. Hembesök och offert är kostnadsfria.",
  }),

  // ─────────────────── KÄVLINGE ───────────────────
  "persienner-kavlinge": entry({
    product: "persienner",
    citySlug: "kavlinge",
    cityLabel: "Kävlinge",
    pageUrl: url("persienner-kavlinge"),
    metadataTitle: "Persienner Kävlinge | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Kävlinge och Löddeköpinge — pendlarkommun med pragmatiska kunder. Standardstorlekar med snabb leverans, måttanpassat när det behövs.",
    answerBox:
      "Kävlinge med Löddeköpinge är pendlarkommuner där pragmatik värderas — bra produkt till bra pris med kort leveranstid. Persienner i standardstorlekar och vanliga kulörer kan vi ofta leverera och montera inom 1–2 veckor från offert.",
    whyParagraphs: [
      "Kävlinge kommun har en blandning av äldre villabebyggelse och nybyggen, särskilt i Löddeköpinge där kommunen växer. Många bor här för närheten till E6 och pendlingsmöjligheterna mot Lund och Malmö — vilket märks i värdesätningen av smidiga lösningar.",
      "Standardpersienner i lagerförda färger är en stor del av det vi levererar till Kävlinge. På fönster där måttanpassning krävs (kopplade fönster, ovanliga karmar) tar vi självklart specialmått, men för standardvillor är lagervaror oftast både snabbare och prisvärdare.",
    ],
    processIntro:
      "Vi kör norrut till Kävlinge på cirka 25 minuter. På standardprodukter kan vi ofta installera inom någon vecka från beställning.",
    faqs: [
      {
        question: "Hur lång leveranstid har ni på standardpersienner till Kävlinge?",
        answer:
          "På standardstorlekar i lagerfärger 1–2 veckor från godkänd offert. Måttanpassade i standardkulörer 2–3 veckor. Specialfärger eller motoriserade 3–5 veckor. Vi anger en konkret tidsplan i offerten.",
      },
      {
        question:
          "Servar ni hela Kävlinge kommun inklusive Löddeköpinge?",
        answer:
          "Ja. Vi kör regelbundet till Kävlinge tätort, Löddeköpinge, Hofterup, Furulund och övriga delar av kommunen. Avståndet från Staffanstorp är cirka 25 minuter bilväg.",
      },
      {
        question:
          "Vilket pris kan jag förvänta mig för persienner till en standardvilla i Kävlinge?",
        answer:
          "Beror helt på antalet fönster, storlek och materialval. Vi ger en specificerad offert per fönster efter hembesök så ni ser exakt vad varje del kostar. Det går också att börja med några rum och bygga ut succesivt — varje persienn är en fristående investering.",
      },
    ],
    ctaHeading: "Boka hembesök i Kävlinge.",
    ctaBody:
      "Vi kommer hem till er, mäter alla fönster och lämnar en specificerad offert. Snabba leveranser på standardprodukter. Hembesök och offert är kostnadsfria.",
  }),

  "markiser-kavlinge": entry({
    product: "markiser",
    citySlug: "kavlinge",
    cityLabel: "Kävlinge",
    pageUrl: url("markiser-kavlinge"),
    metadataTitle: "Markiser Kävlinge | Bellevue Solskydd",
    metadataDescription:
      "Markiser i Kävlinge och Löddeköpinge — prisvärda standardmarkiser för villaträdgårdar. Snabb leverans och egen montering.",
    answerBox:
      "I Kävlinge och Löddeköpinge är prisvärda fällarmsmarkiser i lagerförda färger ofta det bästa valet. Bra funktion, lagermässig storlek, snabb installation. Vi sparar in på onödiga premiumtillval om de inte tillför värde.",
    whyParagraphs: [
      "Kävlinge är en pendlarkommun med villor från olika epoker. Många hushåll har valt orten för boendekostnaden i förhållande till närheten till Lund och Malmö — vilket gör att solskyddet ofta planeras med pragmatisk budget.",
      "Standard fällarmsmarkis i bredd 3,5–5 meter täcker uteplatsens behov för de flesta villor. Vi rekommenderar UV-behandlad akrylväv (även på standardmodell, det kostar lite mer men håller mycket längre) och manuell vev — motorisering är ett rimligt tillval främst på större markiser.",
    ],
    processIntro:
      "Vi tar med lagerlistan vid hembesök så ni kan se vilka standardstorlekar och -färger som finns på direkt leverans.",
    faqs: [
      {
        question:
          "Hur snabbt får jag en standardmarkis monterad i Kävlinge?",
        answer:
          "På lagerförda storlekar och kulörer 2–3 veckor från godkänd offert. Vid akut behov (söndertrasig markis inför sommar) försöker vi ofta lösa det snabbare. Måttanpassade markiser med specialväv 4–6 veckor.",
      },
      {
        question:
          "Servar ni hela Kävlinge kommun inklusive Löddeköpinge?",
        answer:
          "Ja. Vi kör till Kävlinge tätort, Löddeköpinge, Hofterup, Furulund och övriga delar av kommunen. Avståndet från Staffanstorp är cirka 25 minuter bilväg och vi kör flera gånger i veckan.",
      },
      {
        question:
          "Behöver jag motorisera markisen om jag bor i Kävlinge?",
        answer:
          "Inte tekniskt. Manuell vev fungerar bra på markiser upp till cirka 4,5 meter och är en kostnadsbesparing. Motor är värt det vid större storlekar, om ni vill ha vindsensor, eller om markisen sitter på en svåråtkomlig plats.",
      },
    ],
    ctaHeading: "Boka hembesök i Kävlinge.",
    ctaBody:
      "Vi mäter terrassen, går igenom standardalternativen och föreslår vad som ger mest värde för pengarna. Hembesök och offert är kostnadsfria.",
  }),

  "plissegardiner-kavlinge": entry({
    product: "plisse",
    citySlug: "kavlinge",
    cityLabel: "Kävlinge",
    pageUrl: url("plissegardiner-kavlinge"),
    metadataTitle: "Plisségardiner Kävlinge | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Kävlinge och Löddeköpinge — mörkläggning för pendlare och skiftarbetare. Snabb leverans på standardvävar.",
    answerBox:
      "Många i Kävlinge är pendlare eller skiftarbetare med oregelbundna sovtider. Mörkläggande plissé i sovrum är förstahandsvalet — den ger sömnkvalitet även under ljusa sommarmorgnar och tidiga vintergryningar.",
    whyParagraphs: [
      "Kävlinge med Löddeköpinge är pendlarkommuner — många i hushållen har tidiga avgångar mot Lund eller Malmö, eller arbetar skift inom industri och vård. Mörkläggning blir ett konkret livskvalitetsbeslut, inte bara en estetisk fråga.",
      "Mörkläggande plissé har två fördelar jämfört med rullgardin: dels en mer tilltalande utseende när den är uppdragen (ser ut som en smal list ovanför fönstret istället för en kassett eller spole), dels att den kan dras både uppifrån och nerifrån för att variera ljusinsläpp under dagen.",
    ],
    processIntro:
      "Vid hembesök testar vi mörkläggningseffekten genom att hålla upp blackout-vävprov mot fönstret i fullt dagsljus.",
    faqs: [
      {
        question:
          "Räcker mörkläggande plissé för en skiftarbetare som bor i Kävlinge?",
        answer:
          "I de flesta fall ja — blackout-väv plus tätningar i karmen ger en mörkläggningsnivå som är tillräcklig för bra sömn under dagtid. För extremt ljuskänsliga rekommenderar vi att kombinera plissé med en mörkläggande rullgardin innanför.",
      },
      {
        question:
          "Hur snabbt levereras plissé till Kävlinge?",
        answer:
          "Standardstorlekar och vävar 1–3 veckor från godkänd offert. Specialmått och premiumvävar 3–5 veckor. Vi anger en konkret tidsplan i offerten och kör till Kävlinge för montering så snart varan är inkommen.",
      },
      {
        question:
          "Gör ni hembesök i Löddeköpinge?",
        answer:
          "Ja. Löddeköpinge ingår i Kävlinge kommun och vi servar hela kommunen från Staffanstorp. Hofterup och Furulund också. Hembesöket är kostnadsfritt.",
      },
    ],
    ctaHeading: "Boka hembesök i Kävlinge.",
    ctaBody:
      "Vi mäter sovrummen, testar mörkläggningseffekten och föreslår en plissé som faktiskt löser problemet. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-kavlinge": entry({
    product: "rullgardiner",
    citySlug: "kavlinge",
    cityLabel: "Kävlinge",
    pageUrl: url("rullgardiner-kavlinge"),
    metadataTitle: "Rullgardiner Kävlinge | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Kävlinge och Löddeköpinge — sovrumsmörkläggning för pendlare, prisvärda lösningar. Snabb leverans och egen montering.",
    answerBox:
      "I Kävlinge prioriterar de flesta hushåll praktiska lösningar med god funktion till rimligt pris. Standardrullgardin i blackout-väv plus sidoskenor löser sovrumsmörkläggning för pendlare till en betydligt lägre kostnad än premiumalternativ.",
    whyParagraphs: [
      "Många i Kävlinge har tidiga arbetstider som kräver att sovrummet är mörklagt även när solen redan gått upp. Standard blackout-rullgardin tillsammans med sidoskenor stoppar ljusläckage längs karmen och ger sovkvalitet på sommarens ljusa morgnar.",
      "I vardagsrum och kök passar transparenta eller ljusfiltrerande rullgardiner bättre — bländningsskydd utan att rummet blir mörkt. På kökets fönster mot söder rekommenderar vi screen-väv som dämpar värme utan att blockera utsikten.",
    ],
    processIntro:
      "Vi har lagerförda standardstorlekar i de vanligaste vävarna — det innebär kort leveranstid och pris som inte sticker iväg.",
    faqs: [
      {
        question:
          "Hur snabbt får jag en mörkläggande rullgardin levererad till Kävlinge?",
        answer:
          "På standardstorlekar i blackout-väv 1–2 veckor från godkänd offert. Måttanpassade 2–3 veckor. Sidoskenor (rekommenderas för full mörkläggning) tillkommer som tillval och kostar en mindre summa per fönster — väl värt det.",
      },
      {
        question:
          "Servar ni Löddeköpinge också?",
        answer:
          "Ja. Löddeköpinge ingår i Kävlinge kommun och vi servar hela kommunen från Staffanstorp. Vi kör till Löddeköpinge regelbundet — både hembesök och installation. Avståndet är cirka 25–30 minuter bilväg.",
      },
      {
        question:
          "Fungerar standard mörkläggande rullgardin verkligen i sommarljus?",
        answer:
          "Med sidoskenor — ja. Utan sidoskenor läcker ljus in vid karmens kanter, vilket märks tydligt på sommarmorgnar. Sidoskenorna gör skillnaden mellan ”mörkare än utan” och ”mörkt”. Vi rekommenderar dem som standard på sovrum.",
      },
    ],
    ctaHeading: "Boka hembesök i Kävlinge.",
    ctaBody:
      "Vi mäter på plats och föreslår en rullgardinslösning som passar både budget och behov. Hembesök och offert är kostnadsfria.",
  }),

  // ─────────────────── SKANÖR-FALSTERBO ───────────────────
  "persienner-skanor-falsterbo": entry({
    product: "persienner",
    citySlug: "skanor-falsterbo",
    cityLabel: "Skanör-Falsterbo",
    pageUrl: url("persienner-skanor-falsterbo"),
    metadataTitle: "Persienner Skanör-Falsterbo | Bellevue Solskydd",
    metadataDescription:
      "Persienner i Skanör, Falsterbo, Höllviken och Ljunghusen — premiumlösningar för sommarvillor och kustnära fastigheter. Träpersienner, måttanpassat.",
    answerBox:
      "Skanör-Falsterbo med Höllviken och Ljunghusen är ett av Sveriges mest exklusiva villaområden. Husen blandar 1800-tals fiskelägen, 50–60-tals sommarvillor och modernt premium. Persienner ska matcha husets karaktär — vi tar med oss premiumprover.",
    whyParagraphs: [
      "Skanör-Falsterbohalvön är ett särskilt arkitektoniskt landskap. Gamla fiskelägen från 1800-talet med små fönster och tjocka väggar; sommarvillor från 1950–60-talen med stora fönsterpartier mot havet; och nybyggen i miljonklassen från senare decennier. Persiennvalet måste anpassas till respektive epok.",
      "I äldre fiskelägen är diskretion viktig — vi väljer smala lameller (25 mm) i tonad färg som passar med originalfönstrens omramning. I 60-talsvillor och moderna premiumhus passar bredare lameller och premium-material som basswood och bambu bättre.",
    ],
    processIntro:
      "Vi tar med oss kompletta materialprover till hembesök i Skanör-Falsterbo — basswood, bambu, RAL-färgkartor och premiumlameller. Beslut tas inte vid första besöket; vi återkommer gärna med kompletterande prover.",
    faqs: [
      {
        question:
          "Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen?",
        answer:
          "Ja, alla. Hela Falsterbohalvön ingår i Vellinge kommun och vi kör dit regelbundet — både till Skanör tätort, Falsterbo, Höllviken centrum och Ljunghusen. Avståndet från Staffanstorp är cirka 35–40 minuters bilväg.",
      },
      {
        question:
          "Passar träpersienner i en sommarvilla i Falsterbo?",
        answer:
          "Inomhus, ja — basswood och bambu fungerar bra i sovrum, vardagsrum och representativa rum. Vi avråder från trä i fuktiga utrymmen och i sommarvillor som står ouppvärmda vintertid med kraftig kondens. För badrum och oisolerade gästrum rekommenderar vi aluminium istället.",
      },
      {
        question:
          "Hur lång tid tar det att leverera måttanpassade persienner till Skanör-Falsterbo?",
        answer:
          "Standardstorlekar och färger 2–3 veckor. Måttanpassade premiumprodukter (specifika RAL-kulörer, specialträ) 4–6 veckor. För större installationer (10+ fönster) lägger vi gärna upp en plan med faserad leverans så att större delar av huset kan användas medan resten färdigställs.",
      },
    ],
    ctaHeading: "Boka hembesök i Skanör-Falsterbo.",
    ctaBody:
      "Vi besöker fastigheten — fiskeläge, 60-tals sommarvilla eller modernt premium — mäter alla fönster och tar med fysiska premiumprover. Hembesök och offert är kostnadsfria.",
  }),

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

  "plissegardiner-skanor-falsterbo": entry({
    product: "plisse",
    citySlug: "skanor-falsterbo",
    cityLabel: "Skanör-Falsterbo",
    pageUrl: url("plissegardiner-skanor-falsterbo"),
    metadataTitle: "Plisségardiner Skanör-Falsterbo | Bellevue Solskydd",
    metadataDescription:
      "Plisségardiner i Skanör, Falsterbo, Höllviken och Ljunghusen — takfönsterplissé för sommarvillor, specialvinklar i fiskelägen.",
    answerBox:
      "I Skanör-Falsterbos sommarvillor och fiskelägen finns ofta takfönster, snedställda fönster och ovanliga geometrier. Plissé spänns mellan vajrar och kan tillverkas i nästan vilken form som helst — vilket gör den till ett av få solskydd som faktiskt fungerar i dessa hus.",
    whyParagraphs: [
      "Sommarvillor i Skanör, Falsterbo, Höllviken och Ljunghusen har ofta utbyggda lofter med Velux-takfönster. På sommaren blir loftsovrummen för varma utan solskydd; standard rullgardin går inte att montera i sneda fönster. Plissé i sidoskenor är förstahandsvalet — den spänns längs glaset oberoende av lutningsvinkel.",
      "Äldre fiskelägen från 1800-talet har små, specialformade fönster med tjocka väggar. Plissé klipps till exakt fönstermått och spänns mellan vajrar utan att kräva utstickande beslag. På fiskelägeshus som står ouppvärmda vintertid väljer vi vävar med god kondenstolerans.",
    ],
    processIntro:
      "Specialformade fönster och takfönster kräver mer tid vid måttagning. Vi avsätter extra tid vid hembesök i Skanör-Falsterbo och dubbelkollar mått innan beställning.",
    faqs: [
      {
        question:
          "Klarar plissé takfönster i en sommarvilla i Falsterbo?",
        answer:
          "Ja, det är ett av plissens starkaste användningsområden. Vi monterar med sidoskenor som spänner duken längs glaset i alla lutningar. Det är vanligaste lösningen för Velux-takfönster i loft.",
      },
      {
        question:
          "Kan ni mäta upp ovanliga fönsterformer i ett fiskeläge?",
        answer:
          "Ja. Vi använder mall-måttning för halvcirkulära, snedställda och triangulära fönster. Plissén tillverkas mot beställning och leveranstid är 4–6 veckor på sådana mått. Vid hembesök tar vi mått på alla speciella fönster — de räknas inte som standardarbete.",
      },
      {
        question:
          "Fungerar plissé i en ouppvärmd sommarvilla i Skanör-Falsterbo på vintern?",
        answer:
          "Med rätt vävtyp, ja. Vi väljer en kondenstolerant vävtyp som tål både fukt och temperaturskillnader utan att deformeras. Standardplissé klarar normalt ett sommarvillaklimat utan problem; risk uppstår främst vid extrem fukt eller långvarig kondens, vilket vi förebygger med vävvalet.",
      },
    ],
    ctaHeading: "Boka hembesök i Skanör-Falsterbo.",
    ctaBody:
      "Vi besöker fastigheten — sommarvilla, fiskeläge eller modernt hus — mäter alla fönster, även de med ovanlig form, och föreslår en plissélösning. Hembesök och offert är kostnadsfria.",
  }),

  "rullgardiner-skanor-falsterbo": entry({
    product: "rullgardiner",
    citySlug: "skanor-falsterbo",
    cityLabel: "Skanör-Falsterbo",
    pageUrl: url("rullgardiner-skanor-falsterbo"),
    metadataTitle: "Rullgardiner Skanör-Falsterbo | Bellevue Solskydd",
    metadataDescription:
      "Rullgardiner i Skanör, Falsterbo, Höllviken och Ljunghusen — dubbelrullgardin för sommarvillor med många gästrum. Stora glaspartier mot havet.",
    answerBox:
      "Sommarvillor i Skanör-Falsterbo har ofta flera gästrum som ska klara både dag och natt. Dubbelrullgardin (screen + blackout i samma kassett) löser det elegant — och stora glaspartier mot havet kan bevaras med screen-väv utan att tappa utsikten.",
    whyParagraphs: [
      "Sommarvillor i Skanör, Falsterbo och Höllviken har ofta 4–6 sovrum för gäster. Behoven varierar — barn, vuxna, sovgäster med olika ljuskänslighet. Dubbelrullgardin är förstahandsvalet eftersom den kombinerar två vävar i samma kassett: en transparent screen för dagljus, en mörkläggande för natt.",
      "Modernt premium i Skanör-Falsterbo har ofta panoramafönster mot havet eller dynerna. Här är screen-rullgardin i låg öppningsgrad det självklara valet — utsikten bevaras dagtid samtidigt som ljus och värme dämpas. På höga partier kompletterar vi med motorisering och eventuell smart hem-integration.",
    ],
    processIntro:
      "Vid hembesök i sommarvillor mäter vi alla rum och föreslår olika lösningar för olika rumstyper — gästrum, huvudsovrum, vardagsrum, kök.",
    faqs: [
      {
        question:
          "Vad är skillnaden mellan dubbelrullgardin och två separata rullgardiner?",
        answer:
          "Dubbelrullgardin har två vävar i ett kombinerat system och styrs från en kontroll — kompakt och med ren mekanik. Två separata rullgardiner ger mer flexibilitet (kan styras helt oberoende) men tar mer plats i kassetten och kräver två fästsystem. För sommarvillor i Skanör-Falsterbo rekommenderar vi oftast dubbelrullgardin.",
      },
      {
        question:
          "Servar ni Skanör, Falsterbo, Höllviken och Ljunghusen?",
        answer:
          "Ja, alla fyra. Hela Falsterbohalvön ingår i Vellinge kommun och vi kör dit regelbundet från Staffanstorp. Avstånd cirka 35–40 minuters bilväg. Vi koordinerar gärna flera hembesök samma dag i området.",
      },
      {
        question:
          "Fungerar motoriserade rullgardiner i en sommarvilla utan el på vintern?",
        answer:
          "Många moderna motorer är batteridrivna och fungerar oberoende av nätspänning. För sommarvillor som står utan el på vintern är detta ett bra alternativ. Vid stuga med ström rekommenderar vi nätansluten motor med solpanel som backup om huset är vinterstängt under långa perioder.",
      },
    ],
    ctaHeading: "Boka hembesök i Skanör-Falsterbo.",
    ctaBody:
      "Vi besöker sommarvillan eller bostaden, går igenom alla rum och föreslår en rullgardinslösning som passar både dag- och nattanvändning. Hembesök och offert är kostnadsfria.",
  }),
};
