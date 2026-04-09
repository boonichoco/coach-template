const testimonials = [
  {
    name: "Sophie L.",
    age: 32,
    city: "Lyon 6e",
    avatar: "SL",
    rating: 5,
    result: "-12 kg en 4 mois",
    text: "Je n'y croyais plus après avoir essayé plein de méthodes. Alex a tout changé. Son approche est bienveillante mais exigeante — exactement ce dont j'avais besoin. J'ai perdu 12 kg et je n'ai jamais me senti aussi bien dans ma peau.",
  },
  {
    name: "Thomas R.",
    age: 38,
    city: "Lyon 3e",
    avatar: "TR",
    rating: 5,
    result: "+8 kg de muscle",
    text: "En tant que cadre avec un emploi du temps chargé, j'avais besoin d'un programme efficace et flexible. Alex s'est adapté à mes contraintes. Résultat : j'ai pris 8 kg de muscle en 6 mois et mon énergie au bureau a explosé.",
  },
  {
    name: "Camille D.",
    age: 27,
    city: "Villeurbanne",
    avatar: "CD",
    rating: 5,
    result: "Objectif marathon atteint",
    text: "Je voulais courir mon premier marathon. Alex m'a construit un plan sur mesure, m'a aidée à améliorer mon alimentation et ne m'a jamais laissée douter. J'ai franchi la ligne d'arrivée en 4h12. Une fierté immense.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Ils ont osé changer.
            <br />
            <span className="text-accent">Résultats réels.</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Plus de 150 clients accompagnés. Voici ce qu'ils en disent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col gap-5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars + result */}
              <div className="flex items-center justify-between">
                <Stars count={t.rating} />
                <span className="bg-accent/15 text-accent text-xs font-bold px-3 py-1 rounded-full">
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">
                    {t.age} ans · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Témoignages vérifiés
          </div>
          <span className="hidden sm:block">·</span>
          <span>Note moyenne : <strong className="text-accent">4.9/5</strong> sur 150+ avis</span>
          <span className="hidden sm:block">·</span>
          <span>Résultats visibles en <strong className="text-white/70">90 jours</strong></span>
        </div>
      </div>
    </section>
  );
}
