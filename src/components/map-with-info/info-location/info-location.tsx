import React from "react";
import { Table, TableCell, TableRow, TableHead } from "@mui/material";
import { DataType } from "../map-with-info.types";

export const InfoLocation: React.FC<{ data: Record<DataType, string> }> = ({
  data,
}) => {
  interface IHeader {
    propAccessor: DataType;
    label: string;
  }
  const headersDefinition: IHeader[] = [
    { propAccessor: "continent_name", label: "Continent:" },
    { propAccessor: "ip", label: "IP Address::" },
    { propAccessor: "region_name", label: "Region:" },
    { propAccessor: "city", label: "City:" },
    { propAccessor: "zip", label: "Zipcode:" },
    { propAccessor: "latitude", label: "Latitude:" },
    { propAccessor: "longitude", label: "Longitude:" },
  ];

  return (
    <>
      {data ? (
        <Table>
          <TableHead>
            {headersDefinition.map((header: IHeader, index: number) => {
              const accessor: DataType = header.propAccessor;
              return (
                <TableRow key={accessor}>
                  <TableCell variant="head">
                    {headersDefinition[index].label}
                  </TableCell>
                  <TableCell>{data[accessor]}</TableCell>
                </TableRow>
              );
            })}
          </TableHead>
        </Table>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};
