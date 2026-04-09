import Image from "next/image";

const credentials = [
  { label: "Diplôme BPJEPS Fitness", icon: "🎓" },
  { label: "Certifié nutrition sportive", icon: "🥗" },
  { label: "8 ans d'expérience à Lyon", icon: "📅" },
  { label: "+150 clients accompagnés", icon: "👥" },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative h-[540px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Alex Martin coach sportif Lyon"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="text-3xl font-black text-accent">150+</div>
              <div className="text-sm text-white/55 mt-1">vies transformées à Lyon</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent/25 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Ton coach
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
              Je suis Alex.
              <br />
              <span className="text-accent">J'ai vécu ce que tu vis.</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed mb-8">
              <p>
                À 22 ans, j'avais pris 18 kg et je ne reconnaissais plus
                la personne dans le miroir. J'ai essayé tout ce qu'on trouve
                sur internet — régimes draconiens, programmes YouTube, challenges
                30 jours. Rien n'a tenu.
              </p>
              <p>
                C'est en me formant sérieusement que j'ai compris pourquoi :
                <strong className="text-white"> il n'existe pas de méthode universelle</strong>.
                Il existe ta méthode à toi. Celle qui prend en compte ta vie,
                ton corps, tes contraintes.
              </p>
              <p>
                Depuis 8 ans, j'aide des hommes et femmes entre 25 et 45 ans à
                Lyon à construire cette méthode. Pas une formule magique. Un plan
                solide, un vrai suivi, et quelqu'un qui croit en toi même
                quand tu n'y crois plus.
              </p>
              <p className="text-white font-semibold">
                Mon seul objectif : que tu n'aies plus besoin de moi dans 6 mois.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 hover:border-accent/20 transition-colors"
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-sm text-white/65">{c.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#reserver"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-black px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              On se parle — séance gratuite →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
