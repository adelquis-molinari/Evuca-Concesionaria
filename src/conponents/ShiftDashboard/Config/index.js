import React, {useState} from 'react';
import './config.css'
import MesesActivos from './MesesActivos';

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
                        >Meses Activos</button>
                    </div>
                </div>
                <div className="content-right">
                    {diasActivos ? <MesesActivos /> : null}
                </div>
            </div>
        </div>
     );
}
 
export default Config;