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
      p1: "Wir sind ein familiengeführtes Unternehmen mit Erfahrung in der Gebäudereinigung.",
      p2: "Wir bieten Reinigung für Bau, Fenster, Büro und private Haushalte.",
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
        "Von Bau bis Unterhalt – wir bieten komplette Reinigungslösungen.",
      items: [
        {
          title: "Baureinigung",
          desc: "Reinigung nach Bauarbeiten.",
        },
        {
          title: "Fensterreinigung",
          desc: "Streifenfreie Glasreinigung.",
        },
        {
          title: "Büroreinigung",
          desc: "Saubere Arbeitsplätze.",
        },
        {
          title: "Haushaltsreinigung",
          desc: "Für private Haushalte.",
        },
        {
          title: "Unterhaltsreinigung",
          desc: "Regelmäßige Reinigung.",
        },
        {
          title: "Grundreinigung",
          desc: "Tiefenreinigung stark verschmutzter Bereiche.",
        },
        {
          title: "Grünpflege & Rasenmähen",
          desc: "Rasenmähen, Heckenpflege, Fűkaszálás und Grünanlagenpflege.",
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
      locationValue:"5463 Nagyrev, Ungarn · Allendorf (Lumda), Deutschland"  ,
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
      whatsapp: "WhatsApp schreiben",
      messenger: "Messenger schreiben",
    },

    footer: {
      rights: "Alle Rechte vorbehalten.",
      contactPerson: "Ansprechpartner",
      role: "Geschäftsführer · ZB Cleaning Service Kft.",
      companyInfo: "Firmenangaben",
      seat: "Sitz: Nagyrév, Magyarország",
      register: "Handelsregisternr.: 16-09-023190",
      tax: "Steuernummer: 32880014-2-16",
      tagline: "Professionelle Gebäudereinigung – zuverlässig, gründlich und termingerecht.",
      privacy: "Datenschutz / Adatvédelem",
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
      desc: "Megbízható takarító szolgáltatás magas minőségben.",
      cta: "Ajánlatot kérek",
    },

    about: {
      title: "Rólunk",
      p1: "Családi vállalkozás vagyunk tapasztalattal.",
      p2: "Épület-, iroda- és ablaktakarítást végzünk.",
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
      subtitle: "Teljes körű takarítási megoldások.",
      items: [
        { title: "Építési takarítás", desc: "Építkezés utáni takarítás." },
        { title: "Ablaktisztítás", desc: "Csíkmentes üveg." },
        { title: "Irodatakarítás", desc: "Tiszta irodák." },
        { title: "Háztartási takarítás", desc: "Otthoni takarítás." },
        { title: "Karbantartás", desc: "Rendszeres tisztítás." },
        { title: "Nagytakarítás", desc: "Mélytisztítás." },
        { title: "Zöldterület-gondozás & Fűnyírás", desc: "Fűnyírás, fűkaszálás, sövényvágás és zöldterület-kezelés." },
      ],
      cta: "Nem találta meg?",
      ctaLink: "Kapcsolat",
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
      whatsapp: "WhatsApp üzenet",
      messenger: "Messenger üzenet",
    },

    footer: {
      rights: "Minden jog fenntartva.",
      contactPerson: "Kapcsolattartó",
      role: "Ügyvezető · ZB Cleaning Service Kft.",
      companyInfo: "Céginformáció",
      seat: "Székhely: Nagyrév, Magyarország",
      register: "Cégjegyzékszám: 16-09-023190",
      tax: "Adószám: 32880014-2-16",
      tagline: "Professzionális épülettakarítás – megbízható, alapos és határidőre.",
      privacy: "Adatvédelem / Datenschutz",
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