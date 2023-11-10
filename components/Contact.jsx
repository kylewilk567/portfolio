import React from "react";
import { useTheme } from "next-themes";
import Header from "./Header";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto">
      <Header title="Contact Me" />
    </div>
  );
};

export default Contact;
