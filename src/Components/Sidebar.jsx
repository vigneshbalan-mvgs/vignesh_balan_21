import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Backdrop for mobile overlay */}
      {!isDesktop && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={handleToggle}
        />
      )}

      <button
        onClick={handleToggle}
        className="fixed top-4 left-4 z-50 text-2xl text-dark-text dark:text-light-text md:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <motion.div
        animate={isDesktop ? { x: 0 } : isOpen ? { x: 0 } : { x: "-100%" }}
        initial={isDesktop ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 h-screen
          ${isDesktop
            ? "w-20 bg-dark-card dark:bg-light-card"
            : "w-fit bg-dark-background text-light-text dark:bg-dark-card dark:text-dark-text px-6 py-8 backdrop-blur-md"
          }
          shadow-lg z-40 flex flex-col justify-between
          md:w-20 md:items-start md:px-4`}
      >
        <nav className="flex flex-col space-y-8 flex-grow mt-8 mx-auto w-full items-center">
          {/* Use theme-aware icon color classes for mobile */}
          <motion.a
            href="#about"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaUser />
          </motion.a>
          <motion.a
            href="#technologies"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaLaptopCode />
          </motion.a>
          <motion.a
            href="#experience"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaBriefcase />
          </motion.a>
          <motion.a
            href="#projects"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaFolderOpen />
          </motion.a>
          <motion.a
            href="#contact"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1D5t0NU9S64n6Jf1HLLmtPAxqqWmEw19d"
            download="VIGNESH_BALAN.pdf"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
            onClick={handleToggle}
          >
            <FaFileDownload />
          </motion.a>
        </nav>
        <div className="flex flex-col space-y-4 text-2xl mb-8 mx-auto w-full items-center">
          <motion.button
            onClick={toggleTheme}
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </motion.button>
          <motion.a
            href="mailto:vigneshbalanmvgs2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
          >
            <IoMdMail />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vignesh-balan-mvgs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/vigneshbalan-mvgs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://x.com/Vigneshmvgs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-2xl text-dark-accent dark:text-light-accent"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            }}
          >
            <FaSquareXTwitter />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
