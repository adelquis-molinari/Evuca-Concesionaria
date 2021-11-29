import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './index.css'

const InputSelect = ({setTime}) => {
    const hours = useSelector(state => state?.hours? state.hours : 0);
    const morning = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"];
    const afternoon = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]
    const fullTimes = [...morning, ...afternoon];
    const handlerTime = (e) => {
        setTime(e.target.value);
    }
    let timer =useRef(fullTimes);

    useEffect(() => {
    if (hours === "1") {
        timer.current = morning;
        return;
    }
    if (hours === "2") {
        timer.current = afternoon;
        return
    }
    }, [hours]);
    return ( 
        <div className="content-shift">
                <select 
                    name="select-shift"
                    id="select-shift"
                    className="select-shift"
                    onChange={(e) => handlerTime(e)}
                    >
                    {timer.current.map((time, index) => (
                        <option
                        className="option-shift"
                        key={index} 
                        value={time}>{time}</option>
                    ))
                    }
                </select>
            </div>
    );
}

export default InputSelect;