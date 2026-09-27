import Showcase from "../components/Showcase"
import HeroSection from "../components/HeroSection"
import Contact from "../components/Contact"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
import HeroFooter from "@/components/HeroFooter"
function Home() {
  return (
    <>
    <HeroSection/>
    <Showcase/>
    <Contact/>
    <About/>
    <TechStack/>
    <HeroFooter/>
    </>
  )
}

export default Home