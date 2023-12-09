import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../../layout";
import { CommentCard, IconAction } from "../../components";
import { ArrowBack } from "@mui/icons-material";

export default function Detail() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const getPostHandler = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (response.status === 200) {
        setPostData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getPostCommentsHandler = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (response.status === 200) {
        setCommentList(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostHandler();
    getPostCommentsHandler();
  }, []);

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4">
        <IconAction onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconAction>
        <span>Post Detail</span>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <div>
          <h2>{postData?.title}</h2>
          <p>{postData?.body}</p>
        </div>
        <ul className="flex flex-col gap-3">
          {commentList.map((comment) => {
            return <CommentCard key={comment.id} commentData={comment} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
}
