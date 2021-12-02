import React, {useState, useEffect} from 'react';
import "./index.css"
import {Users} from "./Users/index.jsx"
import {Comments} from "./Comments/index.js"
import ShiftDashboard from "../conponents/ShiftDashboard"
import {getUsers} from "../Firebase/AddUserDb/index"
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const [showUsers, setShowUser] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [showShift, setShowShift] = useState(false);
    const [usersArray, setUsersArray] = useState([]);
    const { user, logout} = useAuth0();
    
    const getUsersAndSet= ()=> {
        getUsers().then(resultado => {
            setUsersArray(resultado)
        })
    }
        useEffect(()=>{
            getUsersAndSet()
        }, [])


    const toggleUsers = () => {
        setShowUser(true);
        setShowComments(false);
    }
    const toggleComments = () => {
        setShowComments(true);
        setShowUser(false);
    }
    const toggleShift = () => {
        setShowShift(true);
        setShowComments(false);
        setShowUser(false);
    }

    useEffect(()=> {
        if(props.blocked && window.location.href !== 'http://localhost:3000/blocked') {
            window.location.replace('http://localhost:3000/blocked')
        }
    })


    return ( 
        <div className="dashboardContainer">
            {user ? usersArray.map(u =>
                u.sub === user.sub ? u.admin ?
                //Esto se renderiza si sos admin
                <div>
                    <div className="dashboardBtnContainer">
                <button
                    onClick={toggleUsers} className="dashboardBtn"> Usuarios</button>
                    
                <button 
                    onClick={toggleComments} className="dashboardBtn">Comentarios</button>
                <button 
                    onClick={toggleShift} className="dashboardBtn">Turnos</button>
            </div>
            <div className="content-dashboard-shift">
                {showUsers && <Users users={usersArray} user={user} logout={logout} getUsersAndSet={getUsersAndSet} />}
                {showComments && <Comments users={usersArray} user={user} getUsersAndSet={getUsersAndSet}  />}
                {showShift && <ShiftDashboard users={usersArray} user={user} getUsersAndSet={getUsersAndSet} />}
            </div>
                </div> :
                //Esto se renderiza si no sos admin
                <div className="noAdminContainer">
                    <div className="noAdminImgContainer">
                    <img  className="noAdminImg" src={`https://cdn.dribbble.com/users/761395/screenshots/6287961/error_401.jpg?compress=1&resize=800x600`} />
                    </div>
                </div> : 
                console.log("No es ese user"))  : console.log("no cargaron los user") }
        </div>
    );
}


function mapStateToProps(state) {
    return {
    blocked: state?.blocked ? state.blocked : false,
    }
}

export default connect(mapStateToProps , null)(Dashboard);
