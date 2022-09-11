import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
//Components
import { InfoLocation } from "./info-location/info-location";
import Map from "./map/map";
//Material UI & Styles
import { Card, Typography } from "@mui/material";
import { InfoItem, MapItem } from "./map-with-info.styles";
import "./map-with-info.styles.tsx";
//Types
import { DataType, IData } from "./map-with-info.types";
//import { dataMock } from "./info-location/info-location.mock";

export const MapWithInfo: React.FC<{
  label: string;
  address: string;
  gridArea: string;
}> = ({ label, address, gridArea }) => {
  const [data, setData] = useState<Record<DataType, any> | null>(null);
  const [mapLoadingError, setStateMapLoadingError] = useState<boolean>(false);
  const key: string = process.env.REACT_APP_IPSTACK_API_KEY as string;
  const ipstackAPI: string = `http://api.ipstack.com/${address}?access_key=${key}`;

  const getData: () => Promise<void> = async () => {
    try {
      const response: AxiosResponse = await axios.get(ipstackAPI);
      const dataResponse: IData = await response.data;
      setData(dataResponse);
    } catch {
      setStateMapLoadingError(true);
    }
  };

  useEffect(() => {
    if (address) {
      getData();
    }
  }, [address]);

  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "auto",
        gridArea: { gridArea },
      }}
    >
      {!mapLoadingError ? (
        <>
          <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
            {label}
          </Typography>
          <div
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
            className="mapWrapper"
          >
            <MapItem>
              {data ? (
                <Map longitude={data.longitude} latitude={data.latitude} />
              ) : (
                <div>No data to be displayed</div>
              )}
            </MapItem>
            {data ? (
              <InfoItem>
                <InfoLocation data={data} />
              </InfoItem>
            ) : null}
          </div>
        </>
      ) : (
        <div>Error occurred while map loading</div>
      )}
    </Card>
  );
};
