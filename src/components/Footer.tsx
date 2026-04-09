export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div>
          <span className="text-white font-bold">Alex</span>
          <span className="text-accent font-bold"> Martin</span>
          <span className="ml-3">— Coach Sportif à Lyon</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:alex.martin@coach-lyon.fr" className="hover:text-white/60 transition-colors">
            alex.martin@coach-lyon.fr
          </a>
          <span>Lyon, France</span>
        </div>

        <div>© {new Date().getFullYear()} Alex Martin. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
