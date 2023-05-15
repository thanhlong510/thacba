import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function ResponsivePickers({setValue}) {
  const handleChange = (e) => {
   setValue(e) 
  }
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        sx={{
          "& .MuiInputBase-input": {
          padding: '2px'
        }, 
       "& .MuiInputBase-root": {
          borderRadius: '50px',
        
        }, 
            }}
        components={['DatePicker', 'DesktopDatePicker', 'MobileDatePicker']}
      >
        <DemoItem>
          <DatePicker
          onChange={handleChange}
          className='w-[140px] h-14' defaultValue={dayjs(new Date())} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}