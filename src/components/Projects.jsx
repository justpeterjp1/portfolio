import React, { useEffect, useRef, useState } from 'react';
import projectsData from "../resources/ProjectsData";
import { Link } from "react-router-dom";
import '../css/projects.css';

const Projects = () => {



  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card animate-card animate-on-scroll delay-3">
            <div className='card-inner'>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content animate-card animate-on-scroll delay-3">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <Link to={`/project/${project.id}`} className="view-btn">View Details</Link>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
