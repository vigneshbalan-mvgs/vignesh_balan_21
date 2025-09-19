import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="bg-dark-card text-dark-text dark:bg-light-card dark:text-light-text py-20 px-4 cursor-vertical-text">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-background dark:bg-light-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-accent dark:text-light-accent mb-2">{experience.role}</h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-dark-text-secondary dark:text-light-text-secondary mb-4">{experience.company} | {experience.year}</p>
              <p className="text-base sm:text-lg lg:text-xl text-dark-text-secondary dark:text-light-text-secondary mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background text-xs sm:text-sm lg:text-base font-semibold px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
