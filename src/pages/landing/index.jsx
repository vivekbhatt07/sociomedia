import React, { useEffect, useState } from "react";
import { PageContainer } from "../../layout";
import axios from "axios";
import PostCard from "../../components/PostCard";
import {
  EmptyListCard,
  IconAction,
  LightLoader,
  ModalProvider,
  PostForm,
  SearchFilter,
} from "../../components";
import { Add, Error } from "@mui/icons-material";
import { usePost } from "../../context/PostContext";

export default function Landing() {
  const { filteredList, state, dispatch, addPost, isLoading } = usePost();
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);

  const openAddPostModal = () => setIsAddPostModalOpen(true);
  const closeAddPostModal = () => setIsAddPostModalOpen(false);

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4 h-[10vh]">
        <span>Posts ({filteredList.length})</span>
        <ModalProvider
          title="ADD POST"
          isOpen={isAddPostModalOpen}
          closeModal={closeAddPostModal}
          OpenAction={
            <IconAction
              onClick={openAddPostModal}
              sx={{
                backgroundColor: "#60a5fa",
                "&:hover": {
                  backgroundColor: "rgb(24, 144, 255)",
                },
              }}
            >
              <Add />
            </IconAction>
          }
        >
          <PostForm
            closeAction={() => {
              closeAddPostModal();
            }}
            formAction={addPost}
          />
        </ModalProvider>
      </div>
      <SearchFilter className="h-[20vh] md:h-[15vh]" />

      <ul className="flex flex-col gap-3 h-[62vh] overflow-y-scroll px-4 md:h-[75vh]">
        {isLoading ? (
          <div className="flex flex-col gap-2 items-center">
            <LightLoader />
            <span>Loading Posts...</span>
          </div>
        ) : filteredList.length === 0 ? (
          <EmptyListCard
            icon={<Error sx={{ fontSize: "80px", color: "#60a5fa" }} />}
          >
            No Post Found
          </EmptyListCard>
        ) : (
          filteredList?.map((post) => {
            return <PostCard key={post.id} postData={post} />;
          })
        )}
      </ul>
    </PageContainer>
  );
}
