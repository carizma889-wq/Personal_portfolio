import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";
import { fetchShowcase } from "@/services/projectsService";
function Showcase() {
  const [dataShoeCase, setDataShowCase] = useState([]);
  useEffect(() => {
    async function loadShowCase() {
      const data = await fetchShowcase();
      if (data) {
        setDataShowCase(data);
      }
    }
    loadShowCase()
  },[]);
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div id="Projects" className="ShowcaseSection">
      <div className="title">
        <h1>Showcase</h1>
      </div>
      <div className="listSection">
        <div className="name">
          <img src="./icons/webIcon.svg" alt="" />
          <p>Webpages</p>
        </div>
        <ul className="list">
          {dataShoeCase.map((list) => {
            return (
              <li
                key={list.id}
                onClick={() => {
                  setSelectedProject(list);
                }}
              >
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
      {selectedProject && (
        <ProjectCard
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Showcase;
