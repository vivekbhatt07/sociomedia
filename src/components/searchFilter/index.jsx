import React, { useState, useEffect } from "react";

import {
  Tooltip,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { usePost } from "../../context/PostContext";
import { TolltipIconAction } from "../buttons";
import { RestartAlt } from "@mui/icons-material";
import { toastHandler } from "../../utils";

const SearchFilter = ({ className }) => {
  const { state, dispatch } = usePost();

  const searchTypeList = Object.keys({
    title: "",
    userId: "",
    id: "",
    body: "",
  }).filter((item) => {
    return item !== "id";
  });

  return (
    <div
      className={`flex gap-6 p-4 md:justify-between md:flex-row flex-col ${className} md:items-center`}
    >
      <div className="flex flex-row gap-3">
        <input
          name="searchText"
          className="rounded-full px-4 py-2 border-2 focus:border-2 outline-none border-[#ddd] focus:border-[#60a5fa] bg-[#fff] transition-all duration-300 text-[#000] text-sm font-light dark:bg-800"
          placeholder={`Search for ${state.filterBy.search.searchType}`}
          value={state.filterBy.search.searchText}
          onChange={(e) => {
            dispatch({
              type: "SET_SEARCH_FILTER",
              payload: { searchText: e.target.value },
            });
          }}
        />
        <div className=" min-w-[100px] md:min-w-[160px]">
          <FormControl fullWidth>
            <InputLabel id="search_filter_type_label">Search Type</InputLabel>
            <Select
              name="searchType"
              labelId="search_filter_type_label"
              id="search_Filter_type"
              value={state.filterBy.search.searchType}
              label="Select Search"
              onChange={(e) => {
                dispatch({
                  type: "SET_SEARCH_FILTER",
                  payload: { searchType: e.target.value },
                });
              }}
            >
              {searchTypeList.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="my-auto">
          <TolltipIconAction
            title="Reset Filters"
            onClick={() => {
              dispatch({ type: "RESET_FILTERS" });
              toastHandler("success", "Filters Reset Success");
            }}
          >
            <RestartAlt />
          </TolltipIconAction>
        </div>
      </div>
      <div style={{ minWidth: "160px" }}>
        <FormControl fullWidth>
          <InputLabel id="category_filter_type_label">Post Type</InputLabel>
          <Select
            name="categoryType"
            labelId="category_filter_type_label"
            id="category_Filter_type"
            value={state.filterBy.category}
            label="Select Category"
            onChange={(e) => {
              dispatch({
                type: "SET_CATEGORY_FILTER",
                payload: e.target.value,
              });
            }}
          >
            {["All", "Like", "Favorite"].map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchFilter;
