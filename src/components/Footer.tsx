import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-secondary/20 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-display font-bold text-foreground">ZB Cleaningservice</span>
        </div>

        <div className="flex gap-6">
          <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
            Datenschutz
          </Link>
        </div>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} ZB Cleaningservice. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
