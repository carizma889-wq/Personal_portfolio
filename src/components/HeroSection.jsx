import Header from "./Header"
function HeroSection() {
  return (
    <div className="HeroSection">
        <div className="header">
            <Header/>
        </div>
      <img  className='HeroSmoke' src="/images/smokeAll.png" alt="" />
    </div>
  )
}

export default HeroSection