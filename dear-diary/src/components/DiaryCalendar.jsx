import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DiaryCalendar = props => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    
    const onDayClick = date => {
        let newDate = date.toLocaleDateString()        
        newDate = newDate.replace(/\//g, '-')
        props.history.push(`/diary/${newDate}`)
    }
    
    return(
        <div className='calendar'>
            <Calendar
                onChange={onChange}
                value={date}
                onClickDay={onDayClick}
            />
        </div>
    )
}

export default DiaryCalendar