import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Search: React.FC = () => {
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
      />
      <Button variant="outlined">Search</Button>
    </div>
  );
};
