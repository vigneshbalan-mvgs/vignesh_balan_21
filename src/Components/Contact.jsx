import React from "react";
import { CONTACT } from "../constants";
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

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="bg-dark-card text-dark-text dark:bg-light-card dark:text-light-text py-20 cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-lg mx-auto text-center">
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-text-secondary dark:text-light-text-secondary mb-8"
          >
            I'm currently available for freelance work and open to discussing new projects. Feel free to reach out to me.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="bg-dark-accent text-dark-background dark:bg-light-accent dark:text-light-background font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300"
            >
              Email Me
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-8 text-dark-text-secondary dark:text-light-text-secondary"
          >
            <p>Phone: {CONTACT.phoneNo}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;