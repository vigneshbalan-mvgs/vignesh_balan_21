import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-dark-card dark:bg-light-card text-dark-text dark:text-light-text rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 p-4 sm:p-6 flex items-center justify-between border-b border-dark-accent/20 dark:border-light-accent/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-accent dark:text-light-accent">
            {project.projectName}
          </h2>
          <button
            className="text-dark-text dark:text-light-text text-2xl sm:text-3xl hover:text-red-500 transition-colors"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex-grow p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={`${project.projectName} screenshot`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto max-h-[60vh] sm:max-h-none rounded-xl shadow-lg object-cover mb-4"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-accent dark:text-light-accent mb-3 sm:mb-4 border-b-2 border-dark-accent/50 dark:border-light-accent/50 pb-2">Description</h3>
                {project.descriptions.map((desc, index) => (
                  <p key={index} className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark-accent dark:text-light-accent mb-3 sm:mb-4 border-b-2 border-dark-accent/50 dark:border-light-accent/50 pb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-dark-accent/10 text-dark-accent dark:bg-light-accent/10 dark:text-light-accent text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-dark-accent/20 dark:border-light-accent/20">
          <div className="flex overflow-x-auto gap-3 p-2 w-full sm:w-auto">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.projectName} thumbnail ${index + 1}`}
                className={`w-20 h-14 sm:w-24 sm:h-16 object-cover rounded-lg cursor-pointer transition-all duration-200 ${selectedImage === image ? 'ring-4 ring-dark-accent dark:ring-light-accent scale-105' : 'opacity-60 hover:opacity-100'}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="flex gap-3 sm:gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-accent hover:bg-opacity-80 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 text-xs sm:text-sm"
              >
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 text-xs sm:text-sm"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
