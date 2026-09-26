import TextPressure from "./TextPressure";
function HeroFooter() {
  const listData = [
    {
      id: 1,
      name: "LinkedIn",
      img: "./icons/LinkedInIcon.svg",
      href: "https://www.linkedin.com/in/abdullah-nader-89a6b52aa",
    },
    {
      id: 1,
      name: "Instagram",
      img: "./icons/InstagramIcon.svg",
      href: "https://www.instagram.com/carizma_dev/",
    },
    {
      id: 1,
      name: "CV",
      img: "./icons/CV.svg",
      href: "https://drive.google.com/file/d/1lIsivRPx7PL6HvbLZk9kNE0HfEdiPDeZ/view?usp=sharing",
    },
    {
      id: 1,
      name: "Email",
      img: "./icons/Address.svg",
      href: "mailto:carizma889@gmail.com",
    },
    {
      id: 1,
      name: "Phone",
      img: "./icons/PhoneIcon.svg",
      href: "tel:+201553599815",
    },
  ];
  return (
    <div className="HeroFoterSection">
      <div className="TextPressure">
        <TextPressure />
      </div>
      <div className="listContent">
        <ul>
          {listData.map((list) => {
            return (
              <li key={list.id}>
                <a href={list.href} target="_blank" rel="noopener noreferrer">
                  <img src={list.img} alt="" />
                  <p>{list.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeroFooter;
