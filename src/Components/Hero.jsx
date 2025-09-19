import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
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
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0, scale: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div id="hero" className="bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text py-20 cursor-grab">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Vignesh Balan
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl lg:text-4xl text-dark-accent dark:text-light-accent mb-8"
            >
              Application Developer
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg lg:text-xl text-dark-text-secondary dark:text-light-text-secondary mb-8"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="#contact"
              variants={textVariants}
              className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-opacity-80 transition duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <img
                src={profilePic}
                alt="Vignesh Balan"
                className="rounded-full shadow-lg mx-auto w-80 h-80 object-cover"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dark-accent dark:border-light-accent rounded-full opacity-50"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
