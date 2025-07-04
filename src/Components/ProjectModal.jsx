import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-dark-card dark:bg-light-card rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-text dark:text-light-text text-2xl hover:text-dark-accent dark:hover:text-light-accent"
        >
          <FaTimes />
        </button>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-dark-accent dark:text-light-accent mb-4">{project.title}</h2>

          {images.length > 0 && (
            <div className="relative mb-4">
              <img src={images[currentImageIndex]} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          )}

          <h3 className="text-2xl font-bold text-dark-text dark:text-light-text mb-2">Description</h3>
          <p className="text-lg text-dark-text-secondary dark:text-light-text-secondary mb-4 leading-relaxed">{project.longDescription}</p>

          <h3 className="text-2xl font-bold text-dark-text dark:text-light-text mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background text-sm font-semibold px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300"
            >
              View Project
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;