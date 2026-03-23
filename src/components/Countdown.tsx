import { useEffect, useState } from "react";

// Дата фестиваля — измени на нужную
const FESTIVAL_DATE = new Date("2025-08-15T12:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = FESTIVAL_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = time
    ? [
        { label: "Дней", value: pad(time.days) },
        { label: "Часов", value: pad(time.hours) },
        { label: "Минут", value: pad(time.minutes) },
        { label: "Секунд", value: pad(time.seconds) },
      ]
    : null;

  return (
    <div className="bg-neutral-900 text-white py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">До старта фестиваля</p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">
          «Вкус моей улицы» · Танай
        </h2>

        {units ? (
          <div className="flex justify-center gap-4 sm:gap-8 lg:gap-16">
            {units.map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-5xl sm:text-7xl lg:text-9xl font-bold tabular-nums leading-none">
                  {value}
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 mt-3">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-3xl font-bold text-neutral-300">Фестиваль уже начался! 🎉</p>
        )}

        <a
          href="#contact"
          className="inline-block mt-14 border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Подать заявку участника
        </a>
      </div>
    </div>
  );
}
