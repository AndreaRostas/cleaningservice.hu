import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-teal">
          {t.contact.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">{t.contact.subtitle}</p>

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
                  <p className="text-foreground font-medium">5463 Nagyrev, Ungarn</p>
                  <p className="text-foreground font-medium">Allendorf (Lumda), Deutschland</p>
                </div>
              </div>
            </div> {/* ← das fehlte! */}

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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.name} *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.phoneLabel} *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.emailLabel} *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1.5">{t.contact.message}</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity glow-teal"
              >
                <Send className="h-4 w-4" />
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}