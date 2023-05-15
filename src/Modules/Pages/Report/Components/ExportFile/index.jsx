
import React, {useContext, useState} from 'react'
import { rows,columns } from '../../Shared/data'
import ExcelJS from 'exceljs'
import axios from 'axios'



function ExportFile({isExport, chartBase64, data}) {
    const ExportHandle = () => {
        const workbook = new ExcelJS.Workbook()
        const sheet = workbook.addWorksheet('My Sheet')
        const long = sheet.getRow(12)
        long.height = 42.5;
        sheet.mergeCells('C1', 'E1')
        sheet.getCell('C1').value = 'Công Ty cổ phần Thủy điện Thác bà'
        sheet.getCell('C1').font = {
          bold: true,
          size: 16,
          height: 20,
        }

        sheet.getCell('C2').value = 'Tổ quan trắc'
        sheet.getCell('C2').font = {
          color: {argb: 'FF0000'},
          bold: true,
          family: 4,
          size: 13,
        }
        sheet.mergeCells('C3', 'E3')
        sheet.getCell('C3').value = 'Hệ thống thu nhập số liệu quan trắc tự động'
        sheet.getCell('C3').font = {
          color: {argb: 'FF0000'},
          size: 13,
          bold: true,
        }
        sheet.getCell('F4').value = 'Yên Bái, ngày...tháng...năm'
        sheet.getCell('F4').font = {
          italic: true,
          size: 12,
        }      
        sheet.mergeCells('A6', 'I6')
        sheet.getCell('A6').value = 'BẢNG TỔNG HỢP BÁO CÁO SỐ LIỆU TRẮC QUAN'
    
        sheet.getCell('A6').font = {
          bold: true,
          size: 16,
        }
        sheet.getCell('A6').alignment = {
          horizontal: 'center',
        }
       
    
          // Header
        sheet.getCell('A11').value = 'TT'
        sheet.getCell('A11').alignment = {
            horizontal: 'center',
          }
        sheet.getCell('A11').font = {
          bold: true,
        }
        sheet.mergeCells('B11', 'B12')
        sheet.getCell('B11').value = 'Ngày đo'
        sheet.getCell('B11').alignment = {
          horizontal: 'center',
        }
        sheet.getCell('B11').font = {
          bold: true,
        }
        sheet.mergeCells('C11', 'D11')
        sheet.getCell('C11').value = 'Sự giãn ra theo X(mm)'
        sheet.getCell('C11').alignment = {
          horizontal: 'center',
        }
        sheet.getCell('C11').font = {
          bold: true,
        }
        sheet.mergeCells('E11', 'F11')
        sheet.getCell('E11').value = 'Sự giãn ra theo Y(mm)'
        sheet.getCell('E11').alignment = {
         
          horizontal: 'center',
        }
        sheet.getCell('E11').font = {
          bold: true,
        }
        sheet.mergeCells('G11', 'G12')
        sheet.getCell('G11').value = 'Nhiệt độ không khí'
        sheet.getCell('G11').alignment = {
         
          horizontal: 'center',
        }
        sheet.getCell('G11').font = {
          bold: true,
        }
        sheet.mergeCells('H11', 'H12')
        sheet.getCell('H11').value = 'Cao độ mực nước thượng lưu'
        sheet.getCell('H11').alignment = {
          
          horizontal: 'center',
        }
        sheet.getCell('H11').font = {
          bold: true,
        }
        sheet.mergeCells('I11', 'I12')
        sheet.getCell('I11').value = 'Ghi chú'
        sheet.getCell('I11').alignment = {
          horizontal: 'center',
        }
        sheet.getCell('I11').font = {
          bold: true,
        }
        sheet.getRow(12).values = [
          '',
          '',
          'So với lần kề trước',
          'So với lần đầu tiên',
          'So với lần kề trước',
          'So với lần đầu tiên',
          '',
        ]
        sheet.getCell('C12').alignment={
          wrapText:true,
          horizontal:'center'
        }
        sheet.getCell('D12').alignment={
          wrapText:true,
          horizontal:'center'
        }
        sheet.getCell('E12').alignment={
          wrapText:true,
          horizontal:'center'
        }
        sheet.getCell('F12').alignment={
          wrapText:true,
          horizontal:'center'
        }
       
        // Body
        sheet.getRow(12).font = {
          bold: true,
        }

        sheet.columns = [
          {
            key: 'tt',
            width: 5,
            alignment: 'center',
          },
          {
            key: 'time',
            width: 25,
            alignment: 'center',
          },
          {
            key: 'prevstepx',
            width: 15,
            alignment: 'center',
          },
          {
            key: 'firststepx',
            width: 15,
            alignment: 'center',
          },
          {
            key: 'prevstepy',
            width: 15,
            alignment: 'center',
          },
          {
            key: 'firststepy',
            width: 15,
            alignment: 'center',
          },
          {
            key: 'nhietdo',
            width: 25,
            alignment: 'center',
          },
          {
            key: 'mucthuongluu',
            width: 25,
            alignment: 'center',
          },
        ]
        
        const promise =  Promise.all(
        rows.map(async (row, index) => {
          sheet.addRow({
            tt: index,
            time: row.timeapluctham,
            prevstepx: row.giatrido,
            firstsetpx: row.giatrido,
            prevstepy: row.giatrido,
            firstsetpy: row.giatrido,
            nhietdo: row.giatrido,
            mucthuongluu: row.mucnuocthuongluu,
          })
          
          
          /// Nếu lấy ảnh từ API
          // const result = await toDataURL('https://i.dummyjson.com/data/products/1/thumbnail.jpg');
          //   const splitted = 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'.split(".");
          //   const extName = splitted[splitted.length - 1];
    
          //   const imageId2 = workbook.addImage({
          //     base64: result.base64Url,
          //     extension: extName,
          //   });
          // const imageBuffer = await axios.get('./logo2.png', { responseType: 'arraybuffer' });
          // const imageId2 = workbook.addImage({
          //   buffer: imageBuffer.data,
          //   extension: 'png',
          // });
            // sheet.addImage(imageId2, 'A1:B2');
        })

        )
        
        const promise1 =Promise.all(
          [...Array(1)].map(async () => {
            const imageBuffer = await axios.get('./logo2.png', { responseType: 'arraybuffer' });
            const imageId2 = workbook.addImage({
              buffer: imageBuffer.data,
              extension: 'png',
            });
              sheet.addImage(imageId2, 'A1:B2');
          })
          )
          
       
        // Lấy ảnh từ base64
        var imagethu = workbook.addImage({ 
            base64: myBase64Image,
            extension: 'png',
        })
        sheet.addImage(imagethu, 'A110:I124');
        sheet.mergeCells('A110','I124')

         // b là chiều dài của data để vẽ border
         for (var i = 1; i <= 9; i++) {
          for (var b = 11; b <= 108; b++) {
            sheet.getCell(b, i).border = {
              top: {style: 'medium'},
              left: {style: 'medium'},
              bottom: {style: 'medium'},
              right: {style: 'medium'},
            }
          }
        }
    
        
        promise1.then(()=>{
          promise.then(() => {
          
            workbook.xlsx.writeBuffer().then(function (data) {
              const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              });
              const url = window.URL.createObjectURL(blob);
              const anchor = document.createElement("a");
              anchor.href = url;
              anchor.download = "thacba.xlsx";
              anchor.click();
              window.URL.revokeObjectURL(url);
            });
          });
        })
      }
   
    return <button
     onClick={ExportHandle}
        disabled={!isExport}
        className={
      'text-sm rounded-full p-1 px-4 ml-2 ' +
      (isExport
        ? 'text-[#4285f4] bg-white border-[1px] border-[#4285f4] '
        : 'text-slate-300 bg-white  border-[1px] border-slate-300 ')
        }
  >
    XUẤT EXCEL
  </button>
}

export default ExportFile;