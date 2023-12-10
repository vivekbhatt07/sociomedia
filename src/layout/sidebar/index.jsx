import React from "react";
import { NavLink } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  LogoutOutlined,
  Favorite,
  ThumbUp,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Button, Skeleton } from "@mui/material";
import { useMode } from "../../context";

const Sidebar = ({ className }) => {
  const { isDarkTheme, toggleTheme } = useMode();

  const pages = [
    { id: "0", title: "Posts", reach: "/", icon: <DashboardIcon /> },
    { id: "1", title: "Like", reach: "/like", icon: <ThumbUp /> },
    { id: "2", title: "Favorite", reach: "/favorite", icon: <Favorite /> },
  ];

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <aside
      className={`basis-1/6 flex flex-col justify-between pt-4 ${className}`}
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
            }}
            className="dark:text-[#fff]"
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
                    borderRight: isActive
                      ? isDarkTheme
                        ? "5px solid #1890FF"
                        : "5px solid #1890FF"
                      : isDarkTheme
                      ? ""
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
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label={isDarkTheme ? "Dark Mode" : "Light Mode"}
          sx={{ display: "flex", flexDirection: "column" }}
          onChange={() => {
            if (isDarkTheme) {
              toggleTheme(false);
            } else {
              toggleTheme(true);
            }
          }}
          checked={isDarkTheme}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
