import { useI18n } from "@/lib/i18n";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <Sparkles className="absolute top-1/4 left-[15%] h-5 w-5 text-primary/30 animate-pulse" />
      <Sparkles className="absolute top-1/3 right-[10%] h-4 w-4 text-primary/20 animate-pulse delay-500" />
      <Sparkles className="absolute bottom-1/3 left-[25%] h-3 w-3 text-primary/25 animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-5 py-2 mb-8 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          {t.hero.badge}
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gradient-gold italic">{t.hero.title1}</span>{" "}
          <span className="text-foreground">{t.hero.title2}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display">{t.hero.subtitle}</p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">{t.hero.desc}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity glow-gold"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:017665193906"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-colors"
          >
            +36 20 538 5008 <br />
            +49 176 651 93906
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
