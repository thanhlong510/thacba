import React, { useRef} from 'react';

const DatePicker = ({setValue}) => {
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
    setValue(e.target.value)
};
return ( <div >
    <input className='bg-slate-50 rounded-full p-1'
    type="date"
    onChange={handleChange}
    ref={dateInputRef}
    />
    </div> );
};

export default DatePicker;