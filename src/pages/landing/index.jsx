import React, { useEffect, useState } from "react";
import { PageContainer } from "../../layout";
import axios from "axios";
import PostCard from "../../components/PostCard";
import { IconAction, ModalProvider, PostForm } from "../../components";
import { Add } from "@mui/icons-material";

export default function Landing() {
  const [postList, setPostList] = useState([]);
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);

  const openAddPostModal = () => setIsAddPostModalOpen(true);
  const closeAddPostModal = () => setIsAddPostModalOpen(false);

  const getAllPostHandler = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 200) {
        setPostList(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addPost = async (postData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      if (response.status === 201) {
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllPostHandler();
  }, []);

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4">
        <span>Posts</span>
        <ModalProvider
          title="ADD POST"
          isOpen={isAddPostModalOpen}
          closeModal={closeAddPostModal}
          OpenAction={
            <IconAction onClick={openAddPostModal}>
              <Add />
            </IconAction>
          }
        >
          <PostForm closeAction={closeAddPostModal} formAction={addPost} />
        </ModalProvider>
      </div>
      <div className="p-4">
        <ul className="flex flex-col gap-3">
          {postList.map((post) => {
            return <PostCard key={post.id} postData={post} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
}
