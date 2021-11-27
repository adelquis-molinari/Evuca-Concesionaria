import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { v4 as uuidv4 } from 'uuid';
import './calendario.css';
import 'react-calendar/dist/Calendar.css'
const Calendario= () => {
    const [value, onChange] = useState(new Date());
    const dates = new Date()
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const date = day + '/' + month + '/' + year;
    const [dateDay, setDateDay] = useState({
      id: uuidv4(),  
      day: day,
      month: month,
      year: year
    });
    // dia actual
    // console.log(date);
    // sumar un mes mas a la fecha actual
    const nextMonth = new Date(dates.setMonth(dates.getMonth() + 1));
return (
    <div className="calendario-base">
          <Calendar
            minDate={new Date()}
            maxDate={nextMonth}
            onChange={onChange}
            value={value}
          />
      {value && <p>Selected date: {date}</p>}
    </div>
);

}

export default Calendario;