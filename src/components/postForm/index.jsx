import { TextField } from "@mui/material";
import React, { useState } from "react";
import { TextAction } from "../buttons";

const PostForm = ({ isEdit, data, closeAction, formAction }) => {
  const [postData, setPostData] = useState({
    title: isEdit ? data.title : "",
    body: isEdit ? data.body : "",
    userId: isEdit ? data.userId : Number(""),
  });

  const handlePostInputs = (e) => {
    const { name, value } = e.target;
    setPostData((prevPostData) => {
      return { ...prevPostData, [name]: value };
    });
  };

  const handlePostFormSubmit = (e) => {
    e.preventDefault();
    console.log({ id: data.id, ...postData });
    if (isEdit) {
      formAction({ id: data.id, ...postData });
    } else {
      formAction(postData);
    }
    console.log(postData);
    closeAction();
  };

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handlePostFormSubmit}
    >
      <div className="flex flex-col gap-4">
        <TextField
          variant="outlined"
          label="User ID"
          name="userId"
          type="number"
          value={postData.userId}
          onChange={handlePostInputs}
          required
        />
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          type="text"
          value={postData.title}
          onChange={handlePostInputs}
          required
        />
        <TextField
          variant="outlined"
          label="Description"
          name="body"
          type="text"
          value={postData.body}
          onChange={handlePostInputs}
          required
        />
      </div>
      <div className="flex justify-start">
        {isEdit ? (
          <TextAction type="submit" onClick={handlePostFormSubmit}>
            Edit Post
          </TextAction>
        ) : (
          <TextAction type="submit">Add Post</TextAction>
        )}
      </div>
    </form>
  );
};

export default PostForm;
