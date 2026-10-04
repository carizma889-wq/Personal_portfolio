import CurvedLoop from "./CurvedLoop";
import TrueFocus from "./TrueFocus";
import StartBar from "./StartBar";
import Skills from "./Skills";
import { useState,useEffect } from "react";
import { supabase } from "@/supabaseClient";
function HeroContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [imgageProfile,setImgageProfile]=useState()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(()=>{
    async function getImageProfile() {
      const { data } = supabase.storage.from("images").getPublicUrl("images/its_me.jpeg");
      setImgageProfile(data.publicUrl);   
    }
    getImageProfile()
  },[])

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
        <img src={imgageProfile} alt="" />
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
