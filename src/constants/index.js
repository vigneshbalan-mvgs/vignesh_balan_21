import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I'm a Tech Lead at CodeShell Technologies, experienced in building scalable full-stack and cross-platform applications using the MERN stack and React Native. I lead development teams, design system architectures, and streamline CI/CD workflows using tools like GitHub Actions and PM2. I also work comfortably in Linux environments, focusing on performance, reliability, and clean code.`;

export const ABOUT_TEXT1 = `I'm Vignesh Balan M, currently working as a Tech Lead at CodeShell Technologies in Madurai. I specialize in developing scalable applications using React Native and the MERN stack, and I lead full-cycle product development—from planning and architecture to deployment. I also have hands-on experience with DevOps tools, GitHub automation, and Linux-based development environments.`;

export const ABOUT_TEXT2 = `In my role, I’ve led multiple production-grade projects including a real-time sportsperson platform, an inventory management system, and a complete e-commerce solution. I prioritize clean code, clear documentation, and team collaboration. Whether it's mentoring developers, designing systems, or improving pipelines, I focus on creating reliable and maintainable products.`;

export const EXPERIENCES = [
  {
    year: "Apr 2025 – Present",
    role: "Tech Lead",
    company: "CodeShell Technologies, Madurai",
    description: `Led full-stack projects using MERN and React Native, made architectural decisions for scalability, mentored junior devs, and optimized CI/CD with GitHub Actions and PM2.`,
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub Actions",
      "PM2",
    ],
  },
  {
    year: "Sep 2024 – Apr 2025",
    role: "React Native Developer",
    company: "CodeShell Technologies, Madurai",
    description: `Developed cross-platform apps with React Native and Redux, integrated REST APIs, and optimized app performance and responsiveness.`,
    technologies: [
      "React Native",
      "Redux",
      "REST APIs",
      "SQLite",
      "MongoDB",
      "Node.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Sportsperson Platform",
    link: "#", // Replace with real URL
    image: project2,
    description:
      "A real-time platform for sports enthusiasts with chat, match scheduling, location features, and user feeds. Built using the MERN stack and Socket.IO.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
  },
  {
    title: "Adhimanagala – Production Tracker",
    link: "#", // Replace with real URL
    image: project3,
    description:
      "An internal tool for production and inventory tracking with live dashboards and analytics. Focused on performance, usability, and accuracy.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
  },
  {
    title: "Shopping Application",
    link: "https://shoppper101.netlify.app/",
    image: project1,
    description:
      "An end-to-end e-commerce app with product listings, cart, login, and payment integration. Built with responsive UI for mobile-first users.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7092601683",
  email: "vigneshbalanmvgs2003@gmail.com",
  github: "https://github.com/vigneshbalan-mvgs",
  linkedin: "https://www.linkedin.com/in/vignesh-balan-mvgs",
  twitter: "https://x.com/Vigneshmvgs",
};
