"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

const SitePage = () => {
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

  return (
    <>
      <Nav activeSection={activeSection} previousSection={previousSection} />
      <div className="ml-48 text-2xl px-10">
        <PageContent
          activeSection={activeSection}
          previousSection={previousSection}
        />
      </div>
    </>
  );
};

export default SitePage;
