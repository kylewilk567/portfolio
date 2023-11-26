import React from "react";
import { useTheme } from "next-themes";
import Header from "./Header";
import InputField from "./form/inputField";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto">
      <Header title="Contact Me" />
      <InputField
        text="Email"
        type="text"
        required={"required"}
        backgroundColor="bg-[#1d2b3a]"
        name="email"
      />
    </div>
  );
};

export default Contact;
