import React, { useState, useEffect } from "react";

import {
  Tooltip,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const SearchFilter = ({ data, list, setFilteredList, setIsSearch }) => {
  const [searchData, setSearchData] = useState({
    searchText: "",
    searchType: "name",
  });

  const searchTypeList = Object.keys(data).filter((item) => {
    return item !== "id";
  });

  let filteredList = [...list];

  if (searchData.searchText) {
    filteredList =
      searchData.searchType === ""
        ? filteredList
        : filteredList.filter((item) => {
            if (typeof item[searchData.searchType] === "string") {
              return item[searchData.searchType]
                .toLowerCase()
                .includes(searchData.searchText.toLowerCase());
            }

            if (typeof item[searchData.searchType] === "number") {
              return (
                Number(item[searchData.searchType]) ===
                Number(searchData.searchText)
              );
            }
          });
  }

  useEffect(() => {
    setIsSearch(searchData.searchText.trim());
    setFilteredList(filteredList);
  }, [searchData.searchText]);

  return (
    <div className="flex gap-2 p-4">
      <input
        name="searchText"
        className="rounded-full px-4 py-2 border focus:border outline-none border-[#ddd] focus:border-[#8b5cf6] bg-[#fff] transition-all duration-300 text-[#000] text-sm font-light"
        placeholder={`Search for ${searchData.searchType}`}
        value={searchData.searchText}
        onChange={(e) => {
          setSearchData((prevSearchData) => {
            return { ...prevSearchData, searchText: e.target.value };
          });
        }}
      />
      <FormControl fullWidth sx={{ maxWidth: "200px" }}>
        <InputLabel id="search_filter_type_label">Search Type</InputLabel>
        <Select
          name="searchType"
          labelId="search_filter_type_label"
          id="search_Filter_type"
          value={searchData.searchType}
          label="Select Search"
          onChange={(e) => {
            setSearchData((prevSearchData) => {
              return { ...prevSearchData, searchType: e.target.value };
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
  );
};

export default SearchFilter;
