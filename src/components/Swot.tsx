const swot = [
  {
    label: "S — Сильные стороны",
    color: "bg-neutral-900 text-white",
    labelColor: "text-neutral-400",
    items: [
      "Готовая инфраструктура и потоки гостей на курорте",
      "Управляемая территория, команда с опытом организации мероприятий",
      "Возможность создания «тематических» блюд — например, «горнолыжные» снеки",
    ],
  },
  {
    label: "W — Слабые стороны",
    color: "bg-neutral-100 text-neutral-900",
    labelColor: "text-neutral-500",
    items: [
      "Зависимость от погоды — нужен план «Б»: большие тенты, обогреваемые палатки",
      "Возможная высокая стоимость участия для локальных стартапов",
      "Нагрузка на существующие службы курорта",
    ],
  },
  {
    label: "O — Возможности",
    color: "bg-neutral-900 text-white",
    labelColor: "text-neutral-400",
    items: [
      "Тренд на гастрономический туризм в России",
      "Грантовая поддержка регионального туризма",
      "Интерес федеральных медиа к новым точкам притяжения в Кузбассе",
      "Возможность сделать фестиваль ежегодной традицией",
    ],
  },
  {
    label: "T — Угрозы",
    color: "bg-neutral-100 text-neutral-900",
    labelColor: "text-neutral-500",
    items: [
      "Неблагоприятные погодные условия (ливень, сильный ветер)",
      "Экономический спад и снижение платёжеспособности аудитории",
      "Конкуренция с другими событиями региона в те же даты",
    ],
  },
];

export default function Swot() {
  return (
    <div className="bg-white py-20 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Анализ проекта</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          Внешние и внутренние<br />факторы влияния
        </h2>
        <div className="grid sm:grid-cols-2 gap-px bg-neutral-200">
          {swot.map((block, i) => (
            <div key={i} className={`${block.color} p-8 lg:p-12`}>
              <p className={`text-xs uppercase tracking-widest mb-6 ${block.labelColor}`}>{block.label}</p>
              <ul className="flex flex-col gap-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${block.color.includes('neutral-900') ? 'bg-white' : 'bg-neutral-900'}`}></span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
