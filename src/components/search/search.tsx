import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ISearchItem, SearchListContext } from "../search-list-context";
import { Card } from "@mui/material";

export const Search: React.FC<{ gridArea: string }> = ({ gridArea }) => {
  const { searchList, setSearchList } = useContext(SearchListContext);
  const [valueToSearch, setValueToSearch] = useState<string>("");
  const searchData = () => {
    console.log(valueToSearch);
    const nextId: number =
      Math.max(...searchList.map((item) => item.id), 0) + 1;
    console.log(nextId);
    const searchItem: ISearchItem = { id: nextId, value: valueToSearch };
    setSearchList([searchItem, ...searchList]);
  };
  const updateSearchField = (event: any) => {
    setValueToSearch(event.target.value);
  };

  return (
    <Card
      sx={{
        gridArea: gridArea,
        display: "flex",
        gap: "20px",
        minHeight: "4rem",
      }}
    >
      <div style={{ alignSelf: "center", flexGrow: 1 }}>
        <TextField
          style={{ flex: 1, width: "100%" }}
          label="Search field"
          type="search"
          variant="standard"
          onChange={(e) => updateSearchField(e)}
        />
      </div>
      <Button variant="outlined" onClick={() => searchData()}>
        Search
      </Button>
    </Card>
  );
};
