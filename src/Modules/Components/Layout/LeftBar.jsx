import React, {Children, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../Asset/Image/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import PersonIcon from '@mui/icons-material/Person'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MapIcon from '@mui/icons-material/Map'

const LeftBar = (props) => {
  const generate = (index) => {
    switch (index) {
      case +0:
        return (
          <Link to="/">
            <DashboardIcon /> {props.toggleBar && 'Bảng Tin'}
          </Link>
        )
      case +1:
        return (
          <Link to="/map">
            <MapIcon /> {props.toggleBar && 'Bản đồ'}
          </Link>
        )
      case +2:
        return (
          <Link to="/chart">
            <BarChartIcon /> {props.toggleBar && 'Biểu Đồ'}
          </Link>
        )
      case +3:
        return (
          <Link to="/report">
            <AssignmentIcon /> {props.toggleBar && 'Báo Cáo'}
          </Link>
        )
      case +4:
        return (
          <Link to="/water">
            <WarningAmberIcon /> {props.toggleBar && 'Dữ liệu mực nước '}
          </Link>
        )
      case +5:
        return (
          <Link to="/user">
            <PersonIcon /> {props.toggleBar && 'Quản Lý Người Dùng'}
          </Link>
        )
      default:
        return (
          <Link to="/">
            <DashboardIcon /> {props.toggleBar && 'Bảng Tin'}
          </Link>
        )
    }
  }

  const [index, setIndex] = useState(+0)
  const handleChangeMenu = (index) => {
    setIndex(index)
  }

  return (
    <div
      className={
        'LeftBar  h-auto text-lg bgr-bar text-white ' +
        (props.toggleBar ? 'w-[262px]' : 'w-20')
      }
    >
      <ul>
        <div
          className={`flex flex-row ${
            props.toggleBar ? '' : 'justify-center'
          } h-16 xl:text-base 2xl:text-[23px] flex items-center`}
          href="/"
        >
          <span
            className={`${
              props.toggleBar ? 'w-1/3' : 'w-full'
            } text-center h-full flex justify-center items-center`}
          >
            <img className="" src={logo} alt="logo" />
          </span>
          {props.toggleBar ? (
            <span className="w-2/3 font-bold">
              {props.toggleBar && 'THUẬN PHONG'}
            </span>
          ) : null}
        </div>
        <hr style={{borderTop: '1px solid hsla(0,0%,100%,.15)'}} />

        {Children.toArray(
          [...Array(6)].map((_, i) => (
            <li
              className={i === index ? 'p-4 pl-7 text-[#fbbf24]' : 'p-4 pl-7'}
              onClick={() => handleChangeMenu(i)}
            >
              {generate(i)}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default LeftBar
