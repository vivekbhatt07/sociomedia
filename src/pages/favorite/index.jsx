import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../../layout";
import { EmptyListCard, FavoriteCard, IconAction } from "../../components";
import { ArrowBack, Favorite as FavoriteIcon } from "@mui/icons-material";
import { useFavorite } from "../../context/FavoriteContext";

export default function Favorite() {
  const navigate = useNavigate();
  const { state } = useFavorite();

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4">
        <IconAction onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconAction>
        <span>Favorite Posts ({state.favoriteList.length})</span>
      </div>
      <div className="p-4 flex flex-col gap-6">
        {state.favoriteList.length === 0 ? (
          <EmptyListCard
            icon={<FavoriteIcon sx={{ fontSize: "80px", color: "#60a5fa" }} />}
          >
            No Favorite Post Yet!
          </EmptyListCard>
        ) : (
          <ul className="flex flex-col gap-3">
            {state.favoriteList.map((favoritePost) => {
              return (
                <FavoriteCard
                  favoriteData={favoritePost}
                  key={favoritePost.id}
                />
              );
            })}
          </ul>
        )}
      </div>
    </PageContainer>
  );
}
