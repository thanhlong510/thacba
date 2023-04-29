import {Grid} from '@mui/material'
import React, {useContext} from 'react'
import {creatTitle} from '../../Components/App/index'
function DashBoard({props}) {
  
  useContext(creatTitle).handleTitle('Bảng tin')
  return (
    <div className="DashBoard m-7">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="bg-white shadow-xl border-2 border-solid border-[#4285F4] rounded-[15px] h-[200px] flex flex-col justify-center items-center">
            <p className="uppercase text-[#4285F4] font-bold leading-[19px]">
              đo thấm dấu
            </p>
            <p className="text-[#4285F4] font-[1000] text-[100px] leading-[117px]">
              0
            </p>
            <p className="text-[#4285F4] font-normal italic text-base leading-[16px]">
              Số báo động
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="bg-white shadow-xl border-2 border-solid border-[#EA4335] rounded-[15px] h-[200px] flex flex-col justify-center items-center">
            <p className="uppercase text-[#EA4335] font-bold leading-[19px]">
              đo áp lực thấm dấu
            </p>
            <p className="text-[#EA4335] font-[1000] text-[100px] leading-[117px]">
              2
            </p>
            <p className="text-[#EA4335] font-normal italic text-base leading-[16px]">
              Số báo động
            </p>
          </div>
          {true ? (
            <>
              <div className="bg-white shadow-xl border-2 border-solid border-[#EA4335] rounded-[15px] h-[111px] mt-[11px] p-4 text-justify">
                <span className="text-[#EA4335]">09:00, 31/12/2022: </span>
                <span className="text-[#4285F4]">áp lực thấm dấu </span>
                <span className="text-[#303030]">đo tại </span>
                <span className="text-[#4285F4]">Ống số 3 (22) </span>
                <span>đạt</span>
                <span className="text-[#EA4335]">111.3m cao hơn </span>
                <span className="text-[#303030]">ngưỡng cho phép </span>
                <span className="text-[#EA4335]">10m</span>
              </div>
              <div className="bg-white shadow-xl border-2 border-solid border-[#EA4335] rounded-[15px] h-[111px] mt-[11px] p-4 text-justify">
                <span className="text-[#EA4335]">09:00, 31/12/2022: </span>
                <span className="text-[#4285F4]">áp lực thấm dấu </span>
                <span className="text-[#303030]">đo tại </span>
                <span className="text-[#4285F4]">Ống số 3 (22) </span>
                <span>đạt</span>
                <span className="text-[#EA4335]">111.3m cao hơn </span>
                <span className="text-[#303030]">ngưỡng cho phép </span>
                <span className="text-[#EA4335]">10m</span>
              </div>
            </>
          ) : null}
        </Grid>
        <Grid item xs={4}>
          <div className="bg-white shadow-xl border-2 border-solid border-[#4285F4] rounded-[15px] h-[200px] flex flex-col justify-center items-center">
            <p className="uppercase text-[#4285F4] font-bold leading-[19px]">
              đo khe co giãn dấu
            </p>
            <p className="text-[#4285F4] font-[1000] text-[100px] leading-[117px]">
              0
            </p>
            <p className="text-[#4285F4] font-normal italic text-base leading-[16px]">
              Số báo động
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default DashBoard
