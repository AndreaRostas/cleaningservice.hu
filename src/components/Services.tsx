import { useI18n } from "@/lib/i18n";
import { Building2, LayoutGrid, Briefcase, Home, RefreshCw, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const serviceImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // Baureinigung
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", // Fensterreinigung
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Büroreinigung
  "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80", // Haushaltsreinigung
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80", // Unterhaltsreinigung
  "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80", // Grundreinigung
];

const icons = [Building2, LayoutGrid, Briefcase, Home, RefreshCw, Sparkles];

const serviceDetails = {
  de: [
    {
      bullets: [
        "Grob- und Feinreinigung nach Baufertigstellung",
        "Entfernung von Bauschutt, Staub & Kleberesten",
        "Reinigung von Fenstern, Böden & Sanitäranlagen",
        "Besenreine Übergabe oder schlüsselfertig sauber",
        "Einsatz gewerblicher Hochleistungsmaschinen",
      ],
      extra: "Für Neu- und Umbauten, Renovierungen sowie Industrie- und Gewerbeobjekte.",
    },
    {
      bullets: [
        "Innen- und Außenreinigung aller Glasflächen",
        "Streifenfreie Reinigung mit Teleskopstangen & Abziehern",
        "Reinigung von Rahmen, Dichtungen & Laibungen",
        "Schaufenster, Fassadenglas & Glasdächer",
        "Hochhausgeeignete Technik auf Anfrage",
      ],
      extra: "Ergebnis: kristallklare Scheiben – ohne Schlieren, ohne Rückstände.",
    },
    {
      bullets: [
        "Tägliche oder wöchentliche Unterhaltsreinigung",
        "Desinfektion von Küchen, Sanitäranlagen & Türklinken",
        "Bodenreinigung: Parkett, Fliesen, Teppich",
        "Reinigung von Bildschirmen, Tastaturen & Möbeln",
        "Diskrete Durchführung außerhalb der Bürozeiten",
      ],
      extra: "Saubere, hygienische Arbeitsumgebung – täglich, wöchentlich oder nach Bedarf.",
    },
    {
      bullets: [
        "Küche, Bad, Wohnbereiche & Schlafzimmer",
        "Intensivreinigung vor/nach Umzügen",
        "Endreinigung bei Mieterwechsel",
        "Backofen-, Kühlschrank- & Schrankreinigung",
        "Zuverlässig, diskret und pünktlich",
      ],
      extra: "Perfekt für Privathaushalte, Ferienwohnungen und Mietobjekte.",
    },
    {
      bullets: [
        "Regelmäßige Pflege nach individuellem Reinigungsplan",
        "Treppenhaus, Eingangsbereich & Gemeinschaftsflächen",
        "Sanitäranlagen & Pausenräume",
        "Müllentsorgung & Außenanlagen auf Wunsch",
        "Zuverlässige Festteams mit gleichbleibender Qualität",
      ],
      extra: "Langfristige Partnerschaft für Firmen, Wohnanlagen & öffentliche Gebäude.",
    },
    {
      bullets: [
        "Tiefenreinigung stark verschmutzter Bereiche",
        "Maschinelle Boden- & Teppichreinigung",
        "Kalkentfernung, Schimmelbekämpfung & Desinfektion",
        "Industrieküchen, Keller & Lagerräume",
        "Einmalige oder periodische Einsätze",
      ],
      extra: "Für hartnäckigen Schmutz, der normale Reinigung übersteigt.",
    },
  ],
  hu: [
    {
      bullets: [
        "Durva és finom takarítás az építési munkák után",
        "Törmelék, por és ragasztómaradványok eltávolítása",
        "Ablakok, padlók és fürdőszobák tisztítása",
        "Seprűkész vagy kulcsrakész átadás",
        "Ipari teljesítményű gépek használata",
      ],
      extra: "Új- és felújított épületekhez, ipari és kereskedelmi ingatlanokhoz.",
    },
    {
      bullets: [
        "Belső és külső üvegfelületek tisztítása",
        "Csíkmentes eredmény teleszkópos rudakkal",
        "Keretek, tömítések és bélések tisztítása",
        "Kirakatüveg, homlokzati üveg és üvegtetők",
        "Magasépületek esetén speciális technikával",
      ],
      extra: "Eredmény: kristálytiszta üveg – csíkok és maradványok nélkül.",
    },
    {
      bullets: [
        "Napi vagy heti rendszeres takarítás",
        "Konyha, mosdók és kilincsgombok fertőtlenítése",
        "Padlótisztítás: parketta, csempe, szőnyeg",
        "Monitorok, billentyűzetek és bútorok tisztítása",
        "Diszkrét elvégzés munkaidőn kívül",
      ],
      extra: "Tiszta, higiénikus munkakörnyezet – naponta, hetente vagy igény szerint.",
    },
    {
      bullets: [
        "Konyha, fürdőszoba, nappali és hálószoba",
        "Intenzív takarítás költözés előtt/után",
        "Végső takarítás bérlőcsere esetén",
        "Sütő, hűtő és szekrény tisztítása",
        "Megbízható, diszkrét és pontos",
      ],
      extra: "Tökéletes magánháztartásokhoz, nyaralókhoz és bérleményekhez.",
    },
    {
      bullets: [
        "Rendszeres karbantartás egyéni tisztítási terv szerint",
        "Lépcsőház, bejárat és közös területek",
        "Mosdók és pihenőszobák",
        "Hulladékkezelés és külső területek igény szerint",
        "Állandó csapatok következetes minőséggel",
      ],
      extra: "Hosszú távú partnerség vállalatok, lakókomplexumok és középületek számára.",
    },
    {
      bullets: [
        "Erősen szennyezett területek mélytisztítása",
        "Gépi padló- és szőnyegtisztítás",
        "Vízkőeltávolítás, penészkezelés és fertőtlenítés",
        "Ipari konyhák, pincék és raktárak",
        "Egyszeri vagy időszakos beavatkozások",
      ],
      extra: "Makacs szennyeződésekre, amelyek meghaladják a normál takarítást.",
    },
  ],
};

export default function Services() {
  const { t, lang } = useI18n();
  const details = serviceDetails[lang];

  return (
    <section id="services" className="py-28 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
            {lang === "de" ? "Was wir bieten" : "Amit kínálunk"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 text-gradient-gold">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 opacity-50" />
        </div>

        {/* Service Cards – alternating layout */}
        <div className="space-y-24">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            const detail = details[i];
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative group ${!isEven ? "md:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-border">
                    <img
                      src={serviceImages[i]}
                      alt={item.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                        <Icon className="h-3.5 w-3.5" />
                        {item.title}
                      </div>
                    </div>
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 rounded-2xl bg-primary/5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className={!isEven ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-5 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 mb-6">
                    {detail.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Extra note */}
                  <div className="bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm text-muted-foreground italic">
                    {detail.extra}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {lang === "de" ? "Angebot anfordern" : "Ajánlatot kérek"}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-28 rounded-2xl bg-secondary/30 border border-border px-8 py-12 text-center">
          <Sparkles className="h-6 w-6 text-primary mx-auto mb-4 opacity-70" />
          <p className="font-display text-xl font-bold mb-2">{t.services.cta}</p>
          <p className="text-muted-foreground text-sm mb-6">
            {lang === "de"
              ? "Wir erstellen Ihnen ein kostenloses, unverbindliches Angebot."
              : "Ingyenes, kötelezettségmentes árajánlatot készítünk Önnek."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity glow-gold text-sm"
          >
            {t.services.ctaLink}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
