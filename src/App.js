import React, {Fragment} from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import './App.css';
import Footer from './conponents/Footer/Footer';
import Search from './conponents/Search/Search';
import Shop from './conponents/Shop/shop.js'
import Articulo from "./conponents/Articulo/articulo.js"

export function App() {
  return (
    <Fragment>
      <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop" render={() => <Shop/>}/> 
        <Route  path="/article:id" component={Articulo}/> 
      <Footer />
    </Fragment>
  );
}

export default App;
