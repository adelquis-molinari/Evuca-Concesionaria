import React, {Fragment, useEffect} from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import './App.css';
import Footer from './conponents/Footer/Footer';
import Search from './conponents/Search/Search';
import Shop from './conponents/Shop/shop.js'
import { apiSimpleAutos, apiDetalladaAutos } from '../src/Data/apiAutos';
import { apiSimpleMotos, apiDetalladaMotos } from "../src/Data/apiMotos";
import { apiSimpleTractores, apiDetalladaTractores } from "../src/Data/apiTractores";
import { loadData } from './actions';
import {connect} from 'react-redux'



export function App(props) {
  useEffect(()=> {
    const payloadData = localStorage.getItem('my-data');
    if(payloadData) {
      props.loadData(payloadData)
    }
  }, [])

  useEffect(()=> {
      const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
      const dataDetallada = apiDetalladaAutos.concat(apiDetalladaMotos, apiDetalladaTractores);
      const myData = {
        dataSimple: dataSimple,
        dataDetallada: dataDetallada
      }
      console.log(myData,'datasimple')
      localStorage.setItem('my-data', JSON.stringify(myData))
  })

  return (
    <Fragment>
      <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop/:id" component={Shop}/> 
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
