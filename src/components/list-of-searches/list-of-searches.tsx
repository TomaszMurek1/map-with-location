import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
export const ListOfSearches: React.FC = () => {
  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  return (
    <div id="listOfSearches">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Text only
      </Typography>

      <List dense={false}>
        {generate(
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        )}
      </List>
    </div>
  );
};
