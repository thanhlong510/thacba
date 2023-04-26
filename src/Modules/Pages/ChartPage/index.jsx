
import DatePicker from "./Component/DatePicker";
import LineChart from "./Component/LineChart";
import PopperButton from "./Component/PopperButton";
import { FactoryData, LeftSideData, RightSideData } from "./Shared/chartdata";
import  { creatTitle} from "../../Components/App/index"
import React, { useContext, useState } from "react";

function ChartPage({props})  {
    
    const titleForChart ='BIỂU ĐỒ MỰC NƯỚC THƯỢNG LƯU, HẠ LƯU SÔNG CHẢY (M)'
    useContext(creatTitle).handleTitle('Biểu đồ')
    const [titleSensor,setTitleSensor] =useState("")
    const [type,setType]=useState("")
    const handleType =(data)=>{
      setType(data)
    }
    const handleTitle =(data)=>{
      setTitleSensor(data)
    }

   
    return <div className=" text-blue-400">
      <div className="wrapper flex">
      <PopperButton name={handleTitle} checkTypeSensor={handleType}  menus={FactoryData}> {type===1?titleSensor:"Nhà máy" }</PopperButton>
      <PopperButton name={handleTitle} checkTypeSensor={handleType} menus={LeftSideData}> {type===2?titleSensor:"Bờ trái"  }</PopperButton>
      <PopperButton name={handleTitle} checkTypeSensor={handleType} menus={RightSideData}> {type===3?titleSensor:"Bờ phải"  }</PopperButton>
      <button className="mx-20 ">
            <DatePicker/>
      </button>

      <button>
      <DatePicker/>
      </button>

      </div>
   
    <div className="w-8/12 h-full mx-auto mt-10">
      <LineChart title ={titleForChart}/>
      {titleSensor&&<LineChart title ={titleSensor}/>}
    </div>
    </div>
  
};

export default ChartPage;