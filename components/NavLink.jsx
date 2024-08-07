"use client";
import useHash from "@/hooks/useHash";
import React, { useState } from "react";

const NavLink = ({ link, backgroundColor, fillColor, onClick }) => {
  if (!link.icon.props.className) {
    link.icon.props.className = fillColor;
  } else if (!link.icon.props.className.includes(fillColor)) {
    link.icon.props.className += ` ${fillColor}`;
  }

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
    // Set defaults
    let linkStyles =
      "w-full h-full flex items-center text-base no-underline brand-nav-text-color nav-btn";

    // Note: Left padding should be equal to div width for active section
    if (currentSection === activeSection || isHovered) linkStyles += " pl-2";
    else linkStyles += " pl-3";

    if (currentSection === activeSection) linkStyles += " font-bold";

    return linkStyles;
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

        <a
          className={getStyles(link.id)}
          href={`#${link.id}`}
          onClick={onClick ? onClick : null}
        >
          <span className="flex items-center gap-2">
            {link.icon}
            {link.title}
          </span>
        </a>
      </div>
    </>
  );
};

export default NavLink;
