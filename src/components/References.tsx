import { useI18n } from "@/lib/i18n";
import { Building2, Star } from "lucide-react";

// Reference clients - replace logo URLs with real ones when available
const references = [
  {
    name: "Stadt Linden",
    category: "de",
    logo: "/public/linden.jpg",   // ← Foto aus public/
  },
  {
    name: "Müller Immobilien GmbH",
    category: "de",
    initials: "MI",
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "Bau AG Frankfurt",
    category: "de",
    initials: "BAF",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    name: "Office Center Wetzlar",
    category: "de",
    initials: "OCW",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    name: "Logistik Hub GmbH",
    category: "de",
    initials: "LH",
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "Wohnbau Hessen AG",
    category: "de",
    initials: "WH",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    name: "TechPark Lahn GmbH",
    category: "de",
    initials: "TPL",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    name: "Klinik am Stadtpark",
    category: "de",
    initials: "KS",
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "Schule Mittelhessen",
    category: "de",
    initials: "SM",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
];

const stats = [
  { value: "5+", labelDe: "Jahre Erfahrung", labelHu: "Év tapasztalat" },
  { value: "50+", labelDe: "Zufriedene Kunden", labelHu: "Elégedett ügyfél" },
  { value: "100%", labelDe: "Qualitätsgarantie", labelHu: "Minőséggarancia" },
];

export default function References() {
  const { t, lang } = useI18n();

  return (
    <section id="references" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 text-sm text-primary font-medium">
            <Star className="h-3.5 w-3.5" />
            {lang === "de" ? "Unsere Referenzen" : "Referenciáink"}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gradient-teal">
            {lang === "de" ? "Vertrauen in uns" : "Ügyfeleink bíznak bennünk"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {lang === "de"
              ? "Wir sind stolz auf unsere langjährigen Geschäftspartner und zufriedenen Kunden in der Region."
              : "Büszkék vagyunk hosszú távú üzleti partnereinkre és elégedett ügyfeleinkre a régióban."}
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white border border-border rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="font-display text-3xl font-bold text-primary mb-1">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang === "de" ? s.labelDe : s.labelHu}
              </div>
            </div>
          ))}
        </div>

        {/* Logo / Name grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14">
          {references.map((ref) => (
            <div
              key={ref.name}
              className={`flex flex-col items-center justify-center gap-3 border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:border-primary/40 transition-all group cursor-default ${ref.color}`}
            >
              {(ref as any).logo ? (
  <div className="w-16 h-12 flex items-center justify-center">
    <img src={(ref as any).logo} alt={ref.name} className="max-h-10 max-w-[70px] object-contain" />
  </div>
) : (
  <div
    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm border ${ref.color} group-hover:scale-110 transition-transform`}
  >
    {ref.initials}
  </div>
)}
              <span className="text-xs font-medium text-center leading-tight text-current opacity-80">
                {ref.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-display text-xl font-bold mb-2">
            {lang === "de"
              ? "Werden Sie unser nächster zufriedener Kunde"
              : "Legyen Ön a következő elégedett ügyfelünk"}
          </h3>
          <p className="text-muted-foreground text-sm mb-5">
            {lang === "de"
              ? "Fordern Sie noch heute Ihr unverbindliches Angebot an."
              : "Kérjen még ma díjmentes ajánlatot."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity glow-teal text-sm"
          >
            {lang === "de" ? "Angebot anfordern" : "Ajánlatot kérek"}
          </a>
        </div>
      </div>
    </section>
  );
}
