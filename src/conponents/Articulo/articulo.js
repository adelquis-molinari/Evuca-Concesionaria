import React from "react";
import "./articulo.css";
import {connect, useDispatch} from 'react-redux';
import {useState} from "react";
import Estrellas from "../Puntaje/estrellas.jsx"
import Comentario from "../Comentario/comentario.jsx"
import {addGarage} from "../../actions"
import {v4 as uuidv4} from 'uuid';


export function Articulo(props){
    const dispatch = useDispatch();
    const vehiculoActual = props.dataDetallada.filter(vehiculos => vehiculos.id === parseInt(props.match.params.id))
    // const [vehiculo, setVehiculo] = useState(
    //     {
    //         id: props.match.params.id,
    //         marca: vehiculoActual[0].marca,
    //         modelo: vehiculoActual[0].modelo,
    //         precio: vehiculoActual[0].precio,
    //         img: vehiculoActual[0].img,
    //         cantidad: 1,
    //     }
    // );
    // console.log(vehiculo);
    // Carrusel
    const image = vehiculoActual[0].imgDescriptivas
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(image[0])
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
    const precioEnDolar = Math.round(vehiculoActual[0].precio/100.12).toLocaleString('de-DE')
    const precioArs = vehiculoActual[0].precio.toLocaleString('de-DE')

    if (vehiculoActual) {
        return(
    <div>

        <div className="articleContainer">
            <div className="imgContainer">
                <img className="articleBanner" src={vehiculoActual[0].imgBanner} alt="articleBanner"></img>
                <div className="titleArticle">
                    <h1>{vehiculoActual[0].marca} {vehiculoActual[0].modelo}</h1>
                    {vehiculoActual[0].cantidad > 0 ?
                        <i 
                        onClick={() => dispatch(addGarage(vehiculoActual))}
                        className="fas fa-warehouse garajeTitulo"></i>
                        :
                            <span>Lo sentimos , no hay {vehiculoActual[0].tipo} disponible</span>
                    }
                    <h2><Estrellas/></h2>   
                </div>
            </div>
            <div className="articleDescripcion">
                <h2>{vehiculoActual[0].Titulo}</h2>
                {
                    vehiculoActual[0].cantidad > 0 ? 
                    <div className="cantidad">
                        <h5>Cantidad disponible: {vehiculoActual[0].cantidad}</h5>
                    </div>
                    :
                    null
                }
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