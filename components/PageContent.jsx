"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";

const PageContent = () => {
  const [activeSection, setActiveSection] = useState("");
  const [previousSection, setPreviousSection] = useState(null);

  const handleHashChange = () => {
    // Get the current hash and update the activeSection state
    const hash = window.location.hash.slice(1); // remove the '#' sign
    setActiveSection((prevActiveSection) => {
      // Use the previous state to calculate the new state
      setPreviousSection(prevActiveSection);
      return hash; // Update activeSection based on the new hash
    });
    setActiveSection(hash);
  };

  useEffect(() => {
    // Listen to changes in the URL hash
    window.addEventListener("hashchange", handleHashChange);
    // Initial check of the hash
    setActiveSection(window.location.hash.slice(1));

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // TODO: Ensure the new content covers fully the old content
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", width: "100%" }}>
        {previousSection === "" && <Main />}
        {previousSection === "about" && <About />}
        {previousSection === "contact" && <Contact />}
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
          {activeSection === "" && <Main />}
          {activeSection === "about" && <About />}
          {activeSection === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageContent;
