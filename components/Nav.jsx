import React from "react";
import Image from "next/image";
import { navLinks, backgroundColorMap, fillColorMap } from "@/constants";
import headshot from "@/public/assets/headshot.jpg";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <>
      {/* // Mobile Navigation */}
      <div className="sm:hidden flex"></div>

      {/* // PC navigation */}
      <div className="h-full w-44 fixed z-10 top-0 left-0 bg-[#FAF9FF] overflow-x-hidden pt-6 hidden sm:block">
        <div className="border-b-2 pb-2 border-[#DFD9FF] text-center">
          <div className="pb-6">
            <Image
              className="rounded-full mx-auto"
              src={headshot}
              alt="My Headshot"
              width={96}
            />
          </div>

          <div>
            <p className="font-medium text-base">Kyle Wilkinson</p>
            <p className="font-normal text-xs">Software Engineer</p>
          </div>
        </div>

        <div className="pt-6">
          {navLinks.map((link) => (
            <NavLink
              key={link}
              link={link}
              backgroundColor={backgroundColorMap[link.color]}
              fillColor={fillColorMap[link.color]}
            />
          ))}
        </div>
        {/* TODO: Center the items in this div */}
        <div className="absolute bottom-8 flex mx-4">
          <a href="https://www.linkedin.com/in/kyle-wilkinson7/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="24"
              width="24"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
