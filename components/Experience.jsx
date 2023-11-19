"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import headshot from "@/public/assets/headshot.jpg";

// TODO: Set changing lineColor attribute for VerticalTimeline

const Experience = () => {
  return (
    <VerticalTimeline
      className="vertical-timeline-custom-line"
      layout="1-column-left"
      lineColor={"#f0f"}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        visible={true}
        icon={<i className="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Experience;
