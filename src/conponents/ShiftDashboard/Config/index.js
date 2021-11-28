import React, {useState} from 'react';
import './config.css'
import MesesActivos from './MesesActivos';
import Horarios from './Horarios';

const Config = () => {
    const [diasActivos, setDiasActivos] = useState(false);
    const [horas, setHoras] = useState(false);

    const handleClick = (e) => {
        if (e.target.name === 'diasActivos') {
            setDiasActivos(!diasActivos);
            setHoras(false);
        }
        if (e.target.name === 'horas') {
            setHoras(!horas);
            setDiasActivos(false);
        }
    }
    return ( 
        <div>
            <h1 className="h1-cf-top" >Configuración</h1>
            <div className="content-cf-main">
                <div className="content-left">
                    <div className="content-left-header">
                        <button
                            name="diasActivos"
                            className="btn-content-left-header"
                            onClick={handleClick}
                        >Meses Activos</button>
                    </div>
                    <div className="content-left-header">
                        <button
                            name="horas"
                            className="btn-content-left-header"
                            onClick={handleClick}
                        >Horarios</button>
                    </div>
                </div>
                <div className="content-right">
                    {diasActivos ? <MesesActivos /> : null}
                    {horas ? <Horarios /> : null}
                </div>
            </div>
        </div>
     );
}
 
export default Config;