import React from 'react';

import './App.css';
import { InfoLocation } from './components/info-location/info-location';
import { InfoSearch } from './components/info-search/info-search';
import { ListOfSearches } from './components/list-of-searches/list-of-searches';
import { MapWrapper } from './components/map/map-wrapper';
import { Search } from './components/search/search';

const AppComponent: React.FC = () => {
  return (
    <div id="root" className="App">

      <ListOfSearches>List of searches</ListOfSearches>
      <MapWrapper id="mapWithLocation">Map with user location</MapWrapper>
      <InfoLocation>Information about user location</InfoLocation>
      <Search>Search</Search>
      <InfoSearch>Information about last search</InfoSearch>
      <MapWrapper id="mapWithLastSearch">Map with last search</MapWrapper>

    </div>)

}

export default AppComponent;
