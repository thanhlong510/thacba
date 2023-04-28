import DatePicker from '../ChartPage/Component/DatePicker'
import {creatTitle} from '../../Components/App/index'
import React, {useContext, useState} from 'react'
import StyledTable from './Components/StyledTable'
import {rows, columns} from './Shared'
import TextField from '@mui/material/TextField'

function Water() {
  useContext(creatTitle).handleTitle('Dữ liệu mực nước')
  const [firstDate, setFirstDate] = useState('')
  const [secondDate, setSecondDate] = useState('')
  const [highData, setHighData] = useState('') // Gia tri nhap vao
  const [lowData, setLowData] = useState('')
  const [data, setData] = useState(rows) // gia tri de hien thi tren table

  const handleFirstValue = (data) => {
    const saveDate = new Date(data)
    setFirstDate(saveDate)
  }
  const handleSecondValue = (data) => {
    const saveDate = new Date(data)
    setSecondDate(saveDate)
  }

  // Tim du lieu trong khoang
  const handleData = () => {
    setData([])
    const a = rows.map((row, index) => {
      const a = row.time.indexOf(',')
      const b = row.time.slice(a + 1)
      let d = b.split('/')
      const data = new Date(d[2] + '/' + d[1] + '/' + d[0])
      if (data >= firstDate && data <= secondDate) {
        setData((prev) => [...prev, row])
      }
    })
    return a
  }

  return (
    <div className="mx-2">
      <div className="header flex justify-end mt-2 ">
        <p className="mt-1.5">Từ ngày:</p>
        <button className="text-sm mx-4 text-cyan-500">
          <DatePicker setValue={handleFirstValue} />
        </button>
        <p className="mt-1.5">Đến ngày:</p>
        <button className="text-sm mx-4 text-cyan-500">
          <DatePicker setValue={handleSecondValue} />
        </button>
        <button
          onClick={handleData}
          className=" rounded-full px-6 mr-4 text-sm boder-[1px] border-sky-500 shadow-card  text-cyan-500"
        >
          Tìm kiếm
        </button>
      </div>

      <div className="flex justify-between my-2 ">
        <span className="text-red-600 pt-6 font-semibold ">
          Nhập giá trị đo mức sông Chảy
        </span>

        <div>
          <div className="italic text-sm">Nhập mực nước thượng lưu (m)</div>
          <input
            onChange={() => setHighData(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ví dụ: 102.5"
          ></input>
        </div>
        <div>
          <div className="italic text-sm">Nhập mực nước hạ lưu lưu (m)</div>
          <input
            onChange={() => setLowData(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ví dụ: 102.5"
          ></input>
        </div>
        <div>
          <div className="italic text-sm ml-4">Chọn ngày</div>
          <button className="text-sm mx-4 text-cyan-500">
            <DatePicker setValue={handleSecondValue} />
          </button>
        </div>
        <button className="border-1 h-3/5 mt-5 py-1 px-4 text-white bg-sky-500 rounded-full">
          Lưu giá trị
        </button>       
      </div>

      <StyledTable datas={data} header={columns} />
    </div>
  )
}

export default Water
