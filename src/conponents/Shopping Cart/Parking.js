import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeGarage} from '../../actions'
import { useAuth0 } from '@auth0/auth0-react';

const Parking = ({setConfirm}) => {
    const garage = useSelector(state => state.dataGarage);
    const dispatch = useDispatch();
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    //recorrer apiSimpleAutos
    const [autos, setAutos] = useState(garage);
    console.log(autos);
    const [total, setTotal] = useState(0);

    //funcion para sumar los autos
    useEffect(() => {
        const total = autos.reduce((acumulador, auto) => acumulador + auto.precio, 0);
        const precioArs = total.toLocaleString('de-DE')
        setTotal(precioArs);
    }, [autos]);
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
            {
                autos.map(auto => {
                    const cantCar = auto.precio * auto.cantCart;
                    const precioArs = cantCar.toLocaleString('de-DE')
                    return (
                        <div className="shop-body" key={auto.id}>
                            <div className="card-item-header">
                                <div className="count-car">
                                    <i class="fas fa-sort-up"></i>
                                        <span>{auto.cantCart}</span>
                                    <i class="fas fa-sort-down"></i>
                                </div>
                                <img src={auto.img} alt={auto.name}/>
                                <p className="card-marca">{auto.marca}</p>
                                <p className="card-title">{auto.modelo}</p>
                                <button
                                className="btn-eliminar"
                                onClick={() => dispatch(removeGarage(auto.idGarage))}
                                >Sacar del garage</button>
                            </div>
                            <div className="card-item-header">
                                <p>$ {precioArs}</p>
                            </div>
                        </div>
                    )
                })
            }
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