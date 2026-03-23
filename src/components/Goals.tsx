export default function Goals() {
  const goals = [
    {
      icon: "🏔️",
      title: "Событийный туризм",
      text: "Создание дополнительного яркого повода для посещения курорта вне пикового лыжного сезона — в конце весны, летом или ранней осенью.",
    },
    {
      icon: "🍽️",
      title: "Развитие инфраструктуры",
      text: "Стимулирование местных предпринимателей, создание новых точек притяжения на курорте.",
    },
    {
      icon: "⭐",
      title: "Клиентский опыт",
      text: "Повышение лояльности гостей за счёт уникального развлечения и разнообразия гастрономии.",
    },
    {
      icon: "📣",
      title: "Маркетинг территории",
      text: "Укрепление бренда курорта «Танай» как места для круглогодичного, разнообразного и вкусного отдыха.",
    },
  ];

  const solutions = [
    {
      title: "Привлечение туристов",
      text: "Прямая интеграция в пакеты туроператоров, таргетированная реклама на жителей Новосибирска, Томска, Кемерово. Специальные предложения «билет + проживание + фуд-билет».",
    },
    {
      title: "Поддержка молодых кулинаров",
      text: "Льготная ставка участия, «Шеф-лаборатория» с менторами, конкурс грантов, специальная номинация «Лучшее блюдо для активного отдыха».",
    },
    {
      title: "Атмосфера и контент",
      text: "Яркое оформление, live-музыка, зоны для фото с видом на горы, активное вовлечение гостей с хештегом #ВкусМоейУлицыТанай.",
    },
  ];

  return (
    <div className="bg-neutral-900 text-white py-20 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Область применения</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          Цели и решение<br />основных задач
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {goals.map((g, i) => (
            <div key={i} className="border border-neutral-700 p-6 hover:border-white transition-colors duration-300">
              <div className="text-3xl mb-4">{g.icon}</div>
              <h3 className="font-bold text-lg mb-3">{g.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>

        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-8">Как это достигается</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="bg-neutral-800 p-8">
              <span className="text-4xl font-bold text-neutral-600">0{i + 1}</span>
              <h3 className="font-bold text-xl mt-4 mb-3">{s.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
