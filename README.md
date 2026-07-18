# Kyle Wilkinson — Software Engineer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Demo-View_Portfolio-blueviolet?style=for-the-badge)](https://www.kylewilk.com) 

Welcome to the repository for my personal portfolio. This website is built using **Next.js**, **React**, and **Tailwind CSS** to showcase my professional milestones, engineering projects, and technical capabilities in a clean, highly performant format.

---

## 🎯 For Recruiters: What This Project Demonstrates

This repository is structured to show production-level frontend coding practices. Beyond the visual interface, the architecture demonstrates:

### 1. Maintainable, Code-Split Architecture
* **Single Source of Truth**: All portfolio data (job roles, project descriptions, technology categorization, SVGs, and brand colors) is decoupled from the UI and centralized in `constants/index.js`. This allows the copy, visual order, and themes to be updated without altering component logic.
* **Responsive Layout**: Designed from the ground up to be fully responsive. Uses custom breakpoint styling to seamlessly transition between a sticky desktop navigation bar and an interactive mobile slide-out menu (`MobileNav`).

### 2. Modern React Patterns & Optimization
* **Client vs. Server Component Separation**: Leverages Next.js App Router features by keeping data fetching and initial layouts on the server side, while wrapping interactive states (like the Light/Dark mode toggles and navigation drawers) in optimized `"use client"` components.
* **Component-Safe Event Handling**: Implements custom React `useRef` and hook logic to safely handle outside clicks and window scroll listeners, preventing memory leaks and assuring a smooth user experience.

---

## 💻 Tech Stack & Libraries

* **Framework**: Next.js 13 (App Router)
* **Frontend**: React 18, HTML5, CSS3, Tailwind CSS
* **Animations & Styling**: Framer Motion, React Vertical Timeline, Next Themes (flicker-free dark mode transition)
* **Hosting**: Vercel

---

## 💼 Highlighted Background Details (Featured on Site)

The application highlights several phases of my career, including:
* **Ford Motor Company (Software Engineer)**: Developing manufacturing IT layered approval systems, building Spring Boot APIs for vehicle scheduling, and evaluating emerging XR technologies.
* **University of Michigan (Research Assistant)**: Creating PyTorch-based neural networks for 3D printing fault detection (achieving 99% accuracy predictions).
* **FANUC America (R&D Intern)**: Building database source control systems and optimizing manual publishing flows with VB.NET and SQL.