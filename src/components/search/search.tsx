import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ISearchItem, SearchListContext } from "../search-list-context";

export const Search: React.FC = () => {
  const { searchList, setSearchList } = useContext(SearchListContext);
  const [valueToSearch, setValueToSearch] = useState<string>("");
  const searchData = () => {
    console.log(valueToSearch);
    const nextId: number =
      Math.max(...searchList.map((item) => item.id), 0) + 1;
    console.log(nextId);
    const searchItem: ISearchItem = { id: nextId, value: valueToSearch };
    setSearchList([...searchList, searchItem]);
  };
  const updateSearchField = (event: any) => {
    setValueToSearch(event.target.value);
  };

  return (
    <div
      id="search"
      style={{ alignSelf: "center", display: "flex", gap: "20px" }}
    >
      <TextField
        style={{ flex: 1 }}
        label="Search field"
        type="search"
        variant="standard"
        onChange={(e) => updateSearchField(e)}
      />
      <Button variant="outlined" onClick={() => searchData()}>
        Search
      </Button>
    </div>
  );
};
