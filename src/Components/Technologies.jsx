import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiPm2,
  SiNginx,
  SiGimp,
  SiAdobeillustrator,
  SiDavinciresolve,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants";

const iconComponents = {
  RiReactjsLine,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinux,
  FaJava,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiPm2,
  SiNginx,
  SiGimp,
  SiAdobeillustrator,
  SiDavinciresolve,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  GrArchlinux,
};

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
  hidden: { y: 20, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const Technologies = () => {
  return (
    <motion.div
      id="technologies"
      className="bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text py-20 px-4 cursor-cell"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Technologies
        </motion.h2>
        <div className="space-y-16">
          {TECHNOLOGIES.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={containerVariants}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-dark-accent dark:text-light-accent">
                {category.title}
              </h3>
              <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 justify-start sm:justify-center items-center py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory pl-4 pr-4 sm:pl-0 sm:pr-0">
                {category.items.map((tech, techIndex) => {
                  const IconComponent = iconComponents[tech.icon];
                  return (
                    <motion.div
                      key={techIndex}
                      variants={itemVariants}
                      className="bg-dark-card dark:bg-light-card p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 min-h-[100px] w-[100px] flex-shrink-0 snap-center"
                    >
                      {IconComponent && (
                        <IconComponent
                          className="text-4xl sm:text-5xl lg:text-6xl"
                          style={{ color: tech.color }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
