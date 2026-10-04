import HeroFooter from "@/components/HeroFooter";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
function Home() {
  return (
    <>
      <HeroSection />
      <Showcase />
      <Contact />
      <About />
      <TechStack />
      <HeroFooter />
    </>
  );
}

export default Home;
