import React, { useMemo } from "react";

import "./App.css";

import { SearchList } from "./components/search-list/search-list";
import { MapWrapper } from "./components/map/map-wrapper";
import { Search } from "./components/search/search";
import {
  ISearchItem,
  SearchListContext,
} from "./components/search-list-context";

const AppComponent: React.FC = () => {
  const [searchList, setSearchList] = React.useState<ISearchItem[]>([]);

  const value = useMemo(() => ({ searchList, setSearchList }), [searchList]);
  return (
    <div className="App">
      <MapWrapper
        id="mapWithLocation"
        address={"check"}
        label="Map with user search"
      />
      <SearchListContext.Provider value={value}>
        <SearchList />
        <Search />
      </SearchListContext.Provider>
      <MapWrapper
        id="mapWithLastSearch"
        address={value.searchList[0] ? value.searchList[0].value : ""}
        label="Map with last search"
      />
    </div>
  );
};

export default AppComponent;
