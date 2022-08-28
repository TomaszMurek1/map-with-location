import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

interface IData {
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

const mockResponse: IData = {
  ip: "212.77.98.9",
  type: "ipv4",
  continent_code: "EU",
  continent_name: "Europe",
  country_code: "PL",
  country_name: "Poland",
  region_code: "PM",
  region_name: "Pomerania",
  city: "Gda\u0144sk",
  zip: "80-009",
  latitude: 54.31930923461914,
  longitude: 18.63736915588379,
  location: {
    geoname_id: 3099434,
    capital: "Warsaw",
    languages: [{ code: "pl", name: "Polish", native: "Polski" }],
    country_flag: "https://assets.ipstack.com/flags/pl.svg",
    country_flag_emoji: "\ud83c\uddf5\ud83c\uddf1",
    country_flag_emoji_unicode: "U+1F1F5 U+1F1F1",
    calling_code: "48",
    is_eu: true,
  },
  time_zone: {
    id: "Europe/Warsaw",
    current_time: "2022-08-28T12:31:36+02:00",
    gmt_offset: 7200,
    code: "CEST",
    is_daylight_saving: true,
  },
  currency: {
    code: "PLN",
    name: "Polish Zloty",
    plural: "Polish zlotys",
    symbol: "z\u0142",
    symbol_native: "z\u0142",
  },
  connection: { asn: 12827, isp: "Wirtualna Polska Media s.A." },
};

const Map: React.FC<{ id: string }> = ({ id }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });
  const [b, setb] = useState<boolean>(false);
  const [data, setData] = useState<IData | null>(null);
  const request = "https://jsonplaceholder.typicode.com/posts";
  const key = process.env.REACT_APP_IPSTACK_API_KEY;

  //const myIP ="188.47.120.47"
  const myIP = "check";
  const myAddress = "www.wp.pl";
  const ipstackAPI = `http://api.ipstack.com/${myAddress}?access_key=${key}`;

  useEffect(() => {
    if (request) {
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
      const getIp = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        console.log(res.data);
        //setmyIP(res.data.IPv4)
      };
      // getIp()
      getdata();
    }
  }, []);

  return isLoaded ? (
    <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}>
      <MarkerF position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  ) : (
    <div>Loading</div>
  );
};

export default Map;
