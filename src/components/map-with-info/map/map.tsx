import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const Map: React.FC<any> = ({ longitude, latitude }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });
  //const isLoaded = false;
  console.log("isLoaded", isLoaded);
  return isLoaded ? (
    <GoogleMap zoom={10} center={{ lat: latitude, lng: longitude }}>
      <MarkerF position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  ) : (
    <div style={{ backgroundColor: "lightblue", marginTop: "32px" }}>
      Loading
    </div>
  );
};

export default Map;
