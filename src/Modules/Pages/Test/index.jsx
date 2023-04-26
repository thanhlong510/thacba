import { useState } from "react";
import ExcelJS from "exceljs"
import {rows} from "../Water/Shared/index"
function ExportExel({title,data}) {
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
        
        sheet.getRow(4).values = ['ID', 'Thời gian', 'Mức thượng lưu', 'Ngưỡng thượng lưu','Mức hạ lưu','Ngưỡng hạ lưu'];
        sheet.columns= [
            {
                key: "id",
                width: 25,
                alignment:"center"
            },
            {
               
                key: "time",
                width: 25,
                alignment:"center"
            },
            {
               
                key: "highlevel",
                width: 25,
                alignment:"center"
            },
            {
             
                key: "highthreshold",
                width: 25,
                alignment:"center"
            },
            {
               
                key: "lowlevel",
                width: 25,
                alignment:"center"
            },
            {
              
                key: "lowthreshold",
                width: 25,
                alignment:"center"
            },
           

        ]
        rows.map((row,index)=>{
            sheet.addRow({
                id:index,
                time:row.time,
                highlevel:row.mucthuongluu,
                highthreshold: row.nguongthuongluu,     
                lowlevel:row.muchaluu,
                lowthreshold: row.nguonghaluu
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




    return <div>
        <button className="bg-slate-300 rounded-full p-2" onClick={ExportHandle}>Xuất file</button>
    </div>
}

export default ExportExel;