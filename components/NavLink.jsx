"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavLink = ({ link, backgroundColor, fillColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Clone the icon element with updated className (React 19 requires this instead of mutation)
  const iconClassName = link.icon.props.className
    ? `${link.icon.props.className} ${fillColor}`.includes(fillColor)
      ? link.icon.props.className
      : `${link.icon.props.className} ${fillColor}`
    : fillColor;
  
  const iconWithColor = React.cloneElement(link.icon, { className: iconClassName });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const pathname = usePathname();
  // link.id is "" for home, "about", "projects", etc.
  const href = link.id === "" ? "/" : `/${link.id}`;
  const isActive = pathname === href;

  const getStyles = () => {
    // Set defaults
    let linkStyles =
      "w-full h-full flex items-center text-base no-underline brand-nav-text-color nav-btn";

    // Note: Left padding should be equal to div width for active section
    if (isActive || isHovered) linkStyles += " pl-2";
    else linkStyles += " pl-3";

    if (isActive) linkStyles += " font-bold";

    return linkStyles;
  };

  return (
    <>
      <div
        className="flex items-center h-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {(isActive || isHovered) && (
          <div className={`w-1 h-full z-20 ${backgroundColor}`} />
        )}

        <Link
          className={getStyles()}
          href={href}
          onClick={onClick ? onClick : null}
        >
          <span className="flex items-center gap-2">
            {iconWithColor}
            {link.title}
          </span>
        </Link>
      </div>
    </>
  );
};

export default NavLink;