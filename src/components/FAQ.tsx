"use client";

import { useState } from "react";

const faqs = [
  {
    q: "La première séance est vraiment gratuite ?",
    a: "Oui, sans condition. On se retrouve 30 à 45 min pour que tu m'expliques ton objectif, ton niveau et tes contraintes. Je t'explique comment je travaille. Si on est alignés, on démarre. Si non, pas de souci — tu repars avec des conseils concrets quand même.",
  },
  {
    q: "Je n'ai jamais fait de sport. Est-ce que c'est pour moi ?",
    a: "C'est exactement pour toi. 80% de mes clients n'avaient pas fait de sport régulier depuis des années. Je pars de là où tu en es — pas de là où tu devrais être. On construit progressivement, sans risque de blessure et sans te dégoûter.",
  },
  {
    q: "Est-ce que je peux faire le coaching à distance ?",
    a: "Oui. Plusieurs de mes clients sont à distance et suivent le programme en vidéo. Le suivi nutritionnel, les plans d'entraînement et le coaching quotidien fonctionnent exactement pareil. La seule différence, c'est l'écran.",
  },
  {
    q: "En combien de temps je vais voir des résultats ?",
    a: "La plupart de mes clients voient une différence sur leur énergie et leur silhouette en 6 à 8 semaines. Les résultats chiffrés (poids, mensurations) arrivent à partir de 2 mois. L'objectif final — selon ce qu'on se fixe — est généralement atteint en 3 à 6 mois.",
  },
  {
    q: "Est-ce que je dois avoir un régime strict ?",
    a: "Non. Je suis contre les régimes stricts parce qu'ils ne durent pas. Mon approche nutrition est basée sur l'équilibre et l'adaptation à ce que tu aimes manger. Tu vas faire des choix plus intelligents, pas te priver.",
  },
  {
    q: "Combien ça coûte ?",
    a: "La première séance est 100% gratuite. Ensuite, les formules commencent à 149€/mois (1 séance/semaine) et vont jusqu'à 399€/mois pour un suivi complet illimité. Il n'y a pas d'engagement : tu paies mois par mois et tu arrêtes quand tu veux.",
  },
  {
    q: "Que se passe-t-il si je dois annuler une séance ?",
    a: "Pas de problème tant que tu préviens 24h avant. La séance est reportée sans frais. La vie, ça arrive — je m'adapte à ta réalité, pas l'inverse.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-semibold text-white group-hover:text-accent transition-colors duration-200">
          {q}
        </span>
        <span
          className={`text-accent text-xl font-bold shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-white/55 text-sm leading-relaxed pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4">

        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Tu as des questions ?
            <br />
            <span className="text-accent">Voici les réponses.</span>
          </h2>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-2xl px-8">
          {faqs.map((faq) => (
            <Item key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/40 text-sm mb-4">
            Une autre question ? Envoie-moi un message.
          </p>
          <a
            href="#reserver"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            Réserver ma séance gratuite →
          </a>
        </div>
      </div>
    </section>
  );
}
