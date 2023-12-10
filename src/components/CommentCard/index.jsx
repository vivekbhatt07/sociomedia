import React from "react";

const CommentCard = ({ commentData }) => {
  return (
    <li className="p-4 bg-200 rounded-md flex flex-col gap-1">
      <p className="text-xs">{commentData?.email}</p>
      <h3>{commentData?.name}</h3>
      <p className="text-sm">{commentData?.body}</p>
    </li>
  );
};

export default CommentCard;
