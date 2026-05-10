import PelmeniHero from "@/components/PelmeniHero";
import PelmeniHistory from "@/components/PelmeniHistory";
import PelmeniRecipe from "@/components/PelmeniRecipe";
import PelmeniMarket from "@/components/PelmeniMarket";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PelmeniHero />
      <PelmeniHistory />
      <PelmeniRecipe />
      <PelmeniMarket />
      <footer className="bg-[#2C2C2C] py-8 text-center">
        <p className="text-gray-500 text-xs font-sans uppercase tracking-widest">
          Вкусы России · Образовательный проект · 2026
        </p>
      </footer>
    </main>
  );
};

export default Index;