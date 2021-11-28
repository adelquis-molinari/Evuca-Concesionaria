import React, {useState }from 'react';
import './index.css'

const InputSelect = ({setTime}) => {
    const [isSelected, setIsSelected] = useState(false);
    // intervalos de 30 minutos

    const turn = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00","16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

    const handlerTime = (e) => {
        setIsSelected(false);
        setTime(e.target.value);
    }
    return ( 
        <div className="content-shift">
                <select 
                    name="select-shift"
                    id="select-shift"
                    className="select-shift"
                    onChange={(e) => handlerTime(e)}
                    >
                    {
                        turn.map((item, index) => {
                            return (
                                <option
                                className="option-shift"
                                key={index} 
                                value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
    );
}

export default InputSelect;