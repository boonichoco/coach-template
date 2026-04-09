export default function CTA() {
  return (
    <section id="reserver" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Passez à l'action
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Prêt·e à changer ?
            <br />
            <span className="text-accent">Réservez maintenant.</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            La première séance est <strong className="text-white">offerte et sans engagement</strong>.
            On fait le point ensemble sur vos objectifs et je vous propose un
            plan adapté.
          </p>
        </div>

        {/* Urgency strip */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0" />
            <span>
              Seulement <strong>3 créneaux disponibles</strong> cette semaine
            </span>
          </div>
        </div>

        {/* Calendly embed placeholder */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden mb-10">
          {/* Placeholder header */}
          <div className="bg-accent/10 border-b border-white/5 px-6 py-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-white/30 text-xs ml-2">calendly.com/thomasfaucher9/seance-decouverte-gratuite</span>
          </div>

          <iframe
            src="https://calendly.com/thomasfaucher9/seance-decouverte-gratuite"
            className="w-full h-[700px]"
            title="Réserver une séance avec Alex Martin"
          />
        </div>

        {/* Trust signals */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "🔒", text: "Sans engagement" },
            { icon: "✅", text: "1ère séance offerte" },
            { icon: "📞", text: "Réponse en 24h" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-3 bg-zinc-900 border border-white/5 rounded-xl py-4 text-sm text-white/60"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
