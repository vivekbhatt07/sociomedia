import React from "react";
import Main from "../Main";
import Sidebar from "../sidebar";
import MobileSidebar from "../MobileSidebar";

const PageContainer = ({ children }) => {
  return (
    <div className="dark:bg-900 dark:text-50 transition-all duration-300 h-screen">
      <div className="flex flex-row relative h-screen">
        <MobileSidebar className="flex md:hidden h-[8vh]" />
        <Sidebar className="hidden md:flex" />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default PageContainer;
