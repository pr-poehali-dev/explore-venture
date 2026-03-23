import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/c96d75ff-63f8-4492-91d7-fbdb83623d69.jpg"
          alt="Гастрономический фестиваль на Танае"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80">Горнолыжный курорт Танай · Кемеровская область</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ВКУС<br />МОЕЙ УЛИЦЫ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Гастрономический фестиваль уличной еды на Центральной площади курорта «Танай» — лучшая еда, горы и живая атмосфера праздника
        </p>
        <p className="text-sm mt-3 opacity-60 uppercase tracking-widest">#ВкусМоейУлицыТанай</p>
        <button className="mt-8 border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
          Узнать подробности
        </button>
      </div>
    </div>
  );
}