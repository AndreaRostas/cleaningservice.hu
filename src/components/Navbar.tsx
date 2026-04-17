import { useI18n } from "@/lib/i18n";
import { Phone, Sparkles } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <div>
            <span className="font-display font-bold text-primary text-sm tracking-wide">ZB CLEANINGSERVICE</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">
              {lang === "de" ? "Gebäudereinigung" : "Épülettakarítás"}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border rounded-full overflow-hidden text-xs">
            <button
              onClick={() => setLang("de")}
              className={`px-3 py-1.5 transition-colors ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("hu")}
              className={`px-3 py-1.5 transition-colors ${lang === "hu" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              HU
            </button>
          </div>
          <a
            href="tel:017665193906"
            className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="h-3.5 w-3.5" />
            {t.nav.call}
          </a>
        </div>
      </div>
    </nav>
  );
}
