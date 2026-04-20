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
      p1: "Wir sind ein familiengeführtes Unternehmen mit langjähriger Erfahrung in der professionellen Gebäudereinigung – in Deutschland und darüber hinaus.",
      p2: "Unser Team bietet maßgeschneiderte Reinigungslösungen für Bauobjekte, Büros, Privathaushalte und Gewerbe. Sauberkeit ist für uns kein Zufallsprodukt – sondern System.",
      feat1Title: "Erfahrenes Team",
      feat1Desc: "Qualifizierte Reinigungskräfte",
      feat2Title: "Höchste Qualität",
      feat2Desc: "Professionelle Ergebnisse",
      feat3Title: "Flexibel & zuverlässig",
      feat3Desc: "Termingerechte Ausführung",
      extra1: "Individuelle Beratung",
      extra2: "Umweltfreundliche Mittel",
      extra3: "Flexible Termine",
    },

    services: {
      title: "Unsere Leistungen",
      subtitle:
        "Von der Baureinigung bis zur laufenden Unterhaltsreinigung – wir bieten komplette, professionelle Reinigungslösungen aus einer Hand.",
      items: [
        {
          title: "Baureinigung",
          desc: "Professionelle Reinigung nach Bauarbeiten – damit Ihr Objekt sofort bezugsfertig ist. Wir übernehmen die Grob- und Feinreinigung für Neu- und Umbauten, Renovierungen sowie Industrie- und Gewerbeobjekte.",
        },
        {
          title: "Fensterreinigung",
          desc: "Streifenfreie Fenster- und Glasreinigung für Privat und Gewerbe. Ob Bürofassade, Schaufenster oder Wohnhaus – wir sorgen für kristallklare Ergebnisse, innen und außen.",
        },
        {
          title: "Büroreinigung",
          desc: "Saubere, hygienische Arbeitsplätze steigern die Produktivität und hinterlassen einen professionellen Eindruck. Wir übernehmen die regelmäßige Reinigung Ihrer Büro- und Geschäftsräume.",
        },
        {
          title: "Haushaltsreinigung",
          desc: "Zuverlässige und diskrete Reinigung für private Haushalte. Von der wöchentlichen Unterhaltsreinigung über die Umzugsreinigung bis zur Endreinigung bei Mieterwechsel.",
        },
        {
          title: "Unterhaltsreinigung",
          desc: "Regelmäßige Pflege nach individuellem Reinigungsplan – für Unternehmen, Wohnanlagen und öffentliche Einrichtungen. Gleichbleibende Qualität durch feste Reinigungsteams.",
        },
        {
          title: "Grundreinigung",
          desc: "Wenn normale Reinigung nicht mehr reicht: Unsere Grundreinigung beseitigt hartnäckigen Schmutz, Kalk, Beläge und Verschmutzungen mit professionellen Maschinen und Spezialreinigungsmitteln.",
        },
      ],
      cta: "Nicht das Richtige gefunden?",
      ctaLink: "Kontakt aufnehmen",
    },

    contact: {
      title: "Kontakt",
      subtitle: "Schreiben Sie uns eine Nachricht oder rufen Sie an.",
      reachUs: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      locationValue: "Deutschland",
      formTitle: "Nachricht senden",
      name: "Name",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      message: "Nachricht",
      send: "Senden",
      whyUs: "Warum wir?",
      why1: "Kostenlose Angebote",
      why2: "Schnelle Antwort",
      why3: "Faire Preise",
      why4: "Zufriedenheit garantiert",
    },

    footer: {
      rights: "Alle Rechte vorbehalten.",
    },

    impressum: {
      title: "Impressum",
      company: "Unternehmen",
      owner: "Inhaberin",
      address: "Anschrift",
      country: "Land",
      contact: "Kontakt",
      tax: "Steuernummer",
      vat: "VAT ID",
      hosting: "Hosting",
      liabilityContent: "Haftung für Inhalte",
      liabilityLinks: "Haftung für Links",
      back: "Zurück zur Startseite",
    },

    datenschutz: {
      title: "Datenschutzerklärung",
      sections: [
        "Allgemeine Hinweise",
        "Verantwortliche Stelle",
        "Hosting",
        "Shopify / Shop-System",
        "Kontaktformular / E-Mail",
        "Cookies",
        "Ihre Rechte",
        "Speicherdauer",
      ],
      back: "Zurück zur Startseite",
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
      badge: "Professzionális takarítás",
      title1: "ZB",
      title2: "Cleaningservice",
      subtitle: "Tisztaság rendszerrel",
      desc: "Megbízható takarító partner – kiváló minőségben, pontosan, rendszeresen.",
      cta: "Ajánlatot kérek",
    },

    about: {
      title: "Rólunk",
      p1: "Családi vállalkozásként évek óta végzünk professzionális épülettakarítást – Magyarországon és Németországban egyaránt.",
      p2: "Csapatunk épülettakarításra, irodatakarításra, ablaktisztításra és magánháztartások kiszolgálására specializálódott. A tisztaság nálunk nem véletlenszerű – hanem rendszer.",
      feat1Title: "Tapasztalt csapat",
      feat1Desc: "Szakképzett dolgozók",
      feat2Title: "Magas minőség",
      feat2Desc: "Professzionális eredmény",
      feat3Title: "Rugalmas",
      feat3Desc: "Pontos kivitelezés",
      extra1: "Egyéni ajánlat",
      extra2: "Környezetbarát szerek",
      extra3: "Rugalmas időpont",
    },

    services: {
      title: "Szolgáltatások",
      subtitle:
        "Az építési takarítástól a rendszeres karbantartásig – teljes körű, professzionális takarítási megoldások egy kézből.",
      items: [
        {
          title: "Építési takarítás",
          desc: "Professzionális takarítás építési munkák után – hogy az ingatlan azonnal beköltözhető legyen. Durva és finom takarítást vállalunk új- és felújított épületekhez, ipari és kereskedelmi ingatlanokhoz.",
        },
        {
          title: "Ablaktisztítás",
          desc: "Csíkmentes ablak- és üvegtisztítás magán- és üzleti ügyfeleknek. Irodahomlokzat, kirakatüveg vagy lakóépület – kristálytiszta eredményt biztosítunk belülről és kívülről.",
        },
        {
          title: "Irodatakarítás",
          desc: "A tiszta, higiénikus munkakörnyezet növeli a termelékenységet és professzionális benyomást kelt. Rendszeres irodatakarítást és üzleti helyiségek tisztítását vállaljuk.",
        },
        {
          title: "Háztartási takarítás",
          desc: "Megbízható és diszkrét takarítás magánháztartásoknak. Heti karbantartástól a költözési takarításon át a bérlőcsere utáni végső takarításig.",
        },
        {
          title: "Karbantartó takarítás",
          desc: "Rendszeres karbantartás egyéni takarítási terv szerint – vállalatok, lakókomplexumok és közintézmények számára. Állandó minőség állandó csapatokkal.",
        },
        {
          title: "Nagytakarítás",
          desc: "Amikor a normál takarítás már nem elég: nagytakarításunk eltávolítja a makacs szennyeződéseket, vízkövet és lerakódásokat professzionális gépekkel és speciális tisztítószerekkel.",
        },
      ],
      cta: "Nem találta meg, amit keres?",
      ctaLink: "Vegye fel velünk a kapcsolatot",
    },

    contact: {
      title: "Kapcsolat",
      subtitle: "Írjon nekünk vagy hívjon.",
      reachUs: "Elérhetőség",
      phone: "Telefon",
      email: "E-mail",
      location: "Hely",
      locationValue: "Magyarország",
      formTitle: "Üzenet",
      name: "Név",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      message: "Üzenet",
      send: "Küldés",
      whyUs: "Miért mi?",
      why1: "Ingyenes ajánlat",
      why2: "Gyors válasz",
      why3: "Fair árak",
      why4: "Garancia",
    },

    footer: {
      rights: "Minden jog fenntartva.",
    },

    impressum: {
      title: "Impresszum",
      company: "Cég",
      owner: "Tulajdonos",
      address: "Cím",
      country: "Ország",
      contact: "Kapcsolat",
      tax: "Adószám",
      vat: "EU adószám",
      hosting: "Tárhely",
      liabilityContent: "Tartalom felelősség",
      liabilityLinks: "Link felelősség",
      back: "Vissza",
    },

    datenschutz: {
      title: "Adatvédelem",
      sections: [
        "Általános információk",
        "Adatkezelő",
        "Tárhely",
        "Shop rendszer",
        "Kapcsolat",
        "Sütik",
        "Jogok",
        "Adattárolás",
      ],
      back: "Vissza a főoldalra",
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

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
