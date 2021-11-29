import React, {useState} from 'react'
import './ShoppingCart.css';
import Parking from './Parking';
import Confirm from './Confirm';

const ShoppingCart = () => {
    //estado de comfirmacion de compra
    const [confirm, setConfirm] = useState(false);

    return ( 
        <div className="shop-container">
            
        {
            confirm ?
            <Confirm />
            :
            <Parking setConfirm={setConfirm} />
        }
        </div>

    );
}

export default ShoppingCart;