const problems = [
  {
    icon: "😩",
    before: "Tu te regardes dans le miroir et tu ne te reconnais plus.",
    after: "Tu te lèves le matin avec de l'énergie et tu es fier·e de ce que tu vois.",
  },
  {
    icon: "🔄",
    before: "Tu recommences un régime tous les 3 mois… et tu reprends le double.",
    after: "Tu adoptes une hygiène de vie qui tient sur le long terme, sans frustration.",
  },
  {
    icon: "😶",
    before: "Tu évites les photos, les sorties, les vêtements qui te plaisent.",
    after: "Tu reprends confiance, tu t'habilles comme tu veux et tu profites de la vie.",
  },
];

export default function Problems() {
  return (
    <section id="problemes" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Tu te reconnais ?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Ce que tu vis en ce moment
            <br />
            <span className="text-accent">— et ce que tu veux vraiment</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-base">
            La plupart de mes clients avaient exactement ces blocages avant
            de me contacter.
          </p>
        </div>

        {/* Before / After rows */}
        <div className="space-y-4">
          {problems.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5"
            >
              {/* Before */}
              <div className="bg-zinc-900 px-8 py-7 flex items-start gap-4">
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-2">
                    Avant
                  </span>
                  <p className="text-white/60 leading-relaxed">{item.before}</p>
                </div>
              </div>

              {/* After */}
              <div className="bg-accent/8 border-l border-accent/20 px-8 py-7 flex items-start gap-4">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="text-xs font-bold text-accent/70 uppercase tracking-widest block mb-2">
                    Avec Alex
                  </span>
                  <p className="text-white font-medium leading-relaxed">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="text-center mt-12">
          <a
            href="#reserver"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            Je veux changer ça — séance gratuite →
          </a>
        </div>
      </div>
    </section>
  );
}
