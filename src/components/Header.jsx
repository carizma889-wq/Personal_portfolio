/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "motion/react";
import { listul } from "../assets/assets";
function Header() {
  const [active, setActive] = useState("Home");
  const listul = ["Home", "About Me", "Projects", "Contact"];
  return (
    <div className="headerSection">
      <div className="linkedFile">
        <img src="/icons/LinkedInIcon.svg" alt="" />
        <p>linkedin</p>
      </div>
      <ul className="listUl">
        {listul.map((li) => {
          return (
            <li
              key={li}
              className={active === li ? "active" : ""}
              onClick={() => {
                setActive(li);
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
      <div className="CVFile">
        <img src="/icons/CV.svg" alt="" />
        <p>cv</p>
      </div>
    </div>
  );
}

export default Header;
