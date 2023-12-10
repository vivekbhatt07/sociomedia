import React from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";

const LikeContext = createContext();

const initialLike = {
  likeList: [],
};

const likeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKE": {
      return {
        ...state,
        likeList: [...state.likeList, action.payload],
      };
    }
    case "REMOVE_FROM_LIKE": {
      return {
        ...state,
        likeList: state.likeList.filter((likeItem) => {
          return likeItem.id !== action.payload;
        }),
      };
    }
  }
};

const LikeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(likeReducer, initialLike);
  return (
    <LikeContext.Provider value={{ state, dispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => {
  return useContext(LikeContext);
};

export { useLike, LikeProvider };
