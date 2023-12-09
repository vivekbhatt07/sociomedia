import React from "react";

const CommentCard = ({ commentData }) => {
  return (
    <li className="p-4 bg-200 rounded-md">
      <h3>{commentData?.name}</h3>
      <p>{commentData?.email}</p>
      <p>{commentData?.body}</p>
    </li>
  );
};

export default CommentCard;
