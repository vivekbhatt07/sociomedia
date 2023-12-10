import React from "react";
import { NavLink } from "react-router-dom";

import {
  Dashboard as DashboardIcon,
  LogoutOutlined,
  Favorite,
  ThumbUp,
} from "@mui/icons-material";

import { IconAction } from "../../components";
import { Button } from "@mui/material";

const MobileSidebar = ({ className }) => {
  const pages = [
    { id: "0", title: "Posts", reach: "/", icon: <DashboardIcon /> },
    { id: "1", title: "Like", reach: "/like", icon: <ThumbUp /> },
    { id: "2", title: "Favorite", reach: "/favorite", icon: <Favorite /> },
  ];
  return (
    <div className={`${className} fixed bottom-0 w-full bg-[#fff] z-10`}>
      {pages.map((page) => {
        return (
          <Button
            variant="text"
            key={page.id}
            sx={{
              color: "#000000D9",
              textTransform: "capitalize",
              gap: "10px",
              width: "100%",
              justifyContent: "flex-start",
              padding: "0",
              backgroundColor: "#fff",
            }}
          >
            <NavLink
              to={page.reach}
              className="flex items-center gap-3 w-full"
              style={({ isActive }) => ({
                display: "flex",
                fontWeight: 500,
                padding: "12px 24px",
                backgroundColor: isActive ? "#ffffff" : "#ffffff",
                color: isActive ? "#1890FF" : "#282828",
                borderRight: isActive ? "5px solid #1890FF" : "2px solid #fff",
                justifyContent: "center",
                height: "100%",
              })}
            >
              {page.icon}
            </NavLink>
          </Button>
        );
      })}
    </div>
  );
};

export default MobileSidebar;
