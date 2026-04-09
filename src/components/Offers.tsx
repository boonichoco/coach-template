const offers = [
  {
    name: "Starter",
    tagline: "Pour commencer sur de bonnes bases",
    price: "149€",
    period: "/ mois",
    highlight: false,
    features: [
      "1 séance de coaching / semaine",
      "Programme d'entraînement personnalisé",
      "Suivi par message (48h réponse)",
      "Accès à l'espace client en ligne",
    ],
    cta: "Commencer maintenant",
  },
  {
    name: "Transformation",
    tagline: "Le plus populaire — résultats garantis",
    price: "249€",
    period: "/ mois",
    highlight: true,
    features: [
      "3 séances de coaching / semaine",
      "Programme d'entraînement sur mesure",
      "Suivi nutritionnel complet",
      "Suivi quotidien par message",
      "Bilan mensuel de progression",
      "Accès prioritaire aux créneaux",
    ],
    cta: "Réserver une séance d'essai",
  },
  {
    name: "Elite",
    tagline: "Pour aller encore plus loin",
    price: "399€",
    period: "/ mois",
    highlight: false,
    features: [
      "Séances illimitées",
      "Programme ultra-personnalisé",
      "Suivi nutritionnel & recettes",
      "Disponibilité 7j/7 par message",
      "Coaching mental & motivation",
      "Accès à tous les contenus exclusifs",
    ],
    cta: "Nous contacter",
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Mes formules
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Un accompagnement
            <br />
            <span className="text-accent">adapté à votre objectif</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Chaque programme est pensé pour des résultats concrets, pas juste
            pour remplir un calendrier.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                offer.highlight
                  ? "bg-accent border-accent shadow-2xl shadow-accent/20 scale-105"
                  : "bg-zinc-900 border-white/5 hover:border-white/15"
              }`}
            >
              {/* Popular badge */}
              {offer.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-black px-4 py-1.5 rounded-full tracking-wide uppercase">
                  Le plus choisi
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-black mb-1 ${
                    offer.highlight ? "text-white" : "text-white"
                  }`}
                >
                  {offer.name}
                </h3>
                <p
                  className={`text-sm ${
                    offer.highlight ? "text-white/80" : "text-white/40"
                  }`}
                >
                  {offer.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-5xl font-black ${
                    offer.highlight ? "text-white" : "text-white"
                  }`}
                >
                  {offer.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    offer.highlight ? "text-white/70" : "text-white/40"
                  }`}
                >
                  {offer.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {offer.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        offer.highlight ? "text-white" : "text-accent"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        offer.highlight ? "text-white/90" : "text-white/60"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#reserver"
                className={`block text-center font-bold py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                  offer.highlight
                    ? "bg-white text-accent hover:bg-white/90"
                    : "border border-accent text-accent hover:bg-accent hover:text-white"
                }`}
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Pas de engagement — Annulation possible à tout moment ·{" "}
            <span className="text-accent">Première séance offerte</span>
          </p>
        </div>
      </div>
    </section>
  );
}
