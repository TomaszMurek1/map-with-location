import React, { useMemo } from "react";
import "./App.css";
import { Search } from "./components/search/search";
import {
  ISearchItem,
  SearchListContext,
} from "./components/search-list-context";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { MapUserLocation, MapSearchLocation } from "./components/App.styles";
import { SearchList } from "./components/search-list/search-list";

const AppComponent: React.FC = () => {
  const [searchList, setSearchList] = React.useState<ISearchItem[]>([]);
  const value = useMemo(() => ({ searchList, setSearchList }), [searchList]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MapUserLocation address={"check"} label="Map with user search" />
        <SearchListContext.Provider value={value}>
          <SearchList />
          <Search />
        </SearchListContext.Provider>
        <MapSearchLocation
          address={value.searchList[0] ? value.searchList[0].value : ""}
          label="Map with last search"
        />
      </ThemeProvider>
    </div>
  );
};

export default AppComponent;
