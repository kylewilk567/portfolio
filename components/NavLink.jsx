"use client";
import useHash from "@/hooks/useHash";
import React from "react";

const NavLink = ({ link }) => {
  let { currentHash: activeSection, previousHash: previousSection } = useHash();
  activeSection = activeSection.slice(1);
  previousSection = previousSection.slice(1);

  const getStyles = (currentSection) => {
    if (currentSection === activeSection)
      return "block p-2 pl-2 text-base no-underline text-gray-500 hover:text-white font-bold"; // Note: Left padding should be equal to div width for active section
    else
      return "block p-2 pl-4 text-base no-underline text-gray-500 hover:text-white";
  };

  const getLink = (nav) => {
    if (nav.id === activeSection) {
      return (
        <div className="flex items-center">
          <div className="w-2 h-10 flex-shrink-0 z-20">
            <div className="bg-slate-600 w-full h-full"></div>
          </div>
          <a className={getStyles(nav.id)} href={`#${nav.id}`}>
            {nav.title}
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a className={getStyles(nav.id)} href={`#${nav.id}`}>
            {nav.title}
          </a>
        </div>
      );
    }
  };

  return <>{getLink(link)}</>;
};

export default NavLink;
