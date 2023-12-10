import React from "react";

const LikeCard = ({ likeData }) => {
  return (
    <li className="p-4 bg-100 rounded-md flex flex-col gap-1 dark:bg-700">
      <h3 className="">{likeData?.title}</h3>
      <p className="text-xs">{likeData?.body}</p>
    </li>
  );
};

export default LikeCard;
