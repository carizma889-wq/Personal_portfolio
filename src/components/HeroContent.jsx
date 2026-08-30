import CurvedLoop from "./CurvedLoop";
function HeroContent() {
  return (
    <div className="HeroContent">
      <div className="skills">
        <CurvedLoop
          marqueeText="React ✦ sass ✦ Supabase ✦ Figma ✦ Web3 ✦ Api ✦"
          speed={1.6}
          curveAmount={-400}
          direction="right"
        />
      </div>
      <div className="imgageProfile">
        <img src="/images/1.png" alt="" />
      </div>
      <div className="Specialization"></div>
    </div>
  );
}

export default HeroContent;
