import React from 'react';
import "./About.css"


export const About = () => {

return(
    <div className = "containerAgencia">
        <img className= "nosotros" src={"https://res.cloudinary.com/evucar/image/upload/v1638478102/Agencias/banner1_jfnuia.jpg"} alt="banner" />
        <br></br>
        <div className= "evucarAbout">
        <h2>¿POR QUÉ EVUCAR?</h2>
        <h3>"Estamos a tu lado para ayudarte a encontrar nuevos caminos."</h3>
        <p>Ir más allá del confort, la seguridad y la tecnología para ofrecer posibilidades inéditas.
Ese es nuestro propósito. Y aun después de 100 años de historia, seguimos motivados
y enfocados en crear soluciones innovadoras que te ayudarán a encontrar el camino que buscás.</p>
        </div>
        <br></br>
        <br></br>
        <div className= "valoramos">
        <h2 >¿QUÉ VALORAMOS?</h2>
        </div>

        <img className= "iconos" src={"https://res.cloudinary.com/evucar/image/upload/v1638478100/Agencias/banner2_npw1ah.png"} alt="banner2" />
        <div className= "excelencia">
        <div>
        <h3>Excelencia</h3>
        <p>Actuamos con integridad. Somos conducidos por el ingenio y la
innovación. Tenemos el coraje de decir y de hacer lo que es difícil. Cada
uno de nosotros toma la responsabilidad de los resultados, avanza por
la mejora continua y está decidido a vencer.</p>
        </div>
        <div>
        <h3>Relacionamientos</h3>
        <p>Nuestro éxito depende de las relaciones dentro y fuera de la compañía.
Fomentamos el pensamiento diverso y la colaboración del mundo para crear
grandes experiencias para el consumidor.</p>
        </div>
        </div>
        <h2>¿COMÓ NOS COMPORTAMOS?</h2>
        <img className= "vendedor1" src={"https://res.cloudinary.com/evucar/image/upload/v1638478101/Agencias/banner4_dqxbjy.jpg"} alt="banner3"/>
        <br></br>
        <ul>
            <li><h3>Pensamos en el cliente</h3>
            <p>Consideramos las necesidades de los clientes en todo lo que hacemos.</p></li>
            <li><h3>Miramos hacia el frente</h3>
        <p>Tomamos decisiones ahora con la visión a largo plazo en mente</p> 
        <p>y anticipamos lo que está por venir.</p></li>
            <li> <h3>Somos audaces</h3>
        <p>Hablamos con respeto, intercambiamos comentarios y</p> 
        <p>compartimos ideas sin miedo.</p></li>
            <li><h3>Ganar con integridad</h3>
        <p>Tenemos el deseo implacable de ganar y hacerlo con integridad.</p></li>
            <li><h3>Innovamos ahora</h3>
        <p>Vemos las cosas no como son, sino cómo podrían ser.</p></li>
            <li><h3>Un equipo</h3>
        <p>Colaboramos con las áreas funcionales que alcanzan</p> 
        <p>resultados para toda la empresa.</p></li>
            <li><h3>Está en uno</h3>
        <p>Soy responsable de la seguridad, de mis propias acciones,</p> 
        <p>comportamientos y resultados.</p></li>
        </ul>
    </div>
    )
    }

export default About() ;