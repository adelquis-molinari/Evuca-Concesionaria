import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';
import { Redirect } from 'react-router-dom';
import ErrorSpan from '../ErrorSpan';
const FormBase = ({status}) => {
    const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        lastname: /^[a-zA-Z0-9_-]{4,16}$/,
		mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        city: /^[a-zA-Z0-9_-]{4,16}$/,
		phone: /^\d{7,14}$/, // 7 a 14 numeros.
		password: /^.{4,12}$/, // 4 a 12 digitos.
	}

    const { user } = useAuth0();
    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        city: false,
        phone: false,
        campos: false,
    });
    const [users, setUsers] = useState({
        id: user.sub,
        name: '',
        lastname: '',
        email: '',
        city: '',
        phone: '',
        nickName: user.nickname,
        picture: user.picture,
        status: status,
        updatedAt: user.updated_at,
    });
    const [redirect, setRedirect] = useState(false);
    const {name, lastname,email, city, phone} = users;
    //validar los campos
    const handleChange = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        });
    }
    const handleBlur = (e) => {
        const {name, value} = e.target;
        if(value.trim() === ''){
            setError({
                ...error,
                [name]: true,
            });
        }
        if(expressions[name].test(value)){
            setError({
                ...error,
                [name]: false,
            });
        }else{
            setError({
                ...error,
                [name]: true,
            });
        }
    }
    const ErrorMessage = (name, current) => {
        if(error[name]){
            return <ErrorSpan error={`El ${current} es requerido`}/>
        }
    }
    // enviar datos
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || city.trim() === '' || phone.trim() === ''){
            setError({
                ...error,
                campos: true
            });
            return;
        }
        // reset fields to false
        setError({
            name: false,
            lastname: false,
            email: false,
            city: false,
            phone: false,
            campos: false,
        });
        
        // enviar datos
        console.log(users);
        // setear datos
        setUsers({
            id: user.sub,
            name: '',
            lastname: '',
            email: '',
            city: '',
            phone: '',
            nickName: user.nickname,
            picture: user.picture,
            status: status,
            updatedAt: user.updated_at,
        });
        // redirect to parking componentes
        setRedirect(true);
    }
    return ( 
        <form className='form-content' onSubmit={handleSubmit} >
            <fieldset className='field'>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text" 
                        name="name"
                        className="form-control" 
                        placeholder="Ej. Cristian"
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="text"
                        name="lastname"
                        className="form-control" 
                        placeholder="Ej. Lucatti"
                        value={lastname}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="Ej. CristianL@gmail.com"
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Ciudad</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="text" 
                        className="form-control"
                        name="city"
                        placeholder="Ej. Rosario Santa Fe"
                        value={city}
                    />
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="number"
                        className="form-control"
                        name="phone"
                        placeholder="Ej. 4444-4444"
                        value={phone}
                    />
                </div>
                {error.name && ErrorMessage('name', 'Nombre')}
                {error.lastname && ErrorMessage('lastname', 'Apellido')}
                {error.email && ErrorMessage('email', 'Email')}
                {error.city && ErrorMessage('city', 'Ciudad')}
                {error.phone && ErrorMessage('phone', 'Telefono')}
                {error.campos && <ErrorSpan error='Todos los campos son obligatorios' />}
            <button type="submit" className="btn-submit">Submit</button>
            </fieldset>
            {redirect && <Redirect to='/' />}
        </form>
    );
}

export default FormBase















;