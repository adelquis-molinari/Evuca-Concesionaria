import React from "react";
import "./articulo.css";
import {connect, useDispatch} from 'react-redux';
import {useState, useEffect} from "react";
import BannerEstrellas from "../BannerEstrellas/bannerEstrellas.jsx"
import Comentario from "../Comentario/comentario.jsx"
import {addGarage, getRating} from "../../actions"
import { useAuth0 } from '@auth0/auth0-react';
import {addUserComment, getComment, getUsers} from "../../Firebase/AddUserDb"
import Swal from 'sweetalert2';
import ComentarioEstrellas from "../ComentarioPuntaje/comentarioPuntaje.jsx"

export function Articulo(props){
    const dispatch = useDispatch();
    const vehiculoActual = props.dataSimple.filter(vehiculos => vehiculos.id === parseInt(props.match.params.id))
    const todosLosPuntajes = []
    const image = vehiculoActual[0]?.imgDescriptivas

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(image? image[0] : {})
    const [comment, setComent] = useState("");
    const [comments, setComments] = useState([]);
    // Carrusel
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
        if(isAuthenticated === false) {
            e.target.value = null;
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Es necesario que inicies sesión para publicar tu mensaje`,
            });
        }
    }
    const handleSubmit = (e) => {
        if(props.rating > 0 && comment != "") {
            addUserComment(user, comment, vehiculoActual[0].id, props.rating)
            getComment().then(result => {
                    setComments(result)
                    props.getRating(0);
                    setComent("");
                    let comentario = document.querySelector(".comentarioInput")
                    comentario.value = ""
            })
        }
        if(comment === ""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Es necesario que escribas un comentario para publicar tu mensaje`,
            });
        }
        if(props.rating == 0){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Es necesario un puntaje para publicar tu mensaje`,
            });
        }
    }

    useEffect(()=> {
        if(props.blocked && window.location.href != 'http://localhost:3000/blocked') {
            window.location.replace('http://localhost:3000/blocked')
        }
    })
    

    useEffect(()=>{getComment().then(result => {
        setComments(result)
    })}, [])
    comments.map(comment => {
        if(comment.id === vehiculoActual[0].id) {
            todosLosPuntajes.push(comment.puntaje)
        }
    })
        
    const puntajePromedio = todosLosPuntajes.length > 0 ? todosLosPuntajes.reduce((previous, current) => current += previous) / todosLosPuntajes.length : 0
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
                    <h2><BannerEstrellas rating={Math.round(puntajePromedio)}/></h2>   
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
                                <div>
                                <Comentario 
                                comentario={c.texto} 
                                nickname={c.nickname} 
                                picture={c.picture} 
                                time={c.time}
                                puntaje={c.puntaje}
                                ></Comentario>
                                </div>
                            )
                        }
                    })}
                <div className="hacerComentarioContainer">
                    <p>Agrega un comentario:</p>
                    <textarea maxlength="99" className="comentarioInput" onChange={handleChange}></textarea>
                    <ComentarioEstrellas user={user} id={vehiculoActual[0].id}></ComentarioEstrellas>
                    <bottom className="comentarioEnviar" onClick={handleSubmit}>Enviar</bottom>
                </div>
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
    rating: state?.rating ? state.rating : [],
    blocked: state?.blocked ? state.blocked : false,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getRating: rating => dispatch(getRating(rating))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articulo)