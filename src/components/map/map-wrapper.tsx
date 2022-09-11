import React, { useEffect, useState } from "react";
import { InfoLocation } from "../info-location/info-location";
import axios from "axios";
import "./map-wrapper.styles.tsx";
import { Card, Typography } from "@mui/material";
import { dataMock } from "../info-location/info-location.mock";
import { DataType } from "./map-wrapper.types";
import { InfoItem, MapItem } from "./map-wrapper.styles";

export const MapWrapper: React.FC<{
  label: string;
  address: string;
  gridArea: string;
}> = ({ label, address, gridArea }) => {
  const [data, setData] = useState<Record<DataType, string>>(dataMock);
  const key = process.env.REACT_APP_IPSTACK_API_KEY;
  console.log("address", address);

  const ipstackAPI = `http://api.ipstack.com/${address}?access_key=${key}`;
  useEffect(() => {
    if (address) {
      console.log("api call");

      //const array : string[]= array.

      const getdata = async () => {
        try {
          const response = await axios.get(ipstackAPI);
          const d = await response.data;
          setData(d);
          console.log("d", d);
        } catch {
          console.log("error");
        }
      };

      //getdata();
    } else {
      console.log("no address");
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
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        {label}
      </Typography>
      <div
        style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
        className="mapWrapper"
      >
        <MapItem>
          {data && data.longitude ? (
            <div>
              {/* <Map longitude={data.longitude} latitude={data.latitude} /> */}
            </div>
          ) : (
            <div>test</div>
          )}
        </MapItem>
        {data ? (
          <InfoItem>
            <InfoLocation data={data} />
          </InfoItem>
        ) : null}
      </div>
    </Card>
  );
};
