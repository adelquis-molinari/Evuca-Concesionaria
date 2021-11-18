import React from "react";
import "./articulo.css";
import {connect} from 'react-redux';
import {useState} from "react";
import Estrellas from "../Puntaje/estrellas.jsx"
import Comentario from "../Comentario/comentario.jsx"

export function Articulo(props){
    const vehiculoActual = props.dataDetallada.filter(vehiculos => vehiculos.id === parseInt(props.match.params.id))
    // Carrusel
    const image = vehiculoActual[0]?.imgDescriptivas
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(image? image[0] : {})
    const previous = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : image.length -1;
        setSelectedImage(image[nextIndex])
        setSelectedIndex(nextIndex);
    }
    const next = () => {
        const condition = selectedIndex < image.length-1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(image[nextIndex])
        setSelectedIndex(nextIndex);
    }
    
    const precioEnDolar = Math.round(vehiculoActual[0]?.precio/100.12).toLocaleString('de-DE')
    const precioArs = vehiculoActual[0]?.precio.toLocaleString('de-DE')
    if (vehiculoActual[0]) {
        return(
    <div>

        <div className="articleContainer">
            <div className="imgContainer">
                <img className="articleBanner" src={vehiculoActual[0].imgBanner} alt="articleBanner"></img>
                <div className="titleArticle">
                    <h1>{vehiculoActual[0].marca} {vehiculoActual[0].modelo} <i className="fas fa-warehouse garajeTitulo"></i></h1>
                    <h1><Estrellas/></h1>   
                </div>
            </div>
            <div className="articleDescripcion">
                <h1>{vehiculoActual[0].Titulo}</h1>
                <p>{vehiculoActual[0].descripcion}</p>
            </div>
                <div className="descripcionContainer">
                    <div className="carruselArticle">
                        <img src={selectedImage} alt="carrouselImg" className="carruselImg"/>
                        <div className="buttonContainerArticle">
                            <button className="btnIzqArticle" onClick={previous}><i class="fas fa-chevron-circle-left"></i></button>
                            <button className="btnDereArticle" onClick={next}><i class="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </div>
                        <div className="articlePrecio">
                            <h3>Precio sugerido en pesos:</h3>
                            <p>{`$${precioArs} ARS`}</p>
                            <h3>Precio sugerido en dolares:</h3>
                            <p>{`$${precioEnDolar} USD`}</p>
                            <div className="articleButtons">
                                <a>Reservar</a>
                                <a>Consultar</a>
                            </div>
                        </div>
                </div>
        </div>
                <div className="comentariosContainer">
                    <Comentario></Comentario>
                </div>
    </div>
        )
    }else{
        return window.location.href="/"
    }
}

function mapStateToProps(state) {
    return {
    dataDetallada: state?.dataDetallada ? state.dataDetallada : [],
    }
}

export default connect(mapStateToProps)(Articulo)