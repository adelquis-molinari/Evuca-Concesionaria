import React, {useState} from 'react';
import './config.css'
import DiasActivos from './DiasActivos';

const Config = () => {
    const [diasActivos, setDiasActivos] = useState(false);
    return ( 
        <div>
            <h1 className="h1-cf-top" >Config</h1>
            <div className="content-cf-main">
                <div className="content-left">
                    <div className="content-left-header">
                        <button
                            className="btn-content-left-header"
                            onClick={() => {
                                setDiasActivos(!diasActivos);
                            }}
                        >Días Activos</button>
                    </div>
                </div>
                <div className="content-right">
                    {diasActivos ? <DiasActivos /> : null}
                </div>
            </div>
        </div>
     );
}
 
export default Config;