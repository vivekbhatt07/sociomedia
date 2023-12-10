import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TooltipIconAction from "../buttons/TooltipIconAction";
import { Edit, Delete, Favorite, ThumbUp } from "@mui/icons-material";
import ModalProvider from "../ModalProvider";
import PostForm from "../postForm";
import { usePost } from "../../context/PostContext";
import { useLike } from "../../context/LikeContext";
import { useFavorite } from "../../context/FavoriteContext";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();
  const { state: likeState, dispatch: likeAction } = useLike();
  const { state: favoriteState, dispatch: favoriteAction } = useFavorite();
  const { state, editPost, deletePost } = usePost();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const isFavorite =
    favoriteState.favoriteList.findIndex((post) => {
      return post.id === postData.id;
    }) === -1
      ? false
      : true;

  const isLiked =
    likeState.likeList.findIndex((post) => {
      return post.id === postData.id;
    }) === -1
      ? false
      : true;

  return (
    <li className="bg-200 p-3 rounded-lg" onClick={(e) => e.stopPropagation()}>
      <div
        className="flex flex-col gap-12"
        onClick={() => navigate(`/${postData.id}`)}
      >
        {/* <div className="flex flex-col gap-12"> */}
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">{postData.title}</h3>
          <p className="text-xs">{postData.body}</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex gap-2">
            <TooltipIconAction
              title="Like"
              position="top"
              isArrow={true}
              iconBtnSx={{
                width: "35px",
                height: "35px",
                backgroundColor: isLiked ? "#fff" : "#a8a29e",
                "&:hover": {
                  backgroundColor: isLiked ? "#fff" : "#7c3aed",
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isLiked) {
                  likeAction({
                    type: "REMOVE_FROM_LIKE",
                    payload: postData.id,
                  });
                } else {
                  likeAction({ type: "ADD_TO_LIKE", payload: postData });
                }
              }}
            >
              <ThumbUp
                sx={{
                  fontSize: "20px",
                  color: isLiked ? "rgb(24, 144, 255)" : "#fff",
                }}
              />
            </TooltipIconAction>
            <TooltipIconAction
              title="Favorite"
              position="top"
              isArrow={true}
              iconBtnSx={{
                width: "35px",
                height: "35px",
                backgroundColor: isFavorite ? "#fff" : "#a8a29e",
                "&:hover": {
                  backgroundColor: isFavorite ? "#fff" : "#7c3aed",
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isFavorite) {
                  favoriteAction({
                    type: "REMOVE_FROM_FAVORITE",
                    payload: postData.id,
                  });
                } else {
                  favoriteAction({
                    type: "ADD_TO_FAVORITE",
                    payload: postData,
                  });
                }
              }}
            >
              <Favorite
                sx={{ fontSize: "20px", color: isFavorite ? "red" : "#fff" }}
              />
            </TooltipIconAction>
          </div>
          <div className="flex gap-2">
            <ModalProvider
              isOpen={isEditModalOpen}
              title="EDIT POST"
              closeModal={closeEditModal}
              OpenAction={
                <TooltipIconAction
                  title="Edit"
                  position="top"
                  isArrow={true}
                  iconBtnSx={{ width: "35px", height: "35px" }}
                  onClick={(e) => {
                    openEditModal();
                    e.stopPropagation();
                  }}
                >
                  <Edit sx={{ fontSize: "20px" }} />
                </TooltipIconAction>
              }
            >
              <PostForm
                isEdit
                data={postData}
                closeAction={closeEditModal}
                formAction={editPost}
              />
            </ModalProvider>

            <TooltipIconAction
              title="Delete"
              position="top"
              isArrow={true}
              iconBtnSx={{ width: "35px", height: "35px" }}
              onClick={(e) => {
                deletePost(postData.id);
                e.stopPropagation();
              }}
            >
              <Delete sx={{ fontSize: "20px" }} />
            </TooltipIconAction>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
