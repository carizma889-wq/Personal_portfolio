import { useState } from "react";
import { motion } from "motion/react";

function Header() {
  const [active, setActive] = useState("Home");
  const listul = ["Home", "About Me", "Projects", "Contact"];
  function scrollToSection(id){
    const element=document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <div className="headerSection">
      <a
        c
        className="linkedFile"
        href="https://www.linkedin.com/in/abdullah-nader-89a6b52aa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/LinkedInIcon.svg" alt="" />
        <p>linkedin</p>
      </a>
      <ul className="listUl">
        {listul.map((li) => {
          return (
            <li 
              key={li}
              className={active === li ? "active" : ""}
              onClick={() => {
                setActive(li);
                scrollToSection(li);
              }}
            >
              {active === li && (
                <motion.div
                  layoutId="activePill"
                  className="activeBackground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="liText">{li}</span>
            </li>
          );
        })}
      </ul>
      <a href="https://drive.google.com/file/d/1lIsivRPx7PL6HvbLZk9kNE0HfEdiPDeZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"   className="CVFile">
        <img src="/icons/CV.svg" alt="" />
        <p>cv</p>
      </a>
    </div>
  );
}

export default Header;
