import React from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";

const FavoriteContext = createContext();

const initialFavorite = {
  favoriteList: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE": {
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    }
    case "REMOVE_FROM_FAVORITE": {
      return {
        ...state,
        favoriteList: state.favoriteList.filter((favoriteItem) => {
          return favoriteItem.id !== action.payload;
        }),
      };
    }
  }
};

const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialFavorite);
  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorite = () => {
  return useContext(FavoriteContext);
};

export { useFavorite, FavoriteProvider };
