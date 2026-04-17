import { useI18n } from "@/lib/i18n";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
  const { lang } = useI18n();

  return (
    <>
      {/* Navbar – gleich wie Hauptseite */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <span className="font-display font-bold text-primary text-sm tracking-wide">
                ZB CLEANINGSERVICE
              </span>
              <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">
                {lang === "de" ? "Gebäudereinigung" : "Épülettakarítás"}
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === "de" ? "Zurück zur Startseite" : "Vissza a főoldalra"}
          </Link>
        </div>
      </nav>

      {/* Hintergrund-Gradient wie Hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-secondary/30 pointer-events-none" />
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
            <span className="text-gradient-gold italic">Datenschutz</span>
            <span className="text-foreground"> erklärung</span>
          </h1>
        </div>

        <div className="space-y-3">

          <DsSection number="1" title="Allgemeine Hinweise">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Website verarbeitet Daten
            ausschließlich im Rahmen der gesetzlichen Datenschutzvorschriften (DSGVO, TMG).
          </DsSection>

          <DsSection number="2" title="Verantwortliche Stelle">
            <div className="space-y-0.5">
              <p className="text-foreground font-medium">ZB Cleaningservice</p>
              <p>Inhaberin: Zoltan Rostas</p>
              <a href="mailto:zb.service247@gmail.com" className="text-primary hover:underline">
                zb.service247@gmail.com
              </a>
            </div>
          </DsSection>

          <DsSection number="3" title="Hosting">
            Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden automatisch
            Server-Logfiles (IP-Adresse, Browser, Zeitpunkt des Zugriffs) erfasst.
          </DsSection>

          <DsSection number="4" title="Shopify / Shop-System">
            Wenn ein Online-Shop integriert ist, werden zur Abwicklung von Bestellungen
            personenbezogene Daten (Name, Adresse, Zahlungsdaten) an Shopify übermittelt und dort
            verarbeitet.
          </DsSection>

          <DsSection number="5" title="Kontaktformular / E-Mail">
            Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben zur
            Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
          </DsSection>

          <DsSection number="6" title="Cookies">
            Diese Website kann Cookies verwenden, um Funktionen zu ermöglichen (z. B. Warenkorb,
            Analytics). Beim ersten Besuch wird ein Cookie-Banner zur Einwilligung angezeigt.
          </DsSection>

          <DsSection number="7" title="Ihre Rechte">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.
          </DsSection>

          <DsSection number="8" title="Speicherdauer">
            Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist
            oder gesetzlich vorgeschrieben ist.
          </DsSection>

        </div>

        {/* Footer-Link */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link to="/impressum" className="hover:text-primary transition-colors">
            Impressum
          </Link>
          <span className="text-border">·</span>
          <Link to="/" className="hover:text-primary transition-colors">
            Startseite
          </Link>
        </div>
      </main>
    </>
  );
}

/* ── Hilfskomponente ── */

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
    <div className="border border-border rounded-2xl bg-secondary/20 px-6 py-5">
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