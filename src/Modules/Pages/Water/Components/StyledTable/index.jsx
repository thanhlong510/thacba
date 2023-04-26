import { DataGrid} from '@mui/x-data-grid';
import { Box, Pagination} from "@mui/material";
import { useState } from 'react';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import PaginationItem from '@mui/material/PaginationItem';
import CancelIcon from '@mui/icons-material/Cancel';
const PAGE_SIZE=10


// Do need to add the number order. Adjust the row in a page by changing PAGE_SIZE above
function StyledTable({datas,header}) {
    const columns =[{ field: 'stt',headerName:"STT",minWidth:40,flex:1, sortable: false, disableColumnMenu:true,headerAlign:"center", headerClassName: ' super-app-theme--header'  }, 
    { field: 'time',headerName:"Thời gian",minWidth:50,flex:2, sortable: false, disableColumnMenu:true,headerAlign:"left",headerClassName: 'super-app-theme--header'},
    { field: 'mucthuongluu',headerName:"Mức Thượng Lưu (M)",minWidth:180,flex:2, sortable: false, disableColumnMenu:true,headerAlign:"left", headerClassName: 'super-app-theme--header' },
    { field: 'nguongthuongluu',headerName:"Ngưỡng Thượng Lưu (M)",minWidth:190,flex:2, sortable: false, disableColumnMenu:true,headerAlign:"left", headerClassName: 'super-app-theme--header' },
    { field: 'muchaluu',headerName:"Mức Hạ Lưu (M)",minWidth:50,flex:2, sortable: false, disableColumnMenu:true,headerAlign:"left", headerClassName: 'super-app-theme--header' }, 
    { field: 'nguonghaluu',headerName:"Ngưỡng Hạ Lưu (M)",minWidth:50,flex:2, sortable: false, disableColumnMenu:true,headerAlign:"left", headerClassName: 'super-app-theme--header' }, 
  ]
    const [paginationModel, setPaginationModel] = useState({pageSize: PAGE_SIZE,page: 0,});

    function CustomPagination() {
      const apiRef = useGridApiContext();
      const page = useGridSelector(apiRef, gridPageSelector);
      const pageCount = useGridSelector(apiRef, gridPageCountSelector);
      return (
        <Pagination
          color="primary"
          variant="outlined"
          shape="rounded"
          page={page + 1}
          count={pageCount}
          renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
        );
      }
    
      const data =datas.map((a,index)=>{
        a.stt=(index+1).toString()
        a.id =index+1
            return a
        })
    
        const MyCustomNoRowsOverlay = () => (
           <div> <CancelIcon/> Chưa có dữ liệu</div>
        );
    return <div >
    <Box
      sx={{ height: 520, 
            width:"100%",
          '& .super-app-theme--header': {
            color:"white",
            backgroundColor: '#4285f4',
            fontSize: "14px",

            } }}>
    <DataGrid
      
      
      sx={{
        '&  .MuiDataGrid-columnSeparator': {
          display: 'none',
          width:"100%"
      }, 
          "& .MuiDataGrid-row": {
          borderTop: 0,
          borderBottom: 1
      },
          "& .MuiDataGrid-cell": {
              border: 1,
              borderRight: 0,
              borderTop: 0,
              
      },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#4285f4',
        
      },

      }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
          noRowsOverlay: MyCustomNoRowsOverlay
        }}
       
      showCellRightBorder={true}
      rows={data} 
      columns={header} />
    </Box>

    </div>
}

export default StyledTable;