import React from "react";
import "./shop.css"
import {apiSimpleAutos} from "../../Data/apiAutos.js"
import {apiSimpleMotos} from "../../Data/apiMotos.js"
import {apiSimpleTractores} from "../../Data/apiTractores.js"
import ShopCard from "../ShopCard/shopcard.jsx"
import { connect } from 'react-redux';


export function Shop(props) {
    const shopId = props.match.params.id;
    console.log(shopId)
    let marcasDeAutos = ["Fiat", "Volkswagen", "Ford", "Peugeot","Renault"]
    let marcasDeMotos = ["Corven","Honda","Yamaha"]
    let marcasDeTractores = ["Deutz","John Deere","New Holland"]
    if (shopId === "Autos"){
        return(
            <div className="shopContainer">
                {apiSimpleAutos.map(a =><ShopCard
                key={a.id}
                props = {a}
                />
                )}
            </div>
        )
    }
    if (shopId === "Motos"){
        return(
            <div className="shopContainer">
                {apiSimpleMotos.map(m =><ShopCard
                key={m.id}
                props = {m}
                />
                )}
            </div>
        )
    }
    if (shopId === "Tractores"){
        return(
            <div className="shopContainer">
                {apiSimpleTractores.map(t =><ShopCard
                key={t.id}
                props = {t}
                />
                )}
            </div>
        )
    }
    if(marcasDeAutos.includes(shopId)){
        let autosFiltrados = apiSimpleAutos.filter(auto => auto.marca === shopId)
        return(
            <div className="shopContainer">
                {autosFiltrados.map(a =><ShopCard
                key={a.id}
                props = {a}
                />
                )}
            </div>
        )
    }
    if(marcasDeMotos.includes(shopId)){
        let motosFiltradas = apiSimpleMotos.filter(moto => moto.marca === shopId)
        return(
            <div className="shopContainer">
                {motosFiltradas.map(m =><ShopCard
                key={m.id}
                props = {m}
                />
                )}
            </div>
        )
    }
    if(marcasDeTractores.includes(shopId)){
        let tractoresFiltrados = apiSimpleTractores.filter(tractor => tractor.marca === shopId)
        return(
            <div className="shopContainer">
                {tractoresFiltrados.map(t =><ShopCard
                key={t.id}
                props = {t}
                />
                )}
            </div>
        )
    }
    if(shopId === "gama baja"){
        let vehiculosFiltrados = props.dataSimple.filter(vehiculo => vehiculo.precio <= 2000000)
        return(
            <div className="shopContainer">
                {vehiculosFiltrados.map(v =><ShopCard
                key={v.id}
                props = {v}
                />
                )}
            </div>
        )
    }
    if(shopId === "gama media"){
        let vehiculosFiltrados = props.dataSimple.filter(vehiculo => vehiculo.precio <= 5000000)
        return(
            <div className="shopContainer">
                {vehiculosFiltrados.map(v =><ShopCard
                key={v.id}
                props = {v}
                />
                )}
            </div>
        )
    }
    if(shopId === "gama alta"){
        let vehiculosFiltrados = props.dataSimple.filter(vehiculo => vehiculo.precio > 5000000)
        return(
            <div className="shopContainer">
                {vehiculosFiltrados.map(v =><ShopCard
                key={v.id}
                props = {v}
                />
                )}
            </div>
        )
    }
    // else{
    //     return window.location.href="/"
    // }
}

function mapStateToProps(state) {
    return {
    dataSimple: state?.dataSimple ? state.dataSimple : [],
    }
}

export default connect(mapStateToProps)(Shop)