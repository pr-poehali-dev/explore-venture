export default function PelmeniHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/4051f8b9-83e9-4abb-8ac1-95bf3f98bd19.jpg"
          alt="Пельмени в тарелке"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-70 font-sans">
          Вкусы России · Образовательный проект
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4 tracking-tight">
          Пельмени
        </h1>
        <div className="inline-block border border-white/40 px-6 py-2 mb-8 backdrop-blur-sm bg-white/5">
          <span className="font-display text-xl md:text-2xl italic opacity-90 tracking-wide">
            «Хлебное ухо»
          </span>
        </div>
        <p className="font-sans text-base md:text-lg max-w-2xl mx-auto opacity-80 leading-relaxed">
          История, культура и рынок — всё о главном блюде русской зимы
        </p>

        <div className="mt-12 flex justify-center">
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-white/50 text-xs uppercase tracking-widest font-sans">
        <a href="#history" className="hover:text-white transition-colors">История</a>
        <span>·</span>
        <a href="#market" className="hover:text-white transition-colors">Анализ рынка</a>
      </div>
    </section>
  );
}
