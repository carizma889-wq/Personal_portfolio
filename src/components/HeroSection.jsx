import Header from "./Header"
import HeroContent from "./HeroContent"
function HeroSection() {
  return (
    <div className="HeroSection">
        <div className="header">
            <Header/>
        </div>
      <img  className='HeroSmoke' src="/images/smokeAll.png" alt="" />
      <HeroContent/>
    </div>
  )
}

export default HeroSection