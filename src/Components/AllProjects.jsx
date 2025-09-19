import React, { useState } from "react";
import projects from "../Projects/projects.json";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          All Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark-card dark:bg-light-card rounded-lg shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(project)}
            >
              <div
                style={{ backgroundImage: `url(${project.images[0]})` }}
                className="w-full h-56 object-cover project-card-bg"
              ></div>
              <div className="p-4">
                <h4 className="text-xl font-bold text-dark-accent dark:text-light-accent mb-2">{project.projectName}</h4>
                <p className="text-sm text-dark-text-secondary dark:text-light-text-secondary mb-4 h-20 overflow-hidden project-description">{project.descriptions[0]}</p>
              </div>
              <div className="p-4 bg-dark-background dark:bg-light-background">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background text-xs font-semibold px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full bg-dark-accent hover:bg-dark-accent-hover text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="bg-dark-accent hover:bg-dark-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
            Back to Home
          </Link>
        </div>
      </div>
      <ProjectDetails project={selectedProject} onClose={closeModal} />
    </div>
  );
};

export default AllProjects;
