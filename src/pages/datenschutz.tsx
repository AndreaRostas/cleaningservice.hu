import { useI18n } from "@/lib/i18n";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
  const { lang, t } = useI18n();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <span className="font-display font-bold text-primary text-sm tracking-wide">ZB CLEANINGSERVICE</span>
              <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Gebäudereinigung</span>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.datenschutz.back}
          </Link>
        </div>
      </nav>

      {/* Background */}
      <div className="min-h-screen bg-white" />
      <Sparkles className="fixed top-1/4 right-[5%] h-5 w-5 text-primary/20 animate-pulse pointer-events-none" />
      <Sparkles className="fixed bottom-1/4 left-[8%] h-4 w-4 text-primary/15 animate-pulse delay-700 pointer-events-none" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-sm leading-relaxed">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 mb-6 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            ZB Cleaningservice
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-gradient-teal italic">{t.datenschutz.title}</span>
          </h1>
        </div>

        <div className="space-y-3">
          <DsSection number="1" title={t.datenschutz.sections[0]}>
            {lang === "de"
              ? "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Website verarbeitet Daten ausschließlich im Rahmen der gesetzlichen Datenschutzvorschriften (DSGVO, TMG)."
              : "Személyes adatainak védelme fontos számunkra. Ez a weboldal az adatokat kizárólag a jogszabályoknak megfelelően kezeli."}
          </DsSection>

          <DsSection number="2" title={t.datenschutz.sections[1]}>
            <div className="space-y-0.5">
              <p className="text-foreground font-medium">ZB Cleaningservice</p>
              <p>{lang === "de" ? "Inhaber" : "Tulajdonos"}: Zoltan Rostas</p>
              <a href="mailto:zb.service247@gmail.com" className="text-primary hover:underline">
                zb.service247@gmail.com
              </a>
            </div>
          </DsSection>

          <DsSection number="3" title={t.datenschutz.sections[2]}>
            {lang === "de"
              ? "Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden automatisch Server-Logfiles erfasst."
              : "Ez a weboldal a Vercel Inc. szerverein fut. A látogatás során szervernaplók kerülnek rögzítésre."}
          </DsSection>

          <DsSection number="4" title={t.datenschutz.sections[3]}>
            {lang === "de"
              ? "Wenn ein Online-Shop integriert ist, werden personenbezogene Daten an Shopify übermittelt."
              : "Ha webáruház van integrálva, az adatok a Shopify rendszerébe kerülnek."}
          </DsSection>

          <DsSection number="5" title={t.datenschutz.sections[4]}>
            {lang === "de"
              ? "Wenn Sie uns kontaktieren, werden Ihre Angaben zur Bearbeitung gespeichert."
              : "Kapcsolatfelvétel esetén az adatokat az ügyintézéshez tároljuk."}
          </DsSection>

          <DsSection number="6" title={t.datenschutz.sections[5]}>
            {lang === "de"
              ? "Diese Website kann Cookies verwenden."
              : "Ez a weboldal sütiket használhat."}
          </DsSection>

          <DsSection number="7" title={t.datenschutz.sections[6]}>
            {lang === "de"
              ? "Sie haben das Recht auf Auskunft, Löschung und Berichtigung Ihrer Daten."
              : "Ön jogosult az adataihoz való hozzáférésre, törlésre és módosításra."}
          </DsSection>

          <DsSection number="8" title={t.datenschutz.sections[7]}>
            {lang === "de"
              ? "Daten werden nur so lange gespeichert, wie nötig."
              : "Az adatokat csak a szükséges ideig tároljuk."}
          </DsSection>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <span className="text-border">·</span>
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
        </div>
      </main>
    </>
  );
}

function DsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border rounded-2xl bg-white px-6 py-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
          {number}
        </span>
        <div>
          <h2 className="font-display font-semibold text-primary text-xs tracking-widest uppercase mb-2">
            {title}
          </h2>
          <div className="text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
