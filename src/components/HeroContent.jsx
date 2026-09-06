import CurvedLoop from "./CurvedLoop";
import TrueFocus from "./TrueFocus";
import StartBar from "./StartBar";
import Skills from "./Skills";
function HeroContent() {
  return (
    <div className="HeroContent">
      <div className="tools">
        <CurvedLoop
          marqueeText="React ✦ sass ✦ Supabase ✦ Figma ✦ Web3 ✦ Api ✦"
          speed={1.6}
          curveAmount={-400}
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
