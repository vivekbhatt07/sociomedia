import React, { useEffect, useState } from "react";
import { PageContainer } from "../../layout";
import axios from "axios";
import PostCard from "../../components/PostCard";
import {
  IconAction,
  ModalProvider,
  PostForm,
  SearchFilter,
} from "../../components";
import { Add } from "@mui/icons-material";
import { usePost } from "../../context/PostContext";

export default function Landing() {
  const { filteredList, state, dispatch, addPost } = usePost();
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);

  const openAddPostModal = () => setIsAddPostModalOpen(true);
  const closeAddPostModal = () => setIsAddPostModalOpen(false);

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
      <SearchFilter />
      <div className="p-4">
        <ul className="flex flex-col gap-3">
          {filteredList?.map((post) => {
            return <PostCard key={post.id} postData={post} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
}
