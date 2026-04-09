export default function CTA() {
  return (
    <section id="reserver" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Passe à l'action
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Tu attends quoi
            <br />
            <span className="text-accent">pour commencer ?</span>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-base leading-relaxed">
            La séance découverte est{" "}
            <strong className="text-white">100% gratuite et sans engagement</strong>.
            En 30 minutes on fait le point sur tes objectifs et tu repars
            avec un plan d'action — qu'on travaille ensemble ou non.
          </p>
        </div>

        {/* Scarcity */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/25 text-accent px-5 py-3 rounded-full">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-sm font-bold">
              Plus que <strong>3 créneaux disponibles</strong> cette semaine à Lyon
            </span>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="bg-zinc-900 border border-white/8 rounded-2xl overflow-hidden mb-8">
          <div className="bg-zinc-800 border-b border-white/5 px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-white/25 text-xs ml-2 font-mono">
              calendly.com/thomasfaucher9/seance-decouverte-gratuite
            </span>
          </div>
          <iframe
            src="https://calendly.com/thomasfaucher9/seance-decouverte-gratuite"
            className="w-full h-[700px]"
            title="Réserver une séance gratuite avec Alex Martin"
          />
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🔒", text: "Sans engagement" },
            { icon: "✅", text: "1ère séance offerte" },
            { icon: "📞", text: "Réponse sous 24h" },
            { icon: "❌", text: "Annulation libre" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-white/5 rounded-xl py-3.5 text-xs text-white/50"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
