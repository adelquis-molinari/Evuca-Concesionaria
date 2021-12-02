import React, {useState} from 'react';
import Swal from 'sweetalert2';
import{useDispatch} from 'react-redux';
import {setHours} from '../../../actions';

const Horarios = () => {
    const dispatch= useDispatch();
    const [hour, setHour] = useState(0);
    const handlerTimes = e => {
        setHour(e.target.value)
    }
    const sumitMounths = () => {
        dispatch(setHours(hour));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'cambios guardados',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return ( 
        <div className="conteiner-shift">
            <h2>Horarios</h2>
            <p>Establece la jornada laboral esgun dias indicados.</p>
            <p>Por defecto la jornada es Full Time.</p>
            <div className="content-dias-activos">
                <select 
                    className="select-shift"
                    onChange={(e) => handlerTimes(e)}
                    name="lista-meses" 
                    id="lista-meses"
                >
                    <option className="select-shift" value="0">Full Time</option>
                    <option className="select-shift" value="1">Mañana</option>
                    <option className="select-shift" value="2">Tarde</option>
                </select>
                <button
                    className="btn-content-left-header"
                    onClick={sumitMounths}
                >Guardar Cambios</button>
            </div>
        </div>
    );
}

export default Horarios;