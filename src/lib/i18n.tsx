import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "hu";

const translations = {
  de: {
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
      liabilityContent: "Tartalomért való felelősség",
      liabilityLinks: "Hivatkozásokért való felelősség",
      back: "Vissza a főoldalra",
    },
    datenschutz: {
      title: "Adatvédelem",
      sections: [
        "Általános információk",
        "Adatkezelő",
        "Tárhely",
        "Shop rendszer",
        "Kapcsolat / E-mail",
        "Sütik",
        "Jogai",
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