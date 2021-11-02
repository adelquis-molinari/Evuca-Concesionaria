import React from "react";
import "./Home.css"


export function Home() {
    return(
        <div>
            <div className="homeImg">
                <div className="containerHome">
                    <h1>Bienvenido a Evucar</h1>
                    <p>Tu concesionaria online de confianza</p>
                </div>
            </div>
                <div>
                    <div className="seccionBuscar">
                    <h1>Buscar vehiculo por:</h1>
                        <h3>Tipo:</h3>
                        <div className="seccionTipos">
                        <p>Autos</p>
                        <p>Motos</p>
                        <p>Tractores</p>
                        </div>
                    </div>
                    <div className="seccionBuscar">
                        <h3>Marca:</h3>
                        <div className="seccionTipos">
                        <p>Ford</p>
                        <p>Toyota</p>
                        <p>Tesla</p>
                        </div>
                    </div>
                    <div className="seccionBuscar">
                        <h3>Precio:</h3>
                        <div className="seccionTipos">
                        <p>Menos de $200.000</p>
                        <p>Menos de $300.000</p>
                        <p>Mas de $400.000</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Home ;