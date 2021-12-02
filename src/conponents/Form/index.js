import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import Calendar from 'react-calendar';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';
import InputSelect from '../InputSelect';
import { useSelector } from 'react-redux';
import './index.css';
import 'react-calendar/dist/Calendar.css';

const FormBase = ({status}) => {
    const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/,
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastname: /^[a-zA-Z0-9_-]{4,16}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        city: /^[a-zA-Z0-9_-]{4,16}$/,
		phone: /^\d{7,14}$/,
		password: /^.{4,12}$/,
        textarea: /[$%&|<>#]/,
	}
    
    const { user } = useAuth0();
    const [time, setTime] = useState(0);
    const [render, setRender] = useState(true);
    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        city: false,
        phone: false,
        campos: false,
        textarea: false,
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
        fecha: '',
        textarea: '',

    });
    const [redirect, setRedirect] = useState(false);
    const {name, lastname,email, city, phone, textarea } = users;

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El campo ${current} no es valido`,
                backdrop: `
                    rgba(0,0,123,0.4)
                `
            });
        }
    }
    // calendario
    const [value, setValue] =useState(new Date());
    // extraer sunday
    useEffect(() => {
    if(value.getDay() === 0){
        setRender(false);
        Swal.fire({
            icon: 'info',
            title: 'Que bueno es Domingo',
            text: 'Tomate un descanso',
            backdrop: `
            rgba(0,0,123,0.4)
            `
        });
    }else{
        setRender(true);
    }
    }, [value]);
    
    useEffect(() => {
        const day = value.getDate();
        const month = value.getMonth() + 1;
        const year = value.getFullYear();
        const date = day + '/' + month + '/' + year;
        setUsers({
            ...users,
            fecha: date
        })
    }, []);
    // 25 diciembre no se puede cambiar el status
    useEffect(() => {
        if(value.getDate() === 25 && value.getMonth() === 11 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '25 feriado',
                backdrop: `
                    rgba(0,0,123,0.4)
                `
            });
            setRender(false);
        }else{setRender(true);}
    },[]);
    const months = useSelector(state => state?.months? state.months: 1);
    const currentDay = new Date()
    let nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 1));
    if(months === "2"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 1));
    }else if(months === "3"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 2));
    }else if(months === "4"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 3));
    }else if(months === "5"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 4));
    }else if(months === "6"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 5));
    }else if(months === "12"){
        nextMonth = new Date(currentDay.setMonth(currentDay.getMonth() + 11));
    }

    // enviar datos
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || city.trim() === '' || phone.trim() === ''|| textarea.trim() === ''){
            setError({
                ...error,
                campos: true,
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
            textarea: false,
        });
        // setear datos
        setUsers({
            id: user.sub,
            name: '',
            lastname: '',
            email: '',
            city: '',
            phone: '',
            textarea: '',
            nickName: user.nickname,
            picture: user.picture,
            status: status,
            fecha: time,
        });
        // redirect to parking componentes
        setRedirect(true);
    }
    // render
    
if(render){
    return ( 
        <form className='form-content' onSubmit={handleSubmit} >
            <fieldset className='field'>
                <div className='form-group-date'>
                    <Calendar
                        minDate={new Date()}
                        maxDate={nextMonth}
                        onChange={setValue}
                        value={value}
                    />
                </div>
                <div className='form-group'>
                    < InputSelect 
                        setTime={setTime}
                    />
                </div>
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
                <div className="form-group">
                    <label>Descripción</label>
                    <textarea
                        onChange={handleChange}
                        type="textarea"
                        name="textarea"
                        className="form-textarea"
                        placeholder="Ej. mi consulta es..."
                        value={textarea}
                    />
                </div>
                {error.name && ErrorMessage('name', 'Nombre')}
                {error.lastname && ErrorMessage('lastname', 'Apellido')}
                {error.email && ErrorMessage('email', 'Email')}
                {error.city && ErrorMessage('city', 'Ciudad')}
                {error.phone && ErrorMessage('phone', 'Telefono')}
                {error.campos && ErrorMessage('campos', ' ')}
                {error.textarea && ErrorMessage('textarea', 'Descripción')}
            <button type="submit" className="btn-submit">Submit</button>
            </fieldset>
            {redirect && <Redirect to='/' />}
        </form>
    );
}else{
    return (
        <div className='form-group-date'>
            <Calendar
                minDate={new Date()}
                maxDate={nextMonth}
                onChange={setValue}
                value={value}
            />
        </div>
    )
}
}

export default FormBase















;