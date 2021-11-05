import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLog} from '../NavStyled';
import './Profile.css';


const Profile = () => {

    const [profile, setProfile] = useState(false);
    const { user,logout } = useAuth0();

    
    const handleProfile = () => {
        setProfile(!profile)
    }
    console.log(user);

    return (
        <>
            <div 
                className="profile"
                onClick={handleProfile}
            >
                <img src={user.picture} alt={user.name} />
            </div>
            {profile ?
                <div className="profile-dropdown">
                    <div className="profile-dropdown-header">
                        <span>Hola!</span>
                        <h3>{user.name}</h3>
                        <ButtonLog 
                            onClick={() => logout({returnTo: window.location.origin})}
                        >Cerrar Seción</ButtonLog>
                    </div>
                </div>
                :
                null
            }
        </>
    );
}

export default Profile;