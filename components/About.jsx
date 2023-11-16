"use client";
import React from "react";
import Header from "./Header";
import headshot from "@/public/assets/headshot.jpg";
import Image from "next/image";
import CircularProgress from "./CircularProgress";

const About = () => {
  return (
    <>
      <div className="mx-auto">
        <Header title="About Me" />

        <CircularProgress
          imageSrc={headshot}
          text="Loading..."
          progress={75} // Example: 75% progress
          color={["#3498db", "#1abc9c"]} // Gradient colors
          backgroundColor="#ccc" // Background color of the circle
          size={200} // Size of the circle in pixels
        />
      </div>
    </>
  );
};

export default About;
