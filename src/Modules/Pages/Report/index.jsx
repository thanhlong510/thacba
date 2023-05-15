import {creatTitle} from '../../Components/App/index'
import React, {useContext, useState} from 'react'
import {
  FactoryData,
  LeftSideData,
  RightSideData,
} from '../ChartPage/Shared/chartdata'
import DatePicker from '../ChartPage/Component/DatePicker'
import PopperButton from '../ChartPage/Component/PopperButton'
import StyledTable from '../Water/Components/StyledTable'
import {rows, columns} from './Shared/data'
import ExportFile from './Components/ExportFile'

const toDataURL = (url) => {
  const promise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      var reader = new FileReader()
      reader.readAsDataURL(xhr.response)
      reader.onloadend = function () {
        resolve({base64Url: reader.result})
      }
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  })

  return promise
}

function Report() {
  useContext(creatTitle).handleTitle('Báo cáo')
  const [titleSensor, setTitleSensor] = useState('')
  const [type, setType] = useState('')
  const [firstDate, setFirstDate] = useState('')
  const [secondDate, setSecondDate] = useState('')
  const [isExport, setExport] = useState(false)
  const [dataRows, setDataRows] = useState([])

  console.log(firstDate,secondDate)
  const handleType = (data) => {
    setType(data)
  }
  const handleTitle = (data) => {
    setTitleSensor(data)
  }
  const handleFirstValue = (data) => {
    setFirstDate(data)
  }
  const handleSecondValue = (data) => {
    setSecondDate(data)
  }
  const handleFinding = () => {
    if (type && firstDate && secondDate) {
      setExport(true)
      //Tim cam bien
      handleTypeSenSor(titleSensor)
    }
  }
  const handleTypeSenSor = (type) => {
    const a = rows.filter((row) => {
      return row.tenong == type
    })

    // Tim ngay thang nam
    const b = []
    a.map((_) => {
      b.push(_)
    })
   
    const handleData = (data) => {
      setDataRows([])
      data.map((row, index) => {
        const a = row.timeapluctham.indexOf(',')
        const b = row.timeapluctham.slice(a + 1)
        let d = b.split('/')
        console.log(firstDate,secondDate)
        const data = new Date(d[2] + '/' + d[1] + '/' + d[0])
        if (data >= firstDate && data <= secondDate) {
          setDataRows((prev) => [...prev, row])
        }
      })
    }
    handleData(b)
  }

  return (
    <div className="p-2">
      <div className="wrapper flex justify-between text-blue-400 mb-5">
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={FactoryData}
        >
          {' '}
          {type === 1 ? titleSensor : 'Nhà máy'}
        </PopperButton>
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={LeftSideData}
        >
          {' '}
          {type === 2 ? titleSensor : 'Bờ trái'}
        </PopperButton>
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={RightSideData}
        >
          {' '}
          {type === 3 ? titleSensor : 'Bờ phải'}
        </PopperButton>

        <div className="ml-8">
          <span className="text-black pr-1 pt-[5px] ">Từ:</span>
          <button>
            <DatePicker setValue={handleFirstValue} />
          </button>
        </div>

        <div className="">
          <span className="text-black pr-1 pt-[5px] ">Đến:</span>
          <button className="">
            <DatePicker setValue={handleSecondValue} />
          </button>
        </div>

        <button
          onClick={handleFinding}
          className="border-[1px] shadow-card  border-sky-700 text-sky-700 rounded-full p-1 px-1"
        >
          Tìm kiếm
        </button>
        <ExportFile isExport={isExport}/>

        
      </div>

      <div className="h-14  flex text-sm bg-[#4285f4] py-2 text-gray-50 rounded-md mb-[1px] relative">
        <div className="absolute top-5 left-[245px] ">ĐO ÁP LỰC THẤM</div>

        <div className="absolute top-5 left-[700px] ">
          ĐO MỨC NƯỚC SÔNG CHẢY
        </div>
      </div>
      <StyledTable className="m-0" datas={dataRows} header={columns} />
    </div>
  )
}

export default Report
