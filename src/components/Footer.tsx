import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Sparkles, MapPin, Mail, Globe, Phone, Building2 } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-white border-t border-border text-gray-700">
      <div className="container mx-auto max-w-5xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Spalte 1: Marke */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-primary text-lg">ZB Cleaningservice</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>

        {/* Spalte 2: Ansprechpartner */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">{t.footer.contactPerson}</h4>
          <p className="font-bold text-gray-800 mb-0.5">Zoltán Rostás</p>
          <p className="text-gray-500 text-sm mb-4">{t.footer.role}</p>
          <ul className="space-y-2.5 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              Nagyrév, Magyarország
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="mailto:info@zbcleaningservice.com" className="hover:text-primary transition-colors">
                info@zbcleaningservice.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="https://www.zbcleaningservice.com" className="hover:text-primary transition-colors">
                www.zbcleaningservice.com
              </a>
            </li>
          </ul>
        </div>

        {/* Spalte 3: Firmenangaben */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">{t.footer.companyInfo}</h4>
          <div className="flex items-start gap-2 mb-3">
            <Building2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-500 leading-relaxed">
              <p className="font-bold text-gray-800">ZB Cleaning Service Kft.</p>
              <p>{t.footer.seat}</p>
              <p>{t.footer.register}</p>
              <p>{t.footer.tax}</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-500 mt-4">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="tel:+4917665193906" className="hover:text-primary transition-colors">+49 176 651 93906</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="tel:+36205385008" className="hover:text-primary transition-colors">+36 20 538 5008</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Unterleiste */}
      <div className="border-t border-border">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 ZB Cleaning Service Kft. {t.footer.rights}</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
