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
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20">
        <div className="max-w-xl">

          {/* Social proof immédiate — étoiles */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm font-medium">
              <strong className="text-white">4.9/5</strong> · 150+ clients transformés à Lyon
            </span>
          </div>

          {/* H1 — promesse chiffrée */}
          <h1 className="text-5xl md:text-[4.2rem] font-black leading-[1.04] tracking-tight mb-5 animate-fade-up">
            Perds jusqu'à{" "}
            <span className="text-accent">5 kg en 90 jours</span>
            <br />
            sans régime extrême.
          </h1>

          {/* Sous-titre */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-2 animate-fade-up animate-delay-100">
            Tu as essayé des régimes, des apps, des challenges en ligne.
            Rien n'a tenu.
          </p>
          <p className="text-base md:text-lg text-white font-semibold leading-relaxed mb-8 animate-fade-up animate-delay-200">
            Avec Alex, tu suis un plan fait <em>pour toi</em> — coaching
            personnalisé à Lyon avec suivi complet.
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-300">
            <a
              href="#reserver"
              className="group bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 text-center"
            >
              Réserver ma séance gratuite
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="#temoignages"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5 text-center"
            >
              Voir les résultats
            </a>
          </div>

          {/* Reassurance sous CTA */}
          <p className="text-white/30 text-sm mt-3 animate-fade-up animate-delay-400">
            100% gratuit · Sans engagement · Réponse sous 24h
          </p>

          {/* Urgence */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl animate-fade-up animate-delay-500">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0" />
            <span className="text-white/60 text-sm">
              ⚠️ <strong className="text-white">5 places disponibles</strong> ce mois-ci à Lyon
            </span>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-10 border-t border-white/10 animate-fade-up animate-delay-500">
            <Stat value="−5 à −15 kg" label="résultat moyen" />
            <div className="w-px h-8 bg-white/15 hidden sm:block" />
            <Stat value="90 jours" label="pour des résultats durables" />
            <div className="w-px h-8 bg-white/15 hidden sm:block" />
            <Stat value="8 ans" label="d'expérience" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-black text-accent">{value}</div>
      <div className="text-xs text-white/40 mt-0.5">{label}</div>
    </div>
  );
}
