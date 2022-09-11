import React, { useMemo } from "react";
//Components
import { Search } from "./components/search/search";
import {
  ISearchItem,
  SearchListContext,
} from "./components/search-list-context";
import { SearchList } from "./components/search-list/search-list";
import { MapWithInfo } from "./components/map-with-info/map-with-info";
//Theme
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import "./App.css";

const AppComponent: React.FC = () => {
  const [searchList, setSearchList] = React.useState<ISearchItem[]>([]);
  const lastSearchItem: string = searchList[0] ? searchList[0].value : "";
  const searchListContext = useMemo(
    () => ({ searchList, setSearchList }),
    [searchList]
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MapWithInfo
          gridArea="mapWithLocation"
          address={"check"}
          label="Map with user search"
        />
        <SearchListContext.Provider value={searchListContext}>
          <SearchList gridArea="listOfSearches" />
          <Search gridArea="search" />
        </SearchListContext.Provider>
        <MapWithInfo
          gridArea="mapWithLastSearch"
          address={lastSearchItem}
          label="Map with last search"
        />
      </ThemeProvider>
    </div>
  );
};

export default AppComponent;
