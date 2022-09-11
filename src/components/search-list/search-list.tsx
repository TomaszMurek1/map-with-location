import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SearchListContext } from "../search-list-context";

export const SearchList: React.FC = () => {
  const { searchList } = useContext(SearchListContext);

  return (
    <Card id="listOfSearches" raised={true}>
      <Typography variant="h6" component="div">
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
    </Card>
  );
};
