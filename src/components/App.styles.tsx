import { styled } from "@mui/material";
import { MapWrapper } from "./map/map-wrapper";
import { SearchList } from "./search-list/search-list";

export const MapUserLocation = styled(MapWrapper)({
  gridArea: "mapWithLocation",
});

export const MapSearchLocation = styled(MapWrapper)({
  gridArea: "mapWithLastSearch",
});

export const ListOfSearches = styled(SearchList)({
  gridArea: "listOfSearches",
});
