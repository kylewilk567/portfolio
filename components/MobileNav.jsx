"use client";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import ThemeIcon from "./ThemeIcon";

const MobileNav = ({ navLinks, backgroundColorMap, fillColorMap }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      linksRef.current &&
      !linksRef.current.contains(e.target)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="sm:hidden brand-nav-bg-color flex h-12 fixed top-0 left-0 w-full z-50"
      ref={navRef}
    >
      <div className="flex items-center justify-between w-full mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="24"
          width="24"
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer icon-btn"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <ThemeIcon iconSize={24} />
      </div>
      {/* Opened Navbar */}
      <div
        ref={linksRef}
        className={`${
          toggle ? "block" : "hidden"
        } absolute w-full h-screen top-12 left-0 brand-nav-bg-color sm:hidden z-10`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            link={link}
            backgroundColor={backgroundColorMap[link.color]}
            fillColor={fillColorMap[link.color]}
            onClick={() => setToggle(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
