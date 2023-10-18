"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";

const PageContent = ({ activeSection, previousSection }) => {
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
