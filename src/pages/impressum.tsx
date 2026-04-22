import { useI18n } from "@/lib/i18n";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Impressum() {
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
            {t.impressum.back}
          </Link>
        </div>
      </nav>

      {/* Background */}
      <div className="min-h-screen bg-white" />
      <Sparkles className="fixed top-1/4 left-[5%] h-5 w-5 text-primary/20 animate-pulse pointer-events-none" />
      <Sparkles className="fixed bottom-1/3 right-[8%] h-4 w-4 text-primary/15 animate-pulse delay-700 pointer-events-none" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-sm leading-relaxed">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 mb-6 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            ZB Cleaningservice
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-gradient-teal italic">{t.impressum.title}</span>
          </h1>
        </div>

        <div className="border border-border rounded-2xl overflow-hidden bg-secondary/20">
          <Section title="§ 5 TMG">
            <Line label={t.impressum.company} value="ZB Cleaningservice" />
            <Line label={t.impressum.owner} value="Zoltan Rostas" />
            <Line label={t.impressum.address} value="5463 Nagyrev, Ujtelep 15" />
            <Line label={t.impressum.country} value="Deutschland / Ungarn" />
          </Section>

          <Divider />

          <Section title={t.impressum.contact}>
            <Line label="Telefon" value="+36 20 538 5008" />
            <Line label="Telefon DE" value="+49 176 651 93906" />
            <Line label="E-Mail" value="zb.service247@gmail.com" href="mailto:zb.service247@gmail.com" />
          </Section>

          <Divider />

          <Section title={t.impressum.tax}>
            <Line label={t.impressum.tax} value="32880014-2-16" />
            <Line label={t.impressum.vat} value="HU32880014" />
          </Section>

          <Divider />

          <Section title={t.impressum.hosting}>
            <Line label="Anbieter" value="Vercel Inc." />
            <Line label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, USA" />
            <Line label="Website" value="vercel.com" href="https://vercel.com" />
          </Section>

          <Divider />

          <Section title={t.impressum.liabilityContent}>
            <p className="text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich.
            </p>
          </Section>

          <Divider />

          <Section title={t.impressum.liabilityLinks}>
            <p className="text-muted-foreground">
              Diese Website enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben.
            </p>
          </Section>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          <span className="text-border">·</span>
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
        </div>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-6 py-5">
      <h2 className="font-display font-semibold text-primary text-xs tracking-widest uppercase mb-3">{title}</h2>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border mx-6" />;
}

function Line({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex flex-wrap gap-x-3">
      <span className="text-muted-foreground min-w-[100px]">{label}:</span>
      {href ? (
        <a href={href} className="text-primary hover:underline">{value}</a>
      ) : (
        <span className="text-foreground">{value}</span>
      )}
    </div>
  );
}
