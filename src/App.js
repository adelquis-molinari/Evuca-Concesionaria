import React, {Fragment, useEffect} from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import Footer from './conponents/Footer/Footer';
import Search from './conponents/Search/Search';
import Articulo from "./conponents/Articulo/articulo.js"
import Shop from './conponents/Shop/shop.js';
import ShoppingCart from './conponents/Shopping Cart/ShoppoingCard';
import UploadData from './conponents/UploadData/UploadData'
// import { apiSimpleAutos, apiDetalladaAutos } from '../src/Data/apiAutos';
// import { apiSimpleMotos, apiDetalladaMotos } from "../src/Data/apiMotos";
// import { apiSimpleTractores, apiDetalladaTractores } from "../src/Data/apiTractores";
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
  return (
    <Fragment>
      <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop/:id" component={Shop}/> 
        <Route  path="/article/:id" component={Articulo}/> 
        <Route  path="/shopping-cart" render={()=> <ShoppingCart />}/> 
        <Route  path="/contact" render={() => <Contacto/>}/>
        <Route  path="/admim/upload-data" render={()=> <UploadData />}/> 
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