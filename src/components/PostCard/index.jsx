import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TooltipIconAction from "../buttons/TooltipIconAction";
import { Edit, Delete, Favorite, ThumbUp } from "@mui/icons-material";
import ModalProvider from "../ModalProvider";
import PostForm from "../postForm";
const PostCard = ({ postData }) => {
  //   const { userId, id, title, body } = postData;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const editPost = async (postData) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
        postData
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postData.id}`
      );

      if (response.status === 200) {
        console.log(response.data); // {}
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className="bg-200 p-3 rounded-lg" onClick={(e) => e.stopPropagation()}>
      {/* <Link to={`/${postData.id}`} className="flex flex-col gap-12"> */}
      <Link className="flex flex-col gap-12">
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
              iconBtnSx={{ width: "35px", height: "35px" }}
            >
              <ThumbUp sx={{ fontSize: "20px" }} />
            </TooltipIconAction>
            <TooltipIconAction
              title="Favorite"
              position="top"
              isArrow={true}
              iconBtnSx={{ width: "35px", height: "35px" }}
            >
              <Favorite sx={{ fontSize: "20px" }} />
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
                  onClick={openEditModal}
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
              onClick={() => deletePost(postData.id)}
            >
              <Delete sx={{ fontSize: "20px" }} />
            </TooltipIconAction>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
