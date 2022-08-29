import React, { useMemo } from "react";

import "./App.css";
import { InfoLocation } from "./components/info-location/info-location";
import { InfoSearch } from "./components/info-search/info-search";
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
      <MapWrapper id="mapWithLocation">Map with user location</MapWrapper>
      <SearchListContext.Provider value={value}>
        <SearchList />
        <Search />
      </SearchListContext.Provider>
      <InfoLocation>Information about user location</InfoLocation>
      <InfoSearch>Information about last search</InfoSearch>
      <MapWrapper id="mapWithLastSearch">Map with last search</MapWrapper>
    </div>
  );
};

export default AppComponent;
