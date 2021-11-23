import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addAmount, removeAmount, removeGarage} from '../../actions'
import { useAuth0 } from '@auth0/auth0-react';

const Parking = ({setConfirm}) => {
    const garage = useSelector(state => state.dataGarage);
    const dispatch = useDispatch();
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const [total, setTotal] = useState(0);

    //funcion para sumar los autos
    useEffect(() => {
        //funcion para sumar cantidad de autos
        const total = garage.reduce((acumulador, auto) => acumulador + (auto.precio*auto.cantCart) , 0);
        const precioArs = total.toLocaleString('de-DE')
        setTotal(precioArs);
    }, [garage]);
    return ( 
        <>
            <div className="shopHeader">
                    <div className="shopItemHeader">
                        <i className="fas fa-parking active"></i>
                        <h5 className="active" >Parking</h5>
                    </div>
                <span className="shop-span no-active-span"></span>
                    <div className="shopItemHeader">
                        <i className="fas fa-car no-active"></i> 
                        <h5 className="no-active" >Confirmación</h5>
                    </div>
            </div>
            <div className="shopping-container">
                {
                    garage.map(auto => {
                        const cantCar = auto.precio * auto.cantCart;
                        const precioArs = cantCar.toLocaleString('de-DE')
                        return (
                            <div className="shop-body" key={auto.id}>
                                <div className="card-item-header">
                                    <div className="count-car">
                                        <i 
                                        onClick={() => {
                                            if(auto.stock === 1 ){
                                                return;
                                            }else{
                                                dispatch(addAmount(auto));
                                            }
                                        }}
                                        class="fas fa-sort-up"></i>
                                            <span>{auto.cantCart}</span>
                                        <i 
                                        onClick={() => {
                                            if(auto.cantCart > 1){
                                                dispatch(removeAmount(auto));
                                            }
                                        }}
                                        class="fas fa-sort-down"></i>
                                    </div>
                                    <img src={auto.img} alt={auto.name}/>
                                    <p className="card-marca">{auto.marca}</p>
                                    <p className="card-title">{auto.modelo}</p>
                                    <button
                                    className="btn-eliminar"
                                    onClick={() => dispatch(removeGarage(auto))}
                                    >Sacar del garage</button>
                                </div>
                                <div className="card-item-header">
                                    <p>$ {precioArs}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="shop-total">
                <p className="title-total">Total</p>
                <div>
                    <p className="title-total">$ {total} </p>
                </div>
            </div>
            <div className="shop-confirm">
                <h2>Estas a solo un paso más</h2>
                {
                    isAuthenticated ?
                    <button
                    className="btn-confirm"
                    onClick={() => setConfirm(true)}
                    >Confirmar</button>
                    :
                    <button
                    className="btn-confirm"
                    onClick={() => loginWithRedirect() }
                    >Logeate para confirmar</button>
                }
            </div>
        </>
        );
}

export default Parking;