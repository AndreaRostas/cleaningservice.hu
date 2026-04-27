import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, CheckCircle, Send, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          _subject: `Neue Anfrage von ${form.name} – ZB Cleaningservice`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const responseTimeText = lang === "de"
    ? "⚡ Wir antworten innerhalb von 2 Stunden"
    : "⚡ 2 órán belül válaszolunk";

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-teal">
          {t.contact.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4">{t.contact.subtitle}</p>

        {/* Response time badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
            <Clock className="h-4 w-4" />
            {responseTimeText}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6">{t.contact.reachUs}</h3>
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.phone}</p>
                  <a href="tel:017665193906" className="text-foreground font-medium hover:text-primary transition-colors">
                    +49 176 6519 3906<br />+36 20 538 5008
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#25d366]/10 rounded-full flex items-center justify-center text-[#25d366]">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/4917665193906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-[#25d366] transition-colors"
                  >
                    {t.contact.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0084ff]/10 rounded-full flex items-center justify-center text-[#0084ff]">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Messenger</p>
                  <a
                    href="https://m.me/zbcleaningservice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-[#0084ff] transition-colors"
                  >
                    {t.contact.messenger}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <a href="mailto:info@zbcleaningservice.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    info@zbcleaningservice.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                  <p className="text-foreground font-medium">Wetzlar · Gießen · Marburg</p>
                  <p className="text-foreground font-medium">Lahn-Dill-Kreis · Ungarn landesweit</p>
                </div>
              </div>
            </div>

            <h4 className="font-display font-bold mb-3">{t.contact.whyUs}</h4>
            <ul className="space-y-2">
              {[t.contact.why1, t.contact.why2, t.contact.why3, t.contact.why4].map((w) => (
                <li key={w} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-secondary/30 border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-xl mb-6">{t.contact.formTitle}</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <p className="font-display font-bold text-lg">
                  {lang === "de" ? "Nachricht gesendet!" : "Üzenet elküldve!"}
                </p>
                <p className="text-muted-foreground text-sm">
                  {lang === "de"
                    ? "Wir melden uns innerhalb von 2 Stunden bei Ihnen."
                    : "2 órán belül felvesszük Önnel a kapcsolatot."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary text-sm underline underline-offset-2 hover:opacity-80"
                >
                  {lang === "de" ? "Neue Anfrage senden" : "Új üzenet küldése"}
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.name} *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.phoneLabel} *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.emailLabel} *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.message}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    {lang === "de"
                      ? "Fehler beim Senden. Bitte rufen Sie uns direkt an."
                      : "Hiba a küldéskor. Kérjük, hívjon minket közvetlenül."}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity glow-teal disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending"
                    ? (lang === "de" ? "Wird gesendet…" : "Küldés…")
                    : t.contact.send}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  {lang === "de"
                    ? "Kostenloses Angebot · Keine Verpflichtung · Antwort in 2h"
                    : "Ingyenes ajánlat · Kötelezettség nélkül · 2 órán belül"}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
