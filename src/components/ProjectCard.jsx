function ProjectCard({ project, onClose }) {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="titleTap">
          <div className="sectionName">
            <img className="web" src={"./icons/IConsTaps.png"} alt="" />
            <h3>{project.name}</h3>
          </div>
          <button className="closeBtn" onClick={onClose}>
            <img className="close" src={"./icons/closeIcon.png"} alt="" />
          </button>
        </div>
        <div className="fogmaOrWeb">
          <a
            href={project.liveUrl === 'none' ? project.github : project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src={'./icons/webPageLinkIcon.png'} alt="" />
            <span>Web Page</span>
          </a>
          <a href={project.designFigma}><img src={'./icons/designFigmaLinkIcon.png'} alt="" /><span>design figma</span> </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
