import React from "react";
import "./articulo.css";
import {connect, useDispatch} from 'react-redux';
import {useState, useEffect} from "react";
import Estrellas from "../Puntaje/estrellas.jsx"
import Comentario from "../Comentario/comentario.jsx"
import {addGarage} from "../../actions"
import { useAuth0 } from '@auth0/auth0-react';
import {addUserComment, getComment} from "../../Firebase/AddUserDb"

export function Articulo(props){
    const dispatch = useDispatch();
    const vehiculoActual = props.dataSimple.filter(vehiculos => vehiculos.id === parseInt(props.match.params.id))
    // Carrusel
    const image = vehiculoActual[0]?.imgDescriptivas
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(image? image[0] : {})
    const [comment, setComent] = useState("");
    const [comments, setComments] = useState([]);
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
    // Precios
    const precioEnDolar = Math.round(vehiculoActual[0]?.precio/100.12).toLocaleString('de-DE')
    const precioArs = vehiculoActual[0]?.precio.toLocaleString('de-DE')

    // Comentario
    const { user, isAuthenticated} = useAuth0();

    const handleChange = (e) => {
        if(user) {
            setComent(e.target.value)
        }
    }
    const handleSubmit = (e) => {
        console.log(comment)
        console.log(user)
        addUserComment(user, comment, vehiculoActual[0].id)
        getComment().then(result => {
                setComments(result)
        })
    }

    useEffect(()=>{getComment().then(result => {
        setComments(result)
    })}, [])

    console.log(comments)
    // (async () => {
    //     const comentarios = await getComment(user)
    //     console.log(comentarios)
    // })()

    // getComment(user).then(resultado => console.log(resultado))

    if (vehiculoActual[0]) {
        return(
    <div>

        <div className="articleContainer">
            <div className="imgContainer">
                <img className="articleBanner" src={vehiculoActual[0].imgBanner} alt="articleBanner"></img>
                <div className="titleArticle">
                    <h1>{vehiculoActual[0].marca} {vehiculoActual[0].modelo}</h1>
                    {vehiculoActual[0].stock > 0 ?
                        <i 
                        onClick={() => dispatch(addGarage(vehiculoActual[0]))}
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
                    vehiculoActual[0].stock > 0 ? 
                    <div className="cantidad">
                        <h5>Cantidad disponible: {vehiculoActual[0].stock}</h5>
                    </div>
                    :
                    null
                }
                <p>{vehiculoActual[0].descripcionDetallada}</p>
            </div>
                <div className="descripcionContainer">
                    <div className="carruselArticle">
                        <img src={selectedImage} alt="carrouselImg" className="carruselImg"/>
                        <div className="buttonContainerArticle">
                            <button className="btnIzqArticle" onClick={previous}><i className="fas fa-chevron-circle-left"></i></button>
                            <button className="btnDereArticle" onClick={next}><i className="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </div>
                        <div className="articlePrecio">
                            <h3>Precio sugerido en pesos:</h3>
                            <p>{`$${precioArs} ARS`}</p>
                            <h3>Precio sugerido en dolares:</h3>
                            <p>{`$${precioEnDolar} USD`}</p>
                            <div className="articleButtons">
                                {/* <a>Reservar</a>
                                <a>Consultar</a> */}
                            </div>
                        </div>
                </div>
        </div>
                <div className="comentariosContainer">
                    {comments.sort((a,b)=> {
                        return b.time - a.time
                    }).map(c => {
                        if(c.id === vehiculoActual[0].id) {
                            return (
                                <Comentario 
                                comentario={c.texto} 
                                nickname={c.nickname} 
                                picture={c.picture} 
                                time={c.time}
                                ></Comentario>
                            )
                        }
                    })}
                </div>
                <div className="hacerComentarioContainer">
                    <p>Agrega un comentario:</p>
                    <textarea onChange={handleChange}></textarea>
                    <a onClick={handleSubmit}>Enviar</a>
                </div>
    </div>
        )
    }else{
        return window.location.href="/"
    }
}

function mapStateToProps(state) {
    return {
    dataSimple: state?.dataSimple ? state.dataSimple : [],
    }
}

export default connect(mapStateToProps)(Articulo)