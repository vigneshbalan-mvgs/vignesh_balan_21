import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I'm a freelance Tech Lead and Full-Stack Developer with a passion for building scalable and high-performance applications. With expertise in the MERN stack and React Native, I have a proven track record of leading development teams, architecting robust systems, and optimizing development workflows. I am proficient in a variety of technologies including Node.js, Express, MongoDB, and modern CI/CD pipelines.`;

export const ABOUT_TEXT1 = `I am a freelance Tech Lead and Full-Stack Developer, specializing in the development of scalable applications using the MERN stack and React Native. I have a strong background in software architecture, ensuring our applications are scalable, performant, and maintainable. I am passionate about mentoring junior developers and fostering a culture of high-quality code.`;

export const ABOUT_TEXT2 = `My experience includes building cross-platform mobile applications, integrating RESTful APIs, and focusing on performance tuning. I have successfully delivered several projects, including a real-time social platform for sports enthusiasts and a comprehensive production tracking tool. I am skilled in using tools like Git, GitHub Actions, and PM2 to streamline development and deployment processes.`;

export const EXPERIENCES = [
  {
    year: "Apr 2025 – June 2025",
    role: "Tech Lead",
    company: "CodeShell Technologies, Madurai",
    description: `Led multiple full-stack projects using the MERN stack and React Native, delivering scalable, high-performance applications. Made architectural decisions that enhanced scalability, performance, and maintainability. Mentored junior developers and conducted regular code reviews to ensure clean, consistent code quality. Streamlined CI/CD pipelines using GitHub Actions and PM2 for faster and more reliable deployments.`,
    technologies: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Git", "GitHub Actions", "PM2"],
  },
  {
    year: "Sep 2024 – Apr 2025",
    role: "React Native Developer",
    company: "CodeShell Technologies, Madurai",
    description: `Built responsive cross-platform mobile applications using React Native and Redux. Integrated RESTful APIs, collaborated with design and backend teams to meet product requirements. Focused on performance tuning, debugging, and improving app usability and responsiveness.`,
    technologies: ["React Native", "Redux", "JavaScript", "REST APIs"],
  },
];

export const TECHNOLOGIES = [
  {
    title: "Languages",
    items: [
      { icon: "SiJavascript", name: "JavaScript", color: "#F7DF1E" },
      { icon: "SiTypescript", name: "TypeScript", color: "#3178C6" },
      { icon: "SiCplusplus", name: "C++", color: "#00599C" },
      { icon: "FaJava", name: "Java", color: "#007396" },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      { icon: "RiReactjsLine", name: "React.js", color: "#61DAFB" },
      { icon: "RiReactjsLine", name: "React Native", color: "#61DAFB" },
      { icon: "FaNodeJs", name: "Node.js", color: "#339933" },
      { icon: "SiExpress", name: "Express", color: "#000000" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: "SiMongodb", name: "MongoDB", color: "#47A248" },
      { icon: "SiMysql", name: "MySQL", color: "#4479A1" },
      { icon: "SiSqlite", name: "SQLite", color: "#003B57" },
      { icon: "SiPostgresql", name: "PostgreSQL", color: "#336791" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { icon: "FaGitAlt", name: "Git", color: "#F05032" },
      { icon: "FaGithub", name: "GitHub", color: "#181717" },
      { icon: "SiPm2", name: "PM2", color: "#2B037A" },
      { icon: "SiNginx", name: "Nginx", color: "#009639" },
      { icon: "FaLinux", name: "Linux", color: "#FCC624" },
      { icon: "GrArchlinux", name: "Arch/Ubuntu", color: "#1793D1" },
    ],
  },
  {
    title: "Design & Media",
    items: [
      { icon: "FaFigma", name: "Figma", color: "#F24E1E" },
      { icon: "SiGimp", name: "GIMP", color: "#5C5547" },
      { icon: "SiAdobeillustrator", name: "Adobe Illustrator", color: "#FF9A00" },
      { icon: "SiDavinciresolve", name: "DaVinci Resolve", color: "#000000" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Sportsperson Platform (MERN Stack)",
    link: "#", // Replace with real URL
    image: project2,
    description:
      "A real-time platform for sports enthusiasts with chat, match scheduling, location features, and user feeds. Built using the MERN stack and Socket.IO.",
    longDescription:
      "This comprehensive platform was designed for sports enthusiasts to connect, organize events, and share their experiences in real-time. Key features include live chat functionality powered by Socket.IO, advanced match scheduling with integrated calendar views, and location-based services to help users find nearby games or training sessions. The user interface was developed with a mobile-first approach, ensuring a seamless experience across devices. The backend leverages the MERN stack for robust data management and real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express"],
    gallery: [project2, project1, project3], // Placeholder images
  },
  {
    title: "Adhimanagala – Production Tracker (MERN Stack)",
    link: "#", // Replace with real URL
    image: project3,
    description:
      "An internal tool for production and inventory tracking with live dashboards and analytics. Focused on performance, usability, and accuracy.",
    longDescription:
      "Adhimanagala is an internal production and inventory management system built to streamline operations and provide real-time insights. It features live dashboards that display key performance indicators and analytics, enabling quick decision-making. The system includes robust modules for tracking production cycles, managing inventory levels, and generating detailed reports. Developed with a focus on performance, usability, and data accuracy, it significantly improved operational efficiency for the client.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    gallery: [project3, project2, project1], // Placeholder images
  },
  {
    title: "Shopping Application (MERN Stack)",
    link: "https://shoppper101.netlify.app/",
    image: project1,
    description:
      "A full-featured e-commerce platform. Developed key features like product listings, cart system, authentication, and payment gateway. Designed a mobile-optimized responsive interface to enhance the user experience.",
    longDescription:
      "This is a complete end-to-end e-commerce application designed to provide a seamless shopping experience. It includes essential features such as dynamic product listings, a comprehensive shopping cart system, secure user authentication, and integrated payment gateway options. The application boasts a highly responsive user interface, optimized for mobile-first users, ensuring accessibility and usability across various devices. The MERN stack provides a scalable and efficient foundation for all functionalities.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    gallery: [project1, project3, project2], // Placeholder images
  },
];

export const CONTACT = {
  phoneNo: "+91 7092601683",
  email: "vigneshbalanmvgs2003@gmail.com",
  github: "https://github.com/vigneshbalan-mvgs",
  linkedin: "https://www.linkedin.com/in/vignesh-balan-mvgs",
  twitter: "https://x.com/Vigneshmvgs",
};
