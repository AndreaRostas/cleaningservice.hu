import { useI18n } from "@/lib/i18n";
import { Building2, LayoutGrid, Briefcase, Home, RefreshCw, Sparkles, ArrowRight } from "lucide-react";

const icons = [Building2, LayoutGrid, Briefcase, Home, RefreshCw, Sparkles];

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-teal">
          {t.services.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">{t.services.subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-3">{t.services.cta}</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            {t.services.ctaLink}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
