import Icon from '@/components/ui/icon';

const facts = [
  {
    icon: "Clock",
    label: "Время появления",
    title: "XIV–XV века",
    text: "Пельмени пришли в Россию через Урал и Сибирь. Уральские и сибирские народы готовили их задолго до того, как блюдо стало общерусским.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: "BookOpen",
    label: "Происхождение названия",
    title: "«Пель» + «Нянь»",
    text: 'От финно-угорских слов: «пель» — ухо, «нянь» — хлеб. Отсюда и поэтическое название — «хлебное ухо». Форма вареника действительно напоминает ушную раковину.',
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
  },
  {
    icon: "Snowflake",
    label: "Историческое предназначение",
    title: "Зимняя провизия",
    text: "Изначально — пища для долгих зимних походов. Их лепили тысячами и замораживали прямо на улице. Готовое блюдо могло храниться всю зиму.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
];

export default function PelmeniHistory() {
  return (
    <section id="history" className="py-24 bg-[#FDF6EC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C0392B] mb-4 font-sans">
            Блок I · История
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#2C2C2C] leading-tight mb-6">
            Хлебное ухо из Сибири
          </h2>
          <div className="w-16 h-0.5 bg-[#C0392B] mx-auto mb-6" />
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Пельмени — не просто еда. Это живой артефакт культурного обмена между народами Урала, 
            Сибири и Средней Азии, ставший символом русской кухни.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className={`rounded-2xl border p-8 ${fact.color} transition-transform hover:-translate-y-1 duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${fact.iconColor}`}>
                  <Icon name={fact.icon} size={28} />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-sans">
                  {fact.label}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#2C2C2C] mb-3">
                {fact.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm font-sans">{fact.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#2C2C2C] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#C0392B] flex items-center justify-center">
            <Icon name="Quote" size={32} className="text-white" />
          </div>
          <div>
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed mb-3">
              «Хлебное ухо» — так буквально звучит слово "пельмень" 
              в переводе с языков коми и удмуртов.
            </p>
            <p className="text-gray-400 text-sm font-sans uppercase tracking-widest">
              Этимология слова
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}