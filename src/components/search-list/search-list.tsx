import React, { useContext } from "react";
import { SearchListContext } from "../search-list-context";
import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";

export const SearchList: React.FC<{ gridArea: string }> = ({ gridArea }) => {
  const { searchList } = useContext(SearchListContext);

  return (
    <Card sx={{ gridArea: gridArea, overflow: "auto" }}>
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
