import React from "react";

const FavoriteCard = ({ favoriteData }) => {
  return (
    <li className="p-4 bg-100 rounded-md flex flex-col gap-1 dark:bg-700">
      <h3 className="">{favoriteData?.title}</h3>
      <p className="text-xs">{favoriteData?.body}</p>
    </li>
  );
};

export default FavoriteCard;
