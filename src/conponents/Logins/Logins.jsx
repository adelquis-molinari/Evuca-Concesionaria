import React from 'react'
import "./login.css"
import Logo from '../../img/Imglogin/logoAzul.png'

const Logins = () => {
    return (
        <div>
            <div className= "login-box">
                <img className= "avatar" src={Logo} />
                <h2>Iniciar Sesion</h2>
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
        </div>
    );
}
export default Logins;