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
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white border shadow-xl rounded-xl p-4">
      
      <p className="text-sm text-gray-700 mb-3">
        Wir verwenden Cookies für bessere Nutzererfahrung.
      </p>

      <div className="flex gap-2 justify-end">
        <button
          onClick={reject}
          className="text-sm text-gray-600 hover:text-black"
        >
          Ablehnen
        </button>

        <button
          onClick={accept}
          className="text-sm bg-black text-white px-3 py-1 rounded-md"
        >
          Akzeptieren
        </button>
      </div>

    </div>
  );
}