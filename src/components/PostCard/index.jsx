import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ postData }) => {
  //   const { userId, id, title, body } = postData;

  return (
    <li className="bg-200 p-3 rounded-lg">
      <Link to={`/${postData.id}`}>
        <h3 className="text-base font-medium">{postData.title}</h3>
        <p className="text-xs">{postData.body}</p>
      </Link>
    </li>
  );
};

export default PostCard;
