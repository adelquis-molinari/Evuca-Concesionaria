import React from 'react'
import "./login.css"

const Logins = () => {
    return ( 
        <div className= "login-box">
        <img className= "avatar" src="logo png azul.png"/>
        <h1>Iniciar Sesion</h1>
        <form>
            <label >Correo Electrónico</label>
            <input type="text" placeholder="Enter Username"/>

            <label for="password">Contraseña</label>
            <input type="password" placeholder="Enter password"/>

            <input type="Submit" value="Log In"/>

            <a href="#">olvidaste tu contraseña?</a><br/>
            <a href="#">No tienes una cuenta?</a>
        </form>




    </div>
     );
}
 
export default Logins;