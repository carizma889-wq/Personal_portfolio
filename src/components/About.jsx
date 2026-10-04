const START_DATE = new Date("2020-06-01");
function getYearsOfExperience(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();

  const hasntHadAnniversary =
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() < startDate.getDate());

  if (hasntHadAnniversary) years--;
  return years;
}

function About() {
  const years = getYearsOfExperience(START_DATE);

  return (
    <div id="About Me" className="AboutSection">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="content">
        <p>
          Hi, I'm Abdullah, a Front-End Developer with {years}+ years of
          experience building clean, responsive web interfaces.
        </p>
        <p>
          I work mainly with React, Redux, and Supabase, and I care about
          turning designs into fast, polished products. I'm currently studying
          Business Systems and Administration, which helps me build products
          with real business needs in mind.
        </p>
        <p>
          I'm always learning, and I'm open to junior front-end opportunities
          where I can grow and contribute.
        </p>
      </div>
    </div>
  );
}

export default About;