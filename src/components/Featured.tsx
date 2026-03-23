export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/452204d3-2b14-4cd9-8232-c4ff907f6353.jpg"
          alt="Блюда фестиваля"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">О курорте Танай</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Современный горнолыжный курорт в Кузбассе с хорошо подготовленными трассами, современной инфраструктурой и активной внесезонной жизнью. Место притяжения для всех, кто ценит природу и качественный сервис.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0"></span>
            <p className="text-base text-neutral-700"><strong>Место проведения:</strong> Центральная площадь у подножия основных склонов</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0"></span>
            <p className="text-base text-neutral-700"><strong>Формат:</strong> Фудкорты, сцена, зоны отдыха, торговые ряды, мастер-классы шефов</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0"></span>
            <p className="text-base text-neutral-700"><strong>Аудитория:</strong> Туристы из Новосибирска, Томска, Кемерово и местные жители</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Стать участником
        </button>
      </div>
    </div>
  );
}