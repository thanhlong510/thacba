import  { creatTitle} from "../../Components/App/index"
import React, { useContext, useState } from "react";
import { FactoryData, LeftSideData, RightSideData } from "../ChartPage/Shared/chartdata";
import DatePicker from "../ChartPage/Component/DatePicker";
import PopperButton from "../ChartPage/Component/PopperButton";
import StyledTable from "../Water/Components/StyledTable";
import { rows, columns } from "./Shared/data";
import ExcelJS from "exceljs";

function Report () {
    useContext(creatTitle).handleTitle('Báo cáo')
    const [titleSensor,setTitleSensor] =useState("")
    const [type,setType]=useState("")
    const [firstDate,setFirstDate]=useState("")
    const [secondDate,setSecondDate]=useState("")
    const [isExport,setExport]=useState(false)
    const [dataRows,setDataRows]=useState([])

    const ExportHandle =()=>{
        const workbook = new ExcelJS.Workbook()
        const sheet =workbook.addWorksheet("My Sheet")
        sheet.mergeCells('C1','J1');
        sheet.getCell('C1').value = 'Công Ty cổ phần Thủy điện Thác bà'
        sheet.getCell('A1').value = 'HBC Thac Ba'
        sheet.getCell('C2').value = 'Tổ quan trắc'
        sheet.getCell('C2').font = {
             color : {argb: 'FF0000'},
             bold: true,
             family:4,
             size:16
          };
        sheet.mergeCells('C3','E3');
        sheet.getCell('C3').value='Hệ thống thu nhập số liệu quan trắc tự động'
        sheet.getCell('C3').font={

            color : {argb: 'FF0000'},
            size: 16
        }
        sheet.getCell('F4').value='Yên Bái, ngày...tháng...năm'
        sheet.getCell('F4').font={
            italic:true,
            size:2,

        }
        sheet.getCell('A11').value='TT',
        sheet.getCell('B11').value='Ngày đo'
        sheet.mergeCells('C11','D11');
        sheet.getCell('C11').value='Sự giãn ra theo X(mm)';
        sheet.getCell('C11').font ={
            textAlign:"center"
        }
        sheet.mergeCells('E11','F11');
        sheet.getCell('E11').value='Sự giãn ra theo Y(mm)';
        sheet.getCell('G11').value='Nhiệt độ không khí';
        sheet.getCell('H11').value='Cao độ mực nước thượng lưu';
        sheet.getCell('I11').value='Ghi chú'
        sheet.getRow(12).values = ['', '', 'So với lần kề trước', 'So với lần đầu tiên','So với lần kề trước','So với lần đầu tiên'];
        sheet.columns= [
            {
                key: "tt",
                width: 5,
                alignment:"center"
            },
            {
               
                key: "time",
                width: 25,
                alignment:"center"
            },
            {
               
                key: "prevstepx",
                width: 15,
                alignment:"center"
            },
            {
             
                key: "firststepx",
                width: 15,
                alignment:"center"
            },
            {
               
                key: "prevstepy",
                width: 15,
                alignment:"center"
            },
            {
             
                key: "firststepy",
                width: 15,
                alignment:"center"
            },
            {
               
                key: "nhietdo",
                width: 25,
                alignment:"center"
            },
            {
              
                key: "mucthuongluu",
                width: 25,
                alignment:"center"
            },
           

        ]
        rows.map((row,index)=>{
            sheet.addRow({
                tt:index,
                time:row.timeapluctham ,
                prevstepx:row.giatrido,
                firstsetpx:row.giatrido,
                prevstepy:row.giatrido,
                firstsetpy:row.giatrido,
                nhietdo:row.giatrido,
                mucthuongluu:row.mucnuocthuongluu
            })
        })

        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "Thac-ba.xlsx";
            anchor.click();
            window.URL.revokeObjectURL(url);
          });
    }
    const handleType =(data)=>{
      setType(data)
    }
    const handleTitle =(data)=>{
      setTitleSensor(data)
    }
    const handleFirstValue=(data)=>{
        const saveDate=new Date(data)
        setFirstDate(saveDate)
        
    }
    const handleSecondValue=(data)=>{
          const saveDate=new Date(data) 
          setSecondDate(saveDate)
    }

    const handleFinding =()=>{
        if(type&&firstDate&&secondDate){
            setExport(true)
            handleTypeSenSor(titleSensor)
        }
    }
    const handleTypeSenSor =(type)=>{
        
        const a = rows.filter(row=>{
            
            return row.tenong ==type
            
        })
        console.log(a.length)
        const b =[]
        a.map((_=>{
            b.push(_)
        }))
        const handleData=(data)=>{
            setDataRows([])
            data.map((row,index)=>{
                const a=row.timeapluctham.indexOf(",")
                const b=row.timeapluctham.slice(a+1)
                let d = b.split("/");
                const data = new Date(d[2] + '/' + d[1] + '/' + d[0])
                if(data>=firstDate&&data<=secondDate){
                    setDataRows(prev=>[...prev,row])
                }
            })
        }
        handleData(b)
    }
   
    return <div className="p-2">
        <div className="wrapper flex text-blue-400 mb-5">
            <PopperButton name={handleTitle} checkTypeSensor={handleType}  menus={FactoryData}> {type===1?titleSensor:"Nhà máy" }</PopperButton>
            <PopperButton name={handleTitle} checkTypeSensor={handleType} menus={LeftSideData}> {type===2?titleSensor:"Bờ trái"  }</PopperButton>
            <PopperButton name={handleTitle} checkTypeSensor={handleType} menus={RightSideData}> {type===3?titleSensor:"Bờ phải"  }</PopperButton>
            
            <div className="ml-12">
                <span className="text-black pt-[5px] mr-2">Từ:</span>
                <button >
                    <DatePicker setValue={handleFirstValue}/>
                </button>
            </div>
            
            <div className="">
                <span className="text-black pt-[5px] mr-2">Đến:</span>
                <button className="">
                    <DatePicker setValue={handleSecondValue}/>
                </button>
            </div>
           

            <button onClick={handleFinding} className="bg-slate-50 rounded-full p-1 mr-8 px-4" >
                Tìm kiếm
            </button>
            <button onClick={ExportHandle} className={"text-sm rounded-full p-1 px-4 " +(isExport?"text-[#4285f4] bg-white border-[1px] border-[#4285f4] ":"text-slate-300 bg-white  border-[1px] border-slate-300 ")}>
                XUẤT EXCEL
            </button>
           
        </div>
        {/* disabled={!isExport}  */}
        <div className="h-14  flex text-sm bg-[#4285f4] py-2 text-gray-50 rounded-md mb-[1px] relative">
            <div className="absolute top-5 left-[245px] "> 
                 ĐO ÁP LỰC THẤM
            </div>

            <div className="absolute top-5 left-[700px] ">
                 ĐO MỨC NƯỚC SÔNG CHẢY
            </div>
        </div>
        <StyledTable className="m-0" datas={dataRows} header={columns} />

    </div> 
}

export default Report ;