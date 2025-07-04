import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const getThemeColor = (theme) => {
  // Adjust these colors as per your theme palette
  return theme === "dark" ?  "#0077ff": "#00ff99";
};

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [bubbles, setBubbles] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef(null);
  const lastBubbleTime = useRef(0);
  const lastSparkleTime = useRef(0);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const [currentSpeed, setCurrentSpeed] = useState(0);

  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );

  useEffect(() => {
    const handleStorage = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };
    window.addEventListener("storage", handleStorage);
    // Optionally listen for class changes if theme is toggled via class
    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem("theme") || "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("storage", handleStorage);
      observer.disconnect();
    };
  }, []);

  const cursorColor = getThemeColor(theme);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      return; // Don't render on touch devices
    }

    const handleMouseMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      const dx = event.clientX - lastMousePosition.current.x;
      const dy = event.clientY - lastMousePosition.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy); // Calculate speed
      setCurrentSpeed(speed);

      setIsMoving(speed > 1); // Consider moving if speed is greater than 1 pixel

      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100); // Set isMoving to false after 100ms of no movement

      lastMousePosition.current = { x: event.clientX, y: event.clientY };

      const now = Date.now();
      const randomBubbleInterval = Math.random() * (100 - 50) + 50; // Random interval between 50ms and 100ms
      const randomSparkleInterval = Math.random() * (150 - 80) + 80; // Random interval between 80ms and 150ms

      if (now - lastBubbleTime.current > randomBubbleInterval) {
        const numBubbles = Math.floor(Math.random() * 3) + 1; // 1 to 3 bubbles
        const newBubbles = Array.from({ length: numBubbles }).map(() => ({
          id: Date.now() + Math.random(),
          x: cursorXSpring.get() + (Math.random() * 60 - 30),
          y: cursorYSpring.get() + (Math.random() * 60 - 30),
          initialScale: 0.5 + Math.random() * 0.7,
        }));
        setBubbles((prevBubbles) => [
          ...prevBubbles.slice(
            Math.max(0, prevBubbles.length - (5 - numBubbles)),
          ), // Adjust slice based on new bubbles
          ...newBubbles,
        ]);
        lastBubbleTime.current = now;
      }

      if (now - lastSparkleTime.current > randomSparkleInterval) {
        const numSparkles = Math.floor(Math.random() * 5) + 1; // 1 to 5 sparkles
        const newSparkles = Array.from({ length: numSparkles }).map(() => ({
          id: Date.now() + Math.random(),
          x: event.clientX + (Math.random() * 30 - 15),
          y: event.clientY + (Math.random() * 30 - 15),
          initialScale: 0.3 + Math.random() * 0.5,
        }));
        setSparkles((prevSparkles) => [
          ...prevSparkles.slice(
            Math.max(0, prevSparkles.length - (10 - numSparkles)),
          ), // Adjust slice
          ...newSparkles,
        ]);
        lastSparkleTime.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Clean up bubbles and sparkles after their animation
  useEffect(() => {
    if (bubbles.length > 0) {
      const timer = setTimeout(() => {
        setBubbles((prevBubbles) => prevBubbles.slice(1));
      }, 1000); // Remove after 1 second (bubble animation duration)
      return () => clearTimeout(timer);
    }
  }, [bubbles]);

  useEffect(() => {
    if (sparkles.length > 0) {
      const timer = setTimeout(() => {
        setSparkles((prevSparkles) => prevSparkles.slice(1));
      }, 800); // Remove after 0.8 seconds (sparkle animation duration)
      return () => clearTimeout(timer);
    }
  }, [sparkles]);

  // Only render on non-touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  const mainCursorStyle = {
    translateX: cursorXSpring,
    translateY: cursorYSpring,
    filter: `blur(${isMoving ? Math.min(10, currentSpeed * 0.5) : 0}px)`,
    backgroundColor: cursorColor,
    scale: isMoving ? Math.min(1.5, 1 + currentSpeed * 0.05) : 0.8,
    opacity: isMoving ? 0.8 : 1,
  };

  const innerCursorStyle = {
    translateX: cursorXSpring,
    translateY: cursorYSpring,
    backgroundColor: cursorColor,
    scale: isMoving ? 0.5 : 0.2,
    opacity: isMoving ? 0.5 : 1,
  };

  const bubbleVariants = {
    animate: {
      opacity: 0,
      y: -150, // Move further upwards
      scale: 0,
      transition: { duration: 1, ease: "easeOut" }, // 1-second animation
    },
  };

  const sparkleVariants = {
    animate: {
      opacity: 0,
      y: -40,
      scale: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-[-1] w-5 h-5 rounded-full pointer-events-none z-[9999]"
        style={mainCursorStyle}
      />
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998]"
        style={innerCursorStyle}
      />
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998]"
          style={{ backgroundColor: cursorColor }}
          initial={{
            x: bubble.x - 8,
            y: bubble.y - 8,
            opacity: 1,
            scale: bubble.initialScale,
          }}
          animate="animate"
          variants={bubbleVariants}
        />
      ))}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
          style={{ backgroundColor: cursorColor }}
          initial={{
            x: sparkle.x - 4,
            y: sparkle.y - 4,
            opacity: 1,
            scale: sparkle.initialScale,
          }}
          animate="animate"
          variants={sparkleVariants}
        />
      ))}
    </>
  );
};

export default CustomCursor;
