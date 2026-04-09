const problems = [
  {
    icon: "⚡",
    title: "Vous voulez perdre du poids",
    description:
      "Vous avez essayé des régimes, des apps, des programmes en ligne… sans résultats durables. Il vous faut un plan structuré et un vrai suivi.",
    result: "Perte de poids durable",
  },
  {
    icon: "💪",
    title: "Vous manquez d'énergie",
    description:
      "La sédentarité, le stress et les mauvaises habitudes ont pris le dessus. Vous voulez retrouver une vitalité quotidienne et vous sentir bien.",
    result: "Forme retrouvée",
  },
  {
    icon: "🎯",
    title: "Vous voulez reprendre confiance",
    description:
      "Regarder son reflet dans le miroir sans se sentir bien, c'est épuisant. Vous méritez d'être fier·e de votre corps et de votre progression.",
    result: "Confiance en soi",
  },
];

export default function Problems() {
  return (
    <section id="resultats" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Vous vous reconnaissez ?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Ce que mes clients
            <br />
            <span className="text-accent">ressentaient avant</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Ces obstacles sont courants. La différence, c'est d'avoir
            quelqu'un pour vous guider à chaque étape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group relative bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Result pill */}
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.result}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
