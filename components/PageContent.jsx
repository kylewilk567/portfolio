"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import useHash from "@/hooks/useHash";
import { TypeAnimation } from "react-type-animation";

const PageContent = () => {
  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  return (
    <>
      <div className="absolute w-full h-full bg-white px-10">
        {previousSection === "" && <Main />}
        {previousSection === "about" && <About />}
        {previousSection === "contact" && <Contact />}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="absolute w-full h-full brand-bg-color px-10"
          key={activeSection}
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
    </>
  );
};

export default PageContent;
