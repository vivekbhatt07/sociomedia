import React from "react";

const EmptyListCard = ({ children, icon }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>{icon}</div>
      <div style={{ fontSize: "18px" }}>{children}</div>
    </div>
  );
};

export default EmptyListCard;
