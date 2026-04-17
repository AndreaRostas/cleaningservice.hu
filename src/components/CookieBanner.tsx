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
  );
}