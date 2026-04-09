const testimonials = [
  {
    name: "Sophie L.",
    age: 32,
    city: "Lyon 6e",
    job: "Infirmière",
    avatar: "SL",
    rating: 5,
    result: "−12 kg en 4 mois",
    headline: "J'avais honte de me voir en photo. Plus maintenant.",
    text: "J'avais essayé Weight Watchers, des apps, des challenges en ligne… rien ne tenait. Avec Alex, la différence c'est qu'il comprend ta vie réelle — tes horaires, ton stress, tes envies. En 4 mois j'ai perdu 12 kg et je suis redescendue à ma taille d'avant grossesse. Mais surtout, je ne me cache plus.",
  },
  {
    name: "Thomas R.",
    age: 38,
    city: "Lyon 3e",
    job: "Directeur commercial",
    avatar: "TR",
    rating: 5,
    result: "+8 kg de muscle",
    headline: "En 6 mois j'ai plus changé qu'en 5 ans de salle seul.",
    text: "Je faisais de la salle depuis des années sans vraiment progresser. Alex a tout restructuré — mon entraînement, mon alimentation et ma récupération. En 6 mois j'ai pris 8 kg de muscle, mes collègues m'ont demandé si j'avais pris un stéroïde. La réponse c'est juste : une méthode qui marche.",
  },
  {
    name: "Camille D.",
    age: 27,
    city: "Villeurbanne",
    job: "Graphiste",
    avatar: "CD",
    rating: 5,
    result: "Marathon en 4h12",
    headline: "Il m'a fait croire en moi quand je n'y croyais plus.",
    text: "Mon objectif semblait fou : courir un marathon sans jamais avoir fait plus de 10 km. Alex m'a construit un plan sur 5 mois, semaine par semaine. Il a géré mon alimentation, mes douleurs, mes doutes. Le jour J j'ai pleuré en franchissant la ligne. Ce n'est pas juste du sport, c'est une transformation de qui tu es.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Ils ont fait le premier pas.
            <br />
            <span className="text-accent">Leur vie a changé.</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            150+ clients accompagnés à Lyon. Voici leurs mots — pas les miens.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-7 flex flex-col gap-4 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Stars + result badge */}
              <div className="flex items-center justify-between">
                <Stars count={t.rating} />
                <span className="bg-accent/15 text-accent text-xs font-black px-3 py-1 rounded-full border border-accent/20">
                  {t.result}
                </span>
              </div>

              {/* Headline */}
              <p className="text-white font-bold text-base leading-snug">
                &ldquo;{t.headline}&rdquo;
              </p>

              {/* Quote */}
              <p className="text-white/55 text-sm leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-black shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.job} · {t.age} ans · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust + CTA */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/35">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Témoignages réels
            </span>
            <span className="hidden sm:block">·</span>
            <span>Note moyenne <strong className="text-accent">4.9/5</strong></span>
            <span className="hidden sm:block">·</span>
            <span>150+ clients accompagnés</span>
          </div>
          <a
            href="#reserver"
            className="bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            Je veux le même résultat — séance gratuite →
          </a>
        </div>
      </div>
    </section>
  );
}
