"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import useHash from "@/hooks/useHash";
import Projects from "./Projects";
import Pathfinding from "./Pathfinding";
import MTouch from "./MTouch";
import Glove from "./Glove";
import Portfolio from "./Portfolio";
import EagleProject from "./EagleProject";

const PageContent = () => {
  let { currentHash: activeSection } = useHash();
  activeSection = activeSection.slice(1);

  return (
    <div className="w-full min-h-screen brand-bg-color px-10">
      {activeSection === "" && <Main />}
      {activeSection === "about" && <About />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "pathfinding" && <Pathfinding />}
      {activeSection === "mtouch" && <MTouch />}
      {activeSection === "eagle-project" && <EagleProject />}
      {activeSection === "glove" && <Glove />}
      {activeSection === "portfolio" && <Portfolio />}
    </div>
  );
};

export default PageContent;
