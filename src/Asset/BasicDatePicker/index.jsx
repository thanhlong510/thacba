import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function  BasicDatePicker({setValue}) {
   
    return (
         <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DemoContainer 
           components={['DatePicker']}
           sx={{
            width:150,
            
            '& .MuiStack-root': {  width: "100%" },
           }}
           >
          <DatePicker 
          sx={{
              '& .MuiTextField-root': {  minWidth: '150 !important' },
           }}
          label="Date"  
          slotProps={{ textField: { size: 'small'} }}
          onChange={(newValue)=>setValue(newValue)}
         
          />
        </DemoContainer>
      </LocalizationProvider>
   
     
     
    );}

export default  BasicDatePicker;