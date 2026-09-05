import Header from "./Header"
import HeroContent from "./HeroContent"
import Identification from "./Identification"
function HeroSection() {
  return (
    <div className="HeroSection">
        <div className="header">
            <Header/>
            <Identification/>
        </div>
      <img  className='HeroSmoke' src="/images/smokeAll.png" alt="" />
      <HeroContent/>
    </div>
  )
}

export default HeroSection