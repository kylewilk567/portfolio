import React from "react";

const Nav = () => {
  return (
    <div className="h-full w-32 fixed z-10 top-0 left-0 bg-sky-300 overflow-x-hidden pt-20">
      <a
        className="block p-2 pl-4 text-base no-underline text-gray-500 hover:text-white"
        href="#"
      >
        Home
      </a>
      <a
        className="block p-2 pl-4 text-base no-underline text-gray-500 hover:text-white"
        href="#about"
      >
        About
      </a>
      <a
        className="block p-2 pl-4 text-base no-underline text-gray-500 hover:text-white"
        href="#projects"
      >
        Clients
      </a>
      <a
        className="block p-2 pl-4 text-base no-underline text-gray-500 hover:text-white"
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
};

export default Nav;
