import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setmonths} from '../../../actions';

const MesesActivos = () => {
    const dispatch= useDispatch();
    const [mounts, setMounths] = useState(0);
    const handlerTimes = e => {
        setMounths(e.target.value)
    }
    const sumitMounths = () => {
        dispatch(setmonths(mounts));
    }
    return ( 
        <div className="conteiner-shift">
            <h2>Meses activos</h2>
            <p>Indique los meses que quiere que el calendario permanesca activo.</p>
            <div className="content-dias-activos">
                <select 
                    className="select-shift"
                    onChange={(e) => handlerTimes(e)}
                    name="lista-meses" 
                    id="lista-meses"
                >
                    <option className="select-shift" value="1">1 mes</option>
                    <option className="select-shift" value="2">2 meses</option>
                    <option className="select-shift" value="3">3 meses</option>
                    <option className="select-shift" value="4">4 meses</option>
                    <option className="select-shift" value="5">5 meses</option>
                    <option className="select-shift" value="6">6 meses</option>
                    <option className="select-shift" value="12">12 meses</option>
                </select>
                <button
                    className="btn-content-left-header"
                    onClick={() => { sumitMounths()}}
                >Guardar Cambios</button>
            </div>
        </div>
     );
}
 
export default MesesActivos;