import React from "react";

import { IData } from "../map/map-wrapper";
import { dataMock } from "./info-location.mock";

export const InfoLocation: React.FC<{ data: IData | null }> = ({ data }) => {
  //const [myIP, setmyIP] = useState(address.ip());

  console.log("data", data);

  return (
    <>
      {dataMock ? (
        <ul>
          <li>Continent: {dataMock.continent_name}</li>
          <li>IP Address: {dataMock.ip}</li>
          <li>Region: {dataMock.region_name}</li>
          {/*  <img
                            src={data.location.country_flag}
                            alt={data.region_name}
                            height='250'
                            width='400'
                        /> */}
          <li>City: {dataMock.city}</li>
          <li>Zipcode: {dataMock.zip}</li>
          <li>Latitude:{dataMock.latitude}</li>
          <li>Longitude: {dataMock.longitude}</li>
        </ul>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};
