import CurvedLoop from "./CurvedLoop";
import TrueFocus from "./TrueFocus";
import StartBar from "./StartBar";
import Skills from "./Skills";
import { useState,useEffect } from "react";
function HeroContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="HeroContent">
      <div className="tools"> 
        <CurvedLoop
          marqueeText="React ✦ sass ✦ Supabase ✦ Figma ✦ Web3 ✦ Api ✦"
          speed={1.6}
          curveAmount={isMobile ? -180 : -400}
          direction="right"
        />
      </div>
      <div className="imgageProfile">
        <img src="/images/1.jpg" alt="" />
      </div>
      <div className="Specialization">
        <TrueFocus />
      </div>
      <StartBar/>
      <div className="skills">
        <Skills/>
      </div>
    </div>
  );
}

export default HeroContent;
