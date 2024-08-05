import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <div className="font-bold brand-text-color text-2xl border-b-2 w-fit px-4 py-2 mb-0 mx-auto">
        {title}
      </div>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          height={16}
          className="icon"
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
