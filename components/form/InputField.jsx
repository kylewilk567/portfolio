import React from "react";

const InputField = ({ text, isInput, type, required, name, className }) => {
  if (!className) className = "";

  return (
    <div className={`inputBox brand-nav-bg-color ${className}`}>
      {isInput ? (
        <input
          className="brand-nav-bg-color border border-[#1d2b3a]"
          type={type}
          required={required}
          name={name}
        />
      ) : (
        <textarea
          className="brand-nav-bg-color border border-[#1d2b3a] h-64"
          name={name}
          required={required}
        />
      )}

      <span className="z-20">{text}</span>
    </div>
  );
};

export default InputField;
