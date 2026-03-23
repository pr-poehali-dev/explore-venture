import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Goals from "@/components/Goals";
import Swot from "@/components/Swot";
import Promo from "@/components/Promo";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Goals />
      <Swot />
      <Promo />
      <ApplicationForm />
      <Footer />
    </main>
  );
};

export default Index;