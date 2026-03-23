import { useState } from "react";
import Icon from "@/components/ui/icon";

const stages = [
  {
    number: "01",
    title: "Инициация и концепция",
    items: [
      "Анализ целевой аудитории курорта (туристы, спортсмены, местные жители)",
      "Определение целей, формата и уникального позиционирования фестиваля",
      "Согласование концепции с руководством курорта и партнёрами",
      "Предварительная оценка бюджета, ресурсов и рисков",
    ],
    result: "Утверждённая концепция, устав проекта и решение о запуске",
  },
  {
    number: "02",
    title: "Планирование и подготовка",
    items: [
      "Детальное планирование: бюджет, календарный график, программа мероприятий",
      "Получение всех необходимых разрешений (администрация, Роспотребнадзор, МЧС)",
      "Заключение договоров с партнёрами: безопасность, медицина, звук, свет",
      "Запуск маркетинговой кампании: соцсети, туроператоры, агрегаторы",
      "Приём заявок и отбор участников-кулинаров",
    ],
    result: "Полный пакет документов, сформированная программа и готовность к реализации",
  },
  {
    number: "03",
    title: "Реализация и проведение",
    items: [
      "Финальная координация: брифинги с участниками, подрядчиками и службами курорта",
      "Монтаж инфраструктуры фестиваля (палатки, сцена, зоны)",
      "Проведение фестиваля: оперативное управление, контроль качества",
      "Организация развлекательной программы (музыка, конкурсы, мастер-классы)",
    ],
    result: "Успешно проведённое мероприятие",
  },
  {
    number: "04",
    title: "Завершение и анализ",
    items: [
      "Демонтаж конструкций и сдача площадки",
      "Финансовый и аналитический отчёт (посещаемость, выручка, медиа-охват)",
      "Обратная связь от участников, гостей и партнёров",
      "Формирование отчёта об успехах и извлечённых уроках",
    ],
    result: "Закрытый проект с рекомендациями на будущее, архивация материалов",
  },
];

export default function Stages() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Жизненный цикл проекта</p>
        <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8 leading-tight">
          Оптимальный путь от идеи до результата
        </h2>

        <div className="flex flex-col gap-3 mb-8">
          {stages.map((stage, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(i)}
              className={`text-left p-5 border cursor-pointer transition-all duration-300 select-none ${
                active === i
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-900 border-neutral-200 hover:border-neutral-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400">
                    Стадия {stage.number}
                  </span>
                  <p className="text-base font-semibold mt-1">{stage.title}</p>
                </div>
                <Icon
                  name={active === i ? "ChevronDown" : "ChevronRight"}
                  size={18}
                  className={active === i ? "text-white shrink-0" : "text-neutral-400 shrink-0"}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-6">
          <span className="text-4xl font-bold text-neutral-200">{stages[active].number}</span>
          <h3 className="text-xl font-bold text-neutral-900 mt-3 mb-5">{stages[active].title}</h3>
          <ul className="flex flex-col gap-3 mb-6">
            {stages[active].items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-neutral-900 mt-1.5 shrink-0"></span>
                <span className="text-neutral-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-5 border-t border-neutral-200">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Результат стадии</p>
            <p className="text-neutral-900 font-medium text-sm">{stages[active].result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}