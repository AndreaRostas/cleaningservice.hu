import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <h1 className="font-display text-6xl font-bold text-gradient-teal mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Seite nicht gefunden</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity glow-teal text-sm"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
