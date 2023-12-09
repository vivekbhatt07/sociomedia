import React, { useEffect, useState } from "react";
import { PageContainer } from "../../layout";
import axios from "axios";
import PostCard from "../../components/PostCard";

export default function Landing() {
  const [postList, setPostList] = useState([]);

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

  useEffect(() => {
    getAllPostHandler();
  }, []);

  return (
    <PageContainer>
      <div className="p-4 border-b border-[#ddd] text-xl">Posts</div>
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
