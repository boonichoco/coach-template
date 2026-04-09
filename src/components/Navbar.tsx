"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Résultats", href: "#resultats" },
    { label: "Offres", href: "#offres" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "À propos", href: "#apropos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5"
      style={{
        backgroundColor:
          scrolled
            ? "rgba(0,0,0,0.97)"
            : menuOpen
            ? "rgba(0,0,0,0.97)"
            : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        paddingTop: scrolled ? "12px" : "20px",
        paddingBottom: scrolled ? "12px" : "20px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight">
          <span className="text-white">Alex</span>
          <span className="text-accent"> Martin</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserver"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-black px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Séance gratuite →
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/8 px-4 py-6 flex flex-col gap-4 animate-fade-up">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserver"
            onClick={() => setMenuOpen(false)}
            className="bg-accent hover:bg-accent-dark text-white font-black px-5 py-3.5 rounded-full text-center transition-all duration-200"
          >
            Réserver ma séance gratuite →
          </a>
        </div>
      )}
    </header>
  );
}
