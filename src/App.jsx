import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec">
      <div className="-z-10 h-full w-full">
        <div className="z-[-2] w-screen bg-neutral-950">
          <div className="container mx-auto px-8">
            {loading ? (
              <div className="flex justify-center items-center min-h-screen bg-neutral-950">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-300"></div>
              </div>
            ) : (
              <div>
                <Navbar />
                <Hero />
                <About />
                <Technologies />
                <Experience />
                <Projects />
                <Contact />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
