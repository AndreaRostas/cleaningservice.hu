import { useI18n } from "@/lib/i18n";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full background image - professional cleaning */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark teal overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/70 to-cyan-900/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 text-sm text-white/90">
          ✦ {t.hero.badge}
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          <span className="text-cyan-300 italic">{t.hero.title1}</span>{" "}
          <span className="text-white">{t.hero.title2}</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 font-display">{t.hero.subtitle}</p>
        <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">{t.hero.desc}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cyan-400 text-teal-900 px-8 py-3.5 rounded-full font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/30"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:017665193906"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            +49 176 651 93906
          </a>
        </div>
      </div>
    </section>
  );
}
