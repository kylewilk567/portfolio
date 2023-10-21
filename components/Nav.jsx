import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import headshot from "@/public/assets/headshot.jpg";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className="h-full w-32 fixed z-10 top-0 left-0 bg-sky-300 overflow-x-hidden pt-20">
      <div className="border-b-2 border-neutral-100">
        <Image
          className="rounded-full"
          src={headshot}
          alt="My Headshot"
          width={100}
        />
        <div>
          <h2>Kyle Wilkinson</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>

      {navLinks.map((link) => (
        <NavLink key={link} link={link} />
      ))}
    </div>
  );
};

export default Nav;
