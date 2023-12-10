import React, { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const PostContext = createContext();

const initialPost = {
  postList: [],
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POST": {
      return { ...state, postList: action.payload };
    }
    case "ADD_POST": {
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    }

    case "UPDATE_POST": {
      return {
        ...state,
        postList: state.postList.map((postItem) => {
          return postItem.id === action.payload.id ? action.payload : postItem;
        }),
      };
    }
    case "REMOVE_POST": {
      return {
        ...state,
        postList: state.postList.filter((postItem) => {
          return postItem.id !== action.payload;
        }),
      };
    }
  }
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPost);

  const getAllPostHandler = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 200) {
        dispatch({ type: "GET_POST", payload: response.data });
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
        dispatch({ type: "ADD_POST", payload: response.data });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editPost = async (postData) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
        postData
      );
      if (response.status === 200) {
        dispatch({ type: "UPDATE_POST", payload: response.data });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      if (response.status === 200) {
        // console.log(response.data); {}
        dispatch({ type: "REMOVE_POST", payload: postId });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllPostHandler();
  }, []);

  return (
    <PostContext.Provider
      value={{ state, dispatch, addPost, editPost, deletePost }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  return useContext(PostContext);
};

export { usePost, PostProvider };
