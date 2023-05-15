import React, {useRef} from 'react'
import dayjs from 'dayjs';
const DatePicker = ({setValue}) => {
  const dateInputRef = useRef(null)
  const handleChange = (e) => {
    setValue( Date.parse( e.target.value))
    console.log(Date.parse(e.target.value))
  }
 
  return (
    <div>
      <input
        className="shadow-card boder-2 w-32 px-2 py-1 mr-2 rounded-full"
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
        placeholder={dayjs(new Date())}
      />
    </div>
  )
}

export default DatePicker
