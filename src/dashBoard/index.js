import React, {useState, useEffect} from 'react';
import "./index.css"
import {Users} from "./Users/index.jsx"
import {Comments} from "./Comments/index.js"
import {getUsers} from "../Firebase/AddUserDb/index"
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
    const [showUsers, setShowUser] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [usersArray, setUsersArray] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false)
    const { user, logout} = useAuth0();

    const toggleUsers = () => {
        setShowUser(true);
        setShowComments(false);
    }
    const toggleComments = () => {
        setShowComments(true);
        setShowUser(false);
    }

    useEffect(()=>{getUsers().then(resultado => {
        setUsersArray(resultado)
    })}, [])

    return ( 
        <div className="dashboardContainer">
            <div className="btn-content-db">
                <button 
                    onClick={toggleUsers}> Usuarios</button>
                <button 
                    onClick={toggleComments}>Comentarios</button>
            </div>
            <div className="content-dashboard-shift">
                {showUsers && <Users users={usersArray} user={user} logout={logout}/>}
                {showComments && <Comments users={usersArray}/>}
            </div>
        </div>
    );
}

export default Dashboard;
