import React from "react";

const CommentCard = ({ commentData }) => {
  return (
    <li className="p-4 bg-100 rounded-md flex flex-col gap-1">
      <p className="text-xs">{commentData?.email}</p>
      <h3 className="">{commentData?.name}</h3>
      <p className="text-xs">{commentData?.body}</p>
    </li>
  );
};

export default CommentCard;
