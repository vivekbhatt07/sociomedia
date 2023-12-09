import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  LogoutOutlined,
  Favorite,
  ThumbUp,
} from "@mui/icons-material";

import { Button, Skeleton } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();
  const pages = [
    { id: "0", title: "Posts", reach: "/", icon: <DashboardIcon /> },
    { id: "1", title: "Like", reach: "/like", icon: <ThumbUp /> },
    { id: "2", title: "Favorite", reach: "/favorite", icon: <Favorite /> },
  ];

  return (
    <aside
      className="basis-1/6 flex flex-col justify-between pt-4"
      style={{ border: "1px solid #ddd" }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center cursor-pointer">
          <div className="w-[80px] h-[80px] relative">
            <img
              src="https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarOne_gma0e0.svg"
              alt="avatar"
              className="absolute z-10"
            />
            <Skeleton variant="circular" width={80} height={80} />
          </div>
          <h1
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 500,
              color: "#552583",
            }}
          >
            Vivek Bhatt
          </h1>
        </div>
        <div>
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
                    backgroundColor: isActive ? "#E6F7FF" : "#ffffff",
                    color: isActive ? "#1890FF" : "#282828",
                    borderRight: isActive
                      ? "5px solid #1890FF"
                      : "2px solid #fff",
                  })}
                >
                  {page.icon}
                  <span>{page.title}</span>
                </NavLink>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <Button
          variant="text"
          sx={{
            color: "#000000D9",
            textTransform: "capitalize",
            gap: "10px",
            width: "100%",
            justifyContent: "flex-start",
            paddingLeft: "24px",
          }}
        >
          <LogoutOutlined />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
