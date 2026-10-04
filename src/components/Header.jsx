import { useState } from "react";
import { motion } from "motion/react";
import { useContacts } from "@/context/ContactContext";
function Header() {
  const [active, setActive] = useState("Home");
  const listul = ["Home", "About Me", "Projects", "Contact"];
    const { contacts } = useContacts();
  function scrollToSection(id){
    const element=document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <div className="headerSection">
      <a
        
        className="linkedFile"
        href={contacts[0]?.value}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={contacts[0]?.icon}alt="" />
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
      <a href={contacts[1]?.value} target="_blank" rel="noopener noreferrer"   className="CVFile">
        <img src={contacts[1]?.icon} alt="" />
        <p>cv</p>
      </a>
    </div>
  );
}

export default Header;
