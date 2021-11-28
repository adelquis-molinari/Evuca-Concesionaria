import React from 'react';

const DiasActivos = () => {
    return ( 
        <div>
            <h2>Meses activos</h2>
            <p>Indique los meses que quiere que el calendario permanesca activo.</p>
            <div className="content-dias-activos">
                <select name="lista-meses" id="lista-meses">
                    <option value="1">1 mes</option>
                    <option value="2">2 meses</option>
                    <option value="3">3 meses</option>
                    <option value="4">4 meses</option>
                    <option value="5">5 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                </select>
            </div>
        </div>
     );
}
 
export default DiasActivos;