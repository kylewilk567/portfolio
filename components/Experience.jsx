"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import headshot from "@/public/assets/headshot.jpg";
import Image from "next/image";
import { useTheme } from "next-themes";

// TODO: Set changing lineColor attribute for VerticalTimeline

const Experience = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const backgroundColor =
    resolvedTheme === "light"
      ? "#FAF9FF"
      : "rgba(3, 7, 18, var(--tw-bg-opacity))";

  const contentStyle = {
    background: backgroundColor,
  };

  return (
    <VerticalTimeline
      className="vertical-timeline-custom-line"
      layout="1-column-left"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
        date="Sept. 2023 - Present"
        iconStyle={{
          background: "rgb(255, 255, 255)",
        }}
        visible={true}
        icon={
          <Image
            src="/assets/about/ford.svg"
            alt="image"
            width="0"
            height="0"
            className="object-contain w-full h-full"
          />
        }
      >
        <h3 className="font-bold vertical-timeline-element-title">
          Software Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Ford Motor Company
        </h4>
        <ul className="list-disc ml-6">
          <li>
            Create and test API endpoints using Java Springboot, OpenAPI, and
            42Crunch to facilitate scheduling of vehicle manufacturing at
            different Ford plants
          </li>
          <li>
            Prototyped an idea to streamline sharing and management of
            information using React and TailwindCSS for FCG Hackathon
          </li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Experience;
