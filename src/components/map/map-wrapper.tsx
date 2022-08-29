import React, { useEffect, useState } from "react";
import { InfoLocation } from "../info-location/info-location";
import Map from "./map";
import axios from "axios";
import "./map-wrapper.css";
import { Typography } from "@mui/material";

export interface IData {
  continent_name: string;
  region_name: string;
  ip: string;
  location: any;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  type: string;
  continent_code: string;
  country_code: string;
  country_name: string;
  region_code: string;
  time_zone: any;
  currency: any;
  connection: any;
}

export const MapWrapper: React.FC<{
  label: string;
  id: any;
  address: string;
}> = ({ id, label, address }) => {
  const [data, setData] = useState<IData | null>(null);
  const key = process.env.REACT_APP_IPSTACK_API_KEY;
  console.log("address", address);

  const ipstackAPI = `http://api.ipstack.com/${address}?access_key=${key}`;
  useEffect(() => {
    if (address) {
      console.log("api call");

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
    <div id={id} className="gridItem">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        {label}
      </Typography>
      <div className="mapWrapper">
        <div className="mapItem">
          {data && data.longitude ? (
            <div>
              {/* <Map longitude={data.longitude} latitude={data.latitude} /> */}
            </div>
          ) : (
            <div>test</div>
          )}
        </div>
        <div className="infoItem">
          <InfoLocation data={data} />
        </div>
      </div>
    </div>
  );
};
