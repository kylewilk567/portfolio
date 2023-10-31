"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import useHash from "@/hooks/useHash";
import { TypeAnimation } from "react-type-animation";

const PageContent = () => {
  const previousSectionRef = useRef(null);
  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  const handleAnimationStart = () => {
    window.scrollTo(0, 0);
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
        className="w-full min-h-screen bg-white px-10"
        ref={previousSectionRef}
      >
        {previousSection === "" && <Main />}
        {previousSection === "about" && <About />}
        {previousSection === "contact" && <Contact />}
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
          {activeSection === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageContent;
