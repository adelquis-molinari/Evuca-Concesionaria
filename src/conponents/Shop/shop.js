import React from "react";
import "./shop.css"
import {apiSimpleAutos} from "../../Data/apiAutos.js"
import {apiSimpleMotos} from "../../Data/apiMotos.js"
import {apiSimpleTractores} from "../../Data/apiTractores.js"
import ShopCard from "../ShopCard/shopcard.jsx"
import { connect } from 'react-redux';


export function Shop(props) {
    let marcasDeAutos = ["Fiat", "Volkswagen", "Ford", "Peugeot","Renault"]
    let marcasDeMotos = ["Corven","Honda","Yamaha"]
    let marcasDeTractores = ["Deutz","John Deere","New Holland"]
    if (props.cards === "Autos"){
        return(
            <div className="shopContainer">
                {apiSimpleAutos.map(a =><ShopCard
                props = {a}
                />
                )}
            </div>
        )
    }
    if (props.cards === "Motos"){
        return(
            <div className="shopContainer">
                {apiSimpleMotos.map(m =><ShopCard
                props = {m}
                />
                )}
            </div>
        )
    }
    if (props.cards === "Tractores"){
        return(
            <div className="shopContainer">
                {apiSimpleTractores.map(t =><ShopCard
                props = {t}
                />
                )}
            </div>
        )
    }
    if(marcasDeAutos.includes(props.cards)){
        let autosFiltrados = apiSimpleAutos.filter(auto => auto.marca === props.cards)
        return(
            <div className="shopContainer">
                {autosFiltrados.map(a =><ShopCard
                props = {a}
                />
                )}
            </div>
        )
    }
    if(marcasDeMotos.includes(props.cards)){
        let motosFiltradas = apiSimpleMotos.filter(moto => moto.marca === props.cards)
        return(
            <div className="shopContainer">
                {motosFiltradas.map(m =><ShopCard
                props = {m}
                />
                )}
            </div>
        )
    }
    if(marcasDeTractores.includes(props.cards)){
        let tractoresFiltrados = apiSimpleTractores.filter(tractor => tractor.marca === props.cards)
        return(
            <div className="shopContainer">
                {tractoresFiltrados.map(t =><ShopCard
                props = {t}
                />
                )}
            </div>
        )
    }
    else{
        return window.location.href="/"
    }
}

function mapStateToProps(state) {
    return {
    cards: state ? state.cards : [],
    }
}

export default connect(mapStateToProps)(Shop)