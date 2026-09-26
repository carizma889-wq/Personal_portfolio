import Header from "./Header";
import HeroContent from "./HeroContent";
import Identification from "./Identification";
function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="header">
        <Header />
        <Identification />
      </div>
      <picture>
        <source media="(max-width:768px)"   srcSet={"./images/smokeMobile.png"} />
        <img className="HeroSmoke" src="/images/smokeAll.png" alt="" />
      </picture>
      <HeroContent />
    </div>
  );
}

export default HeroSection;
