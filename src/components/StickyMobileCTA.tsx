"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-black/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-semibold truncate">Alex Martin · Coach Lyon</p>
          <p className="text-white/40 text-xs">3 créneaux restants cette semaine</p>
        </div>
        <a
          href="#reserver"
          className="shrink-0 bg-accent hover:bg-accent-dark text-white font-black text-sm px-5 py-3 rounded-full transition-all duration-200 active:scale-95"
        >
          Séance gratuite →
        </a>
      </div>
    </div>
  );
}
