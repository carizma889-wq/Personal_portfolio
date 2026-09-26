import GradientBlinds from "./GradientBlinds";

function StartBar() {
  return (
       <div className="Gradient">
  <div className="GradientBlindsSection" >
    <GradientBlinds
      gradientColors={["#FF9FFC", "#5227FF"]}
      angle={20}
      noise={0.1}
      blindCount={16}
      blindMinWidth={60}
      spotlightRadius={0.5}
      spotlightSoftness={1}
      spotlightOpacity={1}
      mouseDampening={0.15}
      distortAmount={0}
      shineDirection="left"
      mixBlendMode="lighten"
      color1="#FF9FFC"
      color2="#5227FF"
    />
  </div>

  <div className="detailsSection">
    <div
      className="content"
    >
      <div className="statBlock" >
        <p className="gradient-text statLabel" >Projects</p>
        <h2 className="gradient-text statNumber">30+</h2>
      </div>
      <div className="statBlock" >
        <p className="gradient-text statLabel" >Customers</p>
        <h2 className="gradient-text statNumber" >10+</h2>
      </div>
      <div className="statBlock" >
        <p className="gradient-text statLabel" >Experience</p>
        <h2 className="gradient-text statNumber" >5+</h2>
      </div>
    </div>
  </div>
</div>
  )
}

export default StartBar