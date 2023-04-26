import DatePicker from "../ChartPage/Component/DatePicker";
import  { creatTitle} from "../../Components/App/index";
import React, { useContext, useState } from "react";
import StyledTable from "./Components/StyledTable";
import { rows,columns } from "./Shared";
import BasicDatePicker from "../../../Asset/BasicDatePicker";
import BasicTimePicker from "../../../Asset/BasicTimePicker";


function Water() {
    useContext(creatTitle).handleTitle('Dữ liệu mực nước')
    const [firstDate,setFirstDate]=useState("")
    const [secondDate,setSecondDate]=useState("")
   
   
    const handleFirstValue=(data)=>{
      const saveDate=new Date(data)
      setFirstDate(saveDate)
      
    }
    const handleSecondValue=(data)=>{
        const saveDate=new Date(data)
        setSecondDate(saveDate)
        
      }

    const [data,setData]=useState(rows)
    const handleData=()=>{
        setData([])
      const a =  rows.map((row,index)=>{
            const a=row.time.indexOf(",")
            const b=row.time.slice(a+1)
            let d = b.split("/");
            const data = new Date(d[2] + '/' + d[1] + '/' + d[0])
            if(data>=firstDate&&data<=secondDate){
                setData(prev=>[...prev,row])
            }
        })
        return a;
    }
        
    
    return <div>
        <div className="header flex justify-end mt-2 ">  
            <p className="mt-1.5">Từ ngày:</p>
            <button className="text-sm mx-4 text-cyan-500">
                <DatePicker setValue={handleFirstValue}/>
            </button>
            <p className="mt-1.5">Đến ngày:</p>
            <button className="text-sm mx-4 text-cyan-500">
                <DatePicker setValue={handleSecondValue}/>
            </button>
            <button onClick={handleData} className=" rounded-full px-6 mr-4 text-sm bg-slate-50 text-cyan-500">
              Tìm kiếm
            </button>  
        </div>
        <div className="flex">
        <span className="text-red-600 font-semibold">Nhập giá trị đo mức sông Chảy</span>
       
            <BasicDatePicker />
       
            <BasicTimePicker/>
            <input placeholder="Nhập giá trị"></input>
            <button>Lưu giá trị</button>
        </div>
        
      <StyledTable datas={data} header ={columns} />
    </div>
}

export default Water;