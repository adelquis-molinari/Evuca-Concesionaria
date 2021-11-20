import React, {Fragment, useEffect} from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import Footer from './conponents/Footer/Footer';
import Search from './conponents/Search/Search';
import Articulo from "./conponents/Articulo/articulo.js"
import Shop from './conponents/Shop/shop.js';
import ShoppingCart from './conponents/Shopping Cart/ShoppoingCard';
import { apiSimpleAutos, apiDetalladaAutos } from '../src/Data/apiAutos';
import { apiSimpleMotos, apiDetalladaMotos } from "../src/Data/apiMotos";
import { apiSimpleTractores, apiDetalladaTractores } from "../src/Data/apiTractores";
import { loadData } from './actions';
import {connect} from 'react-redux'
import  Contacto from "./conponents/Contacto/Contact"



export function App(props) {
  useEffect(()=> {
    const payloadData = localStorage.getItem('my-data');
    if(payloadData) {
      props.loadData(payloadData)
    }
  },[])

  useEffect(()=> {
      const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
      const dataDetallada = apiDetalladaAutos.concat(apiDetalladaMotos, apiDetalladaTractores);
      const myData = {
        dataSimple: dataSimple,
        dataDetallada: dataDetallada,
        dataGarage: [],
        stock:true,
      }
      // console.log(myData,'datasimple')
      localStorage.setItem('my-data', JSON.stringify(myData))
  },[])

  return (
    <Fragment>
      <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop/:id" component={Shop}/> 
        <Route  path="/article/:id" component={Articulo}/> 
        <Route  path="/shopping-cart" render={()=> <ShoppingCart />}/> 
        <Route  path="/contact" render={() => <Contacto/>}/>
        <Footer />
    </Fragment>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: data => dispatch(loadData(data)),
  }
}

export default connect(null , mapDispatchToProps)(App);