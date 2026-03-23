const photos = [
  {
    src: "https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/ec74c749-4f0d-4dd4-b064-bc1e9d0bf9a1.jpg",
    alt: "Фестиваль уличной еды на курорте",
    span: "lg:col-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/95f54375-ea10-47e3-9fce-f1d5f3e3e27d.jpg",
    alt: "Шеф готовит на открытом воздухе",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/bc63e0f6-7bb8-4907-9373-ff391cfe8b2a.jpg",
    alt: "Гости фестиваля",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/452204d3-2b14-4cd9-8232-c4ff907f6353.jpg",
    alt: "Блюда фестиваля",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/1d237f41-f5c8-47cc-a760-a3e5f83511a4/files/c96d75ff-63f8-4492-91d7-fbdb83623d69.jpg",
    alt: "Курорт Танай зимой",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <div className="bg-white py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Атмосфера</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Вкус, горы<br />и живые эмоции
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden ${photo.span} h-64 lg:h-80`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
