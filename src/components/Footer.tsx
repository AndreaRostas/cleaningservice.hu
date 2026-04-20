import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Mail, Globe, MapPin, Phone, Building2 } from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="border-t border-border bg-background text-foreground">
      {/* Main footer grid */}
      <div className="container mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold text-gradient-gold">
                ZB Cleaningservice
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "de"
                ? "Professionelle Gebäudereinigung – zuverlässig, gründlich und termingerecht."
                : "Professzionális épülettakarítás – megbízható, alapos és határidőre."}
            </p>
          </div>

          {/* Contact person */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-5">
              {lang === "de" ? "Ansprechpartner" : "Kapcsolattartó"}
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="text-foreground font-semibold">Zoltán Rostás</p>
              <p className="text-xs text-primary/80">
                {lang === "de" ? "Geschäftsführer" : "Ügyvezető"} · ZB Cleaning Service Kft.
              </p>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span>Nagyrév, Magyarország</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@zbcleaningservice.com"
                  className="hover:text-primary transition-colors"
                >
                  info@zbcleaningservice.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a
                  href="https://www.zbcleaningservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.zbcleaningservice.com
                </a>
              </div>
            </div>
          </div>

          {/* Company details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-5">
              {lang === "de" ? "Firmenangaben" : "Céginformáció"}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Building2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 font-medium">ZB Cleaning Service Kft.</p>
                  <p className="text-xs mt-1">
                    {lang === "de" ? "Sitz:" : "Székhely:"} Nagyrév, Magyarország
                  </p>
                  <p className="text-xs mt-0.5">
                    {lang === "de" ? "Handelsregisternr.:" : "Cégjegyzékszám:"}{" "}
                    16-09-023190
                  </p>
                  <p className="text-xs mt-0.5">
                    {lang === "de" ? "Steuernummer:" : "Adószám:"} 32880014-2-16
                  </p>
                </div>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="mt-5 space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a href="tel:+4917665193906" className="hover:text-primary transition-colors">
                  +49 176 651 93906
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a href="tel:+36205385008" className="hover:text-primary transition-colors">
                  +36 20 538 5008
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ZB Cleaning Service Kft. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz / Adatvédelem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
