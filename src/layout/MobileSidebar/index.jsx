import React from "react";
import { NavLink } from "react-router-dom";

import {
  Dashboard as DashboardIcon,
  LogoutOutlined,
  Favorite,
  ThumbUp,
} from "@mui/icons-material";

import { Button } from "@mui/material";
import { useMode } from "../../context";

const MobileSidebar = ({ className }) => {
  const { isDarkTheme } = useMode();
  const pages = [
    { id: "0", title: "Posts", reach: "/", icon: <DashboardIcon /> },
    { id: "1", title: "Like", reach: "/like", icon: <ThumbUp /> },
    { id: "2", title: "Favorite", reach: "/favorite", icon: <Favorite /> },
  ];
  return (
    <div
      className={`${className} fixed bottom-0 w-full bg-[#fff] dark:bg-900 z-10`}
    >
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
            }}
          >
            <NavLink
              to={page.reach}
              className="flex items-center gap-3 w-full"
              style={({ isActive }) => ({
                display: "flex",
                fontWeight: 500,
                padding: "12px 24px",
                backgroundColor: isActive
                  ? isDarkTheme
                    ? "rgba(144, 202, 249, 0.08)"
                    : "#E6F7FF"
                  : isDarkTheme
                  ? ""
                  : "#ffffff",
                color: isActive
                  ? isDarkTheme
                    ? "#1890FF"
                    : "#1890FF"
                  : isDarkTheme
                  ? "#fff"
                  : "#282828",
                borderTop: isActive
                  ? isDarkTheme
                    ? "5px solid #1890FF"
                    : "5px solid #1890FF"
                  : isDarkTheme
                  ? "5px solid #fff"
                  : "5px solid #ddd",
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
