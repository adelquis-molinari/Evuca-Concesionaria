import React from 'react';
import {Link} from 'react-router-dom';
// import perfilImg from '../../../../img/Imglogin/face4.jpg';
import './index.css';

const NavDashboard = () => {
    return ( 
        <div class="sidebar-dashboard">
        <div class="logo-content">
            <div class="logo">
                <i class="fab fa-slack"></i>
                <div class="logo-name">Coding...</div>
            </div>
            <i class="fas fa-bars" id="btn" ></i>
        </div>
        <ul class="nav-list">
            <li>
                <Link to="/dashboard" >
                    <i class="fas fa-th"></i>
                    <span class="links-name">Dashboard</span>
                </Link>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <Link to="/user" >
                    <i class="far fa-user"></i>
                    <span class="links-name">User</span>
                </Link>
                <span class="tooltip">User</span>
            </li>
            <li>
                <Link to="/messages" >
                    <i class="far fa-comment-alt"></i>
                    <span class="links-name">Messages</span>
                </Link>
                <span class="tooltip">Messages</span>
            </li>
            <li>
                <Link to="/analytics" >
                    <i class="fas fa-chart-pie"></i>
                    <span class="links-name">Analytics</span>
                </Link>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                <Link to="/order" >
                    <i class="fas fa-shopping-cart"></i>
                    <span class="links-name">Order</span>
                </Link>
                <span class="tooltip">Order</span>
            </li>
            <li>
                <Link to="/Setting" >
                    <i class="fas fa-cogs"></i>
                    <span class="links-name">Setting</span>
                </Link>
                <span class="tooltip">Setting</span>
            </li>
        </ul>
        <div class="profile-dashboard-content">
            <div class="profile-dashboard">
                <div class="profile-dashboard-details">
                    {/* <img src={perfilImg} alt="" /> */}
                    <div class="name-job">
                        <div class="name">Peter</div>
                        <div class="job">develop</div>
                    </div>
                </div>
                <i class="fas fa-sign-out-alt" id="log-out"></i>
            </div>
        </div>
    </div>
     );
}
 
export default NavDashboard;