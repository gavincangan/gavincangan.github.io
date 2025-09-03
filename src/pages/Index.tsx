import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Publications />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
