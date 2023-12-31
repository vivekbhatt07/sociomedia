import React from "react";

const Main = ({ children }) => {
  return (
    <div className="basis-full md:basis-5/6 flex flex-col">{children}</div>
  );
};

export default Main;
