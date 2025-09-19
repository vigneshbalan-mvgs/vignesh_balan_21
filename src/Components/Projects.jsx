import React, { useState } from "react";
import projects from "../Projects/projects.json";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const appProjects = projects.filter((p) => p.type === "app");
  const websiteProjects = projects.filter((p) => p.type === "website");

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
          Projects
        </motion.h2>

        {/* App Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-dark-accent dark:text-light-accent">
            Mobile Applications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {appProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-card dark:bg-light-card rounded-lg shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(project)}
              >
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dark-accent dark:text-light-accent mb-2">{project.projectName}</h4>
                  <p className="text-sm text-dark-text-secondary dark:text-light-text-secondary mb-4 h-20 overflow-hidden">{project.descriptions[0]}</p>
                </div>
                <img
                  src={project.images[0]}
                  alt={project.projectName}
                  className="w-full h-auto object-contain px-4"
                />
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
        </div>

        {/* Website Projects Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-dark-accent dark:text-light-accent">
            Websites
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {websiteProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-card dark:bg-light-card rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.projectName}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-dark-accent dark:text-light-accent mb-2">{project.projectName}</h4>
                  <p className="text-dark-text-secondary dark:text-light-text-secondary mb-4">{project.descriptions[0]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-dark-background text-dark-accent dark:bg-light-background dark:text-light-accent text-sm font-semibold px-2 py-1 rounded">
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
        </div>
      </div>
      <ProjectDetails project={selectedProject} onClose={closeModal} />
    </div>
  );
};

export default Projects;
