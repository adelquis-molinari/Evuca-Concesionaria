import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

const NavCart = () => {
    const garage = useSelector(state => state?.dataGarage ? state.dataGarage : []);
    return ( 
        <div className="nav-cart">
            <Link to="/shopping-cart" style={{ textDecoration: 'none' }} >
                <i className="fas fa-warehouse garage-nav "></i>
                {
                    garage.length > 0 ?
                    <span className="nav-cart-count">{garage.length}</span>
                    :
                    null
                }
            </Link >
        </div>
    );
}

export default NavCart;