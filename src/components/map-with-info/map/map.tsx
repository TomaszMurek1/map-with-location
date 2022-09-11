import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

type IMap = {
  longitude: number;
  latitude: number;
};

const Map: React.FC<IMap> = ({ longitude, latitude }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap zoom={10} center={{ lat: latitude, lng: longitude }}>
      <MarkerF position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  ) : (
    <div style={{ marginTop: "32px" }}>Loading...</div>
  );
};

export default Map;
