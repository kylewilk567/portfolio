"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";

const PageContent = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [previousSection, setPreviousSection] = useState(null);

  useEffect(() => {
    // Listen to changes in the URL hash
    window.addEventListener("hashchange", handleHashChange);
    // Initial check of the hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleHashChange = () => {
    // Get the current hash and update the activeSection state
    const hash = window.location.hash.slice(1); // remove the '#' sign
    setActiveSection(hash);
  };

  // TODO: Track previous state to be used to select existing content before sliding over
  // TODO: Ensure the new content covers fully the old content
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", width: "100%" }}>
        <About />
        <Contact />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          style={{ position: "absolute", width: "100%" }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          //   exit={{ x: '-100%' }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {activeSection === "about" && <About />}
          {activeSection === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageContent;
