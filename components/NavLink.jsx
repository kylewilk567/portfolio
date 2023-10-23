"use client";
import useHash from "@/hooks/useHash";
import React, { useState } from "react";

const NavLink = ({ link, backgroundColor, fillColor }) => {
  link.icon.props.className = fillColor;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  const getStyles = (currentSection) => {
    if (currentSection === activeSection || isHovered)
      return "block pl-2 text-base no-underline text-gray-500 hover:text-gray-400 font-bold"; // Note: Left padding should be equal to div width for active section
    else
      return "block pl-4 text-base no-underline text-gray-500 hover:text-gray-400";
  };

  return (
    <>
      <div
        className="flex items-center h-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {(link.id === activeSection || isHovered) && (
          <div className={`w-1 h-full z-20 ${backgroundColor}`} />
        )}

        <a className={getStyles(link.id)} href={`#${link.id}`}>
          <span className="flex items-center">
            {link.icon}
            {link.title}
          </span>
        </a>
      </div>
    </>
  );
};

export default NavLink;
