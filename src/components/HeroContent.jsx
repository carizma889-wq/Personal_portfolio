import CurvedLoop from "./CurvedLoop";
function HeroContent() {
  return (
    <div>
      <div className="skills">
        <CurvedLoop
          marqueeText="React ✦ sass ✦ Supabase ✦ Figma ✦ Web3 ✦ Api ✦"
          speed={1.6}
          curveAmount={-400}
          direction="right"
        />
      </div>
      <div className="imgageProfile"></div>
      <div className="Specialization"></div>
    </div>
  );
}

export default HeroContent;
