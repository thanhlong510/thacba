import {
  Box,
  Button,
  Grid,
  Pagination,
  Tab,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import {styled} from '@mui/material/styles'
import React, {useContext, useState} from 'react'
import {creatTitle} from '../../Components/App/index'
import {DataGridPro} from '@mui/x-data-grid-pro'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid'

function UserManagement() {
  useContext(creatTitle).handleTitle('Quản lí người dùng')
  const columns = [
    {field: 'stt', headerName: 'STT', width: 50},
    {field: 'time', headerName: 'NGÀY/GIỜ', width: 150},
    {field: 'mucthuongluu', headerName: 'MỨC NƯỚC THƯỢNG LƯU (M)', width: 200},
    {field: 'nguongthuongluu', headerName: 'NGƯỠNG TỚI HẠN TL (M)', width: 200},
    {field: 'muchaluu', headerName: 'MỨC NƯỚC HẠ LƯU (M)', width: 200},
    {field: 'nguonghaluu', headerName: 'NGƯỠNG TỚI HẠN HL (M)'},
  ]
  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#4285F4',
      color: '#FFFFFF',
      height: 36,
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      height: 36,
    },
    // height: 10
  }))

  const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    backgroundColor: 'orange',
  }))

  const rows = [
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/06/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/03/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/07/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/02/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/02/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/10/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/11/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/12/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/01/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/07/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 20/04/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '18:00, 24/06/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 19/05/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 29/03/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/10/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 05/03/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/02/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 02/01/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 19/05/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 29/03/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/10/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 05/12/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 23/09/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
    {
      time: '16:00, 02/08/2023',
      mucthuongluu: '45',
      nguongthuongluu: '-',
      muchaluu: '27',
      nguonghaluu: '-',
    },
  ]
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const a = rows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  )
  const row = a.map((a, index) => {
    a.stt = (index + 1).toString()
    a.id = index + 1
    return a
  })

  const handleChange = (event, value) => {
    setPage(value)
    console.log(value)
  }
  return (
    <div className="User bg-white xl:h-[91vh] 2xl:h-[93.5vh]">
      <div className="px-[67px] pt-[22px]">
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6} className="text-right">
            <Button
              variant="outlined"
              sx={{
                border: '2px solid #4285F4',
                borderRadius: '40px',
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '19px',
              }}
            >
              Thêm mới người dùng
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default UserManagement
