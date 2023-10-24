"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeIcon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const mySetTheme = (newValue) => {
    console.log("new value");
    console.log(newValue);
    setTheme(newValue);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <p>{theme}</p>
      <select value={theme} onChange={(e) => mySetTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="stars">Stars</option>
      </select>
    </div>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 384 512"
    //   height="24"
    //   width="24"
    //   className="fill-gray-500 hover:fill-gray-400"
    // >
    //   <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
    // </svg>
  );
};

export default ThemeIcon;
