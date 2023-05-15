import axios from 'axios'
import LineChart from './Component/LineChart'
import PopperButton from './Component/PopperButton'
import {FactoryData, LeftSideData, RightSideData} from './Shared/chartdata'
import {creatTitle} from '../../Components/App/index'
import React, {useContext, useState} from 'react'
import ResponsivePickers from '../../../Asset/DatePicker'
import { useRef } from 'react'

function ChartPage() {
  axios({
    method: 'get',
    url: 'https://api.dulieuthuyloivietnam.vn/api/sensor/box?id=GOIBGJOQ&max_ts=1683219599000&min_ts=1683133200000',
    
  })
    .then(function (response) {
      
    });

  const titleForChart = 'BIỂU ĐỒ MỰC NƯỚC THƯỢNG LƯU, HẠ LƯU SÔNG CHẢY (M)'
  useContext(creatTitle).handleTitle('Biểu đồ')
  const [titleSensor, setTitleSensor] = useState('')
  const [type, setType] = useState('')
  const [firstDate,setFirstDate]=useState('')
  const [secondDate,setSecondDate]=useState('')
  const chartRef = useRef(null);
  const handleType = (data) => {
    setType(data)
  }
  const handleTitle = (data) => {
    setTitleSensor(data)
  }
  const handleFirstValue =(data)=>{
    data.$d.setHours(0)
    data.$d.setMinutes(0)
    data.$d.setSeconds(0)
    setFirstDate(Date.parse(data.$d))
  }
  const handleSecondValue =(data)=>{
    data.$d.setHours(23)
    data.$d.setMinutes(59)
    data.$d.setSeconds(59)
    console.log(Date.parse(data.$d) )
    setSecondDate(Date.parse(data.$d))
  }

  return (
    <div className="pl-3 pt-3 text-blue-400">
      <div className="wrapper flex">
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={FactoryData}
        >
          {type === 1 ? titleSensor : 'Nhà máy'}
        </PopperButton>
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={LeftSideData}
        >
          {type === 2 ? titleSensor : 'Bờ trái'}
        </PopperButton>
        <PopperButton
          name={handleTitle}
          checkTypeSensor={handleType}
          menus={RightSideData}
        >
          {type === 3 ? titleSensor : 'Bờ phải'}
        </PopperButton>
        <div className="ml-[30px] mr-3 mt-[-5px] ">
          <span className="">Từ ngày:  </span>
          <button>
            <ResponsivePickers setValue={handleFirstValue}/>
          </button>
        </div>
        <div className='mt-[-5px]' >
          <span className="">Đến ngày:  </span>
          <button  >
            <ResponsivePickers setValue={handleSecondValue}/>
          </button>
        </div>
        
        <button
          className=" rounded-full h-[30px] ml-2 mt-[1.5px] px-6 mr-4 text-sm boder-[1px] border-sky-500 shadow-card  text-cyan-500"
        >
          Tìm kiếm
        </button>
      </div>

      <div className="w-8/12 h-full mx-auto mt-10">
        <LineChart  ref={chartRef}  title={titleForChart} />
        {titleSensor && <LineChart title={titleSensor} />}
      </div>
    </div>
  )
}

export default ChartPage
