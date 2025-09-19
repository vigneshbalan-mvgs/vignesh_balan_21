import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import LoadingSpinner from "./Components/LoadingSpinner";
import { ThemeProvider } from "./Context/ThemeContext";
import Sidebar from "./Components/Sidebar";
import CustomCursor from "./Components/CustomCursor";
import AllProjects from "./Components/AllProjects";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="overflow-x-hidden bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text antialiased selection:bg-dark-accent selection:text-dark-background dark:selection:bg-light-accent dark:selection:text-light-background scrollbar-hide">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Routes>
              <Route path="/" element={
                <>
                  <div className="fixed top-0 -z-10 h-full w-full">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-dark-background dark:bg-light-background"></div>
                  </div>
                  <div className="relative flex flex-col md:flex-row min-h-screen">
                    <Sidebar />
                    <div className="flex-1 ml-0 md:ml-20">
                      <Hero />
                      <About />
                      <Technologies />
                      <Experience />
                      <Projects />
                      <Contact />
                    </div>
                  </div>
                </>
              } />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          )}
          <CustomCursor />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
