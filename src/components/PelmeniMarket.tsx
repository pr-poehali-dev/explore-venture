import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

const packagingData = [
  { name: 'В упаковке', value: 50, fill: '#4A4068' },
  { name: 'Развесные', value: 30, fill: '#9B93B8' },
  { name: 'Все равно', value: 20, fill: '#7B5C8A' },
];

const sizeData = [
  { size: 'Нанопельмени', pct: 8, fill: '#B05C5C' },
  { size: 'Маленькие', pct: 14, fill: '#7B5C8A' },
  { size: 'Средние', pct: 50, fill: '#4A4068' },
  { size: 'Крупные', pct: 23, fill: '#C4A882' },
  { size: 'Гигантские', pct: 10, fill: '#D4B8B8' },
];

const meatData = [
  { name: 'Мясное ассорти', v3: 3, vFreq: 0 },
  { name: 'Свинина + Курица', v3: 15, vFreq: 12 },
  { name: 'Говядина + Свинина', v3: 47, vFreq: 40 },
  { name: 'Курица + Говядина', v3: 57, vFreq: 50 },
];

const weightData = [
  { weight: '450г', buyers: 12 },
  { weight: '700г', buyers: 28 },
  { weight: '900г', buyers: 35 },
  { weight: '1кг', buyers: 40 },
  { weight: '1.5кг', buyers: 20 },
];

const tags = [
  'Вкусные', 'Много мяса', 'Видна начинка', 'Нормальный вес', 'Читаемый состав',
  'Нет лишнего жира', 'Не разваливаются', 'Честный размер', 'Свежие',
  'Хорошая цена', 'Известный бренд', 'Крупные кусочки мяса',
];

const tagSizes = [
  'text-2xl font-bold', 'text-xl font-bold', 'text-xl font-semibold', 'text-lg font-semibold',
  'text-lg font-medium', 'text-base font-medium', 'text-base', 'text-sm font-medium',
  'text-sm', 'text-sm', 'text-xs', 'text-xs',
];

const tagColors = [
  'text-[#C0392B]', 'text-[#2C2C2C]', 'text-[#E67E22]', 'text-[#2C2C2C]',
  'text-[#C0392B]', 'text-gray-600', 'text-[#2C2C2C]', 'text-gray-500',
  'text-gray-500', 'text-[#E67E22]', 'text-gray-400', 'text-gray-400',
];

const SectionLabel = ({ num, text }: { num: string; text: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-8 h-8 rounded-full bg-[#C0392B] text-white text-xs flex items-center justify-center font-bold font-sans flex-shrink-0">
      {num}
    </span>
    <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans">{text}</span>
  </div>
);

const Insight = ({ text }: { text: string }) => (
  <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#C0392B] rounded-r-lg">
    <p className="text-sm text-gray-700 font-sans leading-relaxed">{text}</p>
  </div>
);

export default function PelmeniMarket() {
  return (
    <section id="market" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C0392B] mb-4 font-sans">
            Блок II · Аналитика
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#2C2C2C] leading-tight mb-6">
            Анализ рынка
          </h2>
          <div className="w-16 h-0.5 bg-[#C0392B] mx-auto mb-6" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Потребительские предпочтения, поведенческие паттерны и портрет идеального продукта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Рис. 1 — Упаковка */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <SectionLabel num="1" text="Рис. 1 · Упаковка и доверие" />
            <h3 className="font-display text-2xl font-bold text-[#2C2C2C] mb-2">Упаковка vs Развесные</h3>
            <p className="text-sm text-gray-500 mb-6 font-sans">Предпочтения покупателей в крупных городах, %</p>
            <div className="flex items-center justify-center gap-8">
              <div className="relative w-44 h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={packagingData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} dataKey="value" startAngle={90} endAngle={-270}>
                      {packagingData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => [`${v}%`, '']} contentStyle={{ fontFamily: 'Inter', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-[#4A4068]">Рис.1</span>
                </div>
              </div>
              <div className="space-y-3">
                {packagingData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.fill }} />
                    <span className="text-sm text-gray-700 font-sans">{d.name}</span>
                    <span className="font-bold text-sm ml-auto pl-4">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <Insight text="При выборе замороженных продуктов потребитель ориентируется на бренд. Развесные пельмени берут из-за цены или доверия к ритейлеру." />
          </div>

          {/* Рис. 2 — Размер */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <SectionLabel num="2" text="Рис. 2 · Размер имеет значение" />
            <h3 className="font-display text-2xl font-bold text-[#2C2C2C] mb-2">Предпочтения по размеру</h3>
            <p className="text-sm text-gray-500 mb-6 font-sans">Доля покупателей по размеру пельменей, %</p>
            <div className="flex gap-6 items-center justify-center">
              <div className="relative w-44 h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sizeData.map(d => ({ name: d.size, value: d.pct, fill: d.fill }))} cx="50%" cy="50%" innerRadius={50} outerRadius={70} dataKey="value" startAngle={90} endAngle={-270}>
                      {sizeData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => [`${v}%`, '']} contentStyle={{ fontFamily: 'Inter', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-[#4A4068]">Рис.2</span>
                </div>
              </div>
              <div className="space-y-2">
                {sizeData.map((d) => (
                  <div key={d.size} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.fill }} />
                    <span className="text-sm text-gray-700 font-sans">{d.size}</span>
                    <span className="font-bold text-sm ml-auto pl-2">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
            <Insight text="Средние пельмени лидируют с 50%. Данные используются для создания продуктовых линеек под разные сегменты потребителей." />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Рис. 3 — Начинка */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <SectionLabel num="3" text="Рис. 3 · Состав начинки" />
            <h3 className="font-display text-2xl font-bold text-[#2C2C2C] mb-2">Предпочитаемый состав мясной начинки</h3>
            <p className="text-sm text-gray-500 mb-6 font-sans">Предпочтения покупателей, %</p>
            <div className="space-y-4">
              {meatData.map((d) => (
                <div key={d.name}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 font-sans w-40 flex-shrink-0">{d.name}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded h-5 overflow-hidden relative">
                        <div
                          className="h-full rounded transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: `${d.v3}%`, background: '#7B5C8A' }}
                        >
                          {d.v3 > 5 && <span className="text-white text-xs font-bold font-sans">{d.v3}%</span>}
                        </div>
                      </div>
                      {d.v3 <= 5 && <span className="text-xs font-bold text-gray-600 font-sans w-8">{d.v3}%</span>}
                    </div>
                    {d.vFreq > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded h-5 overflow-hidden relative">
                          <div
                            className="h-full rounded transition-all duration-700 flex items-center justify-end pr-2"
                            style={{ width: `${d.vFreq}%`, background: '#9B93B8' }}
                          >
                            <span className="text-white text-xs font-bold font-sans">{d.vFreq}%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#7B5C8A]"/><span className="text-xs text-gray-500 font-sans">Покупали за 3 месяца</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#9B93B8]"/><span className="text-xs text-gray-500 font-sans">Покупали чаще</span></div>
            </div>
            <Insight text="Состав начинки — важнейший фактор выбора. Курица+говядина и говядина+свинина лидируют по частоте покупок." />
          </div>

          {/* Рис. 4 & 5 — Вес и поведение */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <SectionLabel num="4" text="Рис. 4–5 · Вес упаковки и поведение" />
            <h3 className="font-display text-2xl font-bold text-[#2C2C2C] mb-2">Решения о покупке</h3>
            <p className="text-sm text-gray-500 mb-4 font-sans">Привычный вес покупки, чел.</p>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart data={weightData} margin={{ left: -10, right: 0 }}>
                <XAxis dataKey="weight" tick={{ fontSize: 11, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip formatter={(v) => [v, 'Покупателей']} contentStyle={{ fontFamily: 'Inter', fontSize: 12 }} />
                <Bar dataKey="buyers" fill="#2C2C2C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-lg mb-1">🎯</div>
                <p className="text-xs font-semibold text-[#2C2C2C] mb-1 font-sans">Решение заранее</p>
                <p className="text-xs text-gray-500 font-sans">Онлайн-заказ или чёткое знание бренда</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-lg mb-1">🛒</div>
                <p className="text-xs font-semibold text-[#2C2C2C] mb-1 font-sans">Решение в магазине</p>
                <p className="text-xs text-gray-500 font-sans">Выкладка, скидки, BTL-акции</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-xs text-red-700 font-sans">⚠️ Проблема: На упаковках рецептура часто нечитаема — мелкий шрифт раздражает покупателей.</p>
            </div>
          </div>
        </div>

        {/* Рис. 6 — Портрет идеального продукта */}
        <div className="bg-[#2C2C2C] rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-[#C0392B] text-white text-xs flex items-center justify-center font-bold font-sans flex-shrink-0">6</span>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans">Рис. 6 · Глубинные интервью</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Портрет идеального продукта
          </h3>
          <p className="text-gray-400 text-sm mb-10 font-sans">
            Что говорят покупатели об идеальных пельменях — основные формулировки из интервью
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center mb-10">
            {tags.map((tag, i) => (
              <span key={tag} className={`${tagSizes[i]} ${tagColors[i]} transition-opacity hover:opacity-80 cursor-default font-sans`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
              Производитель должен закрывать базовые ожидания покупателей: 
              <span className="text-white font-semibold"> вкус, состав, видимая начинка, честный вес</span> — 
              без этого маркетинг не спасёт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}