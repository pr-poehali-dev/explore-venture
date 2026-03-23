import { useState } from "react";
import Icon from "@/components/ui/icon";
import Stages from "@/components/Stages";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-white text-sm uppercase tracking-wide font-bold">ВКУС МОЕЙ УЛИЦЫ</div>
          <nav className="flex items-center gap-6 sm:gap-8">
            <a
              href="#about"
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
            >
              О фестивале
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-neutral-400 transition-colors duration-300 flex items-center gap-1"
              aria-label="Жизненный цикл проекта"
            >
              <Icon name="MoreHorizontal" size={22} />
            </button>
            <a
              href="#contact"
              className="text-white border border-white px-4 py-2 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Подать заявку
            </a>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-50 overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-200 sticky top-0 bg-white z-10">
          <span className="text-sm uppercase tracking-widest text-neutral-500">Жизненный цикл проекта</span>
          <button
            onClick={() => setOpen(false)}
            className="text-neutral-500 hover:text-black transition-colors"
          >
            <Icon name="X" size={22} />
          </button>
        </div>
        <Stages />
      </div>
    </>
  );
}
