import Image from "next/image";

const credentials = [
  { label: "Diplôme BPJEPS", icon: "🎓" },
  { label: "Certifié nutrition sportive", icon: "🥗" },
  { label: "8 ans d'expérience", icon: "📅" },
  { label: "+150 clients accompagnés", icon: "👥" },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Alex Martin coach sportif"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <div className="text-3xl font-black text-accent">150+</div>
              <div className="text-sm text-white/60 mt-1">clients transformés à Lyon</div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
              Je suis Alex Martin,
              <br />
              <span className="text-accent">votre coach à Lyon</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed mb-8">
              <p>
                Passionné de sport depuis l'adolescence, j'ai traversé moi-même
                des phases de prise de poids et de manque de confiance. Cette
                expérience personnelle m'a conduit à me former sérieusement pour
                aider les autres à traverser les mêmes obstacles.
              </p>
              <p>
                Depuis 8 ans, j'accompagne des hommes et des femmes entre 25 et
                45 ans à Lyon dans leur transformation physique. Ma méthode
                combine entraînement intelligent, rééquilibrage alimentaire et
                coaching mental — parce que le corps et l'esprit avancent
                ensemble.
              </p>
              <p className="text-white/80 font-medium">
                Mon engagement : vous donner les outils, la méthode et le soutien
                pour ne plus jamais avoir besoin d'un coach.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-zinc-900 border border-white/5 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-sm text-white/70">{c.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#reserver"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              Discutons de votre objectif
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
