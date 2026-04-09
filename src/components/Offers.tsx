const offers = [
  {
    name: "Starter",
    tagline: "Tu veux te remettre en mouvement",
    price: "149€",
    period: "/ mois",
    highlight: false,
    spotsLeft: null,
    features: [
      "1 séance de coaching / semaine à Lyon",
      "Programme d'entraînement fait pour toi",
      "Conseils nutritionnels de base",
      "Suivi par message (réponse sous 48h)",
      "Accès à ton espace client en ligne",
    ],
    cta: "Réserver une séance gratuite",
  },
  {
    name: "Transformation",
    tagline: "Tu veux des résultats rapides et durables",
    price: "249€",
    period: "/ mois",
    highlight: true,
    spotsLeft: 2,
    features: [
      "3 séances de coaching / semaine",
      "Programme d'entraînement sur mesure",
      "Plan nutritionnel complet + recettes",
      "Suivi quotidien par message",
      "Bilan photo mensuel de progression",
      "Accès prioritaire aux créneaux",
      "Coaching mental & gestion des blocages",
    ],
    cta: "Réserver une séance gratuite",
  },
  {
    name: "Elite",
    tagline: "Tu veux aller le plus loin possible",
    price: "399€",
    period: "/ mois",
    highlight: false,
    spotsLeft: null,
    features: [
      "Séances illimitées à la demande",
      "Programme ultra-personnalisé",
      "Suivi nutritionnel complet + recettes",
      "Disponible 7j/7 pour toi",
      "Coaching mental & performance",
      "Accès à tous les contenus exclusifs",
    ],
    cta: "Réserver une séance gratuite",
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Mes formules
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Choisis le programme
            <br />
            <span className="text-accent">qui correspond à ton objectif</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Chaque formule commence par une séance gratuite pour qu'on valide
            ensemble ce qui est fait pour toi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                offer.highlight
                  ? "bg-accent border-accent shadow-2xl shadow-accent/25 scale-[1.03]"
                  : "bg-zinc-900 border-white/5 hover:border-white/15"
              }`}
            >
              {/* Popular badge */}
              {offer.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-black px-4 py-1.5 rounded-full tracking-wide uppercase whitespace-nowrap">
                  ⭐ Le plus populaire
                </div>
              )}

              {/* Spots left */}
              {offer.spotsLeft && (
                <div className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Plus que {offer.spotsLeft} place{offer.spotsLeft > 1 ? "s" : ""} disponible{offer.spotsLeft > 1 ? "s" : ""}
                </div>
              )}

              {/* Plan info */}
              <div className="mb-5">
                <h3 className="text-xl font-black mb-1 text-white">{offer.name}</h3>
                <p className={`text-sm ${offer.highlight ? "text-white/80" : "text-white/40"}`}>
                  {offer.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-7">
                <span className="text-5xl font-black text-white">{offer.price}</span>
                <span className={`text-sm ml-1 ${offer.highlight ? "text-white/70" : "text-white/40"}`}>
                  {offer.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {offer.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${offer.highlight ? "text-white" : "text-accent"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${offer.highlight ? "text-white/90" : "text-white/60"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#reserver"
                className={`block text-center font-black py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                  offer.highlight
                    ? "bg-white text-accent hover:bg-white/90 shadow-lg"
                    : "bg-accent text-white hover:bg-accent-dark"
                }`}
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/35">
          <span>✓ Sans engagement</span>
          <span className="hidden sm:block">·</span>
          <span>✓ Première séance <strong className="text-accent">offerte</strong></span>
          <span className="hidden sm:block">·</span>
          <span>✓ Annulation possible à tout moment</span>
        </div>
      </div>
    </section>
  );
}
