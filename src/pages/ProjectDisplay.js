import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>

      <c>{project.site}</c>
      <p>
        <img src={project.image} alt="Sample project"/>
      </p>
      
      <p>
        <b>Skills:</b>
      </p>
      <p>
        <c>{project.skills}</c>
      </p>

      <p>
        <b>Description:</b> 
      </p>
      <p>
        <c>{project.description}</c>
      </p>

    </div>
  );
}

export default ProjectDisplay;