import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80"
          alt="Coach sportif en action"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Coach Sportif à Lyon
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-up">
            Transformez
            <br />
            <span className="text-accent">votre corps.</span>
            <br />
            Changez votre vie.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg animate-fade-up animate-delay-200">
            Un accompagnement 100% personnalisé pour perdre du poids, retrouver
            la forme et reprendre confiance en vous — avec des résultats
            visibles en 90 jours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <a
              href="#reserver"
              className="group bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 text-center"
            >
              Réserver une séance gratuite
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </a>
            <a
              href="#offres"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5 text-center"
            >
              Voir les offres
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10 animate-fade-up animate-delay-400">
            <Stat value="150+" label="Clients transformés" />
            <div className="w-px h-10 bg-white/20" />
            <Stat value="4.9/5" label="Note moyenne" />
            <div className="w-px h-10 bg-white/20" />
            <Stat value="8 ans" label="D'expérience" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-white/60 tracking-widest uppercase">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-black text-accent">{value}</div>
      <div className="text-xs text-white/50 mt-0.5">{label}</div>
    </div>
  );
}
