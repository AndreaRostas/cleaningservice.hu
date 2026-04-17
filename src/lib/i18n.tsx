import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "hu";

const translations = {
  de: {
    nav: {
      about: "Über Uns",
      services: "Leistungen",
      contact: "Kontakt",
      call: "Anrufen",
    },
    hero: {
      badge: "Professionelle Gebäudereinigung",
      title1: "ZB",
      title2: "Cleaningservice",
      subtitle: "Sauberkeit mit System",
      desc: "Ihr zuverlässiger Partner für professionelle Gebäudereinigung. Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle.",
      cta: "Angebot anfordern",
    },
    about: {
      title: "Über Uns",
      p1: "Wir sind ein familiengeführtes Unternehmen mit langjähriger Erfahrung in der professionellen Gebäudereinigung. Wir bringen bewährte Qualität und Zuverlässigkeit zu jedem Auftrag mit.",
      p2: "Ob Baureinigung, Fensterreinigung oder laufende Unterhaltsreinigung – wir bieten Ihnen maßgeschneiderte Lösungen für jeden Bedarf. Größere Aufträge erledigen wir schnell und termingerecht mit höchster Qualität.",
      feat1Title: "Erfahrenes Team",
      feat1Desc: "Qualifizierte und geschulte Reinigungskräfte",
      feat2Title: "Höchste Qualität",
      feat2Desc: "Gründliche Arbeit mit professionellen Mitteln",
      feat3Title: "Flexibel & Zuverlässig",
      feat3Desc: "Termingerechte Ausführung aller Aufträge",
      extra1: "Individuelle Beratung und Angebotserstellung",
      extra2: "Umweltfreundliche Reinigungsmittel",
      extra3: "Flexible Terminvereinbarung",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Von der Baureinigung bis zur regelmäßigen Unterhaltsreinigung – wir bieten Ihnen ein umfassendes Leistungsspektrum für jeden Bedarf.",
      items: [
        { title: "Baureinigung", desc: "Gründliche Reinigung nach Bauarbeiten. Wir entfernen Baustaub, Farbreste und Schmutz für ein bezugsfertiges Ergebnis." },
        { title: "Fensterreinigung", desc: "Streifenfreie Fenster- und Glasreinigung für Privat- und Geschäftskunden. Auch für schwer erreichbare Flächen." },
        { title: "Büroreinigung", desc: "Regelmäßige Reinigung von Büroräumen, Empfangsbereichen und Sanitäranlagen für ein sauberes Arbeitsumfeld." },
        { title: "Haushaltsreinigung", desc: "Professionelle Reinigung für Privathaushalte. Einmalig oder als regelmäßiger Service nach Ihren Wünschen." },
        { title: "Unterhaltsreinigung", desc: "Laufende Gebäudepflege mit individuellen Reinigungsintervallen. Zuverlässig und termingerecht." },
        { title: "Grundreinigung", desc: "Intensive Tiefenreinigung für stark verschmutzte Bereiche. Böden, Küchen, Sanitäranlagen und mehr." },
      ],
      cta: "Nicht das Richtige gefunden? Wir bieten maßgeschneiderte Lösungen.",
      ctaLink: "Kontaktieren Sie uns für eine individuelle Beratung",
    },
    contact: {
      title: "Kontaktieren Sie Uns",
      subtitle: "Fordern Sie ein unverbindliches Angebot an oder stellen Sie uns Ihre Fragen. Wir freuen uns auf Ihre Nachricht!",
      reachUs: "So erreichen Sie uns",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      locationValue: "Deutschland",
      whyUs: "Warum ZB Cleaningservice?",
      why1: "Kostenlose Angebotserstellung",
      why2: "Schnelle Reaktionszeiten",
      why3: "Faire und transparente Preise",
      why4: "Zufriedenheitsgarantie",
      formTitle: "Nachricht senden",
      name: "Name",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      message: "Nachricht",
      send: "Nachricht senden",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
  hu: {
    nav: {
      about: "Rólunk",
      services: "Szolgáltatások",
      contact: "Kapcsolat",
      call: "Hívás",
    },
    hero: {
      badge: "Professzionális épülettakarítás",
      title1: "ZB",
      title2: "Cleaningservice",
      subtitle: "Tisztaság rendszerrel",
      desc: "Megbízható partnerünk a professzionális épülettakarításban. Minőség, megbízhatóság és ügyfél-elégedettség nálunk az első helyen áll.",
      cta: "Ajánlatot kérek",
    },
    about: {
      title: "Rólunk",
      p1: "Családi vállalkozásunk hosszú éves tapasztalattal rendelkezik a professzionális épülettakarítás terén. Bevált minőséget és megbízhatóságot hozunk minden megbízáshoz.",
      p2: "Legyen szó építési takarításról, ablaktisztításról vagy folyamatos karbantartási takarításról – testreszabott megoldásokat kínálunk minden igényre. Nagyobb megbízásokat gyorsan és határidőre, a legmagasabb minőségben végezzük el.",
      feat1Title: "Tapasztalt csapat",
      feat1Desc: "Képzett és szakképzett takarítók",
      feat2Title: "Legmagasabb minőség",
      feat2Desc: "Alapos munka professzionális eszközökkel",
      feat3Title: "Rugalmas & Megbízható",
      feat3Desc: "Minden megbízás határidőre történő teljesítése",
      extra1: "Egyéni tanácsadás és ajánlatkészítés",
      extra2: "Környezetbarát tisztítószerek",
      extra3: "Rugalmas időpontegyeztetés",
    },
    services: {
      title: "Szolgáltatásaink",
      subtitle: "Az építési takarítástól a rendszeres karbantartási takarításig – átfogó szolgáltatáspalettát kínálunk minden igényre.",
      items: [
        { title: "Építési takarítás", desc: "Alapos takarítás építési munkák után. Eltávolítjuk az építési port, festékmaradványokat és szennyeződéseket." },
        { title: "Ablaktisztítás", desc: "Csíkmentes ablak- és üvegtisztítás magán- és üzleti ügyfeleknek. Nehezen elérhető felületekre is." },
        { title: "Irodatakarítás", desc: "Irodahelyiségek, recepciók és szanitáriák rendszeres takarítása a tiszta munkakörnyezetért." },
        { title: "Háztartási takarítás", desc: "Professzionális takarítás magánháztartásoknak. Egyszeri vagy rendszeres szolgáltatás az Ön igényei szerint." },
        { title: "Karbantartási takarítás", desc: "Folyamatos épületgondozás egyéni takarítási időközökkel. Megbízhatóan és határidőre." },
        { title: "Nagytakarítás", desc: "Intenzív mélytisztítás erősen szennyezett területeken. Padlók, konyhák, szanitáriák és még sok más." },
      ],
      cta: "Nem találta meg a megfelelőt? Testreszabott megoldásokat kínálunk.",
      ctaLink: "Lépjen velünk kapcsolatba egyéni tanácsadásért",
    },
    contact: {
      title: "Lépjen Kapcsolatba Velünk",
      subtitle: "Kérjen kötelezettségmentes ajánlatot, vagy tegye fel kérdéseit. Örülünk az üzenetének!",
      reachUs: "Így érhet el minket",
      phone: "Telefon",
      email: "E-mail",
      location: "Helyszín",
      locationValue: "5463 Nagyrev",
      whyUs: "Miért ZB Cleaningservice?",
      why1: "Ingyenes ajánlatkészítés",
      why2: "Gyors reakcióidő",
      why3: "Tisztességes és átlátható árak",
      why4: "Elégedettségi garancia",
      formTitle: "Üzenet küldése",
      name: "Név",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      message: "Üzenet",
      send: "Üzenet küldése",
    },
    footer: {
      rights: "Minden jog fenntartva.",
    },
  },
} as const;

type Translations = (typeof translations)[Lang];

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
