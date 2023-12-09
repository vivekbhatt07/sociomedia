import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconAction from "../IconAction";

const TolltipIconAction = ({
  children,
  position,
  title,
  isActive,
  onClick,
  iconBtnSx,
  isArrow,
}) => {
  return (
    <Tooltip title={title} arrow={isArrow} placement={position}>
      <IconAction
        sx={{ backgroundColor: isActive ? "#7c3aed" : "#a8a29e", ...iconBtnSx }}
        onClick={onClick}
      >
        {children}
      </IconAction>
    </Tooltip>
  );
};

export default TolltipIconAction;
