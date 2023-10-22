import React from "react";
import Image from "next/image";
import { navLinks, backgroundColorMap, fillColorMap } from "@/constants";
import headshot from "@/public/assets/headshot.jpg";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className="h-full w-44 fixed z-10 top-0 left-0 bg-[#FAF9FF] overflow-x-hidden pt-6">
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

      {navLinks.map((link) => (
        <NavLink
          key={link}
          link={link}
          backgroundColor={backgroundColorMap[link.color]}
          fillColor={fillColorMap[link.color]}
        />
      ))}
    </div>
  );
};

export default Nav;
