import React from "react";
import Main from "../Main";
import Sidebar from "../sidebar";

const PageContainer = ({ children }) => {
  return (
    <div className="dark:bg-900 dark:text-50 transition-all duration-300 h-screen">
      <div className="flex flex-row h-full">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default PageContainer;
