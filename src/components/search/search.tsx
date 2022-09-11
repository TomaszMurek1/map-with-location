import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ISearchItem, SearchListContext } from "../search-list-context";
import { Card } from "@mui/material";

export const Search: React.FC<{ gridArea: string }> = ({ gridArea }) => {
  const { searchList, setSearchList } = useContext(SearchListContext);
  const [valueToSearch, setValueToSearch] = useState<string>("");
  const [isSearchTextValid, setIsSearchTextValid] = useState<boolean>(true);

  const searchData = (valueToSearch: string) => {
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

  const validateSearchText = (textToValidate: string): boolean => {
    const validUrl = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return validUrl.test(textToValidate);
  };

  const clickButton = () => {
    const isValid = validateSearchText(valueToSearch);

    if (isValid) {
      if (!isSearchTextValid) {
        setIsSearchTextValid(true);
      }
      searchData(valueToSearch);
    } else {
      setIsSearchTextValid(false);
    }
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
          placeholder="Please provide url or IP address to search"
          type="search"
          variant="standard"
          error={!isSearchTextValid}
          helperText={
            !isSearchTextValid ? "Please provide valid IP address/URL" : ""
          }
          onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "Enter") {
              clickButton();
            }
          }}
          onChange={(e) => updateSearchField(e)}
        />
      </div>
      <Button disabled={false} variant="outlined" onClick={() => clickButton()}>
        Search
      </Button>
    </Card>
  );
};
