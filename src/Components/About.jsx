import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT1, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { x: -100, opacity: 0, scale: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div id="about" className="bg-dark-card text-dark-text dark:bg-light-card dark:text-light-text py-20 cursor-text">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={imageVariants}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <img
              src={aboutImg}
              alt="About Me"
              className="rounded-lg shadow-lg mx-auto w-full max-w-md"
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="md:w-1/2 md:pl-12"
          >
            <p className="text-base sm:text-lg lg:text-xl text-dark-text-secondary dark:text-light-text-secondary mb-6">
              {ABOUT_TEXT1}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-dark-text-secondary dark:text-light-text-secondary">
              {ABOUT_TEXT2}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
