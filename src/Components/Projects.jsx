import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <motion.div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full lg:w-1/4 lg:mr-12">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded w-full"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <a
                  href={project.link}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, techIndex) => {
                  return (
                    <motion.span
                      key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }} // Staggered animation for technologies
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
