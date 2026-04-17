import { useI18n } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t bg-white text-gray-700 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-black" />
          <span className="font-bold text-black">
            ZB Cleaningservice
          </span>
        </div>

        <div className="flex gap-4">
          <a href="/impressum" className="hover:text-black transition">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-black transition">
            Datenschutz
          </a>
        </div>

        <p className="text-gray-500">
          © {new Date().getFullYear()} ZB Cleaningservice. {t.footer.rights}
        </p>

      </div>
    </footer>
  );
}