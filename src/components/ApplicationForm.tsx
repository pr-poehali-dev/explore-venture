import { useState } from "react";
import Icon from "@/components/ui/icon";

const FUNCTION_URL = "https://functions.poehali.dev/65dd7ee2-c10e-460a-a7f1-8ea5f60a4532";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    format: "",
    cuisine: "",
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", format: "", cuisine: "", comment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-white py-20 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Участие в фестивале</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Подать заявку<br />кулинара
        </h2>
        <p className="text-neutral-500 mb-12 text-lg">
          Молодые повара, локальные производители, фудтраки — заполните форму, и мы свяжемся с вами.
        </p>

        {status === "success" ? (
          <div className="border border-neutral-200 p-12 text-center">
            <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-neutral-900" />
            <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 border border-black text-black px-6 py-2 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              Отправить ещё
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Имя / Название <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Иван Иванов или «Чебурек House»"
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Телефон <span className="text-red-500">*</span></label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (999) 000-00-00"
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@mail.ru"
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500">Формат участия</label>
                <select
                  name="format"
                  value={form.format}
                  onChange={handleChange}
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white"
                >
                  <option value="">Выберите формат</option>
                  <option value="Фудтрак">Фудтрак</option>
                  <option value="Палатка / стенд">Палатка / стенд</option>
                  <option value="Мастер-класс">Мастер-класс от шефа</option>
                  <option value="Локальный производитель">Локальный производитель</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500">Кухня / Блюда</label>
              <input
                name="cuisine"
                value={form.cuisine}
                onChange={handleChange}
                placeholder="Например: сибирская кухня, бургеры, выпечка..."
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500">Комментарий</label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                rows={4}
                placeholder="Расскажите о себе, своём проекте или задайте вопрос..."
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2 w-fit"
            >
              {status === "loading" ? (
                <>
                  <Icon name="Loader2" size={16} className="animate-spin" />
                  Отправляем...
                </>
              ) : (
                "Отправить заявку"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
