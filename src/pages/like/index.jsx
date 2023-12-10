import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../../layout";
import { EmptyListCard, IconAction, LikeCard } from "../../components";
import { ArrowBack, ThumbUp } from "@mui/icons-material";
import { useLike } from "../../context/LikeContext";

export default function Like() {
  const navigate = useNavigate();
  const { state } = useLike();

  console.log(state.likeList);
  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4">
        <IconAction onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconAction>
        <span>Liked Posts ({state.likeList.length})</span>
      </div>
      <div className="p-4 flex flex-col gap-6">
        {state.likeList.length === 0 ? (
          <EmptyListCard
            icon={<ThumbUp sx={{ fontSize: "80px", color: "#60a5fa" }} />}
          >
            No Liked Post Yet
          </EmptyListCard>
        ) : (
          <ul className="flex flex-col gap-3">
            {state.likeList.map((likedPost) => {
              return <LikeCard likeData={likedPost} key={likedPost.id} />;
            })}
          </ul>
        )}
      </div>
    </PageContainer>
  );
}
