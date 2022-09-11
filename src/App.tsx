import React, { useMemo } from "react";
import "./App.css";
import { Search } from "./components/search/search";
import {
  ISearchItem,
  SearchListContext,
} from "./components/search-list-context";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { SearchList } from "./components/search-list/search-list";
import { MapWrapper } from "./components/map/map-wrapper";

const AppComponent: React.FC = () => {
  const [searchList, setSearchList] = React.useState<ISearchItem[]>([]);
  const value = useMemo(() => ({ searchList, setSearchList }), [searchList]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MapWrapper
          gridArea="mapWithLocation"
          address={"check"}
          label="Map with user search"
        />
        <SearchListContext.Provider value={value}>
          <SearchList gridArea="listOfSearches" />
          <Search gridArea="search" />
        </SearchListContext.Provider>
        <MapWrapper
          gridArea="mapWithLastSearch"
          address={value.searchList[0] ? value.searchList[0].value : ""}
          label="Map with last search"
        />
      </ThemeProvider>
    </div>
  );
};

export default AppComponent;
