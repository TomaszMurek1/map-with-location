import React from "react"
import Map from './map'
export const MapWrapper:React.FC<{ children: React.ReactNode, id:any }> =({children, id}) =>{
    return <Map id={id}/>
}