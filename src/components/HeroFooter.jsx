import TextPressSure from "./TextPressSure";
import { useContacts } from "@/context/ContactContext";
function HeroFooter() {
  const { contacts } = useContacts();
  return (
    <div className="HeroFoterSection">
      <div className="TextPressure">
        <TextPressSure />
      </div>
      <div className="listContent">
        <ul>
          {contacts.map((list) => {
            return (
              <li key={list.id}>
                <a href={list.value} target="_blank" rel="noopener noreferrer">
                  <img src={list.icon} alt="" />
                  <p>{list.label}</p>
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
