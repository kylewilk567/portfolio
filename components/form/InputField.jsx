import React from "react";

const InputField = ({ text, type, required, name, backgroundColor }) => {
  return (
    <div className="inputBox">
      <input type={type} required={required} name={name} />
      <span>{text}</span>
    </div>
  );
};

export default InputField;
