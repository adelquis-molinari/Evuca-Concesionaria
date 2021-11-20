import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

const FormBase = ({status}) => {

    const { user } = useAuth0();
    // const [error, setError] = useState('');
    const [users, setUsers] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        nickName: user.nickname,
        picture: user.picture,
        status: status,
        updatedAt: user.updated_at,
    });
    console.log(user);

    return ( 
        <form className='form-content'>
            <fieldset className='field'>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    placeholder="Ej. Cristian"/>
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                    type="text"
                    name="lastname"
                    className="form-control" 
                    placeholder="Ej. Cristian"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type="mail" 
                    className="form-control" 
                    placeholder="Ej. Cristian"/>
                </div>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                    type="name" 
                    className="form-control" 
                    placeholder="Ej. Cristian"/>
                </div>
            <button type="submit" className="btn-submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default FormBase















;