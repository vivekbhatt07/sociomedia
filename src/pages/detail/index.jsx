import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../../layout";
import { CommentCard, IconAction, LightLoader } from "../../components";
import { ArrowBack } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

export default function Detail() {
  const [isPost, setIsPost] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const getPostHandler = async () => {
    setIsPost(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (response.status === 200) {
        setPostData(response.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPost(false);
    }
  };

  const getPostCommentsHandler = async () => {
    setIsComment(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (response.status === 200) {
        setCommentList(response.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsComment(false);
    }
  };

  useEffect(() => {
    getPostHandler();
    getPostCommentsHandler();
  }, []);

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4 h-[10vh]">
        <IconAction onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconAction>
        <span>Post Detail</span>
      </div>
      <div className="p-4 flex flex-col gap-6 h-[82vh]">
        <div className="flex flex-col gap-1">
          {isPost ? (
            <Skeleton variant="rectangular" width={210} height={24} />
          ) : (
            <h2>{postData?.title}</h2>
          )}

          {isPost ? (
            <Skeleton variant="rectangular" width="100%" height={48} />
          ) : (
            <p>{postData?.body}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="border-b border-[#ddd] pb-1">
            Comments ({commentList.length})
          </h4>
          {isComment ? (
            <div className="flex flex-col gap-2 items-center">
              <LightLoader />
              <span>Loading Comments...</span>
            </div>
          ) : (
            <ul className="flex flex-col gap-3 h-[54vh] overflow-y-scroll pr-4 md:h-[62vh]">
              {commentList.map((comment) => {
                return <CommentCard key={comment.id} commentData={comment} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
