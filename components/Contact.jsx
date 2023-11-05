import React from "react";
import { useTheme } from "next-themes";
import Header from "./Header";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  return <Header title="Contact Me" />;
};

export default Contact;
