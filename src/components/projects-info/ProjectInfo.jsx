import "./projectInfo.css";
import Project from "../project/Project";
import { projectData } from "../../utils/projectData";

const ProjectInfo = () => {
  return (
    <div className="pl">
      <h1 className="pl-title">Project Work</h1>
      <div className="pl-list">
        {projectData.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
