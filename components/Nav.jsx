import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import headshot from "@/public/assets/headshot.jpg";

const Nav = ({ activeSection, previousSection }) => {
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

  return (
    <div className="h-full w-32 fixed z-10 top-0 left-0 bg-sky-300 overflow-x-hidden pt-20">
      {navLinks.map((link) => getLink(link))}
    </div>
  );
};

export default Nav;
