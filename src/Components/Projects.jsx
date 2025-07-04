import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text py-20 px-2 sm:px-4 cursor-zoom-in">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark-card dark:bg-light-card rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-accent dark:text-light-accent mb-2">{project.title}</h3>
                <p className="text-dark-text-secondary dark:text-light-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-dark-background text-dark-accent dark:bg-light-background dark:text-light-accent text-sm font-semibold mr-2 mb-2 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;
