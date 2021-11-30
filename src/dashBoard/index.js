import React, {useState, useEffect} from 'react';
import "./index.css"
import {Users} from "./Users/index.jsx"
import {Comments} from "./Comments/index.js"
import {getUsers} from "../Firebase/AddUserDb/index"
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

const Dashboard = (props) => {
    const [showUsers, setShowUser] = useState(true);
    const [showComments, setShowComments] = useState(false);
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

    useEffect(()=> {
        if(props.blocked && window.location.href != 'http://localhost:3000/blocked') {
            window.location.replace('http://localhost:3000/blocked')
        }
    })


    return ( 
        <div className="dashboardContainer">
            <div className="btn-content-db">
                <button 
                    onClick={toggleUsers}> Usuarios</button>
                <button 
                    onClick={toggleComments}>Comentarios</button>
            </div>
            <div className="content-dashboard-shift">
                {showUsers && <Users users={usersArray} user={user} logout={logout} getUsersAndSet={getUsersAndSet} />}
                {showComments && <Comments users={usersArray} user={user} getUsersAndSet={getUsersAndSet}  />}
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
    blocked: state?.blocked ? state.blocked : false,
    }
}

export default connect(mapStateToProps , null)(Dashboard);
