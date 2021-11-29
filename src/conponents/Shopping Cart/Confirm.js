import React from 'react'
import FormBase from '../Form';

const Confirm = () => {
    return ( 
        <>
            <div className="shopHeader">
                    <div className="shopItemHeader">
                        <i className="fas fa-parking active"></i>
                        <h5 className="active" >Parking</h5>
                    </div>
                <span className="shop-span active-span"></span>
                    <div className="shopItemHeader">
                        <i className="fas fa-car active"></i> 
                        <h5 className="active" >Confirmación</h5>
                    </div>
            </div>
            <h1>Confirm</h1>
            <div className="shopForm" >
                <FormBase status="Venta"/>
            </div>
        </>
     );
}
 
export default Confirm;


