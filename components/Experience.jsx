"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { experiences } from "@/constants";

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
      {experiences.map((experience) => {
        return (
          <VerticalTimelineElement
            key={`exp-${experience.date}`}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
            date={experience.date}
            iconStyle={{
              background: "rgb(255, 255, 255)",
            }}
            visible={true}
            icon={
              <Image
                src={experience.image}
                alt="image"
                width="0"
                height="0"
                className="object-contain w-full h-full"
              />
            }
          >
            <h3 className="font-bold vertical-timeline-element-title">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company}
            </h4>
            <ul className="list-disc ml-6 brand-text-color">
              {experience.tasks.map((task) => (
                <li key={`task-${experience.date}-${task.substring(0, 5)}`}>
                  {task}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Experience;
