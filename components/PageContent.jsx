"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import useHash from "@/hooks/useHash";

// TODO: How to add images?? - images are retrieved on the serverside, but we only know what images to retrieve based on clientside path. It seems we need to load all images all the time due to this.

const PageContent = () => {
  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  return (
    <div style={{ position: "relative" }}>
      <div className="bg-white" style={{ position: "absolute", width: "100%" }}>
        {previousSection === "" && <Main />}
        {previousSection === "about" && <About />}
        {previousSection === "contact" && <Contact />}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="bg-white"
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
