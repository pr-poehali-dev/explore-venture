const ingredients = [
  { name: "Говядина", amount: "200 г" },
  { name: "Свинина жирная", amount: "260 г" },
  { name: "Мука пшеничная", amount: "380 г" },
  { name: "Яйцо куриное", amount: "1 шт" },
  { name: "Вода холодная", amount: "120 мл" },
  { name: "Лук репчатый", amount: "2 шт" },
  { name: "Соль", amount: "1 г" },
  { name: "Перец молотый", amount: "1 г" },
  { name: "Сахар", amount: "1 г" },
  { name: "Масло", amount: "3 мл" },
];

export default function PelmeniRecipe() {
  return (
    <section id="recipe" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C0392B] mb-4 font-sans">
            Блок II · Рецептура
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#2C2C2C] leading-tight mb-6">
            Состав и рецептура
          </h2>
          <div className="w-16 h-0.5 bg-[#C0392B] mx-auto mb-6" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Классическая рецептура пельменей на 1 кг готового продукта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Таблица рецептуры */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#7B5C8A] px-6 py-4">
                <h3 className="text-white font-display text-xl font-bold text-center">
                  Рецептура на 1 кг
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {ingredients.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-center px-6 py-3 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#F7F3FA]"
                    }`}
                  >
                    <span className="font-sans text-[#2C2C2C] text-sm">{item.name}</span>
                    <span className="font-sans text-[#2C2C2C] text-sm font-medium">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фотографии процесса */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/bucket/ac9aa944-427d-4697-9c52-b4a087d88e27.jpg"
                alt="Приготовление теста"
                className="w-full rounded-2xl object-cover shadow-md"
                style={{ maxHeight: 500, objectPosition: "center" }}
              />
            </div>

            <div className="bg-[#FDF6EC] rounded-2xl p-6 border border-amber-100">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👨‍🍳</span>
                <div>
                  <p className="font-display text-lg font-bold text-[#2C2C2C] mb-1">
                    Важно при замесе теста
                  </p>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    Используйте холодную воду — это делает тесто упругим и эластичным. 
                    После замеса дайте тесту отдохнуть 30 минут под влажным полотенцем.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
