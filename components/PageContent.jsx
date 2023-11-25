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

const PageContent = () => {
  const previousSectionRef = useRef(null);
  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  const handleAnimationStart = () => {
    window.scrollTo(0, 0);
    // if (previousSectionRef.current) {
    //   if (previousSectionRef.current.style)
    //     previousSectionRef.current.style.display = "block";
    //   else previousSectionRef.current.style = { display: "block" };
    // }
  };

  const handleAnimationComplete = () => {
    if (previousSectionRef.current) {
      if (previousSectionRef.current.style)
        previousSectionRef.current.style.display = "none";
      else previousSectionRef.current.style = { display: "none" };
    }
  };

  return (
    <>
      <div
        id="previous"
        className="w-full min-h-screen brand-bg-color px-10"
        ref={previousSectionRef}
      >
        {previousSection === "" && <Main />}
        {previousSection === "about" && <About />}
        {previousSection === "projects" && <Projects />}
        {previousSection === "contact" && <Contact />}
        {previousSection === "pathfinding" && <Pathfinding />}
        {previousSection === "mtouch" && <MTouch />}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="w-full min-h-screen brand-bg-color px-10"
          key={activeSection}
          initial={{ x: "100%" }}
          // whileInView={{
          //   x: 0,
          //   y: 0,
          //   transition: {
          //     type: "tween",
          //     delay: 0,
          //     duration: 0.5,
          //     ease: "easeOut",
          //   },
          // }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {activeSection === "" && <Main />}
          {activeSection === "about" && <About />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
          {activeSection === "pathfinding" && <Pathfinding />}
          {activeSection === "mtouch" && <MTouch />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageContent;
