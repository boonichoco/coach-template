const results = [
  { value: "−6 à −15 kg", label: "perdus en moyenne", sub: "selon le programme choisi" },
  { value: "8 sem.", label: "pour les premiers résultats visibles", sub: "énergie, sommeil, silhouette" },
  { value: "94%", label: "des clients atteignent leur objectif", sub: "en suivant le programme complet" },
  { value: "0€", label: "pour la première séance", sub: "découverte sans engagement" },
];

const steps = [
  {
    num: "01",
    title: "Séance découverte gratuite",
    desc: "On fait le point sur tes objectifs, tes blocages et ton mode de vie. Je t'explique exactement comment je vais t'aider.",
  },
  {
    num: "02",
    title: "Ton programme sur mesure",
    desc: "Je conçois un plan d'entraînement et nutritionnel 100% adapté à toi — pas un programme générique copié-collé.",
  },
  {
    num: "03",
    title: "Tu t'entraînes, je t'encadre",
    desc: "On travaille ensemble à Lyon ou à distance. Je suis là à chaque étape pour ajuster, motiver et te pousser.",
  },
  {
    num: "04",
    title: "Tu vois les résultats",
    desc: "En 8 semaines, tu sens la différence. En 90 jours, tout le monde te le dit. Et cette fois, ça dure.",
  },
];

export default function Results() {
  return (
    <section id="resultats" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {results.map((r) => (
            <div
              key={r.value}
              className="bg-zinc-900 border border-white/5 rounded-2xl p-6 text-center hover:border-accent/20 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-accent mb-1">{r.value}</div>
              <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
              <div className="text-xs text-white/35">{r.sub}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Comment ça marche
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            4 étapes pour
            <span className="text-accent"> transformer ton corps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.num} className="relative text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white font-black text-lg mb-5 relative z-10">
                {step.num}
              </div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#reserver"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-black px-9 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
          >
            Commencer — séance gratuite →
          </a>
          <p className="text-white/30 text-sm mt-3">Sans carte bancaire · Annulable à tout moment</p>
        </div>
      </div>
    </section>
  );
}
