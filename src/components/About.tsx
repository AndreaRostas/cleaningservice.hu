import { useI18n } from "@/lib/i18n";
import { Users, Award, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  const features = [
    { icon: Users, title: t.about.feat1Title, desc: t.about.feat1Desc },
    { icon: Award, title: t.about.feat2Title, desc: t.about.feat2Desc },
    { icon: Clock, title: t.about.feat3Title, desc: t.about.feat3Desc },
  ];

  const extras = [t.about.extra1, t.about.extra2, t.about.extra3];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-gradient-gold">
          {t.about.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4 leading-relaxed">{t.about.p1}</p>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">{t.about.p2}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {extras.map((e) => (
            <div key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              {e}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
