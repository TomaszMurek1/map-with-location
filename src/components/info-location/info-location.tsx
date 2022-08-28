import React from "react"
import { useEffect, useState } from "react"



export const InfoLocation: React.FC<{ children: React.ReactNode }> = ({ children }) => {



    
    //const [myIP, setmyIP] = useState(address.ip());




const data ={
    continent_name:'continent_name',
    ip:'ip',
    region_name:'region_name',
    city:'city',
    zip:'zip',
    latitude:'latitude',
    longitude:'longitude'

}

    
    console.log('data', data)

    return (
        <>

            {
                data  ? (

                 <div>
                        <div>Continent: {data.continent_name}</div>
                        <div>IP Address: {data.ip}</div>
                        <div>Region: {data.region_name}</div>
                       {/*  <img
                            src={data.location.country_flag}
                            alt={data.region_name}
                            height='250'
                            width='400'
                        /> */}
                        <div>City: {data.city}</div>
                        <div>Zipcode: {data.zip}</div>
                        <div>Latitude:{data.latitude}</div>
                        <div>Longitude: {data.longitude}</div>
                    </div> 
                ) : (
                    ''
                )
            }
        </>
    )

}