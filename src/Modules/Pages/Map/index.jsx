import React, { useContext } from "react";
import bgrMap from "../../../Asset/Image/Group94.png";
import {buttonName} from "./Shared/data"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import  { creatTitle} from "../../Components/App/index"
function Map() {
    const [mousePos, setMousePos] = useState({});
    useContext(creatTitle).handleTitle('Bản đồ')
   
   
    return <div className="map w-full h-full"
    style={{
        backgroundImage: `url(${bgrMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: " 100% 100%"
    }}
    >
         <Link to ="/map"> <button className="uppercase boder-2  m-4 w-32 bg-red-600 rounded-full">Tổng quan</button></Link>
        {buttonName.map(x=>{
                return <Link to={x.link}>
                    <button className=" uppercase boder-2 w-32 m-4 rounded-full bg-slate-50">
                        {x.title}
                    </button>
                </Link>
        })}
    </div>;
}

export default Map;

