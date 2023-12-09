import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../../layout";
import { IconAction } from "../../components";
import { ArrowBack } from "@mui/icons-material";

export default function Favorite() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl flex items-center gap-4">
        <IconAction onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconAction>
        <span>Favorite Posts</span>
      </div>
      <div className="p-4 flex flex-col gap-6">Favorite Page</div>
    </PageContainer>
  );
}
