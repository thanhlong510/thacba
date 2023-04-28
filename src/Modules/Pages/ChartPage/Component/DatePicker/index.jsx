import React, {useRef} from 'react'

const DatePicker = ({setValue}) => {
  const dateInputRef = useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input
        className="shadow-card boder-2 w-32 px-2 py-1 mr-2 rounded-full"
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </div>
  )
}

export default DatePicker
