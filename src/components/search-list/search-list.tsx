import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SearchListContext } from "../search-list-context";
export const SearchList: React.FC = () => {
  const { searchList } = useContext(SearchListContext);
  /*   const searchHistory: any[] = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ]; */

  return (
    <div id="listOfSearches" style={{ overflow: "auto" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        List of searches
      </Typography>
      {searchList.length > 0 ? (
        <List dense={false}>
          {searchList.map((element) => (
            <ListItem key={element.id}>
              <ListItemText>{element.value}</ListItemText>
            </ListItem>
          ))}
        </List>
      ) : null}
    </div>
  );
};
