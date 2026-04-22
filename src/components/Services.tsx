import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { ArrowRight, X, CheckCircle, Phone } from "lucide-react";

// Service data with Unsplash images and detailed descriptions
const serviceData = [
  {
    key: "bau",
    image: "/baureinigung.jpg",
    de: {
      title: "Baureinigung",
      short: "Professionelle Reinigung nach Bauarbeiten – von Staub bis Bauschutt.",
      details: [
        "Entfernung von Baustaub, Zementresten und Kleberrückständen",
        "Reinigung von Fenstern, Rahmen und Gläsern nach Bauarbeiten",
        "Beseitigung von Farb- und Putzspritzern auf Böden und Wänden",
        "Endreinigung für Übergabe an Eigentümer oder Mieter",
        "Arbeit auch auf Baustellen mit laufendem Betrieb",
      ],
    },
    hu: {
      title: "Építési takarítás",
      short: "Professzionális takarítás építési munkák után – portól a törmelékig.",
      details: [
        "Építési por, cement- és ragasztómaradványok eltávolítása",
        "Ablakok, keretek és üvegfelületek tisztítása",
        "Festék- és vakolatfröccsenések eltávolítása padlóról és falakról",
        "Átadás előtti végső takarítás",
        "Munka folyamatban lévő építkezéseken is",
      ],
    },
  },
  {
    key: "fenster",
    image: "/fensterreinigung.jpg",
    de: {
      title: "Fensterreinigung",
      short: "Streifenfreie, glänzende Fenster – innen und außen, in jedem Stockwerk.",
      details: [
        "Streifenfreie Reinigung mit professionellen Mitteln",
        "Reinigung von Rahmen, Simsen und Rollläden",
        "Innen- und Außenreinigung aller Glasflächen",
        "Geeignet für Privathaushalte und Gewerbe",
        "Auch für schwer erreichbare Stellen und obere Stockwerke",
      ],
    },
    hu: {
      title: "Ablaktisztítás",
      short: "Csíkmentes, csillogó ablakok – belülről és kívülről, minden emeleten.",
      details: [
        "Csíkmentes tisztítás professzionális eszközökkel",
        "Keretek, párkányok és redőnyök tisztítása",
        "Minden üvegfelület belső és külső tisztítása",
        "Magán- és kereskedelmi ingatlanokhoz is",
        "Nehezen elérhető helyek és felső emeletek is",
      ],
    },
  },
  {
    key: "buero",
    image: "/buroreinigung.jpg",
    de: {
      title: "Büroreinigung",
      short: "Saubere, hygienische Arbeitsplätze – täglich, wöchentlich oder nach Bedarf.",
      details: [
        "Reinigung von Schreibtischen, Stühlen und Böden",
        "Sanitärreinigung und Desinfektion",
        "Küchenreinigung und Müllentsorgung",
        "Flexible Reinigungszeiten (morgens, abends, wochenends)",
        "Diskreter Reinigungsservice auch während der Arbeitszeit",
      ],
    },
    hu: {
      title: "Irodatakarítás",
      short: "Tiszta, higiénikus munkaterületek – naponta, hetente vagy igény szerint.",
      details: [
        "Íróasztalok, székek és padlók tisztítása",
        "Szaniterek tisztítása és fertőtlenítése",
        "Konyha takarítása és hulladékeltávolítás",
        "Rugalmas takarítási időpontok (reggel, este, hétvégén)",
        "Diszkrét takarítási szolgáltatás munkaidő alatt is",
      ],
    },
  },
  {
    key: "haushalt",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80",
    de: {
      title: "Haushaltsreinigung",
      short: "Ihr Zuhause in besten Händen – gründlich, zuverlässig und diskret.",
      details: [
        "Komplettreinigung aller Wohnräume",
        "Küchen- und Badezimmerreinigung intensiv",
        "Staubsaugen, Wischen und Polieren aller Oberflächen",
        "Regelmäßige oder einmalige Reinigung nach Absprache",
        "Vertrauenswürdige Mitarbeiter mit Referenzen",
      ],
    },
    hu: {
      title: "Háztartási takarítás",
      short: "Otthona a legjobb kezekben – alapos, megbízható és diszkrét.",
      details: [
        "Az összes helyiség teljes körű takarítása",
        "Konyha és fürdőszoba intenzív tisztítása",
        "Porszívózás, felmosás és minden felület polírozása",
        "Rendszeres vagy egyszeri takarítás megállapodás szerint",
        "Megbízható, referenciákkal rendelkező munkatársak",
      ],
    },
  },
  {
    key: "unterhalts",
    image: "/unterhaltsreinigung.jpg",
    de: {
      title: "Unterhaltsreinigung",
      short: "Regelmäßige Reinigung für dauerhaft saubere Gebäude und Anlagen.",
      details: [
        "Geplante Reinigungsintervalle (täglich, wöchentlich, monatlich)",
        "Reinigung von Treppenhäusern, Fluren und Gemeinschaftsflächen",
        "Pflege von Hartböden, Teppichen und Außenanlagen",
        "Dokumentation und Qualitätskontrolle",
        "Feste Ansprechpartner für Ihre Liegenschaft",
      ],
    },
    hu: {
      title: "Karbantartó takarítás",
      short: "Rendszeres takarítás tartósan tiszta épületekért és létesítményekért.",
      details: [
        "Tervezett takarítási intervallumok (napi, heti, havi)",
        "Lépcsőházak, folyosók és közös területek takarítása",
        "Keménypadlók, szőnyegek és külső területek gondozása",
        "Dokumentáció és minőségellenőrzés",
        "Rögzített kapcsolattartók az Ön ingatlanához",
      ],
    },
  },
  {
    key: "grund",
    image: "/grundreinigung.jpg",
    de: {
      title: "Grundreinigung",
      short: "Tiefenreinigung für stark verschmutzte Bereiche – mit Profimaschinen.",
      details: [
        "Maschinelle Tiefenreinigung von Böden aller Art",
        "Entfernung hartnäckiger Verschmutzungen und Ablagerungen",
        "Hochdruckreinigung von Außenflächen, Höfen und Garagen",
        "Reinigung nach Wasserschäden oder langer Nutzung",
        "Professionelle Geräte für beste Ergebnisse",
      ],
    },
    hu: {
      title: "Nagytakarítás",
      short: "Mélytisztítás erősen szennyezett területekhez – professzionális gépekkel.",
      details: [
        "Gépi mélytisztítás minden típusú padlóhoz",
        "Makacs szennyeződések és lerakódások eltávolítása",
        "Külső felületek, udvarok és garázsok nagynyomású mosása",
        "Vízkarrenás vagy hosszú használat utáni tisztítás",
        "Professzionális gépek a legjobb eredményekért",
      ],
    },
  },
];

export default function Services() {
  const { t, lang } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);

  const service = selected !== null ? serviceData[selected] : null;
  const serviceDetail = service ? (lang === "de" ? service.de : service.hu) : null;

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-teal">
          {t.services.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          {t.services.subtitle}
        </p>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceData.map((svc, i) => {
            const info = lang === "de" ? svc.de : svc.hu;
            return (
              <button
                key={svc.key}
                onClick={() => setSelected(i)}
                className="group text-left rounded-2xl overflow-hidden border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={info.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-display font-bold text-lg drop-shadow">
                    {info.title}
                  </span>
                </div>
                {/* Text */}
                <div className="p-5 bg-white">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {info.short}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                    {lang === "de" ? "Mehr erfahren" : "Részletek"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-3">{t.services.cta}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {t.services.ctaLink}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Modal detail overlay */}
      {selected !== null && service && serviceDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative h-56">
              <img
                src={service.image}
                alt={serviceDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-1.5 hover:bg-white/30 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="absolute bottom-4 left-5 text-white font-display font-bold text-2xl drop-shadow-lg">
                {serviceDetail.title}
              </h3>
            </div>

            {/* Modal content */}
            <div className="p-6">
              <p className="text-muted-foreground mb-5 leading-relaxed">{serviceDetail.short}</p>

              <h4 className="font-display font-bold text-sm text-primary tracking-widest uppercase mb-3">
                {lang === "de" ? "Leistungsumfang" : "Szolgáltatások"}
              </h4>
              <ul className="space-y-2.5 mb-6">
                {serviceDetail.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  {lang === "de" ? "Angebot anfragen" : "Ajánlatot kérek"}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:017665193906"
                  className="flex items-center gap-2 border border-border px-4 py-3 rounded-xl text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {lang === "de" ? "Anrufen" : "Hívás"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
