import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80"
          alt="Coach sportif en action"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20">
        <div className="max-w-2xl">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-7 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0" />
            Plus que 3 places disponibles ce mois-ci à Lyon
          </div>

          {/* H1 — promesse résultat */}
          <h1 className="text-5xl md:text-[4.5rem] font-black leading-[1.02] tracking-tight mb-5 animate-fade-up">
            Perds du poids.
            <br />
            <span className="text-accent">Reprends confiance.</span>
            <br />
            En 90 jours.
          </h1>

          {/* Emotional subtitle */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-3 max-w-lg animate-fade-up animate-delay-100">
            Tu en as marre des régimes qui ne durent pas et des programmes que
            tu abandonnes au bout d'une semaine ?
          </p>
          <p className="text-lg md:text-xl text-white font-semibold leading-relaxed mb-9 max-w-lg animate-fade-up animate-delay-200">
            Avec Alex, tu suis un plan fait pour <em>toi</em> — et tu vois la
            différence en quelques semaines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <a
              href="#reserver"
              className="group bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/40 text-center"
            >
              Réserver ma séance gratuite
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="#resultats"
              className="border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5 text-center"
            >
              Voir les résultats clients
            </a>
          </div>

          {/* Micro-preuve sous le CTA */}
          <p className="text-white/35 text-sm mt-4 animate-fade-up animate-delay-400">
            Séance 100% gratuite · Sans engagement · Réponse sous 24h
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-12 pt-10 border-t border-white/10 animate-fade-up animate-delay-500">
            <Stat value="150+" label="vies transformées" />
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <Stat value="−12 kg" label="résultat moyen en 4 mois" />
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <Stat value="4.9/5" label="satisfaction client" />
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-black text-accent">{value}</div>
      <div className="text-xs text-white/45 mt-0.5">{label}</div>
    </div>
  );
}
