export type DataType =
  | "continent_name"
  | "region_name"
  | "ip"
  | "location"
  | "city"
  | "zip"
  | "latitude"
  | "longitude"
  | "type"
  | "continent_code"
  | "country_code"
  | "country_name"
  | "region_code"
  | "time_zone"
  | "currency"
  | "connection";

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
