import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SearchListContext } from "../search-list-context";
import "./search-list.css";

export const SearchList: React.FC = () => {
  const { searchList } = useContext(SearchListContext);

  return (
    <div id="listOfSearches">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        List of searches
      </Typography>
      {searchList.length > 0 ? (
        <List dense={false} style={{ padding: 0 }}>
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
