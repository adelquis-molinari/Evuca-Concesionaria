import React from "react";
import "./Home.css"
import {useState} from "react";

export function Home() {
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
    return(
        <div>
            <div className="containerHome">
                <img src={selectedImage} alt="carrouselImg" className="homeImg"/>
                <h1>Evucar</h1>
                    <p>Concesionaria Online</p>
                <div className="buttonContainer">
                    <button className="btnIzq" onClick={previous}><i class="fas fa-chevron-circle-left"></i></button>
                    <button className="btnDere" onClick={next}><i class="fas fa-chevron-circle-right"></i></button>
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