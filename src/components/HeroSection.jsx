import Header from "./Header";
import HeroContent from "./HeroContent";
import Identification from "./Identification";
function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <div className="hero-section__top">
        <Header />
        <Identification />
      </div>

      <picture>
        <source media="(max-width:768px)"   srcSet="./images/smokeMobile.png" />
        <img className="hero-section__smoke" src="/images/smokeAll.png" alt="" />
      </picture>
      <HeroContent />
    </div>
  );
}

export default HeroSection;
