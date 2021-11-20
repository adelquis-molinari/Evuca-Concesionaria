import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeGarage} from '../../actions'

const Parking = ({setConfirm}) => {
    const garage = useSelector(state => state.dataGarage);
    const dispatch = useDispatch();
    //recorrer apiSimpleAutos
    const [autos, setAutos] = useState(garage); 
    const [total, setTotal] = useState(0);
    //funcion elimina del estado los autos
    const eliminarAuto = (id) => {
        const nuevoEstado = autos.filter(auto => auto.id !== id);
        setAutos(nuevoEstado);
    }
    //funcion para sumar los autos
    useEffect(() => {
        const total = autos.reduce((acumulador, auto) => acumulador + auto.precio, 0);
        setTotal(total);
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
                    return (
                        <div className="shop-body" key={auto.id}>
                            <div className="card-item-header">
                                <img src={auto.img} alt={auto.name}/>
                                <p className="card-marca">{auto.marca}</p>
                                <p className="card-title">{auto.modelo}</p>
                                <button
                                className="btn-eliminar"
                                onClick={() => dispatch(removeGarage(auto.idGarage))}
                                >Sacar del garage</button>
                            </div>
                            <div className="card-item-header">
                                <p>$ {auto.precio}</p>
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
                <button
                className="btn-confirm"
                onClick={() => setConfirm(true)}
                >Confirmar</button>
            </div>
        </>
        );
}

export default Parking;