import React from "react";
import "./Home.css"
import {useState, useEffect} from "react";
import TypeCard from "../TypeCard/typeCard.jsx"
import motoIcon from "../../img/iconos/iconMoto.png"
import tractorIcon from "../../img/iconos/iconTractor.png"
import Outstanding from "../Outstanding/Outstanding"
import { connect } from "react-redux";


export function Home(props) {

//  Js del carrusel
const image = ["https://es.theepochtimes.com/assets/uploads/2019/04/26c01f3789d0436e8702340cb0a43076.jpg","https://es.chevrolet.com/content/dam/chevrolet/na/us/english/index/about/new-roads-issue-12/teasers/01-images/farmtofreeway-teaser-16x9.jpg?imwidth=960","https://s1.1zoom.me/b6365/276/Fields_Sunrises_and_sunsets_Tractor_521258_2560x1440.jpg"]
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

useEffect(()=> {
    if(props.blocked && window.location.href != 'https://evuca-concesionaria.vercel.app/blocked') {
        window.location.replace('https://evuca-concesionaria.vercel.app/blocked')
    }
})

    return(
        <div>
            <div className="containerHome">
                <img src={selectedImage} alt="carrouselImg" className="homeImg"/>
                <h1>Evucar</h1>
                    <p>Concesionaria Online</p>
                <div className="buttonContainer">
                    <button className="btnIzq" onClick={previous}><i className="fas fa-chevron-circle-left"></i></button>
                    <button className="btnDere" onClick={next}><i className="fas fa-chevron-circle-right"></i></button>
                </div>
            </div>
            
                <div className="containerBuscar">
                    <div className="seccionBuscar">
                        <h2>Buscar vehiculo por tipo:</h2>
                        <div className="seccionTipos">
                            <TypeCard
                                img={"https://www.carmax.com/cars/images/type-icons/sedans.svg"}
                                text={"Autos"}
                            />
                            <TypeCard
                            img={motoIcon}
                            text={"Motos"}
                            />
                            <TypeCard
                            img={tractorIcon}
                            text={"Tractores"}
                        />
                        </div>
                    </div>
                </div>
                    <Outstanding />
                <div className="containerBuscar">
                    <div className="seccionBuscar">
                    <h2>Buscar vehiculo por marca:</h2>
                        <div className="seccionTipos">
                            <TypeCard
                                img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAeFBMVEX////6WgD9vpv/9O7/+fX+4tL7bBz7div7ciX8rH7//Pv/8en6aBb7iUn6XQT7hkT+5tn8jlH9uJH9yq38p3f9sYb7eTD8mmP+2cX+3cr7gz/+zrP8om/+6d36Yw7+1L39xaX8llz8m2X9upT7fjf9x6n8pHL8jU8EA8TBAAADtElEQVR4nO2b2ZKqMBBAEwRlk01QkEVRRv//D6+4sgSFGTCdW31eeTmVantLJARBEARBEARBEARBEARBEARBEARBEARBkIkINwpvhV+g0aPB22EwuksXPzJvi6EYc0rtHW+LoYQZpVbu8NYYiGdRSuf+jLfHMHJaspB03iJDMNZXa2sZi6QdZfRGLlLWlu7S1ApS3i79yR/WVBUntOXiaU23K942fYlf0tQ6R7x1+qAfVVrFPMBvSELbog3MI+xikyYt5ZJ1DLePkqU5S7nEhdpH7ZZdyiUJxGJjsCOjEto+uGLjqe+VqTkvJN6SdcJtl6tlqduNL+2U1JiByn1GkrVks8vJuqcgjoyZDLCYz1g5Iw/BBXCV0GYExRng4b5IE1Ygr0eIXifQPGkSAmbOGMOZGHFidv26J2A+1jju7LRPiXQ05zGb0VmkFe3UNDpZPKLzFScoJg4Ua5KypwRuZy82ApOVasebzPs0lXOJsk+m+GFO6lySxsnY5+1O7Xz1HjcRut8aqozQX4yUCO1vDoK6oq1HSITrr++lI235xwBXuezSleD8h/POQh7OJZF0+OV5j1+8h+CsPk3VTH54OpfshqdBj7fz5bTfbl1gOl+6WOYQ1YV14O17JxhQcFQwS9G4fxpZgJEmSvFZF5w0MXIBpYkeCChNyP5TXVdNeNIkXL91tqI9QGliuO+c90QvAEoT8qbO7C+fd5QWALeNUldgB9fPLl1yFmSisZ2129eU2nz12JyYzpvH50PBU64L5n1K/pxiFZ+nXAcGq72ubgvgJY9LfmA0fN+fvAfitZ1V0LdAJXnLOYN+zoS0bq9MqJfzL5zmNGDBdyar5kYB2A03k2Y9FMGZbOrOGm+fPsj1ejj5qn8UlFqPl/PW6ceq6mxDrNgMqsOtCvfNVw29Wg+zRIyTNuqT7VqIR5hKo8UzRUjTK9okAR/Y+qYlTZfQezyd0UzTOfe7ig/o4YGhDb+WK1p73nJBvQtkkvqt2XYhQFMtt56FWUfeTj2Qveb6Q4Bn8xekxrRYCFEeSZzXrM09b6F+7OoZEOJGjEVUe3dsg1/b3HG0ylZBFSD33ZhVErcVALwIYCN7r0Y7FyL3XdGP54e1GKPBndXj6isTYTR4Ej8y4EaYwC4JN7dd3xbiH4Y60VP/us+ZC/N/yRvGqcyAlgZ+eqwjBwsqxGhQZ3a0RSqPT/ZLIO/GBqHHLj2LFiKl9rLg9uj098ihL1juQxAEQRAEQRAEQRAEQRAEQRAE+T/4B6ImLFSgukhgAAAAAElFTkSuQmCC"}
                                text={"Corven"}
                            />
                            <TypeCard
                                img={"https://cdn.pixabay.com/photo/2021/02/02/00/36/logo-5972332_960_720.png"}
                                text={"Deutz"}
                            />
                        <TypeCard
                            img={"https://neomotor.sport.es/media/fiat-logo.x36093.jpg"}
                            text={"Fiat"}
                            type={"Autos"}
                        />
                        <TypeCard
                            img={"https://img.motor16.com/marcas/ford.png"}
                            text={"Ford"}
                            type={"Autos"}
                        />
                        <TypeCard
                            img={"https://pngimg.com/uploads/car_logo/car_logo_PNG1643.png"}
                            text={"Honda"}
                        />
                        <TypeCard
                            img={"https://a.allegroimg.com/original/11750f/e61873214922941889d1f2c20c6e/Emblemat-LOGO-JOHN-DEERE-6090-6135-3420-20cm"}
                            text={"John Deere"}
                        />
                        <TypeCard
                            img={"https://i.pinimg.com/originals/e4/04/0b/e4040bcf152d4fdd622968fda01e5d57.jpg"}
                            text={"New Holland"}
                        />
                        <TypeCard
                            img={"https://amp.autopista.es/uploads/static/autopista/upload/images/imagegallery/imagegallery-50027-5982eb6c1d182.jpg"}
                            text={"Peugeot"}
                            type={"Autos"}
                        />
                        <TypeCard
                            img={"https://i.pinimg.com/originals/bd/27/17/bd27177f73b821cf0bab0d459e97197a.jpg"}
                            text={"Renault"}
                            type={"Autos"}
                        />
                        <TypeCard
                            img={"https://i.blogs.es/6f2bf0/vw/1366_2000.jpg"}
                            text={"Volkswagen"}
                            type={"Autos"}
                        />
                        <TypeCard
                            img={"http://www.yamaha-motor.com.sv/moduloCotizacionPiezas/img/Logo_-_Yamaha_Shield_-_001.png"}
                            text={"Yamaha"}
                            />
                        {/* <TypeCard
                            img={"http://www.yamaha-motor.com.sv/moduloCotizacionPiezas/img/Logo_-_Yamaha_Shield_-_001.png"}
                            text={"Uno mas"}
                            /> */}
                        </div>
                    </div>
                    <div className="seccionBuscar">
                    <h2>Buscar vehiculo por precio:</h2>
                        <div className="seccionTipos">
                        <TypeCard
                            img={"https://images.vexels.com/media/users/3/146881/isolated/preview/c9358db7338035de67f494f317a1ef61-monedas.png"}
                            text={"Menos de $2.000.000"}
                            link={"gama baja"}
                            
                        />
                        <TypeCard
                            img={"https://img.freepik.com/vector-gratis/dolar-billetes-aislados-blanco_68708-401.jpg?size=626&ext=jpg"}
                            text={"Menos de $5.000.000"}
                            link={"gama media"}
                        />
                        <TypeCard
                            img={"https://media.istockphoto.com/vectors/vector-dollar-and-coins-sign-money-dollar-icon-currency-dollar-bill-vector-id1198508991?k=20&m=1198508991&s=170667a&w=0&h=bclBktNfoXgADlp9onjEZan8mVif0xjm9z_c60vOfHc="}
                            text={"Mas de $5.000.000"}
                            link={"gama alta"}
                        />
                        </div>
                    </div>
                </div>
                <div>
                </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
    blocked: state?.blocked ? state.blocked : false,
    }
}

export default connect(mapStateToProps , null)(Home);