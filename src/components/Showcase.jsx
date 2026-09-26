import ProjectCard from "./ProjectCard";
import { useState } from "react";
function Showcase() {
const [selectedProject, setSelectedProject] = useState(null);
  const lists = [
    { id: 0, name: "website", img: "./images/fu.png" ,liveUrl:null,github:'https://github.com/carizma889-wq/fullWebsite',designFigma:'https://www.figma.com/design/VN7yMiJCavoBCeE8dUtlNK/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=1-3&t=dwXQ2Zw6AGv7NjPS-1'},
    { id: 1, name: "gravityteam", img: "./images/gravityteam.png" ,liveUrl:null,github:'https://github.com/carizma889-wq/gravityteam',designFigma:'https://www.figma.com/design/VN7yMiJCavoBCeE8dUtlNK/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=1-3&t=dwXQ2Zw6AGv7NjPS-1'},
    { id: 2, name: "landing", img: "./images/landing.png",liveUrl:null,github:'https://github.com/carizma889-wq/portfolio',designFigma:'https://www.figma.com/design/VN7yMiJCavoBCeE8dUtlNK/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=1-3&t=dwXQ2Zw6AGv7NjPS-1' },
  ];

  return (
    <div  id="Projects" className="ShowcaseSection" >
      <div className="title">
        <h1>Showcase</h1>
      </div>
      <div className="listSection">
        <div className="name">
          <img src="./icons/webIcon.svg" alt="" />
          <p>Webpages</p>
        </div>
        <ul className="list"  >
          {lists.map((list) => {
            return (
              <li key={list.id}  onClick={()=>{setSelectedProject(list)}}>
                <div className="listLi">
                  <img src={list.img} alt="" />
                  <div className="text">
                    <p>{list.name}</p>
                    <div className="img">
                      <img src="./icons/rows.png" alt="" />
                    </div>
                  </div>
                </div>
              </li>
            );
          
          })}
        </ul>
      </div>
      {selectedProject&&(
        <ProjectCard
        project={selectedProject}
        onClose={()=>setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Showcase;
