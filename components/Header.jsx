import React from "react";

const Header = ({ title }) => {
  return (
    <div className="text-center font-bold text-2xl border-b-2 w-fit px-4 py-2 mb-4 mx-auto">
      {title}
    </div>
  );
};

export default Header;
