import React from "react";
import Header from "./Header";

const EagleProject = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="mx-auto">
          <Header title="Eagle Project" />
        </div>
      </div>
      <br />
      <div className="flex justify-center w-full">
        <p className="brand-text-color font-bold text-2xl">Coming soon!</p>
      </div>
    </>
  );
};

export default EagleProject;
