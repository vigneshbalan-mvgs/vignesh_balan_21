import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
// import Experience from "./Components/Experience";  
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec bg-cyan-300 selection:text-cyan-300">
      <div className="top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] w-screen bg-neutral-950">
          <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About/>
          <Technologies />
          {/* <Experience /> */}
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
