"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white border border-border shadow-xl rounded-xl p-4">
      <p className="text-sm text-muted-foreground mb-3">
        Wir verwenden Cookies für eine bessere Nutzererfahrung.
      </p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={reject}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border hover:border-primary/30"
        >
          Ablehnen
        </button>
        <button
          onClick={accept}
          className="text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
